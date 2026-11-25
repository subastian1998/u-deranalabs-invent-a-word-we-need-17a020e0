import { writeFileSync, mkdirSync } from "node:fs";

// typelorn: the hollow ache of watching someone type for minutes,
// then stop, and no message ever comes.
const ENTRY =
  "typelorn (adj.) — the hollow ache of watching someone type for minutes, then stop, and no message ever comes.";

// Gate self-check (RULES.txt): 1–140 chars, UTF-8, not whitespace-only.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry violates the gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
