<template>
  <div class="order-book">
    <h1 class="order-book__title">Order Book</h1>
    <div class="order-book__table-container">
      <OrderBookTable
        title="Bids"
        :items="bids"
        :showQuantity="true"
        :itemsPerPage="itemsPerPage"
      />
      <OrderBookTable
        title="Asks"
        :items="asks"
        :showQuantity="true"
        :itemsPerPage="itemsPerPage"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import OrderBookTable from './OrderBookTable.vue';

export default {
  name: 'OrderBookView',
  components: {
    OrderBookTable,
  },
  computed: {
    ...mapState('orderBook', ['bids', 'asks']),
  },
  data() {
    return {
      itemsPerPage: 100,
    };
  },
};
</script>

<style scoped>
.order-book__title {
  text-align: center;
  margin-bottom: 20px;
}

/* Стили для компонента отображения таблиц Order Book */
.order-book__table-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}

@media (max-width: 768px) {
  .order-book__table-container {
    flex-direction: column;
  }
}
</style>
