import { SplitButton } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

type Role = "admin" | "ops";

const buttonLabelMap: Record<Role, string> = {
  admin: "Add Admin Employee",
  ops: "Add Ops Employee",
};

export const AddEmployeeButton = () => {
  const [role, setRole] = useState<Role>("admin");
  const navigate = useNavigate();

  const menuItems = Object.values(buttonLabelMap);

  const onSelect = (label: string) => {
    const foundRole = Object.entries(buttonLabelMap).find(
      ([, value]) => value === label,
    )?.[0] as Role | undefined;

    if (foundRole) {
      setRole(foundRole);
    }
  };

  const goToCreateEmployee = (role: Role) => {
    navigate({ to: "/wizard", search: { role } });
  };

  return (
    <SplitButton
      primary
      label={buttonLabelMap[role]}
      menuItems={menuItems}
      onMainClick={() => goToCreateEmployee(role)}
      onSelect={onSelect}
    />
  );
};
