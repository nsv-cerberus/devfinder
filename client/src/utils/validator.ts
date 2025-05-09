export const validate = (value: string, regex: RegExp) => {
    return regex.test(value);
};