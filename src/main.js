define(function(require){
    var Vue = require("vue");
    var head =  require("component/head")
    var $ = require("jquery");
    new Vue({
        el : "#head",
        components:{
            'my-head': head
        }
    });
});