import {User, ROLES} from './01-enum';

const currentUser: User = {
  username: 'nicobytes',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if(currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if(currentUser.role === role2) {
    return true;
  }
  return false;
}

export const checkRoleV2 = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
}

export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta = checkAdminRole();
console.log(rta);

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log(rta2);

const rta3 = checkRoleV2(ROLES.ADMIN, ROLES.SELLER);
console.log("checkroleV2 " + rta3);

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log("checkroleV3 " + rta4);
