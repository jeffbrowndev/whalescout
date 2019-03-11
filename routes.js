const nextRoutes = require("@yolkai/next-routes").default;

// Dynamic routing for posts
const routes = nextRoutes().add({
  name: "articleRoute",
  page: "article",
  pattern: "/article/:slug"
});

module.exports = routes;
