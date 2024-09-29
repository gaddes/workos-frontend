import * as React from "react";

interface IMoreActionsContext {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface IMoreActionsProvider {
  children: React.ReactNode;
}

export const MoreActionsContext = React.createContext<
  IMoreActionsContext | undefined
>(undefined);

MoreActionsContext.displayName = "MoreActionsContext";

export const MoreActionsProvider: React.FC<IMoreActionsProvider> = ({
  children,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <MoreActionsContext.Provider value={{ open, setOpen }}>
      {children}
    </MoreActionsContext.Provider>
  );
};
