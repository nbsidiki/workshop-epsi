import { parse, isAfter } from "date-fns";
import { mixed } from "yup";

const MAX_FILE_SIZE = 2000000;
const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "application/pdf"];

export const checkPhoneNumber = (phoneNumber: string) => {
  const stringToTest = phoneNumber.replace(/\s/g, "");

  return /^((\+)33|0)[1-9](\d{2}){4}$/g.test(stringToTest);
};

export const checkEmail = (email: string) => {
  return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    email
  );
};

export const checkPassword = (password: string) => {
  return password.length >= 5;
};

export const isDatePassed = (stringDate: string) => {
  const date = parse(stringDate, "yyyy-MM-dd", new Date());

  return isAfter(date, new Date());
};
export const fileValidator = mixed()
  .test(
    "file size",
    "Fichier trop lourd. Il doit être inférieur à 2Mo",
    (value) => {
      //@ts-ignore
      return value && value.size ? value.size <= MAX_FILE_SIZE : true;
    }
  )
  .test(
    "file type",
    "Format invalide. Seul les jpg, png et pdf sont acceptés",
    (value) => {
      return value
        ? //@ts-ignore
          SUPPORTED_FORMATS.includes(value.type.toLowerCase())
        : true;
    }
  );
