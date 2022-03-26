module.exports = {
  reactStrictMode: true,

  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  env: {
    'MYSQL_HOST': '190.231.67.172',
    'MYSQL_PORT': '5506',
    'MYSQL_DATABASE': "stock2",
    'MYSQL_USER': "vlongo",
    'MYSQL_PASSWORD': "nokia5800",
  }

}
