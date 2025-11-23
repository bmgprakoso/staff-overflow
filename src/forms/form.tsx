import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext, SubmitButton } from "@/forms";
import { TextField, SelectField } from "@/forms/fields";

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    TextField,
    SelectField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
