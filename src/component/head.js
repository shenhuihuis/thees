define(function(require){
    var Vue = require("vue");
    var Public=require("public");
    var header = Vue.extend({
        template : '<div>{{data}}</div>',
        data: function () {
            return {
                data: "1"
            }
        }
    });
     
    return header;
});
