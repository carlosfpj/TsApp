enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

type User = {
  username: string;
  role: ROLES;
}

const carlosUser: User = {
  username: 'carlos',
  role: ROLES.ADMIN
}
