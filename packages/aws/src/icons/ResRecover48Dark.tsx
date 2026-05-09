import { IconBase, IconBaseProps, IconType } from "@react-icons-cloud/core";
import React from "react";

export const ResRecover48Dark: IconType = React.forwardRef<
  SVGSVGElement,
  IconBaseProps
>(({ color, ...props }, ref) => (
  <IconBase ref={ref} viewBox="0 0 48 48" color={color} {...props}>
    <title>Icon-Resource/General-Resource/Res_Recover_48_Dark</title>
    <path
      fill={color && color !== "currentColor" ? color : "#fff"}
      d="M45 24c0 11.58-9.42 21-21 21S3 35.58 3 24C3 16.674 6.9 9.783 13.181 6H5V4h11a1 1 0 0 1 1 1v11h-2V7.279c-.25.135-.504.262-.747.408C8.546 11.104 5 17.355 5 24c0 10.477 8.523 19 19 19s19-8.523 19-19S34.477 5 24 5V3c11.58 0 21 9.42 21 21"
      fillRule="evenodd"
    />
  </IconBase>
));
ResRecover48Dark.displayName = "ResRecover48Dark";
