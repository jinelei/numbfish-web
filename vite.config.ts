import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from '@arco-plugins/vite-plugin-svgr';
import vitePluginForArco from '@arco-plugins/vite-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  const proxyConfig = {
    '/authorization': {
      target: env['VITE_AUTHORIZATION_API_URL'],
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/authorization/, ''),
    },
    '/equipment': {
      target: env['VITE_EQUIPMENT_API_URL'],
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/equipment/, ''),
    },
  };
  return {
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
    server: {
      proxy: env['VITE_ENV'] === 'development' ? proxyConfig : {},
    },
    plugins: [
      react(),
      svgrPlugin({
        svgrOptions: {},
      }),
      vitePluginForArco({
        theme: '@arco-themes/react-arco-pro',
        modifyVars: {
          'arcoblue-6': '#165DFF',
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  };
});
