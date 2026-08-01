# EAT · 今天吃什么

一个按 375 × 812 画板还原的移动端交互演示，可直接部署到 GitHub Pages。

## 目录

- `index.html`：GitHub Pages入口
- `Frame 14.html`：首页和三个互斥选项
- `Frame17.html`：结果页
- `Frame18.html`：重新选择页
- `Frame19.html`：豆浆油条结果页
- `ShareState.html`、`ShareSoy.html`：分享状态页
- `css/`：站点外层与响应式样式
- `js/`：站点入口逻辑
- `images/`：JPG位图资源
- `svg/`：SVG选中和未选中状态资源

## GitHub Pages部署

1. 新建 GitHub 仓库。
2. 将本目录中的全部文件上传到仓库根目录。
3. 打开仓库的 `Settings → Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. 选择 `main` 分支和 `/ (root)`，保存后等待部署完成。

## 本地预览

直接打开 `index.html` 即可。若浏览器限制本地 iframe，可使用任意静态文件服务器运行该目录。

## 注意

- 文件名和大小写不要修改，否则页面跳转或资源引用可能失效。
- 页面为纯静态HTML、CSS和JavaScript，不需要构建工具或后端服务。
