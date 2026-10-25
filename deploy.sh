#!/bin/bash
# GAG2Guide 部署：构建 → 同步到持久的 gh-pages 克隆（.gh-pages/）→ 推送
# 注意：npm run build 会清空重建 out/，所以 gh-pages 的 git 仓库必须放在 out/ 之外
set -e
cd "$(dirname "$0")"
URL="https://github.com/outhsics/gag2guide.git"
npm run build --silent
if [ ! -d .gh-pages/.git ]; then
  git clone --depth 1 -b gh-pages "$URL" .gh-pages
fi
cd .gh-pages
git checkout gh-pages 2>/dev/null || true
rsync -a --delete --exclude=.git --exclude=.nojekyll ../out/ .
touch .nojekyll   # GitHub Pages 跳过 Jekyll，_next/ 才能被服务
git add -A
git commit -m "deploy: $(date +%F\ %H:%M)" || echo "no changes"
git push origin gh-pages --quiet
cd ..
git add -A
git commit -m "source sync $(date +%F\ %H:%M)" || echo "no src changes"
git push origin main --quiet
echo "✅ 已部署 https://outhsics.github.io/gag2guide/"
