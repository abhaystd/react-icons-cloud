import { IconBase, IconBaseProps, IconType } from "@react-icons-cloud/core";
import React from "react";

export const ResLogs48Dark: IconType = React.forwardRef<
  SVGSVGElement,
  IconBaseProps
>(({ color, ...props }, ref) => (
  <IconBase ref={ref} viewBox="0 0 48 48" color={color} {...props}>
    <title>Icon-Resource/General-Resource/Res_Logs_48_Dark</title>
    <path
      fill={color && color !== "currentColor" ? color : "#fff"}
      d="M28 41h7v-2h-7zm-15 0h13v-2H13zm9-5h13v-2H22zm-9 0h7v-2h-7zm9.948-5.683-1.896-.632 4-12 1.896.632zm11.677-7.097a1 1 0 0 1 0 1.562l-5 4-1.25-1.562 4.024-3.219-4.024-3.219 1.25-1.562zm-21.25 1.562a1 1 0 0 1 0-1.562l5-4 1.25 1.562-4.024 3.219 4.024 3.219-1.25 1.562zM10 44l.007-40H28v9a1 1 0 0 0 1 1h9v30zM30 5.414 36.586 12H30zm9.707 6.879-10-10A1 1 0 0 0 29 2H10c-1.178 0-2 .822-2 2v40c0 1.14.859 2 2 2h28c1.141 0 2-.86 2-2V13a1 1 0 0 0-.293-.707"
      fillRule="evenodd"
    />
  </IconBase>
));
ResLogs48Dark.displayName = "ResLogs48Dark";
