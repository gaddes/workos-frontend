import { Avatar, Flex, Table, Text, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useUsersQuery } from "api/workos.api.ts";
import { formatUtcDate } from "utils/date";
import { useState, useCallback, ChangeEvent } from "react";

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
      <TextField.Root
        placeholder="Search by name…"
        size="2"
        onChange={handleChange}
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <Table.Root>
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
            <Table.Row key={user.id}>
              <Table.RowHeaderCell>
                <Flex gap="2" align="center">
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
              <Table.Cell>...</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
};
