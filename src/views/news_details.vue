<template>
    <section class="news_details">
        <loader v-if="loader" />
        <pageHeaderVue active_news="active" />
        <About_initVue :title="$t('headers.news_1')" :head="$t('headers.news_2')" />
        <newsContent :news="news" :lastNews="lastNews" :archives="archives"/>
        <homeFooterVue class="mt-5"/>
    </section>
</template>

<script>
import axios from 'axios'
import pageHeaderVue from '../components/page-header.vue'
import About_initVue from '../components/About_init.vue'
import newsContent from '../components/news_content.vue'
import homeFooterVue from '../components/home-footer.vue'
import loader from '../components/loader.vue'
export default {
    data(){
        return{
            new_id : 0,
            news : {},
            lastNews : [],
            archives : [],
            loader : true,
            
        }
    },
    components : {
        pageHeaderVue,
        About_initVue,
        newsContent,
        loader,
        homeFooterVue
    },
    props : [
        'active_news'
    ],
    async created(){
        try{
            this.new_id = this.$route.params.id
            const res = await axios.post('https://cybervision.com.sa/api/single-news/'+this.new_id)
            this.news = res.data.data.news;
            this.lastNews = res.data.data.lastNews
            this.archives = res.data.data.archives
            this.loader = false
        }catch(e){console.log(e)}

    }
}
</script>

<style ></style>

