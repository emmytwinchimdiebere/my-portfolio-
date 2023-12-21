/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental : {
        serverActions:true
    },

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
          },
          {
            protocol: 'https',
            hostname: "firebasestorage.googleapis.com"
          }, 

          {
            protocol:"https",
            hostname: "img.clerk.com"
          }
        ],
      },
}

module.exports = nextConfig
