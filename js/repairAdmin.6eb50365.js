(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["repairAdmin"],{"540b":function(e,t,a){"use strict";var s=a("ad86"),i=a.n(s);i.a},"9d84":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"repair"},[a("div",{staticClass:"swipe-wrapper"},[a("cube-tab-bar",{attrs:{data:e.tabBarList},on:{change:e.tabBarChange},model:{value:e.selectedLabelDefault,callback:function(t){e.selectedLabelDefault=t},expression:"selectedLabelDefault"}}),a("div",{staticClass:"repairList"},[e._l(e.repairList,function(t){return a("div",{staticClass:"repairList-box"},[a("div",{staticClass:"repairList-box-head"},[a("span",[e._v(e._s(e._f("getFormatDate")(t.time)))]),"processed"===e.selectedLabelDefault?a("span",{staticClass:"processed"},[e._v("已完成")]):a("span",{staticClass:"unprocessed"},[e._v("未完成")])]),a("div",{staticClass:"repairList-box-box"},[a("div",[a("span",{staticClass:"title"},[e._v("报修类型")]),a("span",[e._v(e._s(e._f("getRepairType")(t.type)))])]),a("div",[a("span",{staticClass:"title"},[e._v("报修人")]),a("span",[e._v(e._s(t.name))])]),a("div",[a("span",{staticClass:"title"},[e._v("报修详情")]),a("span",[e._v(e._s(t.details))])]),a("div",[a("span",{staticClass:"title"},[e._v("报修地址")]),a("span",[e._v(e._s(t.address))])])]),a("cube-button",{directives:[{name:"show",rawName:"v-show",value:"unprocessed"===e.selectedLabelDefault,expression:'selectedLabelDefault === "unprocessed"'}],staticClass:"repairBtn",on:{click:function(a){return e.updateRepairState(t.id)}}},[e._v("确认完成")])],1)}),e.isShowMore?a("div",{staticClass:"more",on:{click:e.showMoreClick}},[e._v("加载更多")]):e._e(),e.isShowMore?e._e():a("div",{staticClass:"more"},[e._v("没有数据了")])],2)],1)])},i=[],o=(a("ac6a"),a("a481"),a("d225")),n=a("b0b4"),r=a("308d"),c=a("6bb5"),l=a("4e2b"),u=a("9ab4"),d=a("60a3"),p=a("fdab"),h=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.model={details:"",type:"type1"},e.houseId="",e.selectedLabelDefault="unprocessed",e.tabBarList=[{label:"未处理",value:"unprocessed"},{label:"已处理",value:"processed"}],e.page=1,e.isShowMore=!0,e.repairList=[],e}return Object(l["a"])(t,e),Object(n["a"])(t,[{key:"activated",value:function(){this.pageInit()}},{key:"validateHandler",value:function(e){this.validity=e.validity,this.valid=e.valid,console.log(e),console.log("validity",e.validity,e.valid,e.dirty,e.firstInvalidFieldIndex)}},{key:"getBindingInfo",value:function(){var e=this,t=this.$route.query;if(t.code){var a=this["$createToast"]({time:0,txt:"数据获取中..."});a.show(),this.$store.dispatch("getCodeInfo",{code:t.code}).then(function(t){t.success&&(t.data.openid?(e.openid=t.data.openid,e.$router.replace({path:"/login",query:{openid:t.data.openid,jump:"/home"}})):t.data.sessionId&&(e.$store.commit("SET_SESSION_ID",t.data.sessionId),e.$store.commit("SET_USER_INFO",t.data.userInfo),e.getHouseList())),a.hide()})}else console.log("不是微信登陆")}},{key:"pageInit",value:function(){var e=this.$route.query;this.$store.state.sessionId?this.tabBarChange():e.code&&!this.$store.state.sessionId&&this.getBindingInfo()}},{key:"tabBarChange",value:function(e){this.page=1,this.repairList=[],this.isShowMore=!0,this.getRepairList()}},{key:"getHouseInfo",value:function(){var e=this,t={};return this.$store.state.houseList.forEach(function(a){a.id===e.houseId&&(t=a)}),t}},{key:"getRepairList",value:function(){var e=this,t=this["$createToast"]({time:0,txt:"数据获取中..."});t.show(),this.$store.dispatch("getRepairList",{page:this.page,type:this.selectedLabelDefault}).then(function(a){a.success&&(a.data.list.length>0?e.repairList=e.repairList.concat(a.data.list):e.isShowMore=!1),t.hide()})}},{key:"showMoreClick",value:function(){this.page++,this.getRepairList()}},{key:"updateRepairState",value:function(e){var t=this;this.$store.dispatch("updateRepairState",{id:e}).then(function(e){e.success&&(t["$createDialog"]({type:"alert",content:"处理完成",icon:"cubeic-ok"}).show(),t.tabBarChange())})}},{key:"houseOptions",get:function(){return this.$store.state.houseList.forEach(function(e){e.value=e.id,e.text=e.account_info[0].name+" "+e.build_info[0].name+" "+e.unitNum+"单元"+e.floorNum+"层"+e.roomNum+"室"}),this.$store.state.houseList}},{key:"userInfo",get:function(){return this.$store.state.userInfo}}]),t}(d["c"]);Object(u["a"])([Object(d["b"])({default:"default value"})],h.prototype,"propB",void 0),h=Object(u["a"])([Object(d["a"])({components:{HelloWorld:p["a"]},filters:{getFormatDate:function(e){return new Date(e).getFullYear()+"年"+(new Date(e).getMonth()+1)+"月"+new Date(e).getDate()+"号"},getRepairType:function(e){return"type1"===e?"开锁服务":"type2"===e?"公共报修":"type3"===e?"个人报修":"其他报修"}}})],h);var v=h,f=v,b=(a("540b"),a("d4c7"),a("2877")),g=Object(b["a"])(f,s,i,!1,null,"1b509ea3",null);t["default"]=g.exports},ad86:function(e,t,a){},d4c7:function(e,t,a){"use strict";var s=a("ee8d"),i=a.n(s);i.a},ee8d:function(e,t,a){}}]);
//# sourceMappingURL=repairAdmin.6eb50365.js.map