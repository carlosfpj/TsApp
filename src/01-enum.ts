export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

export type User = {
  username: string;
  role: ROLES;
}

export const carlosUser: User = {
  username: 'carlos',
  role: ROLES.ADMIN
}
