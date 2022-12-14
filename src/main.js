import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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

createApp(App)
    .use(store)
    .use(router)
    .use(Notifications)
    .use(RadialProgress)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
