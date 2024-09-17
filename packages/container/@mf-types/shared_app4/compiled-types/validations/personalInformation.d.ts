import { z } from "zod";
export declare const personalInformationSchema: z.ZodObject<{
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
export type PersonalInformationFormSchemaProps = z.infer<typeof personalInformationSchema>;
