<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Education from './components/Education.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="min-h-screen bg-tech-bg text-tech-fg font-mono">
    <Navbar />
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
    <footer class="border-t border-tech-border py-8 sm:py-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/chuanhui2020" target="_blank" class="p-2 text-tech-muted-fg hover:text-tech-accent transition-colors" aria-label="GitHub">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="mailto:chuanhui.liu2020@gmail.com" class="p-2 text-tech-muted-fg hover:text-tech-accent transition-colors" aria-label="Email">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
        <p class="text-sm text-tech-muted-fg mb-1 font-mono">Built with Vue & Coffee</p>
        <p class="text-xs text-tech-muted-fg/60">&copy; 2026 All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
