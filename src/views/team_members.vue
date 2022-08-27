<template>
    <section class="team_members">
        <loader v-if="loader" />
        <pageHeaderVue  active_home="active" />
        <AboutInit title="الرئيسية_الفريق" head="اعضاء الفريق"/>
        <Members class="mt-5 mb-5" :experts="experts" :pagination="pagination" />

        <slider class="mt-5"/>
        <homeFooterVue class="mt-5" />
    </section>
</template>

<script>
import pageHeaderVue from '../components/page-header.vue'
import AboutInit from '../components/About_init.vue'
import Members from '../components/members.vue'
import slider from '../components/home-slider.vue'
import homeFooterVue from '../components/home-footer.vue'
import loader from '../components/loader.vue'

import axios from 'axios'
export default {
    data(){
        return{
            pagination : {},
            experts : [],
            experts2 : [],
            loader : true
        }
    },
    components : {
        pageHeaderVue,
        AboutInit,
        Members,
        slider,
        homeFooterVue,
        loader
    },
    props : [
        'active_home'
    ],
    async created(){
        try{
            const res = await axios.get('https://cybervision.com.sa/api/experts')
            const res1 = await axios.get('https://cybervision.com.sa/api/experts?page=2')
            this.experts = res.data.data.experts
            this.experts2 = res1.data.data.experts
            this.experts.push(...this.experts2)
            this.pagination = res.data.data.pagination
            this.loader = false
        }catch(e){
            console.log(e)
        }
    }
}
</script>

<style>

</style>