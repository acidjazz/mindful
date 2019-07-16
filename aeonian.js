#!/usr/bin/env node
/*
 * aeonian.js - configuration and deployment
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
require('aeonian').config({
  bucket: {
    localDir: 'dist/',
    prefix: 'mnd-',
    region: 'us-east-1',
  },
  environments: {
    "production": 'E2SLQK6SFW6DAX',
  }
}).deploy(process.argv[2])
