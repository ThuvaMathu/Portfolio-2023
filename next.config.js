/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MY_SECRET_ACCESS_KEY: process.env.MY_SECRET_ACCESS_KEY,
    MY_ACCESS_KEY_ID: process.env.MY_ACCESS_KEY_ID,
    I_IM_WORKING: process.env.I_IM_WORKING,
  },
  images: {
    domains: [
      "jnj-flooring-gallery.s3.amazonaws.com",
      "jnj-flooring-work-gallery.s3.amazonaws.com",
    ],
  },

  reactStrictMode: false,
};

module.exports = nextConfig;
