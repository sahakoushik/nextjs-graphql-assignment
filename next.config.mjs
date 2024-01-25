/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.react-finland.fi',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'www.reason-conf.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'typeofconf.com',
            port: '',
            pathname: '/**',
          },
        ],
    }
};

export default nextConfig;
