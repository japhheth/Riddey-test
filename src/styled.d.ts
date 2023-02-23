// import original module declarations
import "styled-components";

import { primaryColors, fontWeights, media } from "./theme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: typeof primaryColors;
    };
    fontWeights: typeof fontWeights;
    media: typeof media;
  }
}
