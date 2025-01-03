// Decorator Pattern

const authMiddleware = (fn) => {
  return (req, res) => {
    if (req.isAuthenticated) fn(req, res);
    else res.status(401).send("Unauthorized");
  };
};

/**
 * Enhances the functionality of an object at runtime without changing its core structure
 * helful in adding behaviours like logging, authenticating or ratelimiting
 * Technically we can say each middleware is a decorator pattern
 * in react HOC is a decorator pattern component
 * Decorators are essentially functions that wrap or modify a class, method, property, or parameter.
 * They allow you to add metadata, alter functionality, or add pre/post behavior without changing the original implementation directly.
 */

/**
 *
 * A cpu intensive task which is a pure function, insted of calling function each time for same input we cache the value but without modifying the
 * original function
 *
 */

function cpuIntesive(x) {
  return x;
}

function cahceDeco(fun) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) return cache.get(x);

    let res = fun(x);

    cache.set(x, res);

    return res;
  };
}
