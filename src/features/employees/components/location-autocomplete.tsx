import { useState, useEffect } from "react";
import { Autocomplete, type Option } from "@/components/ui/form/autocomplete";
import { useLocations } from "../api/get-locations";

const DebounceMs = 500;

export const LocationAutocomplete = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  // Debounce the input value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, DebounceMs);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const locationsQuery = useLocations({
    page: 1,
    limit: 10,
    query: debouncedValue,
  });

  const options = locationsQuery.data || [];

  const handleChange = (value: string, option: Option | null): void => {
    // Update input immediately for responsive UI
    setInputValue(value);

    // Clear selected option if user is typing (not a valid selection)
    if (!option) {
      setSelectedOption(null);
    }
  };

  const handleSelect = (option: Option): void => {
    // Only update when a valid option is selected
    setSelectedOption(option);
    setInputValue(option.name);
  };

  return (
    <div>
      <Autocomplete
        options={options}
        value={inputValue}
        onChange={handleChange}
        onSelect={handleSelect}
      />

      {/* Optional: Show loading state */}
      {locationsQuery.isLoading && <p>Loading...</p>}

      {/* Only show selected when it's a valid option */}
      {selectedOption && (
        <div>
          <p>Valid Selection:</p>
          <p>ID: {selectedOption.id}</p>
          <p>Name: {selectedOption.name}</p>
        </div>
      )}
    </div>
  );
};
