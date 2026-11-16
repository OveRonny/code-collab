<script setup lang="ts">
defineProps<{
  userName: string;
  greeting: string;
  kjøringer: number;
}>();
const emit = defineEmits<{ "update:userName": [value: string] }>();
</script>

<template>
  <header>
    <h1>Code Collab</h1>
    <input
      :value="userName"
      @input="emit('update:userName', ($event.target as HTMLInputElement).value)"
      placeholder="Skriv navnet ditt..."
    />
      <dialog open>
      <p>{{ greeting }}</p>
      <p>Dette er kjøring nummer {{ kjøringer }}</p>  
    </dialog>
  </header>
</template>
