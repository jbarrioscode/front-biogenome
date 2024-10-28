<script setup>
import UserTableComponent from "@/components/settings/users/subComponents/userTableComponent/UserTableComponent.vue";
import UserMenuComponent from "@/components/settings/users/subComponents/userMenuComponent/UserMenuComponent.vue";
</script>

<template>
  <div class="container">

    <div class="row mb-3">
      <div class="col">
        <UserMenuComponent />
      </div>
    </div>

    <div class="row mb-3">
      <div class="col">
        <UserTableComponent />
      </div>
    </div>

  </div>


</template>

<style scoped>

</style>