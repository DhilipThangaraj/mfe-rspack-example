import { z } from "zod";
export declare const shippingAddressSchema: z.ZodObject<{
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
export type ShippingAddressFormSchemaProps = z.infer<typeof shippingAddressSchema>;
