import { mkdir, readFile, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");
const indent = (content, spaces) =>
  content
    .trimEnd()
    .split("\n")
    .map((line) => (line ? " ".repeat(spaces) + line : ""))
    .join("\n");

const [html, css, js] = await Promise.all([
  read("index.html"),
  read("css/style.css"),
  read("js/main.js"),
]);

const stylesheet = '<link rel="stylesheet" href="css/style.css" />';
const script = '<script src="js/main.js" defer></script>';

if (!html.includes(stylesheet) || !html.includes(script)) {
  throw new Error("Expected source asset references are missing.");
}

// Keep the output readable; the script must run after the DOM is available.
const output = html
  .replace(stylesheet, `<style>\n${indent(css, 6)}\n    </style>`)
  .replace(`    ${script}\n`, "")
  .replace("  </body>", `    <script>\n${indent(js, 6)}\n    </script>\n  </body>`);

await mkdir(new URL("dist/", root), { recursive: true });
await writeFile(new URL("dist/index.html", root), output, "utf8");
console.log("Built dist/index.html");
