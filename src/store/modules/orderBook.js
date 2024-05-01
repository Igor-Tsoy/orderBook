import { getOrderBook, subscribeToOrderBook } from '@/services/binanceService';

const state = {
  activeConnetion: null,
  bids: [],
  asks: [],
};

const mutations = {
  loadBids(state, bids) {
    state.bids = bids;
  },
  loadAsks(state, asks) {
    state.asks = asks;
  },
  updateBids(state, bids) {
    state.bids.unshift(...bids);
  },
  updateAsks(state, asks) {
    state.asks.unshift(...asks);
  },
};

const actions = {
  async fetchOrderBook({ commit, rootState }) {
    const pair = rootState.settings.selectedPair;
    const data = await getOrderBook(pair);
    if (data) {
      commit('loadBids', data.bids);
      commit('loadAsks', data.asks);
    }
  },
  async initOrderBookWebSocket({ dispatch, rootState, commit }) {
    if (state.activeConnetion) {
      state.activeConnetion.close();
    }
    const pair = rootState.settings.selectedPair;
    dispatch('fetchOrderBook');
    state.activeConnetion = await subscribeToOrderBook(pair, (event) => {
      const data = JSON.parse(event.data);
      commit('updateAsks', data.a);
      commit('updateBids', data.b);
    });
  },
};

const getters = {
  hasData(state) {
    return state.bids.length || state.asks.length;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
