import { twMerge } from "tailwind-merge";
import React from "react";

function Slot({
    children,
    ...props
}: React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
}) {
    if (React.isValidElement(children)) {
        return React.cloneElement(children, {
            ...props,
            ...children.props,
            style: {
                ...props.style,
                ...children.props.style,
            },
            className: twMerge(props.className, children.props.className),
        });
    }
    if (React.Children.count(children) > 1) {
        React.Children.only(null);
    }
    return null;
}

export default Slot;
