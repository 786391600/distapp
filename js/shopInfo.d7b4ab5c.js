(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shopInfo"],{"0592":function(e,t,i){},"4e52":function(e,t,i){"use strict";var o=i("e31d"),a=i.n(o);a.a},5351:function(e,t,i){"use strict";var o=i("fd2e"),a=i.n(o);a.a},8340:function(e,t,i){"use strict";var o=i("0592"),a=i.n(o);a.a},af6a:function(e,t,i){},b8ed:function(e,t,i){"use strict";var o=i("af6a"),a=i.n(o);a.a},e31d:function(e,t,i){},faf8:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("page",{attrs:{title:e.pageTitle}},[i("div",{staticClass:"edit",attrs:{slot:"edit"},slot:"edit"}),i("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[i("div",{staticClass:"shop-admin-box"},[i("cube-form",{ref:"editForm",attrs:{model:e.model,"immediate-validate":!1,options:e.options},on:{validate:e.validateHandler,submit:e.submitHandler,reset:e.resetHandler}},[i("cube-form-group",{attrs:{legend:"信息设置"}},[i("imageUpload",{model:{value:e.headImgList,callback:function(t){e.headImgList=t},expression:"headImgList"}}),i("div",[i("cube-button",{attrs:{primary:!0,inline:!0},on:{click:e.addTag}},[e._v("选择标签")])],1),e._l(e.fields,function(e,t){return i("cube-form-item",{key:t,attrs:{field:e}})})],2)],1)],1),i("editBox",{ref:"addForm1",attrs:{visible:e.showEditbox},on:{"update:visible":function(t){e.showEditbox=t}}},[i("editForm",{ref:"editForm",attrs:{currentTags:e.currentTags},on:{cancel:function(t){e.showEditbox=!1},change:e.changeSuccess}})],1)],1)])},a=[],s=(i("8e6e"),i("456d"),i("bd86")),r=(i("ac6a"),i("d225")),n=i("b0b4"),c=i("308d"),l=i("6bb5"),u=i("4e2b"),d=i("9ab4"),m=i("60a3"),h=i("07e8"),p=i("51f3"),b=i("35c0"),f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("cube-form",{ref:"editForm",attrs:{model:e.model,"immediate-validate":!1,options:e.options},on:{validate:e.validateHandler,submit:e.submitHandler,reset:e.resetHandler}},[i("cube-form-group",{attrs:{legend:"选择标签"}},[i("div",[i("cube-checkbox-group",{attrs:{horizontal:!0,options:e.groupOptions},model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}})],1),i("div",[i("cube-button",{on:{click:e.submitHandler}},[e._v("确认")])],1)])],1)},g=[],v=i("c88e"),y=i("7043");function O(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,o)}return i}function j(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?O(i,!0).forEach(function(t){Object(s["a"])(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):O(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var k=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(c["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.validity={},e.valid=void 0,e.model={name:"",price:0,num:0,img:"",total:0,goodsType:"delivery"},e.imageList=[],e.isEdit=!1,e.options={scrollToInvalidField:!0,layout:"classic"},e.checkList=[],e.groupOptions=[],e}return Object(u["a"])(t,e),Object(n["a"])(t,[{key:"mounted",value:function(){var e=Object(v["a"])(this.schoolInfo.tagList)||[];this.groupOptions=e.map(function(e){return{label:e.name,value:e.id}}),this.checkList=Object(v["a"])(this.currentTags)}},{key:"resetHandler",value:function(){this.$emit("cancel")}},{key:"submitHandler",value:function(e){e.preventDefault(),this.$emit("change",this.checkList)}},{key:"setData",value:function(e){e.img&&this.$set(this,"imageList",[e.img]);var t=j({},Object(v["a"])(this.model),{},e);this.$set(this,"model",t)}},{key:"addSpec",value:function(){var e=this.model.menu&&this.model.menu.length>0?Object(v["a"])(this.model.menu):[],t=e&&e.length?e.length:0,i={id:this.model.id+""+t,num:0,price:0,spec:""};e.push(i),this.$set(this.model,"menu",e)}},{key:"deleteSpec",value:function(e){console.log(e,"");var t=Object(v["a"])(this.model.menu);t.splice(e,1),this.$set(this.model,"menu",t)}},{key:"submitClick",value:function(){this.$refs.editForm.submit(!1)}},{key:"resetClick",value:function(){this.$refs.editForm.reset()}},{key:"schoolInfo",get:function(){return this.$store.state.schoolInfo}}]),t}(m["c"]);Object(d["a"])([Object(m["b"])({default:[]})],k.prototype,"currentTags",void 0),k=Object(d["a"])([Object(m["a"])({name:"addForm",components:{textButton:y["a"]}})],k);var w=k,I=w,$=(i("4e52"),i("b8ed"),i("2877")),L=Object($["a"])(I,f,g,!1,null,"3fbe68a6",null),x=L.exports,T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("cube-form",{attrs:{model:e.model,"immediate-validate":!1,options:e.options},on:{validate:e.validateHandler,submit:e.submitHandler,reset:e.resetHandler}},[i("cube-form-group",{attrs:{legend:"分类编辑"}},[i("cube-form-item",{attrs:{field:e.fields[0]}})],1),i("cube-form-group",[i("cube-button",{attrs:{type:"submit"}},[e._v("保存")]),i("cube-button",{attrs:{type:"reset"}},[e._v("取消")])],1)],1)},H=[],P=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(c["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.validity={},e.valid=void 0,e.model={id:"",name:"",menu:[]},e.isEdit=!1,e.fields=[{type:"input",modelKey:"name",label:"分类名称",props:{placeholder:"请输入"},rules:{required:!0},trigger:"blur",messages:{required:"分类名称必填"}}],e.options={scrollToInvalidField:!0,layout:"classic"},e}return Object(u["a"])(t,e),Object(n["a"])(t,[{key:"resetHandler",value:function(){this.$emit("cancel")}},{key:"submitHandler",value:function(e){e.preventDefault(),this.$emit("change",this.model)}},{key:"setData",value:function(e){this.$set(this,"model",e)}},{key:"deleteSpec",value:function(e){console.log(e,"");var t=Object(v["a"])(this.model.menu);t.splice(e,1),this.$set(this.model,"menu",t)}},{key:"schoolInfo",get:function(){return this.$store.state.schoolInfo}}]),t}(m["c"]);Object(d["a"])([Object(m["b"])({default:""})],P.prototype,"shopId",void 0),Object(d["a"])([Object(m["b"])({default:""})],P.prototype,"shopName",void 0),P=Object(d["a"])([Object(m["a"])({name:"addForm"})],P);var E=P,D=E,F=(i("8340"),Object($["a"])(D,T,H,!1,null,"3475db46",null)),C=F.exports,_=i("5102");function q(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,o)}return i}function S(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?q(i,!0).forEach(function(t){Object(s["a"])(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):q(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var B=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(c["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.showEditbox=!1,e.showAddNav=!1,e.pageTitle="店铺信息",e.data=[],e.currentIndex=0,e.modelIndex=0,e.headImgList=[],e.model={title:"",markLight:"",dtConfig:["delivery","selflifting"]},e.imageList=[],e.isEdit=!1,e.currentTags=[],e.fields=[{type:"input",modelKey:"title",label:"店铺名称",props:{placeholder:"请输入"},rules:{required:!0},trigger:"blur",messages:{required:"店铺名称必填"}},{type:"input",modelKey:"markLight",label:"所属餐厅",props:{placeholder:"请输入"},rules:{required:!1},trigger:"blur",messages:{required:"店铺名称必填"}},{type:"checkbox-group",label:"运营方式",modelKey:"dtConfig",props:{options:[{label:"帮手配送",value:"delivery"},{label:"用户自取",value:"selflifting"}]},rules:{required:!0},messages:{required:"必须选择一种运营方式"}},{type:"submit",label:"保存"}],e.options={scrollToInvalidField:!0,layout:"classic"},e}return Object(u["a"])(t,e),Object(n["a"])(t,[{key:"created",value:function(){var e=Object(v["a"])(this.$route.params);this.model={title:e.title,markLight:e.markLight,dtConfig:e.dtConfig||["delivery","selflifting"],tags:e.tags||[]};var t=e.tags||[];this.getTags(t),this.headImgList=[e.headImg]}},{key:"changeSuccess",value:function(e){this.model.tags=e,this.showEditbox=!1}},{key:"getTags",value:function(e){var t=this.schoolInfo.tagList||[],i=[];t.forEach(function(t){e.indexOf(t.id)>-1&&i.push(t.id)}),this.currentTags=i}},{key:"addTag",value:function(){this.showEditbox=!0}},{key:"resetHandler",value:function(){this.$emit("cancel")}},{key:"submitHandler",value:function(e){var t=this;e.preventDefault(),console.log(this.headImgList,"iiiiiiiiiiiiii");var i=S({},this.model,{headImg:this.headImgList[0]||'"http://mmbiz.qpic.cn/mmbiz_jpg/5XHic5LQPCDh6os0mLo4IgYAfsHUicgR1ic3RsGfo19PkzF5ictOueZ9ktuOyuC4XbwAADNbrMibjuicy1JYwojhG36w/0"'});this.$store.dispatch("updateShopInfoByObj",{shopId:this.shopId,value:i}).then(function(e){e.success&&t.$createDialog({type:"alert",content:"保存成功",onConfirm:function(e){t.$router.push({name:"businessManagement",params:{id:t.shopId,oprate:"update",data:i}})}}).show()})}},{key:"showToastType",value:function(){var e=this.$createToast({txt:"保存成功",type:"correct"});e.show()}},{key:"shopId",get:function(){return this.$route.params.id}},{key:"shopName",get:function(){return this.$route.query.shopName}},{key:"schoolInfo",get:function(){return this.$store.state.schoolInfo}}]),t}(m["c"]);B=Object(d["a"])([Object(m["a"])({components:{page:h["a"],rightBox:p["a"],editBox:b["a"],editForm:x,addNav:C,textButton:y["a"],imageUpload:_["a"]}})],B);var N=B,z=N,A=(i("5351"),Object($["a"])(z,o,a,!1,null,null,null));t["default"]=A.exports},fd2e:function(e,t,i){}}]);
//# sourceMappingURL=shopInfo.d7b4ab5c.js.map