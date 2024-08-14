import { DefineComponent, VNode, VNodeProps } from 'vue'

declare global {
  namespace JSX {
    interface Element extends HTMLElement {}
    interface ElementClass extends DefineComponent<{}, {}, any> {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

declare function h(type: any, props?: VNodeProps | null, children?: any): VNode
