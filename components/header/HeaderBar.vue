<template lang="pug">
#HeaderBar.py-4.px-8.border-b.border-seagreen.fixed.w-full
  .container
    .flex.justify-between.items-center
      .flex.items-center
        .logo.w-16.mr-3
          include ../../static/logo.svg
        .flex.flex-col.items-center
          .font-slab.text-2xl.uppercase.text-allports mindul family solutions
          .font-merri.text-seagreen.italic.text-xl
            span empower
            i.mdi.mdi-circle-medium
            span connect
            i.mdi.mdi-circle-medium
            span support
      .flex
        span(v-for="option, index in nav")
          nuxt-link.font-slab.uppercase.text-allports(:to="option.route",:title="option.detail") {{ option.label }}
          i.px-2.mdi.mdi-circle-medium.text-allports(v-if="index != (Object.keys(nav).length-1)")
</template>


<script>
import nav from '@/mixins/nav'
export default {
  mixins: [ nav ],
}
</script>
