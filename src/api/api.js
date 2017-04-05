define(function(require){
    var api={
        ip: ["http://122.224.187.90:8007/ssyt-app/",       //省市区 获取验证码
             "http://122.224.187.90:8004/ssyt-goods/",    //商品相关 
             "http://122.224.187.90:8006/ssyt-user/",     //用户相关 
             "http://122.224.187.90:8005/ssyt-order/"     //订单相关  
        ],
        person:null,
        Value: (function() {
            var argName, args, pair, pairs, pos, query, value, _0, _1;
            args = {};
            query = window.location.search.substring(1);
            pairs = query.split('&');
            for (_0 = 0, _1 = pairs.length; _0 < _1; _0++) {
                pair = pairs[_0];
                pos = pair.indexOf('=');
                if (pos === -1) {
                    continue
                }
                argName = pair.substr(0, pos);
                value = pair.substr(pos + 1);
                value = decodeURIComponent(value);
                args[argName] = value
            }
            return args
        })()
    }
    return api;
})