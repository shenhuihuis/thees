define(function(require){

    var Vue = require("vue");
    var footer = Vue.extend({
        data:{
            bool:false
        },
        template : '<div>这个是底部</div>',
    });
    return footer
});
