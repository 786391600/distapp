(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["adminLogin"],{"18a0":function(e,n){!function(n,i){e.exports=i(n)}(window,function(e,n){if(!e.jWeixin){var i,t={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},o=function(){var e={};for(var n in t)e[t[n]]=n;return e}(),r=e.document,a=r.title,c=navigator.userAgent.toLowerCase(),s=navigator.platform.toLowerCase(),d=!(!s.match("mac")&&!s.match("win")),l=-1!=c.indexOf("wxdebugger"),u=-1!=c.indexOf("micromessenger"),p=-1!=c.indexOf("android"),f=-1!=c.indexOf("iphone")||-1!=c.indexOf("ipad"),m=(i=c.match(/micromessenger\/(\d+\.\d+\.\d+)/)||c.match(/micromessenger\/(\d+\.\d+)/))?i[1]:"",g={initStartTime:A(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},h={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:f?1:p?2:-1,clientVersion:m,url:encodeURIComponent(location.href)},v={},S={_completes:[]},y={state:0,data:{}};E(function(){g.initEndTime=A()});var I=!1,_=[],w={config:function(n){V("config",v=n);var i=!1!==v.check;E(function(){if(i)b(t.config,{verifyJsApiList:P(v.jsApiList),verifyOpenTagList:P(v.openTagList)},function(){S._complete=function(e){g.preVerifyEndTime=A(),y.state=1,y.data=e},S.success=function(e){h.isPreVerifyOk=0},S.fail=function(e){S._fail?S._fail(e):y.state=-1};var e=S._completes;return e.push(function(){!function(){if(!(d||l||v.debug||m<"6.0.2"||h.systemType<0)){var e=new Image;h.appId=v.appId,h.initTime=g.initEndTime-g.initStartTime,h.preVerifyTime=g.preVerifyEndTime-g.preVerifyStartTime,w.getNetworkType({isInnerInvoke:!0,success:function(n){h.networkType=n.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+h.version+"&o="+h.isPreVerifyOk+"&s="+h.systemType+"&c="+h.clientVersion+"&a="+h.appId+"&n="+h.networkType+"&i="+h.initTime+"&p="+h.preVerifyTime+"&u="+h.url;e.src=i}})}}()}),S.complete=function(n){for(var i=0,t=e.length;i<t;++i)e[i]();S._completes=[]},S}()),g.preVerifyStartTime=A();else{y.state=1;for(var e=S._completes,n=0,o=e.length;n<o;++n)e[n]();S._completes=[]}}),w.invoke||(w.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,M(i),t)},w.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})},ready:function(e){0!=y.state?e():(S._completes.push(e),!u&&v.debug&&e())},error:function(e){m<"6.0.2"||(-1==y.state?e(y.data):S._fail=e)},checkJsApi:function(e){b("checkJsApi",{jsApiList:P(e.jsApiList)},(e._complete=function(e){if(p){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var i in n){var t=o[i];t&&(n[t]=n[i],delete n[i])}return e}(e)},e))},onMenuShareTimeline:function(e){x(t.onMenuShareTimeline,{complete:function(){b("shareTimeline",{title:e.title||a,desc:e.title||a,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){x(t.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?b("sendAppMessage",{title:e.title||a,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):b("sendAppMessage",{title:e.title||a,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){x(t.onMenuShareQQ,{complete:function(){b("shareQQ",{title:e.title||a,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){x(t.onMenuShareWeibo,{complete:function(){b("shareWeiboApp",{title:e.title||a,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){x(t.onMenuShareQZone,{complete:function(){b("shareQZone",{title:e.title||a,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){b("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){b("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){b("startRecord",{},e)},stopRecord:function(e){b("stopRecord",{},e)},onVoiceRecordEnd:function(e){x("onVoiceRecordEnd",e)},playVoice:function(e){b("playVoice",{localId:e.localId},e)},pauseVoice:function(e){b("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){b("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){x("onVoicePlayEnd",e)},uploadVoice:function(e){b("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){b("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){b("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){b("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(p){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){b(t.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){b("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){b("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===I?(I=!0,b("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(I=!1,0<_.length){var n=_.shift();wx.getLocalImgData(n)}},e))):_.push(e)},getNetworkType:function(e){b("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),o=n.substring(t+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){b("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){b(t.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){b("hideOptionMenu",{},e)},showOptionMenu:function(e){b("showOptionMenu",{},e)},closeWindow:function(e){b("closeWindow",{},e=e||{})},hideMenuItems:function(e){b("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){b("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){b("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){b("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){b("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(f){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){b(t.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){b(t.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,i=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,card_ext:a.cardExt};i.push(c)}b(t.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){b("chooseCard",{app_id:v.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,i=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,code:a.code};i.push(c)}b(t.openCard,{card_list:i},e)},consumeAndShareCard:function(e){b(t.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){b(t.chooseWXPay,O(e),e)},openEnterpriseRedPacket:function(e){b(t.openEnterpriseRedPacket,O(e),e)},startSearchBeacons:function(e){b(t.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){b(t.stopSearchBeacons,{},e)},onSearchBeacons:function(e){x(t.onSearchBeacons,e)},openEnterpriseChat:function(e){b("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){b("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){b("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(p){var n=e.extraData;if(n)try{e.extraData=JSON.parse(n)}catch(n){e.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},E(function(){b("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){E(function(){b("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){E(function(){b("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){E(function(){b("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){E(function(){b("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){E(function(){b("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(n){E(function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},T=1,k={};return r.addEventListener("error",function(e){if(!p){var n=e.target,i=n.tagName,t=n.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=T++,n["wx-id"]=o),k[o])return;k[o]=!0,wx.ready(function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})})}}},!0),r.addEventListener("load",function(e){if(!p){var n=e.target,i=n.tagName;if(n.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(k[t]=!1)}}},!0),n&&(e.wx=e.jWeixin=w),w}function b(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,M(i),function(e){C(n,e,t)}):V(n,t)}function x(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){t&&t.trigger&&t.trigger(e),C(n,e,i)}):V(n,t||i)}function M(e){return(e=e||{}).appId=v.appId,e.verifyAppId=v.appId,e.verifySignType="sha1",e.verifyTimestamp=v.timestamp+"",e.verifyNonceStr=v.nonceStr,e.verifySignature=v.signature,e}function O(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function C(e,n,i){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=function(e,n){var i=e,t=o[i];t&&(i=t);var r="ok";if(n){var a=n.indexOf(":");"confirm"==(r=n.substring(a+1))&&(r="ok"),"failed"==r&&(r="fail"),-1!=r.indexOf("failed_")&&(r=r.substring(7)),-1!=r.indexOf("fail_")&&(r=r.substring(5)),"access denied"!=(r=(r=r.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=r||(r="permission denied"),"config"==i&&"function not exist"==r&&(r="ok"),""==r&&(r="fail")}return i+":"+r}(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",v.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var r=t.indexOf(":");switch(t.substring(r+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function P(e){if(e){for(var n=0,i=e.length;n<i;++n){var o=e[n],r=t[o];r&&(e[n]=r)}return e}}function V(e,n){if(!(!v.debug||n&&n.isInnerInvoke)){var i=o[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function A(){return(new Date).getTime()}function E(n){u&&(e.WeixinJSBridge?n():r.addEventListener&&r.addEventListener("WeixinJSBridgeReady",n,!1))}})},2022:function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"home"},[i("div",{staticClass:"search"},[i("cube-input",{attrs:{placeholder:"学校名称"},model:{value:e.schoolStr,callback:function(n){e.schoolStr=n},expression:"schoolStr"}}),i("cube-button",{attrs:{inline:!0},on:{click:e.searchSchoolByName}},[e._v("搜索")])],1),i("div",{staticClass:"list"},e._l(e.schoolList,function(n,t){return i("div",{key:t,staticClass:"item",on:{click:function(i){return e.setSchool(n)}}},[e._v("\n      "+e._s(n.name)+"\n    ")])}),0)])},o=[],r=(i("a481"),i("d225")),a=i("b0b4"),c=i("308d"),s=i("6bb5"),d=i("4e2b"),l=i("9ab4"),u=i("60a3"),p=i("18a0"),f=i.n(p),m=function(e){function n(){var e;return Object(r["a"])(this,n),e=Object(c["a"])(this,Object(s["a"])(n).apply(this,arguments)),e.schoolStr="",e.schoolList=[],e.options={phone:"",verificationCode:""},e.model={phone:"",openid:""},e.fields=[{type:"input",modelKey:"phone",label:"手机号",props:{placeholder:"请输入号码"},rules:{required:!0,type:"tel"}},{type:"input",modelKey:"verificationCode",label:"验证码",props:{placeholder:"请输入",type:"text"},rules:{required:!0}}],e.isVerification=!1,e}return Object(d["a"])(n,e),Object(a["a"])(n,[{key:"mounted",value:function(){this.$store.commit("SET_SESSION_ID","admin")}},{key:"getBindingInfo",value:function(){var e=this,n=this.$route.query;if(n.code){var i=this["$createToast"]({time:0,txt:"数据获取中..."});i.show(),this.$store.dispatch("getCodeInfo",{code:n.code}).then(function(n){if(n.success){var t=n.data.userInfo,o=n.data.schoolInfo;t.openid&&t.isAdmin?(e.openid=t.openid,e.$store.commit("SET_SESSION_ID",e.openid),e.$store.commit("SET_SCHOOL_INFO",o),e.$store.commit("SET_USER_INFO",t),e.$router.replace({path:"schoolAdmin"})):e.$createDialog({type:"confirm",title:"您没有运营权限，请联系管理员！",onConfirm:function(e){f.a.closeWindow()}}).show()}else e.$createDialog({type:"confirm",title:"您没有运营权限，请联系管理员！",onConfirm:function(e){f.a.closeWindow()}}).show();i.hide()})}else this.$createDialog({type:"confirm",title:"您没有运营权限，请联系管理员！",onConfirm:function(e){f.a.closeWindow()}}).show(),console.log("不是微信登陆")}},{key:"submitHandler",value:function(e){var n=this;if(e.preventDefault(),this.openid){var i=this["$createToast"]({time:0,txt:"绑定中..."});i.show();var t=Object.assign({},this.model);t.openid=this.openid,this.$store.dispatch("bindingOpenid",t).then(function(e){if(i.hide(),e.success){var t=e.data;t.sendSms?n.isVerification=!0:t.isBind?(n.$store.commit("SET_USER_INFO",t.userInfo),n.$store.commit("SET_SESSION_ID",n.openid),n.$router.replace({path:"/appcenter"})):n["$createDialog"]({type:"alert",content:"您的手机号没有绑定，请联系商务开通！",icon:"cubeic-wrong"}).show()}else"verificationCode"===e.type?n["$createDialog"]({type:"alert",content:"验证码错误或者过期",icon:"cubeic-wrong"}).show():n["$createDialog"]({type:"alert",content:e.message,icon:"cubeic-wrong"}).show()})}else{var o=this["$createToast"]({time:1e3,txt:"稍后再试..."});o.show()}}},{key:"searchSchoolByName",value:function(){var e=this;if(this.schoolStr){var n=this["$createToast"]({time:0,txt:"数据获取中..."});this.$store.dispatch("getSchoolByName",{name:this.schoolStr}).then(function(i){i.success&&(e.schoolList=i.data),n.hide()})}}},{key:"setSchool",value:function(e){this.$store.commit("SET_SCHOOL_INFO",e),this.$store.commit("SET_USER_INFO",{}),this.$router.push({path:"schoolAdmin"})}}]),n}(u["c"]);m=Object(l["a"])([Object(u["a"])({components:{}})],m);var g=m,h=g,v=(i("6672"),i("2877")),S=Object(v["a"])(h,t,o,!1,null,"274395d4",null);n["default"]=S.exports},5e3:function(e,n,i){},6672:function(e,n,i){"use strict";var t=i("5000"),o=i.n(t);o.a}}]);
//# sourceMappingURL=adminLogin.a09bded1.js.map