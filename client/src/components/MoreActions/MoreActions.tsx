import * as React from "react";
import { DropdownMenu, IconButton } from "@radix-ui/themes";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import styles from "./MoreActions.module.css";
import { MoreActionsContext } from "./MoreActions.context.tsx";

interface IMoreActions {
  children: React.ReactNode;
  id: string;
}

export const MoreActions: React.FC<IMoreActions> = ({ children, id }) => {
  const context = React.useContext(MoreActionsContext);

  if (!context) {
    throw new Error(
      "MoreActionsContext must be used within a MoreActionsProvider",
    );
  }

  const isOpen = id === context.id;
  const openDropdown = () => context.setId(id);
  const closeDropdown = () => context.setId(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter") {
      openDropdown();
    }
  };

  return (
    <DropdownMenu.Root open={isOpen}>
      <DropdownMenu.Trigger>
        <IconButton
          aria-label="more actions"
          className={styles.iconButton}
          variant="ghost"
          color="gray"
          radius="full"
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
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
