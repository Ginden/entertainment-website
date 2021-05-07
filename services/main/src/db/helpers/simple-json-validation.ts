import { Check } from 'typeorm';

type PossibleToValidate = {
  [k: string]: string | number | boolean | object | any[] | null;
};

type PossibleTypeNames = 'string' | 'number' | 'boolean' | 'array' | 'object';

type DefinitionObject<str extends PossibleTypeNames, T> = T extends null
  ? { type: str; nullable: true }
  : { type: str; nullable: false };

type ValidationObject<T extends PossibleToValidate> = {
  [k in keyof T]: T[k] extends string | null
    ? DefinitionObject<'string', T[k]>
    : T[k] extends number | null
    ? DefinitionObject<'number', T[k]>
    : T[k] extends boolean | null
    ? DefinitionObject<'boolean', T[k]>
    : T[k] extends any[] | null
    ? DefinitionObject<'array', T[k]>
    : T[k] extends object | null
    ? DefinitionObject<'object', T[k]>
    : never;
};

export function JsonValidation<T extends PossibleToValidate>(
  column: string,
  v: ValidationObject<T>,
): ClassDecorator {
  const subValidators: string[] = [];
  for (const entry of Object.entries(v)) {
    const [propertyName, definition]: [
      string,
      DefinitionObject<PossibleTypeNames, any>,
    ] = entry;
    const subVal: string[] = [];
    if (definition.nullable) {
      subVal.push(`jsonb_typeof(${column}->'${propertyName}') = 'null'`);
    }
    subVal.push(
      `jsonb_typeof(${column}->'${propertyName}') = '${definition.type}'`,
    );
    subValidators.push(subVal.map((v) => `(${v})`).join('OR'));
  }
  const code = subValidators.map((v) => `(${v})`).join(' AND ');
  return Check(code);
}
