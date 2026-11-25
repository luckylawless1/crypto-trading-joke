// Laugh Track: The Crypto Trading Joke Contest
// (make.fun bounty u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
//
// Writes a single original one-line joke about crypto/trading life to
// /output/entry.txt. The gate requires UTF-8 text of 1-200 characters,
// not only whitespace.
//
// The joke: a true, specific observation (seed phrases kept on paper are
// the standard self-custody advice) with a surprise turn — the security
// worked so well it locked out its own owner. No recycled HODL /
// bought-the-top cliche, no borrowed line: written for this entry.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I wrote my seed phrase on paper so hackers couldn't steal it, then lost the paper — turns out the most secure crypto wallet is the one even I can't open.";

// The grader mounts /output; allow an override only for local testing.
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

function main(): void {
  // Create the output root if it is missing, and clear only its contents —
  // never remove the mounted root directory itself.
  mkdirSync(OUTPUT_DIR, { recursive: true });
  for (const name of readdirSync(OUTPUT_DIR)) {
    rmSync(join(OUTPUT_DIR, name), { recursive: true, force: true });
  }

  const text = JOKE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const outPath = join(OUTPUT_DIR, "entry.txt");
  writeFileSync(outPath, text, "utf8");
  // Read back what was written and confirm it is byte-identical to the
  // intended entry, so a bad write can never silently pass the gate.
  const written = readFileSync(outPath, "utf8");
  if (written !== text) {
    throw new Error("entry.txt read-back does not match the intended entry");
  }
  console.log(`wrote entry.txt (${text.length} chars): ${text}`);
}

main();
