/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.afhmetalmecanicos.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about_us'),
    await config.transform(config, '/contact_us'),
  ],
};
