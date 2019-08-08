<template lang="pug">
#HeaderBar.relative
  .border-b.border-seagreen.fixed.w-full.ani-sit.z-20.bg-white
    .container
      .flex.justify-between.items-center.p-2.lg_p-4.lg_px-8
        nuxt-link.flex.items-center(to="/")
          .logo.w-16.mr-3.ani-sit.ani-d-1.overflow-hidden
            #logo(ref="logo")
          .flex.flex-col.items-center
            .font-slab.lg_text-2xl.uppercase.text-allports.ani-sit.ani-d-10.whitespace-nowrap mindul family solutions
            .font-merri.text-seagreen.italic.lg_text-xl.ani-sit.ani-d-12
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
    .mobile_menu.bg-white.fixed.h-screen.pt-24.w-screen.z-10(v-if="menu.is_open")
      .flex.flex-col.text-4xl.text-right.mt-8
        nuxt-link.font-slab.uppercase.text-allports.p-4.ani-sil(
          v-for="option, index in nav",
          :class="`ani-d-${index+14}`",
          @click.native="menu.is_open = false",
          :key="option.route",
          :to="option.route",
          :title="option.detail") {{ option.label }}
</template>

<script>
import nav from '@/mixins/nav'
import menu from '@/lottie/menu'
import logo from '@/lottie/logo'
export default {
  mixins: [ nav ],

  data () {
    return {
      logo: {
        options: {},
        anim: {},
        is_open: false,
      },
      menu: {
        options: {},
        anim: {},
        is_open: false,
      }
    }
  },

  mounted () {
    if (process.browser && window.lottie) {
      this.menu.options = {
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
      this.menu.anim = window.lottie.loadAnimation(this.menu.options)

      this.logo.options = {
        container: this.$refs.logo,
        renderer: 'svg',
        width: 100,
        height: 100,
        loop: false,
        autoplay: true,
        rendererSettings: {
          className: 'lottieLogo',
        },
        animationData: logo,

      }
      this.logo.anim = window.lottie.loadAnimation(this.logo.options)
    }

  },

  methods: {
    toggle () {
      if (this.menu.is_open) {
        this.close()
        return this.menu.is_open = false
      }
      this.open()
      return this.menu.is_open = true
    },
    open () {
      this.menu.anim.playSegments([30, 40], true)
    },
    close () {
      this.menu.anim.playSegments([90, 110], true)
    },
  },
}
</script>
