(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["priceConfig"],{"07e8":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cube-page",class:e.type},[a("header",{staticClass:"header"},[a("h1",[e._v(e._s(e.title))]),a("i",{directives:[{name:"show",rawName:"v-show",value:e.isBack,expression:"isBack"}],staticClass:"cubeic-back",on:{click:e.back}}),a("div",{staticClass:"header-edit"},[e._t("edit")],2)]),a("div",{class:{wrapper:!0,isWhite:"white"===e.type}},[a("main",{staticClass:"content"},[e._t("content",[e._v(e._s(e.content))])],2)])])},i=[],o=a("d225"),c=a("b0b4"),n=a("308d"),l=a("6bb5"),r=a("4e2b"),u=a("9ab4"),d=a("60a3"),b=function(e){function t(){return Object(o["a"])(this,t),Object(n["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(r["a"])(t,e),Object(c["a"])(t,[{key:"back",value:function(){this.$router.go(-1)}},{key:"created",value:function(){console.log("创建page ===")}}]),t}(d["c"]);Object(u["a"])([Object(d["b"])()],b.prototype,"msg",void 0),Object(u["a"])([Object(d["b"])({default:"",required:!0})],b.prototype,"title",void 0),Object(u["a"])([Object(d["b"])({default:""})],b.prototype,"type",void 0),Object(u["a"])([Object(d["b"])({default:""})],b.prototype,"desc",void 0),Object(u["a"])([Object(d["b"])({default:""})],b.prototype,"content",void 0),Object(u["a"])([Object(d["b"])({default:!0})],b.prototype,"isBack",void 0),b=Object(u["a"])([Object(d["a"])({})],b);var f=b,p=f,v=(a("beaf"),a("2877")),h=Object(v["a"])(p,s,i,!1,null,"40de0fef",null);t["a"]=h.exports},b491:function(e,t,a){},beaf:function(e,t,a){"use strict";var s=a("b491"),i=a.n(s);i.a},c88e:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var s=a("7618");a("3b2b"),a("a481");var i=function e(t){var a;if("object"===Object(s["a"])(t))if(null===t)a=null;else if(t instanceof Date)a=t;else if(t instanceof Array){a=[];for(var i=0,o=t.length;i<o;i++)a.push(e(t[i]))}else for(var c in a={},t)a[c]=e(t[c]);else a=t;return a}},f616:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page",{attrs:{title:e.className}},[a("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[a("cube-form",{ref:"addForm",attrs:{model:e.model,schema:e.schema,"immediate-validate":!1,options:e.options},on:{validate:e.validateHandler,submit:e.submitHandler,reset:e.resetHandler}})],1)])},i=[],o=(a("456d"),a("ac6a"),a("d225")),c=a("b0b4"),n=a("308d"),l=a("6bb5"),r=a("4e2b"),u=a("9ab4"),d=a("60a3"),b=a("07e8"),f=a("3a45"),p=a("c88e"),v=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(n["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.className="基础费用",e.validity={},e.valid=void 0,e.model={0:0,1:0},e.schema={groups:[{fields:[{type:"input",modelKey:"0",label:"帮我取",props:{placeholder:"请输入基础费用(元)",type:"text"},rules:{required:!0,custom:function(e){return e>=0}},messages:{custom:"费用需要大于等于0元"},trigger:"blur"},{type:"input",modelKey:"1",label:"帮我做",props:{placeholder:"请输入基础费用(元)",type:"text"},rules:{required:!0,custom:function(e){return e>=0}},messages:{custom:"费用需要大于等于0元"},trigger:"blur"}]},{fields:[{type:"submit",label:"保存"}]}]},e.options={scrollToInvalidField:!0,layout:"standard"},e}return Object(r["a"])(t,e),Object(c["a"])(t,[{key:"submitHandler",value:function(e){var t=this;e.preventDefault();var a={};console.log(this.model),Object.keys(this.model).forEach(function(e){a[e]={},a[e]["basicfee"]=parseFloat(t.model[e])}),this.saveSchoolInfo("basicfee",a)}},{key:"validateHandler",value:function(e){this.validity=e.validity,this.valid=e.valid,console.log("validity",e.validity,e.valid,e.dirty,e.firstInvalidFieldIndex)}},{key:"reset",value:function(e){this.$refs.addForm.reset()}},{key:"saveSchoolInfo",value:function(e,t){var a=this;this.$store.dispatch("updateSchoolInfo",{schoolId:this.schoolInfo.id,type:e,value:t}).then(function(s){s.success&&a.showToastType(),a.$store.commit("SET_SCHOOL_INFO_BY_TYPE",{type:e,value:t})})}},{key:"showToastType",value:function(){var e=this.$createToast({txt:"保存成功",type:"correct"});e.show()}},{key:"initModelData",value:function(){var e=Object(p["a"])(this.schoolInfo.basicfee||{0:{basicfee:2},1:{basicfee:2}}),t={};Object.keys(e).forEach(function(a){t[a]=e[a].basicfee}),this.model=t}},{key:"mounted",value:function(){this.initModelData()}},{key:"schoolInfo",get:function(){return this.$store.state.schoolInfo}}]),t}(d["c"]);v=Object(u["a"])([Object(d["a"])({components:{page:b["a"],pageView:f["a"]}})],v);var h=v,y=h,m=a("2877"),O=Object(m["a"])(y,s,i,!1,null,"1ae6e01b",null);t["default"]=O.exports}}]);
//# sourceMappingURL=priceConfig.5deca42b.js.map