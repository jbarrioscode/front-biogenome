<script setup lang="ts">
import {CWidgetStatsC} from "@coreui/vue/dist/esm/components/widgets";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
})
</script>

<template>
  <CWidgetStatsC
      class="mb-3 h-100"
      :value="props.quantity"
      :progress="{ color: 'info', value: 75 }"
      :title="props.title"
  >
    <template #icon>
      <CIcon :icon="props.icon" height="36" />
    </template>
    <template #title>
      {{ props.title }}
    </template>
  </CWidgetStatsC>
</template>

<style scoped>

</style>