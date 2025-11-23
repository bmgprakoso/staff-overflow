import { useFieldUIState } from "./use-field-ui-state";
import type { ChangeEvent } from "react";
import { Input, Label, HelperText } from "@/components/ui/form";

type Props = {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
};

export function TextField({
  label,
  placeholder,
  type = "text",
  required,
  disabled,
}: Props) {
  const { value, onChange, onBlur, hasError, errorText } = useFieldUIState<
    string | number | undefined
  >();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (type === "number") {
      const raw = e.target.value;
      // empty = undefined, else convert
      const numVal = raw === "" ? undefined : Number(raw);
      onChange(numVal);
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <Label>
        {label}
        {required && <span style={{ color: "red" }}> *</span>}
      </Label>
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
      />
      {hasError && <HelperText error={hasError}>{errorText}</HelperText>}
    </>
  );
}
