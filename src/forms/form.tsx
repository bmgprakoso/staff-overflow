import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext, SubmitButton } from "@/forms";
import { TextField, SelectField, AutocompleteField } from "@/forms/fields";

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    TextField,
    SelectField,
    AutocompleteField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
