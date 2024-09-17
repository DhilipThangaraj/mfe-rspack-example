import { z } from "zod";
export declare const paymentInformationSchema: z.ZodObject<{
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
export type PaymentInformationFormSchemaProps = z.infer<typeof paymentInformationSchema>;
