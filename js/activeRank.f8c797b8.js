(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["activeRank"],{"010d":function(t,e,a){"use strict";var s=a("6645"),i=a.n(s);i.a},"0753":function(t,e,a){},"319c":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slide-banner"},[a("cube-slide",{attrs:{data:t.imgUrl}})],1)},i=[],n=(a("ac6a"),a("d225")),r=a("b0b4"),c=a("308d"),o=a("6bb5"),l=a("4e2b"),u=a("9ab4"),d=a("60a3"),p=function(t){function e(){return Object(n["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(r["a"])(e,[{key:"imgUrl",get:function(){if(this.url&&"string"===typeof this.url)return[{image:this.url}];if(Array.isArray(this.url)){var t=[];return this.url.forEach(function(e){t.push({image:e})}),t}return[]}}]),e}(d["c"]);Object(u["a"])([Object(d["b"])({default:""})],p.prototype,"url",void 0),p=Object(u["a"])([Object(d["a"])({components:{},filters:{}})],p);var v=p,f=v,h=(a("5016"),a("72a9"),a("2877")),b=Object(h["a"])(f,s,i,!1,null,"2d55a1be",null);e["a"]=b.exports},3280:function(t,e,a){"use strict";var s=a("5df5"),i=a.n(s);i.a},5016:function(t,e,a){"use strict";var s=a("fc70"),i=a.n(s);i.a},5841:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"orderAdmin"},[a("banner",{attrs:{url:t.bannerUrl||""}}),a("div",{staticClass:"swipe-wrapper"},[a("cube-tab-bar",{attrs:{data:t.tabBarList},on:{change:t.tabBarChange},model:{value:t.selectedLabelDefault,callback:function(e){t.selectedLabelDefault=e},expression:"selectedLabelDefault"}}),"unprocessed"===t.selectedLabelDefault?a("div",{staticClass:"repairList"},[a("div",{directives:[{name:"show",rawName:"v-show",value:"unprocessed"===t.selectedLabelDefault,expression:"selectedLabelDefault === 'unprocessed'"}],staticClass:"tip"},[t._v("此处展示排名前十的用户！")]),t._l(t.repairList,function(e,s){return a("div",{staticClass:"repairList-box"},[a("div",{staticClass:"rank-box"},[a("div",{staticClass:"left"},[a("span",[t._v(t._s(s+1))]),a("span",{staticClass:"head"},[a("img",{attrs:{src:e.headimgurl}})]),a("span",[t._v(t._s(e.nickname))])]),a("div",{staticClass:"right"},[a("span",[t._v("邀请数量："+t._s(e.getHelpNum)+"人")])])])])})],2):t._e(),"processed"===t.selectedLabelDefault?a("div",{staticClass:"repairList"},[t._l(t.repairList,function(e,s){return a("div",{staticClass:"repairList-box"},[a("div",{staticClass:"rank-box"},[a("div",{staticClass:"left"},[a("span",{staticClass:"head"},[a("img",{attrs:{src:e.helpUserInfo.headimgurl}})]),a("span",[t._v(t._s(e.helpUserInfo.nickname))])]),a("div",{staticClass:"right"})])])}),t.isShowMore?a("div",{staticClass:"more",on:{click:t.showMoreClick}},[t._v("加载更多")]):t._e()],2):t._e(),t._m(0),a("div",{staticClass:"active-bus"},[a("div",{staticClass:"active-title"},[t._v("活动合作商家")]),a("div",{staticClass:"active-info"},[a("div",[a("p",[t._v("商务合作")]),a("p",[t._v("手机号："),a("a",{staticStyle:{color:"red"},attrs:{href:"tel:13934691550"}},[t._v("13934691550"),a("span",[t._v("(点击拨打)")])])])])])])],1),t.myInfo.nickname?a("div",{staticClass:"myInfo"},[a("div",{staticClass:"left"},[a("span",{staticClass:"head"},[a("img",{attrs:{src:t.myInfo.headimgurl}})]),a("span",[t._v(t._s(t.myInfo.nickname))]),a("span",[t._v("我的邀请："+t._s(t.myInfo.getHelpNum)+"人")]),t.myInfo.getredpack?a("span",{staticClass:"readBtn"},[t._v("奖品已领取")]):t._e(),!t.myInfo.getredpack&&t.myInfo.getHelpNum>=12?a("span",{staticClass:"readBtn",on:{click:t.sendredpackClick}},[t._v("领奖品")]):t._e(),t.myInfo.getHelpNum<12?a("span",{staticClass:"readBtn"},[t._v("未达领取条件")]):t._e()])]):t._e()],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"active-info"},[a("div",{staticClass:"active-title"},[t._v("活动规则")]),a("div",{staticClass:"active-info"},[a("p",[t._v("欢迎参与0元领取价值29.9元的厨房四件套，此活动为牛开超市官方举办，真实有效，请放心参与！")]),a("p",[t._v("1.邀请【12】位好友助力成功，即可免费领取厨房四件套。")]),a("p",[t._v("2.助力成功请添加客服微信：nkcs8888，进行奖品领取哦！")]),a("p",{staticStyle:{color:"red"}},[t._v("注：获取奖品的用户限本地线下领取！（不邮寄）")]),a("p",{staticStyle:{color:"red"}},[t._v("取关用户不计入助力数量，请勿取关")]),a("p",{staticStyle:{color:"red"}},[t._v("活动满200领取用户，助力通道将会关闭，数量有限，请抓紧时间参与~")]),a("p",[a("img",{attrs:{src:"http://www.beijixiong.club/banner1.png"}})])])])}],n=(a("ac6a"),a("d225")),r=a("b0b4"),c=a("308d"),o=a("6bb5"),l=a("4e2b"),u=a("9ab4"),d=a("60a3"),p=a("319c"),v=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.redpackClick=!1,t.myInfo={},t.bannerUrl="http://www.beijixiong.club/banner.png",t.model={details:"",type:"type1"},t.houseId="",t.selectedLabelDefault="unprocessed",t.tabBarList=[{label:"排行榜",value:"unprocessed"},{label:"我的邀请",value:"processed"}],t.page=1,t.isShowMore=!0,t.repairList=[],t}return Object(l["a"])(e,t),Object(r["a"])(e,[{key:"activated",value:function(){this.$store.commit("SET_SESSION_ID","noSession"),this.pageInit()}},{key:"pageInit",value:function(){var t=this.$route.query;t.openid?(this.openid=t.openid,this.getActiveRankList()):t.code&&this.getUserInfo()}},{key:"validateHandler",value:function(t){this.validity=t.validity,this.valid=t.valid,console.log(t),console.log("validity",t.validity,t.valid,t.dirty,t.firstInvalidFieldIndex)}},{key:"getUserInfo",value:function(){var t=this,e=this.$route.query;if(e.code){var a=this["$createToast"]({time:0,txt:"数据获取中..."});a.show(),this.$store.dispatch("getCommodityUserInfo",{code:e.code}).then(function(e){e.success&&e.data.openid&&(t.openid=e.data.openid,t.getActiveRankList(),e.data.userInfo&&(t.userInfo=e.data.userInfo)),a.hide()})}else console.log("不是微信登陆")}},{key:"tabBarChange",value:function(t){this.page=1,this.repairList=[],this.isShowMore=!0,this.getActiveRankList()}},{key:"getActiveRankList",value:function(){var t=this,e=this["$createToast"]({time:0,txt:"数据获取中..."});e.show(),this.$store.dispatch("getActiveRankList",{activeId:"type1",openid:this.openid,searchType:this.selectedLabelDefault,page:this.page}).then(function(a){a.success&&(console.log(a.data.list),a.data.list.length>0?(t.repairList=t.repairList.concat(a.data.list),a.data.myData&&t.$set(t,"myInfo",a.data.myData),a.data.list.length<10?t.isShowMore=!1:t.isShowMore=!0):t.isShowMore=!1),e.hide()})}},{key:"showMoreClick",value:function(){this.page++,this.getActiveRankList()}},{key:"updateRepairState",value:function(t){var e=this;this.$store.dispatch("updateCommodityOrderState",{out_trade_no:t}).then(function(t){t.success&&(e["$createDialog"]({type:"alert",content:"处理完成",icon:"cubeic-ok"}).show(),e.tabBarChange())})}},{key:"sendredpackClick",value:function(){this.$createImagePreview({preventDefault:!1,imgs:["http://www.beijixiong.club/banner2.png"]}).show()}},{key:"houseOptions",get:function(){return this.$store.state.houseList.forEach(function(t){t.value=t.id,t.text=t.account_info[0].name+" "+t.build_info[0].name+" "+t.unitNum+"单元"+t.floorNum+"层"+t.roomNum+"室"}),this.$store.state.houseList}},{key:"userInfo",get:function(){return this.$store.state.userInfo}}]),e}(d["c"]);Object(u["a"])([Object(d["b"])({default:"default value"})],v.prototype,"propB",void 0),v=Object(u["a"])([Object(d["a"])({components:{banner:p["a"]},filters:{getFormatDate:function(t){return new Date(t).getFullYear()+"年"+(new Date(t).getMonth()+1)+"月"+new Date(t).getDate()+"号"},getPhone:function(t){return t&&t.user_info?t.user_info[0].phone:""},getAddress:function(t){return t&&t.user_info?t.user_info[0].address:""}}})],v);var f=v,h=f,b=(a("010d"),a("3280"),a("2877")),g=Object(b["a"])(h,s,i,!1,null,"1be947be",null);e["default"]=g.exports},"5df5":function(t,e,a){},6645:function(t,e,a){},"72a9":function(t,e,a){"use strict";var s=a("0753"),i=a.n(s);i.a},fc70:function(t,e,a){}}]);
//# sourceMappingURL=activeRank.f8c797b8.js.map