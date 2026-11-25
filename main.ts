// One-Line Office Joke Laugh-Off
// make.fun competition u-suzy-one-line-office-joke-laugh-off-f574ac73
// Writes exactly one line (<=200 chars) to /output/entry.txt
//
// The joke: an HR happiness survey with only one permitted answer.
// Setup names a familiar office ritual; the punchline flips it — the
// "survey" measures nothing, it mandates the answer. One read, no
// printer, no "this meeting could have been an email", no Monday coffee.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;

const ENTRY =
  "HR sent a survey asking how happy we are, and the only multiple-choice answer was 'Very.'";

// Self-check: the entry must be exactly one line and within the limit,
// otherwise fail loudly instead of writing a bad entry.
if (ENTRY.includes("\n") || ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `Invalid entry: expected one line of 1-${MAX_CHARS} chars, got ${ENTRY.length} chars`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
