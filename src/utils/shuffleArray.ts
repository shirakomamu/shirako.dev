export default <T>(array: T[]): T[] => {
  let m = array.length;

  while (m > 0) {
    const i = Math.floor(Math.random() * m--);
    const t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};
