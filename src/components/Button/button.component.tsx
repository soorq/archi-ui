import { cva, type VariantProps } from "class-variance-authority";

import type { ButtonProps } from "./button.types";
import Slot from "../Slot";
import React from "react";

export const VariantsButtons = cva("h-7 w-fit focus:outline-none focus-visible:ring border-none ring-ring focus-visible:ring-offset-2 rounded-md flex justify-center items-center hover:bg-black text-white", {
variants: {
        variant: {
            default: "outline-none",
            primary: "bg-blue-500 text-white",
            secondary: "bg-gray-500 text-white",
            ghost: "bg-transparent text-black",
            outline: "border border-gray-500 text-black",
            success: "bg-green-500 text-white",
            destructive: "bg-red-500 text-white",
            link: "hover:underline",
            icon: "font-semibold p-1",
        },
        size: {
            default: "px-4 py-2",
            sm: "px-2 py-1 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-6 py-3 text-lg",
            icon: "p-1",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

/**
 * Renders a button component with specified size and variant.
 *
 * @param {ButtonProps} props - The props for the Button component.
 * @param {boolean} props.asChild - Specifies if the button is rendered as a child component.
 * @param {React.RefObject<React.ButtonHTMLAttributes<HTMLButtonElement>>} props.ref - Reference object for button HTML attributes.
 * @param {TypeVariantsButtons["size"]} props.size - The size of the button. Available sizes are:
 *   - default: Default size.
 *   - sm: Small size.
 *   - md: Medium size.
 *   - lg: Large size.
 *   - icon: Icon size.
 * @param {TypeVariantsButtons["variant"]} props.variant - The variant of the button.
 * @param {React.HTMLAttributes<HTMLElement>} props.props - Additional HTML attributes for the button.
 *
 * @returns {JSX.Element} The rendered Button component.
 */
function Button({ asChild, ref, size, variant, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            {...props}
            className={VariantsButtons({
                size,
                variant,
                className: props.className,
            })}
        />
    );
}

export default Button;

export type TypeVariantsButtons = Partial<VariantProps<typeof VariantsButtons>>;