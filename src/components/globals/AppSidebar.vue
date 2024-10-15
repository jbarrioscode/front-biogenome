<script setup lang="ts">

  import {useSidebarStore} from "@/stores/globals/sidebarStore.ts";
  import {CSidebar, CSidebarBrand, CSidebarHeader, CSidebarToggler} from "@coreui/vue/dist/esm/components/sidebar";
  import { logo } from '@/assets/brand/logo.ts'
  import { sygnet } from '@/assets/brand/sygnet.ts'
  import {CCloseButton} from "@coreui/vue/dist/esm/components/close-button";

  const sidebar = useSidebarStore()
</script>

<template>
  <CSidebar
      color-scheme="light"
      position="fixed"
      :unfoldable="sidebar.unfoldable"
      :visible="sidebar.visible"
      @visible-change="
        (value: boolean) => {
          sidebar.toggleVisible(value)
        }
      "
  >
    <CSidebarHeader class="bg-primary">
      <RouterLink to="/" v-slot="{href, navigate}">
        <CSidebarBrand v-bind="$attrs" as="a" :href="href" @click="navigate">
          <CIcon custom-class-name="sidebar-brand-full" :icon="logo" :height="32" />
          <CIcon custom-class-name="sidebar-brand-narrow" :icon="sygnet" :height="32" />
        </CSidebarBrand>
      </RouterLink>
      <CCloseButton class="d-lg-none" dark @click="sidebar.toggleVisible()" />
      <CSidebarToggler @click="sidebar.toggleUnfoldable()" />
    </CSidebarHeader>

  </CSidebar>
</template>

<style scoped>

</style>