const withNextra = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.jsx",
})

const nextConfig = {
    experimental: {
        optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    },
}

module.exports = withNextra(nextConfig)

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
