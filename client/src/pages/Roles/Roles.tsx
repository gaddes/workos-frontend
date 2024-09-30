import { Flex } from "@radix-ui/themes";
import { Search } from "components/Search/Search.tsx";
import { RolesTable } from "./RolesTable.tsx";

export const Roles = () => (
  <Flex direction="column" gap="5">
    <Search placeholder="Search by role..." />
    <RolesTable />
  </Flex>
);
