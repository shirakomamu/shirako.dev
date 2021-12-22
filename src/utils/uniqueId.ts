const idCounter: { [key: string]: number } = {};
const DEFAULT_PREFIX = process.env.VUE_APP_NAME || "shirako.dev";

export default (prefix: string = DEFAULT_PREFIX): string => {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 0;
  }

  const id = ++idCounter[prefix];
  if (prefix === DEFAULT_PREFIX) {
    return `${id}`;
  }

  return `${prefix}-${id}`;
};
