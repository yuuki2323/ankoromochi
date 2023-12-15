/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["placehold.jp"],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ankoromochi' : '',
}

module.exports = nextConfig
