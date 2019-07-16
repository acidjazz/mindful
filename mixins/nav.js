/*
 * nav.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
export default {
  data () {
    return {
      nav: [
        {
          label: 'about',
          detail: 'about your coach',
          route: '/about',
        },
        {
          label: 'services',
          detail: 'our services',
          route: '/services',
        },
        {
          label: 'testimonials',
          detail: 'our testimonials',
          route: '/testimonials',
        },
        {
          label: 'FAQ',
          detail: 'frequently asked questions',
          route: '/faq',
        },
        {
          label: 'Client Services',
          detail: 'detailed for client services',
          route: '/services',
        },
      ]
    }
  }
}
