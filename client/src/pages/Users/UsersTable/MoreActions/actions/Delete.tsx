import * as React from "react";
import {
  AlertDialog,
  Button,
  DropdownMenu,
  Flex,
  Strong,
} from "@radix-ui/themes";

import { MoreActionsContext } from "../MoreActions.context.tsx";

export const Delete = () => {
  const context = React.useContext(MoreActionsContext);

  if (!context) {
    throw new Error(
      "MoreActionsContext must be used within a MoreActionsProvider",
    );
  }

  const deleteUser = () => {
    console.log(`Deleting user with id: ${context.user.id}`);
    // Only close modal if API call is successful!
    context.setOpen(false);
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
          Delete
        </DropdownMenu.Item>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Delete user</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? The user{" "}
          <Strong>
            {context.user.first} {context.user.last}
          </Strong>{" "}
          will be permanently deleted.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="outline" color="gray">
              <Strong>Cancel</Strong>
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="surface" color="red" onClick={deleteUser}>
              <Strong>Delete user</Strong>
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};
