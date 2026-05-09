import { IconBase, IconBaseProps, IconType } from "@react-icons-cloud/core";
import React from "react";

export const SampleIcon: IconType = React.forwardRef<
  SVGSVGElement,
  IconBaseProps
>(({ color, ...props }, ref) => (
  <IconBase ref={ref} viewBox="0 0 24 24" color={color} {...props}>
    <path d="M12 2 2 7l10 5 10-5z" strokeWidth="2" />
    <path d="m2 17 10 5 10-5M2 12l10 5 10-5" strokeWidth="2" />
  </IconBase>
));
SampleIcon.displayName = "SampleIcon";
