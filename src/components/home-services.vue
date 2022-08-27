<template>
    <section id="services">
        <div class="container">
            <div class="service-head" :data-content="$t('services.title_ser')" v-if="show">
                <p class="what-ser text-center"> {{services_obj.title}} </p>

                <p class="best-ser text-center"> {{ $t('services.cyber_best') }}   </p>

                <p class="desc-ser text-center">
                    {{ services_obj.description }}
                </p>
            </div>

                <section >
                    <div class="services-items" v-if="ser_show">

                        <div class="row">
                            <div class="col-lg-3 col-md-6" v-for="service in services" :key="service.id">
                            <div class="service-item">
                                <!-- serive image  -->
                                <div class="item-image">
                                    <img :src="service.image" alt="service item"/>
                                </div>

                                <!-- serivce content -->
                                <div class="item-content">
                                    <h5>{{ service.name }}</h5>
                                    <p> {{ service.description }}</p>

                                    <router-link :to="'/Service_details/'+service.id"> 
                                        {{ $t('services.link') }}
                                        <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
                                    </router-link>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section v-if="this.services_page">
                    <div class="services-items" v-if="home_show">

                    <paginate name="services_page" ref="paginator" :list="services_page" :per="pagination.per_page">
                        <div class="row">
                            <div class="col-lg-3 col-md-6" v-for="service in paginated('services_page')" :key="service.id">
                            <div class="service-item">
                                <!-- serive image  -->
                                <div class="item-image">
                                    <img :src="service.image" alt="service item"/>
                                </div>

                                <!-- serivce content -->
                                <div class="item-content">
                                    <h5>{{ service.name }}</h5>
                                    <p> {{ service.description }}</p>

                                    <router-link :to="'/Service_details/'+service.id"> 
                                        {{ $t('services.link') }}
                                        <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
                                    </router-link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </paginate>
                    <paginate-links
                    for="services_page"
                    :limit="4"
                    :show-step-links="true"
                    ></paginate-links>        
                    </div>
                </section>

                <section v-else-if="!this.services_page && !this.services"> 
                    <h5 class="text-center"> {{$t('no.ser')}} </h5>
                </section>
            </div>




            
    </section>
</template>

<script>

export default {
    data(){
        return{
            show :true,
            paginate: ["services_page"],
            show_ser : true,
            home_show : false,
            ser_show : true
        }
    },
    mounted(){
        if( this.$route.path === '/Services' ){
            this.show = false
            this.ser_show = false
            this.home_show = true
        }

        // if( this.$route.path == '/servi' )
        // console.log(this.services.id)
    },
    props : {
        services_obj : {},
        services : [],
        pagination : {},
        services_page : []
    },
    methods:{
        
    }
}
</script>

<style lang="scss">
$main_color : #028fd2;
#services{
    margin-top: 120px;
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
            content:attr(data-content);
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 0;
            font-size: 100px;
            color: #4444440a;
            text-align: center;
            width: 100%;
    }
    }
    .service-item{position: relative;
    .item-image{
        position: relative;
        margin-top: 20px;
        img{
            width: 200px;
            height: 200px;
            object-fit: cover;
            filter: brightness(.5);
        }
    }
    .item-content{
            position: absolute;
            bottom: 0;
            margin: 0 10px;
            width: 173px;
            transition: .5s all;
            opacity:0;
            &:hover{opacity: 1;}
            h5{
                color: #fff;
            }
            p{
                color: #fff;
            }
            a{
                color:$main_color;
                text-decoration: none;
                font-size: 20px;
            }
        }
    }
}

</style>