function towerBreakers(n: number, m: number): number {
  return n % 2 === 0 || m === 1 ? 2 : 1
}