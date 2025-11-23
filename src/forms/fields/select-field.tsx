import { HelperText, Label, Select } from "@/components/ui/form";
import { useFieldUIState } from "./use-field-ui-state";

type SelectOption = string;

type Props = {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
};

export const SelectField = ({
  label,
  options,
  placeholder,
  required,
}: Props) => {
  const { field, value, onChange, onBlur, hasError, errorText } =
    useFieldUIState<string>();

  const labelId = `${field.name}-label`;

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <Label id={labelId}>
        {label}
        {required && <span style={{ color: "red" }}> *</span>}
      </Label>
      <Select
        id={labelId}
        value={value}
        onChange={handleOnChange}
        onBlur={onBlur}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option value={opt}>{opt}</option>
        ))}
      </Select>
      {hasError && <HelperText error={hasError}>{errorText}</HelperText>}
    </>
  );
};
