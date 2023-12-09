import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Theme } from "@radix-ui/themes";
import { MantineProvider } from "@mantine/core";
import { router } from "@/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <MantineProvider>
        <Theme>
          <RouterProvider router={router} />
        </Theme>
      </MantineProvider>
    </ChakraProvider>
  </React.StrictMode>
);
