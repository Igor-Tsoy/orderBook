<template>
  <div class="settings v-container">
    <h2>Select currency pair</h2>
    <v-select
      label="Сurrency pair"
      v-model="selectedPair"
      @update:modelValue="changePair"
      :items="currencyPairs"
      :multiple="false"
    ></v-select>
    <AppLog />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AppLog from '../components/AppLog.vue';

export default {
  name: 'AppSettings',
  components: {
    AppLog,
  },
  data() {
    return {
      currencyPairs: ['BTCUSDT', 'BNBBTC', 'ETHBTC'],
      selectedPair: 'BTCUSDT',
    };
  },
  mounted() {
    if (!this.hasData) {
      this.changePair(this.selectedPair);
    }
  },
  computed: {
    ...mapGetters('orderBook', ['hasData']),
  },
  methods: {
    ...mapActions('settings', ['changePair']),
    ...mapActions('orderBook', ['initOrderBookWebSocket']),
  },
};
</script>

<style scoped>
/* Стили для страницы настроек */
</style>
