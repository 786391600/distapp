(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orderList"],{"0355":function(t,e,i){},"15b6":function(t,e,i){},3808:function(t,e,i){"use strict";var s=i("a5bf"),a=i.n(s);a.a},5701:function(t,e,i){},6120:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"orderList"},[i("div",{staticClass:"race-list"},[t._l(t.orderList,function(e){return i("div",{staticClass:"order-box"},[i("div",{staticClass:"order-box-tit"},[i("span",{staticClass:"time"},[t._v(t._s(t._f("getFormatDate")(e.payTime)))]),i("span",{staticClass:"type"},[t._v(t._s(t._f("getType")(e)))])]),i("div",{staticClass:"order-box-con"},[i("div",{staticClass:"box-con-img"},[i("img",{attrs:{src:t._f("getImage")(e),alt:""}})]),i("div",{staticClass:"box-con-info"},[i("span",{staticClass:"title"},[t._v("商品名称："+t._s(e.body))]),i("span",[t._v("数量: "+t._s(e.num||1))]),i("span",[t._v("价格: "+t._s(e.fee))])])]),i("div",{staticClass:"user"},[i("div",{staticClass:"tip"},[t._v("有任何问题，请联系配送人员。")]),i("div",{staticClass:"info"},[i("a",{attrs:{href:"tel:13934691550"}},[i("span",[t._v("13934691550")]),i("i",{staticClass:"cubeic-phone"})])])])])}),t.isShowMore?i("div",{staticClass:"more",on:{click:t.showMoreClick}},[t._v("加载更多")]):t._e(),t.isShowMore?t._e():i("div",{staticClass:"more"},[t._v("没有数据了")])],2)])},a=[],n=(i("3b2b"),i("a481"),i("d225")),o=i("b0b4"),c=i("308d"),r=i("6bb5"),u=i("4e2b"),d=i("9ab4"),l=i("60a3"),h=i("b312"),f=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.openid="",t.page=1,t.orderList=[],t.isShowMore=!1,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"activated",value:function(){this.pageInit()}},{key:"pageInit",value:function(){var t=this.$route.query;t.openid?(this.openid=t.openid,this.getOrderList()):t.code&&this.getUserInfo()}},{key:"getOrderList",value:function(){var t=this,e=this["$createToast"]({time:0,txt:"数据获取中..."});e.show(),this.$store.dispatch("getOrderList",{openid:this.openid,page:this.page}).then(function(i){if(i.success){var s=i.data;i.data.list.length>=0&&i.data.list.length<10?(t.orderList=t.orderList.concat(s.list),t.isShowMore=!1):10===i.data.list.length?(t.orderList=t.orderList.concat(s.list),t.isShowMore=!0):t.isShowMore=!1}e.hide()})}},{key:"getUserInfo",value:function(){var t=this,e=this.$route.query;if(e.code){var i=this["$createToast"]({time:0,txt:"数据获取中..."});i.show(),this.$store.dispatch("getCommodityUserInfo",{code:e.code}).then(function(e){e.success&&e.data.openid&&(t.openid=e.data.openid,t.getOrderList(),e.data.userInfo&&(t.userInfo=e.data.userInfo)),i.hide()})}else console.log("不是微信登陆")}},{key:"showMoreClick",value:function(){this.page++,this.getOrderList()}},{key:"format",value:function(t,e){e||(e="yyyy-MM-dd hh:mm:ss");var i={"M+":t.getMonth()+1,"d+":t.getDate(),"H+":t.getHours(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var s in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),i)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?i[s]:("00"+i[s]).substr((""+i[s]).length)));return e}},{key:"formatMonth",get:function(){return this.format(this.selectDate,"yyyy-MM")}}]),e}(l["c"]);f=Object(d["a"])([Object(l["a"])({components:{accountSelect:h["a"]},filters:{getFormatDate:function(t){return t?new Date(t).getFullYear()+"年"+(new Date(t).getMonth()+1)+"月"+new Date(t).getDate()+"号":""},getImage:function(t){return t.commodity_info[0]&&t.commodity_info[0].imgUrlList?t.commodity_info[0].imgUrlList[0]:""},getType:function(t){return t.delivery?"配送成功":"配送中"}}})],f);var g=f,p=g,v=(i("3808"),i("894e"),i("2877")),b=Object(v["a"])(p,s,a,!1,null,"1ad45a74",null);e["default"]=b.exports},"894e":function(t,e,i){"use strict";var s=i("5701"),a=i.n(s);a.a},a5bf:function(t,e,i){},b312:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"accountSelect"},[i("div",{staticClass:"address"},[i("div",{staticClass:"info"},[i("i",{staticClass:"iconfont iconxiaoqu1"}),i("cube-select",{attrs:{options:t.accountOptions},on:{change:t.accountChange},model:{value:t.accountId,callback:function(e){t.accountId=e},expression:"accountId"}})],1)])])},a=[],n=(i("ac6a"),i("a481"),i("d225")),o=i("b0b4"),c=i("308d"),r=i("6bb5"),u=i("4e2b"),d=i("9ab4"),l=i("60a3"),h=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.accountList=[],t.accountId="",t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"activated",value:function(){this.accountId?this.$emit("change",this.accountId):this.pageInit()}},{key:"getBindingInfo",value:function(){var t=this,e=this.$route.query;if(e.code){var i=this["$createToast"]({time:0,txt:"数据获取中..."});i.show(),this.$store.dispatch("getCodeInfo",{code:e.code}).then(function(e){e.success&&(e.data.openid?(t.openid=e.data.openid,t.$router.replace({path:"/login",query:{openid:e.data.openid,jump:"/home"}})):e.data.sessionId&&(t.$store.commit("SET_SESSION_ID",e.data.sessionId),t.$store.commit("SET_USER_INFO",e.data.userInfo),t.getAdminAccountList())),i.hide()})}else console.log("不是微信登陆")}},{key:"pageInit",value:function(){var t=this.$route.query;this.$store.state.sessionId&&!this.accountId?this.getAdminAccountList():t.code&&!this.$store.state.sessionId&&this.getBindingInfo()}},{key:"getAdminAccountList",value:function(){var t=this,e=this;this.$store.dispatch("getAdminAccountList",{}).then(function(i){i.data.list&&(i.data.list.forEach(function(t,i){e.$set(e.accountList,i,t)}),t.accountId||(t.accountId=t.accountList[0].id))})}},{key:"getFloorByAccountId",value:function(){var t=this,e=this["$createToast"]({time:0,txt:"数据获取中..."});e.show(),this.$store.dispatch("getFloorByAccountId",{accountId:this.accountId}).then(function(i){i.success&&("incomplete"===t.selectedLabelDefault?(t.billList=i.data.list,t.initCheckbox()):i.data.list.length>0?t.billList=t.billList.concat(i.data.list):t.isShowMore=!1),e.hide()})}},{key:"accountChange",value:function(t){var e={};this.accountOptions.forEach(function(i){i.id===t&&(e=i)}),this.$emit("change",t,e)}},{key:"computedMsg",get:function(){return"computed "+this.propB}},{key:"accountOptions",get:function(){return this.accountList.forEach(function(t){t.value=t.id,t.text=t.name}),this.accountList}}]),e}(l["c"]);Object(d["a"])([Object(l["d"])("accountId")],h.prototype,"accountChange",null),h=Object(d["a"])([Object(l["a"])({components:{},filters:{}})],h);var f=h,g=f,p=(i("c530"),i("b77c"),i("2877")),v=Object(p["a"])(g,s,a,!1,null,"220f41c5",null);e["a"]=v.exports},b77c:function(t,e,i){"use strict";var s=i("0355"),a=i.n(s);a.a},c530:function(t,e,i){"use strict";var s=i("15b6"),a=i.n(s);a.a}}]);
//# sourceMappingURL=orderList.85fffbcc.js.map