(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shopAdd"],{"019e":function(e,t,a){},"07e8":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cube-page",class:e.type},[a("header",{staticClass:"header"},[a("h1",[e._v(e._s(e.title))]),a("i",{directives:[{name:"show",rawName:"v-show",value:e.isBack,expression:"isBack"}],staticClass:"cubeic-back",on:{click:e.back}}),a("div",{staticClass:"header-edit"},[e._t("edit")],2)]),a("div",{class:{wrapper:!0,isWhite:"white"===e.type}},[a("section",{directives:[{name:"show",rawName:"v-show",value:e.desc,expression:"desc"}],staticClass:"desc"},[e._t("desc",[e._v(e._s(e.desc))])],2),a("main",{staticClass:"content"},[e._t("content",[e._v(e._s(e.content))])],2)])])},i=[],s=a("d225"),n=a("b0b4"),o=a("308d"),c=a("6bb5"),l=a("4e2b"),u=a("9ab4"),d=a("60a3"),b=function(e){function t(){return Object(s["a"])(this,t),Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(n["a"])(t,[{key:"back",value:function(){this.$router.back()}}]),t}(d["c"]);Object(u["a"])([Object(d["b"])()],b.prototype,"msg",void 0),Object(u["a"])([Object(d["b"])({default:"",required:!0})],b.prototype,"title",void 0),Object(u["a"])([Object(d["b"])({default:""})],b.prototype,"type",void 0),Object(u["a"])([Object(d["b"])({default:""})],b.prototype,"desc",void 0),Object(u["a"])([Object(d["b"])({default:""})],b.prototype,"content",void 0),Object(u["a"])([Object(d["b"])({default:!0})],b.prototype,"isBack",void 0),b=Object(u["a"])([d["a"]],b);var p=b,f=p,v=(a("ca73"),a("2877")),m=Object(v["a"])(f,r,i,!1,null,"0717ebb4",null);t["a"]=m.exports},"3fd0":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page",{attrs:{title:e.title,type:"white"}},[a("div",{attrs:{slot:"edit"},slot:"edit"},[a("span",{on:{click:e.submitClick}},[e._v("完成")])]),a("div",{attrs:{slot:"content"},slot:"content"},[a("cube-form",{ref:"cubeForm",attrs:{model:e.model,"immediate-validate":!1,options:e.options},on:{validate:e.validateHandler,submit:e.submitHandler,reset:e.resetHandler}},[a("cube-form-item",{attrs:{field:e.fields[0]}}),a("cube-form-item",{attrs:{field:e.fields[1]}}),a("cube-form-item",{attrs:{field:e.fields[2]}}),a("cube-form-item",{attrs:{field:e.fields[3]}}),a("imageUpload",{model:{value:e.model.imgUrlList,callback:function(t){e.$set(e.model,"imgUrlList",t)},expression:"model.imgUrlList"}})],1)],1)])},i=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),n=a("d225"),o=a("b0b4"),c=a("308d"),l=a("6bb5"),u=a("4e2b"),d=a("9ab4"),b=a("60a3"),p=a("07e8"),f=a("5102"),v=a("7618");a("3b2b"),a("a481");function m(e){if(!e&&"object"!==Object(v["a"])(e))throw new Error("error arguments","deepClone");var t=e.constructor===Array?[]:{};return Object.keys(e).forEach(function(a){e[a]&&"object"===Object(v["a"])(e[a])?t[a]=m(e[a]):t[a]=e[a]}),t}var h=a("7078");function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach(function(t){Object(s["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var j=function(e){function t(){var e;return Object(n["a"])(this,t),e=Object(c["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.title="店铺新增",e.model={name:"",transType:["sf"],imgUrlList:[],address:"",phone:""},e.fields=[{type:"input",modelKey:"name",label:"商店名称",props:{placeholder:"请输入"},rules:{required:!0},trigger:"blur"},{type:"checkbox-group",modelKey:"transType",label:"配送方式",props:{options:[{label:"客户自提",value:"sf"},{label:"配送",value:"ds"}]},rules:{required:!0}},{type:"input",modelKey:"address",label:"店铺地址",props:{placeholder:"请输入"},rules:{required:!0},trigger:"blur"},{type:"input",modelKey:"phone",label:"商家电话",props:{placeholder:"请输入"},rules:{required:!0},trigger:"blur"}],e.options={scrollToInvalidField:!0,layout:"standard"},e}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"validateHandler",value:function(){console.log("validateHandler")}},{key:"submitHandler",value:function(e){var t=this;e.preventDefault();var a,r=this.$store.state.userInfo.business;a=O({},this.model,{businessId:r}),this.$store.dispatch("addOrUpdateShop",a).then(function(e){if(e.success){e.data?h["a"].$emit("shopList",{type:"add",data:e.data}):h["a"].$emit("shopList",{type:"update",data:a}),t.$router.back();var r=t.$createToast({txt:"保存成功",time:3e3,type:"txt"});r.show()}})}},{key:"resetHandler",value:function(){this.$emit("cancel")}},{key:"mounted",value:function(){var e=this.$route.params;if(e.id){this.title="店铺修改",e.transType||(e.transType=["sf"]);e.id,e.name,e.transType,e.businessId,e.address,e.phone;this.$set(this,"model",m(e))}}},{key:"submitClick",value:function(){this.$refs.cubeForm.submit()}}]),t}(b["c"]);j=Object(d["a"])([Object(b["a"])({components:{page:p["a"],imageUpload:f["a"]}})],j);var g=j,k=g,w=(a("a33f"),a("2877")),$=Object(w["a"])(k,r,i,!1,null,"3edb4b4d",null);t["default"]=$.exports},5102:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"file-upload"},[a("div",[a("cube-upload",{ref:"upload",attrs:{max:1,action:e.action,"simultaneous-uploads":1},on:{"files-added":e.filesAdded,"file-removed":e.fileRemove,"file-success":e.fileSuccess}})],1)])},i=[],s=a("d225"),n=a("b0b4"),o=a("308d"),c=a("6bb5"),l=a("4e2b"),u=a("9ab4"),d=a("60a3"),b=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.fileUrl="http://img.beijixiong.club:4869/",e.imageArr=[],e.action={target:"/fileUpload",data:{token:"rwwXO0wQq5SBEqP7"}},e.isUploading=!0,e}return Object(l["a"])(t,e),Object(n["a"])(t,[{key:"upload",value:function(){this.isUploading=!0,this.$refs.upload.start()}},{key:"pause",value:function(){this.isUploading=!1,this.$refs.upload.pause()}},{key:"retry",value:function(){this.$refs.upload.retry()}},{key:"filesAdded",value:function(e){var t=!1,a=1048576;for(var r in e){var i=e[r];i.size>a&&(i.ignore=!0,t=!0)}t&&this.$createToast({type:"warn",time:2e3,txt:"文件需要小于1M"}).show()}},{key:"fileRemove",value:function(e){if(e.response&&e.response.md5){var t=this.fileUrl+e.response.md5,a=this.imageArr.indexOf(t);a>-1&&this.imageArr.splice(a,1)}}},{key:"fileSuccess",value:function(e){var t=e.response.url,a=this.imageArr.indexOf(t);-1===a&&this.imageArr.push(t)}}]),t}(d["c"]);Object(u["a"])([Object(d["b"])({default:[]})],b.prototype,"value",void 0),b=Object(u["a"])([Object(d["a"])({components:{},filters:{}})],b);var p=b,f=p,v=a("2877"),m=Object(v["a"])(f,r,i,!1,null,null,null);t["a"]=m.exports},7078:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a("2b0e"),i=new r["default"]},a33f:function(e,t,a){"use strict";var r=a("019e"),i=a.n(r);i.a},b0b4:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a("85f2"),i=a.n(r);function s(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(e,r.key,r)}}function n(e,t,a){return t&&s(e.prototype,t),a&&s(e,a),e}},b13e:function(e,t,a){},ca73:function(e,t,a){"use strict";var r=a("b13e"),i=a.n(r);i.a}}]);
//# sourceMappingURL=shopAdd.a1b42c3d.js.map