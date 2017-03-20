define(function(require){
    var Vue = require("vue");
    var Public=require("public");
    var header = Vue.extend({
        template : '<div v-if="login">已登录</div><div v-else>未登录</div>',
        data: function () {
            return {
                data: 1,
                login:Public.token
            }
        }
    });
     
    return header;
});
