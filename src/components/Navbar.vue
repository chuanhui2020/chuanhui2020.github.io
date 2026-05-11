<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const activeSection = ref('hero')
const scrollProgress = ref(0)

const sections = ['hero', 'experience', 'projects', 'skills', 'contact']

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  mobileMenuOpen.value = false
}

const onScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i])
    if (el && el.offsetTop - 100 <= scrollTop) {
      activeSection.value = sections[i]
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <nav class="fixed top-0 w-full bg-tech-bg/80 backdrop-blur-md z-50 border-b border-tech-border">
    <!-- Scroll progress bar -->
    <div class="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-tech-accent/70 to-tech-accent transition-all duration-150" :style="{ width: scrollProgress + '%' }"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0 font-heading font-bold text-lg text-tech-accent glow-green-text">
          &lt;DEV /&gt;
        </div>

        <!-- Desktop nav -->
        <div class="hidden md:flex space-x-1">
          <button
            v-for="section in sections"
            :key="section"
            @click="scrollToSection(section)"
            class="relative px-4 py-2 rounded-lg transition-all duration-200"
            :class="activeSection === section ? 'text-tech-accent' : 'text-tech-muted-fg hover:text-tech-fg'"
          >
            {{ { hero: '首页', experience: '经历', projects: '项目', skills: '技能', contact: '联系' }[section] }}
            <span
              v-if="activeSection === section"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-tech-accent rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"
            ></span>
          </button>
        </div>

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
            v-for="section in sections"
            :key="section"
            @click="scrollToSection(section)"
            class="block w-full text-left px-4 py-3 rounded-lg transition-colors"
            :class="activeSection === section ? 'text-tech-accent bg-tech-muted' : 'text-tech-muted-fg hover:bg-tech-muted hover:text-tech-accent'"
          >
            <span v-if="activeSection === section" class="mr-2">▹</span>
            {{ { hero: '首页', experience: '经历', projects: '项目', skills: '技能', contact: '联系' }[section] }}
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
