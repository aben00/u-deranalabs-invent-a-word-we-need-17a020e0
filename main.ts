// goodbyeloop — an entry for make.fun's "Invent a Word We Need" bounty.
// The whole entry is one invented word plus its one-line definition,
// written deterministically to /output/entry.txt.
//
// The word: "goodbyeloop" (goodbye + loop). It names the social moment
// everyone recognises but English has no word for: the farewell that
// refuses to end, each "okay, bye" spawning one more "wait, one more thing".

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "goodbyeloop \u2014 the endless \u2018okay, bye\u2026 wait, one more thing\u2019 that adds ten minutes to every goodbye.";

// The sealed gate accepts only UTF-8 text of 1 to 140 characters that is
// not only white space, so refuse to write anything outside that range.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters; must be 1-140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
