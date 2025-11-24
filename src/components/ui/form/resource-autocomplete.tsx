import { useState, useEffect } from "react";
import { Autocomplete, type Option } from "@/components/ui/form/autocomplete";
import type { UseQueryResult } from "@tanstack/react-query";
import { DefaultPage, DefaultPageSize } from "@/config/table";

const DebounceMs = 500;

type Props = {
  useQuery: (params: {
    page: number;
    limit: number;
    query: string;
  }) => UseQueryResult<Option[]>;
  placeholder?: string;
  debounceMs?: number;
  value: Option | null;
  onChange: (option: Option | null) => void;
};

export const ResourceAutocomplete = ({
  useQuery,
  placeholder,
  debounceMs = DebounceMs,
  value,
  onChange,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  // Sync input value with controlled value when it changes
  useEffect(() => {
    if (value) {
      setInputValue(value.name);
    } else {
      setInputValue("");
    }
  }, [value]);

  // Debounce the input value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [inputValue, debounceMs]);

  const query = useQuery({
    page: DefaultPage,
    limit: DefaultPageSize,
    query: debouncedValue,
  });

  const options = query.data || [];

  const handleChange = (val: string, option: Option | null): void => {
    // Update input immediately for responsive UI
    setInputValue(val);

    // Clear selected option if user is typing (not a valid selection)
    if (!option) {
      onChange(null);
    }
  };

  const handleSelect = (option: Option): void => {
    // Update input value
    setInputValue(option.name);

    // Update controlled value
    onChange(option);
  };

  return (
    <div>
      <Autocomplete
        options={options}
        value={inputValue}
        onChange={handleChange}
        onSelect={handleSelect}
        placeholder={placeholder}
      />
    </div>
  );
};
