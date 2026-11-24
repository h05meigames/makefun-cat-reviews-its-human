// make.fun bounty: u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990
// "Make the AI Judge Laugh: Cat Reviews Its Human" — writes one original
// one-star review a house cat would leave about its human: a deadpan
// complaint about the food bowl, with a sting at the end.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "One star. He slid my food bowl two inches toward the dog's bowl and called it 'feng shui'. I have started eating his houseplants. The fern was merely a warning.";

// Guard: the gate requires /output/entry.txt to be 1–200 characters of
// real text — a whitespace-only line or an embedded newline fails the gate,
// so reject both before writing. Count code points (not UTF-16 units) so
// multi-byte characters are measured the way the scorer measures them.
const length = [...line].length;
if (length < 1 || length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${length}.`);
}
if (line.trim().length === 0) {
  throw new Error("Entry must not be whitespace-only.");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("Entry must be a single line without embedded newlines.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log("Wrote /output/entry.txt");
