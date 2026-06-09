<script setup>
import { ref, onMounted } from 'vue'

const experiences = [
  {
    company: '北京格瑞拉科技有限公司',
    position: '服务端开发工程师',
    duration: '2025.03 - 至今',
    description: '参与 SLG 手游项目的服务端研发。',
    achievements: [
      'SLG 手游服务端开发'
    ]
  },
  {
    company: '上海梦求网络科技有限公司',
    position: '服务端开发工程师',
    duration: '2021.09 - 2024.12',
    description: '参与《新斗罗大陆》手游（卡牌流水过亿）的开发与维护。',
    achievements: [
      '对接策划需求，负责游戏模块与玩法开发',
      '独立完成游戏在海外越南、泰国地区（VNG 发行）的技术接入与上线'
    ]
  },
  {
    company: '上海睿曦网络科技有限公司',
    position: '服务端开发工程师',
    duration: '2020.10 - 2021.08',
    description: '参与公司手游研发。',
    achievements: [
      '对接策划需求，进行游戏功能开发',
      '对接客户端，设计 Protobuf 接口并提供实现'
    ]
  },
  {
    company: 'Travelfusion（上海途程旅游咨询有限公司）',
    position: 'Java 开发工程师',
    duration: '2019.06 - 2020.10',
    description: '对接全球航空公司内容，参与跨国团队协作。',
    achievements: [
      '实现与全球航司（日本航空、芬兰航空等）的内容对接',
      '与全球团队沟通协作',
      '负责 Code Review 与 pre-QA 单元测试',
      '编写 Release Notes 与系统对接文档'
    ]
  },
  {
    company: '北京新晨科技股份有限公司',
    position: 'Java 开发工程师',
    duration: '2018.06 - 2019.06',
    description: '银行票据交换系统开发。',
    achievements: [
      '协调行内柜面、交换、工作流等关联系统，完成交易准入、银行核心系统对接、人行系统对接、对账等功能，保障交易的安全性与可靠性',
      '完成分行票据交换系统大部分业务开发，包括三方系统联调与测试支持'
    ]
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
  <section id="experience" ref="sectionRef" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-3xl sm:text-4xl font-heading font-bold text-tech-fg mb-8 sm:mb-12 text-center reveal"
        :class="{ revealed }"
      >
        <span class="text-tech-accent">&gt;</span> 工作经历
      </h2>

      <div class="space-y-6 sm:space-y-8">
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="glass-card rounded-xl p-5 sm:p-6 hover:glow-green transition-all duration-300 reveal"
          :class="{ revealed }"
          :style="{ transitionDelay: revealed ? (index * 100 + 100) + 'ms' : '0ms' }"
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
