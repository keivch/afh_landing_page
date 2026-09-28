/** @type {import('next-sitemap').IConfig} */
const priorities = {
  "/": 1,
  "/contact_us": 0.9,
  "/about_us": 0.8,
  "/galeria": 0.7,
};

module.exports = {
  siteUrl: "https://afhmetalmecanico.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/admin/*"],
  transform: async (config, path) => ({
    loc: path,
    changefreq: path === "/" ? "weekly" : "monthly",
    priority: priorities[path] ?? config.priority,
    lastmod: new Date().toISOString(),
  }),
};
