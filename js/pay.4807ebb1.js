(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pay"],{"0e79":function(e,t,i){"use strict";var n=i("0f90"),o=i.n(n);o.a},"0f90":function(e,t,i){},"18a0":function(e,t){!function(t,i){e.exports=i(t)}(window,function(e,t){function i(t,i,n){e.WeixinJSBridge?WeixinJSBridge.invoke(t,o(i),function(e){r(t,e,n)}):l(t,n)}function n(t,i,n){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){n&&n.trigger&&n.trigger(e),r(t,e,i)}):l(t,n||i)}function o(e){return e=e||{},e.appId=B.appId,e.verifyAppId=B.appId,e.verifySignType="sha1",e.verifyTimestamp=B.timestamp+"",e.verifyNonceStr=B.nonceStr,e.verifySignature=B.signature,e}function a(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function s(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function r(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var n=t.errMsg;n||(n=t.err_msg,delete t.err_msg,n=c(e,n),t.errMsg=n),(i=i||{})._complete&&(i._complete(t),delete i._complete),n=t.errMsg||"",B.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var o=n.indexOf(":");switch(n.substring(o+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function c(e,t){var i=e,n=v[i];n&&(i=n);var o="ok";if(t){var a=t.indexOf(":");"confirm"==(o=t.substring(a+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return i+":"+o}function u(e){if(e){for(var t=0,i=e.length;t<i;++t){var n=e[t],o=m[n];o&&(e[t]=o)}return e}}function l(e,t){if(!(!B.debug||t&&t.isInnerInvoke)){var i=v[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function d(e){if(!(S||_||B.debug||C<"6.0.2"||M.systemType<0)){var t=new Image;M.appId=B.appId,M.initTime=x.initEndTime-x.initStartTime,M.preVerifyTime=x.preVerifyEndTime-x.preVerifyStartTime,E.getNetworkType({isInnerInvoke:!0,success:function(e){M.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+M.version+"&o="+M.isPreVerifyOk+"&s="+M.systemType+"&c="+M.clientVersion+"&a="+M.appId+"&n="+M.networkType+"&i="+M.initTime+"&p="+M.preVerifyTime+"&u="+M.url;t.src=i}})}}function p(){return(new Date).getTime()}function f(t){w&&(e.WeixinJSBridge?t():I.addEventListener&&I.addEventListener("WeixinJSBridgeReady",t,!1))}function h(){E.invoke||(E.invoke=function(t,i,n){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,o(i),n)},E.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}function g(e){if("string"==typeof e&&e.length>0){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}if(!e.jWeixin){var m={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var t in m)e[m[t]]=t;return e}(),I=e.document,y=I.title,b=navigator.userAgent.toLowerCase(),k=navigator.platform.toLowerCase(),S=!(!k.match("mac")&&!k.match("win")),_=-1!=b.indexOf("wxdebugger"),w=-1!=b.indexOf("micromessenger"),L=-1!=b.indexOf("android"),T=-1!=b.indexOf("iphone")||-1!=b.indexOf("ipad"),C=function(){var e=b.match(/micromessenger\/(\d+\.\d+\.\d+)/)||b.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),x={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},M={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:T?1:L?2:-1,clientVersion:C,url:encodeURIComponent(location.href)},B={},O={_completes:[]},P={state:0,data:{}};f(function(){x.initEndTime=p()});var $=!1,A=[],E={config:function(e){B=e,l("config",e);var t=!1!==B.check;f(function(){if(t)i(m.config,{verifyJsApiList:u(B.jsApiList)},function(){O._complete=function(e){x.preVerifyEndTime=p(),P.state=1,P.data=e},O.success=function(e){M.isPreVerifyOk=0},O.fail=function(e){O._fail?O._fail(e):P.state=-1};var e=O._completes;return e.push(function(){d()}),O.complete=function(t){for(var i=0,n=e.length;i<n;++i)e[i]();O._completes=[]},O}()),x.preVerifyStartTime=p();else{P.state=1;for(var e=O._completes,n=0,o=e.length;n<o;++n)e[n]();O._completes=[]}}),h()},ready:function(e){0!=P.state?e():(O._completes.push(e),!w&&B.debug&&e())},error:function(e){C<"6.0.2"||(-1==P.state?e(P.data):O._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var i in t){var n=v[i];n&&(t[n]=t[i],delete t[i])}return e};i("checkJsApi",{jsApiList:u(e.jsApiList)},(e._complete=function(e){if(L){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=t(e)},e))},onMenuShareTimeline:function(e){n(m.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||y,desc:e.title||y,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){n(m.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?i("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){n(m.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){n(m.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){n(m.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){i("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){i("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){n("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){n("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(L){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){i(m.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===$?($=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if($=!1,A.length>0){var t=A.shift();wx.getLocalImgData(t)}},e))):A.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var n=t.indexOf(":"),o=t.substring(n+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},(e._complete=function(e){e=t(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(m.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{},e=e||{})},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(T){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){i(m.openAddress,{},(e._complete=function(e){e=s(e)},e))},openProductSpecificView:function(e){i(m.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,n=[],o=0,a=t.length;o<a;++o){var s=t[o],r={card_id:s.cardId,card_ext:s.cardExt};n.push(r)}i(m.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,n=(t=JSON.parse(t)).length;i<n;++i){var o=t[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){i("chooseCard",{app_id:B.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,n=[],o=0,a=t.length;o<a;++o){var s=t[o],r={card_id:s.cardId,code:s.code};n.push(r)}i(m.openCard,{card_list:n},e)},consumeAndShareCard:function(e){i(m.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(m.chooseWXPay,a(e),e)},openEnterpriseRedPacket:function(e){i(m.openEnterpriseRedPacket,a(e),e)},startSearchBeacons:function(e){i(m.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(m.stopSearchBeacons,{},e)},onSearchBeacons:function(e){n(m.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:g(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},f(function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){f(function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){f(function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){f(function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){f(function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){f(function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){f(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},D=1,N={};return I.addEventListener("error",function(e){if(!L){var t=e.target,i=t.tagName,n=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=n.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=D++,t["wx-id"]=o),N[o])return;N[o]=!0,wx.ready(function(){wx.getLocalImgData({localId:n,success:function(e){t.src=e.localData}})})}}},!0),I.addEventListener("load",function(e){if(!L){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var n=t["wx-id"];n&&(N[n]=!1)}}},!0),t&&(e.wx=e.jWeixin=E),E}})},"3cdd":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"accountSelect"},[i("div",{staticClass:"address"},[i("div",{staticClass:"info"},[i("i",{staticClass:"iconfont iconxiaoqu1"}),i("cube-select",{attrs:{options:e.houseOptions},on:{change:e.houseChange},model:{value:e.houseId,callback:function(t){e.houseId=t},expression:"houseId"}})],1)])])},o=[],a=(i("ac6a"),i("a481"),i("28a5"),i("d225")),s=i("b0b4"),r=i("308d"),c=i("6bb5"),u=i("4e2b"),l=i("9ab4"),d=i("60a3"),p=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.houseList=[],e.houseId="",e.queryHouseId="",e}return Object(u["a"])(t,e),Object(s["a"])(t,[{key:"activated",value:function(){var e=this.$route.query,t=e.state;if(t){var i=t.split("@");"houseId"===i[0]&&(this.queryHouseId=i[1],e.houseId=i[1])}if(this.houseId&&e.houseId&&e.houseId===this.houseId)this.$emit("change",this.houseId);else{if(this.houseId&&!e.houseId)return;this.pageInit()}}},{key:"getBindingInfo",value:function(){var e=this,t=this.$route.query;if(t.code){var i=this["$createToast"]({time:0,txt:"数据获取中..."});i.show(),this.$store.dispatch("getCodeInfo",{code:t.code}).then(function(t){t.success&&(t.data.openid?(e.openid=t.data.openid,e.$router.replace({path:"/login",query:{openid:t.data.openid,jump:"/home"}})):t.data.sessionId&&(e.$store.commit("SET_SESSION_ID",t.data.sessionId),e.$store.commit("SET_USER_INFO",t.data.userInfo),t.data.userInfo.houseId&&t.data.userInfo.houseId.length>0?e.getHouseList():e.$store.state.userInfo&&e.$store.state.userInfo.power&&e.$store.state.userInfo.power.length>0&&e.$router.push({path:"/admin",query:{}}))),i.hide()})}else console.log("不是微信登陆")}},{key:"pageInit",value:function(){var e=this,t=this.$route.query;if(this.$store.state.houseList&&this.$store.state.houseList.length>0)return this.$store.state.houseList.forEach(function(t,i){e.$set(e.houseList,i,t)}),void(t.houseId?this.houseId=t.houseId:this.houseId=this.houseList[0].id);this.$store.state.sessionId&&!this.houseId?this.getHouseList():t.code&&!this.$store.state.sessionId&&this.getBindingInfo()}},{key:"getHouseList",value:function(){var e=this,t=this;this.$store.dispatch("getHouseList",{}).then(function(i){i.data&&i.data.list?i.data.list.length>0&&(i.data.list.forEach(function(e,i){t.$set(t.houseList,i,e)}),e.queryHouseId?e.houseId=e.queryHouseId:e.houseId=e.houseList[0].id,e.$store.commit("SET_HOUSE_LIST",e.houseList)):e.$store.state.userInfo&&e.$store.state.userInfo.power&&e.$store.state.userInfo.power.length>0&&e.$router.push({path:"/admin",query:{}})})}},{key:"getFloorByAccountId",value:function(){var e=this,t=this["$createToast"]({time:0,txt:"数据获取中..."});t.show(),this.$store.dispatch("getFloorByAccountId",{accountId:this.accountId}).then(function(i){i.success&&("incomplete"===e.selectedLabelDefault?(e.billList=i.data.list,e.initCheckbox()):i.data.list.length>0?e.billList=e.billList.concat(i.data.list):e.isShowMore=!1),t.hide()})}},{key:"houseChange",value:function(e){this.$emit("change",e)}},{key:"computedMsg",get:function(){return"computed "+this.propB}},{key:"houseOptions",get:function(){return this.houseList.forEach(function(e){e.value=e.id;var t="";"0"!==e.unitNum&&0!==e.unitNum&&(t=e.unitNum+"单元"),e.text=e.account_info[0].name+" "+e.build_info[0].name+" "+t+e.floorNum+"层"+e.roomNum+"室"}),this.houseList}}]),t}(d["c"]);Object(l["a"])([Object(d["d"])("houseId")],p.prototype,"houseChange",null),p=Object(l["a"])([Object(d["a"])({components:{},filters:{}})],p);var f=p,h=f,g=(i("a1c9"),i("8a2a"),i("2877")),m=Object(g["a"])(h,n,o,!1,null,"29081e81",null);t["a"]=m.exports},"7bb3":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"payBox"},[i("houseSelect",{on:{change:e.setHouseId}}),i("div",{staticClass:"header"},[i("div",{staticClass:"expense"},[i("div",{staticClass:"num"},[e._v(e._s(e._f("fenToYuan")(e.totalCost)))]),i("div",{staticClass:"text"},[e._v("欠缴费用")])])]),i("div",{staticClass:"swipe-wrapper"},[i("cube-tab-bar",{attrs:{data:e.tabBarList},on:{change:e.tabBarChange},model:{value:e.selectedLabelDefault,callback:function(t){e.selectedLabelDefault=t},expression:"selectedLabelDefault"}}),i("cube-checkbox-group",{on:{input:e.checkboxChange},model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},[e._l(e.billList,function(t,n){return i("div",{staticClass:"bill_list"},[i("cube-checkbox",{attrs:{option:{value:t.id,disabled:"complete"===e.selectedLabelDefault}}},[i("div",{staticClass:"bill_list_box"},[i("span",[e._v(e._s(e._f("getFormatDate")(t.buildDate)))]),i("span",[e._v(e._s(e._f("fenToYuan")(t.cost)))])]),i("div",{staticClass:"bill_list_box"},[t.costName?i("span",[e._v(e._s(t.costName))]):i("span",[e._v(e._s(e._f("billType")(t.type)))])])])],1)}),0===e.billList.length&&"incomplete"===e.selectedLabelDefault?i("div",{staticClass:"more"},[e._v("您没有未缴账单")]):e._e(),"complete"===e.selectedLabelDefault&&e.isShowMore?i("div",{staticClass:"more",on:{click:e.showMoreClick}},[e._v("加载更多")]):e._e(),"complete"!==e.selectedLabelDefault||e.isShowMore?e._e():i("div",{staticClass:"more"},[e._v("没有数据了")])],2)],1),i("cube-toolbar",{directives:[{name:"show",rawName:"v-show",value:"incomplete"===e.selectedLabelDefault,expression:"selectedLabelDefault === 'incomplete'"}],attrs:{actions:e.actions},on:{click:e.clickHandler}})],1)},o=[],a=(i("ac6a"),i("28a5"),i("a481"),i("d225")),s=i("b0b4"),r=i("308d"),c=i("6bb5"),u=i("4e2b"),l=i("9ab4"),d=i("60a3"),p=i("18a0"),f=i.n(p),h=i("3cdd"),g=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.model={phone:"",openid:""},e.fields=[{type:"input",modelKey:"phone",label:"手机号",props:{placeholder:"请输入"},rules:{required:!0,type:"tel"}},{type:"input",modelKey:"verificationCode",label:"验证码",props:{placeholder:"请输入",type:"text"},rules:{required:!0}}],e.valid=void 0,e.validity={},e.options={},e.time=60,e.sendMsgDisabled=!1,e.isVerification=!1,e.openid="",e.jump="",e.isShowMore=!0,e.actions=[{text:"合计 ¥00.00",action:"moreMoney"},{type:"button",text:'<div class="payButton">立即缴费</div>',action:"payButtonClick"}],e.selectCost=0,e.totalCost=0,e.checkList=[],e.billList=[],e.isMounted=!1,e.houseId="",e.selectedLabelDefault="incomplete",e.tabBarList=[{label:"未缴账单",value:"incomplete"},{label:"已缴账单",value:"complete"}],e.page=1,e}return Object(u["a"])(t,e),Object(s["a"])(t,[{key:"activated",value:function(){}},{key:"validateHandler",value:function(e){this.validity=e.validity,this.valid=e.valid,console.log(e),console.log("validity",e.validity,e.valid,e.dirty,e.firstInvalidFieldIndex)}},{key:"getBindingInfo",value:function(){var e=this,t=this.$route.query;if(t.code){var i=this["$createToast"]({time:0,txt:"数据获取中..."});i.show(),this.$store.dispatch("getCodeInfo",{code:t.code}).then(function(t){t.success&&(t.data.openid?(e.openid=t.data.openid,e.$router.replace({path:"/login",query:{openid:t.data.openid,jump:"/home"}})):t.data.sessionId&&(e.$store.commit("SET_SESSION_ID",t.data.sessionId),e.$store.commit("SET_USER_INFO",t.data.userInfo),e.getWeiXinConfig(),e.getBillListByHouseId())),i.hide()})}else console.log("不是微信登陆")}},{key:"pageInit",value:function(){var e=this.$route.query,t=e.state,i="";if(t){var n=t.split("@");"houseId"===n[0]&&(i=n[1])}e.houseId&&(i=e.houseId),i?(this.houseId=i,this.$store.state.sessionId?(this.page=1,this.billList=[],this.getWeiXinConfig(),this.getBillListByHouseId()):e.code&&this.getBindingInfo()):this["$createDialog"]({type:"alert",content:"登陆方式错误",icon:"cubeic-wrong"}).show()}},{key:"getBillListByHouseId",value:function(){var e=this,t=this["$createToast"]({time:0,txt:"数据获取中..."});t.show(),this.$store.dispatch("getBillListByHouseId",{houseId:this.houseId,type:this.selectedLabelDefault,page:this.page,limit:10}).then(function(i){i.success&&("incomplete"===e.selectedLabelDefault?(e.billList=i.data.list,e.initCheckbox()):i.data.list.length>0?e.billList=e.billList.concat(i.data.list):e.isShowMore=!1),t.hide()})}},{key:"initCheckbox",value:function(){var e=[],t=0;this.billList.forEach(function(i){e.push(i.id),t+=i.cost}),this.totalCost=t,this.selectCost=t,this.actions[0].text=this.fenToYuan(t),this.checkList=e}},{key:"computedPrice",value:function(e){var t=0;this.billList.forEach(function(i){e.forEach(function(e){i.id===e&&(t+=i.cost)})}),this.selectCost=t,this.actions[0].text=this.fenToYuan(t)}},{key:"checkboxChange",value:function(e){this.computedPrice(e)}},{key:"clickHandler",value:function(e){e.action&&this[e.action](e)}},{key:"fenToYuan",value:function(e){return"number"!==typeof e||isNaN(e)?null:"合计 ¥"+(e/100).toFixed(2)}},{key:"getWeiXinConfig",value:function(){var e=window.location.href;this.$store.dispatch("getWeixinConfig",{url:e}).then(function(e){if(console.log("获取微信配置成功",e),e.success){var t=e.data;f.a.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["chooseWXPay"]})}f.a.ready(function(){console.log("ready========")}),f.a.error(function(e){console.log(e),console.log("errrrrrrrrrrrrrr")})})}},{key:"payButtonClick",value:function(){var e=this;0===this.checkList.length&&e["$createDialog"]({type:"alert",content:"请选择账单",icon:"cubeic-important"}).show();var t={};t.rqBillList=this.checkList,t.fee=this.selectCost,t.body="物业缴费",this.$store.dispatch("setUppropertyOrder",t).then(function(t){if(t.success){var i=t.data;f.a.chooseWXPay({timestamp:i.timeStamp,nonceStr:i.nonceStr,package:i.package,signType:i.signType,paySign:i.paySign,success:function(t){var i=e.$createToast({time:2e3,txt:"订单处理中...",mask:!0,onTimeout:function(){e.getBillListByHouseId(),e["$createDialog"]({type:"alert",content:"缴费成功",icon:"cubeic-ok"}).show()}});i.show()},error:function(){}})}})}},{key:"tabBarChange",value:function(e){this.page=1,this.isShowMore=!0,this.billList=[],this.getBillListByHouseId()}},{key:"showMoreClick",value:function(){this.page++,this.getBillListByHouseId()}},{key:"setHouseId",value:function(e){this.houseId!==e&&(this.houseId=e,this.getWeiXinConfig(),this.getBillListByHouseId())}},{key:"computedMsg",get:function(){return"computed "+this.propB}}]),t}(d["c"]);Object(l["a"])([Object(d["b"])({default:"default value"})],g.prototype,"propB",void 0),g=Object(l["a"])([Object(d["a"])({components:{houseSelect:h["a"]},filters:{getFormatDate:function(e){return new Date(e).getFullYear()+"年"+(new Date(e).getMonth()+1)+"月"+new Date(e).getDate()},fenToYuan:function(e){return"number"!==typeof e||isNaN(e)?null:"¥"+(e/100).toFixed(2)},billType:function(e){return"property"===e?"物业费用":"parking"===e?"停车费用":"water"===e?"水费":"其他费用"}}})],g);var m=g,v=m,I=(i("85fd"),i("0e79"),i("2877")),y=Object(I["a"])(v,n,o,!1,null,"e8861e48",null);t["default"]=y.exports},"7fd3":function(e,t,i){},"85fd":function(e,t,i){"use strict";var n=i("7fd3"),o=i.n(n);o.a},"8a2a":function(e,t,i){"use strict";var n=i("ee7d"),o=i.n(n);o.a},a1c9:function(e,t,i){"use strict";var n=i("be17"),o=i.n(n);o.a},be17:function(e,t,i){},ee7d:function(e,t,i){}}]);
//# sourceMappingURL=pay.4807ebb1.js.map