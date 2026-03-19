import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "关于",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "关于我",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "独立开发者，做产品也接商业项目"
      },
      {
        id: "github-stats",
        title: "技术栈",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:code",
        excerpt: "React / Next.js / AI / 移动端…"
      },
      {
        id: "about-site",
        title: "设计理念",
        file: "markdown/about-site.md",
        icon: "i-mdi:brush",
        excerpt: "简约，是终极的复杂 — 达芬奇"
      }
    ]
  },
  {
    id: "project",
    title: "作品集",
    icon: "i-octicon:repo",
    md: [
      {
        id: "tweakden",
        title: "TweakDen",
        file: "markdown/project-tweakden.md",
        icon: "i-ri:search-eye-line",
        excerpt: "小红书笔记体检工具，已上线运营并有付费用户"
      },
      {
        id: "tarot-fragrance",
        title: "Fragrant Epiphany",
        file: "markdown/project-tarot-fragrance.md",
        icon: "i-ri:magic-line",
        excerpt: "塔罗牌 × 香水，3D 翻牌 + AI 匹配的沉浸体验"
      },
      {
        id: "mino-desktop",
        title: "Mino's Desktop",
        file: "markdown/project-mino-desktop.md",
        icon: "i-ri:macbook-line",
        excerpt: "没错，就是你正在浏览的这个 macOS 风格作品集"
      },
      {
        id: "smartbot",
        title: "SmartBot",
        file: "markdown/project-smartbot.md",
        icon: "i-ri:customer-service-2-line",
        excerpt: "微信小程序 AI 客服，流式对话 + 多模型切换"
      },
      {
        id: "hotel-website",
        title: "澄境雅舍",
        file: "markdown/project-hotel-website.md",
        icon: "i-ri:hotel-line",
        excerpt: "五星级海滨度假酒店官网，视差滚动 + 诗意江南设计"
      },
      {
        id: "ebay-erp",
        title: "电商 ERP",
        file: "markdown/project-ebay-erp.md",
        icon: "i-ri:shopping-cart-2-line",
        excerpt: "eBay 多店铺运营后台，数据看板 + 订单自动化"
      }
    ]
  }
];

export default bear;
