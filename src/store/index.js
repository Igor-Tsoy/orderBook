import Vuex from 'vuex';
import settings from './modules/settings';
import orderBook from './modules/orderBook';

export default new Vuex.Store({
  modules: {
    settings,
    orderBook,
  },
});
