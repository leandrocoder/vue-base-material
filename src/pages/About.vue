<template>
    <div class="wrapper">
        <site-header :about="true"></site-header>
        <section class="about">
            About page
        </section>
    </div>   
</template>

<script>
    import SiteHeader from '../components/AppHeader.vue';
    
    export default {
        data () {
            return {
                
            }
        },

        components: {
            SiteHeader
        }
    }
</script>

<style lang="scss">
    @import '../styles/vars';
    .about {
        position: relative;
        background: url('#{$basepath}img/placeholder.jpg') top left no-repeat;
        height: 300px;
    }
</style>