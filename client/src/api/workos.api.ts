import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UsersResponse, RolesResponse } from "./workos.types.ts";

export const workosApi = createApi({
  reducerPath: "workosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3002/" }),
  endpoints: (builder) => ({
    users: builder.query<UsersResponse, void>({
      query: () => "users",
    }),

    roles: builder.query<RolesResponse, void>({
      query: () => "roles",
    }),
  }),
});

export const { useUsersQuery, useRolesQuery } = workosApi;
