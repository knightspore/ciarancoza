import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import mdx from "@mdx-js/rollup";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        TanStackRouterVite(),
        { enforce: "pre", ...mdx() },
        react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
    ],
})
