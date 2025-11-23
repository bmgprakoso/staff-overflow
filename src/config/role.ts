export type Role = "admin" | "ops";

export const isRole = (role: string): role is Role => {
  return role === "admin" || role === "ops";
};
