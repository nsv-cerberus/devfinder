export type CustomMethodType = (...args: unknown[]) => boolean;

type RegexRule = {
  regex: RegExp;
  errorMessage: string;
};

type CustomRule = {
  method: CustomMethodType;
  errorMessage: string;
};

export type ValidationType =
  | { regexRule: RegexRule | RegexRule[]; customRule?: CustomRule | CustomRule[]; }
  | { regexRule?: undefined; customRule: CustomRule | CustomRule[]; };

export type ValidateType = {
  isValid: boolean
  errorMessage: string
}

export function validate(value: string, validation?: ValidationType): ValidateType {
  const initialValidate: ValidateType = {
    isValid: true,
    errorMessage: '',
  };

  if (!validation) return initialValidate;

  const regexRules = Array.isArray(validation.regexRule)
    ? validation.regexRule
    : validation.regexRule ? [validation.regexRule] : [];

  for (const rule of regexRules) {
    if (!rule.regex.test(value)) {
      return {
        isValid: false,
        errorMessage: rule.errorMessage,
      };
    }
  }

  const customRules = Array.isArray(validation.customRule)
    ? validation.customRule
    : validation.customRule ? [validation.customRule] : [];

  for (const rule of customRules) {
    if (!rule.method(value)) {
      return {
        isValid: false,
        errorMessage: rule.errorMessage,
      };
    }
  }

  return initialValidate;
}