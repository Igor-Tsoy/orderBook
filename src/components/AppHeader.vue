<template>
  <header class="v-container">
    <img src="../assets/logo.svg" alt="Логотип" />
    <v-tabs grow>
      <v-tab :to="{ name: 'Settings' }" exact ripple>Settings</v-tab>
      <v-tab :to="{ name: 'OrderBook' }" exact ripple>Order Book</v-tab>
    </v-tabs>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
/* Стили для хедера */
</style>
