import { Flex } from "@radix-ui/themes";
import { Search } from "components/Search/Search.tsx";
import { MoreActionsProvider } from "components/MoreActions";
import { RolesTable } from "./RolesTable.tsx";

export const Roles = () => (
  <Flex direction="column" gap="5">
    <Search placeholder="Search by role..." />

    <MoreActionsProvider>
      <RolesTable />
    </MoreActionsProvider>
  </Flex>
);
