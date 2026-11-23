// Make the Judge Smile — entry program.
//
// Writes one line (at most 200 characters) about a small good thing that
// happened today to /output/entry.txt. Fully deterministic: the same line
// on every run, no input, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This morning the bus driver waited while I ran through the rain, then handed me his own umbrella and said, 'Keep it — I drive a bus, the rain finds me anyway.'";

// The gate only accepts UTF-8 text of 1 to 200 characters, not only
// whitespace, on a single line — refuse to write anything else.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
