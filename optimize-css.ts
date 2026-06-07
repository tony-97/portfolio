#!/usr/bin/env node

import { readdir, readFile, writeFile } from "fs/promises";

import Beasties from "beasties";

const path = "out";

const beasties = new Beasties({
  inlineFonts: true, // Next.js does this with inlineCss.
  path,
  preloadFonts: false, // Done by Next.js.
  mergeStylesheets: true,
  preload: "media",
  pruneSource: true, // Keep false if using global Tailwind CSS!
});

// Emulates a basic glob matching strategy recursively
const entries = await readdir(path, { recursive: true });
const htmlFiles = entries
  .filter((file) => file.endsWith(".html"))
  .map((file) => `${path}/${file}`);

for (const file of htmlFiles) {
  console.log(`Inlining critical CSS into ${file}`);
  const input = await readFile(file, "utf8");
  const output = await beasties.process(input);
  await writeFile(file, output, "utf8");
}
