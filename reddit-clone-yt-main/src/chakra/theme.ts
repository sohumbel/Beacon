import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { Input } from "./input";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#043f61",
    },
  },
  fonts: {
    body: "Calibri, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "#DAFFFD",
      },
    }),
  },
  components: {
    Button,
    // Input, // not working for some reason - come back to this
  },
});
