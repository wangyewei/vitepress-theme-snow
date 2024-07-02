<script lang="ts" setup>
import {
  DrawerRoot,
  DrawerTrigger,
  DrawerOverlay,
  DrawerPortal,
  DrawerContent,
  DrawerTitle
} from 'vaul-vue'
import { useSheetContext } from './SheetContext'

const { isOpen } = useSheetContext()
</script>

<template>
  <DrawerRoot :open="isOpen" @Release="() => (isOpen = false)">
    <DrawerTrigger>
      <slot name="trigger"></slot>
    </DrawerTrigger>
    <DrawerPortal>
      <DrawerOverlay
        class="fixed inset-0 bg-neutral-800/40"
        @Click="() => (isOpen = false)"
      />
      <DrawerContent
        aria-describedby="{undefined}"
        class="fixed inset-x-0 bottom-0 mt-24 flex max-h-[95vh] flex-col rounded-t-[10px] bg-base-100 p-4 z-[998]"
      >
        <DrawerTitle></DrawerTitle>

        <div
          class="mx-auto mb-8 h-1.5 w-12 shrink-0 rounded-full bg-zinc-300 dark:bg-neutral-800"
        />

        <slot name="conetent"></slot>
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>
