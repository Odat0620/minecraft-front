const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.url === "/login") {
    req.method = "GET";
  }
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

server.use(
  jsonServer.rewriter({
    "/sanctum/csrf-cookie": "/login",
    "/me": "/login",
    "/posts": "/posts?_expand=user&_embed=comments",
    "/posts/:id": `/posts/:id?_expand=user&_embed=comments`,
    "/users/:id": `/users/:id?_embed=posts`,
  }),
);

// Use default router
server.use(router);
server.listen(3003, () => {
  console.log("JSON Server is running");
});
