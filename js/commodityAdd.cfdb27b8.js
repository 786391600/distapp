(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["commodityAdd"],{"07e8":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cube-page",class:e.type},[a("header",{staticClass:"header"},[a("h1",[e._v(e._s(e.title))]),a("i",{directives:[{name:"show",rawName:"v-show",value:e.isBack,expression:"isBack"}],staticClass:"cubeic-back",on:{click:e.back}}),a("div",{staticClass:"header-edit"},[e._t("edit")],2)]),a("div",{class:{wrapper:!0,isWhite:"white"===e.type}},[a("section",{directives:[{name:"show",rawName:"v-show",value:e.desc,expression:"desc"}],staticClass:"desc"},[e._t("desc",[e._v(e._s(e.desc))])],2),a("main",{staticClass:"content"},[e._t("content",[e._v(e._s(e.content))])],2)])])},r=[],s=a("d225"),o=a("b0b4"),n=a("308d"),c=a("6bb5"),l=a("4e2b"),d=a("9ab4"),u=a("60a3"),b=function(e){function t(){return Object(s["a"])(this,t),Object(n["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(o["a"])(t,[{key:"back",value:function(){this.$router.back()}}]),t}(u["c"]);Object(d["a"])([Object(u["b"])()],b.prototype,"msg",void 0),Object(d["a"])([Object(u["b"])({default:"",required:!0})],b.prototype,"title",void 0),Object(d["a"])([Object(u["b"])({default:""})],b.prototype,"type",void 0),Object(d["a"])([Object(u["b"])({default:""})],b.prototype,"desc",void 0),Object(d["a"])([Object(u["b"])({default:""})],b.prototype,"content",void 0),Object(d["a"])([Object(u["b"])({default:!0})],b.prototype,"isBack",void 0),b=Object(d["a"])([u["a"]],b);var p=b,f=p,m=(a("be53"),a("2877")),v=Object(m["a"])(f,i,r,!1,null,"7b685d95",null);t["a"]=v.exports},"3b06":function(e,t,a){},5102:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"file-upload"},[a("div",[a("cube-upload",{ref:"upload",attrs:{max:1,action:e.action,"simultaneous-uploads":1},on:{"files-added":e.filesAdded,"file-removed":e.fileRemove,"file-success":e.fileSuccess}})],1)])},r=[],s=a("d225"),o=a("b0b4"),n=a("308d"),c=a("6bb5"),l=a("4e2b"),d=a("9ab4"),u=a("60a3"),b=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(n["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.fileUrl="http://img.beijixiong.club:4869/",e.imageArr=[],e.action={target:"/fileUpload",data:{token:"rwwXO0wQq5SBEqP7"}},e.isUploading=!0,e}return Object(l["a"])(t,e),Object(o["a"])(t,[{key:"upload",value:function(){this.isUploading=!0,this.$refs.upload.start()}},{key:"pause",value:function(){this.isUploading=!1,this.$refs.upload.pause()}},{key:"retry",value:function(){this.$refs.upload.retry()}},{key:"filesAdded",value:function(e){var t=!1,a=1048576;for(var i in e){var r=e[i];r.size>a&&(r.ignore=!0,t=!0)}t&&this.$createToast({type:"warn",time:2e3,txt:"文件需要小于1M"}).show()}},{key:"fileRemove",value:function(e){if(e.response&&e.response.md5){var t=this.fileUrl+e.response.md5,a=this.imageArr.indexOf(t);a>-1&&this.imageArr.splice(a,1)}}},{key:"fileSuccess",value:function(e){var t=e.response.url,a=this.imageArr.indexOf(t);-1===a&&this.imageArr.push(t)}}]),t}(u["c"]);Object(d["a"])([Object(u["b"])({default:[]})],b.prototype,"value",void 0),b=Object(d["a"])([Object(u["a"])({components:{},filters:{}})],b);var p=b,f=p,m=a("2877"),v=Object(m["a"])(f,i,r,!1,null,null,null);t["a"]=v.exports},7078:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var i=a("2b0e"),r=new i["default"]},b0b4:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var i=a("85f2"),r=a.n(i);function s(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),r()(e,i.key,i)}}function o(e,t,a){return t&&s(e.prototype,t),a&&s(e,a),e}},bd85:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page",{attrs:{title:e.title,type:"white"}},[a("div",{attrs:{slot:"edit"},slot:"edit"},[a("span",{on:{click:e.submitClick}},[e._v("完成")])]),a("div",{attrs:{slot:"content"},slot:"content"},[a("cube-form",{ref:"cubeForm",attrs:{model:e.model,"immediate-validate":!1,options:e.options},on:{validate:e.validateHandler,submit:e.submitHandler,reset:e.resetHandler}},[a("cube-form-item",{attrs:{field:e.fields[0]}}),a("cube-form-item",{attrs:{field:e.fields[1]}}),a("cube-form-item",{attrs:{field:e.fields[2]}}),a("cube-form-item",{attrs:{field:e.fields[3]}}),a("cube-form-item",{attrs:{field:e.fields[4]}}),a("imageUpload",{model:{value:e.model.imgUrlList,callback:function(t){e.$set(e.model,"imgUrlList",t)},expression:"model.imgUrlList"}})],1)],1)])},r=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),o=a("d225"),n=a("b0b4"),c=a("308d"),l=a("6bb5"),d=a("4e2b"),u=a("9ab4"),b=a("60a3"),p=a("07e8"),f=a("5102"),m=a("7078");function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach(function(t){Object(s["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var y=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(c["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.title="新增商品",e.model={name:"",price:0,unit:"",disabled:!1,number:0,imgUrlList:[]},e.fields=[{type:"input",modelKey:"name",label:"商品名称",props:{placeholder:"请输入"},rules:{required:!0},trigger:"blur"},{type:"input",modelKey:"price",label:"价格",props:{placeholder:"请输入价格"},rules:{required:!0,type:"number"},trigger:"blur"},{type:"select",modelKey:"unit",label:"单位",props:{options:["个","斤","件","箱","平米","条"]},rules:{required:!0}},{type:"switch",modelKey:"disabled",label:"是否上架"},{type:"input",modelKey:"number",label:"数量",props:{placeholder:"请输入数量"},rules:{type:"number",required:!0},trigger:"blur"}],e.options={scrollToInvalidField:!0,layout:"standard"},e}return Object(d["a"])(t,e),Object(n["a"])(t,[{key:"created",value:function(){var e=this.$route.params;this.classId=e.classId,this.shopId=e.shopId,e.data.id&&(this.title="修改商品",this.model=e.data)}},{key:"validateHandler",value:function(){console.log("ddd")}},{key:"submitHandler",value:function(e){var t=this;e.preventDefault();var a,i=this.$store.state.userInfo.business;a=h({},this.model,{businessId:i,class:this.classId,shopId:this.shopId}),this.$store.dispatch("addOrUpdateCommodity",a).then(function(e){if(e.success){e.data?m["a"].$emit("commodityManage",{type:"add",data:e.data}):m["a"].$emit("commodityManage",{type:"update",data:a}),t.$router.back();var i=t.$createToast({txt:"保存成功",time:3e3,type:"txt"});i.show()}})}},{key:"submitClick",value:function(){this.$refs.cubeForm.submit()}},{key:"resetHandler",value:function(){this.$emit("cancel")}}]),t}(b["c"]);y=Object(u["a"])([Object(b["a"])({components:{page:p["a"],imageUpload:f["a"]}})],y);var O=y,j=O,g=(a("c8ca"),a("2877")),k=Object(g["a"])(j,i,r,!1,null,"01c3f5ae",null);t["default"]=k.exports},be53:function(e,t,a){"use strict";var i=a("3b06"),r=a.n(i);r.a},c8ca:function(e,t,a){"use strict";var i=a("e2d3"),r=a.n(i);r.a},e2d3:function(e,t,a){}}]);
//# sourceMappingURL=commodityAdd.cfdb27b8.js.map