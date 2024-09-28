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

interface Role {
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
