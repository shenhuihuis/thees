define(function(require){
    var Vue = require("vue");
    var api=require("api");
    var rotute=require('rotute');
    var ytHeader = Vue.extend({
         data: function () {
            return {
                login:api.person,
                sp:["搜11","搜22"],
                route:rotute,
                buycar:[
                    {}
                ]
            }
        },
        template:`
            <div class="head">
                    <div class="header">
                    <div class="content">
                    <div class="lf">
                        <span>易通商城欢迎您!</span>
                        <div class="loginhas" v-if="login">
                           <a :href="route.center"></a>xxxx</a>
                        </div>
                        <div class="loginno" v-else>
                           请 <a class="login" :href="route.login">登录</a><a :href="route.register" class="register">注册</a>
                        </div>
                    </div>
                    <div class="rt">
                        <ul>
                            <li><a href="javascript:void(0);" class="fo downapp">手机下载</a></li>
                            <li><a :href="route.center" class="fo">会员中心</a></li>
                            <li><a :href="route.qb" class="fo">我的钱包</a></li>
                            <li><a :href="route.order" class="fo">我的订单</a></li>
                            <li class="last">
                                <a href="javascript:void(0);" class="fo">购物车(<i>{{buycar.length}}</i>)</a>
                                <div class="buycar" v-if="buycar.length>0">
                                    <dl>
                                        <dd>
                                            <a href="">
                                                <img width="60" height="60">
                                                <div class="tit">小米胶囊耳机 白色</div>
                                                <div class="pay">69元 x  1</div>
                                            </a>
                                        </dd>
                                        <dt>
                                            <div class="all">
                                                <div class="l">
                                                    <p>共 2 件商品</p>
                                                    <div class="mony"><span>138.00</span>元</div>
                                                </div>
                                               
                                                <a :href="route.buycar">去购物车结算</a>
                                            </div>
                                        </dt>
                                    </dl>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="content cter">
                <a  class="ytlogo" :href="route.index"></a>
                <div class="findbox">
                    <div class="find">
                        <div class="selt">
                            <dl>
                                <dt>搜商品</dt>
                                <dd v-for="i in sp">{{i}}</dd>
                            </dl>
                        </div>
                        <input type="text" value="" name="txt">
                        <a href="javascript:void(0);" class="sub">搜索</a>
                    </div>
                    <div class="key">
                        <a href="javascript:void(0);" class="gre">玩具</a>
                        <a href="javascript:void(0);">玩具</a>
                    </div>
                </div>
                <div class="rt ewm">
                    <div class="say">微信服务号</div>
                </div>
            </div>
            <div class="dls">
                <div class="content">
                    <div class="all">所有分类</div>
                    <ul>
                        <li><a href="">通宝商城</a></li>
                        <li><a href="">通宝商城</a></li>
                    </ul>
               </div>
            </div>
        </div>`
       
    });
     
    return ytHeader;
   
});

