export const validateValueByRegExp = (value: string, regex: RegExp) => {
    return regex.test(value);
};