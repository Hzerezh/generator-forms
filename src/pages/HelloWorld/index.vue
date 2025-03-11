<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">

    <Button :label="'Счетчик на ' + count" @click="count++" severity="info" icon="pi pi-bolt" />

  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
