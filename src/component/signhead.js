define(function(require){
    var Vue = require("vue");
    var api=require("api");
    var rotute=require('rotute');
    var signHead = Vue.extend({
        data: function () {
            return {
                login:api.person,
                route:rotute,
            }
        },
        template:`
        <div class="head">
            <div class="content cter">
                <a  class="tblogo" :href="route.index"></a>
                <div class="rt ">
                </div>
            </div>
            
        </div>`
       
    });
     
    return signHead;
   
});


