<template lang="pug">
.page.page-home.bg-beach.h-screen
  .container
    .flex.pt-32.h-screen
      .w-256.mx-auto.text-4xl.text-center {{ copy.opener }}
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
