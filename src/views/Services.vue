<template>
    <div class="Page_services">
        <loader v-if="loader" />
        <pageHeaderVue active_services="active"/>
        <About_initVue :title="$t('headers.ser_1')" :head="$t('headers.ser_2')" />

        <homeServicesVue show="false" class="mt-2" :services_page="services_page" :pagination="pagination" />
        <Slider />
        <pageFooter />
    </div>
</template>

<script>
import axios from 'axios'
import pageHeaderVue from '../components/page-header.vue'
import About_initVue from '../components/About_init.vue'
import homeServicesVue from '../components/home-services.vue'
import Slider from '../components/home-slider.vue'
import pageFooter from '../components/home-footer.vue'
import loader from '../components/loader.vue'
export default {
    data(){
        return{
            // services : {},
            services_page : [],
            services2 : [],
            pagination : {},
            totalServices : [],
            loader : true
        }
    },
    components : {
        pageHeaderVue,
        About_initVue,
        homeServicesVue,
        Slider,
        pageFooter,
        loader
    },
    async created(){
        try{
            const res = await axios.get('https://cybervision.com.sa/api/services');
            const res1 = await axios.get('https://cybervision.com.sa/api/services?page=2')
            this.services = res.data.data.services
            this.services_page = res.data.data.services.services
            this.pagination =  res.data.data.services.pagination
            this.services2 = res1.data.data.services.services
            this.services_page.push(...this.services2)
            this.loader = false


        }catch(e){console.log(e)}
    }
}
</script>

<style lang="scss">

.service-item{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>