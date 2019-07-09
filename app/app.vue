<style lang="less">
    @import './less/main.less';
</style>

<template>
    <div id="app">
        <modules :modules="modules"></modules>
        <router-view></router-view>
    </div>
</template>

<script>
    import './components/modules';
    import './components/categories';

    export default {
        data() {
            return {
                modules: [
                    {
                        name: 'index',
                        route: '/index'
                    }
                ]
            }
        },
    }
</script>
