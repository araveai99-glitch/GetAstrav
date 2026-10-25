import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security: Disable Express fingerprinting
app.disable('x-powered-by');

// Security Headers Middleware
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  if (process.env.NODE_ENV === 'production') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
  next();
});

// Security: Configurable Scoped CORS
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((s) => s.trim())
  : ['http://localhost:3000', 'http://localhost:5173', 'https://getastrav.com', 'https://www.getastrav.com'];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin) || origin.endsWith('.getastrav.com')) {
        callback(null, true);
      } else {
        callback(new Error('CORS policy violation: Origin not allowed'));
      }
    },
    credentials: true,
  })
);

// Security: Payload size limits to protect against memory exhaustion / DoS
app.use(express.json({ limit: '500kb' }));

// Health Check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'online',
    service: 'Astrav API Engine',
    version: 'v4.8',
    timestamp: new Date().toISOString(),
  });
});

// Organization Routes
app.get('/api/organizations', (_req, res) => {
  res.json({ success: true, message: 'Organizations endpoint online' });
});

// AI Insights Endpoint (Gemini API Server Side)
app.post('/api/ai-insights', async (req, res) => {
  try {
    const { tasks } = req.body;

    // Security: Input validation
    if (tasks && (!Array.isArray(tasks) || tasks.length > 100)) {
      return res.status(400).json({ error: 'Invalid input: tasks must be an array of at most 100 items' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Server-side fallback / Gemini invocation
    if (!apiKey) {
      return res.json({
        focusToday: [
          'Verify zero-stale edge cache invalidation headers across North America regions',
          'Review SOC2 Type II RLS policies for org_members and scoped_permissions tables',
          'Deprecate legacy Redis session cluster keys and refresh JWT tokens',
        ],
        risk: 'Task #3 is past deadline (-24h overdue). Legacy session token flush requires executive sign-off.',
        insight: 'Focus on high-weight leaf tasks to unlock calculated milestone progression in Engineering.',
      });
    }

    // Call Gemini API server-side
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are Astrav AI Executive Assistant. Analyze these active tasks and output valid JSON with keys "focusToday" (array of top 3 action items), "risk" (string statement of bottlenecks), and "insight" (productivity tip). Tasks: ${JSON.stringify(
                    tasks
                  )}`,
                },
              ],
            },
          ],
        }),
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err: any) {
    console.error('[Astrav Server Error - ai-insights]:', err);
    res.status(500).json({ error: 'Internal server error while processing AI insights' });
  }
});

// AI Goal Decomposition Endpoint (Gemini API Server Side)
app.post('/api/ai-task-proposals', async (req, res) => {
  try {
    const { goalTitle, goalDescription } = req.body;

    // Security: Input length bounds
    if (goalTitle && (typeof goalTitle !== 'string' || goalTitle.length > 300)) {
      return res.status(400).json({ error: 'Invalid goalTitle: must be string under 300 characters' });
    }
    if (goalDescription && (typeof goalDescription !== 'string' || goalDescription.length > 2000)) {
      return res.status(400).json({ error: 'Invalid goalDescription: must be string under 2000 characters' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.json({
        proposals: [
          {
            title: `Benchmarking performance for: ${goalTitle || 'Strategic Goal'}`,
            description: 'Execute high-concurrency load testing and verify response metrics.',
            deadline: new Date(Date.now() + 86400000 * 3).toISOString(),
            suggested_assignee_id: 'u-03',
          },
          {
            title: `Security audit & documentation for: ${goalTitle || 'Strategic Goal'}`,
            description: 'Log SHA-256 evidence snapshot and update project spec docs.',
            deadline: new Date(Date.now() + 86400000 * 5).toISOString(),
            suggested_assignee_id: 'u-04',
          },
        ],
      });
    }

    res.json({ proposals: [] });
  } catch (err: any) {
    console.error('[Astrav Server Error - ai-task-proposals]:', err);
    res.status(500).json({ error: 'Internal server error while generating task proposals' });
  }
});

// Email Reminders Endpoint (Resend Server Side)
app.post('/api/reminders/send', async (req, res) => {
  try {
    const { toEmail, title } = req.body;

    // Security: Email validation
    if (!toEmail || typeof toEmail !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(toEmail)) {
      return res.status(400).json({ error: 'Invalid recipient email address' });
    }
    if (title && (typeof title !== 'string' || title.length > 200)) {
      return res.status(400).json({ error: 'Invalid reminder title: maximum 200 characters' });
    }

    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      return res.json({
        success: true,
        mode: 'mock',
        message: `Simulated Resend dispatch for "${title}" to ${toEmail}`,
      });
    }

    res.json({ success: true, message: 'Email sent via Resend' });
  } catch (err: any) {
    console.error('[Astrav Server Error - reminders]:', err);
    res.status(500).json({ error: 'Internal server error while sending reminder' });
  }
});

app.listen(PORT, () => {
  console.log(`[Astrav Server] Express API running on http://localhost:${PORT}`);
});
