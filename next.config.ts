import bundleAnalyzer from "@next/bundle-analyzer";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
  images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    cssChunking: true,
    optimizePackageImports: [
      "@mdx-js/loader",
      "@mdx-js/react",
      "@next/mdx",
      "@types/mdx",
      "lucide-react",
      "motion",
      "next",
      "next-themes",
      "react",
      "react-dom",
    ],
  },
};

const withMDX = createMDX({});

export default withBundleAnalyzer(withMDX(nextConfig));
