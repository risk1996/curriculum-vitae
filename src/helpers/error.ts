export function safeTry<T>(cb: () => T, fallback: T): T {
  try {
    return cb();
  } catch (e) {
    return fallback;
  }
}
