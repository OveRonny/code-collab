import { describe, it, expect } from 'vitest'
import { ref, computed } from 'vue'

describe('greeting', () => {
  it('hilser med navn', () => {
    const userName = ref('Ada')
    const greeting = computed(() => (userName.value ? `Hei, ${userName.value}` : 'Hei, ukjent'))
    expect(greeting.value).toBe('Hei, Ada')
  })
})
