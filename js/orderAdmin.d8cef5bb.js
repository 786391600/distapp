(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orderAdmin"],{"09c5":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"orderAdmin"},[s("div",{staticClass:"swipe-wrapper"},[s("cube-tab-bar",{attrs:{data:e.tabBarList},on:{change:e.tabBarChange},model:{value:e.selectedLabelDefault,callback:function(t){e.selectedLabelDefault=t},expression:"selectedLabelDefault"}}),s("div",{staticClass:"repairList"},[e._l(e.repairList,function(t){return s("div",{staticClass:"repairList-box"},[s("div",{staticClass:"repairList-box-head"},[s("span",[e._v(e._s(e._f("getFormatDate")(t.payTime)))]),"processed"===e.selectedLabelDefault?s("span",{staticClass:"processed"},[e._v("已完成")]):s("span",{staticClass:"unprocessed"},[e._v("未完成")])]),s("div",{staticClass:"repairList-box-box"},[s("div",[s("span",{staticClass:"title"},[e._v("商品名称")]),s("span",[e._v(e._s(t.body))])]),s("div",[s("span",{staticClass:"title"},[e._v("数量")]),s("span",[e._v(e._s(t.num))])]),s("div",[s("span",{staticClass:"title"},[e._v("支付")]),s("span",[e._v(e._s(t.fee)+"元")])]),s("div",[s("span",{staticClass:"title"},[e._v("手机")]),s("span",[e._v(e._s(t.user_info[0].phone))])]),s("div",[s("span",{staticClass:"title"},[e._v("送货地址")]),s("span",[e._v(e._s(t.user_info[0].address))])])]),s("cube-button",{directives:[{name:"show",rawName:"v-show",value:"unprocessed"===e.selectedLabelDefault,expression:'selectedLabelDefault === "unprocessed"'}],staticClass:"repairBtn",on:{click:function(s){return e.updateRepairState(t.id)}}},[e._v("配送完成")])],1)}),e.isShowMore?s("div",{staticClass:"more",on:{click:e.showMoreClick}},[e._v("加载更多")]):e._e(),e.isShowMore?e._e():s("div",{staticClass:"more"},[e._v("没有数据了")])],2)],1)])},i=[],o=(s("ac6a"),s("d225")),n=s("b0b4"),r=s("308d"),c=s("6bb5"),l=s("4e2b"),d=s("9ab4"),u=s("60a3"),p=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.model={details:"",type:"type1"},e.houseId="",e.selectedLabelDefault="unprocessed",e.tabBarList=[{label:"未处理",value:"unprocessed"},{label:"已处理",value:"processed"}],e.page=1,e.isShowMore=!0,e.repairList=[],e}return Object(l["a"])(t,e),Object(n["a"])(t,[{key:"activated",value:function(){this.$store.commit("SET_SESSION_ID","noSession"),this.pageInit()}},{key:"pageInit",value:function(){var e=this.$route.query;e.openid?(this.openid=e.openid,this.getCommodityOrderList()):e.code&&this.getUserInfo()}},{key:"validateHandler",value:function(e){this.validity=e.validity,this.valid=e.valid,console.log(e),console.log("validity",e.validity,e.valid,e.dirty,e.firstInvalidFieldIndex)}},{key:"getUserInfo",value:function(){var e=this,t=this.$route.query;if(t.code){var s=this["$createToast"]({time:0,txt:"数据获取中..."});s.show(),this.$store.dispatch("getCommodityUserInfo",{code:t.code}).then(function(t){t.success&&t.data.openid&&(e.openid=t.data.openid,e.getCommodityOrderList(),t.data.userInfo&&(e.userInfo=t.data.userInfo)),s.hide()})}else console.log("不是微信登陆")}},{key:"tabBarChange",value:function(e){this.page=1,this.repairList=[],this.isShowMore=!0,this.getCommodityOrderList()}},{key:"getCommodityOrderList",value:function(){var e=this,t=this["$createToast"]({time:0,txt:"数据获取中..."});t.show(),this.$store.dispatch("getCommodityOrderList",{page:this.page,type:this.selectedLabelDefault}).then(function(s){s.success&&(s.data.list.length>0?e.repairList=e.repairList.concat(s.data.list):e.isShowMore=!1),t.hide()})}},{key:"showMoreClick",value:function(){this.page++,this.getRepairList()}},{key:"updateRepairState",value:function(e){var t=this;this.$store.dispatch("updateCommodityOrderState",{id:e}).then(function(e){e.success&&(t["$createDialog"]({type:"alert",content:"处理完成",icon:"cubeic-ok"}).show(),t.tabBarChange())})}},{key:"houseOptions",get:function(){return this.$store.state.houseList.forEach(function(e){e.value=e.id,e.text=e.account_info[0].name+" "+e.build_info[0].name+" "+e.unitNum+"单元"+e.floorNum+"层"+e.roomNum+"室"}),this.$store.state.houseList}},{key:"userInfo",get:function(){return this.$store.state.userInfo}}]),t}(u["c"]);Object(d["a"])([Object(u["b"])({default:"default value"})],p.prototype,"propB",void 0),p=Object(d["a"])([Object(u["a"])({components:{},filters:{getFormatDate:function(e){return new Date(e).getFullYear()+"年"+(new Date(e).getMonth()+1)+"月"+new Date(e).getDate()+"号"},getRepairType:function(e){return"type1"===e?"开锁服务":"type2"===e?"公共报修":"type3"===e?"个人报修":"其他报修"}}})],p);var v=p,h=v,f=(s("1c65"),s("662f"),s("2877")),b=Object(f["a"])(h,a,i,!1,null,"ede85ef6",null);t["default"]=b.exports},"1c65":function(e,t,s){"use strict";var a=s("adb4"),i=s.n(a);i.a},"5fc1":function(e,t,s){},"662f":function(e,t,s){"use strict";var a=s("5fc1"),i=s.n(a);i.a},adb4:function(e,t,s){}}]);
//# sourceMappingURL=orderAdmin.d8cef5bb.js.map