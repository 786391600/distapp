(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pay"],{"0e79":function(e,t,i){"use strict";var s=i("0f90"),a=i.n(s);a.a},"0f90":function(e,t,i){},"7bb3":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"payBox"},[i("houseSelect",{on:{change:e.setHouseId}}),i("div",{staticClass:"header"},[i("div",{staticClass:"expense"},[i("div",{staticClass:"num"},[e._v(e._s(e._f("fenToYuan")(e.totalCost)))]),i("div",{staticClass:"text"},[e._v("欠缴费用")])])]),i("div",{staticClass:"swipe-wrapper"},[i("cube-tab-bar",{attrs:{data:e.tabBarList},on:{change:e.tabBarChange},model:{value:e.selectedLabelDefault,callback:function(t){e.selectedLabelDefault=t},expression:"selectedLabelDefault"}}),i("cube-checkbox-group",{on:{input:e.checkboxChange},model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},[e._l(e.billList,function(t,s){return i("div",{staticClass:"bill_list"},[i("cube-checkbox",{attrs:{option:{value:t.id,disabled:"complete"===e.selectedLabelDefault}}},[i("div",{staticClass:"bill_list_box"},[i("span",[e._v(e._s(e._f("getFormatDate")(t.buildDate)))]),i("span",[e._v(e._s(e._f("billType")(t.type)))]),i("span",[e._v(e._s(e._f("fenToYuan")(t.cost)))])])])],1)}),0===e.billList.length&&"incomplete"===e.selectedLabelDefault?i("div",{staticClass:"more"},[e._v("您没有未缴账单")]):e._e(),"complete"===e.selectedLabelDefault&&e.isShowMore?i("div",{staticClass:"more",on:{click:e.showMoreClick}},[e._v("加载更多")]):e._e(),"complete"!==e.selectedLabelDefault||e.isShowMore?e._e():i("div",{staticClass:"more"},[e._v("没有数据了")])],2)],1),i("cube-toolbar",{directives:[{name:"show",rawName:"v-show",value:"incomplete"===e.selectedLabelDefault,expression:"selectedLabelDefault === 'incomplete'"}],attrs:{actions:e.actions},on:{click:e.clickHandler}})],1)},a=[],o=(i("ac6a"),i("28a5"),i("a481"),i("d225")),n=i("b0b4"),l=i("308d"),c=i("6bb5"),u=i("4e2b"),r=i("9ab4"),d=i("60a3"),h=i("00cad"),p=i.n(h),f=i("3cdd"),b=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(l["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.model={phone:"",openid:""},e.fields=[{type:"input",modelKey:"phone",label:"手机号",props:{placeholder:"请输入"},rules:{required:!0,type:"tel"}},{type:"input",modelKey:"verificationCode",label:"验证码",props:{placeholder:"请输入",type:"text"},rules:{required:!0}}],e.valid=void 0,e.validity={},e.options={},e.time=60,e.sendMsgDisabled=!1,e.isVerification=!1,e.openid="",e.jump="",e.isShowMore=!0,e.actions=[{text:"合计 ¥00.00",action:"moreMoney"},{type:"button",text:'<div class="payButton">立即缴费</div>',action:"payButtonClick"}],e.selectCost=0,e.totalCost=0,e.checkList=[],e.billList=[],e.isMounted=!1,e.houseId="",e.selectedLabelDefault="incomplete",e.tabBarList=[{label:"未缴账单",value:"incomplete"},{label:"已缴账单",value:"complete"}],e.page=1,e}return Object(u["a"])(t,e),Object(n["a"])(t,[{key:"activated",value:function(){}},{key:"validateHandler",value:function(e){this.validity=e.validity,this.valid=e.valid,console.log(e),console.log("validity",e.validity,e.valid,e.dirty,e.firstInvalidFieldIndex)}},{key:"getBindingInfo",value:function(){var e=this,t=this.$route.query;if(t.code){var i=this["$createToast"]({time:0,txt:"数据获取中..."});i.show(),this.$store.dispatch("getCodeInfo",{code:t.code}).then(function(t){t.success&&(t.data.openid?(e.openid=t.data.openid,e.$router.replace({path:"/login",query:{openid:t.data.openid,jump:"/home"}})):t.data.sessionId&&(e.$store.commit("SET_SESSION_ID",t.data.sessionId),e.$store.commit("SET_USER_INFO",t.data.userInfo),e.getWeiXinConfig(),e.getBillListByHouseId())),i.hide()})}else console.log("不是微信登陆")}},{key:"pageInit",value:function(){var e=this.$route.query,t=e.state,i="";if(t){var s=t.split("@");"houseId"===s[0]&&(i=s[1])}e.houseId&&(i=e.houseId),i?(this.houseId=i,this.$store.state.sessionId?(this.page=1,this.billList=[],this.getWeiXinConfig(),this.getBillListByHouseId()):e.code&&this.getBindingInfo()):this["$createDialog"]({type:"alert",content:"登陆方式错误",icon:"cubeic-wrong"}).show()}},{key:"getBillListByHouseId",value:function(){var e=this,t=this["$createToast"]({time:0,txt:"数据获取中..."});t.show(),this.$store.dispatch("getBillListByHouseId",{houseId:this.houseId,type:this.selectedLabelDefault,page:this.page,limit:10}).then(function(i){i.success&&("incomplete"===e.selectedLabelDefault?(e.billList=i.data.list,e.initCheckbox()):i.data.list.length>0?e.billList=e.billList.concat(i.data.list):e.isShowMore=!1),t.hide()})}},{key:"initCheckbox",value:function(){var e=[],t=0;this.billList.forEach(function(i){e.push(i.id),t+=i.cost}),this.totalCost=t,this.selectCost=t,this.actions[0].text=this.fenToYuan(t),this.checkList=e}},{key:"computedPrice",value:function(e){var t=0;this.billList.forEach(function(i){e.forEach(function(e){i.id===e&&(t+=i.cost)})}),this.selectCost=t,this.actions[0].text=this.fenToYuan(t)}},{key:"checkboxChange",value:function(e){this.computedPrice(e)}},{key:"clickHandler",value:function(e){e.action&&this[e.action](e)}},{key:"fenToYuan",value:function(e){return"number"!==typeof e||isNaN(e)?null:"合计 ¥"+(e/100).toFixed(2)}},{key:"getWeiXinConfig",value:function(){var e=window.location.href;this.$store.dispatch("getWeixinConfig",{url:e}).then(function(e){if(console.log("获取微信配置成功",e),e.success){var t=e.data;p.a.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["chooseWXPay"]})}p.a.ready(function(){console.log("ready========")}),p.a.error(function(e){console.log(e),console.log("errrrrrrrrrrrrrr")})})}},{key:"payButtonClick",value:function(){var e=this;0===this.checkList.length&&e["$createDialog"]({type:"alert",content:"请选择账单",icon:"cubeic-important"}).show();var t={};t.rqBillList=this.checkList,t.fee=this.selectCost,t.body="物业缴费",this.$store.dispatch("setUppropertyOrder",t).then(function(t){if(t.success){var i=t.data;p.a.chooseWXPay({timestamp:i.timeStamp,nonceStr:i.nonceStr,package:i.package,signType:i.signType,paySign:i.paySign,success:function(t){var i=e.$createToast({time:2e3,txt:"订单处理中...",mask:!0,onTimeout:function(){e.getBillListByHouseId(),e["$createDialog"]({type:"alert",content:"缴费成功",icon:"cubeic-ok"}).show()}});i.show()},error:function(){}})}})}},{key:"tabBarChange",value:function(e){this.page=1,this.isShowMore=!0,this.billList=[],this.getBillListByHouseId()}},{key:"showMoreClick",value:function(){this.page++,this.getBillListByHouseId()}},{key:"setHouseId",value:function(e){console.log(e,"ppppp"),this.houseId!==e&&(this.houseId=e,this.getWeiXinConfig(),this.getBillListByHouseId())}},{key:"computedMsg",get:function(){return"computed "+this.propB}}]),t}(d["c"]);Object(r["a"])([Object(d["b"])({default:"default value"})],b.prototype,"propB",void 0),b=Object(r["a"])([Object(d["a"])({components:{houseSelect:f["a"]},filters:{getFormatDate:function(e){return new Date(e).getFullYear()+"年"+(new Date(e).getMonth()+1)+"月"+new Date(e).getDate()},fenToYuan:function(e){return"number"!==typeof e||isNaN(e)?null:"¥"+(e/100).toFixed(2)},billType:function(e){return"property"===e?"物业费用":"parking"===e?"停车费用":"water"===e?"水费":"其他费用"}}})],b);var v=b,g=v,y=(i("fe3a"),i("0e79"),i("2877")),m=Object(y["a"])(g,s,a,!1,null,"6fa76466",null);t["default"]=m.exports},da50:function(e,t,i){},fe3a:function(e,t,i){"use strict";var s=i("da50"),a=i.n(s);a.a}}]);
//# sourceMappingURL=pay.cdaee933.js.map