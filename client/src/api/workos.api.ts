import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import omit from "lodash/omit";
import {
  GetUsersResponse,
  GetUsersWithRolesResponse,
  GetRolesResponse,
  Role,
  GetUsersArgs,
  DeleteUserArgs,
  GetRolesArgs,
  UpdateRoleArgs,
} from "./workos.api.types.ts";
import { USERS_ROUTE, ROLES_ROUTE } from "./workos.api.routes.ts";

export const workosApi = createApi({
  reducerPath: "workosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3002/" }),
  tagTypes: ["Users", "Roles"],
  endpoints: (builder) => ({
    getUsers: builder.query<GetUsersWithRolesResponse, GetUsersArgs>({
      async queryFn(queryString, _api, _extraOptions, baseQuery) {
        const usersPromise = baseQuery({ url: `${USERS_ROUTE}${queryString}` });
        const rolesPromise = baseQuery({ url: ROLES_ROUTE });

        const [usersResult, rolesResult] = await Promise.all([
          usersPromise,
          rolesPromise,
        ]);

        if (usersResult.error)
          return { error: usersResult.error as FetchBaseQueryError };
        if (rolesResult.error)
          return { error: rolesResult.error as FetchBaseQueryError };

        const usersData = usersResult.data as GetUsersResponse;
        const rolesData = rolesResult.data as GetRolesResponse;

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
      providesTags: ["Users"],
    }),

    deleteUser: builder.mutation<void, DeleteUserArgs>({
      query: (args) => ({
        url: `${USERS_ROUTE}/${args.id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, error) => (error ? [] : ["Users"]),
    }),

    updateRole: builder.mutation<void, UpdateRoleArgs>({
      query: ({ id, ...args }) => ({
        url: `${ROLES_ROUTE}/${id}`,
        method: "PATCH",
        body: args,
      }),
      invalidatesTags: (_result, error) => (error ? [] : ["Roles"]),
    }),

    getRoles: builder.query<GetRolesResponse, GetRolesArgs>({
      query: (queryString) => `${ROLES_ROUTE}${queryString}`,
      providesTags: ["Roles"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetRolesQuery,
  useDeleteUserMutation,
  useUpdateRoleMutation,
} = workosApi;
