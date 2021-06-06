import {extendTheme} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"

export const myNewTheme = extendTheme ({
    colors: {
        naranja: "#FFB649",
        naranjaOscuro: "#FF9900",
        blanco: "#EEEEEE",
        negro: "black",

    },

})

// This is the default breakpoint
const breakpoints = createBreakpoints({
  sm: "400px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
})
