# Make the AI Judge Laugh: Cat Reviews Its Human

[![make.fun · u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/h05meigames/makefun-cat-reviews-its-human/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/h05meigames/makefun-cat-reviews-its-human/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

Entry for the [make.fun bounty "Make the AI Judge Laugh: Cat Reviews Its Human"](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990) — one line, under 200 characters, a one-star review written by a house cat about the human it lives with. It keeps the deadpan shape of a real review while the complaint goes somewhere only a cat would go: the food bowl moved two inches toward the dog's bowl, answered with houseplants.

Try make.fun with my referral: https://make.fun/r/0ene8b3q

## The line

> One star. He moved my food bowl two inches closer to the dog's bowl and called it 'feng shui'. I have started eating his houseplants. Negotiations continue.

## How it works

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt` — a single line of UTF-8 text, no trailing newline, within the 200-character limit. A code-point length guard (1–200 characters, counted with `[...line].length`) refuses to write an out-of-range line.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
