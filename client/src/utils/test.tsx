import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider as StoreProvider } from "react-redux";
import { Theme } from "@radix-ui/themes";

import { store } from "../store.ts";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider store={store}>
      <Theme accentColor="violet">{children}</Theme>
    </StoreProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
