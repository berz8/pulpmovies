import { withPlausibleProxy } from "next-plausible";
/** @type {import('next').NextConfig} */
const nextConfig = withPlausibleProxy({
  customDomain: "https://analytics.pulpmovies.app",
})({});

export default nextConfig;
