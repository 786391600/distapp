(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41343070"],{"07e8":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cube-page",class:t.type},[s("header",{staticClass:"header"},[s("h1",[t._v(t._s(t.title))]),s("i",{directives:[{name:"show",rawName:"v-show",value:t.isBack,expression:"isBack"}],staticClass:"cubeic-back",on:{click:t.back}}),s("div",{staticClass:"header-edit"},[t._t("edit")],2)]),s("div",{class:{wrapper:!0,isWhite:"white"===t.type}},[s("main",{staticClass:"content"},[t._t("content",[t._v(t._s(t.content))])],2)])])},i=[],o=s("d225"),n=s("b0b4"),c=s("308d"),l=s("6bb5"),r=s("4e2b"),d=s("9ab4"),u=s("60a3"),p=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),Object(n["a"])(e,[{key:"back",value:function(){this.$router.go(-1)}},{key:"created",value:function(){console.log("创建page ===")}}]),e}(u["c"]);Object(d["a"])([Object(u["b"])()],p.prototype,"msg",void 0),Object(d["a"])([Object(u["b"])({default:"",required:!0})],p.prototype,"title",void 0),Object(d["a"])([Object(u["b"])({default:""})],p.prototype,"type",void 0),Object(d["a"])([Object(u["b"])({default:""})],p.prototype,"desc",void 0),Object(d["a"])([Object(u["b"])({default:""})],p.prototype,"content",void 0),Object(d["a"])([Object(u["b"])({default:!0})],p.prototype,"isBack",void 0),p=Object(d["a"])([Object(u["a"])({})],p);var v=p,b=v,f=(s("2de2"),s("2877")),h=Object(f["a"])(b,a,i,!1,null,"75d201ee",null);e["a"]=h.exports},"1f5e":function(t,e,s){"use strict";var a=s("7861"),i=s.n(a);i.a},"2de2":function(t,e,s){"use strict";var a=s("4867"),i=s.n(a);i.a},3126:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("page",{attrs:{isBack:!1,title:t.selectedLabel}},[s("div",{staticClass:"content-box",attrs:{slot:"content"},slot:"content"},[s("cube-tab-bar",{ref:"tabNav",attrs:{"show-slider":"","use-transition":!0,data:t.tabLabels},model:{value:t.selectedLabel,callback:function(e){t.selectedLabel=e},expression:"selectedLabel"}}),s("div",{staticClass:"tab-slide-container"},[s("cube-slide",{ref:"slide",attrs:{loop:t.loop,"initial-index":t.initialIndex,"auto-play":t.autoPlay,"show-dots":t.showDots,options:t.slideOptions},on:{scroll:t.scroll,change:t.changePage}},[s("cube-slide-item",[s("div",{staticClass:"search"},[s("cube-input",{attrs:{placeholder:"请输入取单号"},model:{value:t.oddId,callback:function(e){t.oddId=e},expression:"oddId"}}),s("cube-button",{attrs:{inline:!0},on:{click:t.searchOddId}},[t._v("搜索")])],1),s("cube-scroll",{ref:"contentScroll",attrs:{data:t.workList,options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},[t._l(t.workList,function(e,a){return s("div",{key:a,staticClass:"box-scroll-card"},["work"===e.type?s("div",{staticClass:"order-card"},[s("div",{staticClass:"title",staticStyle:{"padding-bottom":"0"}},[t._v("\n                  订单编号："+t._s(e.out_trade_no)+"\n                ")]),s("div",{staticClass:"title"},[s("div",{staticClass:"time"},[s("i",{staticClass:"iconfont icon-shijian"}),s("span",[t._v("任务时间：")]),"selflifting"!==e.dtType?s("span",{staticClass:"time-con"},[t._v(t._s(t.getDate(e.timestamp,!0)))]):t._e(),"selflifting"==e.dtType?s("span",{staticClass:"time-con"},[t._v(t._s(e.takefoodTime))]):t._e()]),s("div",{staticClass:"fee"},[s("span",{staticClass:"fee-title"},[t._v("金额：")]),s("span",{staticClass:"num"},[t._v(t._s(e.orderInfo.taskFee))]),s("span",[t._v("元")])])]),s("div",{staticClass:"content"},[s("div",{staticClass:"content-left"},[s("div",{staticClass:"work-line"}),s("div",{staticClass:"work-line"})]),s("div",{staticClass:"content-right"},[s("div",{staticClass:"work-address"},[s("cube-button",{attrs:{primary:!0,inline:!0,light:!0,outline:!0}},[t._v("联系用户")])],1),s("div",{staticClass:"work-info"},[t._v("\n                      "+t._s(e.orderInfo?e.orderInfo.taskContent:"")+"\n                    ")]),e&&e.orderInfo&&e.orderInfo.address?s("div",{staticClass:"work-address"},[t._v("\n                      "+t._s(e.orderInfo.address.address)+"-"+t._s(e.orderInfo.address.schoolName)+"\n                    ")]):t._e()])]),s("div",{staticClass:"oprate"})]):s("div",{staticClass:"order-card"},[s("div",{staticClass:"title",staticStyle:{"padding-bottom":"0"}},[t._v("\n                  订单编号："+t._s(e.out_trade_no)+"\n                ")]),s("div",{staticClass:"title"},[s("div",{staticClass:"time"},[s("i",{staticClass:"iconfont icon-shijian"}),s("span",[t._v("任务时间：")]),s("span",{staticClass:"time-con"},[t._v(t._s(t.getDate(e.timestamp,!0)))])]),s("div",{staticClass:"fee"},[s("span",{staticClass:"fee-title"},[t._v("订单价格：")]),s("span",{staticClass:"num"},[t._v(t._s(e.fee))]),s("span",[t._v("元")])])]),s("div",{staticClass:"content"},[s("div",{staticClass:"content-left"},[s("div",{staticClass:"work-line"}),s("div",{staticClass:"work-line"})]),s("div",{staticClass:"content-right"},[s("div",{staticClass:"work-address"},[s("cube-button",{attrs:{primary:!0,inline:!0,light:!0,outline:!0},on:{click:function(s){return t.contactUser(e)}}},[t._v("联系用户")])],1),s("div",{staticClass:"work-info"},[t._v("\n                      "+t._s(e.orderInfo?e.orderInfo.taskContent:"")+"\n                    ")]),s("div",{staticClass:"work-info"},[s("cube-button",{attrs:{primary:!0,inline:!0,light:!0,outline:!0},on:{click:function(s){return t.contactDel(e.executorUnionid)}}},[t._v("联系配送员")])],1),"selflifting"===e.dtType?s("div",{staticClass:"work-info"},[s("span",[t._v(t._s(e.body))]),s("cube-button",{attrs:{primary:!0,inline:!0,light:!0,outline:!0},on:{click:function(s){return t.workRefound(e.out_trade_no)}}},[t._v("退单")])],1):t._e(),s("div",{staticClass:"work-info"},[t._v("\n                      取单号："+t._s(e.oddId)+"\n                    ")]),s("div",{staticClass:"work-info goods"},[s("span",{staticClass:"name"},[s("span",[t._v(t._s(e.body))])]),t._l(e.goods,function(e,a){return s("span",{key:a},[t._v(t._s(e.name)+"✕"+t._s(e.num))])})],2),e&&e.orderInfo&&e.orderInfo.address?s("div",{staticClass:"work-address"},[t._v("\n                      "+t._s(e.address.schoolName)+"-"+t._s(e.address.address)+"\n                    ")]):t._e()])]),s("div",{staticClass:"oprate"})])])}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.workList.length<=0,expression:"workList.length <= 0"}],staticClass:"work-box"},[t._v("暂无记录")])],2)],1),s("cube-slide-item",[s("cube-scroll",{ref:"contentScroll",attrs:{data:t.workList,options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},[s("div",{staticClass:"work-box"},[t._v("暂无记录")])])],1),s("cube-slide-item",[s("cube-scroll",{ref:"contentScroll",attrs:{data:t.workList,options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},[s("div",{staticClass:"work-box"},[t._v("暂无记录")])])],1)],1)],1)],1)])},i=[],o=s("d225"),n=s("b0b4"),c=s("308d"),l=s("6bb5"),r=s("4e2b"),d=(s("20d6"),s("9ab4")),u=s("60a3"),p=s("07e8"),v=s("3a45"),b=s("51f3");function f(t,e){if(t.findIndex)return t.findIndex(e);var s=-1;return t.some(function(t,a,i){var o=e.call(this,t,a,i);if(o)return s=a,o}),s}var h=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.selectedLabel="跑单任务",t.disabled=!1,t.loop=!1,t.autoPlay=!1,t.showDots=!1,t.oddId="",t.slideOptions={listenScroll:!0,probeType:3,directionLockThreshold:0},t.scrollOptions={directionLockThreshold:0},t.tabLabels=[{label:"跑单任务"},{label:"车票任务"},{label:"招工任务"}],t.workOptions={page:1,showMore:!0},t.workList=[{}],t.options={pullDownRefresh:{threshold:60,stopTime:1e3,txt:"更新成功"},pullUpLoad:!0},t.secondStop=30,t}return Object(r["a"])(e,t),Object(n["a"])(e,[{key:"changePage",value:function(t){this.selectedLabel=this.tabLabels[t].label,console.log(t)}},{key:"onPullingDown",value:function(){this.refresh()}},{key:"onPullingUp",value:function(){console.log("上拉"),this.workOptions.showMore&&(this.workOptions.page=this.workOptions.page+1,this.getWorkStatusList())}},{key:"onImgLoad",value:function(){var t=this.$refs.contentScroll;t.scroll.beforePullDown&&t.refresh()}},{key:"refresh",value:function(){0===this.initialIndex&&(this.options.pullUpLoad=!0,this.workOptions.page=1,this.getWorkStatusList())}},{key:"getWorkStatusList",value:function(){var t=this;this.$store.dispatch("getWorkExecuteList",{schoolId:this.schoolInfo.id,page:this.workOptions.page,limit:10}).then(function(e){e.success&&(e.data.length<10&&(t.workOptions.showMore=!1,t.options.pullUpLoad=!1),1===t.workOptions.page?t.$set(t,"workList",e.data):t.$set(t,"workList",t.workList.concat(e.data)),t.$refs.contentScroll.scrollTo(0,t.secondStop,300))})}},{key:"selectedLabelChange",value:function(){this.refresh()}},{key:"mounted",value:function(){this.refresh()}},{key:"getDateText",value:function(t){if("now"===t)return"立即开始";var e=["今天","明天","后天"],s=new Date;if(t-s.getTime()<0)return"过期任务";var a=new Date(t),i=a.getDate()-s.getDate(),o="早上",n=a.getHours(),c=a.getMinutes();return o=n<12?"上午":n>=12&&n<18?"下午":"晚上",e[i]+" - "+o+(n<10?"0"+n:n)+":"+(c<10?"0"+c:c)}},{key:"getDate",value:function(t,e){var s=new Date(t),a=s.getFullYear(),i=s.getMonth()+1,o=s.getDate(),n=s.getHours(),c=s.getMinutes(),l=s.getSeconds();return i=i<10?"0"+i:i,o=o<10?"0"+o:o,n=n<10?"0"+n:n,c=c<10?"0"+c:c,l=l<10?"0"+l:l,e?a+"-"+i+"-"+o+" "+n+":"+c+":"+l:a+"-"+i+"-"+o}},{key:"contactUser",value:function(t){if(t&&t.address&&t.address.phone){var e=t.address.phone;this.$createDialog({type:"confirm",title:"联系配送员",content:"号码："+e,confirmBtn:{text:"点击拨打",active:!0,disabled:!1,href:"tel://"+e},cancelBtn:{text:"取消",active:!1,disabled:!1,href:"javascript:;"}}).show()}else{var s=this.$createToast({time:1e3,txt:"号码异常",type:"error"});s.show()}}},{key:"contactDel",value:function(t){var e=this;this.$store.dispatch("getDeliveryPhone",{unionid:t}).then(function(t){if(t.success){var s=t&&t.data&&t.data.phone?t.data.phone:"";if(!s){var a=e.$createToast({time:1e3,txt:"号码异常",type:"error"});return void a.show()}e.$createDialog({type:"confirm",title:"联系配送员",content:"号码："+s,confirmBtn:{text:"点击拨打",active:!0,disabled:!1,href:"tel://"+s},cancelBtn:{text:"取消",active:!1,disabled:!1,href:"javascript:;"}}).show()}})}},{key:"searchOddId",value:function(){var t=this;this.oddId?this.$store.dispatch("searchOrderByOddId",{oddId:this.oddId,schoolId:this.schoolInfo.id}).then(function(e){e.success&&(e.data?t.$set(t,"workList",[e.data]):t.$set(t,"workList",[]))}):this.getWorkStatusList()}},{key:"workRefound",value:function(t){var e=this;t&&this.$store.dispatch("workRefound",{out_trade_no:t}).then(function(t){t.success?e.$createDialog({type:"confirm",title:"提示",content:"退单成功！",confirmBtn:{text:"确认",active:!0,disabled:!1}}).show():e.$createDialog({type:"confirm",title:"退单失败",content:t.message,confirmBtn:{text:"确认",active:!0,disabled:!1}}).show()})}},{key:"schoolInfo",get:function(){return this.$store.state.schoolInfo}},{key:"initialIndex",get:function(){var t=this,e=0;return e=f(this.tabLabels,function(e){return e.label===t.selectedLabel}),e}}]),e}(u["c"]);Object(d["a"])([Object(u["d"])("selectedLabel")],h.prototype,"selectedLabelChange",null),h=Object(d["a"])([Object(u["a"])({components:{page:p["a"],pageView:v["a"],rightBox:b["a"]}})],h);var k=h,g=k,w=(s("1f5e"),s("7997"),s("2877")),_=Object(w["a"])(g,a,i,!1,null,"a651d454",null);e["default"]=_.exports},4867:function(t,e,s){},"51f3":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"right-box"},t._l(t.list,function(e,a){return s("div",{key:a,staticClass:"box",on:{click:function(s){return t.boxClick(e.action)}}},[e.icon?s("i",{class:["iconfont",e.icon]}):s("span",[t._v(t._s(e.text))])])}),0)},i=[],o=s("d225"),n=s("b0b4"),c=s("308d"),l=s("6bb5"),r=s("4e2b"),d=s("9ab4"),u=s("60a3"),p=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),Object(n["a"])(e,[{key:"boxClick",value:function(t){this.$emit("click",t)}}]),e}(u["c"]);Object(d["a"])([Object(u["b"])()],p.prototype,"list",void 0),p=Object(d["a"])([u["a"]],p);var v=p,b=v,f=(s("b493"),s("2877")),h=Object(f["a"])(b,a,i,!1,null,"1bd23a4e",null);e["a"]=h.exports},7861:function(t,e,s){},7997:function(t,e,s){"use strict";var a=s("e198"),i=s.n(a);i.a},a387:function(t,e,s){},b493:function(t,e,s){"use strict";var a=s("a387"),i=s.n(a);i.a},e198:function(t,e,s){}}]);
//# sourceMappingURL=chunk-41343070.59791f42.js.map