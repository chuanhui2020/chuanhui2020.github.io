<script setup>
import { ref, onMounted } from 'vue'

const skillCategories = [
  {
    category: '后端语言',
    skills: [
      { name: 'Core Java', level: 95 },
      { name: 'Golang', level: 82 }
    ]
  },
  {
    category: '框架 & 通信',
    skills: [
      { name: 'Spring 全家桶', level: 90 },
      { name: 'Netty', level: 88 },
      { name: 'Thrift / gRPC', level: 80 },
      { name: 'Proto-Actor', level: 75 }
    ]
  },
  {
    category: '数据库 & 缓存',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'Redis', level: 88 },
      { name: 'MongoDB', level: 75 }
    ]
  },
  {
    category: '构建 & 工具',
    skills: [
      { name: 'Maven / Gradle', level: 88 },
      { name: 'Git / SVN', level: 90 },
      { name: 'Go Modules', level: 75 }
    ]
  }
]

const sectionRef = ref(null)
const revealed = ref(false)
const barsAnimated = ref(false)

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) { revealed.value = true; barsAnimated.value = true; return }

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      revealed.value = true
      setTimeout(() => { barsAnimated.value = true }, 400)
      observer.disconnect()
    }
  }, { threshold: 0.1 })

  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <section id="skills" ref="sectionRef" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-3xl sm:text-4xl font-heading font-bold text-tech-fg mb-8 sm:mb-12 text-center reveal"
        :class="{ revealed }"
      >
        <span class="text-tech-accent">&gt;</span> 技能专长
      </h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div
          v-for="(category, index) in skillCategories"
          :key="index"
          class="glass-card rounded-xl p-5 sm:p-6 reveal"
          :class="{ revealed }"
          :style="{ transitionDelay: revealed ? (index * 80 + 100) + 'ms' : '0ms' }"
        >
          <h3 class="text-lg sm:text-xl font-heading font-bold text-tech-accent mb-5">
            {{ category.category }}
          </h3>

          <div class="space-y-4">
            <div
              v-for="(skill, i) in category.skills"
              :key="i"
              class="space-y-1.5"
            >
              <div class="flex justify-between items-center">
                <span class="text-sm sm:text-base text-tech-fg">{{ skill.name }}</span>
                <span class="text-xs sm:text-sm text-tech-muted-fg font-mono">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-tech-muted rounded-full h-2">
                <div
                  class="skill-bar bg-gradient-to-r from-tech-accent/70 to-tech-accent h-2 rounded-full"
                  :class="{ animate: barsAnimated }"
                  :style="{ '--target-width': skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
