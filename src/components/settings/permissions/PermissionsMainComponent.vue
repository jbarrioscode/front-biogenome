<script setup lang="ts">

import PermissionMenuComponent
  from "@/components/settings/permissions/subComponents/permissionMenuComponent/PermissionMenuComponent.vue";
import PermissionTableComponent
  from "@/components/settings/permissions/subComponents/permissionTableComponent/PermissionTableComponent.vue";
</script>

<template>
  <div class="container">

    <div class="row mb-3">
      <div class="col">
        <PermissionMenuComponent />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <PermissionTableComponent />
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>