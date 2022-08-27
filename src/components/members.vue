<template>
    <section class="members">
        <div class="container">
            <p class="mt-5">
                هذا النص هو مثال على نص يمكن ان يستبدل هذا النص هو مثال على نص يمكن ان يستبدل هذا النص هو مثال على نص يمكن ان يستبدل
            </p>
            <section v-if="experts"> 
                <div class="member_items">
                <paginate name="experts" ref="paginator" :list="experts" :per="pagination.per_page">
                    <div class="row">
                    <div class="col-lg-3 col-md-6" v-for="member in paginated('experts')" :key="member.id">
                        <div class="members_item">
                            <div class="item_img">
                                <img :src="member.image" alt="">
                            </div>
                            <div class="item_content">
                                <h5 class="name">{{ member.name }}</h5>
                                <h6 class="title"> {{ member.job }}</h6>
                            </div>
                        </div>
                    </div>
                    </div>
                </paginate>

                <paginate-links
                for="experts"
                :limit="4"
                :show-step-links="true"
                ></paginate-links>
                </div>
            </section>

            <section v-else>
                <h5 class="text-center"> {{$t('no.mem')}} </h5>
            </section>
        </div>
    </section>
</template>

<script>

export default {
    data(){
        return{
            paginate: ["experts"],
        }
    },
    props : {
        experts : [],
        pagination : {}
    }
}
</script>

<style lang="scss">
$main_color : #028fd2;

    .members_item{
        position: relative;
        margin-bottom : 50px;
        .item_img{
            img{
                width:100%;
                height: 320px;
                object-fit: cover;
                box-shadow: 0px 10px 20px rgba(51, 51, 51, 0.075);
                transition: .5s all;
                border-radius: 3px;
                &:hover{
                    box-shadow: 0px 10px 30px #0290d259;
                }
            }
        }
        .item_content{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: #fff;
            width: 158px;
            margin: auto;
            position: absolute;
            bottom: -35px;
            right: 7%;
            box-shadow: 0px 10px 20px #3333331c;
            padding: 5px;
            border-radius: 4px;
            .name{
                color: #333;
                font-size: 17px;
            }
            .title {color: $main_color ; font-size: 15px !important;}
        }
    }
</style>