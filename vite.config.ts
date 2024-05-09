import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default {
  plugins: [tsconfigPaths(), react(), svgr()],
}
