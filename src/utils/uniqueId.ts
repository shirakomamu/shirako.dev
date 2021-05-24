/** Used to generate unique IDs. */
const idCounter: { [key: string]: number } = {};
const DEFAULT_PREFIX = "shirako.dev";

export default function uniqueId(prefix = DEFAULT_PREFIX): string {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 0;
  }

  const id = ++idCounter[prefix];
  if (prefix === DEFAULT_PREFIX) {
    return `${id}`;
  }

  return `${prefix}-${id}`;
}
