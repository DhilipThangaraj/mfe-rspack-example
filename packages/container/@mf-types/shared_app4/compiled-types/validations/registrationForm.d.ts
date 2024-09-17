import { z } from "zod";
import { PersonalInformationFormSchemaProps } from "./personalInformation";
import { PaymentInformationFormSchemaProps } from "./paymentInformation";
import { ShippingAddressFormSchemaProps } from "./shippingAddress";
export declare enum RegistrationFormTypeEnum {
    PersonalInformation = "personalInformation",
    PaymentInformation = "paymentInformation",
    ShippingAddress = "shippingAddress"
}
export declare const registrationFormSchema: z.ZodDiscriminatedUnion<"formType", [z.ZodObject<{
    formType: z.ZodLiteral<RegistrationFormTypeEnum.PersonalInformation>;
    personalInformation: z.ZodObject<{
        firstName: z.ZodString;
        lastName: z.ZodString;
        phone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        firstName: string;
        lastName: string;
        phone: string;
    }, {
        firstName: string;
        lastName: string;
        phone: string;
    }>;
}, "strip", z.ZodTypeAny, {
    personalInformation: {
        firstName: string;
        lastName: string;
        phone: string;
    };
    formType: RegistrationFormTypeEnum.PersonalInformation;
}, {
    personalInformation: {
        firstName: string;
        lastName: string;
        phone: string;
    };
    formType: RegistrationFormTypeEnum.PersonalInformation;
}>, z.ZodObject<{
    formType: z.ZodLiteral<RegistrationFormTypeEnum.PaymentInformation>;
    paymentInformation: z.ZodObject<{
        cardNumber: z.ZodString;
        cardholderName: z.ZodString;
        expirationDate: z.ZodString;
        cvv: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        cardNumber: string;
        cardholderName: string;
        expirationDate: string;
        cvv: string;
    }, {
        cardNumber: string;
        cardholderName: string;
        expirationDate: string;
        cvv: string;
    }>;
}, "strip", z.ZodTypeAny, {
    paymentInformation: {
        cardNumber: string;
        cardholderName: string;
        expirationDate: string;
        cvv: string;
    };
    formType: RegistrationFormTypeEnum.PaymentInformation;
}, {
    paymentInformation: {
        cardNumber: string;
        cardholderName: string;
        expirationDate: string;
        cvv: string;
    };
    formType: RegistrationFormTypeEnum.PaymentInformation;
}>, z.ZodObject<{
    formType: z.ZodLiteral<RegistrationFormTypeEnum.ShippingAddress>;
    shippingAddress: z.ZodObject<{
        address: z.ZodString;
        city: z.ZodString;
        state: z.ZodString;
        zipCode: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        address: string;
        city: string;
        state: string;
        zipCode: string;
    }, {
        address: string;
        city: string;
        state: string;
        zipCode: string;
    }>;
}, "strip", z.ZodTypeAny, {
    shippingAddress: {
        address: string;
        city: string;
        state: string;
        zipCode: string;
    };
    formType: RegistrationFormTypeEnum.ShippingAddress;
}, {
    shippingAddress: {
        address: string;
        city: string;
        state: string;
        zipCode: string;
    };
    formType: RegistrationFormTypeEnum.ShippingAddress;
}>]>;
export type RegistrationFormSchemaProps = {
    formType: RegistrationFormTypeEnum;
    personalInformation: PersonalInformationFormSchemaProps;
    paymentInformation: PaymentInformationFormSchemaProps;
    shippingAddress: ShippingAddressFormSchemaProps;
};
