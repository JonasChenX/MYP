import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'

import Directives from '@/components/myp305/directivesMain'

//引入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"

//引入fortawesome
//icon樣式庫: https://fontawesome.com/icons/magnifying-glass?s=solid&f=classic
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

//引入notification
import Notifications from '@kyvg/vue3-notification'

//引入RadialProgress 
import RadialProgress from "vue3-radial-progress";

const app = createApp(App)
    .use(store)
    .use(router)
    .use(Notifications)
    .use(RadialProgress)
    .component("font-awesome-icon", FontAwesomeIcon)
    
    
// 把 mitt 加入 Vue 的全域 Property，讓任何一個元件都能使用
app.config.globalProperties.$eventBus = mitt();

//引入多個指令 
app.use(Directives)

//引入tooltip指令
import tooltip from '@/components/myp305/tooltip/directive'
app.use(tooltip)


app.mount('#app')
