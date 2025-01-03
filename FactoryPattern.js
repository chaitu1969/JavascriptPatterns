// Factory pattern

/**
 * Helps create Object without specifying the exact class
 * helpful for handling different object types in a scalable manner
 */

class UserService {}
class AdminService {}

const FactoryService = {
  createObject: (role) => {
    if (role === "user") return new UserService();
    if (role === "admin") return new AdminService();
  },
};

const userObject = FactoryService.createObject("user");
