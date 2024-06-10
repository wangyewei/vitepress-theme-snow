//shims-tsx.d.ts

import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }

  function h(...args: any): any
}
