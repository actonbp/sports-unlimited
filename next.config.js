/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sportsunlimitednc.com",
        pathname: "/**",
      }
    ],
  },
  output: 'standalone',
}

module.exports = nextConfig

