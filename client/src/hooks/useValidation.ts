import { useState, useCallback } from "react";
import { validateValueByRegExp } from "@/utils/validator";

type CustomeMethodType = (...args: unknown[]) => boolean;

export type ValidationRulesType =
    | { regExp: RegExp | RegExp[]; customMethod?: CustomeMethodType | (CustomeMethodType)[] }
    | { regExp?: undefined; customMethod: CustomeMethodType | (CustomeMethodType)[] };

export function useValidation(rules?: ValidationRulesType) {
  const [isValid, setIsValid] = useState(false);

  let lastValue = '';

  const validate = useCallback(() => {
    if (!rules) return true;

    let result = false;
    const regExps = rules.regExp ?? null;
    const customMethod = rules.customMethod ?? null;

    if (regExps) {
      if (regExps instanceof RegExp) {
        result = validateValueByRegExp(lastValue, regExps);
      } else if (Array.isArray(regExps)) {
        result = regExps.some(r => validateValueByRegExp(lastValue, r));
      }
    }

    if (customMethod) {
      result = Array.isArray(customMethod)
        ? customMethod.every(m => m())
        : customMethod();
    }

    setIsValid(result);

    return isValid;
  }, [rules, lastValue, isValid]);

  const setValue = (value: string) => {
    lastValue = value;
  };

  return { isValid, validate, setValue };
}