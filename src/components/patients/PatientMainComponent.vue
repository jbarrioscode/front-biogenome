<script setup lang="ts">

import PatientComponentMenu from "@/components/patients/subComponents/PatientMenuComponent/PatientMenuComponent.vue";
import PatientTableComponent from "@/components/patients/subComponents/PatientTableComponent/PatientTableComponent.vue";
</script>

<template>
  <div class="container">

    <div class="row mb-3">
      <div class="col">
        <PatientComponentMenu />
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <div class="row">
      <div class="col">
        <PatientTableComponent />
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

  </div>
</template>

<style scoped>

</style>