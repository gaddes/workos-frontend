import { Table } from "@radix-ui/themes";
import { useUsersQuery } from "api/workos.api.ts";
import { formatUtcDate } from "utils/date";

export const Users = () => {
  const { data, isLoading, isUninitialized, isError } = useUsersQuery();

  console.log(data);

  if (isLoading || isUninitialized) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching users</div>;
  }

  return (
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
        {data.data.map((user) => (
          <Table.Row key={user.id}>
            <Table.RowHeaderCell>{`${user.first} ${user.last}`}</Table.RowHeaderCell>
            <Table.Cell>{user.role.name}</Table.Cell>
            <Table.Cell>{formatUtcDate(user.createdAt)}</Table.Cell>
            <Table.Cell>...</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
