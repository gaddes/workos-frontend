interface User {
  id: string; // UUID
  createdAt: string;
  updatedAt: string;
  first: string;
  last: string;
  roleId: string; // UUID
  photo: string; // URL
}

export interface UsersResponse {
  data: User[];
  next: number | null;
  prev: number | null;
  pages: number;
}

type UserWithRole = Omit<User, "roleId"> & { role: Role };

export type UsersWithRolesResponse = Omit<UsersResponse, "data"> & {
  data: UserWithRole[];
};

export type UsersArgs = string;

export interface Role {
  id: string; // UUID
  createdAt: string;
  updatedAt: string;
  name: string;
  isDefault: boolean;
  description: string;
}

export interface RolesResponse {
  data: Role[];
  next: number | null;
  prev: number | null;
  pages: number;
}
