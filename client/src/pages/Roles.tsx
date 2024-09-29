import { Text } from "@radix-ui/themes";
import { useGetRolesQuery } from "api/workos.api.ts";

export const Roles = () => {
  const { data } = useGetRolesQuery();

  console.log(data);

  return <Text>Roles</Text>;
};
