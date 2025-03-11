<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="flex justify-content-center flex-wrap" >
    <div class="col-3 my-auto">
      <h1>{{ msg }}</h1>
      <div class="card">
        <Button :label="'Счетчик на ' + count" @click="count++" severity="info" icon="pi pi-bolt" />
      </div>

    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
