import { defineConfig } from 'vite';
import { loadEnv } from 'vite';
import mkcert from 'vite-plugin-mkcert'
import restart from 'vite-plugin-restart';

export default ({ command, mode }) => {

  const env = loadEnv(mode, process.cwd());
  const url = env.VITE_SITE_URL;

  return defineConfig({
    plugins: [ 
        mkcert(),
        restart({
            // Watch Twig templates for changes
            restart: ['templates/**/*.twig'],
        }),
    ],
    base: command === 'serve' ? '' : '/dist/',
    build: {
      manifest: true,
      outDir: 'web/dist/',
      rollupOptions: {
        input: {
          app: 'src/js/app.js',
        }
      },
    },
    server: {
        https: true, // Enable HTTPS
        host: url, // Your Herd URL
        port: 5173, // Default Vite port
        hmr: {
          protocol: 'wss', // WebSocket Secure for HTTPS
          host: url, // Replace with Herd URL
          port: 5173, // Match the port
        },
      },
  });
};