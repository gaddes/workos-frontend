import { Avatar, Flex, Text, Table, Skeleton } from "@radix-ui/themes";
import { useLocation } from "react-router-dom";

import { useUsersQuery } from "api/workos.api.ts";
import { formatUtcDate } from "utils/date.ts";

import { MoreButton } from "./MoreButton/MoreButton.tsx";
import { TableFooter } from "./TableFooter/TableFooter.tsx";

export const UsersTable = () => {
  const { search: queryString } = useLocation();
  const { data, isLoading, isUninitialized, isFetching, isError } =
    useUsersQuery(queryString);

  if (isError) {
    return <div>Error fetching users</div>;
  }

  return (
    <Skeleton loading={isLoading || isUninitialized || isFetching}>
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
          {data?.data.map((user) => (
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

        {data?.pages && data?.pages > 1 && <TableFooter />}
      </Table.Root>
    </Skeleton>
  );
};
