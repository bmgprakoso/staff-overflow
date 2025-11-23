import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  height: 38px;
  padding: 6px 10px;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  margin-bottom: 1.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  &:focus {
    border: 1px solid #33c3f0;
    outline: 0;
  }
`;

const AutocompleteContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: -1.5rem 0 0 0;
  padding: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-top: none;
  border-radius: 0 0 4px 4px;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

type DropdownItemProps = {
  isHighlighted: boolean;
};

const DropdownItem = styled.li<DropdownItemProps>`
  padding: 8px 10px;
  cursor: pointer;
  background-color: ${(props) => (props.isHighlighted ? "#f0f0f0" : "#fff")};
  &:hover {
    background-color: #f0f0f0;
  }
`;

export type Option = {
  id: number;
  name: string;
};

type Props = {
  options?: Option[];
  placeholder?: string;
  value: string;
  onChange: (value: string, option: Option | null) => void;
  onSelect?: (option: Option) => void;
};

export const Autocomplete = ({
  options = [],
  placeholder = "Type to search...",
  value,
  onChange,
  onSelect,
}: Props) => {
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;

    if (newValue.trim()) {
      const filtered = options.filter((option) =>
        option.name.toLowerCase().includes(newValue.toLowerCase()),
      );
      setFilteredOptions(filtered);
      setIsOpen(filtered.length > 0);
      setHighlightedIndex(-1);
    } else {
      // Show all options when input is empty
      setFilteredOptions(options);
      setIsOpen(options.length > 0);
    }

    onChange(newValue, null);
  };

  const handleInputFocus = (): void => {
    // Show all options when user focuses on input
    if (!value.trim() && options.length > 0) {
      setFilteredOptions(options);
      setIsOpen(true);
    }
  };

  const handleOptionClick = (option: Option): void => {
    setIsOpen(false);
    setFilteredOptions([]);

    onChange(option.name, option);

    if (onSelect) {
      onSelect(option);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : prev,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleOptionClick(filteredOptions[highlightedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <AutocompleteContainer ref={containerRef}>
      <Input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
      {isOpen && filteredOptions.length > 0 && (
        <DropdownList>
          {filteredOptions.map((option, index) => (
            <DropdownItem
              key={option.id}
              isHighlighted={index === highlightedIndex}
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </AutocompleteContainer>
  );
};
