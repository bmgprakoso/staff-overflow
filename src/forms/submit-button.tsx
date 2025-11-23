import { Button } from "@/components/ui/button";
import { useFormContext } from "@/forms";

type Props = {
  label: string;
  loadingLabel?: string;
};

export function SubmitButton({ label, loadingLabel = "Submitting..." }: Props) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button primary type="submit" disabled={isSubmitting}>
          {isSubmitting ? loadingLabel : label}
        </Button>
      )}
    </form.Subscribe>
  );
}
