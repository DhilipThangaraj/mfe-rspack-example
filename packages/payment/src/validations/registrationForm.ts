import { z } from "zod";

import {
  personalInformationSchema,
  PersonalInformationFormSchemaProps,
} from "./personalInformation";

import {
  paymentInformationSchema,
  PaymentInformationFormSchemaProps,
} from "./paymentInformation";

import {
  shippingAddressSchema,
  ShippingAddressFormSchemaProps,
} from "./shippingAddress";

export enum RegistrationFormTypeEnum {
  PersonalInformation = "personalInformation",
  PaymentInformation = "paymentInformation",
  ShippingAddress = "shippingAddress",
}

export const registrationFormSchema = z.discriminatedUnion("formType", [
  z.object({
    formType: z.literal(RegistrationFormTypeEnum.PersonalInformation),
    personalInformation: personalInformationSchema,
  }),
  z.object({
    formType: z.literal(RegistrationFormTypeEnum.PaymentInformation),
    paymentInformation: paymentInformationSchema,
  }),
  z.object({
    formType: z.literal(RegistrationFormTypeEnum.ShippingAddress),
    shippingAddress: shippingAddressSchema,
  }),
]);

export type RegistrationFormSchemaProps = {
  formType: RegistrationFormTypeEnum;
  personalInformation: PersonalInformationFormSchemaProps;
  paymentInformation: PaymentInformationFormSchemaProps;
  shippingAddress: ShippingAddressFormSchemaProps;
};
