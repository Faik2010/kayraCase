const NextFederationPlugin = require('@module-federation/nextjs-mf');
const deps = require('./package.json').dependencies;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['antd', '@ant-design/icons', 'rc-util'],

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'products',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './Products': './src/components/Products.tsx',
          },
          shared: {
            react: { 
              singleton: true, 
              eager: true,
              requiredVersion: false,
            },
            'react-dom': { 
              singleton: true, 
              eager: true,
              requiredVersion: false,
            },
            antd: {
              singleton: true,
              eager: true,
              requiredVersion: false,
            },
            '@ant-design/icons': {
              singleton: true,
              eager: true,
              requiredVersion: false,
            },
          },
        })
      );

      config.output = {
        ...config.output,
        publicPath: 'auto',
      };
    }

    return config;
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'unsafe-none',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 