(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["schoolAdmin"],{"0753":function(t,e,a){},"319c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slide-banner"},[a("cube-slide",{attrs:{data:t.imgUrl}})],1)},c=[],i=(a("ac6a"),a("d225")),s=a("b0b4"),o=a("308d"),l=a("6bb5"),r=a("4e2b"),u=a("9ab4"),b=a("60a3"),p=function(t){function e(){return Object(i["a"])(this,e),Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),Object(s["a"])(e,[{key:"imgUrl",get:function(){if(this.url&&"string"===typeof this.url)return[{image:this.url}];if(Array.isArray(this.url)){var t=[];return this.url.forEach(function(e){t.push({image:e})}),t}return[]}}]),e}(b["c"]);Object(u["a"])([Object(b["b"])({default:""})],p.prototype,"url",void 0),p=Object(u["a"])([Object(b["a"])({components:{},filters:{}})],p);var f=p,d=f,h=(a("5016"),a("72a9"),a("2877")),v=Object(h["a"])(d,n,c,!1,null,"2d55a1be",null);e["a"]=v.exports},"416e":function(t,e,a){},5016:function(t,e,a){"use strict";var n=a("fc70"),c=a.n(n);c.a},"6cbe":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"app-box"},[a("keep-alive",[a(t.selectedLabelDefault,{tag:"component"})],1)],1),a("div",{staticClass:"app-tab"},[a("cube-tab-bar",{on:{click:t.clickHandler,change:t.changeHandler},model:{value:t.selectedLabelDefault,callback:function(e){t.selectedLabelDefault=e},expression:"selectedLabelDefault"}},t._l(t.tabs,function(e,n){return a("cube-tab",{key:n,attrs:{label:e.value}},[a("div",[a("i",{class:["iconfont",e.icon],attrs:{slot:"icon"},slot:"icon"})]),a("div",{staticClass:"label"},[t._v(t._s(e.label))])])}),1)],1),a("pageView")],1)},c=[],i=a("d225"),s=a("b0b4"),o=a("308d"),l=a("6bb5"),r=a("4e2b"),u=a("9ab4"),b=a("60a3"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("h1",{staticClass:"school-title"},[t._v(t._s(t.schoolInfo.name))]),t._l(t.appList,function(e,n){return a("div",{key:n,staticClass:"app-con"},[a("div",{staticClass:"app-con-tit"},[t._v(t._s(e.title))]),a("div",{staticClass:"app-con-box"},t._l(e.list,function(e,n){return a("div",{key:n,staticClass:"app-block",on:{click:function(a){return t.appClick(e)}}},[a("div",{staticClass:"icon"},[a("i",{class:["iconfont",e.icon]})]),a("div",{staticClass:"label"},[t._v(t._s(e.label))])])}),0)])})],2)},f=[],d=a("319c"),h=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.sessionId="",t.appList=[{title:"基础配置",list:[{icon:"iconshangpin",label:"公告配置",path:"/schoolAdmin/noticeConfig"}]},{title:"接单配置",list:[{icon:"iconshangpin",label:"基础价格",path:"/schoolAdmin/priceConfig"}]}],t}return Object(r["a"])(e,t),Object(s["a"])(e,[{key:"mounted",value:function(){this.sessionId=this.$route.query.sessionId}},{key:"appClick",value:function(t){console.log(t,"pppppppppppp"),t.path&&this.$router.push({path:t.path,query:{}})}},{key:"schoolInfo",get:function(){return this.$store.state.schoolInfo}}]),e}(b["c"]);h=Object(u["a"])([Object(b["a"])({components:{banner:d["a"]}})],h);var v=h,g=v,j=(a("ea28"),a("2877")),O=Object(j["a"])(g,p,f,!1,null,"0abcbef4",null),y=O.exports,k=a("3a45"),m=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.selectedLabelDefault="appList",t.tabs=[{label:"系统配置",icon:"icon_yingyong",value:"appList"},{label:"成员管理",icon:"icon_gongzhonghao",value:"myconfig"},{label:"订单",icon:"iconzhangdanguanli",value:"order"}],t}return Object(r["a"])(e,t),Object(s["a"])(e,[{key:"clickHandler",value:function(t){console.log(t)}},{key:"changeHandler",value:function(t){}},{key:"mounted",value:function(){window.document.title=this.schoolInfo.name}},{key:"schoolInfo",get:function(){return this.$store.state.schoolInfo}}]),e}(b["c"]);m=Object(u["a"])([Object(b["a"])({components:{appList:y,pageView:k["a"]}})],m);var _=m,C=_,w=(a("adf1"),Object(j["a"])(C,n,c,!1,null,"bb5d67ae",null));e["default"]=w.exports},"6e38":function(t,e,a){},"72a9":function(t,e,a){"use strict";var n=a("0753"),c=a.n(n);c.a},adf1:function(t,e,a){"use strict";var n=a("416e"),c=a.n(n);c.a},b0b4:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var n=a("85f2"),c=a.n(n);function i(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),c()(t,n.key,n)}}function s(t,e,a){return e&&i(t.prototype,e),a&&i(t,a),t}},ea28:function(t,e,a){"use strict";var n=a("6e38"),c=a.n(n);c.a},fc70:function(t,e,a){}}]);
//# sourceMappingURL=schoolAdmin.d03e44ed.js.map