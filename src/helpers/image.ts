export function aspect(data: { height: number; width: number }): number {
  return data.width / data.height;
}
