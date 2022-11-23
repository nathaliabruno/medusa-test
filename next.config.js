/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "via.placeholder.com",
      "localhost:3000",
      "medusa-public-images.s3.eu-west-1.amazonaws.com",
    ],
  },
};
