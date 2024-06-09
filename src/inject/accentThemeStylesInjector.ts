/**
 * TODO:
 *  render dynamic theme accent between dark
 *  and light
 *
 */
import { inBrowser } from 'vitepress'

export default async function () {
  if (!inBrowser) return
  const tag = document.createElement('style')
  tag.setAttribute('id', 'accent-color-style')
  tag.innerHTML = `

  html[data-theme='light'].noise body::before {
    background-image: url('data:image/png;base64,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')
  }
  html[data-theme='dark'].noise body::before {
    background-image: url('data:image/png;base64,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')
  }
  html[data-theme='light'] {
    --a: 0.6664008184877142 0.19616688758788808 24.143783741011248;
  }
  html[data-theme='dark'] {
    --a: 0.8693594422210724 0.1662969903066228 91.51946642881177;
  }
  html {
    --root-bg: #33A6B8;
    background-color: var(--root-bg) !important;
  }
  html[data-theme='dark'] {
    --root-bg: #33A6B8;
  }
  
  `

  document.head.append(tag)
}
