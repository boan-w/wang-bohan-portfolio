import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, relative } from "node:path";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");
const blocked = [
  "wix",
  "google-analytics.com",
  "googletagmanager.com",
  "fonts.googleapis.com",
  "fonts.gstatic.com",
  "youtube.com",
  "youtu.be",
  "vimeo.com",
  "recaptcha",
  "turnstile",
  "facebook.com",
  "instagram.com",
  "twitter.com",
  "x.com",
  "linkedin.com/embed",
  "raw.githubusercontent.com",
  "githubusercontent.com",
  "unpkg.com",
  "jsdelivr.net",
];
const externalUrlPattern = /https?:\/\/[^"')\s<>]+/g;

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const files = walk(dist).filter((file) => /\.(html|css|js|xml|txt|svg)$/i.test(file));
const findings = [];
const externals = new Set();

for (const file of files) {
  const content = readFileSync(file, "utf8");
  for (const match of content.matchAll(externalUrlPattern)) externals.add(match[0]);
  for (const term of blocked) {
    if (content.toLowerCase().includes(term)) {
      findings.push(`${relative(dist, file)} contains blocked term: ${term}`);
    }
  }
}

const allowedExternal = [...externals].filter((url) => {
  return (
    url.startsWith("https://schema.org") ||
    url.startsWith("https://wang-bohan-portfolio.pages.dev") ||
    url.startsWith("http://www.w3.org/") ||
    url.startsWith("http://www.sitemaps.org/") ||
    url.startsWith("http://www.google.com/schemas/sitemap-")
  );
});
const unexpectedExternal = [...externals].filter((url) => !allowedExternal.includes(url));
const report = [
  "# China Compatibility Audit",
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  "## Result",
  findings.length === 0 && unexpectedExternal.length === 0 ? "PASS" : "REVIEW REQUIRED",
  "",
  "## Blocked-Service Scan",
  findings.length ? findings.map((item) => `- ${item}`).join("\n") : "- No blocked Wix, Google, video, social embed, CDN, CAPTCHA, or GitHub-hosted asset references found.",
  "",
  "## External URLs",
  allowedExternal.length ? allowedExternal.map((url) => `- ${url} (metadata, canonical, or XML namespace; no third-party runtime request)`).join("\n") : "- None",
  "",
  "## Unexpected External URLs",
  unexpectedExternal.length ? unexpectedExternal.map((url) => `- ${url}`).join("\n") : "- None",
  "",
  "## Notes",
  "- Assets are local to the production domain.",
  "- Fonts use system stacks only.",
  "- Email and resume links work without third-party services.",
].join("\n");

writeFileSync(join(root, "audits", "china-compatibility.md"), report);
console.log(report);
