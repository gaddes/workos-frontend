import * as React from "react";
import {
  AlertDialog,
  Button,
  DropdownMenu,
  Flex,
  Strong,
} from "@radix-ui/themes";
import toast from "react-hot-toast";

import { MoreActionsContext } from "../../MoreActions.context.tsx";
import { DeleteTitle } from "./DeleteTitle.tsx";
import { DeleteDescription } from "./DeleteDescription.tsx";
import { DeleteSubmitText } from "./DeleteSubmitText.tsx";
import { IDelete } from "./Delete.types.ts";

export const Delete: IDelete = ({ onClick, children }) => {
  const [open, setOpen] = React.useState(false);
  const context = React.useContext(MoreActionsContext);

  if (!context) {
    throw new Error(
      "MoreActionsContext must be used within a MoreActionsProvider",
    );
  }

  const title = React.Children.toArray(children).find((child) => {
    // @ts-expect-error - this component only accepts ReactElements
    return "type" in child ? child.type === Delete.Title : false;
  });

  const description = React.Children.toArray(children).find((child) => {
    // @ts-expect-error - this component only accepts ReactElements
    return "type" in child ? child.type === Delete.Description : false;
  });

  const submitText = React.Children.toArray(children).find((child) => {
    // @ts-expect-error - this component only accepts ReactElements
    return "type" in child ? child.type === Delete.SubmitText : false;
  });

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent AlertDialog closing (we only want this behaviour when the API call is successful)
    e.preventDefault();

    try {
      await onClick().unwrap();
      context.setOpen(false);
      toast.success("Item deleted");
    } catch {
      toast.error("Error deleting item. Please try again.");
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
        <AlertDialog.Title>{title}</AlertDialog.Title>
        <AlertDialog.Description size="2">
          {description}
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="outline" color="gray">
              <Strong>Cancel</Strong>
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="surface" color="red" onClick={handleDelete}>
              {submitText}
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

Delete.Title = DeleteTitle;
Delete.Description = DeleteDescription;
Delete.SubmitText = DeleteSubmitText;
