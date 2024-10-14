import { withPlausibleProxy } from "next-plausible";
/** @type {import('next').NextConfig} */
const nextConfig = withPlausibleProxy({
  customDomain: "https://analytics.pulpmovies.app",
})({
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
  compress: false,
});

export default nextConfig;
