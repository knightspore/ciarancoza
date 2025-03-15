import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        TanStackRouterVite(),
        { enforce: "pre", ...mdx() },
        react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
    ],
})
