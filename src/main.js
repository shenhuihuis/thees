define(function(require){
    var Vue = require("vue");
    var head =  require("component/head")
    var footer =  require("component/footer")
    var $ = require("jquery");
    new Vue({
        el : "#head",
        components:{
            'my-head': head
        }
    });
    new Vue({
        el : "#footer",
        components:{
            'my-footer': footer
        }
    });
});
