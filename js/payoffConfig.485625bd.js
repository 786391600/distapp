(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["payoffConfig"],{"07e8":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cube-page",class:e.type},[a("header",{staticClass:"header"},[a("h1",[e._v(e._s(e.title))]),a("i",{directives:[{name:"show",rawName:"v-show",value:e.isBack,expression:"isBack"}],staticClass:"cubeic-back",on:{click:e.back}}),a("div",{staticClass:"header-edit"},[e._t("edit")],2)]),a("div",{class:{wrapper:!0,isWhite:"white"===e.type}},[a("section",{directives:[{name:"show",rawName:"v-show",value:e.desc,expression:"desc"}],staticClass:"desc"},[e._t("desc",[e._v(e._s(e.desc))])],2),a("main",{staticClass:"content"},[e._t("content",[e._v(e._s(e.content))])],2)])])},s=[],n=a("d225"),i=a("b0b4"),c=a("308d"),r=a("6bb5"),l=a("4e2b"),u=a("9ab4"),d=a("60a3"),b=function(e){function t(){return Object(n["a"])(this,t),Object(c["a"])(this,Object(r["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(i["a"])(t,[{key:"back",value:function(){this.$router.go(-1)}},{key:"created",value:function(){console.log("创建page ===")}}]),t}(d["c"]);Object(u["a"])([Object(d["b"])()],b.prototype,"msg",void 0),Object(u["a"])([Object(d["b"])({default:"",required:!0})],b.prototype,"title",void 0),Object(u["a"])([Object(d["b"])({default:""})],b.prototype,"type",void 0),Object(u["a"])([Object(d["b"])({default:""})],b.prototype,"desc",void 0),Object(u["a"])([Object(d["b"])({default:""})],b.prototype,"content",void 0),Object(u["a"])([Object(d["b"])({default:!0})],b.prototype,"isBack",void 0),b=Object(u["a"])([Object(d["a"])({})],b);var p=b,f=p,v=(a("bbc8"),a("2877")),h=Object(v["a"])(f,o,s,!1,null,"9389b476",null);t["a"]=h.exports},"175e":function(e,t,a){},"419f":function(e,t,a){"use strict";var o=a("d0ed"),s=a.n(o);s.a},"78c5":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page",{attrs:{title:e.className}},[a("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[a("cube-form",{ref:"addForm",attrs:{model:e.model,schema:e.schema,"immediate-validate":!1,options:e.options},on:{validate:e.validateHandler,submit:e.submitHandler,reset:e.resetHandler}})],1)])},s=[],n=a("d225"),i=a("b0b4"),c=a("308d"),r=a("6bb5"),l=a("4e2b"),u=a("9ab4"),d=a("60a3"),b=a("07e8"),p=a("3a45"),f=a("c88e"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"payoffForm"},[a("cube-input",{staticClass:"input",staticStyle:{"border-bottom":"1px solid #ccc"},attrs:{type:"number"},on:{blur:e.perChange},model:{value:e.data.per,callback:function(t){e.$set(e.data,"per",t)},expression:"data.per"}}),a("span",{staticClass:"span"},[e._v("%")]),a("cube-input",{staticClass:"input",staticStyle:{"border-bottom":"1px solid #ccc"},attrs:{type:"number",step:"0.01"},on:{blur:e.perChange},model:{value:e.data.money,callback:function(t){e.$set(e.data,"money",t)},expression:"data.money"}}),a("span",{staticClass:"span"},[e._v("元")])],1)},h=[],y=(a("456d"),a("ac6a"),function(e){function t(){var e;return Object(n["a"])(this,t),e=Object(c["a"])(this,Object(r["a"])(t).apply(this,arguments)),e.data={},e}return Object(l["a"])(t,e),Object(i["a"])(t,[{key:"perChange",value:function(e){var t=this;Object.keys(this.data).forEach(function(e){t.data[e]=isNaN(parseFloat(t.data[e]))?0:parseFloat(t.data[e])}),this.$emit("input",this.data)}},{key:"valueChange",value:function(e){this.data=Object(f["a"])(e)}}]),t}(d["c"]));Object(u["a"])([Object(d["b"])({default:{per:0,money:0}})],y.prototype,"value",void 0),Object(u["a"])([Object(d["d"])("value")],y.prototype,"valueChange",null),y=Object(u["a"])([Object(d["a"])({components:{page:b["a"]}})],y);var m=y,O=m,j=(a("419f"),a("2877")),g=Object(j["a"])(O,v,h,!1,null,"dd0e3a76",null),k=g.exports,C=function(e){function t(){var e;return Object(n["a"])(this,t),e=Object(c["a"])(this,Object(r["a"])(t).apply(this,arguments)),e.className="发薪方案",e.validity={},e.valid=void 0,e.model={0:{per:0,money:0},1:{per:0,money:0}},e.schema={groups:[{fields:[{component:k,modelKey:"0",label:"帮我取薪资",rules:{required:!0,require:function(e){return"number"===typeof e.per&&"number"===typeof e.money}},messages:{require:"方案数字必填"}},{component:k,modelKey:"1",label:"帮我做薪资",rules:{required:!0,require:function(e){return"number"===typeof e.per&&"number"===typeof e.money}},messages:{require:"方案数字必填"}}]},{fields:[{type:"submit",label:"保存"}]}]},e.options={scrollToInvalidField:!0,layout:"standard"},e}return Object(l["a"])(t,e),Object(i["a"])(t,[{key:"submitHandler",value:function(e){e.preventDefault(),this.saveSchoolInfo("payoffConfig",this.model)}},{key:"validateHandler",value:function(e){this.validity=e.validity,this.valid=e.valid,console.log("validity",e.validity,e.valid,e.dirty,e.firstInvalidFieldIndex)}},{key:"reset",value:function(e){this.$refs.addForm.reset()}},{key:"saveSchoolInfo",value:function(e,t){var a=this;this.$store.dispatch("updateSchoolInfo",{schoolId:this.schoolInfo.id,type:e,value:t}).then(function(o){o.success&&a.showToastType(),a.$store.commit("SET_SCHOOL_INFO_BY_TYPE",{type:e,value:t})})}},{key:"showToastType",value:function(){var e=this.$createToast({txt:"保存成功",type:"correct",mask:!1});e.show()}},{key:"initModelData",value:function(){console.log(this.schoolInfo.payoffConfig,"**************88");var e=Object(f["a"])(this.schoolInfo.payoffConfig||{0:{per:0,money:0},1:{per:0,money:0}});console.log(e,"88888888888888"),this.$set(this,"model",e)}},{key:"mounted",value:function(){this.initModelData()}},{key:"schoolInfo",get:function(){return this.$store.state.schoolInfo}}]),t}(d["c"]);C=Object(u["a"])([Object(d["a"])({components:{page:b["a"],pageView:p["a"]}})],C);var _=C,w=_,I=Object(j["a"])(w,o,s,!1,null,"71105ee2",null);t["default"]=I.exports},bbc8:function(e,t,a){"use strict";var o=a("175e"),s=a.n(o);s.a},c88e:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var o=a("7618");a("3b2b"),a("a481");var s=function e(t){var a;if("object"===Object(o["a"])(t))if(null===t)a=null;else if(t instanceof Date)a=t;else if(t instanceof Array){a=[];for(var s=0,n=t.length;s<n;s++)a.push(e(t[s]))}else for(var i in a={},t)a[i]=e(t[i]);else a=t;return a}},d0ed:function(e,t,a){}}]);
//# sourceMappingURL=payoffConfig.485625bd.js.map