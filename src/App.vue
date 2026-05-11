<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
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
      <Contact />
    </main>
    <footer class="border-t border-tech-border py-6 sm:py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm sm:text-base text-tech-muted-fg">
        <p>&copy; 2026 个人简历. 保留所有权利.</p>
      </div>
    </footer>
  </div>
</template>
