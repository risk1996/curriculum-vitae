import {
  type BaseIssue,
  type BaseSchema,
  type InferOutput,
  parse,
} from "valibot";

import { safeTry } from "~/helpers/error";

export function readLocalStorage<
  const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
>(
  key: string,
  schema: TSchema,
  fallback: InferOutput<TSchema>,
): InferOutput<TSchema> {
  const raw = localStorage.getItem(key) ?? "null";
  const json = safeTry(() => JSON.parse(raw), null);
  const parsed = safeTry(() => parse(schema, json), fallback);

  return parsed;
}
