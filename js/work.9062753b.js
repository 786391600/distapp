(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["work"],{"0753":function(e,t,a){},"1d5d":function(e,t,a){},"2877e":function(e,t,a){},"319c":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"slide-banner"},[a("cube-slide",{attrs:{data:e.imgUrl}})],1)},s=[],n=(a("ac6a"),a("d225")),c=a("b0b4"),r=a("308d"),o=a("6bb5"),l=a("4e2b"),d=a("9ab4"),u=a("60a3"),p=function(e){function t(){return Object(n["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"imgUrl",get:function(){if(this.url&&"string"===typeof this.url)return[{image:this.url}];if(Array.isArray(this.url)){var e=[];return this.url.forEach(function(t){e.push({image:t})}),e}return[]}}]),t}(u["c"]);Object(d["a"])([Object(u["b"])({default:""})],p.prototype,"url",void 0),p=Object(d["a"])([Object(u["a"])({components:{},filters:{}})],p);var f=p,h=f,v=(a("5016"),a("72a9"),a("2877")),b=Object(v["a"])(h,i,s,!1,null,"2d55a1be",null);t["a"]=b.exports},5016:function(e,t,a){"use strict";var i=a("fc70"),s=a.n(i);s.a},"72a9":function(e,t,a){"use strict";var i=a("0753"),s=a.n(i);s.a},"77ba":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"orderAdmin"},[a("banner",{attrs:{url:e.bannerUrl||""}}),a("div",{staticClass:"swipe-wrapper"},[a("cube-tab-bar",{attrs:{data:e.tabBarList},on:{change:e.tabBarChange},model:{value:e.selectedLabelDefault,callback:function(t){e.selectedLabelDefault=t},expression:"selectedLabelDefault"}}),"unprocessed"===e.selectedLabelDefault?a("div",{staticClass:"repairList"},[a("div",{directives:[{name:"show",rawName:"v-show",value:"unprocessed"===e.selectedLabelDefault,expression:"selectedLabelDefault === 'unprocessed'"}],staticClass:"tip"},[e._v("此处展示排名前十的用户！")]),e._l(e.repairList,function(t,i){return a("div",{staticClass:"repairList-box"},[a("div",{staticClass:"rank-box"},[a("div",{staticClass:"left"},[a("span",[e._v(e._s(i+1))]),a("span",{staticClass:"head"},[a("img",{attrs:{src:t.headimgurl}})]),a("span",[e._v(e._s(t.nickname))]),a("span",{directives:[{name:"show",rawName:"v-show",value:0===i,expression:"index === 0"}]})]),a("div",{staticClass:"right"},[a("span",[e._v("邀请数量："+e._s(t.getHelpNum)+"人")])])])])})],2):e._e(),"processed"===e.selectedLabelDefault?a("div",{staticClass:"repairList"},[e._l(e.repairList,function(t,i){return a("div",{staticClass:"repairList-box"},[a("div",{staticClass:"rank-box"},[a("div",{staticClass:"left"},[a("span",{staticClass:"head"},[a("img",{attrs:{src:t.helpUserInfo.headimgurl}})]),a("span",[e._v(e._s(t.helpUserInfo.nickname))])]),a("div",{staticClass:"right"})])])}),e.isShowMore?a("div",{staticClass:"more",on:{click:e.showMoreClick}},[e._v("加载更多")]):e._e()],2):e._e(),e._m(0)],1),e._m(1),e.myInfo.nickname?a("div",{staticClass:"myInfo"},[a("div",{staticClass:"left"},[a("span",{staticClass:"head"},[a("img",{attrs:{src:e.weixinInfo.headimgurl}})]),a("span",[e._v(e._s(e.weixinInfo.nickname))]),a("span",[e._v("我的邀请："+e._s(e.myInfo.getHelpNum)+"人")]),a("span",{staticClass:"readBtn",on:{click:e.getActiveShareCode}},[e._v("邀请赚钱")])])]):e._e()],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"active-info"},[a("div",{staticClass:"active-title"},[e._v("活动规则")]),a("div",{staticClass:"active-info"},[a("p",[e._v("1.邀请同学参加寒假兼职")]),a("p",[e._v("2.兼职完成后按工时进行奖励")]),a("p",{staticStyle:{color:"red"}},[e._v("注：排行榜前三的同学有额外现金奖励！")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"oprate-btn"},[a("div",[e._v("寒假工报名")])])}],n=a("d225"),c=a("b0b4"),r=a("308d"),o=a("6bb5"),l=a("4e2b"),d=a("9ab4"),u=a("60a3"),p=a("319c"),f=function(e){function t(){var e;return Object(n["a"])(this,t),e=Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.redpackClick=!1,e.myInfo={},e.weixinInfo={},e.bannerUrl="https://s1.ax1x.com/2020/07/07/UF5e91.md.png",e.model={details:"",type:"type1"},e.houseId="",e.selectedLabelDefault="unprocessed",e.tabBarList=[{label:"排行榜",value:"unprocessed"},{label:"我的邀请",value:"processed"}],e.page=1,e.isShowMore=!0,e.repairList=[],e}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"activated",value:function(){this.$store.commit("SET_SESSION_ID","noSession"),this.pageInit()}},{key:"pageInit",value:function(){console.log("pageinit------------------");var e=this.$route.query;e.openid?(this.openid=e.openid,this.getActiveRankList()):e.code&&this.getUserInfo()}},{key:"validateHandler",value:function(e){this.validity=e.validity,this.valid=e.valid,console.log(e),console.log("validity",e.validity,e.valid,e.dirty,e.firstInvalidFieldIndex)}},{key:"getUserInfo",value:function(){var e=this,t=this.$route.query;if(t.code){var a=this["$createToast"]({time:0,txt:"数据获取中..."});a.show(),this.$store.dispatch("getCommodityUserInfo",{code:t.code}).then(function(t){t.success&&t.data.openid&&(e.openid=t.data.openid,e.getActiveRankList(),t.data.weixinInfo&&(console.log(t.data.weixinInfo,"0000000000000000000000"),e.$set(e,"weixinInfo",t.data.weixinInfo))),a.hide()})}else console.log("不是微信登陆")}},{key:"tabBarChange",value:function(e){this.page=1,this.repairList=[],this.isShowMore=!0,this.getActiveRankList()}},{key:"getActiveRankList",value:function(){var e=this,t=this["$createToast"]({time:0,txt:"数据获取中..."});t.show(),this.$store.dispatch("getActiveRankList",{activeId:"type1",openid:this.openid,searchType:this.selectedLabelDefault,page:this.page}).then(function(a){a.success&&(console.log(a.data.list),a.data.list.length>0?(e.repairList=e.repairList.concat(a.data.list),a.data.myData&&e.$set(e,"myInfo",a.data.myData),a.data.list.length<10?e.isShowMore=!1:e.isShowMore=!0):e.isShowMore=!1),t.hide()})}},{key:"showMoreClick",value:function(){this.page++,this.getActiveRankList()}},{key:"updateRepairState",value:function(e){var t=this;this.$store.dispatch("updateCommodityOrderState",{out_trade_no:e}).then(function(e){e.success&&(t["$createDialog"]({type:"alert",content:"处理完成",icon:"cubeic-ok"}).show(),t.tabBarChange())})}},{key:"sendredpackClick",value:function(){var e=this;this.redpackClick||(this.redpackClick=!0,this.$store.dispatch("sendredpack",{openid:this.openid}).then(function(t){t.success&&(e.redpackClick=!1,e.$set(e.myInfo,"getredpack",!0),e["$createDialog"]({type:"alert",content:"红包已发放，注意查收！",icon:"cubeic-ok"}).show())}))}},{key:"getActiveShareCode",value:function(){var e=this;this.$store.dispatch("getActiveShareCode",{openid:this.openid}).then(function(t){t.success&&(e.redpackClick=!1,e.$set(e.myInfo,"getredpack",!0),e.$createDialog({type:"alert",confirmBtn:{text:"我知道了",active:!0}},function(e){return[e("div",{class:{"my-title":!0},slot:"title"},[e("p","邀请同学扫码报名")]),e("img",{class:{"code-img":!0},attrs:{src:t.data.url},slot:"content"})]}).show())})}},{key:"userInfo",get:function(){return this.$store.state.userInfo}}]),t}(u["c"]);Object(d["a"])([Object(u["b"])({default:"default value"})],f.prototype,"propB",void 0),f=Object(d["a"])([Object(u["a"])({components:{banner:p["a"]},filters:{getFormatDate:function(e){return new Date(e).getFullYear()+"年"+(new Date(e).getMonth()+1)+"月"+new Date(e).getDate()+"号"},getPhone:function(e){return e&&e.user_info?e.user_info[0].phone:""},getAddress:function(e){return e&&e.user_info?e.user_info[0].address:""}}})],f);var h=f,v=h,b=(a("f5d2"),a("ff42"),a("9126"),a("2877")),g=Object(b["a"])(v,i,s,!1,null,"2c4d5b98",null);t["default"]=g.exports},9126:function(e,t,a){"use strict";var i=a("2877e"),s=a.n(i);s.a},cc21:function(e,t,a){},f5d2:function(e,t,a){"use strict";var i=a("cc21"),s=a.n(i);s.a},fc70:function(e,t,a){},ff42:function(e,t,a){"use strict";var i=a("1d5d"),s=a.n(i);s.a}}]);
//# sourceMappingURL=work.9062753b.js.map