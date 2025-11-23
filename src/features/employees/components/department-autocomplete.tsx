import { useState } from "react";

import { Autocomplete, type Option } from "@/components/ui/form/autocomplete";

const sampleOptions: Option[] = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
  { id: 6, name: "Fig" },
  { id: 7, name: "Grape" },
  { id: 8, name: "Honeydew" },
  { id: 9, name: "Kiwi" },
  { id: 10, name: "Lemon" },
  { id: 11, name: "Mango" },
  { id: 12, name: "Orange" },
  { id: 13, name: "Papaya" },
  { id: 14, name: "Raspberry" },
  { id: 15, name: "Strawberry" },
  { id: 16, name: "Watermelon" },
];

export const DepartmentAutocomplete = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [options, setOptions] = useState<Option[]>(sampleOptions);

  const handleChange = (value: string, option: Option | null): void => {
    // Only update input for filtering purposes
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
