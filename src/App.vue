<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
@media (max-width: 768px) {
  tr th:nth-child(2) {
    display: none;
  }

  tr td:nth-child(2) {
    display: none;
  }
}
</style>
