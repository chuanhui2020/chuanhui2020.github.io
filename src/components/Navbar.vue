<script setup>
import { ref } from 'vue'

defineProps({
  darkMode: Boolean
})

defineEmits(['toggle-dark-mode'])

const mobileMenuOpen = ref(false)

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  mobileMenuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 w-full bg-tech-bg/80 backdrop-blur-md z-50 border-b border-tech-border">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0 font-heading font-bold text-lg text-tech-accent glow-green-text">
          &lt;DEV /&gt;
        </div>

        <!-- Desktop nav -->
        <div class="hidden md:flex space-x-8">
          <button @click="scrollToSection('hero')" class="text-tech-muted-fg hover:text-tech-accent transition-colors">
            首页
          </button>
          <button @click="scrollToSection('experience')" class="text-tech-muted-fg hover:text-tech-accent transition-colors">
            经历
          </button>
          <button @click="scrollToSection('projects')" class="text-tech-muted-fg hover:text-tech-accent transition-colors">
            项目
          </button>
          <button @click="scrollToSection('skills')" class="text-tech-muted-fg hover:text-tech-accent transition-colors">
            技能
          </button>
          <button @click="scrollToSection('contact')" class="text-tech-muted-fg hover:text-tech-accent transition-colors">
            联系
          </button>
        </div>

        <div class="flex items-center space-x-2">
          <!-- Dark mode toggle -->
          <button
            @click="$emit('toggle-dark-mode')"
            class="p-2.5 rounded-lg bg-tech-muted hover:bg-tech-primary transition-colors border border-tech-border"
            aria-label="切换深色模式"
          >
            <svg v-if="!darkMode" class="w-5 h-5 text-tech-fg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg v-else class="w-5 h-5 text-tech-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>

          <!-- Mobile hamburger button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2.5 rounded-lg bg-tech-muted hover:bg-tech-primary transition-colors border border-tech-border"
            :aria-expanded="mobileMenuOpen"
            aria-label="打开导航菜单"
          >
            <svg v-if="!mobileMenuOpen" class="w-5 h-5 text-tech-fg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-5 h-5 text-tech-fg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu panel -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden border-t border-tech-border bg-tech-bg/95 backdrop-blur-md"
      >
        <div class="px-4 py-3 space-y-1">
          <button
            @click="scrollToSection('hero')"
            class="block w-full text-left px-4 py-3 rounded-lg text-tech-muted-fg hover:bg-tech-muted hover:text-tech-accent transition-colors"
          >
            首页
          </button>
          <button
            @click="scrollToSection('experience')"
            class="block w-full text-left px-4 py-3 rounded-lg text-tech-muted-fg hover:bg-tech-muted hover:text-tech-accent transition-colors"
          >
            经历
          </button>
          <button
            @click="scrollToSection('projects')"
            class="block w-full text-left px-4 py-3 rounded-lg text-tech-muted-fg hover:bg-tech-muted hover:text-tech-accent transition-colors"
          >
            项目
          </button>
          <button
            @click="scrollToSection('skills')"
            class="block w-full text-left px-4 py-3 rounded-lg text-tech-muted-fg hover:bg-tech-muted hover:text-tech-accent transition-colors"
          >
            技能
          </button>
          <button
            @click="scrollToSection('contact')"
            class="block w-full text-left px-4 py-3 rounded-lg text-tech-muted-fg hover:bg-tech-muted hover:text-tech-accent transition-colors"
          >
            联系
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
