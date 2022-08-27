import axios from "axios";

import { apiError } from "../publicFunctions";



// Vue.use(store)

function apiConfig(){

    axios.defaults.headers.common['lang'] = sessionStorage.getItem('lang') ?? 'ar';

}


export async function apiPost(url ,data = null ,config = null){

    try{

        apiConfig()

        const response = await axios.post(url ,data ,config);

        return response;

    }catch(error){

        apiError(error);

    }

}



export async function apiGet(url ,data = null ,config = null){

    try{

        apiConfig()

        const response = await axios.get(url ,data ,config);

        return response;

    }catch(error){

        apiError(error);

    }

}


export async function apiPut(url ,data = null ,config = null){

    try{

        apiConfig()

        const response = await axios.put(url ,data ,config);

        return response;

    }catch(error){

        apiError(error);

    }

}


export async function apiDelete(url ,data = null ,config = null){

    try{

        apiConfig()

        const response = await axios.delete(url ,data ,config);

        return response;

    }catch(error){

        apiError(error);

    }

}
