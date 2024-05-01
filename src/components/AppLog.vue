<template>
  <div class="log">
    <h2>Changes log</h2>
    <v-list>
      <v-list-item v-for="(item, i) in log" :key="i">
        <v-list-item-content>
          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AppLog',
  computed: {
    ...mapState('settings', ['log']),
  },
};
</script>

<style scoped>
/* Стили для компонента лога изменений */
</style>
