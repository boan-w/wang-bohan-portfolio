import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, relative } from "node:path";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const files = walk(dist);
const html = files.filter((file) => file.endsWith(".html"));
const assetSet = new Set(files.map((file) => "/" + relative(dist, file).replaceAll("\\", "/")));
const issues = [];

for (const file of html) {
  const content = readFileSync(file, "utf8");
  const refs = [...content.matchAll(/(?:src|href)="([^"]+)"/g)].map((m) => m[1]);
  for (const ref of refs) {
    if (ref.startsWith("http") || ref.startsWith("mailto:") || ref.startsWith("#")) continue;
    if (ref === "/" || ref === "/zh/") continue;
    const normalized = ref.split("#")[0].split("?")[0];
    if (!assetSet.has(normalized) && !assetSet.has(normalized.replace(/\/$/, "/index.html"))) {
      issues.push(`${relative(dist, file)} references missing asset ${ref}`);
    }
  }
  if (!content.includes('rel="canonical"')) issues.push(`${relative(dist, file)} missing canonical`);
  if (!content.includes('application/ld+json')) issues.push(`${relative(dist, file)} missing structured data`);
  if (!content.includes('class="skip-link"')) issues.push(`${relative(dist, file)} missing skip link`);
}

const report = [
  "# Static QA Report",
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  issues.length ? "REVIEW REQUIRED" : "PASS",
  "",
  issues.length ? issues.map((issue) => `- ${issue}`).join("\n") : "- No missing local assets, canonical gaps, structured-data gaps, or skip-link gaps detected.",
].join("\n");

writeFileSync(join(root, "audits", "static-qa.md"), report);
console.log(report);
