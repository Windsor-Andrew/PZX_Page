import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 部署路径说明：
//   1. 仓库名为 PZX_Page，站点地址是 https://windsor-andrew.github.io/PZX_Page/ → base 保持 '/PZX_Page/'
//   2. 若改用 windsor-andrew.github.io 仓库，或绑定自定义域名（如 me.pengzixuan.me）→ 改成 '/'
// 本地 dev 始终用 '/'，只有 build 时才加子路径。
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/PZX_Page/' : '/',
  plugins: [react()],
}));
