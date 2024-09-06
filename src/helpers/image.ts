import { blurhashToCssGradientString } from "@unpic/placeholder";

export function blurhash(data: string): { background: string } {
  return { background: blurhashToCssGradientString(data) };
}

export function aspect(data: { height: number; width: number }): number {
  return data.width / data.height;
}
