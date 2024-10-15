import { withPlausibleProxy } from "next-plausible";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

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
});

export default nextConfig;
