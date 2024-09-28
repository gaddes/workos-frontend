import { Text } from "@radix-ui/themes";
import { useUsersQuery } from "api/workos.api.ts";

export const Users = () => {
  const { data } = useUsersQuery();

  console.log(data);

  return <Text>Users</Text>;
};
