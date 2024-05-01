<template>
  <div>
    <h2>{{ title }}</h2>
    <v-data-table
      class="order-book-table"
      :headers="headers"
      :items="items"
      fixed-header
      :items-per-page="100"
      :items-per-page-options="[100, 500, 1000]"
    >
      <template v-slot:header="{ props: { headers } }">
        <thead>
          <tr>
            <th v-for="h in headers" :class="h.class" :key="h.text">
              <span>{{ h.text }}</span>
            </th>
          </tr>
        </thead>
      </template>

      <template v-slot:item="{ item }">
        <tr>
          <td>
            {{ item[0] }}
          </td>
          <td>
            {{ item[1] }}
          </td>
          <td>
            {{ item[0] * item[1] }}
          </td>
        </tr>
      </template></v-data-table
    >
  </div>
</template>

<script>
export default {
  name: 'OrderBookTable',
  props: {
    items: Array,
    showQuantity: {
      type: Boolean,
      default: true,
    },
    itemsPerPage: {
      type: Number,
      default: 100,
    },
    title: {
      type: String,
      default: 'Bids',
    },
  },
  computed: {
    displayedItems() {
      return this.items.slice(0, this.itemsPerPage);
    },
    headers() {
      return [
        { title: 'Price' },
        {
          title: 'Quantity',
          class: ['order-book-table__hide'],
          cellClass: ['order-book-table__hide'],
        },
        { title: 'Total' },
      ];
    },
  },
};
</script>
<style scoped>
.order-book-table {
  max-height: 100vh;
}
</style>
