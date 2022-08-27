<template>
    <section id="welcome" class="mt-2 mb-5">
        <div class="row">
            <!-- welcome info -->
            <div class="col-md-6">
                <div class="welcome-info">
                    <p class="we-title"> {{ $t('welcome.wel-head') }} <span>Cyber Vision</span> </p>
                    <p class="we-head">{{ header.title }}</p>
                    <p class="we-disc">
                        {{ header.description }}
                    </p>

                    <button class="btn more "> {{ $t('welcome.more') }} </button>
                </div>
            </div>

            <!-- welcome image -->
            <div class="col-md-6">
                <div class="we-image">
                    <img :src="header.image" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    props : {
        header : {}
    },
}
</script>

<style lang="scss">
$main_color : #028fd2;

.welcome-info{
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    margin-right: 44%;
    margin-top: 14%;
    .we-title
    {
        color:#000;
        span{color: $main-color;}
    }
    .we-head{
        font-weight: 600;
        font-size: 24px;
    }
    .we-disc{
        color: #444;
        font-weight: 300;
    }
    .more{
        background: linear-gradient(0deg, rgba(0,74,109,1) 0%, rgba(0,148,217,1) 74%);
        border: none;
        width: 110px;
        color: #fff;
        height: 45px;
        border-radius: 3px;
    }
}
.we-image{
    img{
        width: 100%;
    }
}
@media(max-width:768px){
    .welcome-info {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 16px;
    }
}
</style>