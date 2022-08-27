<template>
    <div class="About">
        <loader v-if="loader" />
        <pageHeaderVue active_About="active"/>
        <AboutInit :title="$t('headers.about_1')" :head="$t('headers.about_2')"/>

        <WelcomeInit :about="about" />

        <AboutDetails :chalenges="chalenges" :challenges_arr="challenges_arr" :about="about"/> 

        <slider  :partners="partners"/>
        <PageFooter />
    </div>
</template>

<script>
import pageHeaderVue from '../components/page-header.vue'
import AboutInit from '../components/About_init.vue'

import WelcomeInit from '../components/home-who-we.vue'
import slider from '../components/home-slider.vue'
import PageFooter from '../components/home-footer.vue'
import AboutDetails from '../components/About_details.vue'

import loader from '../components/loader.vue'

import axios from 'axios'
export default {
    name : "About",

    data(){
        return{
            chalenges : {},
            challenges_arr : [],
            about : {},
            partners : [],
            loader : true
        }
    },
    components : {
        pageHeaderVue,
        AboutInit,
        WelcomeInit,
        slider,
        AboutDetails,
        PageFooter,
        loader
    },
    

    async created(){
        try{
            const res = await axios.get('https://cybervision.com.sa/api/about')
            this.chalenges = res.data.data.chalenges
            this.challenges_arr = res.data.data.chalenges.chalenges
            this.about = res.data.data.about
            this.partners = res.data.data.partners
            this.loader = false
        }catch(e){
            console.warn(e)
        }
    }
}
</script>

<style>

</style>