<script setup lang="ts">

import {useRoleStore} from "@/stores/settings/roleStore.ts";
import {onMounted} from "vue";

const roleStore = useRoleStore()

onMounted(() => {
  roleStore.fetchRoles()
})

</script>

<template>
  <div>
    <router-view/>
  </div>
</template>

<style scoped>

</style>