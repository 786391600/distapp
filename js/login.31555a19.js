(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login","schoolagent"],{"42c7":function(e,t,i){},"9ed6":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[e._m(0),i("cube-form",{staticClass:"home-form",attrs:{model:e.model,options:e.options},on:{submit:e.submitHandler}},[i("cube-form-group",[i("div",[i("cube-form-item",{attrs:{field:e.fields[0]}})],1),e.isVerification?i("div",{staticClass:"verificationCode"},[i("div",[i("cube-form-item",{attrs:{field:e.fields[1]}})],1),i("div",{staticClass:"verificationCode-button"},[i("cube-button",{attrs:{outline:!0,primary:!0,inline:!0},on:{click:e.getVerificationCode}},[e.sendMsgDisabled?i("span",[e._v(e._s(e.time+"秒后获取"))]):i("span",[e._v("获取验证码")])])],1)]):e._e()]),i("cube-form-group",[i("cube-button",{staticClass:"submit",attrs:{type:"submit"}},[e._v("立即绑定")])],1)],1)],1)},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header"},[i("span",{staticClass:"title"},[e._v("请输入手机号")]),i("span",{staticClass:"tip"},[e._v("请输入与管理员对接的手机号")]),i("span",{staticClass:"tip"},[e._v("平台目前不支持对外注册，请联系：13934691550")])])}],a=(i("a481"),i("d225")),s=i("b0b4"),c=i("308d"),r=i("6bb5"),u=i("4e2b"),l=i("9ab4"),d=i("60a3"),p=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(c["a"])(this,Object(r["a"])(t).apply(this,arguments)),e.options={phone:"",verificationCode:""},e.model={phone:"",openid:""},e.fields=[{type:"input",modelKey:"phone",label:"手机号",props:{placeholder:"请输入号码"},rules:{required:!0,type:"tel"}},{type:"input",modelKey:"verificationCode",label:"验证码",props:{placeholder:"请输入",type:"text"},rules:{required:!0}}],e.isVerification=!1,e}return Object(u["a"])(t,e),Object(s["a"])(t,[{key:"mounted",value:function(){this.getBindingInfo()}},{key:"getBindingInfo",value:function(){var e=this,t=this.$route.query;if(t.code){var i=this["$createToast"]({time:0,txt:"数据获取中..."});i.show(),this.$store.dispatch("getCodeInfo",{code:t.code}).then(function(t){if(t.success){var o=t.data.userInfo,n=t.data.schoolInfo;o.openid&&(e.openid=o.openid,e.$store.commit("SET_SESSION_ID",e.openid),e.$store.commit("SET_SCHOOL_INFO",n),e.$store.commit("SET_USER_INFO",o),e.$router.replace({path:"schoolAdmin"}))}i.hide()})}else console.log("不是微信登陆")}},{key:"submitHandler",value:function(e){var t=this;if(e.preventDefault(),this.openid){var i=this["$createToast"]({time:0,txt:"绑定中..."});i.show();var o=Object.assign({},this.model);o.openid=this.openid,this.$store.dispatch("bindingOpenid",o).then(function(e){if(i.hide(),e.success){var o=e.data;o.sendSms?t.isVerification=!0:o.isBind?(t.$store.commit("SET_USER_INFO",o.userInfo),t.$store.commit("SET_SESSION_ID",t.openid),t.$router.replace({path:"/appcenter"})):t["$createDialog"]({type:"alert",content:"您的手机号没有绑定，请联系商务开通！",icon:"cubeic-wrong"}).show()}else"verificationCode"===e.type?t["$createDialog"]({type:"alert",content:"验证码错误或者过期",icon:"cubeic-wrong"}).show():t["$createDialog"]({type:"alert",content:e.message,icon:"cubeic-wrong"}).show()})}else{var n=this["$createToast"]({time:1e3,txt:"稍后再试..."});n.show()}}}]),t}(d["c"]);p=Object(l["a"])([Object(d["a"])({components:{}})],p);var f=p,b=f,m=(i("da5d"),i("b9ac"),i("2877")),h=Object(m["a"])(b,o,n,!1,null,"205a2488",null);t["default"]=h.exports},b0b4:function(e,t,i){"use strict";i.d(t,"a",function(){return s});var o=i("85f2"),n=i.n(o);function a(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),n()(e,o.key,o)}}function s(e,t,i){return t&&a(e.prototype,t),i&&a(e,i),e}},b9ac:function(e,t,i){"use strict";var o=i("c8a6"),n=i.n(o);n.a},c8a6:function(e,t,i){},da5d:function(e,t,i){"use strict";var o=i("42c7"),n=i.n(o);n.a}}]);
//# sourceMappingURL=login.31555a19.js.map