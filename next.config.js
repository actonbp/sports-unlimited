/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["sportsunlimitednc.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sportsunlimitednc.com",
        pathname: "/images/**",
      }
    ],
  },
}

module.exports = nextConfig

