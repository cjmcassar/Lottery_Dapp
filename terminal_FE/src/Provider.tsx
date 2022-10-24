import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import theme from "@/config/theme";

export function Provider({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
