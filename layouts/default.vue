<template lang="pug">
  #mindful(v-if="loaded")
    HeaderBar
    nuxt
</template>

<script>
import HeaderBar from '@/components/header/HeaderBar'
export default {
  data () {
    return {
      loaded: false,
    }
  },
  components: { HeaderBar },
  mounted () {
    this.$nextTick( () => {
      this.$nuxt.$loading.start()
      setTimeout(() => { this.$nuxt.$loading.finish(); this.loaded = true; }, 500)
    })
  },
}
</script>
