const ID_COUNTER = new Map<string | symbol, number>();
const DEFAULT_PREFIX = Symbol("default");

export default (prefix?: string): string => {
  const usePrefix = prefix ?? DEFAULT_PREFIX;
  const currentCount = ID_COUNTER.get(usePrefix) ?? 0;
  const nextCount = currentCount + 1;
  ID_COUNTER.set(usePrefix, nextCount);

  let uniqueId;
  if (prefix === undefined) {
    uniqueId = nextCount.toString();
  } else {
    uniqueId = `${prefix}-${nextCount.toString()}`;
  }

  return uniqueId;
};
