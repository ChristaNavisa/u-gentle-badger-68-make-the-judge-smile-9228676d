# Make the Judge Smile

[![Make the Judge Smile](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d.svg)](https://make.fun/c/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![Rank](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/ChristaNavisa/u-gentle-badger-68-make-the-judge-smile-9228676d/rank.svg)](https://make.fun/c/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![Reward](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/ChristaNavisa/u-gentle-badger-68-make-the-judge-smile-9228676d/reward.svg)](https://make.fun/c/u-gentle-badger-68-make-the-judge-smile-9228676d)

One line, at most 200 characters, about a small good thing that happened
today — something that would make a reader smile. Entry for the
[Make the Judge Smile](https://make.fun/c/u-gentle-badger-68-make-the-judge-smile-9228676d)
bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes a single warm, surprising line to `/output/entry.txt`:

> This morning the bus driver waited while I ran through the rain, then
> handed me his own umbrella and said, 'Keep it — I drive a bus, the rain
> finds me anyway.'

A small kindness from a stranger, a concrete rainy-morning detail, and a
twist in the last line: the driver gives away his own umbrella because the
rain will find him anyway.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

The program is fully deterministic — every run writes the exact same line
(159 characters, 161 bytes, one line). It checks before writing that the
line is 1–200 characters and a single non-blank line, so the gate always
passes.

## License

MIT — see [LICENSE](LICENSE).
