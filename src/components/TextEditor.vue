<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import EditorToolbar from './EditorToolbar.vue'

defineProps<{ userName: string }>()
const charCount = computed(() => text.value.length)

const text = ref(localStorage.getItem('textDraft') ?? '')

watch(text, (newText) => {
  localStorage.setItem('textDraft', newText)
})
</script>

<template>
  <section>
    <EditorToolbar
      :userName="userName"
      :charCount="charCount"
    />
    <textarea v-model="text" placeholder="Skriv koden din her..." />
  </section>
</template>
