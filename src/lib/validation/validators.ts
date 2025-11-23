import * as v from "valibot";
import { validationMessages as msg } from "./messages.ts";

export const requiredString = v.pipe(v.string(), v.minLength(1, msg.required));
export const emailValidator = v.pipe(v.string(), v.email(msg.email));
