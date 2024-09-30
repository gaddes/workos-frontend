import * as React from "react";
import {
  AlertDialog,
  Button,
  DropdownMenu,
  Flex,
  Strong,
} from "@radix-ui/themes";

import { useDeleteUserMutation } from "api/workos.api.ts";
import { MoreActionsContext } from "../MoreActions.context.tsx";

export const Delete = () => {
  const [open, setOpen] = React.useState(false);
  const context = React.useContext(MoreActionsContext);
  const [deleteUser] = useDeleteUserMutation();

  if (!context) {
    throw new Error(
      "MoreActionsContext must be used within a MoreActionsProvider",
    );
  }

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent AlertDialog closing (we only want this behaviour when the API call is successful)
    e.preventDefault();

    try {
      await deleteUser({ id: context.user.id }).unwrap();
      context.setOpen(false);
    } catch {
      console.error("Error deleting user. Please try again.");
    }
  };

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Trigger>
        <DropdownMenu.Item
          shortcut="⌘ ⌫"
          color="red"
          onClick={() => setOpen(true)}
        >
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
            <Button variant="surface" color="red" onClick={handleDelete}>
              <Strong>Delete user</Strong>
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};
