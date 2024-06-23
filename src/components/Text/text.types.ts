import type { PolymorphicComponentPropsWithRef } from "../../core/types/global";
import type { VariantProps } from "class-variance-authority";
import { VariantsText } from "./text.component";
import React from "react";

export type TextProps<C extends React.ElementType> =
    PolymorphicComponentPropsWithRef<C, VariantProps<typeof VariantsText>>;

export type TextComponent = <C extends React.ElementType = "span">(
    props: TextProps<C>,
) => React.ReactElement | null;
