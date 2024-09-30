import { Text, Table, Skeleton } from "@radix-ui/themes";
import { useLocation } from "react-router-dom";

import { useGetRolesQuery } from "api/workos.api.ts";
import { TableFooter } from "components/TableFooter/TableFooter.tsx";

export const RolesTable = () => {
  const { search: queryString } = useLocation();
  const { data, isLoading, isUninitialized, isFetching, isError } =
    useGetRolesQuery(queryString);

  if (isError) {
    return <Text>Error fetching roles - please try again</Text>;
  }

  if (data && !data.data.length) {
    return <Text>No matching results - please adjust your search term</Text>;
  }

  return (
    <Skeleton
      aria-label="loading roles table"
      loading={isLoading || isUninitialized || isFetching}
    >
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Default</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data?.data.map((role) => (
            <Table.Row key={role.id} align="center">
              <Table.RowHeaderCell>{role.name}</Table.RowHeaderCell>
              <Table.Cell>{role.description}</Table.Cell>
              <Table.Cell>{role.isDefault.toString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <TableFooter data={data} />
      </Table.Root>
    </Skeleton>
  );
};
