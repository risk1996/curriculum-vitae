export function yearRange(start: Date, end: Date): string {
  if (start.getFullYear() === end.getFullYear()) {
    return start.getFullYear().toString();
  }

  return `${start.getFullYear()} – ${end.getFullYear()}`;
}
