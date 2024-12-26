<script setup lang="ts">

import {useSidebarStore} from "@/stores/globals/sidebarStore.ts";
import {
  CSidebar,
  CSidebarBrand, CSidebarFooter,
  CSidebarHeader,
  CSidebarNav,
  CSidebarToggler
} from "@coreui/vue/dist/esm/components/sidebar";
import biogenome_logo from '@/assets/brand/biogenome_logo.svg'
import {sygnet} from '@/assets/brand/sygnet.ts'
import {CCloseButton} from "@coreui/vue/dist/esm/components/close-button";
import {CNavGroup, CNavItem, CNavTitle} from "@coreui/vue/dist/esm/components/nav";
import {useRouter} from "vue-router";

const sidebar = useSidebarStore()

const router = useRouter()

function redirectToViews(view: string) {
  router.push({
    name: `${view}`
  })
}

</script>

<template>
  <CSidebar
      color-scheme="dark"
      position="fixed"
      :unfoldable="sidebar.unfoldable"
      :visible="sidebar.visible"
      @visible-change="
        (value: boolean) => {
          sidebar.toggleVisible(value)
        }
      "
  >
    <CSidebarHeader style="background: #252f56 !important;">
      <RouterLink to="/" v-slot="{href, navigate}">
        <CSidebarBrand v-bind="$attrs" as="a" :href="href" @click="navigate">
          <CIcon custom-class-name="sidebar-brand-full" class="text-white" :icon="biogenome_logo" :height="32"/>
          <CIcon custom-class-name="sidebar-brand-narrow" :icon="sygnet" :height="32"/>
        </CSidebarBrand>
      </RouterLink>
      <CCloseButton class="d-lg-none" dark @click="sidebar.toggleVisible()"/>
      <CSidebarToggler @click="sidebar.toggleUnfoldable()"/>
    </CSidebarHeader>

    <CSidebarNav>
      <CNavItem href="#" @click.prevent="redirectToViews('dashboard')">
        <CIcon customClassName="nav-icon" icon="cil-speedometer"/>
        Dashboard
      </CNavItem>

      <!-- Patient Section -->
      <CNavTitle href="#">
        Pacientes & Muestras
      </CNavTitle>

      <CNavGroup>
        <template #togglerContent>
          <font-awesome-icon class="nav-icon" :icon="['fas', 'person']" />
          Pacientes
        </template>
        <CNavItem href="#" @click.prevent="redirectToViews('creation')">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span>
          Crear Paciente
        </CNavItem>
        <CNavItem href="#" @click.prevent="redirectToViews('clinical-information')">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span>
          Información Clínica
        </CNavItem>
      </CNavGroup>
      <!-- End Patient Section -->

      <!-- Samples Section -->
      <CNavGroup>
        <template #togglerContent>
          <CIcon customClassName="nav-icon" icon="cil-puzzle"/>
          Muestras
        </template>
        <CNavItem href="#" @click.prevent="redirectToViews('follow-up')">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Seguimiento
        </CNavItem>
<!--        <CNavItem href="#">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Crear Lote
        </CNavItem>
        <CNavItem href="#">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Transportar Lote
        </CNavItem>
        <CNavItem href="#">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Recepción de Lote
        </CNavItem>-->
        <CNavItem href="#" @click.prevent="redirectToViews('shelf-assignment')">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Asignación de estante
        </CNavItem>
      </CNavGroup>
      <!-- End Samples Section -->

      <!-- Reports Section -->
      <CNavTitle href="#">
        Reportes
      </CNavTitle>

      <CNavGroup>
        <template #togglerContent>
          <CIcon customClassName="nav-icon" icon="cil-puzzle"/>
          Reportes
        </template>
        <CNavItem href="#" @click.prevent="redirectToViews('reports')">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Reporte 1
        </CNavItem>
<!--        <CNavItem href="#">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Reporte 2
        </CNavItem>-->
      </CNavGroup>
      <!-- End Reports Section -->

      <!-- Reports Section -->
      <CNavTitle href="#">
        Configuración
      </CNavTitle>

      <CNavGroup>
        <template #togglerContent>
          <CIcon customClassName="nav-icon" icon="cil-puzzle"/>
          Administración
        </template>
        <CNavItem href="#" @click.prevent="redirectToViews('users')">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Usuarios
        </CNavItem>
        <CNavItem href="#" @click.prevent="redirectToViews('roles')">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Roles
        </CNavItem>
        <CNavItem href="#" @click.prevent="redirectToViews('permissions')">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Permisos
        </CNavItem>
        <CNavItem href="#" @click.prevent="redirectToViews('headquarters')">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Sedes
        </CNavItem>
        <CNavItem href="#" @click.prevent="redirectToViews('users')">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Protocolos
        </CNavItem>
        <CNavItem href="#" @click.prevent="redirectToViews('informed-consents')">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Consentimientos
        </CNavItem>
      </CNavGroup>
      <!-- End Reports Section -->

    </CSidebarNav>

    <CSidebarFooter class="border-top">
      <CSidebarToggler @click="sidebar.toggleUnfoldable()"/>
    </CSidebarFooter>

  </CSidebar>
</template>

<style scoped>

</style>