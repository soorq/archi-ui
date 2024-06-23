import type { PolymorphicRef } from "../../core/types/global";
import type { TextComponent, TextProps } from "./text.types";
import { cva } from "class-variance-authority";
import { cn } from "../../libs/merge";
import React from "react";

export const VariantsText = cva("w-full", {
    variants: {
        emphasis: {
            low: "text-gray-600 font-light",
        },
        size: {
            sm: "text-sm",
            base: "text-base",
            lg: "text-lg",
            xl: "text-xl",
            "2xl": "text-2xl",
            "3xl": "text-3xl",
        },
        weight: {
            thin: "font-thin",
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
            black: "font-black",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
            justify: "text-justify",
        },
        italic: {
            true: "italic",
        },
        underline: {
            true: "underline underline-offset-2",
        },
    },
    defaultVariants: {
        size: "base",
        align: "left",
        weight: "normal",
    },
});

// @ts-expect-error
const Text: TextComponent = React.forwardRef(
    <C extends React.ElementType = "span">(
        {
            as,
            align,
            size,
            emphasis,
            italic,
            underline,
            weight,
            className,
            ...props
        }: TextProps<C>,
        ref?: PolymorphicRef<C>,
    ) => {
        const Comp = as || "span";

        return (
            <Comp
                ref={ref}
                className={cn(
                    VariantsText({
                        size,
                        weight,
                        emphasis,
                        italic,
                        underline,
                        align,
                        className,
                    }),
                )}
                {...props}
            />
        );
    },
);

export default Text;
