export const createStore = (state, storeChange) => {
  const listeners = []; // 组件
  const store = state || {};
  // listen callback
  const subscribe = (listen) => listeners.push(listen); // 订阅发布者
  const dispatch = (action) => {
    const newStore = storeChange(store, action);
    listeners.forEach(item => {
      item(newStore, store); // 新的store
    })
  }
  return { store, dispatch, subscribe };
}