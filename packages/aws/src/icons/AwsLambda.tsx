import { IconBase, IconBaseProps, IconType } from "@react-icons-cloud/core";
import React from "react";

export const AwsLambda: IconType = React.forwardRef<
  SVGSVGElement,
  IconBaseProps
>(({ color, ...props }, ref) => (
  <IconBase ref={ref} viewBox="0 0 24 24" color={color} {...props}>
    <path d="M12 2 2 7l10 5 10-5z" strokeWidth="2" />
    <path d="m17 21-4.5-9h3l4.5 9M7 21l4.5-9h-3L4 21" strokeWidth="2" />
  </IconBase>
));
AwsLambda.displayName = "AwsLambda";
