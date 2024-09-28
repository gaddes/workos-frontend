import "@radix-ui/themes/styles.css";
import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Theme } from "@radix-ui/themes";

import { router } from "./main.routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme accentColor="violet">
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>,
);
