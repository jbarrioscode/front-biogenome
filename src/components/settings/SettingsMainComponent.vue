<script setup lang="ts">

import {useRoleStore} from "@/stores/settings/roleStore.ts";
import {onMounted} from "vue";
import {usePermissionStore} from "@/stores/settings/permissionStore.ts";
import UserMenuComponent from "@/components/settings/users/subComponents/userMenuComponent/UserMenuComponent.vue";
import {CCol, CContainer, CRow} from "@coreui/vue/dist/esm/components/grid";

const roleStore = useRoleStore()
const permissionStore = usePermissionStore()

onMounted(() => {
  roleStore.fetchRoles()
  permissionStore.fetchPermissions()
})

</script>

<template>
  <div>
    <router-view/>
  </div>
</template>

<style scoped>

</style>