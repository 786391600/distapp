(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["business-orderAdmin"],{8795:function(e,t,s){"use strict";var a=s("c6a3"),i=s.n(a);i.a},"888e":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"orderAdmin"},[s("div",{staticClass:"swipe-wrapper"},[s("cube-tab-bar",{attrs:{data:e.tabBarList},on:{change:e.tabBarChange},model:{value:e.selectedLabelDefault,callback:function(t){e.selectedLabelDefault=t},expression:"selectedLabelDefault"}}),s("div",{staticClass:"repairList"},[e._l(e.repairList,function(t){return s("div",{staticClass:"repairList-box"},[s("div",{staticClass:"repairList-box-head"},[s("span",[e._v(e._s(e._f("getFormatDate")(t.payTime)))]),"processed"===e.selectedLabelDefault?s("span",{staticClass:"processed"},[e._v("配送完成")]):s("span",{staticClass:"unprocessed"},[e._v("未配送")])]),s("div",{staticClass:"repairList-box-box"},[s("div",[s("span",{staticClass:"title"},[e._v("商品名称")]),s("span",[e._v(e._s(t.body))])]),s("div",[s("span",{staticClass:"title"},[e._v("数量")]),s("span",[e._v(e._s(t.num))])]),s("div",[s("span",{staticClass:"title"},[e._v("支付")]),s("span",[e._v(e._s(t.fee)+"元")])]),s("div",[s("span",{staticClass:"title"},[e._v("手机")]),s("span",[e._v(e._s(e._f("getPhone")(t)))])]),s("div",[s("span",{staticClass:"title"},[e._v("送货地址")]),s("span",[e._v(e._s(e._f("getAddress")(t)))])])]),s("cube-button",{directives:[{name:"show",rawName:"v-show",value:"unprocessed"===e.selectedLabelDefault,expression:'selectedLabelDefault === "unprocessed"'}],staticClass:"repairBtn",on:{click:function(s){return e.updateRepairState(t.out_trade_no)}}},[e._v("配送完成")])],1)}),e.isShowMore?s("div",{staticClass:"more",on:{click:e.showMoreClick}},[e._v("加载更多")]):e._e(),e.isShowMore?e._e():s("div",{staticClass:"more"},[e._v("没有数据了")])],2)],1)])},i=[],o=(s("ac6a"),s("d225")),n=s("b0b4"),r=s("308d"),c=s("6bb5"),d=s("4e2b"),u=s("9ab4"),l=s("60a3"),p=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.model={details:"",type:"type1"},e.businessId="",e.selectedLabelDefault="unprocessed",e.tabBarList=[{label:"未处理",value:"unprocessed"},{label:"已处理",value:"processed"}],e.page=1,e.isShowMore=!0,e.repairList=[],e}return Object(d["a"])(t,e),Object(n["a"])(t,[{key:"activated",value:function(){this.pageInit()}},{key:"pageInit",value:function(){var e=this.$route.query;e.accountId?(this.businessId=e.accountId,this.getCommodityOrderList()):e.code&&this.getUserInfo()}},{key:"validateHandler",value:function(e){this.validity=e.validity,this.valid=e.valid,console.log(e),console.log("validity",e.validity,e.valid,e.dirty,e.firstInvalidFieldIndex)}},{key:"getUserInfo",value:function(){var e=this,t=this.$route.query;if(t.code){var s=this["$createToast"]({time:0,txt:"数据获取中..."});s.show(),this.$store.dispatch("getCommodityUserInfo",{code:t.code}).then(function(t){t.success&&t.data.openid&&(e.openid=t.data.openid,e.getCommodityOrderList(),t.data.userInfo&&(e.userInfo=t.data.userInfo)),s.hide()})}else console.log("不是微信登陆")}},{key:"tabBarChange",value:function(e){this.page=1,this.repairList=[],this.isShowMore=!0,this.getCommodityOrderList()}},{key:"getCommodityOrderList",value:function(){var e=this,t=this["$createToast"]({time:0,txt:"数据获取中..."});t.show(),this.$store.dispatch("getCommodityOrderList",{businessId:this.businessId,page:this.page,ordertype:this.selectedLabelDefault,type:"staff"}).then(function(s){s.success&&(console.log(s.data.list),s.data.list.length>0?e.repairList=e.repairList.concat(s.data.list):e.isShowMore=!1),t.hide()})}},{key:"showMoreClick",value:function(){this.page++,this.getCommodityOrderList()}},{key:"updateRepairState",value:function(e){var t=this;this.$store.dispatch("updateCommodityOrderState",{out_trade_no:e}).then(function(e){e.success&&(t["$createDialog"]({type:"alert",content:"处理完成",icon:"cubeic-ok"}).show(),t.tabBarChange())})}},{key:"houseOptions",get:function(){return this.$store.state.houseList.forEach(function(e){e.value=e.id,e.text=e.account_info[0].name+" "+e.build_info[0].name+" "+e.unitNum+"单元"+e.floorNum+"层"+e.roomNum+"室"}),this.$store.state.houseList}},{key:"userInfo",get:function(){return this.$store.state.userInfo}}]),t}(l["c"]);Object(u["a"])([Object(l["b"])({default:"default value"})],p.prototype,"propB",void 0),p=Object(u["a"])([Object(l["a"])({components:{},filters:{getFormatDate:function(e){return new Date(e).getFullYear()+"年"+(new Date(e).getMonth()+1)+"月"+new Date(e).getDate()+"号"},getPhone:function(e){return e&&e.user_info?e.user_info[0].phone:""},getAddress:function(e){return e&&e.user_info?e.user_info[0].address:""}}})],p);var h=p,v=h,f=(s("8c72"),s("8795"),s("2877")),b=Object(f["a"])(v,a,i,!1,null,"54fd14ae",null);t["default"]=b.exports},"8c72":function(e,t,s){"use strict";var a=s("94c7"),i=s.n(a);i.a},"94c7":function(e,t,s){},c6a3:function(e,t,s){}}]);
//# sourceMappingURL=business-orderAdmin.fddf2b26.js.map