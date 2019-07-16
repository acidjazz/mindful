<template lang="pug">
#HeaderBar.p-2.lg_p-4.lg_px-8.border-b.border-seagreen.fixed.w-full.bg-white-50.ani-sit
  .container
    .flex.justify-between.items-center
      .flex.items-center
        .logo.w-16.mr-3
          include ../../static/logo.svg
        .flex.flex-col.items-center
          .font-slab.text-lg.lg_text-2xl.uppercase.text-allports mindul family solutions
          .font-merri.text-seagreen.italic.lg_text-xl
            span empower
            i.mdi.mdi-circle-medium
            span connect
            i.mdi.mdi-circle-medium
            span support
      .flex.hidden.lg_flex
        span(v-for="option, index in nav")
          nuxt-link.font-slab.uppercase.text-allports(:to="option.route",:title="option.detail") {{ option.label }}
          i.px-2.mdi.mdi-circle-medium.text-allports(v-if="index != (Object.keys(nav).length-1)")
      .menu.lg_hidden
        #lottieMenu.w-12.h-12.cursor-pointer.overflow-hidden(ref="lottieMenu",@click="toggle")
</template>

<script>
import nav from '@/mixins/nav'
import menu from '@/lottie/menu'
export default {
  mixins: [ nav ],

  data () {
    return {
      options: {},
      anim: {},
      is_open: false,
    }
  },

  mounted () {
    if (process.browser && window.lottie) {
      this.options = {
        container: this.$refs.lottieMenu,
        renderer: 'svg',
        width: 100,
        height: 100,
        loop: false,
        autoplay: false,
        rendererSettings: {
          className: 'lottieMenu',
        },
        animationData: menu,

      }
      this.anim = window.lottie.loadAnimation(this.options)
    }
  },

  methods: {
    toggle () {
      if (this.is_open) {
        this.close()
        return this.is_open = false
      }
      this.open()
      return this.is_open = true
    },
    open () {
      console.log('opening menu')
      this.anim.playSegments([30, 40], true)
    },
    close () {
      console.log('closing menu')
      this.anim.playSegments([90, 110], true)
    },
  },
}
</script>
