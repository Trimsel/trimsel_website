import nextConfig from 'eslint-config-next/core-web-vitals';

const config = [
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
  ...nextConfig,
  {
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
];

export default config;
