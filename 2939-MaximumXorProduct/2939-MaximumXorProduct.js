  const mod = BigInt(1e9 + 7);
  let ba = BigInt(a);
  let bb = BigInt(b);
  for (let i = BigInt(n - 1); i >= 0n; --i) {
    const mask = 1n << i;
    const am = ba & mask, bm = bb & mask;
    if (!am && !bm) {
      ba |= mask;
      bb |= mask;
    } else if ((!am && bm) || (am && !bm)) {
      if (Math.abs(Number(ba - bb)) > Math.abs(Number((ba ^ mask) - (bb ^ mask)))) {
        ba ^= mask;
        bb ^= mask;
      }
    }
  }
  return Number((ba * bb) % mod);
};
12
