(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["atOrder"],{"035a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("div",{staticClass:"app-box"},[i("keep-alive",[i(t.selectedLabelDefault,{tag:"component"})],1)],1),i("div",{staticClass:"app-tab"},[i("cube-tab-bar",{on:{click:t.clickHandler,change:t.changeHandler},model:{value:t.selectedLabelDefault,callback:function(e){t.selectedLabelDefault=e},expression:"selectedLabelDefault"}},t._l(t.tabs,function(e,a){return i("cube-tab",{key:a,attrs:{label:e.value}},[i("div",[i("i",{class:["iconfont",e.icon],attrs:{slot:"icon"},slot:"icon"})]),i("div",{staticClass:"label"},[t._v(t._s(e.label))])])}),1)],1)])},s=[],n=i("d225"),o=i("b0b4"),c=i("308d"),r=i("6bb5"),l=i("4e2b"),u=i("9ab4"),d=i("60a3"),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[t._v("\n  "+t._s(t.sessionId)+"\n  "),i("div",{staticClass:"app-con"},[i("div",{staticClass:"app-con-tit"},[t._v("营销拓客")]),i("div",{staticClass:"app-con-box"},t._l(t.appList,function(e,a){return i("div",{key:a,staticClass:"app-block",on:{click:function(i){return t.appClick(e)}}},[i("div",{staticClass:"icon"},[i("i",{class:["iconfont",e.icon]})]),i("div",{staticClass:"label"},[t._v(t._s(e.label))])])}),0)])])},p=[],h=i("319c"),m=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.sessionId="",t.appList=[{icon:"iconshangpin",label:"商品管理",path:"/shopList"},{icon:"iconshangpin",label:"在线传单"},{icon:"iconshangpin",label:"群发短信"},{icon:"iconshangpin",label:"客户"},{icon:"iconshangpin",label:"群活码"}],t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){this.sessionId=this.$route.query.sessionId}},{key:"appClick",value:function(t){t.path&&this.$router.push({path:t.path,query:{state:"business@8a146790-f97e-11ea-8165-3111824eebe8"}})}}]),e}(d["c"]);m=Object(u["a"])([Object(d["a"])({components:{banner:h["a"]}})],m);var b=m,v=b,y=(i("a7bc"),i("2877")),g=Object(y["a"])(v,f,p,!1,null,"76b16261",null),C=g.exports,k=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.selectedLabelDefault="appList",t.tabs=[{label:"工作中心",icon:"icon_yingyong",value:"appList"},{label:"我的",icon:"icon_gongzhonghao",value:"myconfig"}],t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"clickHandler",value:function(t){console.log(t)}},{key:"changeHandler",value:function(t){}}]),e}(d["c"]);k=Object(u["a"])([Object(d["a"])({components:{appList:C}})],k);var O=k,_=O,j=(i("afac"),Object(y["a"])(_,a,s,!1,null,"f944ae40",null));e["default"]=j.exports},"0753":function(t,e,i){},"098d":function(t,e,i){},"18a0":function(t,e,i){t.exports=i("574f")("./node_modules/weixin-js-sdk/index.js")},"23ad":function(t,e,i){"use strict";var a=i("098d"),s=i.n(a);s.a},"319c":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slide-banner"},[i("cube-slide",{attrs:{data:t.imgUrl}})],1)},s=[],n=(i("ac6a"),i("d225")),o=i("b0b4"),c=i("308d"),r=i("6bb5"),l=i("4e2b"),u=i("9ab4"),d=i("60a3"),f=function(t){function e(){return Object(n["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"imgUrl",get:function(){if(this.url&&"string"===typeof this.url)return[{image:this.url}];if(Array.isArray(this.url)){var t=[];return this.url.forEach(function(e){t.push({image:e})}),t}return[]}}]),e}(d["c"]);Object(u["a"])([Object(d["b"])({default:""})],f.prototype,"url",void 0),f=Object(u["a"])([Object(d["a"])({components:{},filters:{}})],f);var p=f,h=p,m=(i("5016"),i("72a9"),i("2877")),b=Object(m["a"])(h,a,s,!1,null,"2d55a1be",null);e["a"]=b.exports},"47d5":function(t,e,i){"use strict";var a=i("5d86"),s=i.n(a);s.a},"4c70":function(t,e,i){"use strict";var a=i("d172"),s=i.n(a);s.a},5016:function(t,e,i){"use strict";var a=i("fc70"),s=i.n(a);s.a},"5a08":function(t,e,i){"use strict";var a=i("e69a"),s=i.n(a);s.a},"5c5d":function(t,e,i){},"5d86":function(t,e,i){},"625f":function(t,e,i){},"72a9":function(t,e,i){"use strict";var a=i("0753"),s=i.n(a);s.a},"7e52":function(t,e,i){},8615:function(t,e,i){t.exports=i("574f")("./node_modules/core-js/modules/es7.object.values.js")},a027:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"atOrder"},[i("previewOrder"),i("pickUp",{ref:"pickUp"}),i("cube-tab-bar",{attrs:{data:t.tabs},on:{click:t.clickHandler,change:t.changeHandler},model:{value:t.selectedLabelDefault,callback:function(e){t.selectedLabelDefault=e},expression:"selectedLabelDefault"}}),i("payClick",{attrs:{actions:t.actions},on:{click:t.clickHandler}})],1)},s=[],n=(i("ac6a"),i("96cf"),i("3b8d")),o=(i("a481"),i("28a5"),i("d225")),c=i("b0b4"),r=i("308d"),l=i("6bb5"),u=i("4e2b"),d=i("9ab4"),f=i("60a3"),p=i("18a0"),h=i.n(p),m=i("da92"),b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{isAtOrder:!0}},[i("div",{ref:"selectlist",staticClass:"atOrderBox"},[i("p",{staticClass:"atOrderBox-title"},[t._v("订单确认")]),i("div",{style:t.autoHeight},[i("cube-scroll",{ref:"atScroll",attrs:{data:t.selectCommodityList,options:t.options}},[i("ul",{staticClass:"foods-wrapper"},t._l(t.selectCommodityList,function(e,a){return i("li",{staticClass:"atOrderBox-li"},[i("div",{staticClass:"image"},[i("img",{attrs:{src:e.imgUrlList&&e.imgUrlList.length>0?e.imgUrlList[0]+"?w=100":""}})]),i("div",{staticClass:"atOrderBox-info"},[i("div",{staticClass:"atOrderBox-info-name"},[i("span",{staticClass:"name"},[t._v(t._s(e.name))]),i("span",{staticClass:"price"},[t._v(t._s(t.getFoodPrice(e)))])]),i("div",{staticClass:"atOrderBox-info-num"},[i("span",[t._v("数量:"+t._s(e.num)+t._s(e.unit))])])])])}),0)])],1),i("div",{staticClass:"atOrderBox-bottom"},[i("span",{staticStyle:{"margin-left":"3px"}},[t._v("小计")]),t._v(t._s(t.selectCommodityPrice))])])])},v=[],y=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(r["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.autoHeight={height:"auto"},t}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"activated",value:function(){this.isShowChange(!0)}},{key:"getFoodPrice",value:function(t){return"¥"+m["a"].strip(t.num*t.price)}},{key:"foodAdd",value:function(t,e){var i=t.num||0;this.$set(this.selectCommodityList[e],"num",i+1),this.$store.commit("SET_SELECT_COMMODITY_LIST",{type:"add",item:this.selectCommodityList[e]});var a=t.class;this.setClassNum(a,"add")}},{key:"setClassNum",value:function(t,e){this.$store.commit("SET_SELECT_COMMODITY_NUM",{classId:t,type:e})}},{key:"foodReduce",value:function(t,e){t.num;var i=t.num-1;this.$set(this.selectCommodityList[e],"num",i),this.$store.commit("SET_SELECT_COMMODITY_LIST",{type:"reduce",item:this.selectCommodityList[e]});var a=t.class;this.setClassNum(a,"reduce")}},{key:"isShowChange",value:function(t){this.selectCommodityList.length>3?this.autoHeight.height="274px":this.autoHeight.height="auto",this.$nextTick(function(){this.$refs.atScroll.refresh()})}},{key:"emptyCommodity",value:function(){this.$store.commit("EMPTY_COMMODITY")}},{key:"options",get:function(){return{pullDownRefresh:!1,pullUpLoad:!1,scrollbar:{fade:!1}}}},{key:"selectCommodityList",get:function(){return this.$store.state.selectCommodityList}},{key:"commodityNum",get:function(){var t=0;return this.$store.state.selectCommodityList.forEach(function(e){return t+=e.num}),t}},{key:"selectCommodityPrice",get:function(){var t=0;return this.$store.state.selectCommodityList.forEach(function(e){t+=e.price*e.num}),"¥"+m["a"].strip(t)}}]),e}(f["c"]);Object(d["a"])([Object(f["b"])({default:!1})],y.prototype,"isShow",void 0),Object(d["a"])([Object(f["d"])("selectCommodityList")],y.prototype,"isShowChange",null),y=Object(d["a"])([Object(f["a"])({components:{},filters:{getFoodNum:function(t){return t.num&&t.num>0?t.num:0}}})],y);var g=y,C=g,k=(i("4c70"),i("2877")),O=Object(k["a"])(C,b,v,!1,null,"e5f96cba",null),_=O.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"toolbar"},[i("span",{staticClass:"price"},[t._v(t._s(t.actions[0].text))]),i("div",{staticClass:"btn",on:{click:t.paymentClick}},[t._v("下单并支付")])])},x=[],I=function(t){function e(){return Object(o["a"])(this,e),Object(r["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){}},{key:"paymentClick",value:function(){this.$emit("click",{action:"payButtonClickHandle"})}},{key:"shoppingClick",value:function(){this.commodityNum>0&&this.$emit("click",{action:"shoppingClick"})}},{key:"commodityNum",get:function(){var t=0;return this.$store.state.selectCommodityList.forEach(function(e){return t+=e.num}),t}}]),e}(f["c"]);Object(d["a"])([Object(f["b"])({default:""})],I.prototype,"actions",void 0),I=Object(d["a"])([Object(f["a"])({components:{},filters:{}})],I);var w=I,L=w,$=(i("a4ed"),Object(k["a"])(L,j,x,!1,null,"421c7ac2",null)),E=$.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("cube-tab-bar",{staticClass:"pcickUp",attrs:{data:t.tabs},on:{click:t.clickHandler,change:t.changeHandler},model:{value:t.selectedLabelDefault,callback:function(e){t.selectedLabelDefault=e},expression:"selectedLabelDefault"}}),"sf"===t.selectedLabelDefault?i("div",{staticClass:"info-box sf",on:{click:t.show}},[i("div",{staticClass:"info-box-con"},[i("p",{staticClass:"title"},[t._v("商家地址")]),i("p",{staticClass:"address"},[t._v(t._s(t.shopInfo.address))]),i("p",{staticClass:"phone"}),i("p",{staticClass:"title"},[t._v("预留手机")]),i("p",{staticClass:"phone"},[t._v(t._s(t.userInfo.phone))]),i("p")]),t._m(0)]):"ds"===t.selectedLabelDefault?i("div",{staticClass:"info-box ds",on:{click:t.show}},[i("div",{staticClass:"info-box-con"},[i("p",{staticClass:"title"},[t._v("收货地址")]),i("p",{staticClass:"address"},[t._v(t._s(t.userInfo.address))]),i("p",{staticClass:"title"},[t._v("收货人")]),i("p",{staticClass:"ds-info"},[i("span",[t._v(t._s(t.userInfo.name))]),i("span",{staticClass:"phone"},[t._v(t._s(t.userInfo.phone))])])]),t._m(1)]):t._e(),i("cube-popup",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],attrs:{type:"picker",mask:!0,center:!1,"z-index":"1000"},on:{touchmove:function(t){t.preventDefault()},"mask-click":t.maskClick}},[i("transition",{attrs:{name:"cube-picker-move"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],staticClass:"picker-box"},[i("div",{staticClass:"header"},[i("span",{staticClass:"cancel",on:{click:t.maskClick}},[t._v("取消")]),i("span",{staticClass:"save",on:{click:t.saveClick}},[t._v("保存")])]),i("cube-form",{ref:"cubeForm",attrs:{model:t.userInfo,schema:t.schema,"immediate-validate":!1,options:t.options},on:{validate:t.validateHandler,submit:t.submitHandler,reset:t.resetHandler}},[i("cube-form-item",{attrs:{field:t.fields[0]}}),i("cube-form-item",{attrs:{field:t.fields[1]}}),i("cube-form-item",{attrs:{field:t.fields[2]}})],1)],1)])],1)],1)},T=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"cubeic-arrow"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"cubeic-arrow"})])}],D=(i("8615"),function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(r["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.selectedLabelDefault="",t.tabs=[],t.isVisible=!1,t.userInfo={id:t.userId,name:"",phone:"",address:""},t.options={scrollToInvalidField:!0,layout:"fresh"},t.fields=[{type:"input",modelKey:"phone",label:"预留手机号",props:{placeholder:"请输入您的手机号"},rules:{required:!0,type:"tel"},trigger:"blur"},{type:"input",modelKey:"name",label:"姓名",props:{placeholder:"请输入您的姓名"},rules:{required:!0},trigger:"blur"},{type:"textarea",modelKey:"address",label:"配送地址",props:{placeholder:"请输入您的地址"},rules:{required:!0},trigger:"blur"}],t}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){this.initTransType(),this.getUserInfo()}},{key:"getUserInfo",value:function(){var t=this;this.userId&&this.$store.dispatch("getMtUserInfo",{id:this.userId}).then(function(e){e.success&&e.data&&t.$set(t,"userInfo",e.data)})}},{key:"saveClick",value:function(){this.$refs.cubeForm.submit()}},{key:"initTransType",value:function(){var t=this.shopInfo.transType,e=[];t.forEach(function(t){var i="到店自取";"ds"===t&&(i="商家配送"),e.push({label:i,value:t})}),this.selectedLabelDefault=e[0].value,this.$set(this,"tabs",e)}},{key:"validate",value:function(){var t=this;return Object.values(this.userInfo).some(function(e){if(!e)return t.isVisible=!0,!0}),!this.isVisible}},{key:"maskClick",value:function(){this.hide()}},{key:"hide",value:function(){this.isVisible&&(this.isVisible=!1)}},{key:"show",value:function(){this.isVisible=!0}},{key:"submitHandler",value:function(t){var e,i=this;t.preventDefault(),e=this.userInfo,this.$store.dispatch("addOrUpdateMtUser",e).then(function(t){t.success&&i.hide()})}},{key:"userId",get:function(){return this.$store.state.mtUserId}},{key:"shopInfo",get:function(){return this.$store.state.shopInfo}}]),e}(f["c"]));D=Object(d["a"])([Object(f["a"])({components:{},filters:{}})],D);var M=D,N=M,U=(i("23ad"),i("cf00"),Object(k["a"])(N,S,T,!1,null,"5b84ea96",null)),H=U.exports,B=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(r["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.indicator=!1,t.model={phone:"",openid:""},t.actions=[{text:"¥00.00",action:"moreMoney"},{type:"button",text:'<div class="payButton">立即购买</div>',action:"payButtonClickHandle"}],t.page=1,t.commodityId="",t.commodityObj={},t.commodityNum=1,t.totalCost=0,t.userInfo={phone:"",address:""},t.openid="",t.payButtonClick=!1,t.weixinInfo={},t.payShowVisible=!1,t}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"activated",value:function(){this.$store.commit("SET_SESSION_ID","noSession");var t=this.$route.query.userInfo;this.openid=this.$route.query.openid,this.$set(this,"userInfo",t),this.actions[0].text="¥"+this.selectCommodityPrice}},{key:"selectCommodityListChanged",value:function(t){this.actions[0].text="¥"+t}},{key:"getUserInfo",value:function(){var t=this,e=this.$route.query;if(e.code){var i=this["$createToast"]({time:0,txt:"数据获取中..."});i.show(),this.$store.dispatch("getCommodityUserInfo",{code:e.code}).then(function(e){e.success&&e.data.openid&&(t.openid=e.data.openid,t.getWeiXinConfig(),e.data.userInfo&&(t.userInfo=e.data.userInfo),e.data.weixinInfo&&(t.weixinInfo=e.data.weixinInfo)),i.hide()})}else console.log("不是微信登陆")}},{key:"pageInit",value:function(){var t=this.$route.query,e=t.state;if(e){var i=e.split("@");"commodity"===i[0]&&(this.commodityId=i[1].replace(/\'/g,""))}t.code&&this.getUserInfo()}},{key:"getCommodityById",value:function(){var t=this,e=this["$createToast"]({time:0,txt:"数据获取中..."});e.show(),this.$store.dispatch("getCommodityById",{id:this.commodityId}).then(function(i){i.success&&t.$set(t,"commodityObj",i.data),e.hide()})}},{key:"fenToYuan",value:function(t){return"number"!==typeof t||isNaN(t)?null:"合计 ¥"+m["a"].strip((t/100).toFixed(2))}},{key:"getWeiXinConfig",value:function(){var t=window.location.href;this.$store.dispatch("getWeixinConfig",{url:t}).then(function(t){if(console.log("获取微信配置成功",t),t.success){var e=t.data;h.a.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["chooseWXPay"]})}h.a.ready(function(){}),h.a.error(function(t){})})}},{key:"clickHandler",value:function(t){t.action&&this[t.action](t)}},{key:"payButtonClickHandle",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,i,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.payButtonClick=!0,e=[],this.$store.state.selectCommodityList.forEach(function(t){var i={};i.id=t.id,i.name=t.name,i.num=t.num,i.price=t.price,i.imgUrl=t.imgUrlList[0],e.push(i)}),!(e.length<=0)){t.next=7;break}return i=this.$createToast({txt:"请选择商品",type:"error"}),i.show(),t.abrupt("return");case 7:return t.next=9,this.getIsMiniProgram();case 9:if(a=t.sent,!a){t.next=16;break}if(s=this.$refs.pickUp.validate(),s){t.next=14;break}return t.abrupt("return");case 14:return h.a.miniProgram.navigateTo({url:"/pages/jumbprocess/index?type=commodity&commodityList="+JSON.stringify(e)+"&fee="+this.selectCommodityPrice+"&businessId="+this.$store.state.businessId}),t.abrupt("return");case 16:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"shoppingClick",value:function(){this.payShowVisible=!this.payShowVisible}},{key:"payShowCancel",value:function(){this.payShowVisible=!1}},{key:"getIsMiniProgram",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t){h.a.miniProgram.getEnv(function(e){t(e.miniprogram)})}));case 1:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"selectCommodityPrice",get:function(){var t=0;return this.$store.state.selectCommodityList.forEach(function(e){t+=e.price*e.num}),m["a"].strip(t)}},{key:"computedMsg",get:function(){return"computed "+this.propB}}]),e}(f["c"]);Object(d["a"])([Object(f["d"])("selectCommodityPrice")],B.prototype,"selectCommodityListChanged",null),Object(d["a"])([Object(f["b"])({default:"default value"})],B.prototype,"propB",void 0),B=Object(d["a"])([Object(f["a"])({components:{previewOrder:_,payClick:E,pickUp:H},filters:{getFormatDate:function(t){return new Date(t).getFullYear()+"年"+(new Date(t).getMonth()+1)+"月"+new Date(t).getDate()},fenToYuan:function(t){return"number"!==typeof t||isNaN(t)?null:"¥"+(t/100).toFixed(2)}}})],B);var P=B,F=P,V=(i("5a08"),i("47d5"),Object(k["a"])(F,a,s,!1,null,"4dc8e023",null));e["default"]=V.exports},a4ed:function(t,e,i){"use strict";var a=i("7e52"),s=i.n(a);s.a},a6c9:function(t,e,i){},a7bc:function(t,e,i){"use strict";var a=i("a6c9"),s=i.n(a);s.a},afac:function(t,e,i){"use strict";var a=i("5c5d"),s=i.n(a);s.a},b0b4:function(t,e,i){"use strict";i.d(e,"a",function(){return o});var a=i("85f2"),s=i.n(a);function n(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),s()(t,a.key,a)}}function o(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}},cf00:function(t,e,i){"use strict";var a=i("625f"),s=i.n(a);s.a},d172:function(t,e,i){},da92:function(t,e,i){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function a(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;var a=Array(t),s=0;for(e=0;e<i;e++)for(var n=arguments[e],o=0,c=n.length;o<c;o++,s++)a[s]=n[o];return a}function s(t,e){return void 0===e&&(e=15),+parseFloat(Number(t).toPrecision(e))}function n(t){var e=t.toString().split(/[eE]/),i=(e[0].split(".")[1]||"").length-+(e[1]||0);return i>0?i:0}function o(t){if(-1===t.toString().indexOf("e"))return Number(t.toString().replace(".",""));var e=n(t);return e>0?s(Number(t)*Math.pow(10,e)):Number(t)}function c(t){p&&(t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER)&&console.warn(t+" is beyond boundary when transfer to integer, the results may not be accurate")}function r(t,e){for(var i=[],s=2;s<arguments.length;s++)i[s-2]=arguments[s];if(i.length>0)return r.apply(void 0,a([r(t,e),i[0]],i.slice(1)));var l=o(t),u=o(e),d=n(t)+n(e),f=l*u;return c(f),f/Math.pow(10,d)}function l(t,e){for(var i=[],s=2;s<arguments.length;s++)i[s-2]=arguments[s];if(i.length>0)return l.apply(void 0,a([l(t,e),i[0]],i.slice(1)));var o=Math.pow(10,Math.max(n(t),n(e)));return(r(t,o)+r(e,o))/o}function u(t,e){for(var i=[],s=2;s<arguments.length;s++)i[s-2]=arguments[s];if(i.length>0)return u.apply(void 0,a([u(t,e),i[0]],i.slice(1)));var o=Math.pow(10,Math.max(n(t),n(e)));return(r(t,o)-r(e,o))/o}function d(t,e){for(var i=[],l=2;l<arguments.length;l++)i[l-2]=arguments[l];if(i.length>0)return d.apply(void 0,a([d(t,e),i[0]],i.slice(1)));var u=o(t),f=o(e);return c(u),c(f),r(u/f,s(Math.pow(10,n(e)-n(t))))}function f(t,e){var i=Math.pow(10,e);return d(Math.round(r(t,i)),i)}var p=!0;function h(t){void 0===t&&(t=!0),p=t}var m={strip:s,plus:l,minus:u,times:r,divide:d,round:f,digitLength:n,float2Fixed:o,enableBoundaryChecking:h};e["a"]=m},e69a:function(t,e,i){},fc70:function(t,e,i){}}]);
//# sourceMappingURL=atOrder.e5df255a.js.map