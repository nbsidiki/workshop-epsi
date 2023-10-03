import { format } from "date-fns";

export const getInitials = (firstname: string, lastname: string) =>
  `${firstname.charAt(0)}${lastname.charAt(0)}`.toUpperCase();

export const formatPhoneNumber = (value: string) => {
  const phoneNumber = value.replace(/\s/g, "");
  let result: any = [];
  for (let i = 0; i < phoneNumber.length; i = i + 2) {
    result.push(phoneNumber.slice(i, i + 2));
  }

  return result.join(" ");
};

const getDateFormatOuput = (withTime: boolean) =>
  `dd/MM/yyyy${withTime ? " HH:mm" : ""}`;
const getDateFormatForServiceOuput = (withTime: boolean) =>
  `yyyy-MM-dd${withTime ? " HH:mm" : ""}`;

export const formatDate = (value: string, withTime: boolean = false) => {
  try {
    return format(new Date(value), getDateFormatOuput(withTime));
  } catch (error) {
    console.log({ error });
    return "Date invalide";
  }
};

export const dateToString = (date: Date, withTime?: boolean) =>
  format(date, getDateFormatOuput(Boolean(withTime)));

export const printDateForService = (value: Date, withTime: boolean = false) => {
  return format(value, getDateFormatForServiceOuput(withTime));
};

export const formatDecimalFromString = (param: string) => {
  let toFixedNumber = parseFloat(param.replace(",", ".")).toFixed(2);
  return Number(toFixedNumber);
};
