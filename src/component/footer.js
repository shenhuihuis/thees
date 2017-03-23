define(function(require){
    var Vue = require("vue");
    var footer = Vue.extend({
        template : `<div class="footer">
            <div class="fot">
            <div class="content">
                <dl>
                    <dt><a href="">购物指南</a></dt>
                    <dd><a href="">购物流程</a></dd>
                    <dd><a href="">会员介绍</a></dd>
                    <dd><a href="">生活旅行</a></dd>
                    <dd><a href="">常见问题</a></dd>
                    <dd><a href="">大家电</a></dd>
                    <dd><a href="">联系客服</a></dd>
                </dl>
                <dl>
                    <dt><a href="">配送方式</a></dt>
                    <dd><a href="">上门自提</a></dd>
                    <dd><a href="">211限时达</a></dd>
                    <dd><a href="">配送服务查询</a></dd>
                    <dd><a href="">配送费收取标准</a></dd>
                    <dd><a href="">海外配送</a></dd>
                </dl>
                <dl>
                    <dt><a href="">支付方式</a></dt>
                    <dd><a href="">货到付款</a></dd>
                    <dd><a href="">在线支付</a></dd>
                    <dd><a href="">分期付款</a></dd>
                    <dd><a href="">邮局汇款</a></dd>
                    <dd><a href="">公司转账</a></dd>
                </dl>
                <dl>
                    <dt><a href="">售后服务</a></dt>
                    <dd><a href="">售后政策</a></dd>
                    <dd><a href="">价格保护</a></dd>
                    <dd><a href="">退款说明</a></dd>
                    <dd><a href="">返修/退换货</a></dd>
                    <dd><a href="">取消订单</a></dd>
                </dl>
                <dl>
                    <dt><a href="">特色服务</a></dt>
                    <dd><a href="">夺宝岛</a></dd>
                    <dd><a href="">DIY装机</a></dd>
                    <dd><a href="">延保服务</a></dd>
                </dl>
                <div class="rt">
                    <div class="tel">400-050-9033</div>
                    <div class="say">工作时间：周一至周日 9:00-21:00</div>
                    <div class="ewm">
                        扫一扫<br>
                        关注我们
                    </div>
                </div>
            </div>
            </div>
            <div class="content lfot">
                <div class="ac"><span>友情链接： </span><a href="">博采网络</a>  |  <a href="">阿里巴巴 </a> |  <a href="">淘宝网</a>  |  <a href="">京东商城</a>  |  <a href="">中捷缝纫</a>  |  <a href="">百度</a>  |  <a href="">腾讯</a>  |  <a href="">搜狐</a></div>
                <div class="bot">营业执照注册号：330106000000000    增值电信业务经营许可证：浙B2-20110000    浙公网安备 33010600000000号©2016 Mogujie.com 杭州博采网络科技股份有限公司</div>
            </div>
        </div>`,
    });
    return footer;
});
