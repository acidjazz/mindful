<p align="center">
  <img src="https://github.com/acidjazz/mindful/blob/master/static/mindful.jpg" alt="mindful family solutions"/>
</p>

> We Are Apartments

[![GitHub issues](https://img.shields.io/github/issues/acidjazz/mindful.svg)](https://github.com/acidjazz/mindful/issues)
[![CircleCI](https://img.shields.io/circleci/project/github/acidjazz/mindful.svg)](https://circleci.com/gh/acidjazz/mindful/)
[![aeonian status](https://img.shields.io/badge/%C3%A6onian-deployed-green.svg)](https://github.com/acidjazz/aeonian)
<a href="https://github.com/nuxt/nuxt.js/"><img src="https://img.shields.io/badge/nuxt.js-v2.8.1-800080.svg?style=flat-square" alt=""/></a>

## Branch Status

master | staging
--- | ---
[![CircleCI](https://circleci.com/gh/acidjazz/mindful/tree/master.svg?style=shield)](https://circleci.com/gh/acidjazz/mindful/tree/master) | [![CircleCI](https://circleci.com/gh/acidjazz/mindful/tree/staging.svg?style=shield)](https://circleci.com/gh/acidjazz/mindful/tree/staging)

## Local Build Setup
* Clone this repository 
```bash
git clone git@github.com:acidjazz/mindful.git
```
* Install dependencies
```bash
yarn install
```
* Generate routes and lever job listings
```bash
yarn cash
```
* Serve your dev environment with [HMR](https://webpack.github.io/docs/hot-module-replacement.html) at http://localhost:3000
```bash
yarn dev
```

## Deployment
Continuous Deployment is setup using the [git-flow](http://nvie.com/posts/a-successful-git-branching-model/) workflow with [aeonian](https://github.com/acidjazz/aeonian) via [Circle-CI](https://circleci.com/gh/acidjazz/mindful)
