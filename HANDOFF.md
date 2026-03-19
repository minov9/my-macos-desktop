# macOS Desktop 项目交接文档

## 项目概述

仿 macOS 风格的个人作品集网站，沉浸式桌面体验。

## 项目信息

| 项目 | 信息 |
|------|------|
| **本地路径** | `/Users/hyx/projects/playground-macos` |
| **GitHub 仓库** | https://github.com/minov9/my-macos-desktop (私有) |
| **线上地址** | https://minolab.icu |
| **技术栈** | React + TypeScript + Vite + Zustand + UnoCSS |

---

## 2026-01-30 更新

### 🚀 图片加载优化
将所有 `screenshots/` 下的 PNG 转换为 WebP 格式：

| 指标 | 优化前 | 优化后 | 减少 |
|------|--------|--------|------|
| Screenshots 大小 | 3.0MB | 588KB | **80%** |

**涉及文件**:
- `public/screenshots/coinpulse/*.webp`
- `public/screenshots/moodflow/*.webp`
- `public/screenshots/smartbot/*.webp`
- `public/markdown/project-*.md` (更新图片引用)

### 📝 内容更新
- `public/markdown/about-me.md` — 联系方式简化为仅邮箱

### 💰 报价单页面
新增定制服务报价页面：
- **路径**: `public/pricing.html`
- **访问地址**: https://minolab.icu/pricing
- **功能**: Apple 风格三档定价卡片（基础版/标准版/高级版）

### ⚙️ Vercel 配置
新增 `vercel.json`，启用 `cleanUrls` 去除 `.html` 后缀。

---

## 项目结构关键文件

```
/Users/hyx/projects/playground-macos/
├── src/
│   ├── configs/           # ⭐ 主要配置文件
│   │   ├── user.ts        # 用户名、头像
│   │   ├── terminal.tsx   # 终端内容
│   │   ├── bear.tsx       # Bear 笔记项目列表
│   │   └── music.ts       # 背景音乐配置
│   └── components/
├── public/
│   ├── pricing.html       # 定制服务报价单
│   ├── screenshots/       # 项目截图 (WebP 格式)
│   └── markdown/          # 个人介绍和项目详情页
├── vercel.json            # Vercel 部署配置
└── HANDOFF.md             # 本交接文档
```

---

## 常用命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 提交并部署 (自动触发 Vercel)
git add -A && git commit -m "update" && git push
```

---

*文档更新时间: 2026-01-30*
