/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["lh3.googleusercontent.com"],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
