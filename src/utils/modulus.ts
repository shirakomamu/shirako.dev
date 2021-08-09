// implements modulus that handles negative numbers as well
export default (n: number, m: number): number => {
  return ((n % m) + m) % m;
};
