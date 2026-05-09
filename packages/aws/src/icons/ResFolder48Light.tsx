import { IconBase, IconBaseProps, IconType } from "@react-icons-cloud/core";
import React from "react";

export const ResFolder48Light: IconType = React.forwardRef<
  SVGSVGElement,
  IconBaseProps
>(({ color, ...props }, ref) => (
  <IconBase ref={ref} viewBox="0 0 48 48" color={color} {...props}>
    <title>Icon-Resource/General-Resource/Res_Folder_48_Light</title>
    <path
      fill={color && color !== "currentColor" ? color : "#232f3d"}
      d="M4 42h40V16H4zM16.586 6l3.708 3.708a1 1 0 0 0 .707.293H44V14H4V6zM46 9.001a1 1 0 0 0-1-1H21.415l-3.708-3.708A1 1 0 0 0 17 4H3a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1V15l-.002-.011H46z"
      fillRule="evenodd"
    />
  </IconBase>
));
ResFolder48Light.displayName = "ResFolder48Light";
