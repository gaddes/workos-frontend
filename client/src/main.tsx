import "@radix-ui/themes/styles.css";
import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";

import { store } from "./store.ts";
import { router } from "./main.routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider store={store}>
      <Theme accentColor="violet">
        <RouterProvider router={router} />
        <Toaster />
      </Theme>
    </StoreProvider>
  </StrictMode>,
);
