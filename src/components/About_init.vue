<template>
    <section class="About_init">
        <div class="d-flex justify-content-center align-items-center flex-column">
            <p>{{title}}</p>
            <h4>{{head}}</h4>
        </div>
    </section>
</template>

<script>
export default {
    props : {
        title :String,
        head : String
    }
}
</script>

<style lang="scss">
$main_color : #028fd2;
.About_init{
    background: $main_color;
    padding: 16px 0;
    p{color: #e5d8d8;}
    h4{color: #fff;}
}

</style>