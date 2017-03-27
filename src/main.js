define(function(require){
    var Vue = require("vue");
    var ythead =  require("component/ythead")
    var tbhead =  require("component/tbhead")
    var footer =  require("component/footer")
    var signhead =  require("component/signhead")
    

    var $ = require("jquery");

    var ythead=new Vue({
        el : "#head",
        components:{
            'my-ythead': ythead
        }
    });
    var tbhead=new Vue({
        el : "#head",
        components:{
            'my-tbhead': tbhead
        }
    });
    var footer=new Vue({
        el : "#footer",
        components:{
            'my-footer': footer
        }
    });

    var signhead=new Vue({
        el : "#head",
        components:{
            'my-signhead': signhead
        }
    });
});
