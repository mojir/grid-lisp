<script setup lang="ts">
import { ref } from 'vue'
import { useGrid } from '@/composables/useGrid'

const { grid } = useGrid()

const el = ref<HTMLDivElement>()

defineExpose({
  el,
})
</script>

<template>
  <div
    ref="el"
    class="flex overflow-y-auto dark:bg-blue-800 bg-blue-600 no-scrollbar"
  >
    <ColHeaderCell
      v-for="col of grid.cols"
      :key="col.id"
      :col="col"
    />
  </div>
</template>
