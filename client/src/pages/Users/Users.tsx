import { Button, Flex, Strong } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";

import { Search } from "components/Search/Search.tsx";
import { UsersTable } from "./UsersTable.tsx";

export const Users = () => (
  <Flex direction="column" gap="5">
    <Flex gap="2" justify="between">
      <Search placeholder="Search by name..." />

      <Button onClick={() => alert("I'm not in scope 🥲")}>
        <PlusIcon /> <Strong>Add user</Strong>
      </Button>
    </Flex>

    <UsersTable />
  </Flex>
);
