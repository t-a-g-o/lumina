/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/project/thisisaproject',
          destination: 'https://example.com',
          permanent: false,
        },
        // Add more redirects if you want to
      ];
    },
  };
  
  export default nextConfig;
  