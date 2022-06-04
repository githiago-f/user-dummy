import { UserRole } from "./vo/user-role.js";

export class User {
  /**
   * @param {string} uuid 
   * @param {string} name 
   * @param {string} isActive 
   * @param {(keyof UserRole)[]} roles
   */
  constructor(uuid, name, isActive, roles) {
    this.uuid = uuid;
    this.name = name;
    this.isActive = isActive;
    this.role = roles.map(key => UserRole[key]);
  }
}
