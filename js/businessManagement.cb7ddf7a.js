(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["businessManagement"],{"07e8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cube-page",class:t.type},[a("header",{staticClass:"header"},[a("h1",[t._v(t._s(t.title))]),a("i",{directives:[{name:"show",rawName:"v-show",value:t.isBack,expression:"isBack"}],staticClass:"cubeic-back",on:{click:t.back}}),a("div",{staticClass:"header-edit"},[t._t("edit")],2)]),a("div",{class:{wrapper:!0,isWhite:"white"===t.type}},[a("main",{staticClass:"content"},[t._t("content",[t._v(t._s(t.content))])],2)])])},o=[],i=a("d225"),s=a("b0b4"),c=a("308d"),r=a("6bb5"),u=a("4e2b"),l=a("9ab4"),b=a("60a3"),f=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"back",value:function(){this.$router.go(-1)}},{key:"created",value:function(){console.log("创建page ===")}}]),e}(b["c"]);Object(l["a"])([Object(b["b"])()],f.prototype,"msg",void 0),Object(l["a"])([Object(b["b"])({default:"",required:!0})],f.prototype,"title",void 0),Object(l["a"])([Object(b["b"])({default:""})],f.prototype,"type",void 0),Object(l["a"])([Object(b["b"])({default:""})],f.prototype,"desc",void 0),Object(l["a"])([Object(b["b"])({default:""})],f.prototype,"content",void 0),Object(l["a"])([Object(b["b"])({default:!0})],f.prototype,"isBack",void 0),f=Object(l["a"])([Object(b["a"])({})],f);var p=f,h=p,d=(a("beaf"),a("2877")),v=Object(d["a"])(h,n,o,!1,null,"40de0fef",null);e["a"]=v.exports},"35c0":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.visible?a("div",{staticClass:"edit-box"},[t._t("default")],2):t._e()])},o=[],i=a("d225"),s=a("b0b4"),c=a("308d"),r=a("6bb5"),u=a("4e2b"),l=a("9ab4"),b=a("60a3"),f=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"mounted",value:function(){}},{key:"hide",value:function(){this.$emit("update:visible",!1)}}]),e}(b["c"]);Object(l["a"])([Object(b["b"])({default:!1})],f.prototype,"visible",void 0),f=Object(l["a"])([Object(b["a"])({components:{}})],f);var p=f,h=p,d=(a("fa15"),a("2877")),v=Object(d["a"])(h,n,o,!1,null,"d5ca93a2",null);e["a"]=v.exports},4969:function(t,e,a){},"51f3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right-box"},t._l(t.list,function(e,n){return a("div",{key:n,staticClass:"box",on:{click:function(a){return t.boxClick(e.action)}}},[e.icon?a("i",{class:["iconfont",e.icon]}):a("span",[t._v(t._s(e.text))])])}),0)},o=[],i=a("d225"),s=a("b0b4"),c=a("308d"),r=a("6bb5"),u=a("4e2b"),l=a("9ab4"),b=a("60a3"),f=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"boxClick",value:function(t){this.$emit("click",t)}}]),e}(b["c"]);Object(l["a"])([Object(b["b"])()],f.prototype,"list",void 0),f=Object(l["a"])([b["a"]],f);var p=f,h=p,d=(a("b493"),a("2877")),v=Object(d["a"])(h,n,o,!1,null,"1bd23a4e",null);e["a"]=v.exports},7043:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{class:{block:t.block,"text-btn":!0},on:{click:t.onClick}},[t._t("default")],2)},o=[],i=a("d225"),s=a("b0b4"),c=a("308d"),r=a("6bb5"),u=a("4e2b"),l=a("9ab4"),b=a("60a3"),f=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"onClick",value:function(){this.$emit("click")}}]),e}(b["c"]);Object(l["a"])([Object(b["b"])({default:!1})],f.prototype,"block",void 0),f=Object(l["a"])([Object(b["a"])({})],f);var p=f,h=p,d=(a("ad5e"),a("2877")),v=Object(d["a"])(h,n,o,!1,null,"6e5ba166",null);e["a"]=v.exports},"7cba":function(t,e,a){"use strict";var n=a("4969"),o=a.n(n);o.a},a387:function(t,e,a){},ad5e:function(t,e,a){"use strict";var n=a("e029"),o=a.n(n);o.a},b491:function(t,e,a){},b493:function(t,e,a){"use strict";var n=a("a387"),o=a.n(n);o.a},ba66:function(t,e,a){"use strict";var n=a("d9a7"),o=a.n(n);o.a},beaf:function(t,e,a){"use strict";var n=a("b491"),o=a.n(n);o.a},c88e:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a("7618");a("3b2b"),a("a481");var o=function t(e){var a;if("object"===Object(n["a"])(e))if(null===e)a=null;else if(e instanceof Date)a=e;else if(e instanceof Array){a=[];for(var o=0,i=e.length;o<i;o++)a.push(t(e[o]))}else for(var s in a={},e)a[s]=t(e[s]);else a=e;return a}},d9a7:function(t,e,a){},dc11:function(t,e,a){"use strict";a.r(e);var n,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page",{attrs:{title:t.className}},[a("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"shop-list"},[t._l(t.shopList,function(e){return a("div",{key:e.id,staticClass:"shop-box"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(e.title)),a("span",{class:{"title-state":!0,open:e.open}},[t._v(t._s(e.open?"运营中":"已打烊"))])]),a("cube-switch",{on:{input:function(a){return t.openChange(e.open,e.id)}},model:{value:e.open,callback:function(a){t.$set(e,"open",a)},expression:"item.open"}})],1),a("div",{staticClass:"oprate"},[a("div",{staticClass:"btn",on:{click:function(a){return t.toMerchantStaff(e)}}},[t._v("店员管理")]),a("div",{staticClass:"btn",on:{click:function(a){return t.toShopAdmin(e)}}},[t._v("店铺管理")]),a("div",{staticClass:"btn",on:{click:function(a){return t.toShopAdmin(e)}}},[t._v("费用管理")])])])}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],on:{click:t.moreClick}},[t._v("查看更多")])],2),a("rightBox",{attrs:{list:t.oprateConfig},on:{click:t.boxClick}}),a("editBox",{attrs:{visible:t.showEditbox},on:{"update:visible":function(e){t.showEditbox=e}}},[a("addTag",{on:{cancel:function(e){t.showEditbox=!1}}})],1),a("page-view")],1)])},i=[],s=a("75fc"),c=a("d225"),r=a("b0b4"),u=a("308d"),l=a("6bb5"),b=a("4e2b"),f=a("9ab4"),p=a("60a3"),h=a("07e8"),d=a("3a45"),v=a("51f3"),g=a("35c0"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page",{attrs:{title:t.className,isBack:!1}},[a("div",{staticClass:"edit",attrs:{slot:"edit"},slot:"edit"},[a("span",{staticClass:"btn cancel",on:{click:t.cancel}},[t._v("取消")]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.saveState,expression:"saveState"}],staticClass:"btn",on:{click:t.saveTag}},[t._v("保存")])]),a("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[t._l(t.tagList,function(e,n){return a("div",{key:e.id,staticClass:"tag-box"},[a("span",{staticClass:"delete",on:{click:function(e){return t.deleteTag(n)}}},[t._v("删除")]),a("span",[a("cube-input",{attrs:{placeholder:"请输入标签名称",maxlength:"10"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"item.name"}})],1),a("span",{directives:[{name:"show",rawName:"v-show",value:n>0,expression:"index > 0"}],on:{click:function(e){return t.onUp(n)}}},[t._v("上移")]),a("span",{directives:[{name:"show",rawName:"v-show",value:n<t.tagList.length-1,expression:"index < tagList.length - 1"}],on:{click:function(e){return t.onDown(n)}}},[t._v("下移")])])}),a("div",{staticClass:"tag-box add-tag"},[a("textButton",{on:{click:t.addTag}},[t._v("+添加标签")])],1)],2)])},y=[],j=a("c88e"),O=new Uint8Array(16);function k(){if(!n&&(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(O)}var w=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function x(t){return"string"===typeof t&&w.test(t)}for(var C=x,_=[],L=0;L<256;++L)_.push((L+256).toString(16).substr(1));function $(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(_[t[e+0]]+_[t[e+1]]+_[t[e+2]]+_[t[e+3]]+"-"+_[t[e+4]]+_[t[e+5]]+"-"+_[t[e+6]]+_[t[e+7]]+"-"+_[t[e+8]]+_[t[e+9]]+"-"+_[t[e+10]]+_[t[e+11]]+_[t[e+12]]+_[t[e+13]]+_[t[e+14]]+_[t[e+15]]).toLowerCase();if(!C(a))throw TypeError("Stringified UUID is invalid");return a}var T=$;function S(t,e,a){t=t||{};var n=t.random||(t.rng||k)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){a=a||0;for(var o=0;o<16;++o)e[a+o]=n[o];return e}return T(n)}var E=S,I=a("7043"),B=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.className="标签管理",t.showBtn=!1,t.saveState=!1,t.oprateConfig=[{text:"添加",action:"add"}],t.tagList=[],t}return Object(b["a"])(e,t),Object(r["a"])(e,[{key:"tagListChange",value:function(){this.saveState=!0}},{key:"commonTagListChange",value:function(t){this.tagList!==t&&(this.tagList=Object(j["a"])(t))}},{key:"addTag",value:function(){var t={id:E(),name:""};this.tagList.push(t)}},{key:"deleteTag",value:function(t){this.tagList.splice(t,1)}},{key:"onUp",value:function(t){this.moveTag("up",t)}},{key:"onDown",value:function(t){this.moveTag("down",t)}},{key:"saveTag",value:function(){var t=this,e=this.tagList.filter(function(t){return t.name&&t.id}),a="tagList";this.$store.dispatch("updateSchoolInfo",{schoolId:this.schoolInfo.id,type:a,value:e}).then(function(n){n.success&&(t.showToastType(),t.$store.commit("SET_SCHOOL_INFO_BY_TYPE",{type:a,value:e}),t.$nextTick(function(){t.saveState=!1,t.cancel()}))})}},{key:"showToastType",value:function(){var t=this.$createToast({txt:"保存成功",type:"correct"});t.show()}},{key:"moveTag",value:function(t,e){var a=0;a="up"===t?e-1:e+1;var n=Object(j["a"])(this.tagList[e]),o=Object(j["a"])(this.tagList[a]);this.$set(this.tagList,e,o),this.$set(this.tagList,a,n)}},{key:"cancel",value:function(){this.$emit("cancel")}},{key:"mounted",value:function(){console.log(E()),console.log("uuid==================v4")}},{key:"schoolInfo",get:function(){return this.$store.state.schoolInfo}},{key:"commonTagList",get:function(){return this.$store.state.schoolInfo.tagList||[]}}]),e}(p["c"]);Object(f["a"])([Object(p["d"])("tagList",{deep:!0})],B.prototype,"tagListChange",null),Object(f["a"])([Object(p["d"])("commonTagList",{immediate:!0,deep:!0})],B.prototype,"commonTagListChange",null),B=Object(f["a"])([Object(p["a"])({components:{page:h["a"],pageView:d["a"],rightBox:v["a"],textButton:I["a"]}})],B);var N=B,M=N,R=(a("ba66"),a("2877")),V=Object(R["a"])(M,m,y,!1,null,"bc131b06",null),A=V.exports,D=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.className="商家管理",t.shopList=[],t.showMore=!1,t.showEditbox=!1,t.searchForm={title:"",page:1,schoolId:t.schoolInfo.id},t.oprateConfig=[{text:"标签",action:"tag"},{text:"添加",action:"add"}],t}return Object(b["a"])(e,t),Object(r["a"])(e,[{key:"getSchoolShopList",value:function(){var t=this;this.$store.dispatch("getSchoolShopList",this.searchForm).then(function(e){if(e.success){var a=[];e.data.length<20?t.showMore=!1:t.showMore=!0;var n=t.filterData(e.data);a=1===t.searchForm.page?n:[t.shopList].concat(Object(s["a"])(n)),t.$set(t,"shopList",a)}})}},{key:"filterData",value:function(t){var e=t.map(function(t,e){var a=t;return a.open=!t.close,a});return e}},{key:"mounted",value:function(){this.getSchoolShopList()}},{key:"beforeRouteEnter",value:function(t){console.log(t,"fjdklafjlak");var e=t.params;if(e.oprate&&"update"===e.oprate){var a,n=Object(j["a"])(e.data),o=e.id,i=e.type;this.shopList.some(function(t,e){if(o===t.id)return a=e,!0}),"number"===typeof a&&(console.log(a,n),this.$set(this.shopList[a],i,n))}}},{key:"openChange",value:function(t,e){var a=this,n=t?"开启成功":"关闭成功";this.$store.dispatch("updateShopInfo",{shopId:e,type:"close",value:!t}).then(function(t){t.success&&a.showToastType(n)})}},{key:"showToastType",value:function(t){var e=this.$createToast({txt:t,type:"correct"});e.show()}},{key:"boxClick",value:function(t){"tag"===t&&(this.showEditbox=!0)}},{key:"moreClick",value:function(){this.searchForm.page++,this.getSchoolShopList()}},{key:"toMerchantStaff",value:function(t){this.$router.push({name:"merchantStaff",query:{shopId:t.id,shopName:t.title}})}},{key:"toShopAdmin",value:function(t){console.log("去店铺管理",t),this.$router.push({name:"shopAdmin",params:t})}},{key:"schoolInfo",get:function(){return this.$store.state.schoolInfo}}]),e}(p["c"]);Object(f["a"])([Object(p["d"])("$route")],D.prototype,"beforeRouteEnter",null),D=Object(f["a"])([Object(p["a"])({components:{page:h["a"],pageView:d["a"],rightBox:v["a"],editBox:g["a"],addTag:A}})],D);var F=D,U=F,q=(a("7cba"),Object(R["a"])(U,o,i,!1,null,"6889abfc",null));e["default"]=q.exports},e029:function(t,e,a){},e835:function(t,e,a){},fa15:function(t,e,a){"use strict";var n=a("e835"),o=a.n(n);o.a}}]);
//# sourceMappingURL=businessManagement.cb7ddf7a.js.map