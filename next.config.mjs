import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // define domain that "next/image" can use
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

// i18n
const withNextIntl = createNextIntlPlugin('./src/i18n/i18n.config.ts');

export default withNextIntl(nextConfig);
