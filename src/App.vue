<script setup lang="ts">
import { ref, computed, watch } from "vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import TextEditor from "./components/TextEditor.vue";
import AssistantPanel from "./components/AssistantPanel.vue";
import ClickCounter from "./components/ClickCounter.vue";

const userName = ref(localStorage.getItem("userName") ?? "");

watch(userName, (newUserName) => {
  localStorage.setItem("userName", newUserName);
});

let kjøringer = 0
const greeting = computed(() => {
  kjøringer++
  return userName.value ? `Hei, ${userName.value}` : 'Hei, ukjent'
})
</script>

<template>
  <div class="app-layout">
    <AppHeader v-model:userName="userName" class="app-header" :greeting="greeting" :kjøringer="kjøringer" />
    <ClickCounter class="app-counter" :initial="5" />
    <ClickCounter class="app-counter" :initial="10" />
    <TextEditor class="app-editor" :userName="userName" />
    <AssistantPanel class="app-assistant" />  
    <AppFooter appName="Code Collab" :year="new Date().getFullYear()" class="app-footer" />
  </div>
</template>

<style scoped>

:global(*) {
  box-sizing: border-box;
}

:global(body) {
  margin: 0;
  background: #0f1117;
}

.app-layout {
  min-height: 100vh;
  padding: 1.5rem; 

  --bg: #0f1117;
  --surface: #171a23;
  --border: #2a3040;
  --text: #f4f7fb;
  --muted: #9aa4b2;
  --accent: #7c8cff;

  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;

  min-height: 100vh;
  padding: 1.5rem;

  color: var(--text);
  background:
    radial-gradient(circle at top left, #202744 0, transparent 35%),
    var(--bg);
}

.app-counter {
  grid-column: 1 / -1;
  justify-self: center;
}

.app-header,
.app-footer {
  grid-column: 1 / -1;
  padding: 1rem 1.25rem;
  background: rgb(23 26 35 / 85%);
  border: 1px solid var(--border);
  border-radius: 1rem;
  box-shadow: 0 12px 30px rgb(0 0 0 / 20%);
  backdrop-filter: blur(12px);
}

.app-footer {
  color: var(--muted);
  font-size: 0.875rem;
}

@media (max-width: 800px) {
  .app-layout {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
}
</style>
