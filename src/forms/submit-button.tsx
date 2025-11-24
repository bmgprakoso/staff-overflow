import { Button } from "@/components/ui/button";
import { useFormContext } from "@/forms";

type Props = {
  label: string;
  loadingLabel?: string;
};

export function SubmitButton({ label, loadingLabel = "Submitting..." }: Props) {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => ({
        isSubmitting: state.isSubmitting,
        isValid: state.isValid,
        isDirty: state.isDirty,
      })}
    >
      {({ isSubmitting, isValid, isDirty }) => (
        <Button
          primary
          type="submit"
          disabled={isSubmitting || !isValid || !isDirty}
          style={{ marginBottom: 0 }}
        >
          {isSubmitting ? loadingLabel : label}
        </Button>
      )}
    </form.Subscribe>
  );
}
