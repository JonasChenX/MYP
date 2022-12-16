import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'

//引入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"

//引入fortawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPhone)

//引入notification
import Notifications from '@kyvg/vue3-notification'

//引入RadialProgress 
import RadialProgress from "vue3-radial-progress";

const app = createApp(App)
    .use(store)
    .use(router)
    .use(Notifications)
    .use(RadialProgress)
    .component('font-awesome-icon', FontAwesomeIcon)
    
// 把 mitt 加入 Vue 的全域 Property，讓任何一個元件都能使用
app.config.globalProperties.$eventBus = mitt();

app.mount('#app')
