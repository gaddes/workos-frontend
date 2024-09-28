import { useState, useCallback, ChangeEvent } from "react";
import { Avatar, Button, Flex, Strong, Table, Text } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";

import { useUsersQuery } from "api/workos.api.ts";
import { formatUtcDate } from "utils/date.ts";
import { Search } from "components/Search/Search.tsx";
import { MoreButton } from "./MoreButton/MoreButton.tsx";
import { TableFooter } from "./TableFooter/TableFooter.tsx";

export const Users = () => {
  const { data, isLoading, isUninitialized, isError } = useUsersQuery();

  const [searchValue, setSearchValue] = useState("");

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    [setSearchValue],
  );

  if (isLoading || isUninitialized) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching users</div>;
  }

  const filteredData = data.data.filter((user) => {
    const fullName = `${user.first} ${user.last}`;
    return fullName.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <Flex direction="column" gap="5">
      <Flex gap="2" justify="between">
        <Search onChange={handleChange} placeholder="Search by name..." />

        <Button onClick={() => alert("I'm not in scope 🥲")}>
          <PlusIcon /> <Strong>Add user</Strong>
        </Button>
      </Flex>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>User</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Joined</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {filteredData.map((user) => (
            <Table.Row key={user.id} align="center">
              <Table.RowHeaderCell>
                <Flex gap="2">
                  <Avatar
                    src={user.photo}
                    fallback={user.first.substring(0, 1).toUpperCase()}
                    radius="full"
                    size="1"
                  />
                  <Text>
                    {user.first} {user.last}
                  </Text>
                </Flex>
              </Table.RowHeaderCell>
              <Table.Cell>{user.role.name}</Table.Cell>
              <Table.Cell>{formatUtcDate(user.createdAt)}</Table.Cell>
              <Table.Cell justify="end">
                <MoreButton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <TableFooter />
      </Table.Root>
    </Flex>
  );
};
