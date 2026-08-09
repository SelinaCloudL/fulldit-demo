# 从本地文件夹发布到 GitHub Pages

以下操作均在你自己的电脑上完成。

## 1. 本地预览

进入下载后的目录：

```bash
cd github_demo
python3 -m http.server 8000
```

浏览器打开 <http://localhost:8000>。检查标题、作者、图片和所有音频播放器。

## 2. 目标 GitHub 仓库

本 demo 发布到：

```text
https://github.com/SelinaCloudL/fulldit-demo
```

## 3A. 使用命令行上传（推荐，方便以后更新）

```bash
cd github_demo
git init -b main
git add .
git commit -m "Add FullDiT demo page"
git remote add origin https://github.com/SelinaCloudL/fulldit-demo.git
git push -u origin main
```

如果 Git 提示缺少身份信息，先执行：

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

GitHub 不接受账号密码作为命令行密码。推送时可使用浏览器登录、Personal Access Token、SSH key，或直接使用 GitHub Desktop。

## 3B. 不使用 Git 命令，直接网页上传

当前文件夹中的所有单个文件都小于 GitHub 网页上传限制，因此也可以：

1. 打开刚创建的空仓库。
2. 点击 `uploading an existing file` 或 `Add file` → `Upload files`。
3. 将 `github_demo` **里面的所有内容**拖入网页，而不是把外层目录本身作为一级目录。
4. 确认 `index.html` 位于仓库根目录，且 `audio/`、`assets/`、`paper/` 目录结构没有被打散。
5. 填写提交说明并点击 `Commit changes`。

## 4. 开启 GitHub Pages

仓库包含 `.github/workflows/pages.yml`，push 到 `main` 后会通过 GitHub Actions 发布静态页面。

如果 GitHub 没有自动启用 Pages，请手动开启：

1. 进入仓库的 `Settings`。
2. 左侧选择 `Pages`。
3. 在 `Build and deployment` 下将 Source 设为 `GitHub Actions`。
5. 点击 `Save`。

部署完成后，页面地址通常为：

```text
https://SelinaCloudL.github.io/fulldit-demo/
```

第一次部署通常需要几分钟。可以在仓库的 `Actions` 页面查看部署状态。

## 5. 后续更新

修改本地文件后执行：

```bash
git add .
git commit -m "Update demo page"
git push
```

GitHub Pages 会自动重新部署。

## 重要提醒

- 只上传这个 `github_demo` 文件夹中的内容，不要把服务器上的整套工作目录上传到公开仓库。
- 不要额外加入内部准备记录、服务器路径、备份或原始大体积 WAV。
