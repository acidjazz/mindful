<template lang="pug">
.page.page-home
  .hero.bg-beach.h-screen
    .container
      .flex.h-screen.lg_items-end.items-center
        .lg_w-256.p-2.lg_pb-10.mx-auto.text-2xl.lg_text-4xl.text-center.text-white.z-0(v-in-vp).vp-y {{ copy.opener }}
  .below.my-16
    .container
      .flex.mx-2.lg_mx-16.lg_-px-12.items-center.mb-16
        .lg_w-1_2.lg_px-12
          .flex.mb-4(v-in-vp).vp-y
            .bg-seagreen.w-1.mr-4
            .text-2xl.font-bold.mb-2.text-seagreen Why Family Coaching?
          ul.ml-4(v-in-vp).vp-y
            li.mb-1 Parents feeling like nobody is listening to them?
            li.mb-1 Kids feeling like nobody is hearing them?
            li.mb-1 Sibling fights, sleepless nights for parents and kids alike.
            li.mb-1 Constant arguments that seem to last forever, exhausting you and never leading to a viable solution.
            li.mb-1 You’ve resorted to giving in to your kids, even if you know their behavior isn’t positive because you no longer have the energy to deal anymore. You’ve lost control of your family.
            li.mb-1 Everything feels like a no-win situation, with your partner, your kids and your family as a whole.
            li.mb-1 You feel curious about consulting someone, a real person and not a blog post or a general internet search, maybe receiving some guidance, tools and an outside perspective.
        .lg_w-1_2.px-12.hidden.lg_block
          img(src="/holdhands.jpg",v-in-vp).vp-y.vp-d-1

      .flex.mx-2.lg_mx-16.lg_-px-12.items-center.mb-16
        .lg_w-1_2.px-12.hidden.lg_block
          img(src="/boy.jpg",v-in-vp).vp-y
        .lg_w-1_2.lg_px-12
          .flex.mb-4(v-in-vp).vp-y
            .bg-seagreen.w-1.mr-4
            .text-2xl.font-bold.mb-2.text-seagreen  Basic Principles of Mindful Family Solutions
          ul.ml-4(v-in-vp).vp-y
            li.mb-1 Using an empathetic and respectful approach to understand the emotion behind the behavior
            li.mb-1 Positive communication using your active listening skills, I statements and having an open mind
            li.mb-1 Problem-solve together using role modeling, consistency, and positive reinforcement techniques
            li.mb-1 Practice Mindfulness by being aware of thoughts, feelings, actions and surroundings.

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
