import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext, SubmitButton } from "@/forms";
import { TextField } from "@/forms/fields";

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    TextField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
