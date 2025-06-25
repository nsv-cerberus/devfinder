import React from "react";
import ValidationError from "@/components/validation-error/ValidationError";

interface FieldInputProps {
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validation?: {
    isError: boolean;
    errorMessage: string;
  }
}

export function FieldInput({
  type = "text",
  value,
  placeholder = "Enter Value",
  onChange,
  validation
}: FieldInputProps) {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={{ borderColor: validation && validation.isError ? "red" : undefined }}
      />
      {validation && validation.isError && <ValidationError text={validation.errorMessage ?? "Invalid value!"} />}
    </div>
  );
}