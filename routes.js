const routes = require("next-routes");

// Dynamic routing for posts
module.exports = routes().add("article", "/article/:slug");
