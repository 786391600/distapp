(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["noticeConfig","schoolagent"],{"07e8":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cube-page",class:t.type},[i("header",{staticClass:"header"},[i("h1",[t._v(t._s(t.title))]),i("i",{directives:[{name:"show",rawName:"v-show",value:t.isBack,expression:"isBack"}],staticClass:"cubeic-back",on:{click:t.back}}),i("div",{staticClass:"header-edit"},[t._t("edit")],2)]),i("div",{class:{wrapper:!0,isWhite:"white"===t.type}},[i("section",{directives:[{name:"show",rawName:"v-show",value:t.desc,expression:"desc"}],staticClass:"desc"},[t._t("desc",[t._v(t._s(t.desc))])],2),i("main",{staticClass:"content"},[t._t("content",[t._v(t._s(t.content))])],2)])])},s=[],o=i("d225"),n=i("b0b4"),c=i("308d"),l=i("6bb5"),r=i("4e2b"),u=i("9ab4"),d=i("60a3"),b=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),Object(n["a"])(e,[{key:"back",value:function(){this.$router.back()}}]),e}(d["c"]);Object(u["a"])([Object(d["b"])()],b.prototype,"msg",void 0),Object(u["a"])([Object(d["b"])({default:"",required:!0})],b.prototype,"title",void 0),Object(u["a"])([Object(d["b"])({default:""})],b.prototype,"type",void 0),Object(u["a"])([Object(d["b"])({default:""})],b.prototype,"desc",void 0),Object(u["a"])([Object(d["b"])({default:""})],b.prototype,"content",void 0),Object(u["a"])([Object(d["b"])({default:!0})],b.prototype,"isBack",void 0),b=Object(u["a"])([d["a"]],b);var f=b,p=f,v=(i("724a"),i("2877")),h=Object(v["a"])(p,a,s,!1,null,"758695be",null);e["a"]=h.exports},"2f6b":function(t,e,i){},5979:function(t,e,i){},"724a":function(t,e,i){"use strict";var a=i("2f6b"),s=i.n(a);s.a},b0b4:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var a=i("85f2"),s=i.n(a);function o(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),s()(t,a.key,a)}}function n(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),t}},c88e:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var a=i("7618");i("3b2b"),i("a481");var s=function t(e){var i;if("object"===Object(a["a"])(e))if(null===e)i=null;else if(e instanceof Date)i=e;else if(e instanceof Array){i=[];for(var s=0,o=e.length;s<o;s++)i.push(t(e[s]))}else for(var n in i={},e)i[n]=t(e[n]);else i=e;return i}},ebb7:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("page",{attrs:{title:t.className}},[i("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[t._l(t.noticeList,function(e,a){return i("div",{staticClass:"notice-box"},[i("div",{staticClass:"title"},[t._v(t._s(e.title))]),i("div",{staticClass:"oprate"},[i("div",{staticClass:"oprate-btn btn-delete",on:{click:function(e){return t.deleteNotice(a)}}},[t._v("删除")])])])}),t.showBtn?i("cube-button",{on:{click:t.saveSchoolInfo}},[t._v("保存")]):t._e(),i("cube-popup",{ref:"myPopup",attrs:{type:"my-popup",maskClosable:!0,center:!1,position:"top"},on:{"mask-click":t.maskClick}},[i("addNotice",{ref:"addNotice",on:{submit:t.submit}})],1),i("div",{staticClass:"add-btn",on:{click:function(e){return t.showPopup("myPopup")}}},[t._v("添加")])],2)])},s=[],o=i("d225"),n=i("b0b4"),c=i("308d"),l=i("6bb5"),r=i("4e2b"),u=i("9ab4"),d=i("60a3"),b=i("07e8"),f=i("3a45"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("cube-form",{ref:"addForm",attrs:{model:t.model,schema:t.schema,"immediate-validate":!1,options:t.options},on:{validate:t.validateHandler,submit:t.submitHandler,reset:t.resetHandler}})},v=[],h=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.validity={},t.valid=void 0,t.model={title:""},t.schema={groups:[{legend:"新增公告",fields:[{type:"textarea",modelKey:"title",label:"公告内容",props:{placeholder:"请输入"},rules:{required:!0},debounce:100}]},{fields:[{type:"submit",label:"保存"}]}]},t.options={scrollToInvalidField:!0,layout:"classic"},t}return Object(r["a"])(e,t),Object(n["a"])(e,[{key:"submitHandler",value:function(t){t.preventDefault(),this.$emit("submit",this.model)}},{key:"validateHandler",value:function(t){this.validity=t.validity,this.valid=t.valid,console.log("validity",t.validity,t.valid,t.dirty,t.firstInvalidFieldIndex)}},{key:"reset",value:function(t){this.$refs.addForm.reset()}}]),e}(d["c"]);h=Object(u["a"])([d["a"]],h);var y=h,m=y,O=i("2877"),j=Object(O["a"])(m,p,v,!1,null,"fe0e5680",null),k=j.exports,w=i("c88e"),_=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.className="公告配置",t.showBtn=!1,t.noticeList=Object(w["a"])(t.noticeConfig),t}return Object(r["a"])(e,t),Object(n["a"])(e,[{key:"showPopup",value:function(t){this.maskClick();var e=this.$refs[t];e.show()}},{key:"hidePopup",value:function(t){var e=this.$refs[t];e.hide()}},{key:"maskClick",value:function(){this.$refs.addNotice.reset()}},{key:"submit",value:function(t){this.noticeList.push({title:t.title,url:""}),this.showBtn=!0,this.hidePopup("myPopup")}},{key:"deleteNotice",value:function(t){this.noticeList.splice(t,1),this.showBtn=!0}},{key:"saveSchoolInfo",value:function(){var t=this;this.$store.dispatch("updateSchoolInfo",{schoolId:this.schoolInfo.id,type:"noticeConfig",value:this.noticeList}).then(function(e){e.success&&(t.showBtn=!1,t.showToastType()),t.$store.commit("SET_SCHOOL_INFO_BY_TYPE",{type:"noticeConfig",value:t.noticeList})})}},{key:"showToastType",value:function(){var t=this.$createToast({txt:"保存成功",type:"correct"});t.show()}},{key:"noticeConfig",get:function(){return this.$store.state.schoolInfo.noticeConfig||[]}},{key:"schoolInfo",get:function(){return this.$store.state.schoolInfo}}]),e}(d["c"]);_=Object(u["a"])([Object(d["a"])({components:{page:b["a"],pageView:f["a"],addNotice:k}})],_);var C=_,g=C,$=(i("ebfc"),Object(O["a"])(g,a,s,!1,null,"72618009",null));e["default"]=$.exports},ebfc:function(t,e,i){"use strict";var a=i("5979"),s=i.n(a);s.a}}]);
//# sourceMappingURL=noticeConfig.9b406054.js.map