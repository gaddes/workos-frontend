import {
  AlertDialog,
  Button,
  DropdownMenu,
  Flex,
  Strong,
} from "@radix-ui/themes";

export const Delete = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger>
      <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
        Delete
      </DropdownMenu.Item>
    </AlertDialog.Trigger>
    <AlertDialog.Content maxWidth="450px">
      <AlertDialog.Title>Delete user</AlertDialog.Title>
      <AlertDialog.Description size="2">
        Are you sure? The user <Strong>X</Strong> will be permanently deleted.
      </AlertDialog.Description>

      <Flex gap="3" mt="4" justify="end">
        <AlertDialog.Cancel>
          <Button variant="outline" color="gray">
            <Strong>Cancel</Strong>
          </Button>
        </AlertDialog.Cancel>
        <AlertDialog.Action>
          <Button variant="surface" color="red">
            <Strong>Delete user</Strong>
          </Button>
        </AlertDialog.Action>
      </Flex>
    </AlertDialog.Content>
  </AlertDialog.Root>
);
