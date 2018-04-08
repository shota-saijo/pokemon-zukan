<template>
  <div id="app">
    <base-layout>
      <list></list>
    </base-layout>
  </div>
</template>

<script>
import BaseLayoutVue from './components/BaseLayout.vue'
import ListVue from './components/List.vue'

export default {
  name: 'App',
  components: {
    'base-layout': BaseLayoutVue,
    'list': ListVue
  }
}
</script>
