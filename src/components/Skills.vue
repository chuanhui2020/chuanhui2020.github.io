<script setup>
const skillCategories = [
  {
    category: '前端开发',
    skills: [
      { name: 'Vue.js', level: 90 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 85 }
    ]
  },
  {
    category: '后端开发',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'SQL', level: 70 }
    ]
  },
  {
    category: '工具 & 其他',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 65 }
    ]
  }
]
</script>

<template>
  <section id="skills" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl sm:text-4xl font-heading font-bold text-tech-fg mb-8 sm:mb-12 text-center">
        <span class="text-tech-accent">&gt;</span> 技能专长
      </h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div
          v-for="(category, index) in skillCategories"
          :key="index"
          class="glass-card rounded-xl p-5 sm:p-6"
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
                  class="bg-gradient-to-r from-tech-accent/70 to-tech-accent h-2 rounded-full transition-all duration-500"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
