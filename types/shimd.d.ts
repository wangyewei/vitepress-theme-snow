import { DefineComponent, VNode, VNodeProps } from 'vue';

declare global {
  namespace JSX {
    interface Element extends HTMLElement { }
    interface ElementClass extends DefineComponent<any, any, any, any, any> { }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare function h(type: any, props?: VNodeProps | null, children?: any): VNode