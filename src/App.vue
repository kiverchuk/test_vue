<template>
  <div id="app" class="container">
    <menu1/>
    <router-view/>
  </div>
</template>

<script>
import menu1 from './components/menu.vue'

export default {
  name: 'App',
  components: {
    menu1
  }
}
</script>

