import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      "polymarket.com",
      "cryptologos.cc",
      "polymarket-upload.s3.us-east-2.amazonaws.com",
      "upload.wikimedia.org",
      "polymarket-upload.s3.us-east-2.amazonaws.com",
      "cdn-icons-png.flaticon.com",
      "1000logos.net",
      "seeklogo.com",
      "www.federalreserve.gov",
      "placehold.co",
    ],
  },
};

export default nextConfig;
