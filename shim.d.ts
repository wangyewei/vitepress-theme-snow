import { DefineComponent, VNode, VNodeProps, h } from 'vue'

declare global {
  namespace JSX {
    interface Element extends HTMLElement {}
    interface ElementClass extends DefineComponent<{}, {}, any> {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }

  const h: typeof h
}

declare function h(type: any, props?: VNodeProps | null, children?: any): VNode

declare module '@siteData' {
  const data: any
  export default data
}
