import type { TypeVariantsButtons } from "./button.component";

type AsChildProps<DefaultElementProps> =
    | ({ asChild?: false } & DefaultElementProps)
    | { asChild: true; children: React.ReactNode };

export type ButtonProps = Partial<
    AsChildProps<React.ButtonHTMLAttributes<HTMLButtonElement>> & {
        /**
         * Defines optional properties for the CSS class name and inline styles of a component.
         */
        className?: string;
        /**
         * Extracts the 'size' properties from the TypeVariantsButtons type.
         * @param {TypeVariantsButtons["size"]} props.size - The size of the button. Available sizes are:
         *   - default: Default size.
         *   - sm: Small size.
         *   - md: Medium size.
         *   - lg: Large size.
         *   - icon: Icon size.
         */
        size: TypeVariantsButtons["size"];
        /**
         * Specifies the type of the 'variant' property from the TypeVariantsButtons object.
         * @param {TypeVariantsButtons["variant"]} props.variant - The styles of the button. Available variants are:
         *   - default: Default styles implementing.
         *   - primary: Primary styles implement.
         *   - secondary: Secondary styles implement.
         *   - ghost: Ghost styles implement.
         *   - outline: Outline styles implement.
         *   - success: Success styles implement.
         *   - destructive: Destructive styles implement.
         *   - link: Link styles implement.
         *   - icon: Icon size.
         */
        variant: TypeVariantsButtons["variant"];
        /**
         * Specifies the type of the 'ref' property as a React ref object for button HTML attributes.
         */
        ref: React.RefObject<React.ButtonHTMLAttributes<HTMLButtonElement>>;
    }
>;
