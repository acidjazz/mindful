<template lang="pug">
.page.page-home
  .hero.bg-beach.h-screen
    .container
      .flex.h-screen.lg_items-end.items-center
        .lg_w-256.p-2.lg_pb-10.mx-auto.text-4xl.text-center.text-white.text-shadow.z-0(v-in-vp).vp-y {{ copy.opener }}
  .below
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
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
