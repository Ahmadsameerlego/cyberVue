<template>
    <section id="options">
        <div class="container">
            <div class="service-head mb-5" :data-content="$t('options.last_news_bg')" v-if="show">
                <p class="what-ser text-center"> {{ $t('options.what_service') }} </p>

                <p class="best-ser text-center">  {{ last_news.title }} </p>

                <p class="desc-ser text-center">
                    {{ last_news.description }}
                </p>
            </div>

            
            <section v-if="news">

                <div class="news-items mt-5" v-if="home_show">
                        <div class="row">
                        <div class="col-md-4" v-for="new_iteme in news" :key="new_iteme.id">
                            <router-link :to="'/news_details/'+new_iteme.id" class="item_link">
                                <div class="new-item px-5 d-flex flex-column">
                                    <!-- image -->
                                    <img :src="new_iteme.image" alt="" class="new_img">

                                    <!-- content -->
                                    <div class="item_contetn d-flex justify-content-between align-items-center">

                                        <span class="date"> <font-awesome-icon icon="fa-solid fa-calendar-days" />  {{ new_iteme.date }} </span>
                                        
                                        <span class="personal"> <font-awesome-icon icon="fa-solid fa-user" /> {{ new_iteme.creator }} </span>

                                        
                                    </div>

                                    <!-- title -->
                                    <h6 class="content_title"> {{ new_iteme.creator }} </h6>
                                </div>
                            </router-link>
                        </div>

                        
                        </div>

                </div>

            
            
            <!-- news items -->
                <div class="news-items mt-5" v-if="new_show">
                <paginate name="news" ref="paginator" :list="news" :per="pagination.per_page">
                    <div class="row">
                    <div class="col-md-4" v-for="new_iteme in paginated('news')" :key="new_iteme.id">
                        <router-link :to="'/news_details/'+new_iteme.id" class="item_link">
                            <div class="new-item px-5 d-flex flex-column">
                                <!-- image -->
                                <img :src="new_iteme.image" alt="" class="new_img">

                                <!-- content -->
                                <div class="item_contetn d-flex justify-content-between align-items-center">

                                    <span class="date"> <font-awesome-icon icon="fa-solid fa-calendar-days" />  {{ new_iteme.date }} </span>
                                    
                                    <span class="personal"> <font-awesome-icon icon="fa-solid fa-user" /> {{ new_iteme.creator }} </span>

                                    
                                </div>

                                <!-- title -->
                                <h6 class="content_title"> {{ new_iteme.creator }} </h6>
                            </div>
                        </router-link>
                    </div>

                    
                    </div>
                </paginate>
                <paginate-links
                for="news"
                :limit="4"
                :show-step-links="true"
                ></paginate-links>
                </div>
            </section>

            <section v-else-if="!news">
                <h5 class="text-center"> {{$t('no.news')}} </h5>
            </section>

        </div>
    </section>
</template>

<script>
export default {

    data(){
        return{
            show :true,
            paginate: ["news"],
            date : '',
            hide : false,
            new_show : false,
            home_show : true,
        }
    },
    props : {
        last_news : {},
        news : [],
        pagination : {},
    },
    mounted(){

            if(this.$route.path == '/last_news'){
                this.show = false
                this.new_show = true
                this.home_show = false
            }

            if( this.$route.path == '/last_news/:date'){
                    this.hide = true
            }

        }

    
    

}
</script>

<style lang="scss">
#options{
    margin-top: 100px;
        .service-head{
        position: relative;
        .what-ser{
            color: #e30a0a;
            font-size: 18px;
        }
        .best-ser{
            font-weight: 600;
            font-size: 25px;
        }
        .desc-ser{
            color:#444
        }
        &::before{
            content: attr(data-content);
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 0;
            font-size: 55px;
            color: #4444440a;
            text-align: center;
            width: 100%;
            bottom: 31%;
    }
}

.item_link{
    text-decoration: none;
    color: inherit;
    .new-item{
    background-color: #ededed;
    padding-top: 20px;
    padding-bottom: 10px;
    border-radius: 3px;
    img{
        width: 100%;
        height: 187px;
        object-fit: cover;
        margin-bottom: 12px;
    }
    .item_contetn{
        margin-bottom: 12px;
        svg{
            color: #eb1919;
            font-size: 12px;
        }
        span{
            font-size: 13px;
            color: #444;
        }
    }
    }
    .content_title{
        color: #222;
        font-size: 19px;
        font-weight: 500;
    }
    }
}
.new-item{
    margin-bottom: 20px;
}
</style>