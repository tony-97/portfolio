declare module "*.svg?svgUse" {
  import { FC, SVGProps } from "react";

  // The @svg-use plugin exports the icon under the name 'Component'
  export const Component: FC<SVGProps<SVGSVGElement>>;
}
