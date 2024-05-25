import { DefineComponent } from 'vue';

declare global {

  namespace JSX {

    interface Element extends HTMLElement { }

    interface ElementClass extends DefineComponent<any, any, any, any, any> { }

    interface IntrinsicElements {

      [elem: string]: any;

    }

  }

}