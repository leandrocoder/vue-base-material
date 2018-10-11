<template>
    <router-view></router-view>
</template>

<script>
    import Home from './pages/Home.vue';
    
    export default {
        components: {
            Home
        }
    }
</script>

<style lang="scss">
    @import "styles/vars";
    @import "styles/fonts";

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: $font-default;
    }

    .page {
        position: relative;
        background-color: #cccccc;
        min-width: 100vw;
        min-height: 100vh;

        .pagecontent {
            position: relative;
            padding:20px;
        }
    }
</style>