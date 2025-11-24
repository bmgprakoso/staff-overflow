import { useFieldUIState } from "./use-field-ui-state";
import type { ChangeEvent } from "react";
import { Label, HelperText, Textarea } from "@/components/ui/form";

type Props = {
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

export const TextareaField = ({
  label,
  placeholder,
  required,
  disabled,
}: Props) => {
  const { value, onChange, onBlur, hasError, errorText } = useFieldUIState<
    string | undefined
  >();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <Label>
        {label}
        {required && <span style={{ color: "red" }}> *</span>}
      </Label>
      <Textarea
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
      />
      {hasError && <HelperText error={hasError}>{errorText}</HelperText>}
    </>
  );
};
