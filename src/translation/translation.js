import Vue from 'vue';

import VueI18n from 'vue-i18n';



import messages from './messages/languages';



Vue.use(VueI18n);


const i18n = new VueI18n({

    locale : 'ar',  //// defult language the app will start with


    // translation object

    messages : messages,    

});





export default i18n;
