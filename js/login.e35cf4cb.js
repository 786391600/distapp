(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0637":function(e,t,i){"use strict";var n=i("d1cf"),o=i.n(n);o.a},"9ed6":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[e._m(0),i("cube-form",{staticClass:"home-form",attrs:{model:e.model,options:e.options},on:{submit:e.submitHandler}},[i("cube-form-group",[i("div",[i("cube-form-item",{attrs:{field:e.fields[0]}})],1),e.isVerification?i("div",{staticClass:"verificationCode"},[i("div",[i("cube-form-item",{attrs:{field:e.fields[1]}})],1),i("div",{staticClass:"verificationCode-button"},[i("cube-button",{attrs:{outline:!0,primary:!0,inline:!0},on:{click:e.getVerificationCode}},[e.sendMsgDisabled?i("span",[e._v(e._s(e.time+"秒后获取"))]):i("span",[e._v("获取验证码")])])],1)]):e._e()]),i("cube-form-group",[i("cube-button",{staticClass:"submit",attrs:{type:"submit"}},[e._v("立即绑定")])],1)],1)],1)},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header"},[i("span",{staticClass:"title"},[e._v("请输入手机号")]),i("span",{staticClass:"tip"},[e._v("请输入商务对接的手机号")]),i("span",{staticClass:"tip"},[e._v("平台目前不支持对外注册，请联系：13934691550")])])}],s=(i("a481"),i("d225")),a=i("b0b4"),c=i("308d"),r=i("6bb5"),u=i("4e2b"),l=i("9ab4"),d=i("60a3"),p=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(c["a"])(this,Object(r["a"])(t).apply(this,arguments)),e.options={phone:"",verificationCode:""},e.model={phone:"",openid:""},e.fields=[{type:"input",modelKey:"phone",label:"手机号",props:{placeholder:"请输入号码"},rules:{required:!0,type:"tel"}},{type:"input",modelKey:"verificationCode",label:"验证码",props:{placeholder:"请输入",type:"text"},rules:{required:!0}}],e.isVerification=!1,e}return Object(u["a"])(t,e),Object(a["a"])(t,[{key:"mounted",value:function(){this.getBindingInfo()}},{key:"getBindingInfo",value:function(){var e=this,t=this.$route.query;if(t.code){var i=this["$createToast"]({time:0,txt:"数据获取中..."});i.show(),this.$store.dispatch("getCodeInfo",{code:t.code}).then(function(t){t.success&&t.data.openid&&(e.openid=t.data.openid,e.$store.commit("SET_SESSION_ID","noSession")),i.hide()})}else console.log("不是微信登陆")}},{key:"submitHandler",value:function(e){var t=this;if(e.preventDefault(),this.openid){var i=this["$createToast"]({time:0,txt:"绑定中..."});i.show();var n=Object.assign({},this.model);n.openid=this.openid,this.$store.dispatch("bindingOpenid",n).then(function(e){if(i.hide(),e.success){var n=e.data;n.sendSms?t.isVerification=!0:n.isBind?(t.$store.commit("SET_USER_INFO",n.userInfo),t.$store.commit("SET_SESSION_ID",t.openid),t.$router.replace({path:"/appcenter"})):t["$createDialog"]({type:"alert",content:"您的手机号没有绑定，请联系商务开通！",icon:"cubeic-wrong"}).show()}else"verificationCode"===e.type?t["$createDialog"]({type:"alert",content:"验证码错误或者过期",icon:"cubeic-wrong"}).show():t["$createDialog"]({type:"alert",content:e.message,icon:"cubeic-wrong"}).show()})}else{var o=this["$createToast"]({time:1e3,txt:"稍后再试..."});o.show()}}}]),t}(d["c"]);p=Object(l["a"])([Object(d["a"])({components:{}})],p);var f=p,b=f,m=(i("0637"),i("b9ac"),i("2877")),h=Object(m["a"])(b,n,o,!1,null,"6a7adcdd",null);t["default"]=h.exports},b0b4:function(e,t,i){"use strict";i.d(t,"a",function(){return a});var n=i("85f2"),o=i.n(n);function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),o()(e,n.key,n)}}function a(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}},b9ac:function(e,t,i){"use strict";var n=i("c8a6"),o=i.n(n);o.a},c8a6:function(e,t,i){},d1cf:function(e,t,i){}}]);
//# sourceMappingURL=login.e35cf4cb.js.map