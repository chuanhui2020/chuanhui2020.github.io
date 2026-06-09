<script setup>
import { ref, onMounted } from 'vue'

const education = [
  {
    school: '河北大学',
    degree: '本科',
    major: '网络工程'
  }
]

const certificates = ['CET-6（大学英语六级）']

const sectionRef = ref(null)
const revealed = ref(false)

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) { revealed.value = true; return }

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      revealed.value = true
      observer.disconnect()
    }
  }, { threshold: 0.1 })

  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <section id="education" ref="sectionRef" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-3xl sm:text-4xl font-heading font-bold text-tech-fg mb-8 sm:mb-12 text-center reveal"
        :class="{ revealed }"
      >
        <span class="text-tech-accent">&gt;</span> 教育背景
      </h2>

      <div class="max-w-2xl mx-auto space-y-5 sm:space-y-6">
        <div
          v-for="(edu, index) in education"
          :key="index"
          class="glass-card rounded-xl p-5 sm:p-6 hover:glow-green transition-all duration-300 reveal"
          :class="{ revealed }"
          :style="{ transitionDelay: revealed ? (index * 100 + 100) + 'ms' : '0ms' }"
        >
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-tech-fg">{{ edu.school }}</h3>
              <p class="text-base sm:text-lg text-tech-accent">{{ edu.major }}</p>
            </div>
            <span class="text-sm sm:text-base text-tech-muted-fg mt-1 sm:mt-0 whitespace-nowrap font-mono">
              {{ edu.degree }}
            </span>
          </div>
        </div>

        <!-- 资格证书 -->
        <div
          class="glass-card rounded-xl p-5 sm:p-6 reveal"
          :class="{ revealed }"
          :style="{ transitionDelay: revealed ? (education.length * 100 + 100) + 'ms' : '0ms' }"
        >
          <h3 class="text-lg font-heading font-bold text-tech-accent mb-3">资格证书</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(cert, i) in certificates"
              :key="i"
              class="px-3 py-1.5 bg-tech-accent/10 text-tech-accent rounded text-sm font-mono border border-tech-accent/20"
            >
              {{ cert }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
