import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('public/assets');

async function optimize() {
  console.log('--- Starting Image Optimization ---');

  // 1. Mobile Hero Image
  const mobileHeroSrc = path.join(assetsDir, 'golden_hour_tech_hub_mobile.png');
  if (fs.existsSync(mobileHeroSrc)) {
    const origStats = fs.statSync(mobileHeroSrc);
    console.log(`Original golden_hour_tech_hub_mobile.png: ${(origStats.size / 1024 / 1024).toFixed(2)} MB`);

    // Full 1306x871 WebP (quality 82, effort 6)
    const mobileWebpOut = path.join(assetsDir, 'golden_hour_tech_hub_mobile.webp');
    await sharp(mobileHeroSrc)
      .webp({ quality: 82, effort: 6 })
      .toFile(mobileWebpOut);
    const webpStats = fs.statSync(mobileWebpOut);
    console.log(`Created golden_hour_tech_hub_mobile.webp (1306x871): ${(webpStats.size / 1024).toFixed(1)} KB (-${((1 - webpStats.size / origStats.size) * 100).toFixed(1)}%)`);

    // Smaller mobile variant 800x534 (sharp & crisp for 375px/390px/430px @ 2x)
    const mobileSmWebpOut = path.join(assetsDir, 'golden_hour_tech_hub_mobile_sm.webp');
    await sharp(mobileHeroSrc)
      .resize(800, 534, { fit: 'cover' })
      .webp({ quality: 80, effort: 6 })
      .toFile(mobileSmWebpOut);
    const smWebpStats = fs.statSync(mobileSmWebpOut);
    console.log(`Created golden_hour_tech_hub_mobile_sm.webp (800x534): ${(smWebpStats.size / 1024).toFixed(1)} KB (-${((1 - smWebpStats.size / origStats.size) * 100).toFixed(1)}%)`);

    // AVIF variant (optional high-efficiency)
    const mobileAvifOut = path.join(assetsDir, 'golden_hour_tech_hub_mobile.avif');
    await sharp(mobileHeroSrc)
      .avif({ quality: 75, effort: 5 })
      .toFile(mobileAvifOut);
    const avifStats = fs.statSync(mobileAvifOut);
    console.log(`Created golden_hour_tech_hub_mobile.avif: ${(avifStats.size / 1024).toFixed(1)} KB`);
  }

  // 2. Desktop Hero Image (golden_hour_glass_tech_hub.png)
  const desktopHeroSrc = path.join(assetsDir, 'golden_hour_glass_tech_hub.png');
  if (fs.existsSync(desktopHeroSrc)) {
    const origStats = fs.statSync(desktopHeroSrc);
    console.log(`Original golden_hour_glass_tech_hub.png: ${(origStats.size / 1024 / 1024).toFixed(2)} MB`);

    const desktopWebpOut = path.join(assetsDir, 'golden_hour_glass_tech_hub.webp');
    await sharp(desktopHeroSrc)
      .webp({ quality: 82, effort: 6 })
      .toFile(desktopWebpOut);
    const webpStats = fs.statSync(desktopWebpOut);
    console.log(`Created golden_hour_glass_tech_hub.webp: ${(webpStats.size / 1024).toFixed(1)} KB (-${((1 - webpStats.size / origStats.size) * 100).toFixed(1)}%)`);

    const desktop1440WebpOut = path.join(assetsDir, 'golden_hour_glass_tech_hub_1440.webp');
    await sharp(desktopHeroSrc)
      .resize(1440, null, { withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(desktop1440WebpOut);
    const webp1440Stats = fs.statSync(desktop1440WebpOut);
    console.log(`Created golden_hour_glass_tech_hub_1440.webp: ${(webp1440Stats.size / 1024).toFixed(1)} KB (-${((1 - webp1440Stats.size / origStats.size) * 100).toFixed(1)}%)`);

    const desktopAvifOut = path.join(assetsDir, 'golden_hour_glass_tech_hub.avif');
    await sharp(desktopHeroSrc)
      .avif({ quality: 78, effort: 6 })
      .toFile(desktopAvifOut);
    const avifStats = fs.statSync(desktopAvifOut);
    console.log(`Created golden_hour_glass_tech_hub.avif: ${(avifStats.size / 1024).toFixed(1)} KB`);

    const desktop1440AvifOut = path.join(assetsDir, 'golden_hour_glass_tech_hub_1440.avif');
    await sharp(desktopHeroSrc)
      .resize(1440, null, { withoutEnlargement: true })
      .avif({ quality: 78, effort: 6 })
      .toFile(desktop1440AvifOut);
    const avif1440Stats = fs.statSync(desktop1440AvifOut);
    console.log(`Created golden_hour_glass_tech_hub_1440.avif: ${(avif1440Stats.size / 1024).toFixed(1)} KB`);
  }

  // 3. Founder Desk Scene (founder_desk_scene_hq.jpg)
  const deskSrc = path.join(assetsDir, 'founder_desk_scene_hq.jpg');
  if (fs.existsSync(deskSrc)) {
    const origStats = fs.statSync(deskSrc);
    console.log(`Original founder_desk_scene_hq.jpg: ${(origStats.size / 1024).toFixed(1)} KB`);

    const deskWebpOut = path.join(assetsDir, 'founder_desk_scene_hq.webp');
    await sharp(deskSrc)
      .webp({ quality: 80, effort: 6 })
      .toFile(deskWebpOut);
    const webpStats = fs.statSync(deskWebpOut);
    console.log(`Created founder_desk_scene_hq.webp: ${(webpStats.size / 1024).toFixed(1)} KB (-${((1 - webpStats.size / origStats.size) * 100).toFixed(1)}%)`);
  }

  // 4. Arav Logo (arav-logo.png: 985x1024 -> displayed at ~67x70)
  const logoSrc = path.join(assetsDir, 'arav-logo.png');
  if (fs.existsSync(logoSrc)) {
    const origStats = fs.statSync(logoSrc);
    console.log(`Original arav-logo.png: ${(origStats.size / 1024).toFixed(1)} KB`);

    // Retina 3x resize (200x208) with alpha channel preserved
    const logoWebpOut = path.join(assetsDir, 'arav-logo.webp');
    await sharp(logoSrc)
      .resize(200, 208, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 90, effort: 6 })
      .toFile(logoWebpOut);
    const webpStats = fs.statSync(logoWebpOut);
    console.log(`Created arav-logo.webp: ${(webpStats.size / 1024).toFixed(1)} KB (-${((1 - webpStats.size / origStats.size) * 100).toFixed(1)}%)`);
  }

  // 5. Powered by Arav (powered-by-arav.png: 1024x342 -> displayed at ~189x63)
  const poweredSrc = path.join(assetsDir, 'powered-by-arav.png');
  if (fs.existsSync(poweredSrc)) {
    const origStats = fs.statSync(poweredSrc);
    console.log(`Original powered-by-arav.png: ${(origStats.size / 1024).toFixed(1)} KB`);

    // Retina 2x resize (380x127) with alpha channel preserved
    const poweredWebpOut = path.join(assetsDir, 'powered-by-arav.webp');
    await sharp(poweredSrc)
      .resize(380, 127, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 90, effort: 6 })
      .toFile(poweredWebpOut);
    const webpStats = fs.statSync(poweredWebpOut);
    console.log(`Created powered-by-arav.webp: ${(webpStats.size / 1024).toFixed(1)} KB (-${((1 - webpStats.size / origStats.size) * 100).toFixed(1)}%)`);
  }

  console.log('--- Image Optimization Complete ---');
}

optimize().catch(err => {
  console.error(err);
  process.exit(1);
});
