<script setup>
import { ref, onMounted } from 'vue'

const projects = [
  {
    title: '新斗罗大陆手游',
    description: '斗罗 IP 卡牌手游，累计流水过亿。服务端基于 Netty 通信，游戏服与中心服通过 Thrift RPC 通信，数据落地 MySQL、缓存基于 Redis。负责养成系统与大中型玩法的开发上线，活动 GM / 公告 / CDKey 等周边服开发优化，并独立完成 VNGGames 越南、泰国地区的发行接入。',
    tech: ['Core Java', 'Netty', 'Thrift RPC', 'Hibernate', 'MySQL', 'Redis'],
    link: '',
    github: ''
  },
  {
    title: '梦幻觉醒手游（SLG）',
    description: 'ROK-Like 轻中度 SLG 游戏，客户端基于 Unity3D，服务端基于 Spring 框架，前后端接口基于 Google Protobuf，并发采用 Actor 模型（类 Akka）。负责个人养成线与联盟养成线开发（注册登录、道具、武将士兵、城建、联盟等系统）、部分场景模块（大地图建筑、部队创建与行为）及整体架构设计。',
    tech: ['Spring Boot', 'Spring MVC', 'Netty', 'Protobuf', 'Actor 模型', 'MongoDB'],
    link: '',
    github: ''
  },
  {
    title: 'TF-JAL 航司内容对接',
    description: '为 Travelfusion（聚合平台）实现与各大航司及 OTA 内容（Booking.com / Trip.com / Expedia 等）的对接，并与东京 JAL、巴黎 Amadeus 等全球团队协作完成集成。',
    tech: ['Spring', 'Spring MVC', 'MyBatis', 'Redis', 'RESTful'],
    link: '',
    github: ''
  }
]

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
  <section id="projects" ref="sectionRef" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-tech-muted/30">
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-3xl sm:text-4xl font-heading font-bold text-tech-fg mb-8 sm:mb-12 text-center reveal"
        :class="{ revealed }"
      >
        <span class="text-tech-accent">&gt;</span> 项目展示
      </h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="glass-card rounded-xl p-5 sm:p-6 hover:glow-green transition-all duration-300 group reveal"
          :class="{ revealed }"
          :style="{ transitionDelay: revealed ? (index * 80 + 100) + 'ms' : '0ms' }"
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
