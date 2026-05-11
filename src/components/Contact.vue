<script setup>
const contactInfo = {
  email: 'your.email@example.com',
  location: '城市, 国家',
  available: true
}
</script>

<template>
  <section id="contact" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-tech-muted/30">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl sm:text-4xl font-heading font-bold text-tech-fg mb-8 sm:mb-12 text-center">
        <span class="text-tech-accent">&gt;</span> 联系方式
      </h2>

      <div class="max-w-2xl mx-auto">
        <div class="glass-card rounded-xl p-6 sm:p-8">
          <div class="space-y-5 sm:space-y-6">
            <div class="flex items-center space-x-3 sm:space-x-4">
              <div class="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-lg bg-tech-accent/10 border border-tech-accent/20">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-tech-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="min-w-0">
                <p class="text-xs sm:text-sm text-tech-muted-fg">邮箱</p>
                <a :href="`mailto:${contactInfo.email}`" class="text-sm sm:text-base text-tech-fg hover:text-tech-accent transition-colors truncate block">
                  {{ contactInfo.email }}
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-3 sm:space-x-4">
              <div class="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-lg bg-tech-accent/10 border border-tech-accent/20">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-tech-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="text-xs sm:text-sm text-tech-muted-fg">位置</p>
                <p class="text-sm sm:text-base text-tech-fg">{{ contactInfo.location }}</p>
              </div>
            </div>

            <div v-if="contactInfo.available" class="flex items-center space-x-3 sm:space-x-4">
              <div class="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-lg bg-tech-accent/10 border border-tech-accent/20">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-tech-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="text-xs sm:text-sm text-tech-muted-fg">状态</p>
                <p class="text-sm sm:text-base text-tech-accent font-semibold">开放工作机会</p>
              </div>
            </div>
          </div>

          <div class="mt-6 sm:mt-8 text-center">
            <a
              :href="`mailto:${contactInfo.email}`"
              class="inline-block w-full sm:w-auto px-8 py-3.5 bg-tech-accent text-tech-bg rounded-lg hover:glow-green active:scale-95 transition-all font-bold text-center"
            >
              发送邮件
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
