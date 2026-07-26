# PZX_Page

彭梓轩（Zixuan Peng）的学术个人主页 —— React + Vite，部署在 GitHub Pages。

结构参考了学术主页的常见排版：左侧固定名片，右侧滚动内容（About / News / Publications / Experience / Education / Awards / More）。

## 本地开发

```bash
npm install
npm run dev
```

打开 http://localhost:5173

## 改内容

**所有文字都在 [`src/data/profile.js`](src/data/profile.js) 一个文件里**，改这个就够了，不用动组件。
标了 `【TODO】` 的地方是需要你自己核对/替换的真实信息（学校、导师、论文、奖项等）。

## 换头像

把照片放进 `public/`（比如 `public/face.jpg`），然后改 `profile.avatar` 为 `'/face.jpg'`。

## 换配色

`src/App.css` 顶部有五个 CSS 变量，改这五行就能换整站配色：

```css
--accent: #1d4ed8;
--accent-soft: #60a5fa;
--accent-bg: #eff6ff;
--accent-border: #bfdbfe;
```

## 部署

1. 在 GitHub 新建仓库 `PZX_Page`（如果用别的名字，同步改 `vite.config.js` 里的 `base`）。
2. 推上去：

```bash
git remote add origin https://github.com/Windsor-Andrew/PZX_Page.git
git push -u origin main
```

3. 仓库 Settings → Pages → Source 选 **GitHub Actions**。

之后每次 push 到 `main`，`.github/workflows/deploy.yml` 会自动构建并发布到
https://windsor-andrew.github.io/PZX_Page/

### 绑定自定义域名

把 `vite.config.js` 的 `base` 改成 `'/'`，在 `public/` 下建一个 `CNAME` 文件写上域名，
再去域名商加 CNAME 记录指向 `windsor-andrew.github.io`。
