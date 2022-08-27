<template>
    <section class="services_details">
        <loader v-if="loader" />
        <pageHeaderVue />
        <About_initVue title="الرئيسية_الخدمات" :head="service.name" />
        <service_contentVue :service="service" />
        <cyberSolvesVue  :cyper_solutions="cyper_solutions" :solutions="solutions"/>
        <Slider :partners="partners"/>
        <homeFooterVue/>
    </section>
</template>

<script>
import pageHeaderVue from '../components/page-header.vue'
import About_initVue from '../components/About_init.vue'
import cyberSolvesVue from '../components/cyber-solves.vue'
import Slider from '../components/home-slider.vue'
import homeFooterVue from '../components/home-footer.vue'
import service_contentVue from '../components/service_content.vue'
import loader from '../components/loader.vue'

import axios from 'axios'

export default {
    data(){
        return{
            service : {},
            service_id : 0,
            cyper_solutions : {},
            solutions :[],
            partners : [],
            loader : true
        }
    },
    components : {
        pageHeaderVue,
        About_initVue,
        cyberSolvesVue,
        Slider,
        homeFooterVue,
        service_contentVue,
        loader
    },
    mounted(){
    },
    async created(){
        try {
            this.service_id = this.$route.params.id
            const res = await axios.get('https://cybervision.com.sa/api/single-service/'+this.service_id)

            this.service = res.data.data.services.service

            this.cyper_solutions = res.data.data.services.cyper_solutions
            this.solutions = res.data.data.services.cyper_solutions.solutions
            this.partners = res.data.data.partners
            this.loader = false
            
            // console.log(this.service.id)
        }catch(e){
            console.log(e)
        }
    }
}
</script>

<style>

</style>