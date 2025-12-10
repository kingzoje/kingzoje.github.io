import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIST_PUBLIC = path.join(ROOT, "dist", "public");
const DOCS = path.join(ROOT, "docs");

console.log("Building for GitHub Pages...\n");

execSync("npm run build", { stdio: "inherit", cwd: ROOT });

if (fs.existsSync(DOCS)) {
  fs.rmSync(DOCS, { recursive: true });
}

fs.cpSync(DIST_PUBLIC, DOCS, { recursive: true });

const indexPath = path.join(DOCS, "index.html");
let html = fs.readFileSync(indexPath, "utf-8");
html = html.replace(/src="\/assets\//g, 'src="./assets/');
html = html.replace(/href="\/assets\//g, 'href="./assets/');
fs.writeFileSync(indexPath, html);

fs.writeFileSync(path.join(DOCS, ".nojekyll"), "");

console.log("\n✅ Static build complete! Files are in the /docs folder.");
console.log("Push to GitHub and enable Pages from Settings > Pages > Source: main branch, /docs folder.");
