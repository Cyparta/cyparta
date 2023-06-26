/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    // output: 'export',
    distDir:"_static",
    // webpack5: false,
    images: {
        domains: ['cyparta-backend-gf7qm.ondigitalocean.app', '192.168.1.12', 'sadakatcdn.cyparta.com'],
        unoptimized:true
    },
    // async redirects() {
    //     return [
    //       {
    //         source: '/projects/:id',
    //         destination: '/projects/:id',
    //         permanent: true,
    //       },
    //     ];
    //   },
    // basePath:"cyparta"
}

module.exports = nextConfig
