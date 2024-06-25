<p align="center">
  <h2 align="center">Vitepress Theme Snow ❄</h2>
  <br />
  <p align="center">
    A mordern blog theme for Vitepress.
    <br />
    <small align="center"><a href="https://github.com/innei/Shiro">Shiro</a> Theme Style</small>
  </p>
</p>

<p align="center">
 <h3 align="center">🚧Work in Progress🚧</h3>
 <p align="center">Cannot be used in production yet.</p>
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
  Dark Mode
  | 
  Responsive
  |
  Smooth Animation
  </p>
</p>

<p align="center"> English| <a href="./README_ZH.md">简体中文</a></p>

## Installation

```sh
pnpm i vitepress vitepress-theme-snow
```

## Quick Start

> It is recommended that you have prior knowledge of [VitePress](https://vitepress.dev/guide/getting-started).

1. run a command to init vitepress

```sh
pnpm vitepress init
```

2. select the **Custom Theme** when you see the follow questions:

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

3. create a `index.ts` under the `.vitepress/theme`

```typescript
import type { Theme } from 'vitepress'
import YevTheme from 'vitepress-theme-snow'
import 'vitepress-theme-snow/styles/index.css'
export default {
  ...YevTheme
} satisfies Theme
```

4. Learn more in ~~[documentation](#)~~

## Short-term Goal

- Home Lauout
  - [ ] TimeLine Section
  - [ ] Quick-link
  - [ ] i18n
- Basic Markdown Layout
  - [x] Last update time
  - [ ] Previous and next pagination
  - [x] Slidebar outline
    - [ ] For Mobile
    - [ ] Change the Browser Title
  - [ ] Page context footer
- ...

## Screen Capture

<img alt="image" src="https://github.com/wangyewei/vitepress-theme-snow/assets/49926816/fd7a8747-9765-4fa8-8121-b93f60ae9225">

## Thanks

Most of the code comes from [Shiro](https://github.com/innei/Shiro)

## Lisense

&copy; 2024 Yev Wang

Licensed under the [AGPLv3 license.](https://github.com/wangyewei/vitepress-theme-yev/blob/main/LICENSE)
