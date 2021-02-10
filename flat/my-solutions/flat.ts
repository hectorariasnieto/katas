export function flatArr(...arr: unknown) {
  return arr.flat(Infinity)
}
