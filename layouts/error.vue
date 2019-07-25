<template lang="pug">
.flex.items-center.justify-center.h-screen.w-screen
  div
    #construction(ref="construction")
    .text-4xl.text-seagreen coming soon
</template>


<script>
import construction from '@/lottie/construction'
export default {

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
        container: this.$refs.construction,
        renderer: 'svg',
        width: 300,
        height: 300,
        loop: true,
        autoplay: true,
        rendererSettings: {
          className: 'construction',
        },
        animationData: construction,

      }
      this.anim = window.lottie.loadAnimation(this.options)
    }
  },


}
</script>
