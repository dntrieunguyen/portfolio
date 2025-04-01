/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("./app/i18n/request.ts");
const nextConfig = {
  // Add image configuration
  images: {
    domains: [],
    remotePatterns: [],
    unoptimized: process.env.NODE_ENV === "development",
  },
  // Add assetPrefix configuration to handle static assets correctly
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
};

export default withNextIntl(nextConfig);
