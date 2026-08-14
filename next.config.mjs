/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons', '@remixicon/react'],
  },
};

export default nextConfig;
