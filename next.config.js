module.exports = {
  reactStrictMode: true,
  "dev": "NODE_OPTIONS='--inspect' next dev",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
