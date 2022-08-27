import axios from 'axios';

// import {getUrl} from './publicFunctions';


axios.defaults.baseURL = 'https://cybervision.com.sa/api/';

// axios.defaults.baseURL = getUrl() + '/dashboard/api/';

// axios.defaults.baseURL = 'https://samicmi.aait-sa.com/api/';


let theLang = 'ar';

if(sessionStorage.getItem('lang')){

    theLang = sessionStorage.getItem('lang');

}



axios.defaults.headers.common['lang'] = theLang;
