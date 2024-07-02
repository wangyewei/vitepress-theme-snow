<script lang="ts" setup>
import { FaSolidMenu } from '../../icons/menu-collection'
import HeaderActionMenuButton from './mobile/HeaderActionMenuButton'
import PresentSheet from '../../../../ui/sheet/SheetVue.vue'
import HeaderDrawerContent from './mobile/HeaderDrawerContent'
</script>

<template>
  <PresentSheet>
    <template #trigger>
      <HeaderActionMenuButton>
        <FaSolidMenu />
      </HeaderActionMenuButton>
    </template>
    <template #content>
      <HeaderDrawerContent />
    </template>
  </PresentSheet>
</template>
