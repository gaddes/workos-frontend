import { Text } from "@radix-ui/themes";
import { useRolesQuery } from "api/workos.api.ts";

export const Roles = () => {
  const { data } = useRolesQuery();

  console.log(data);

  return <Text>Roles</Text>;
};
