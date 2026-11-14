import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const [slug, output] = process.argv.slice(2);
if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  throw new Error("Usage: node scripts/unpack.mjs <component-slug> [output-directory]");
}

const directory = output ?? join("examples", slug);
const bundle = await readFile(new URL("../snippets/" + slug + ".txt", import.meta.url), "utf8");
const markers = bundle.includes("// --- src/")
  ? /^\/\/ (Example\.tsx)$|^\/\/ --- (src\/[A-Za-z0-9._/-]+\.(?:tsx?|css)) ---$/gm
  : /^\/\/ ([A-Za-z0-9._-]+\.(?:tsx?|css))$/gm;
const normalized = bundle.replace(/\r\n/g, "\n");
const headers = [...normalized.matchAll(markers)];
if (!headers.length) throw new Error("No files found in the source bundle");

for (const [index, header] of headers.entries()) {
  const name = header[1] ?? header[2];
  if (name.split("/").some((segment) => segment === ".." || segment === ".")) throw new Error("Invalid source path: " + name);
  const source = normalized.slice(header.index + header[0].length, headers[index + 1]?.index)
    .replace(/^\/\/ Dependencies:.*$/gm, "").trim();
  const filename = join(directory, name);
  await mkdir(dirname(filename), { recursive: true });
  await writeFile(filename, source + "\n", { flag: "wx" });
}
console.log("Extracted " + headers.length + " files to " + directory);
