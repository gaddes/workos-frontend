import * as React from "react";
import { DropdownMenu, IconButton } from "@radix-ui/themes";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import { UserWithRole } from "api/workos.api.types.ts";

import styles from "./MoreActions.module.css";
import {
  MoreActionsContext,
  MoreActionsProvider,
} from "./MoreActions.context.tsx";
import { Delete } from "./actions/Delete.tsx";

const MoreActionsComponent = () => {
  const context = React.useContext(MoreActionsContext);

  if (!context) {
    throw new Error(
      "MoreActionsContext must be used within a MoreActionsProvider",
    );
  }

  const openDropdown = () => context.setOpen(true);
  const closeDropdown = () => context.setOpen(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter") {
      openDropdown();
    }
  };

  return (
    <DropdownMenu.Root open={context.open}>
      <DropdownMenu.Trigger>
        <IconButton
          aria-label="more actions"
          className={styles.iconButton}
          variant="ghost"
          color="gray"
          onClick={openDropdown}
          onKeyDown={handleKeyDown}
        >
          <DotsHorizontalIcon />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        onEscapeKeyDown={closeDropdown}
        onPointerDownOutside={closeDropdown}
      >
        <Delete />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

interface IMoreActions {
  user: UserWithRole;
}

export const MoreActions: React.FC<IMoreActions> = ({ user }) => (
  <MoreActionsProvider user={user}>
    <MoreActionsComponent />
  </MoreActionsProvider>
);
