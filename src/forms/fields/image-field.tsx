import { useFieldUIState } from "./use-field-ui-state";
import type { ChangeEvent } from "react";
import { Input, Label, HelperText } from "@/components/ui/form";
import { Image } from "@/components/ui/image";

type Props = {
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

export const ImageField = ({
  label,
  placeholder,
  required,
  disabled,
}: Props) => {
  const { value, onChange, onBlur, hasError, errorText } = useFieldUIState<
    string | undefined
  >();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      onChange(undefined);
      return;
    }

    // Validate image
    if (!file.type.startsWith("image/")) {
      onChange(undefined);
      return;
    }

    // Convert to base64
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as string;
      onChange(base64String);
    };
    reader.onerror = () => {
      // Handle error
      onChange(undefined);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <Label>
        {label}
        {required && <span style={{ color: "red" }}> *</span>}
      </Label>
      <Input
        placeholder={placeholder}
        type="file"
        accept="image/*"
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
      />
      {hasError && <HelperText error={hasError}>{errorText}</HelperText>}

      {value && (
        <div style={{ marginTop: "12px" }}>
          <Image src={value} />
        </div>
      )}
    </>
  );
};
