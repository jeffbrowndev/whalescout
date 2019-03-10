const routes = require("next-routes");

// Dynamic routing for posts
module.exports = routes().add({
  name: "articleRoute",
  page: "article",
  pattern: "/article/:slug"
});
