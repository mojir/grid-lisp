<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { useGrid } from '@/composables/useGrid'
import { whs } from '@/utils/cssUtils'
import type { Col } from '~/lib/Col'

const { grid } = useGrid()

const props = defineProps<{
  col: Col
}>()

const hover = ref(false)

const { col } = toRefs(props)

const isSelected = computed(() => grid.value.selection.value.containsColIndex(col.value.index))
const cellStyle = computed(() => {
  const style: CSSProperties = {
    height: `${grid.value.colHeaderHeight}px`,
    width: `${col.value.width + 1}px`,
    minHeight: `${grid.value.colHeaderHeight}px`,
    minWidth: `${col.value.width + 1}px`,
    marginLeft: '-1px',
    backgroundColor: isSelected.value ? 'var(--selected-header-background-color)' : 'var(--header-background-color)',
    borderColor: 'var(--header-border-color)',
    borderStyle: 'solid',
    borderLeftWidth: col.value.index !== 0 ? '1px' : '0px',
    borderRightWidth: '1px',
    borderBottomWidth: '1px',
  }
  return style
})
</script>

<template>
  <div
    :style="cellStyle"
    class="flex flex-col"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div
      :id="col.id"
      :style="whs(col.width, grid.colHeaderHeight)"
      class="flex flex-1 justify-center text-xs items-center select-none"
    >
      {{ col.id }}
    </div>
    <div
      :style="whs(5, grid.colHeaderHeight)"
      class="absolute bg-transparent top-0 right-[-3px] z-10 cursor-col-resize"
    />
  </div>
</template>
