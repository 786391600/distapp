(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["businessManagement"],{"07e8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cube-page",class:t.type},[a("header",{staticClass:"header"},[a("h1",[t._v(t._s(t.title))]),a("i",{directives:[{name:"show",rawName:"v-show",value:t.isBack,expression:"isBack"}],staticClass:"cubeic-back",on:{click:t.back}}),a("div",{staticClass:"header-edit"},[t._t("edit")],2)]),a("div",{class:{wrapper:!0,isWhite:"white"===t.type}},[a("main",{staticClass:"content"},[t._t("content",[t._v(t._s(t.content))])],2)])])},o=[],i=a("d225"),s=a("b0b4"),c=a("308d"),r=a("6bb5"),u=a("4e2b"),l=a("9ab4"),h=a("60a3"),p=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"back",value:function(){this.$router.go(-1)}},{key:"created",value:function(){console.log("创建page ===")}}]),e}(h["c"]);Object(l["a"])([Object(h["b"])()],p.prototype,"msg",void 0),Object(l["a"])([Object(h["b"])({default:"",required:!0})],p.prototype,"title",void 0),Object(l["a"])([Object(h["b"])({default:""})],p.prototype,"type",void 0),Object(l["a"])([Object(h["b"])({default:""})],p.prototype,"desc",void 0),Object(l["a"])([Object(h["b"])({default:""})],p.prototype,"content",void 0),Object(l["a"])([Object(h["b"])({default:!0})],p.prototype,"isBack",void 0),p=Object(l["a"])([Object(h["a"])({})],p);var d=p,f=d,v=(a("81d2"),a("2877")),b=Object(v["a"])(f,n,o,!1,null,"0b48bd7c",null);e["a"]=b.exports},"35c0":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.visible?a("div",{staticClass:"edit-box"},[t._t("default")],2):t._e()])},o=[],i=a("d225"),s=a("b0b4"),c=a("308d"),r=a("6bb5"),u=a("4e2b"),l=a("9ab4"),h=a("60a3"),p=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"mounted",value:function(){}},{key:"hide",value:function(){this.$emit("update:visible",!1)}}]),e}(h["c"]);Object(l["a"])([Object(h["b"])({default:!1})],p.prototype,"visible",void 0),p=Object(l["a"])([Object(h["a"])({components:{}})],p);var d=p,f=d,v=(a("fa15"),a("2877")),b=Object(v["a"])(f,n,o,!1,null,"d5ca93a2",null);e["a"]=b.exports},"51f3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right-box"},t._l(t.list,function(e,n){return a("div",{key:n,staticClass:"box",on:{click:function(a){return t.boxClick(e.action)}}},[e.icon?a("i",{class:["iconfont",e.icon]}):a("span",[t._v(t._s(e.text))])])}),0)},o=[],i=a("d225"),s=a("b0b4"),c=a("308d"),r=a("6bb5"),u=a("4e2b"),l=a("9ab4"),h=a("60a3"),p=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"boxClick",value:function(t){this.$emit("click",t)}}]),e}(h["c"]);Object(l["a"])([Object(h["b"])()],p.prototype,"list",void 0),p=Object(l["a"])([h["a"]],p);var d=p,f=d,v=(a("b493"),a("2877")),b=Object(v["a"])(f,n,o,!1,null,"1bd23a4e",null);e["a"]=b.exports},"52b6":function(t,e,a){},8013:function(t,e,a){},"81d2":function(t,e,a){"use strict";var n=a("e5aa"),o=a.n(n);o.a},"8ede":function(t,e,a){"use strict";var n=a("8013"),o=a.n(n);o.a},a387:function(t,e,a){},ac36:function(t,e,a){"use strict";var n=a("52b6"),o=a.n(n);o.a},b493:function(t,e,a){"use strict";var n=a("a387"),o=a.n(n);o.a},c88e:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a("7618");a("3b2b"),a("a481");var o=function t(e){var a;if("object"===Object(n["a"])(e))if(null===e)a=null;else if(e instanceof Date)a=e;else if(e instanceof Array){a=[];for(var o=0,i=e.length;o<i;o++)a.push(t(e[o]))}else for(var s in a={},e)a[s]=t(e[s]);else a=e;return a}},dc11:function(t,e,a){"use strict";a.r(e);var n,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page",{attrs:{title:t.className}},[a("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"shop-list"},[t._l(t.shopList,function(e){return a("div",{key:e.id,staticClass:"shop-box"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(e.title))]),a("cube-switch",{on:{input:function(a){return t.openChange(e.open,e.id)}},model:{value:e.open,callback:function(a){t.$set(e,"open",a)},expression:"item.open"}},[t._v("\n            "+t._s(e.open?"运营中":"已打烊")+"\n          ")])],1),a("div",{staticClass:"oprate"},[a("span",{on:{click:function(a){return t.toMerchantStaff(e)}}},[t._v("店员管理")]),a("span",{on:{click:function(a){return t.toShopAdmin(e)}}},[t._v("店铺管理")])])])}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],on:{click:t.moreClick}},[t._v("查看更多")])],2),a("rightBox",{attrs:{list:t.oprateConfig},on:{click:t.boxClick}}),a("editBox",{attrs:{visible:t.showEditbox},on:{"update:visible":function(e){t.showEditbox=e}}},[a("addTag",{on:{cancel:function(e){t.showEditbox=!1}}})],1),a("page-view")],1)])},i=[],s=a("75fc"),c=a("d225"),r=a("b0b4"),u=a("308d"),l=a("6bb5"),h=a("4e2b"),p=a("9ab4"),d=a("60a3"),f=a("07e8"),v=a("3a45"),b=a("51f3"),g=a("35c0"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page",{attrs:{title:t.className,isBack:!1}},[a("span",{attrs:{slot:"edit"},on:{click:t.cancel},slot:"edit"},[t._v("取消")]),a("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[t._l(t.tagList,function(e,n){return a("div",{key:e.id,staticClass:"tag-box"},[a("span",{staticClass:"delete",on:{click:function(e){return t.deleteTag(n)}}},[t._v("删除")]),a("span",[a("cube-input",{attrs:{placeholder:"请输入标签名称",maxlength:"10"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"item.name"}})],1),a("span",{directives:[{name:"show",rawName:"v-show",value:n>0,expression:"index > 0"}],on:{click:function(e){return t.onUp(n)}}},[t._v("上移")]),a("span",{directives:[{name:"show",rawName:"v-show",value:n<t.tagList.length-1,expression:"index < tagList.length - 1"}],on:{click:function(e){return t.onDown(n)}}},[t._v("下移")])])}),a("div",{staticClass:"tag-box add-tag"},[a("span",{on:{click:t.addTag}},[t._v("添加标签")]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.saveState,expression:"saveState"}],on:{click:t.saveTag}},[t._v("保存")])])],2)])},y=[],O=a("c88e"),j=new Uint8Array(16);function k(){if(!n&&(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(j)}var w=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function x(t){return"string"===typeof t&&w.test(t)}for(var _=x,C=[],L=0;L<256;++L)C.push((L+256).toString(16).substr(1));function T(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(C[t[e+0]]+C[t[e+1]]+C[t[e+2]]+C[t[e+3]]+"-"+C[t[e+4]]+C[t[e+5]]+"-"+C[t[e+6]]+C[t[e+7]]+"-"+C[t[e+8]]+C[t[e+9]]+"-"+C[t[e+10]]+C[t[e+11]]+C[t[e+12]]+C[t[e+13]]+C[t[e+14]]+C[t[e+15]]).toLowerCase();if(!_(a))throw TypeError("Stringified UUID is invalid");return a}var $=T;function S(t,e,a){t=t||{};var n=t.random||(t.rng||k)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){a=a||0;for(var o=0;o<16;++o)e[a+o]=n[o];return e}return $(n)}var I=S,E=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.className="标签管理",t.showBtn=!1,t.saveState=!1,t.oprateConfig=[{text:"添加",action:"add"}],t.tagList=[],t}return Object(h["a"])(e,t),Object(r["a"])(e,[{key:"tagListChange",value:function(){this.saveState=!0}},{key:"commonTagListChange",value:function(t){this.tagList!==t&&(this.tagList=Object(O["a"])(t))}},{key:"addTag",value:function(){var t={id:I(),name:""};this.tagList.push(t)}},{key:"deleteTag",value:function(t){this.tagList.splice(t,1)}},{key:"onUp",value:function(t){this.moveTag("up",t)}},{key:"onDown",value:function(t){this.moveTag("down",t)}},{key:"saveTag",value:function(){var t=this,e=this.tagList.filter(function(t){return t.name&&t.id}),a="tagList";this.$store.dispatch("updateSchoolInfo",{schoolId:this.schoolInfo.id,type:a,value:e}).then(function(n){n.success&&(t.showToastType(),t.$store.commit("SET_SCHOOL_INFO_BY_TYPE",{type:a,value:e}),t.$nextTick(function(){t.saveState=!1,t.cancel()}))})}},{key:"showToastType",value:function(){var t=this.$createToast({txt:"保存成功",type:"correct"});t.show()}},{key:"moveTag",value:function(t,e){var a=0;a="up"===t?e-1:e+1;var n=Object(O["a"])(this.tagList[e]),o=Object(O["a"])(this.tagList[a]);this.$set(this.tagList,e,o),this.$set(this.tagList,a,n)}},{key:"cancel",value:function(){this.$emit("cancel")}},{key:"mounted",value:function(){console.log(I()),console.log("uuid==================v4")}},{key:"schoolInfo",get:function(){return this.$store.state.schoolInfo}},{key:"commonTagList",get:function(){return this.$store.state.schoolInfo.tagList||[]}}]),e}(d["c"]);Object(p["a"])([Object(d["d"])("tagList",{deep:!0})],E.prototype,"tagListChange",null),Object(p["a"])([Object(d["d"])("commonTagList",{immediate:!0,deep:!0})],E.prototype,"commonTagListChange",null),E=Object(p["a"])([Object(d["a"])({components:{page:f["a"],pageView:v["a"],rightBox:b["a"]}})],E);var N=E,B=N,M=(a("ac36"),a("2877")),V=Object(M["a"])(B,m,y,!1,null,"a53e16ec",null),D=V.exports,A=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.className="商家管理",t.shopList=[],t.showMore=!1,t.showEditbox=!1,t.searchForm={title:"",page:1,schoolId:t.schoolInfo.id},t.oprateConfig=[{text:"标签",action:"tag"},{text:"添加",action:"add"}],t}return Object(h["a"])(e,t),Object(r["a"])(e,[{key:"getSchoolShopList",value:function(){var t=this;this.$store.dispatch("getSchoolShopList",this.searchForm).then(function(e){if(e.success){var a=[];e.data.length<20?t.showMore=!1:t.showMore=!0;var n=t.filterData(e.data);a=1===t.searchForm.page?n:[t.shopList].concat(Object(s["a"])(n)),t.$set(t,"shopList",a)}})}},{key:"filterData",value:function(t){var e=t.map(function(t,e){var a=t;return a.open=!t.close,a});return e}},{key:"mounted",value:function(){this.getSchoolShopList()}},{key:"openChange",value:function(t,e){var a=this,n=t?"开启成功":"关闭成功";this.$store.dispatch("updateShopInfo",{shopId:e,type:"close",value:!t}).then(function(t){t.success&&a.showToastType(n)})}},{key:"showToastType",value:function(t){var e=this.$createToast({txt:t,type:"correct"});e.show()}},{key:"boxClick",value:function(t){"tag"===t&&(this.showEditbox=!0)}},{key:"moreClick",value:function(){this.searchForm.page++,this.getSchoolShopList()}},{key:"toMerchantStaff",value:function(t){this.$router.push({name:"merchantStaff",query:{shopId:t.id,shopName:t.title}})}},{key:"toShopAdmin",value:function(t){console.log("去店铺管理"),this.$router.push({name:"shopAdmin",query:{shopId:t.id,shopName:t.title}})}},{key:"schoolInfo",get:function(){return this.$store.state.schoolInfo}}]),e}(d["c"]);A=Object(p["a"])([Object(d["a"])({components:{page:f["a"],pageView:v["a"],rightBox:b["a"],editBox:g["a"],addTag:D}})],A);var F=A,R=F,U=(a("8ede"),Object(M["a"])(R,o,i,!1,null,"9b02e27a",null));e["default"]=U.exports},e5aa:function(t,e,a){},e835:function(t,e,a){},fa15:function(t,e,a){"use strict";var n=a("e835"),o=a.n(n);o.a}}]);
//# sourceMappingURL=businessManagement.cb1c05d6.js.map