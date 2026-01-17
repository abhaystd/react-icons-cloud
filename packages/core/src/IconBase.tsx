import React from "react";

export interface IconBaseProps
    extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    title?: string;
}

export type IconType = React.ForwardRefExoticComponent<
    IconBaseProps & React.RefAttributes<SVGSVGElement>
>;

export const IconBase = React.forwardRef<
    SVGSVGElement,
    IconBaseProps
>(({ size = "1em", color = "currentColor", title, children, ...props }, ref) => (
    <svg
        ref={ref}
        width={size}
        height={size}
        fill={color}
        viewBox="0 0 24 24"
        role="img"
        aria-hidden={!title}
        {...props}
    >
        {title && <title>{title}</title>}
        {children}
    </svg>
));

IconBase.displayName = "IconBase";
