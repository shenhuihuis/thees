require.config({
    baseUrl : "./src",
    paths :{
        jquery:"./lib/jquery.min",
        vue:"./lib/vue.min",
        vueResource:"./lib/vue-resource.min",
        vueX:"./lib/vuex.min",
        api :"./api/api",
        public:"./lib/public"
    },
    packages: [
        {
            name: 'components',
            location: 'component',
            main: 'components'
        },
        {
            name : "vuex",
            location :"vuex",
            main : "vuex"
        }
    ]
})
require(["./main"])