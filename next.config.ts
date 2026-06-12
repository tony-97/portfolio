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
  transpilePackages: [
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
  experimental: {
    cssChunking: "strict",
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
  webpack(config) {
    config.module.rules.push({
      // Match assets such as `arrow.svg?svgUse`, making them compatible with
      // `svg > use[href]`. Emit a transformed SVG asset, and return a JS
      // module with all the relevant information.
      test: /\.svg$/i,
      resourceQuery: /svgUse/i,
      oneOf: [
        {
          // Assets without a theme, such as country flags. Referenced as
          // `icon.svg?svgUse&noTheme`
          //
          // Note: Instead of this rule, you could decide to load these SVGs
          // as 'asset/resource', in order to use their URL string in img[src]
          test: /\.svg$/i,
          resourceQuery: /noTheme/i,
          type: "javascript/auto",
          use: [
            {
              loader: "@svg-use/webpack",
              options: {
                getThemeSubstitutions: null, // no theme for these ones
                // Note: Next.js typically outputs assets to 'static/media/'
                // Keeping your original filename, but consider adapting to Next.js patterns
                svgAssetFilename: "static/media/[name]-[contenthash].[ext]",
              },
            },
          ],
        },
        {
          type: "javascript/auto",
          use: [
            {
              loader: "@svg-use/webpack",
              options: {
                // Customise to your heart's content
                svgAssetFilename: "static/media/[name]-[contenthash].[ext]",
              },
            },
          ],
        },
      ],
    });

    return config;
  },
};

const withMDX = createMDX({});

export default withBundleAnalyzer(withMDX(nextConfig));
