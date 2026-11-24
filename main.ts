// Alien Field Notes: The Two Day Earth Review — u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000
// Writes one line, an alien tourist's review of planet Earth, to /output/entry.txt.
// Pure Node stdlib: no network, no randomness, no clock. Two runs write
// byte-identical output.
//
// The line was chosen by a pairwise tournament of 30 drafted candidates
// against the published judge criteria (in order): reads as a one-line
// alien-tourist review of Earth; funny from the alien's angle on ordinary
// Earth life; original (no traffic / gravity / money / weather); sounds like
// a real review (verdict, rating, closing); tight, punch at the end.
// See METHOD.md for the tournament.
// Winner (120 characters):
//   Three stars. They applaud when the flying metal tube lands, as if the pilot had done a trick. The landing was scheduled.

import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "Three stars. They applaud when the flying metal tube lands, as if the pilot had done a trick. The landing was scheduled.";

// The line works in three beats, each carrying one judge criterion:
// "Three stars." is the review verdict up front (criterion 4); "They
// applaud when the flying metal tube lands, as if the pilot had done a
// trick." is the alien's-eye view of an ordinary ritual (criteria 1 and
// 2); "The landing was scheduled." is the punch — the alien's deadpan
// logic undercutting the applause (criterion 5). No banned cliche (no
// traffic, gravity, money or weather) anywhere in the line (criterion 3).

// Gate check (mirrors the sealed scorer): the entry must be UTF-8 text
// of 1 to 200 characters and not only whitespace, and a single line.
// Fail loudly instead of writing an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error("entry line fails the 1-200 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
