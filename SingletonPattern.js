// Singleton Pattern

/**
 * A single instance for the app lifecycle
 * database connection or caching
 * improces performance and consistancy
 */

class Database {
  constructor() {
    if (!Database.instance) {
      Database.instance = this;
    }
    return Database.instance;
  }
}

const instance = new Database();
const instance2 = new Database();

Object.freeze(instance);

// Single instance is created below returns true

console.log(instance === instance2);

module.exports = instance;
