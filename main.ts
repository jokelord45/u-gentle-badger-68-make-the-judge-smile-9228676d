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
// First draft — a stranger holding the lift and knowing my floor:
// "A stranger held the lift for me, then pressed my floor before I could —
// 'third, right? We ride together every morning.' I rode up grinning like
// we'd been friends for years." (172 chars)
//
// Revision — critique of the first draft against the criteria in order:
// subject ✓ (a stranger's kindness, today), surprise ✓ (a stranger
// knowing my floor), concrete detail ✓ (the lift, the button, the quoted
// "third, right?"), fresh wording ~ (mostly fresh, but "friends for
// years" is a stock phrase). Weakness, and it sits at criterion 2 —
// warmth, ranked above surprise: the feeling is only reported ("rode up
// grinning"), never felt, and the closing simile is the line's one tired
// phrase. The judge picks the warmest line, so the close must land the
// feeling itself.
// Fix: replace with a moment whose warmth is the feeling, not the report
// — a neighbour's cat that ignored me for a year choosing me this
// morning. It wins on (2) warmth ("like I'd been chosen for something"
// is the glow landing, not a grin described), (3) surprise (a year of
// indifference reversed in one headbutt), and (5) fresh wording (no stock
// phrase left), while keeping (1) a small good thing today and (4) one
// concrete detail (the ankle, the purr).
// (Alternatives weighed and rejected: the bus-driver line — "front row's
// free, champ ... ten years old again" — warm and concrete, but the
// "ten years old again" close is a familiar move; the refined lift line
// with "smiling at the doors like they'd told me a secret" — a fresher
// close, but still a well-worn stranger-kindness setup, and it keeps the
// same turn rather than finding a warmer one.)
//
// Final choice: the cat line. 146 characters.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: exactly one line, nothing else.
const LINE =
  "My neighbour's cat, who has ignored me for a year, headbutted my ankle this morning and purred — I stood there like I'd been chosen for something.";

// Gate protection: fail loudly rather than write an entry the sealed
// scorer would refuse (empty, whitespace-only, or over 200 chars).
if (!LINE.trim() || LINE.length > 200) {
  throw new Error(
    `Invalid entry: ${LINE.length} chars, must be 1-200 and not only whitespace.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote entry (${LINE.length} chars): ${LINE}`);
