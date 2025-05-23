export type CustomeMethodType = (...args: unknown[]) => boolean;

export type ValidationRulesType =
  | { regex: RegExp | RegExp[]; customMethod?: CustomeMethodType | (CustomeMethodType)[] }
  | { regex?: undefined; customMethod: CustomeMethodType | (CustomeMethodType)[] };

export function validate(value: string, rules?: ValidationRulesType): boolean {
  if (!rules) return true;

  let result = true;
  const regex = rules.regex ?? null;
  const customMethod = rules.customMethod ?? null;

  if (regex) {
    if (regex instanceof RegExp) {
      result = regex.test(value);
    } else if (Array.isArray(regex)) {
      result = regex.every(r => r.test(value));
    }
  }

  if (customMethod) {
    result = Array.isArray(customMethod)
      ? customMethod.every(fn => fn(value))
      : customMethod(value);
  }

  return result;
}