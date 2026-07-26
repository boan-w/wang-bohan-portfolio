import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("output/screenshots");
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});

const viewports = [
  [1440, 900],
  [1280, 800],
  [1024, 768],
  [768, 1024],
  [430, 932],
  [390, 844],
  [375, 667],
];

const results = [];

for (const [width, height] of viewports) {
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  const messages = [];
  page.on("console", (msg) => {
    if (["error", "warning"].includes(msg.type())) messages.push(`${msg.type()}: ${msg.text()}`);
  });
  page.on("pageerror", (err) => messages.push(`pageerror: ${err.message}`));

  await page.goto("http://127.0.0.1:4327/", { waitUntil: "networkidle" });
  await page.mouse.click(20, 20);
  await page.evaluate(async () => {
    for (let y = 0; y <= document.documentElement.scrollHeight; y += Math.max(240, window.innerHeight * 0.65)) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 45));
    }
    window.scrollTo(0, 0);
  });
  const metrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    title: document.title,
    nav: document.querySelectorAll(".nav-links a").length,
    email: document.querySelector(".email-address")?.textContent?.trim(),
    langHref: document.querySelector("[data-lang-link]")?.getAttribute("href"),
  }));
  await page.screenshot({ path: path.join(outDir, `home-${width}x${height}.png`), fullPage: true });

  await page.goto("http://127.0.0.1:4327/zh/", { waitUntil: "networkidle" });
  await page.mouse.click(20, 20);
  await page.evaluate(async () => {
    for (let y = 0; y <= document.documentElement.scrollHeight; y += Math.max(240, window.innerHeight * 0.65)) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 45));
    }
    window.scrollTo(0, 0);
  });
  const zhMetrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    headline: document.querySelector(".hero-headline")?.textContent?.trim(),
  }));
  await page.screenshot({ path: path.join(outDir, `zh-${width}x${height}.png`), fullPage: true });

  results.push({
    viewport: `${width}x${height}`,
    enOverflow: metrics.scrollWidth > metrics.clientWidth,
    zhOverflow: zhMetrics.scrollWidth > zhMetrics.clientWidth,
    title: metrics.title,
    nav: metrics.nav,
    email: metrics.email,
    langHref: metrics.langHref,
    zhHeadline: zhMetrics.headline,
    console: messages,
  });
  await context.close();
}

const reducedContext = await browser.newContext({
  viewport: { width: 390, height: 844 },
  reducedMotion: "reduce",
});
const reducedPage = await reducedContext.newPage();
await reducedPage.goto("http://127.0.0.1:4327/", { waitUntil: "networkidle" });
const reduced = await reducedPage.evaluate(() => ({
  reduce: matchMedia("(prefers-reduced-motion: reduce)").matches,
  revealVisible: [...document.querySelectorAll(".reveal")].slice(0, 5).map((el) => getComputedStyle(el).opacity),
}));
await reducedPage.screenshot({ path: path.join(outDir, "reduced-motion-390x844.png"), fullPage: true });
await reducedContext.close();

await browser.close();
const report = { results, reduced, screenshots: outDir };
await writeFile("audits/browser-qa.json", JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
