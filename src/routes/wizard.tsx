import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wizard")({
  component: Wizard,
});

function Wizard() {
  return <div className="p-2">Hello from Wizard!</div>;
}
