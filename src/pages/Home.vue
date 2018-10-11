<template>
    <div class="page">
        <site-header :about="false"></site-header>
        <div class="pagecontent">
            Home Page
            <br>
            <md-button class="md-raised">Teste</md-button>
        </div>
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

    @import "../styles/material";

    .homepage {
        
    }
</style>