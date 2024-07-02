<script lang="ts" setup>
import SheetContext from './SheetContext'
import SheetContentVue from './SheetContentVue.vue'
</script>

<template>
  <SheetContext>
    <SheetContentVue>
      <template #trigger>
        <slot name="trigger"></slot>
      </template>
      <template #conetent>
        <slot name="content"></slot>
      </template>
    </SheetContentVue>
  </SheetContext>
</template>
