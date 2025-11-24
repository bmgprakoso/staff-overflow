import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext, SubmitButton } from "@/forms";
import {
  TextField,
  SelectField,
  AutocompleteField,
  TextareaField,
  ImageField,
} from "@/forms/fields";

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    TextField,
    SelectField,
    AutocompleteField,
    TextareaField,
    ImageField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
