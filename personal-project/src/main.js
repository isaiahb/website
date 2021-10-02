import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './registerServiceWorker'

// Vue.config.productionTip = false

// const app = createApp({
//   // router,
//   // store,
//   // render: h(App)
//   // data() {
//   //   return {
//   //     message: 'Hello Vue!'
//   //   }
//   // },
//   template: `<div>test</div>`
  
// });
const app = createApp(App);//.mount('#app')

app.use(router);
app.use(store);
app.mount('#app');

