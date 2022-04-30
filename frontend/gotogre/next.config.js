/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
		config.resolve.alias['@'] = path.join(__dirname, 'app');
		return config;
	},
}

module.exports = nextConfig
