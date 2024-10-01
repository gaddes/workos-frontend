import { Avatar, Flex, Text, Table, Skeleton, Strong } from "@radix-ui/themes";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

import { useDeleteUserMutation, useGetUsersQuery } from "api/workos.api";
import { TableFooter } from "components/TableFooter/TableFooter";
import { formatUtcDate } from "utils/date";

import { MoreActions, Delete, Edit } from "components/MoreActions";

export const UsersTable = () => {
  const { search: queryString } = useLocation();
  const { data, isLoading, isUninitialized, isFetching, isError } =
    useGetUsersQuery(queryString);

  const [deleteUser] = useDeleteUserMutation();

  if (isError) {
    toast.error("Error fetching users. Please try again.");
    return <Text>Error fetching users. Please try again</Text>;
  }

  if (data && !data.data.length) {
    return <Text>No matching results - please adjust your search term</Text>;
  }

  return (
    <Skeleton
      aria-label="loading users table"
      loading={isLoading || isUninitialized || isFetching}
    >
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
                <MoreActions>
                  <Delete onClick={() => deleteUser({ id: user.id })}>
                    <Delete.Title>Delete user</Delete.Title>
                    <Delete.Description>
                      Are you sure? The user{" "}
                      <Strong>
                        {user.first} {user.last}
                      </Strong>{" "}
                      will be permanently deleted.
                    </Delete.Description>
                    <Delete.SubmitText>Delete user</Delete.SubmitText>
                  </Delete>

                  {/* Not in scope! Intentionally missing props/children */}
                  <Edit>
                    <Edit.Title>Edit user</Edit.Title>
                  </Edit>
                </MoreActions>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <TableFooter data={data} />
      </Table.Root>
    </Skeleton>
  );
};
