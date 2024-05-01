<template>
  <div class="v-container">
    <OrderBookView />
  </div>
</template>

<script>
import OrderBookView from '../components/OrderBookView.vue';

export default {
  name: 'OrderBook',
  components: {
    OrderBookView,
  },
};
</script>

<style scoped>
/* Стили для страницы с таблицей Order Book */
</style>
