import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const currentDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig(() => {
  // Use /En-Tech_S.C/ when building on GitHub Actions or deploying to GitHub Pages, otherwise '/'
  const isGitHubPages =
    process.env.GITHUB_ACTIONS === "true" ||
    process.env.DEPLOY_TARGET === "gh-pages" ||
    process.env.VITE_BASE === "/En-Tech_S.C/";
  const base = isGitHubPages ? "/En-Tech_S.C/" : "/";

  return {
    base,
    build: {
      outDir: path.resolve(currentDir, "dist"),
      emptyOutDir: true,
    },
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': currentDir,
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
