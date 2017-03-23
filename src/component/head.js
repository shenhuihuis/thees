define(function(require){
    var Vue = require("vue");
    var api=require("api");
    var header = Vue.extend({
        template : '<div v-if="login">已登录</div><div v-else>未登录</div>',
        data: function () {
            return {
                data: 1,
                login:api.person
            }
        }
    });
     
    return header;
});
