<template>
    <section id="cyber-solve">
        <div class="container">
            <div class="service-head" :data-content="$t('solve.cyber_sol_bg')">
                <p class="what-ser text-center"> {{ $t('solve.what_service') }} </p>

                <p class="best-ser text-center">  {{ cyper_solutions.title }}</p>

                <p class="desc-ser text-center">
                    {{ cyper_solutions.description }} 
                </p>
            </div>

            <!-- start tabs -->
            <v-card>
                <v-toolbar flat>
                    <template v-slot:extension>
                        <v-tabs
                        v-model="tab"
                        align-with-title
                        >

                        <v-tab
                            v-for="solution in solutions.slice(0,6)" 
                            :key="solution.id"
                            class="tab-item d-flex justify-content-center align-items-center flex-column"
                        >
                            <img :src="solution.icon" alt="" class="tab_header_image">
                            <P>{{ solution.name }}</P>
                        </v-tab>
                        </v-tabs>
                    </template>
                </v-toolbar>

                <v-tabs-items v-model="tab">
                    <v-tab-item
                        v-for="solution in solutions" 
                        :key="solution.id"
                    >
                        <v-card flat>
                            <div class="row">
                                <div class="col-md-7">
                                    <h4 class="content_title"> {{ solution.name }} </h4>
                                    <p  class="content_text"> {{ solution.description  }} </p>
                                </div>
                                <div class="col-md-5">
                                    <div class="tab_item_image">
                                        <img :src="solution.image" alt="">
                                    </div>
                                </div>
                            </div>
                            
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
            
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            tab: null,
            
            // tabs_content : [ ]
        }
    },
    props: {
        cyper_solutions : {},
        solutions : []
    },
    beforeMount(){
    }
}
</script>

<style lang="scss">
$main_color : #028fd2;
#cyber-solve{
    margin-top: 150px;
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
            font-size: 35px;
            color: #4444440a;
            text-align: center;
            width: 100%;
            bottom: 31%;
    }
}
}
.v-slide-group__content{
    justify-content: space-between;
}
.v-sheet.v-card:not(.v-sheet--outlined){box-shadow: none !important;}
.v-toolbar__content{height: 0 !important;}
.tab-item{
    border: 1px solid #dfdfdf;
    width: 116px;
    height: 90px;
    padding: 0;
    padding-top: 15px;
    p{color: #222;}

}
.v-toolbar__extension{height: 100px !important}
.fa-screwdriver-wrench{
    color: $main_color;
    font-size: 25px;
    margin-bottom: 10px;
}
.v-tab--active{
    background: $main_color;
    margin-left: 0 !important;
    position: relative;
    border: none;
    .fa-screwdriver-wrench{color: #fff;}
    p{color: #fff !important;}
    &::after{
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 9px solid #028fd2;
        left: 45%;
        bottom: -10%;
    }
}
.v-application--is-ltr .v-tabs--align-with-title > .v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing) > .v-slide-group__wrapper > .v-tabs-bar__content > .v-tabs-slider-wrapper + .v-tab{margin-left: 0 !important;}
.v-tabs-slider-wrapper{width: 0 !important;}
.tab_header_image{
    width: 43px;
    height: 46px;
    margin-bottom: 12px;
}
.v-sheet.v-toolbar:not(.v-sheet--outlined){
    margin-bottom: 50px !important;
}
.content_title{color: #222; font-weight: 600;}
.content_text{color: #444; font-weight: normal;}
.tab_item_image img{
    width: 100%;
    height: 160px;
}
@media(max-width:768px){
    #cyber-solve{margin-top: 175px;}
    .v-toolbar__content {display: none;}
    .v-slide-group__content {
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: fit-content;
    }
    .v-toolbar__extension{height: 100% !important;}
    .v-sheet.v-toolbar:not(.v-sheet--outlined){height: 100% !important;}
    .v-tabs:not(.v-tabs--vertical) .v-tab{margin-bottom: 15px;}
}
</style>