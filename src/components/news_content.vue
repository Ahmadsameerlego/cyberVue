<template>
    <section class="news_details mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <!-- search -->
                    <div class="panel mb-4">
                        <div class="input-group">
                                <input type="text" v-model="search" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                                <button class="btn btn-outline-secondary" type="button" @click="postSearch" id="button-addon1">{{$t('no.search')}}</button>
                        </div>
                    </div>

                    <!-- search result -->
                    <div class="panel posters search_result mb-4">
                        <h5 class="last_post">{{ $t('headers.news_4') }}</h5>
                        <div class="poster d-flex justify-content-between align-items-center" v-for="poster in search_news" :key="poster.id">
                            <div class="poster_img">
                                <img :src="poster.image" alt="last new image">
                            </div>
                            <div class="poster_content">
                                <p class="poster_title">{{ poster.title }}</p>
                                <p class="poster_date">{{ poster.date }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- last post -->
                    <div class="panel posters mb-4">
                        <h5 class="last_post">{{ $t('headers.news_3') }}</h5>
                        <div class="poster d-flex justify-content-between align-items-center" v-for="poster in lastNews" :key="poster.id">
                            <div class="poster_img">
                                <img :src="poster.image" alt="last new image">
                            </div>
                            <div class="poster_content">
                                <p class="poster_title">{{ poster.title }}</p>
                                <p class="poster_date">{{ poster.date }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- dates -->
                    <div class="panel archive dates">
                        <h5 class="last_post">{{ $t('headers.news_5') }}</h5>
                        
                        <router-link class="d-block mb-2" :to="'/archive/'+archive.date" v-for="archive in archives" :key="archive.id">{{ archive.text }}</router-link>

                    </div>
                </div>

                <div class="col-md-8">
                    <div class="new_content">
                        <div class="new_imge">
                            <img :src="news.image" alt="new image">

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="image_details">
                                        <div class="date">
                                            <font-awesome-icon icon="fa-solid fa-calendar-day" />
                                            <span>{{ news.date }}</span>
                                        </div>

                                        <div class="leader">
                                            <font-awesome-icon icon="fa-solid fa-user" />
                                            <span>{{ news.creator }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="new_text">
                            <h5>{{ news.title }}</h5>
                            <p>{{ news.description }}</p>

                            <div class="new_additional_imgs d-flex justify-content-between">
                                <img :src="img" alt="" class="additinal_img" v-for="img in news.images" :key="img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            search : ''
        }
    },
    props : {
        news : {},
        lastNews : [],
        archives : [],
        search_news : []
    },
    async created(){
        
    },
    methods:{
        postSearch(){
            axios.post('https://cybervision.com.sa/api/news-search', {search:this.search})
            .then((res)=>{
                this.$swal(res.data.msg);
                this.search_news = res.data.data.news;
                console.log(this.search_news)
            });
        }
    }
}
</script>

<style lang="scss">
$main_color : #028fd2;
.search_result, .dates{
    max-height: 250px;
    overflow: scroll;

}
.panel{
    background-color: #f3f3f3;
    padding: 15px;
    input{border-radius: 0 !important;}
    button{border-radius: 0 !important;border: none;  background-color: #028fd2; color: #333;}
}
.posters {
    img{
        width: 70px;
        height: 75px;
        margin-left: 10px;
    }
    .poster_content{
        .poster_title{
            font-weight: 600;
            font-size: 13px;
        }
        .poster_date{
            color: gray;
        }
    }
}
.last_post{
        font-weight: 600;
}
.new_content {
    .new_imge{
        img{
            width: 100%;
            height: 310px;
        }
    }
    .image_details{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
        svg{
            color: rgb(209, 40, 40);
            margin: 0 5px;
            font-size: 12px;
        }
}
.new_text {
    margin-top: 12px;
    h5{
        font-weight: 600;
    }
}
}
.new_additional_imgs{
    flex-wrap: wrap;
}
.additinal_img{
        width: 46%;
        height: 200px;
        margin: 10px 10px;
}
.archive{
    a{
        text-decoration: none;
        color: #333 !important;
    }
}

@media(max-width:768px){
    .new_content{margin-top: 25px;}
}
</style>