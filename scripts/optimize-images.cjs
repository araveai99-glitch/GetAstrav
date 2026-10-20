const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function run() {
  console.log('Optimizing all desktop and mobile assets...');

  // -------------------------------------------------------------
  // 1. DESKTOP HERO PANORAMIC BACKDROP (Highest Priority LCP)
  // -------------------------------------------------------------
  const desktopHeroPng = path.join(__dirname, '../public/assets/golden_hour_glass_tech_hub.png');
  
  // 1440 Desktop AVIF (Lighthouse target: save ~57.4 KiB from original 199.5 KiB -> target ~142 KiB)
  const avif1440Dest = path.join(__dirname, '../public/assets/golden_hour_glass_tech_hub_1440.avif');
  await sharp(desktopHeroPng)
    .resize(1440, 694, { fit: 'cover' })
    .avif({ quality: 67, effort: 6 })
    .toFile(avif1440Dest);
  console.log('Generated golden_hour_glass_tech_hub_1440.avif (1440x694):', fs.statSync(avif1440Dest).size, 'bytes');

  // 1440 Desktop WebP fallback
  const webp1440Dest = path.join(__dirname, '../public/assets/golden_hour_glass_tech_hub_1440.webp');
  await sharp(desktopHeroPng)
    .resize(1440, 694, { fit: 'cover' })
    .webp({ quality: 78, effort: 6 })
    .toFile(webp1440Dest);
  console.log('Generated golden_hour_glass_tech_hub_1440.webp (1440x694):', fs.statSync(webp1440Dest).size, 'bytes');

  // 1806 4K / Ultra-wide AVIF
  const avif1806Dest = path.join(__dirname, '../public/assets/golden_hour_glass_tech_hub.avif');
  await sharp(desktopHeroPng)
    .resize(1806, 871, { fit: 'cover' })
    .avif({ quality: 65, effort: 6 })
    .toFile(avif1806Dest);
  console.log('Generated golden_hour_glass_tech_hub.avif (1806x871):', fs.statSync(avif1806Dest).size, 'bytes');

  // 1806 4K / Ultra-wide WebP
  const webp1806Dest = path.join(__dirname, '../public/assets/golden_hour_glass_tech_hub.webp');
  await sharp(desktopHeroPng)
    .resize(1806, 871, { fit: 'cover' })
    .webp({ quality: 78, effort: 6 })
    .toFile(webp1806Dest);
  console.log('Generated golden_hour_glass_tech_hub.webp (1806x871):', fs.statSync(webp1806Dest).size, 'bytes');

  // -------------------------------------------------------------
  // 2. FOUNDER DESK SCENE (Displayed at ~707x395 on desktop, ~667x372 on mobile)
  // Original: 52.6 KiB. Target savings: 26.1 KiB -> target ~26-27 KiB
  // -------------------------------------------------------------
  const founderSrc = path.join(__dirname, '../public/assets/founder_desk_scene_hq.jpg');
  const founderDesktopDest = path.join(__dirname, '../public/assets/founder_desk_scene_desktop.webp');
  const founderMobileDest = path.join(__dirname, '../public/assets/founder_desk_scene_mobile.webp');
  const founderHqDest = path.join(__dirname, '../public/assets/founder_desk_scene_hq.webp');

  // Desktop 1x variant (750x419, exactly covers 707x395)
  await sharp(founderSrc)
    .resize(750, 419, { fit: 'cover' })
    .webp({ quality: 75, effort: 6 })
    .toFile(founderDesktopDest);
  console.log('Generated founder_desk_scene_desktop.webp (750x419):', fs.statSync(founderDesktopDest).size, 'bytes');

  // Mobile variant (680x380, covers mobile viewports)
  await sharp(founderSrc)
    .resize(680, 380, { fit: 'cover' })
    .webp({ quality: 75, effort: 6 })
    .toFile(founderMobileDest);
  console.log('Generated founder_desk_scene_mobile.webp (680x380):', fs.statSync(founderMobileDest).size, 'bytes');

  // High-DPI 2x variant (1000x558)
  await sharp(founderSrc)
    .resize(1000, 558, { fit: 'cover' })
    .webp({ quality: 75, effort: 6 })
    .toFile(founderHqDest);
  console.log('Generated founder_desk_scene_hq.webp (1000x558):', fs.statSync(founderHqDest).size, 'bytes');

  // -------------------------------------------------------------
  // 3. BRANDING & FOOTER LOGOS
  // -------------------------------------------------------------
  // Powered By Arav (Rendered at ~203x68)
  const poweredPng = path.join(__dirname, '../public/assets/powered-by-arav.png');
  const poweredWebpDest = path.join(__dirname, '../public/assets/powered-by-arav.webp');
  const poweredSmWebpDest = path.join(__dirname, '../public/assets/powered-by-arav-sm.webp');

  // 1x standard display variant (203x68)
  await sharp(poweredPng)
    .resize(203, 68, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 85, effort: 6 })
    .toFile(poweredSmWebpDest);
  console.log('Generated powered-by-arav-sm.webp (203x68):', fs.statSync(poweredSmWebpDest).size, 'bytes');

  // 2x Retina display variant (380x127)
  await sharp(poweredPng)
    .webp({ quality: 85, effort: 6 })
    .toFile(poweredWebpDest);
  console.log('Optimized powered-by-arav.webp (380x127):', fs.statSync(poweredWebpDest).size, 'bytes');

  // Arav Ribbon Logo (Rendered at ~56x58)
  const aravLogoPng = path.join(__dirname, '../public/assets/arav-logo.png');
  const aravLogoWebpDest = path.join(__dirname, '../public/assets/arav-logo.webp');
  const aravLogoSmWebpDest = path.join(__dirname, '../public/assets/arav-logo-sm.webp');

  // 1x standard display variant (112x116)
  await sharp(aravLogoPng)
    .resize(112, 116, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 85, effort: 6 })
    .toFile(aravLogoSmWebpDest);
  console.log('Generated arav-logo-sm.webp (112x116):', fs.statSync(aravLogoSmWebpDest).size, 'bytes');

  // 2x Retina display variant (160x166)
  await sharp(aravLogoPng)
    .webp({ quality: 85, effort: 6 })
    .toFile(aravLogoWebpDest);
  console.log('Optimized arav-logo.webp (160x166):', fs.statSync(aravLogoWebpDest).size, 'bytes');

  // -------------------------------------------------------------
  // 4. MOBILE HERO & STEP ASSETS
  // -------------------------------------------------------------
  const heroPng = path.join(__dirname, '../public/assets/golden_hour_tech_hub_mobile.png');
  const heroSmDest = path.join(__dirname, '../public/assets/golden_hour_tech_hub_mobile_sm.webp');
  await sharp(heroPng)
    .resize(680, 454, { fit: 'cover', position: 'center' })
    .webp({ quality: 78, effort: 6 })
    .toFile(heroSmDest);
  console.log('Generated golden_hour_tech_hub_mobile_sm.webp (680x454):', fs.statSync(heroSmDest).size, 'bytes');

  const steps = ['step1_goals', 'step2_milestones', 'step3_rollups', 'step4_control'];
  for (const step of steps) {
    const pngPath = path.join(__dirname, `../public/assets/steps/${step}.png`);
    const webpPath = path.join(__dirname, `../public/assets/steps/${step}.webp`);
    await sharp(pngPath)
      .webp({ quality: 80, effort: 6 })
      .toFile(webpPath);
    console.log(`Optimized ${step}.webp:`, fs.statSync(webpPath).size, 'bytes');
  }

  console.log('Optimization complete!');
}

run().catch(console.error);
