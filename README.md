# Crypto Trading Joke

[![make.fun](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a.svg)](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
[![Rank](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a/luckylawless1/crypto-trading-joke/rank.svg)](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
[![Reward](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a/luckylawless1/crypto-trading-joke/reward.svg)](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)

Entry for the [make.fun](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a) bounty **"Laugh Track: The Crypto Trading Joke Contest"** — one original one-line joke about crypto/trading life, under 200 characters.

## How it works

`main.ts` (Node 22+) writes the joke to `/output/entry.txt`. It creates the
output directory if missing, clears only the directory's contents (never the
mounted root itself), validates the entry (1–200 characters, single line),
writes it as UTF-8, and reads it back to confirm the file is byte-identical
to the intended entry.

```sh
node main.ts
cat /output/entry.txt
```

## The entry

> I wrote my seed phrase on paper so hackers couldn't steal it, then lost the paper — turns out the most secure crypto wallet is the one even I can't open.

153 characters. A true, specific observation — keeping a seed phrase on paper
is the standard self-custody advice — with a surprise turn: the security
worked so well it locked out its own owner.

## License

MIT — see [LICENSE](LICENSE).
