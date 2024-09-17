import { ButtonProps as ButtonElementProps } from "@/components/ui/button";
type ButtonProps = ButtonElementProps & {
    loading?: boolean;
};
export declare function Button({ loading, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
