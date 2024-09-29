import * as React from "react";
import { DropdownMenu, IconButton } from "@radix-ui/themes";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

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

  return (
    <DropdownMenu.Root open={context.open}>
      <DropdownMenu.Trigger>
        <IconButton
          aria-label="more actions"
          className={styles.iconButton}
          variant="ghost"
          color="gray"
          onClick={openDropdown}
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

export const MoreActions = () => (
  <MoreActionsProvider>
    <MoreActionsComponent />
  </MoreActionsProvider>
);
