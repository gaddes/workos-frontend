import * as React from "react";
import { UserWithRole } from "api/workos.api.types.ts";

interface IMoreActionsContext {
  open: boolean;
  setOpen: (open: boolean) => void;
  user: UserWithRole;
}

interface IMoreActionsProvider {
  children: React.ReactNode;
  user: UserWithRole;
}

export const MoreActionsContext = React.createContext<
  IMoreActionsContext | undefined
>(undefined);

MoreActionsContext.displayName = "MoreActionsContext";

export const MoreActionsProvider: React.FC<IMoreActionsProvider> = ({
  children,
  user,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <MoreActionsContext.Provider value={{ open, setOpen, user }}>
      {children}
    </MoreActionsContext.Provider>
  );
};
