// proxy pattern
const proxyFetch = new Proxy(fetch, {
  apply: (target, thisArg, args) => {
    console.log(`Fetching URL ${args[0]}`);
    return target.apply(thisArg, args);
  },
});

/**
 * Adds a layer between the client and object
 * Userful in monitoring and controlling access
 */
