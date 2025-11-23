import { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "./button";

const SplitWrapper = styled.div`
  display: inline-flex;
  align-items: stretch;
  position: relative;
`;

const ToggleButton = styled(Button)`
  padding: 0 12px;
  width: auto;
  border-left: none;
  border-radius: 0 4px 4px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "▾";
    font-size: 10px;
    margin-left: 2px;
  }
`;

const MainButton = styled(Button)`
  border-radius: 4px 0 0 4px;
  margin-bottom: 0;
`;

const Menu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  margin: 4px 0 0;
  padding: 6px 0;
  list-style: none;
  min-width: 140px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 5;
`;

const MenuItem = styled.li`
  padding: 8px 14px;
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #f2f2f2;
  }
`;

// ============= Component =============
export const SplitButton = ({
  primary,
  label,
  menuItems,
  onMainClick,
  onSelect,
}: {
  primary?: boolean;
  label: string;
  menuItems: string[];
  onMainClick?: () => void;
  onSelect?: (item: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <SplitWrapper>
      <MainButton primary={primary} onClick={onMainClick}>
        {label}
      </MainButton>

      <ToggleButton
        primary={primary}
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <Menu>
          {menuItems.map((item) => (
            <MenuItem
              key={item}
              onClick={() => {
                setOpen(false);
                onSelect?.(item);
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      )}
    </SplitWrapper>
  );
};
