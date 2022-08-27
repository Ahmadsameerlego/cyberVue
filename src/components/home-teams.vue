<template>
    <section id="team" class="mt-5 mb-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="tema-details">
                        <h5>{{ experts.title }}</h5>
                        <p>
                            {{ experts.description }}
                        </p>

                        <router-link to="/team_members" class="more">
                            {{ $t('welcome.all_members') }}
                        </router-link>
                    </div>
                </div>

                    <div class="col-md-6">
                        <div class="team-images">
                                <img :class="'home_img_'+index" :src="img" alt="team" v-for="(img, index) in experts.images" :key="img.id">                            
                        </div>
                    </div>
            </div>


        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            // images : []
        }
    },
    props : {
        experts : {},
        experts_imgs : []
    },
    mounted(){
        // console.log(indexOf(experts_imgs))
    }
}
</script>

<style  scoped>
#team{margin-top: 60px !important;}
.tema-details{
    display: flex;
    justify-content: end;
    flex-direction: column;
}
    h5{
        font-weight: 500;
        font-size: 28px;
    }
    .more{
    background: linear-gradient(0deg, rgba(0,74,109,1) 0%, rgba(0,148,217,1) 74%);
    border: none;
    width: 190px;
    color: #fff;
    height: 35px;
    border-radius: 3px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .team-images{   
        position: relative;
    }

    .home_img_0{
            -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            width: 219px;
            right: 32%;
            position: relative;
            height: 227px;
            object-fit: cover;
            display: block;
    }
    .home_img_1{
        -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        width: 114px;
        right: 32%;
        height: 120px;
        -o-object-fit: cover;
        object-fit: cover;
        position: absolute;
        right: 20%;
        top: 61%;
    }
    .home_img_2{
        top: 12%;
        right: 86%;
        -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        width: 114px;
        height: 120px;
        -o-object-fit: cover;
        object-fit: cover;
        position: absolute;
    }
    .home_img_3{
        bottom: -18%;
        right: 77%;
        width: 89px;
        height: 95px;
        top: auto;

        -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        -o-object-fit: cover;
        object-fit: cover;
        position: absolute;
    }
    
@media(max-width: 768px){
    .team-images{
        margin-top: 45px;
        margin-top: 45px;
        margin-right: 60px;
        margin-left: 60px;
        }
}
@media(max-width:540px){
    .home_img_0[data-v-0a271958]{width: 190px; height: 180px; right: 4%;}
    .home_img_1[data-v-0a271958]{width: 90px; height: 90px; right: -14%;}
    .home_img_2[data-v-0a271958]{width: 90px; height: 90px; right: 83%;}
    .home_img_3{width: 80px; height: 80px;}
}
</style>