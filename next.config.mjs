/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/compliance-certification.html",
        destination: "/projects/conduit",
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "framerusercontent.com", pathname: "/images/**" },
    ],
  },
}

export default nextConfig
