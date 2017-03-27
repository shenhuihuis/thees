define(function(require){
    var Vue = require("vue");
    var vueForm = require("lib/vue-form");
    var $ = require("jquery");

    Vue.use(vueForm);

    new Vue({
        el: '#app',
        data:{
            formstate: {},
            model: {
                mobileTel: '',
                password: ''
            }
        },
        methods: {
            onSubmit: function () {
                console.log(this.model)
                if (this.formstate.$invalid) {
                    return false;
                };
                
            }
        }

    });
});

