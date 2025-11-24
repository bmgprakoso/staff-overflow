import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext, SubmitButton } from "@/forms";
import {
  TextField,
  SelectField,
  AutocompleteField,
  TextareaField,
} from "@/forms/fields";

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    TextField,
    SelectField,
    AutocompleteField,
    TextareaField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
