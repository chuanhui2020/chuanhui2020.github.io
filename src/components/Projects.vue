<script setup>
const projects = [
  {
    title: '项目名称 1',
    description: '项目的简短描述，说明项目的目标和你的贡献',
    tech: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
    link: '',
    github: ''
  },
  {
    title: '项目名称 2',
    description: '项目的简短描述，说明项目的目标和你的贡献',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: '',
    github: ''
  },
  {
    title: '项目名称 3',
    description: '项目的简短描述，说明项目的目标和你的贡献',
    tech: ['Python', 'Django', 'PostgreSQL'],
    link: '',
    github: ''
  }
]
</script>

<template>
  <section id="projects" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-tech-muted/30">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl sm:text-4xl font-heading font-bold text-tech-fg mb-8 sm:mb-12 text-center">
        <span class="text-tech-accent">&gt;</span> 项目展示
      </h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="glass-card rounded-xl p-5 sm:p-6 hover:glow-green transition-all duration-300 group"
        >
          <div class="flex items-center mb-3">
            <svg class="w-5 h-5 text-tech-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <h3 class="text-lg sm:text-xl font-bold text-tech-fg group-hover:text-tech-accent transition-colors">
              {{ project.title }}
            </h3>
          </div>

          <p class="text-tech-muted-fg mb-4 leading-relaxed text-sm sm:text-base">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="(tech, i) in project.tech"
              :key="i"
              class="px-2.5 py-1 bg-tech-accent/10 text-tech-accent rounded text-xs font-mono border border-tech-accent/20"
            >
              {{ tech }}
            </span>
          </div>

          <div class="flex flex-wrap gap-4">
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="inline-flex items-center text-tech-accent hover:glow-green-text text-sm py-1 transition-all"
            >
              查看项目 →
            </a>
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              class="inline-flex items-center text-tech-muted-fg hover:text-tech-accent text-sm py-1 transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
