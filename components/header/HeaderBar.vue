<template lang="pug">
#HeaderBar.relative
  .border-b.border-seagreen.fixed.w-full.ani-sit.z-20(:class="{'bg-white': is_open, 'bg-white': !is_open}")
    .container
      .flex.justify-between.items-center.p-2.lg_p-4.lg_px-8
        nuxt-link.flex.items-center(to="/")
          .logo.w-16.mr-3.ani-sit.ani-d-1
            include ../../static/logo.svg
          .flex.flex-col.items-center
            .font-slab.text-lg.lg_text-2xl.uppercase.text-allports.ani-sit.ani-d-2 mindul family solutions
            .font-merri.text-seagreen.italic.lg_text-xl.ani-sit.ani-d-3
              span empower
              i.mdi.mdi-circle-medium
              span connect
              i.mdi.mdi-circle-medium
              span support
        .flex.hidden.lg_flex
          .inline-block.ani-sil(v-for="option, index in nav",:class="`ani-d-${index+4}`")
            nuxt-link.font-slab.uppercase.text-allports(
              :to="option.route",
              :title="option.detail",
              ) {{ option.label }}
            i.px-2.mdi.mdi-circle-medium.text-allports(v-if="index != (Object.keys(nav).length-1)")
        .menu.lg_hidden.select-none.hl-tran.ani-zi.ani-d-6
          #lottieMenu.w-12.h-12.cursor-pointer.overflow-hidden(ref="lottieMenu",@click="toggle")

  transition(name="fade-in-left")
    .mobile_menu.bg-white.fixed.h-screen.pt-24.w-screen.z-10(v-if="is_open")
      .flex.flex-col.text-4xl.text-right.mt-8
        nuxt-link.font-slab.uppercase.text-allports.p-4.ani-sil(
          v-for="option, index in nav",
          :class="`ani-d-${index+3}`",
          @click.native="is_open = false",
          :key="option.route",
          :to="option.route",
          :title="option.detail") {{ option.label }}
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
      this.anim.playSegments([30, 40], true)
    },
    close () {
      this.anim.playSegments([90, 110], true)
    },
  },
}
</script>
