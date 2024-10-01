import * as React from "react";

export interface IMoreActionsContext {
  id: string | null;
  setId: (id: string | null) => void;
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
  const [id, setId] = React.useState<string | null>(null);

  return (
    <MoreActionsContext.Provider value={{ id, setId }}>
      {children}
    </MoreActionsContext.Provider>
  );
};
