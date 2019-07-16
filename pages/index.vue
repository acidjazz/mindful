<template lang="pug">
.page.page-home
  .hero.bg-beach.h-screen
    .container
      .flex.h-screen.items-center
        .w-256.mx-auto.text-4xl.text-center.text-white.text-shadow(v-in-vp).vp-y {{ copy.opener }}
</template>

<script>

import copy from '@/mixins/copy'

export default {
  data () {
    return {
      copy: copy.home
    }
  }
}
</script>

<style>
</style>
