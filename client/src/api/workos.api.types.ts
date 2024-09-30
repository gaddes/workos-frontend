interface User {
  id: string; // UUID
  createdAt: string;
  updatedAt: string;
  first: string;
  last: string;
  roleId: string; // UUID
  photo: string; // URL
}

export interface GetUsersResponse {
  data: User[];
  next: number | null;
  prev: number | null;
  pages: number;
}

export type UserWithRole = Omit<User, "roleId"> & { role: Role };

export type GetUsersWithRolesResponse = Omit<GetUsersResponse, "data"> & {
  data: UserWithRole[];
};

export type GetUsersArgs = string; // query string

export interface DeleteUserArgs {
  id: string; // uuid for `user` object
}

export interface Role {
  id: string; // UUID
  createdAt: string;
  updatedAt: string;
  name: string;
  isDefault: boolean;
  description: string;
}

export interface GetRolesResponse {
  data: Role[];
  next: number | null;
  prev: number | null;
  pages: number;
}
