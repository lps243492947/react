import { state } from './redux/state.js'
import { storeChange } from './redux/storeChange.js';
import { createStore } from './redux/createStore.js';

const { store, dispatch, subscribe } = createStore(state, storeChange);

function renderHead(state) {
  console.log('render head');
  //两个函数组件
  const head = document.getElementById('head');
  head.innerText = state.head.text;
  head.style.color = state.head.color;
  //随意的修改
  // state.body.text = '我是经过 head修改的 body'
}

function renderBody (state) {
  console.log('render body');
  const body = document.getElementById('body');
  body.innerText = state.body.text;
  body.style.color = state.body.color;
}
function renderApp(store, oldStore={}) {
  if (store === oldStore) return;
  store.head !== oldStore.head && renderHead(store); // newState
  store.body !== oldStore.body && renderBody(store); // oldState
}
subscribe((store, oldStore) => renderApp(store, oldStore));
renderApp(store);
dispatch({ type: 'BODY_TEXT', text: '我是经过 head修改的 body'});
// renderApp(store); 性能开销太大

