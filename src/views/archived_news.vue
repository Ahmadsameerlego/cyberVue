<template>
    <section class="last_news">
        <loader v-if="loader" />
        <pageHeaderVue active_news="active" />
        <AboutInit :title="$t('headers.news_1')" :head="$t('headers.news_2')"/>
        <archOption  class="mt-2" :news="news" />
        <Slider :partners="partners" />
        <homeFooterVue />

    </section>
</template>

<script>
import axios from 'axios'
import pageHeaderVue from '../components/page-header.vue'
import AboutInit from '../components/About_init.vue'
import archOption from '../components/archive_option.vue'
import Slider from '../components/home-slider.vue'
import homeFooterVue from '../components/home-footer.vue'

import loader from '../components/loader.vue'

export default {
    data(){
        return{
            news : [],
            // date_new : [],
            // new_iteme : [],
            // news2 : [],
            // pagination : {},
            partners : [],
            loader : true
        }
    },
    components : {
        pageHeaderVue,
        AboutInit,
        archOption,
        Slider,
        homeFooterVue,
        loader
    },
    async created(){

        try{
            // const res = await axios.post('https://cybervision.com.sa/api/last-news', { date : this.$route.params.date })
            // // const res2 = await axios.post('https://cybervision.com.sa/api/last-news?page=2');

            // this.news = res.data.data.news.news;
            // // this.news2 = res2.data.data.news.news;
            // this.pagination = res.data.data.news.pagination;
            // this.partners = res.data.data.news.partners;

            // // this.news.push(...this.news2)


            axios.post('https://cybervision.com.sa/api/last-news', { date : this.$route.params.date })
            .then( (res) =>{
                this.news = res.data.data.news.news
                console.log(this.news)
                this.loader = false
            } )
            
        }catch(e){console.log(e)}
        


    },
    // mounted(){
    //     if( this.$route.params.date ){
    //         try{
    //         axios.post('https://cybervision.com.sa/api/last-news', { date:this.$route.params.date })
    //         .then( (result)=>{
    //             this.news = result.data.data.news.news;
    //                     console.log(this.news)

    //         } )
    //         }catch(e){console.log(e)}
    //     }
    // }
}
</script>

<style>

</style>