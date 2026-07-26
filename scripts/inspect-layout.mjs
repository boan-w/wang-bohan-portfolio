import { chromium } from "playwright";

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://127.0.0.1:4327/", { waitUntil: "networkidle" });
const before = await page.evaluate(() => ({
  scrollHeight: document.documentElement.scrollHeight,
  sections: [...document.querySelectorAll("section")].map((section) => {
    const rect = section.getBoundingClientRect();
    return {
      id: section.id,
      top: Math.round(rect.top),
      height: Math.round(rect.height),
      text: section.textContent?.trim().slice(0, 80),
      reveal: [...section.querySelectorAll(".reveal")].slice(0, 3).map((el) => ({
        opacity: getComputedStyle(el).opacity,
        text: el.textContent?.trim().slice(0, 40),
      })),
    };
  }),
}));
await page.evaluate(async () => {
  for (let y = 0; y <= document.documentElement.scrollHeight; y += 520) {
    window.scrollTo(0, y);
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
});
const after = await page.evaluate(() => ({
  scrollY: window.scrollY,
  sections: [...document.querySelectorAll("section")].map((section) => {
    const rect = section.getBoundingClientRect();
    return {
      id: section.id,
      top: Math.round(rect.top),
      height: Math.round(rect.height),
      reveal: [...section.querySelectorAll(".reveal")].slice(0, 3).map((el) => ({
        opacity: getComputedStyle(el).opacity,
        className: el.className,
        text: el.textContent?.trim().slice(0, 40),
      })),
    };
  }),
}));
await browser.close();
console.log(JSON.stringify({ before, after }, null, 2));
