(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["activeRank"],{"0753":function(e,t,a){},"319c":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"slide-banner"},[a("cube-slide",{attrs:{data:e.imgUrl}})],1)},i=[],n=(a("ac6a"),a("d225")),r=a("b0b4"),o=a("308d"),c=a("6bb5"),l=a("4e2b"),u=a("9ab4"),d=a("60a3"),h=function(e){function t(){return Object(n["a"])(this,t),Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(r["a"])(t,[{key:"imgUrl",get:function(){if(this.url&&"string"===typeof this.url)return[{image:this.url}];if(Array.isArray(this.url)){var e=[];return this.url.forEach(function(t){e.push({image:t})}),e}return[]}}]),t}(d["c"]);Object(u["a"])([Object(d["b"])({default:""})],h.prototype,"url",void 0),h=Object(u["a"])([Object(d["a"])({components:{},filters:{}})],h);var p=h,f=p,v=(a("5016"),a("72a9"),a("2877")),b=Object(v["a"])(f,s,i,!1,null,"2d55a1be",null);t["a"]=b.exports},3280:function(e,t,a){"use strict";var s=a("5df5"),i=a.n(s);i.a},"38d7":function(e,t,a){},5016:function(e,t,a){"use strict";var s=a("fc70"),i=a.n(s);i.a},5841:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"orderAdmin"},[a("banner",{attrs:{url:e.bannerUrl||""}}),a("div",{staticClass:"swipe-wrapper"},[a("cube-tab-bar",{attrs:{data:e.tabBarList},on:{change:e.tabBarChange},model:{value:e.selectedLabelDefault,callback:function(t){e.selectedLabelDefault=t},expression:"selectedLabelDefault"}}),"unprocessed"===e.selectedLabelDefault?a("div",{staticClass:"repairList"},[a("div",{directives:[{name:"show",rawName:"v-show",value:"unprocessed"===e.selectedLabelDefault,expression:"selectedLabelDefault === 'unprocessed'"}],staticClass:"tip"},[e._v("此处展示排名前十的用户！")]),e._l(e.repairList,function(t,s){return a("div",{staticClass:"repairList-box"},[a("div",{staticClass:"rank-box"},[a("div",{staticClass:"left"},[a("span",[e._v(e._s(s+1))]),a("span",{staticClass:"head"},[a("img",{attrs:{src:t.headimgurl}})]),a("span",[e._v(e._s(t.nickname))]),a("span",{directives:[{name:"show",rawName:"v-show",value:0===s,expression:"index === 0"}]},[a("img",{staticClass:"prize",attrs:{src:"https://s1.ax1x.com/2020/07/05/USvL5Q.th.jpg"}})])]),a("div",{staticClass:"right"},[a("span",[e._v("邀请数量："+e._s(t.getHelpNum))])])])])})],2):e._e(),"processed"===e.selectedLabelDefault?a("div",{staticClass:"repairList"},[e._l(e.repairList,function(t,s){return a("div",{staticClass:"repairList-box"},[a("div",{staticClass:"rank-box"},[a("div",{staticClass:"left"},[a("span",{staticClass:"head"},[a("img",{attrs:{src:t.helpUserInfo.headimgurl}})]),a("span",[e._v(e._s(t.helpUserInfo.nickname))])]),a("div",{staticClass:"right"})])])}),e.isShowMore?a("div",{staticClass:"more",on:{click:e.showMoreClick}},[e._v("加载更多")]):e._e()],2):e._e()],1)],1)},i=[],n=(a("ac6a"),a("d225")),r=a("b0b4"),o=a("308d"),c=a("6bb5"),l=a("4e2b"),u=a("9ab4"),d=a("60a3"),h=a("319c"),p=function(e){function t(){var e;return Object(n["a"])(this,t),e=Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.bannerUrl="https://s1.ax1x.com/2020/07/05/USHiLQ.md.png",e.model={details:"",type:"type1"},e.houseId="",e.selectedLabelDefault="unprocessed",e.tabBarList=[{label:"排行榜",value:"unprocessed"},{label:"我的邀请",value:"processed"}],e.page=1,e.isShowMore=!0,e.repairList=[],e}return Object(l["a"])(t,e),Object(r["a"])(t,[{key:"activated",value:function(){this.$store.commit("SET_SESSION_ID","noSession"),this.pageInit()}},{key:"pageInit",value:function(){var e=this.$route.query;e.openid?(this.openid=e.openid,this.getActiveRankList()):e.code&&this.getUserInfo()}},{key:"validateHandler",value:function(e){this.validity=e.validity,this.valid=e.valid,console.log(e),console.log("validity",e.validity,e.valid,e.dirty,e.firstInvalidFieldIndex)}},{key:"getUserInfo",value:function(){var e=this,t=this.$route.query;if(t.code){var a=this["$createToast"]({time:0,txt:"数据获取中..."});a.show(),this.$store.dispatch("getCommodityUserInfo",{code:t.code}).then(function(t){t.success&&t.data.openid&&(e.openid=t.data.openid,e.getActiveRankList(),t.data.userInfo&&(e.userInfo=t.data.userInfo)),a.hide()})}else console.log("不是微信登陆")}},{key:"tabBarChange",value:function(e){this.page=1,this.repairList=[],this.isShowMore=!0,this.getActiveRankList()}},{key:"getActiveRankList",value:function(){var e=this,t=this["$createToast"]({time:0,txt:"数据获取中..."});t.show(),this.openid="oJ-T_0irr1zac2cWKuSmRDp-xWWM",this.$store.dispatch("getActiveRankList",{activeId:"type1",openid:this.openid,searchType:this.selectedLabelDefault,page:this.page}).then(function(a){a.success&&(console.log(a.data.list),a.data.list.length>0?(e.repairList=e.repairList.concat(a.data.list),a.data.list.length<10?e.isShowMore=!1:e.isShowMore=!0):e.isShowMore=!1),t.hide()})}},{key:"showMoreClick",value:function(){this.page++,this.getActiveRankList()}},{key:"updateRepairState",value:function(e){var t=this;this.$store.dispatch("updateCommodityOrderState",{out_trade_no:e}).then(function(e){e.success&&(t["$createDialog"]({type:"alert",content:"处理完成",icon:"cubeic-ok"}).show(),t.tabBarChange())})}},{key:"houseOptions",get:function(){return this.$store.state.houseList.forEach(function(e){e.value=e.id,e.text=e.account_info[0].name+" "+e.build_info[0].name+" "+e.unitNum+"单元"+e.floorNum+"层"+e.roomNum+"室"}),this.$store.state.houseList}},{key:"userInfo",get:function(){return this.$store.state.userInfo}}]),t}(d["c"]);Object(u["a"])([Object(d["b"])({default:"default value"})],p.prototype,"propB",void 0),p=Object(u["a"])([Object(d["a"])({components:{banner:h["a"]},filters:{getFormatDate:function(e){return new Date(e).getFullYear()+"年"+(new Date(e).getMonth()+1)+"月"+new Date(e).getDate()+"号"},getPhone:function(e){return e&&e.user_info?e.user_info[0].phone:""},getAddress:function(e){return e&&e.user_info?e.user_info[0].address:""}}})],p);var f=p,v=f,b=(a("d8eb"),a("3280"),a("2877")),g=Object(b["a"])(v,s,i,!1,null,"f2e44f84",null);t["default"]=g.exports},"5df5":function(e,t,a){},"72a9":function(e,t,a){"use strict";var s=a("0753"),i=a.n(s);i.a},d8eb:function(e,t,a){"use strict";var s=a("38d7"),i=a.n(s);i.a},fc70:function(e,t,a){}}]);
//# sourceMappingURL=activeRank.c01588cc.js.map