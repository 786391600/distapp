(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b2a7ef8"],{"07e8":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cube-page",class:t.type},[s("header",{staticClass:"header"},[s("h1",[t._v(t._s(t.title))]),s("i",{directives:[{name:"show",rawName:"v-show",value:t.isBack,expression:"isBack"}],staticClass:"cubeic-back",on:{click:t.back}}),s("div",{staticClass:"header-edit"},[t._t("edit")],2)]),s("div",{class:{wrapper:!0,isWhite:"white"===t.type}},[s("section",{directives:[{name:"show",rawName:"v-show",value:t.desc,expression:"desc"}],staticClass:"desc"},[t._t("desc",[t._v(t._s(t.desc))])],2),s("main",{staticClass:"content"},[t._t("content",[t._v(t._s(t.content))])],2)])])},i=[],n=s("d225"),o=s("b0b4"),c=s("308d"),l=s("6bb5"),r=s("4e2b"),d=s("9ab4"),u=s("60a3"),b=function(t){function e(){return Object(n["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),Object(o["a"])(e,[{key:"back",value:function(){this.$router.back()}}]),e}(u["c"]);Object(d["a"])([Object(u["b"])()],b.prototype,"msg",void 0),Object(d["a"])([Object(u["b"])({default:"",required:!0})],b.prototype,"title",void 0),Object(d["a"])([Object(u["b"])({default:""})],b.prototype,"type",void 0),Object(d["a"])([Object(u["b"])({default:""})],b.prototype,"desc",void 0),Object(d["a"])([Object(u["b"])({default:""})],b.prototype,"content",void 0),Object(d["a"])([Object(u["b"])({default:!0})],b.prototype,"isBack",void 0),b=Object(d["a"])([u["a"]],b);var p=b,v=p,f=(s("724a"),s("2877")),h=Object(f["a"])(v,a,i,!1,null,"758695be",null);e["a"]=h.exports},1987:function(t,e,s){"use strict";var a=s("598d"),i=s.n(a);i.a},"2f6b":function(t,e,s){},3126:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("page",{attrs:{isBack:!1,title:t.selectedLabel}},[s("div",{staticClass:"content-box",attrs:{slot:"content"},slot:"content"},[s("cube-tab-bar",{ref:"tabNav",attrs:{"show-slider":"","use-transition":!0,data:t.tabLabels},model:{value:t.selectedLabel,callback:function(e){t.selectedLabel=e},expression:"selectedLabel"}}),s("div",{staticClass:"tab-slide-container"},[s("cube-slide",{ref:"slide",attrs:{loop:t.loop,"initial-index":t.initialIndex,"auto-play":t.autoPlay,"show-dots":t.showDots,options:t.slideOptions},on:{scroll:t.scroll,change:t.changePage}},[s("cube-slide-item",[s("cube-scroll",{ref:"contentScroll",attrs:{data:t.workList,options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},t._l(t.workList,function(e,a){return s("div",{key:a,staticClass:"box-scroll-card"},["work"===e.type?s("div",{staticClass:"order-card"},[s("div",{staticClass:"title",staticStyle:{"padding-bottom":"0"}},[t._v("\n                  订单编号："+t._s(e.out_trade_no)+"\n                ")]),s("div",{staticClass:"title"},[s("div",{staticClass:"time"},[s("i",{staticClass:"iconfont icon-shijian"}),s("span",[t._v("任务时间：")]),s("span",{staticClass:"time-con"},[t._v(t._s(t.getDate(e.timestamp,!0)))])]),s("div",{staticClass:"fee"},[s("span",{staticClass:"fee-title"},[t._v("结算金额：")]),s("span",{staticClass:"num"},[t._v(t._s(e.orderInfo.taskFee))]),s("span",[t._v("元")])])]),s("div",{staticClass:"content"},[s("div",{staticClass:"content-left"},[s("div",{staticClass:"work-line"}),s("div",{staticClass:"work-line"})]),s("div",{staticClass:"content-right"},[s("div",{staticClass:"work-address"},[s("cube-button",{attrs:{primary:!0,inline:!0,light:!0,outline:!0}},[t._v("联系用户")])],1),s("div",{staticClass:"work-info"},[t._v("\n                      "+t._s(e.orderInfo.taskContent)+"\n                    ")]),s("div",{staticClass:"work-info"},[t._v("\n                      执行人: "+t._s(e.executor.nickname)+"\n                    ")]),e&&e.orderInfo&&e.orderInfo.address?s("div",{staticClass:"work-address"},[t._v("\n                      "+t._s(e.orderInfo.address.address)+"-"+t._s(e.orderInfo.address.schoolName)+"\n                    ")]):t._e()])]),s("div",{staticClass:"oprate"})]):s("div",{staticClass:"order-card"},[s("div",{staticClass:"title",staticStyle:{"padding-bottom":"0"}},[t._v("\n                  订单编号："+t._s(e.out_trade_no)+"\n                ")]),s("div",{staticClass:"title"},[s("div",{staticClass:"time"},[s("i",{staticClass:"iconfont icon-shijian"}),s("span",[t._v("任务时间：")]),s("span",{staticClass:"time-con"},[t._v(t._s(t.getDate(e.timestamp,!0)))])]),s("div",{staticClass:"fee"},[s("span",{staticClass:"fee-title"},[t._v("订单价格：")]),s("span",{staticClass:"num"},[t._v(t._s(e.fee))]),s("span",[t._v("元")])])]),s("div",{staticClass:"content"},[s("div",{staticClass:"content-left"},[s("div",{staticClass:"work-line"}),s("div",{staticClass:"work-line"})]),s("div",{staticClass:"content-right"},[s("div",{staticClass:"work-address"},[s("cube-button",{attrs:{primary:!0,inline:!0,light:!0,outline:!0}},[t._v("联系用户")])],1),s("div",{staticClass:"work-info"},[t._v("\n                      "+t._s(e.orderInfo.taskContent)+"\n                    ")]),s("div",{staticClass:"work-info goods"},[s("span",{staticClass:"name"},[s("span",[t._v(t._s(e.body))])]),t._l(e.goods,function(e,a){return s("span",{key:a},[t._v(t._s(e.name)+"✕"+t._s(e.num))])})],2),e&&e.orderInfo&&e.orderInfo.address?s("div",{staticClass:"work-address"},[t._v("\n                      "+t._s(e.address.schoolName)+"-"+t._s(e.address.address)+"\n                    ")]):t._e()])]),s("div",{staticClass:"oprate"})])])}),0)],1),s("cube-slide-item",[s("cube-scroll",{ref:"contentScroll",attrs:{data:t.workList,options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},[s("div",{staticClass:"work-box"},[t._v("暂无记录")])])],1),s("cube-slide-item",[s("cube-scroll",{ref:"contentScroll",attrs:{data:t.workList,options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},[s("div",{staticClass:"work-box"},[t._v("暂无记录")])])],1)],1)],1)],1)])},i=[],n=s("d225"),o=s("b0b4"),c=s("308d"),l=s("6bb5"),r=s("4e2b"),d=(s("20d6"),s("9ab4")),u=s("60a3"),b=s("07e8"),p=s("3a45"),v=s("51f3");function f(t,e){if(t.findIndex)return t.findIndex(e);var s=-1;return t.some(function(t,a,i){var n=e.call(this,t,a,i);if(n)return s=a,n}),s}var h=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.selectedLabel="跑单任务",t.disabled=!1,t.loop=!1,t.autoPlay=!1,t.showDots=!1,t.slideOptions={listenScroll:!0,probeType:3,directionLockThreshold:0},t.scrollOptions={directionLockThreshold:0},t.tabLabels=[{label:"跑单任务"},{label:"车票任务"},{label:"招工任务"}],t.workOptions={page:1,showMore:!0},t.workList=[{}],t.options={pullDownRefresh:{threshold:60,stopTime:1e3,txt:"更新成功"},pullUpLoad:!0},t.secondStop=30,t}return Object(r["a"])(e,t),Object(o["a"])(e,[{key:"changePage",value:function(t){this.selectedLabel=this.tabLabels[t].label,console.log(t)}},{key:"onPullingDown",value:function(){this.refresh()}},{key:"onPullingUp",value:function(){console.log("上拉"),this.workOptions.showMore&&(this.workOptions.page=this.workOptions.page+1,this.getWorkStatusList())}},{key:"onImgLoad",value:function(){var t=this.$refs.contentScroll;t.scroll.beforePullDown&&t.refresh()}},{key:"refresh",value:function(){0===this.initialIndex&&(this.options.pullUpLoad=!0,this.workOptions.page=1,this.getWorkStatusList())}},{key:"getWorkStatusList",value:function(){var t=this;this.$store.dispatch("getWorkExecuteList",{schoolId:this.schoolInfo.id,page:this.workOptions.page,limit:10}).then(function(e){e.success&&(e.data.length<10&&(t.workOptions.showMore=!1,t.options.pullUpLoad=!1),1===t.workOptions.page?t.$set(t,"workList",e.data):t.$set(t,"workList",t.workList.concat(e.data)),t.$refs.contentScroll.scrollTo(0,t.secondStop,300))})}},{key:"selectedLabelChange",value:function(){this.refresh()}},{key:"mounted",value:function(){this.refresh()}},{key:"getDateText",value:function(t){if("now"===t)return"立即开始";var e=["今天","明天","后天"],s=new Date;if(t-s.getTime()<0)return"过期任务";var a=new Date(t),i=a.getDate()-s.getDate(),n="早上",o=a.getHours(),c=a.getMinutes();return n=o<12?"上午":o>=12&&o<18?"下午":"晚上",e[i]+" - "+n+(o<10?"0"+o:o)+":"+(c<10?"0"+c:c)}},{key:"getDate",value:function(t,e){var s=new Date(t),a=s.getFullYear(),i=s.getMonth()+1,n=s.getDate(),o=s.getHours(),c=s.getMinutes(),l=s.getSeconds();return i=i<10?"0"+i:i,n=n<10?"0"+n:n,o=o<10?"0"+o:o,c=c<10?"0"+c:c,l=l<10?"0"+l:l,e?a+"-"+i+"-"+n+" "+o+":"+c+":"+l:a+"-"+i+"-"+n}},{key:"schoolInfo",get:function(){return this.$store.state.schoolInfo}},{key:"initialIndex",get:function(){var t=this,e=0;return e=f(this.tabLabels,function(e){return e.label===t.selectedLabel}),e}}]),e}(u["c"]);Object(d["a"])([Object(u["d"])("selectedLabel")],h.prototype,"selectedLabelChange",null),h=Object(d["a"])([Object(u["a"])({components:{page:b["a"],pageView:p["a"],rightBox:v["a"]}})],h);var k=h,g=k,w=(s("1987"),s("7997"),s("2877")),_=Object(w["a"])(g,a,i,!1,null,"6ed7ac50",null);e["default"]=_.exports},"51f3":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"right-box"},t._l(t.list,function(e,a){return s("div",{key:a,staticClass:"box",on:{click:function(s){return t.boxClick(e.action)}}},[e.icon?s("i",{class:["iconfont",e.icon]}):s("span",[t._v(t._s(e.text))])])}),0)},i=[],n=s("d225"),o=s("b0b4"),c=s("308d"),l=s("6bb5"),r=s("4e2b"),d=s("9ab4"),u=s("60a3"),b=function(t){function e(){return Object(n["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),Object(o["a"])(e,[{key:"boxClick",value:function(t){this.$emit("click",t)}}]),e}(u["c"]);Object(d["a"])([Object(u["b"])()],b.prototype,"list",void 0),b=Object(d["a"])([u["a"]],b);var p=b,v=p,f=(s("b493"),s("2877")),h=Object(f["a"])(v,a,i,!1,null,"1bd23a4e",null);e["a"]=h.exports},"598d":function(t,e,s){},"724a":function(t,e,s){"use strict";var a=s("2f6b"),i=s.n(a);i.a},7997:function(t,e,s){"use strict";var a=s("e198"),i=s.n(a);i.a},a387:function(t,e,s){},b493:function(t,e,s){"use strict";var a=s("a387"),i=s.n(a);i.a},e198:function(t,e,s){}}]);
//# sourceMappingURL=chunk-1b2a7ef8.cf064600.js.map