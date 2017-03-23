var fiɡə=fiɡə || "" 
require.config({
    baseUrl : "./"+fiɡə+"src",
    paths:{
        "jquery":"./lib/jquery.min",
        vue:"./lib/vue",
        vueResource:"./lib/vue-resource.min",
        vueX:"./lib/vuex.min",
        api :"./api/api",
        rotute:"./api/rotute"
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