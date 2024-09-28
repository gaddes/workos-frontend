import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import omit from "lodash/omit";
import {
  UsersResponse,
  UsersWithRolesResponse,
  RolesResponse,
  Role,
} from "./workos.api.types.ts";
import { USERS_ROUTE, ROLES_ROUTE } from "./workos.api.routes.ts";

export const workosApi = createApi({
  reducerPath: "workosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3002/" }),
  endpoints: (builder) => ({
    users: builder.query<UsersWithRolesResponse, void>({
      async queryFn(_args, _api, _extraOptions, baseQuery) {
        const usersPromise = baseQuery({ url: USERS_ROUTE });
        const rolesPromise = baseQuery({ url: ROLES_ROUTE });

        const [usersResult, rolesResult] = await Promise.all([
          usersPromise,
          rolesPromise,
        ]);

        if (usersResult.error)
          return { error: usersResult.error as FetchBaseQueryError };
        if (rolesResult.error)
          return { error: rolesResult.error as FetchBaseQueryError };

        const usersData = usersResult.data as UsersResponse;
        const rolesData = rolesResult.data as RolesResponse;

        return {
          data: {
            ...usersData,
            data: usersData.data.map((user) => ({
              ...omit(user, "roleId"),
              role: rolesData.data.find(
                (role) => role.id === user.roleId,
              ) as Role,
            })),
          },
        };
      },
    }),

    roles: builder.query<RolesResponse, void>({
      query: () => ROLES_ROUTE,
    }),
  }),
});

export const { useUsersQuery, useRolesQuery } = workosApi;
