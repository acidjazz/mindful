<template lang="pug">
.page.page-home
  .hero.bg-beach.h-screen
    .container
      .flex.h-screen.lg_items-end.items-center
        .lg_w-256.p-2.lg_pb-10.mx-auto.text-2xl.lg_text-4xl.text-center.text-white.z-0(v-in-vp).vp-y {{ copy.opener }}
  .below.my-16
    .container
      .flex.items-around.p-4.lg_p-16.flex-col.lg_flex-row
        .lg_w-1_2.flex.flex-col.items-end.justify-around
          .lg_mr-10(v-in-vp).vp-r.mb-8.lg_mb-0
            .text-2xl.font-bold.mb-2.text-seagreen Why Family Coaching?
            div Parents feeling like nobody is listening to them?
            div Kids feeling like nobody is hearing them?
            div Sibling fights, sleepless nights for parents and kids alike.
            div Constant arguments that seem to last forever, exhausting you and never leading to a viable solution.
            div You’ve resorted to giving in to your kids, even if you know their behavior isn’t positive because you no longer have the energy to deal anymore. You’ve lost control of your family.
            div Everything feels like a no-win situation, with your partner, your kids and your family as a whole.
            div You feel curious about consulting someone, a real person and not a blog post or a general internet search, maybe receiving some guidance, tools and an outside perspective.
          .lg_mr-10(v-in-vp).vp-r
            .text-2xl.font-bold.mb-2.text-seagreen Basic Principles of Mindful Family Solutions
            div Using an empathetic and respectful approach to understand the emotion behind the behavior
            div Positive communication using your active listening skills, I statements and having an open mind
            div Problem-solve together using role modeling, consistency, and positive reinforcement techniques
            div Practice Mindfulness by being aware of thoughts, feelings, actions and surroundings.
        .lg_w-1_2.p-4(v-in-vp).vp-l
          img.hidden.lg_block(src="/holdhands.jpg")

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
