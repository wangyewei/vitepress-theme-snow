<p align="center">
  <h2 align="center">Vitepress 主题 Snow ❄</h2>
  <br />
  <p align="center">
    一个现代的 Vitepress 博客主题。
    <br />
    <small align="center"><a href="https://github.com/innei/Shiro">Shiro</a> 主题样式</small>
  </p>
</p>

<p align="center">
 <h3 align="center">🚧建设中🚧</h3>
 <p align="center">尚不能在生产环境中使用。</p>
</p>

<p align="center">
   <span>
      <img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=Plastic&logo=vuedotjs&logoColor=%234FC08D"/>
   </span>
   <span>
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=Plastice&logo=typescript&logoColor=white"/>
   </span>
   <span>
      <img src="https://img.shields.io/badge/RollupJS-ef3335?style=Plastic&logo=rollup.js&logoColor=white"/>
    </span>
   <span>
      <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=Plastic&logo=tailwind-css&logoColor=white"/>
    </span>
</p>

<p align="center">  
  <p align="center">
  深色模式
  | 
  响应式
  |
  流畅动画
  </p>
</p>

<p align="center"> <a href="./README.md">English</a> | 简体中文</p>

## 安装

```sh
pnpm i vitepress vitepress-theme-snow
```

## Quick Start

> 建议您先了解 [VitePress](https://vitepress.dev/guide/getting-started).

1. 运行命令初始化 vitepress:

```sh
pnpm vitepress init
```

2. 当看到以下问题时选择 **Custom Theme** :

```sh
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◆  Theme:
│  ○ Default Theme (Out of the box, good-looking docs)
│  ○ Default Theme + Customization
│  ● Custom Theme
└
```

3. 在 `.vitepress/theme` 下创建 `index.ts`

```typescript
import type { Theme } from 'vitepress'
import YevTheme from 'vitepress-theme-yev/src/index.ts'
import 'vitepress-theme-yev/src/styles/index.css'
export default {
  ...YevTheme
} satisfies Theme
```

4.了解更多内容请访问 ~~[文档](#)~~

## 短期目标

- Home Lauout
  - [ ] TimeLine Section
  - [ ] Quick-link
- Basic Markdown Layout
  - [ ] Last update time
  - [ ] Previous and next pagination
  - [ ] Slidebar outline
  - [ ] Page context footer
- ...

## 屏幕截图

<img alt="image" src="https://github.com/wangyewei/vitepress-theme-snow/assets/49926816/fd7a8747-9765-4fa8-8121-b93f60ae9225">

## 致谢

大部分代码来自 [Shiro](https://github.com/innei/Shiro)

## Lisense

&copy; 2024 王野未

根据 [AGPLv3 许可证](https://github.com/wangyewei/vitepress-theme-yev/blob/main/LICENSE)进行许可。
