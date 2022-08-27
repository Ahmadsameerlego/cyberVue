import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab} from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';


/* add icons to the library */
library.add(fas, fab,far)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// import carousal
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.config.productionTip = false


// import i18n
import i18n from './translation/translation';


// import axios
import './axios'

// handling api error
import { apiGet ,apiPost ,apiPut ,apiDelete } from './apis/mainApis';
Vue.prototype.$apiGet     = apiGet;

Vue.prototype.$apiPost    = apiPost;

Vue.prototype.$apiPut     = apiPut;

Vue.prototype.$apiDelete  = apiDelete;

// import sweetalert
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);




import VuePaginate from "vue-paginate";
Vue.use(VuePaginate);

Vue.use(

  // i18nRootKey: 'validations', // customize the root path for validation messages.

  i18n

);



new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
