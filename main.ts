// Make the Judge Smile — make.fun bounty u-gentle-badger-68-make-the-judge-smile-9228676d
//
// The task: write one line of at most 200 characters about a small good
// thing that happened today, something that would make a reader smile.
// A judge model compares entries two at a time on, in order: (1) subject
// (a small good thing that happened today), (2) warmth, (3) surprise,
// (4) one concrete detail, (5) fresh wording, no greeting-card phrasing.
// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space.
//
// First draft — a small moment of being recognised by a stranger:
// a held lift, a floor button pressed before I could ask, a line of
// dialogue that feels overheard rather than written.

// Revision — critique of the first draft against the criteria in order:
// subject ✓, surprise ✓ (a stranger knowing my floor), concrete detail ✓
// (the lift, the button, the quoted "third, right?"), fresh wording ✓.
// Weakness: warmth (criterion 2, ranked above surprise) is only implied —
// the line ends on the stranger's words and never shows the feeling
// landing. The judge picks the line that makes it smile the warmest, so
// the entry must show the smile itself. 119 chars also leaves headroom
// under the 200 cap to land the feeling without padding.
// Fix: add a closing beat with the narrator's reaction — riding up
// grinning, as if old friends — which makes the warmth explicit and felt
// while keeping the surprise, the detail and the fresh wording.
// (Alternative weighed and rejected: a neighbour leaving mangoes with a
// note "eat them before the ants do" — warm and funny, but the joke
// carries it rather than a felt moment, and it risks reading as a gag.)
//
// Final choice: the lift line with the grinning close. 172 characters.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: exactly one line, nothing else.
const LINE =
  "A stranger held the lift for me, then pressed my floor before I could — 'third, right? We ride together every morning.' I rode up grinning like we'd been friends for years.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote entry (${LINE.length} chars): ${LINE}`);
