import store from '@/store';

function hasData(to, from, next) {
  if (store.getters['orderBook/hasData']) {
    next();
  }
  next({ name: 'Settings' });
}

export default {
  hasData,
};
