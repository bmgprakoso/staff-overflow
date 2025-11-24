import { useFieldUIState } from "./use-field-ui-state";
import { Label, HelperText } from "@/components/ui/form";
import { ResourceAutocomplete } from "@/components/ui/form/resource-autocomplete";
import type { Option } from "@/components/ui/form/autocomplete";
import type { UseQueryResult } from "@tanstack/react-query";

type Props = {
  useQuery: (params: {
    page: number;
    limit: number;
    query: string;
  }) => UseQueryResult<Option[]>;
  label: string;
  placeholder?: string;
  required?: boolean;
};

export const AutocompleteField = ({
  useQuery,
  label,
  placeholder,
  required,
}: Props) => {
  const { value, onChange, hasError, errorText } = useFieldUIState<
    Option | undefined
  >();

  const handleChange = (option: Option | null) => {
    if (!option) {
      onChange(undefined);
      return;
    }

    onChange(option);
  };

  return (
    <>
      <Label>
        {label}
        {required && <span style={{ color: "red" }}> *</span>}
      </Label>
      <ResourceAutocomplete
        useQuery={useQuery}
        placeholder={placeholder}
        value={value ?? null}
        onChange={handleChange}
        showSelection
      />
      {hasError && <HelperText error={hasError}>{errorText}</HelperText>}
    </>
  );
};
