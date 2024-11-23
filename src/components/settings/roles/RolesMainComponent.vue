<script setup lang="ts">

import RoleMenuComponent from "@/components/settings/roles/subComponents/roleMenuComponent/RoleMenuComponent.vue";
import RoleTableComponent from "@/components/settings/roles/subComponents/roleTableComponent/RoleTableComponent.vue";
</script>

<template>
  <div class="container">

    <div class="row mb-3">
      <div class="col">
        <RoleMenuComponent/>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <RoleTableComponent/>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>