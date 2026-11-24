# Alien Field Notes: The Two Day Earth Review — Method

Competition: `u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000`
("Alien Field Notes: The Two Day Earth Review"). Free entry, $2 total,
top 10 paid. One line of plain text, 1–200 characters, a review of planet
Earth written by an alien tourist, written by `main.ts` to
`/output/entry.txt`.

## The winning line (120 characters)

> Three stars. They applaud when the flying metal tube lands, as if the pilot had done a trick. The landing was scheduled.

## How it was chosen

30 candidate review lines were drafted in
`~/workspace/makefun/alien-earth-candidates.md` (kept outside this repo),
each scored 0–2 on the five published judge criteria, in order:

1. Reads as a one-line review of Earth by an alien tourist.
2. Funny from the alien's angle on ordinary Earth life.
3. Original — no traffic, gravity, money or weather.
4. Sounds like a real review — verdict, rating, closing.
5. Tight, punch at the end. One clean joke, no explaining it.

The top tier (10/10 scorers) went into a single-elimination bracket, each
match decided by the first criterion where the two lines differ, then by
the size tie-break (fewer bytes wins):

- QF1: plane applause beat the "bless you" ritual on originality — applauding
  a scheduled landing is a fresher alien-logic turn than the well-worn
  sneezing blessing.
- QF2: the do-not-disturb knock beat cat-worship on originality — cats
  ruling humans is a known trope; the knock about the sign is fresher.
- QF3: elevator silence beat the treadmill on originality — "run nowhere" is
  a classic treadmill joke; "It was my favourite" is a quieter turn.
- QF4: the microwave beat the gym on funniness/originality — paying to lift
  and replace is a known observation; frozen-in-the-middle plus "I ate it
  anyway" is a more specific lived detail.
- SF1: plane applause beat the do-not-disturb knock on funniness — "The
  landing was scheduled" is a stronger alien-logic turn than the straight
  punchline "I saw the sign".
- SF2: elevator silence beat the microwave on funniness — "It was my
  favourite" is a quieter, more surprising verdict than "I ate it anyway".
- Final: plane applause vs elevator silence — criteria 1–4 tie. Criterion 5
  decides: "The landing was scheduled" lands harder as alien logic, and the
  size tie-break agrees (120 vs 137 chars).

Runner-up (137 chars): "Two stars. They stand in a moving metal box in
total silence with strangers, then call it the worst part of the day. It
was my favourite."

## Why the winner wins

- "Three stars." puts the review verdict up front, so the line is a review
  from the first two words (criterion 4).
- "They applaud when the flying metal tube lands" is a concrete ordinary
  ritual seen through alien eyes — "flying metal tube" for a plane
  (criteria 1 and 2).
- "as if the pilot had done a trick" names the alien's misreading of the
  applause, and "The landing was scheduled" undercuts it with deadpan
  alien logic — the punch lands at the last word (criterion 5).
- Nothing in the line touches the banned clichés: no traffic, no gravity,
  no money, no weather (criterion 3).
- At 120 bytes it is among the shortest lines in the top tier, which
  matters because exact ties on win rate break on smaller text.

## The program

`main.ts` (Node 22, stdlib only, no network, no randomness, no clock)
writes exactly that line to `/output/entry.txt`, after a gate check that
throws if the line ever fails the 1–200 character rule or is not a single
line. Two runs write byte-identical output.

## Verification

- `node main.ts` run twice: `/output/entry.txt` byte-identical both runs.
- Output sha256: `74e9705cd026020d8e91cb1d315af9aacd5d3aa4b14be568f0912d9f59226010`
  (verified run, byte-identical across two runs).
- Output is valid UTF-8, 120 characters, exactly the winning line,
  non-whitespace, single line — the gate check passes.
