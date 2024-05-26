import { defineComponent } from 'vue'

export default defineComponent({
  setup(_, { slots }) {
    return () => (
      <div
        class="relative mx-auto grid h-full min-h-0 max-w-7xl grid-cols-[4.5rem_auto_4.5rem] lg:px-8"
        style="grid-template-areas: left center right;"
      >
        {slots.default?.()}
      </div>
    )
  }
})

export const HeaderLeftButtonArea = defineComponent({
  setup(_, { slots }) {
    return () => (
      <div class="relative flex size-full items-center justify-center lg:hidden">
        {slots.default?.()}
      </div>
    )
  }
})

export const HeaderLogoArea = defineComponent({
  setup(_, { slots }) {
    return () => (
      <div class="relative">
        <div class="relative flex size-full items-center justify-center">
          {slots.default?.()}
        </div>
      </div>
    )
  }
})

export const HeaderCenterArea = defineComponent({
  setup(_, { slots }) {
    return () => (
      <div class="flex min-w-0 grow">
        <div class="relative flex grow items-center justify-center">
          {slots.default?.()}
        </div>
      </div>
    )
  }
})
