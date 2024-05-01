const state = {
  selectedPair: 'BTCUSDT',
  log: [],
};

const mutations = {
  updatePair(state, pair) {
    state.selectedPair = pair;
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now
      .getHours()
      .toString()
      .padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now
      .getSeconds()
      .toString()
      .padStart(2, '0')}`;

    state.log.push(`Pair set to ${pair} | in ${formattedDate}`);
  },
};

const actions = {
  changePair({ commit, dispatch }, pair) {
    commit('updatePair', pair);
    dispatch('orderBook/initOrderBookWebSocket', null, { root: true });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
