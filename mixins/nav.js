/*
 * nav.js - array to power our navigation menu and page titles
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
          detail: 'Meet your Family Coach',
          route: '/about',
        },
        {
          label: 'services',
          detail: 'Family Coaching and Consulting',
          route: '/services',
        },
        {
          label: 'testimonials',
          detail: 'Client Endorsements of Alexis Kraut',
          route: '/testimonials',
        },
        {
          label: 'FAQ',
          detail: 'Your Most Common Questions Answered',
          route: '/faq',
        },
      ]
    }
  }
}
