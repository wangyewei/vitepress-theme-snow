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
