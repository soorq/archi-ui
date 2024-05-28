declare module "*.svg" {
    import type { HTMLProps, FC } from "react";

    export const ReactComponent: FC<HTMLProps<SVGElement>>;
}
