<template>
  <div id="app">
    <top-menu></top-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import TopMenu from '@/components/TopMenu'
export default {
  components: {
    TopMenu
  },
  name: 'app'
}
</script>

<style>
#app {
  height: 100%;
}

html, body {
  height: 100%;
}

body, button, code, div, footer, form, h1, h2, h3, h4, h5, h6, header, input, li, nav, p, pre, textarea, th, ul {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
