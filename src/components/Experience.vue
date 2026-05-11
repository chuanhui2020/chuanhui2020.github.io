<script setup>
const experiences = [
  {
    company: '公司名称',
    position: '职位名称',
    duration: '2023.01 - 至今',
    description: '描述你在这个职位的主要工作内容和成就',
    achievements: [
      '成就或项目 1',
      '成就或项目 2',
      '成就或项目 3'
    ]
  },
  {
    company: '上一家公司',
    position: '职位名称',
    duration: '2021.06 - 2022.12',
    description: '描述你在这个职位的主要工作内容和成就',
    achievements: [
      '成就或项目 1',
      '成就或项目 2'
    ]
  }
]
</script>

<template>
  <section id="experience" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl sm:text-4xl font-heading font-bold text-tech-fg mb-8 sm:mb-12 text-center">
        <span class="text-tech-accent">&gt;</span> 工作经历
      </h2>

      <div class="space-y-6 sm:space-y-8">
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="glass-card rounded-xl p-5 sm:p-6 hover:glow-green transition-all duration-300"
        >
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-tech-fg">
                {{ exp.position }}
              </h3>
              <p class="text-lg sm:text-xl text-tech-accent">
                {{ exp.company }}
              </p>
            </div>
            <span class="text-sm sm:text-base text-tech-muted-fg mt-1 sm:mt-0 whitespace-nowrap font-mono">
              {{ exp.duration }}
            </span>
          </div>

          <p class="text-tech-muted-fg mb-3 sm:mb-4 leading-relaxed">
            {{ exp.description }}
          </p>

          <ul class="space-y-1.5 sm:space-y-2 text-tech-muted-fg">
            <li v-for="(achievement, i) in exp.achievements" :key="i" class="flex items-start">
              <span class="text-tech-accent mr-2 mt-0.5">▹</span>
              <span>{{ achievement }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
