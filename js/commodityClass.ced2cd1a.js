(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["commodityClass"],{"00cad":function(e,t){!function(t,i){e.exports=i(t)}(window,function(e,t){function i(t,i,a){e.WeixinJSBridge?WeixinJSBridge.invoke(t,n(i),function(e){r(t,e,a)}):d(t,a)}function a(t,i,a){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){a&&a.trigger&&a.trigger(e),r(t,e,i)}):d(t,a||i)}function n(e){return e=e||{},e.appId=D.appId,e.verifyAppId=D.appId,e.verifySignType="sha1",e.verifyTimestamp=D.timestamp+"",e.verifyNonceStr=D.nonceStr,e.verifySignature=D.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function s(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function r(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var a=t.errMsg;a||(a=t.err_msg,delete t.err_msg,a=c(e,a),t.errMsg=a),(i=i||{})._complete&&(i._complete(t),delete i._complete),a=t.errMsg||"",D.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var n=a.indexOf(":");switch(a.substring(n+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function c(e,t){var i=e,a=v[i];a&&(i=a);var n="ok";if(t){var o=t.indexOf(":");"confirm"==(n=t.substring(o+1))&&(n="ok"),"failed"==n&&(n="fail"),-1!=n.indexOf("failed_")&&(n=n.substring(7)),-1!=n.indexOf("fail_")&&(n=n.substring(5)),"access denied"!=(n=(n=n.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=n||(n="permission denied"),"config"==i&&"function not exist"==n&&(n="ok"),""==n&&(n="fail")}return i+":"+n}function l(e){if(e){for(var t=0,i=e.length;t<i;++t){var a=e[t],n=h[a];n&&(e[t]=n)}return e}}function d(e,t){if(!(!D.debug||t&&t.isInnerInvoke)){var i=v[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(e){if(!(x||_||D.debug||C<"6.0.2"||P.systemType<0)){var t=new Image;P.appId=D.appId,P.initTime=S.initEndTime-S.initStartTime,P.preVerifyTime=S.preVerifyEndTime-S.preVerifyStartTime,B.getNetworkType({isInnerInvoke:!0,success:function(e){P.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+P.version+"&o="+P.isPreVerifyOk+"&s="+P.systemType+"&c="+P.clientVersion+"&a="+P.appId+"&n="+P.networkType+"&i="+P.initTime+"&p="+P.preVerifyTime+"&u="+P.url;t.src=i}})}}function p(){return(new Date).getTime()}function m(t){k&&(e.WeixinJSBridge?t():w.addEventListener&&w.addEventListener("WeixinJSBridgeReady",t,!1))}function f(){B.invoke||(B.invoke=function(t,i,a){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,n(i),a)},B.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}function g(e){if("string"==typeof e&&e.length>0){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var t in h)e[h[t]]=t;return e}(),w=e.document,y=w.title,b=navigator.userAgent.toLowerCase(),T=navigator.platform.toLowerCase(),x=!(!T.match("mac")&&!T.match("win")),_=-1!=b.indexOf("wxdebugger"),k=-1!=b.indexOf("micromessenger"),j=-1!=b.indexOf("android"),I=-1!=b.indexOf("iphone")||-1!=b.indexOf("ipad"),C=function(){var e=b.match(/micromessenger\/(\d+\.\d+\.\d+)/)||b.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),S={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},P={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:I?1:j?2:-1,clientVersion:C,url:encodeURIComponent(location.href)},D={},O={_completes:[]},M={state:0,data:{}};m(function(){S.initEndTime=p()});var V=!1,N=[],B={config:function(e){D=e,d("config",e);var t=!1!==D.check;m(function(){if(t)i(h.config,{verifyJsApiList:l(D.jsApiList)},function(){O._complete=function(e){S.preVerifyEndTime=p(),M.state=1,M.data=e},O.success=function(e){P.isPreVerifyOk=0},O.fail=function(e){O._fail?O._fail(e):M.state=-1};var e=O._completes;return e.push(function(){u()}),O.complete=function(t){for(var i=0,a=e.length;i<a;++i)e[i]();O._completes=[]},O}()),S.preVerifyStartTime=p();else{M.state=1;for(var e=O._completes,a=0,n=e.length;a<n;++a)e[a]();O._completes=[]}}),f()},ready:function(e){0!=M.state?e():(O._completes.push(e),!k&&D.debug&&e())},error:function(e){C<"6.0.2"||(-1==M.state?e(M.data):O._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var i in t){var a=v[i];a&&(t[a]=t[i],delete t[i])}return e};i("checkJsApi",{jsApiList:l(e.jsApiList)},(e._complete=function(e){if(j){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=t(e)},e))},onMenuShareTimeline:function(e){a(h.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||y,desc:e.title||y,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){a(h.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?i("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){a(h.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){a(h.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){a(h.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){i("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){i("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){a("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){a("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(j){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){i(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===V?(V=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(V=!1,N.length>0){var t=N.shift();wx.getLocalImgData(t)}},e))):N.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var a=t.indexOf(":"),n=t.substring(a+1);switch(n){case"wifi":case"edge":case"wwan":e.networkType=n;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},(e._complete=function(e){e=t(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(h.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{},e=e||{})},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(I){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){i(h.openAddress,{},(e._complete=function(e){e=s(e)},e))},openProductSpecificView:function(e){i(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,a=[],n=0,o=t.length;n<o;++n){var s=t[n],r={card_id:s.cardId,card_ext:s.cardExt};a.push(r)}i(h.addCard,{card_list:a},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,a=(t=JSON.parse(t)).length;i<a;++i){var n=t[i];n.cardId=n.card_id,n.cardExt=n.card_ext,n.isSuccess=!!n.is_succ,delete n.card_id,delete n.card_ext,delete n.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){i("chooseCard",{app_id:D.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,a=[],n=0,o=t.length;n<o;++n){var s=t[n],r={card_id:s.cardId,code:s.code};a.push(r)}i(h.openCard,{card_list:a},e)},consumeAndShareCard:function(e){i(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(h.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){i(h.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){i(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){a(h.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:g(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},m(function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){m(function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){m(function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){m(function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){m(function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){m(function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){m(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},L=1,A={};return w.addEventListener("error",function(e){if(!j){var t=e.target,i=t.tagName,a=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=a.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var n=t["wx-id"];if(n||(n=L++,t["wx-id"]=n),A[n])return;A[n]=!0,wx.ready(function(){wx.getLocalImgData({localId:a,success:function(e){t.src=e.localData}})})}}},!0),w.addEventListener("load",function(e){if(!j){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var a=t["wx-id"];a&&(A[a]=!1)}}},!0),t&&(e.wx=e.jWeixin=B),B}})},"0753":function(e,t,i){},2866:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"commodity-class-box"},[i("div",{staticClass:"commodity-class"},[i("cube-scroll",{ref:"scroll",attrs:{data:e.items,options:e.options},on:{"pulling-down":e.onPullingDown,"pulling-up":e.onPullingUp},scopedSlots:e._u([{key:"pulldown",fn:function(t){return e.customPullDown?[t.pullDownRefresh?i("div",{staticClass:"cube-pulldown-wrapper",style:t.pullDownStyle},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.beforePullDown,expression:"props.beforePullDown"}],staticClass:"before-trigger",style:{paddingTop:t.bubbleY+"px"}},[i("span",{class:{rotate:t.bubbleY>e.pullDownRefreshThreshold-40}},[e._v("↓")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.beforePullDown,expression:"!props.beforePullDown"}],staticClass:"after-trigger"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isPullingDown,expression:"props.isPullingDown"}],staticClass:"loading"},[i("cube-loading")],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isPullingDown,expression:"!props.isPullingDown"}],staticClass:"text"},[i("span",{staticClass:"refresh-text"},[e._v("Refresh success")])])])]):e._e()]:void 0}}],null,!0)},[i("ul",{staticClass:"foods-wrapper"},[e._l(e.items,function(t){return i("li",{staticClass:"Title-food-item border-1px"},[i("div",{staticClass:"Dian"},[e._v("·")]),i("div",[e._v("用卷满99减30"+e._s(e.foods))])])}),e._l(e.items,function(t){return i("li",{staticClass:"Title-food-item border-1px"},[i("div",{staticClass:"Dian"},[e._v("·")]),i("div",[e._v("用卷满99减30"+e._s(e.foods))])])}),i("li",{staticClass:"buttom-box"})],2)])],1),i("div",{staticClass:"scroll-list-wrap"},[i("cube-scroll",{ref:"scroll",attrs:{data:e.items,options:e.options},on:{"pulling-down":e.onPullingDown,"pulling-up":e.onPullingUp},scopedSlots:e._u([{key:"pulldown",fn:function(t){return e.customPullDown?[t.pullDownRefresh?i("div",{staticClass:"cube-pulldown-wrapper",style:t.pullDownStyle},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.beforePullDown,expression:"props.beforePullDown"}],staticClass:"before-trigger",style:{paddingTop:t.bubbleY+"px"}},[i("span",{class:{rotate:t.bubbleY>e.pullDownRefreshThreshold-40}},[e._v("↓")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.beforePullDown,expression:"!props.beforePullDown"}],staticClass:"after-trigger"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isPullingDown,expression:"props.isPullingDown"}],staticClass:"loading"},[i("cube-loading")],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isPullingDown,expression:"!props.isPullingDown"}],staticClass:"text"},[i("span",{staticClass:"refresh-text"},[e._v("Refresh success")])])])]):e._e()]:void 0}}],null,!0)},[i("ul",{staticClass:"foods-wrapper"},[e._l(e.items,function(t,a){return i("li",{staticClass:"food-item border-1px"},[i("div",{staticClass:"icon"},[i("img",{attrs:{width:"65",height:"65",src:t.icon}})]),i("div",{staticClass:"food-content"},[i("h2",{staticClass:"name"},[e._v(e._s(t.name))]),i("p",{staticClass:"description"},[e._v(e._s(t.description))]),i("div",{staticClass:"Price-Box"},[i("div",{staticClass:"price"},[i("span",{staticClass:"now"},[e._v("￥"+e._s(t.price))]),i("span",{directives:[{name:"show",rawName:"v-show",value:t.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[e._v("￥"+e._s(t.oldPrice))])]),i("div",{staticClass:"num"},[i("i",{directives:[{name:"show",rawName:"v-show",value:t.num&&t.num>0,expression:"food.num && food.num > 0"}],staticClass:"cubeic-remove",on:{click:function(i){return e.foodReduce(t,a)}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.num&&t.num>0,expression:"food.num && food.num > 0"}],staticClass:"num-center"},[e._v(e._s(e._f("getFoodNum")(t)))]),i("i",{staticClass:"cubeic-add",on:{click:function(i){return e.foodAdd(t,a)}}})])])])])}),i("li",{staticClass:"buttom-box"})],2)])],1),i("payBox")],1)},n=[],o=i("d225"),s=i("b0b4"),r=i("308d"),c=i("6bb5"),l=i("4e2b"),d=i("9ab4"),u=i("60a3"),p=i("319c"),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"orderPayBox"},[i("cube-toolbar",{attrs:{actions:e.actions},on:{click:e.clickHandler}})],1)},f=[],g=(i("ac6a"),i("a481"),i("28a5"),i("00cad")),h=i.n(g),v=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.indicator=!1,e.model={phone:"",openid:""},e.actions=[{text:"合计 ¥00.00",action:"moreMoney"},{type:"button",text:'<div class="payButton">立即购买</div>',action:"payButtonClickHandle"}],e.page=1,e.commodityId="",e.commodityObj={},e.commodityNum=1,e.totalCost=0,e.userInfo={},e.openid="",e.payButtonClick=!1,e.weixinInfo={},e}return Object(l["a"])(t,e),Object(s["a"])(t,[{key:"activated",value:function(){this.$store.commit("SET_SESSION_ID","noSession"),this.$store.state.isUserInfoBack?(this.$set(this,"userInfo",this.$store.state.commodityUserInfo),this.payButtonClick&&this.payButtonClickHandle()):this.pageInit()}},{key:"selectCommodityListChanged",value:function(e){this.actions[0].text="合计 ¥"+e}},{key:"validateHandler",value:function(e){this.validity=e.validity,this.valid=e.valid,console.log(e),console.log("validity",e.validity,e.valid,e.dirty,e.firstInvalidFieldIndex)}},{key:"commodityNumClick",value:function(e){if("add"===e)this.commodityNum=this.commodityNum+1;else if("remove"===e){if(0===this.commodityNum)return;this.commodityNum=this.commodityNum-1}this.initTotalCost()}},{key:"initTotalCost",value:function(){this.totalCost=(this.commodityNum*this.commodityObj.price).toFixed(2),this.actions[0].text="合计 ¥"+this.totalCost}},{key:"getUserInfo",value:function(){var e=this,t=this.$route.query;if(t.code){var i=this["$createToast"]({time:0,txt:"数据获取中..."});i.show(),this.$store.dispatch("getCommodityUserInfo",{code:t.code}).then(function(t){t.success&&t.data.openid&&(e.openid=t.data.openid,e.getWeiXinConfig(),e.getCommodityById(),t.data.userInfo&&(e.userInfo=t.data.userInfo),t.data.weixinInfo&&(e.weixinInfo=t.data.weixinInfo)),i.hide()})}else console.log("不是微信登陆")}},{key:"pageInit",value:function(){var e=this.$route.query,t=e.state;if(t){var i=t.split("@");"commodity"===i[0]&&(this.commodityId=i[1].replace(/\'/g,""))}e.code&&this.getUserInfo()}},{key:"getCommodityById",value:function(){var e=this,t=this["$createToast"]({time:0,txt:"数据获取中..."});t.show(),this.$store.dispatch("getCommodityById",{id:this.commodityId}).then(function(i){i.success&&(e.$set(e,"commodityObj",i.data),e.initTotalCost()),t.hide()})}},{key:"fenToYuan",value:function(e){return"number"!==typeof e||isNaN(e)?null:"合计 ¥"+(e/100).toFixed(2)}},{key:"getWeiXinConfig",value:function(){var e=window.location.href;this.$store.dispatch("getWeixinConfig",{url:e}).then(function(e){if(console.log("获取微信配置成功",e),e.success){var t=e.data;h.a.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["chooseWXPay"]})}h.a.ready(function(){console.log("ready========")}),h.a.error(function(e){console.log(e),console.log("errrrrrrrrrrrrrr")})})}},{key:"clickHandler",value:function(e){e.action&&this[e.action](e)}},{key:"payButtonClickHandle",value:function(){this["$createDialog"]({type:"alert",content:"今日商品已售完，请明天再来！",icon:"cubeic-ok"}).show()}},{key:"userInfoClick",value:function(){this.$router.push({path:"/orderConfirm",query:{userInfo:this.userInfo,openid:this.openid}})}},{key:"tabBarChange",value:function(e){this.page=1,this.isShowMore=!0,this.billList=[],this.getBillListByHouseId()}},{key:"showMoreClick",value:function(){this.page++,this.getBillListByHouseId()}},{key:"setHouseId",value:function(e){this.houseId!==e&&(this.houseId=e,this.getWeiXinConfig(),this.getBillListByHouseId())}},{key:"selectCommodityList",get:function(){var e=0;return this.$store.state.selectCommodityList.forEach(function(t){e+=t.price*t.num}),e}},{key:"computedMsg",get:function(){return"computed "+this.propB}}]),t}(u["c"]);Object(d["a"])([Object(u["d"])("selectCommodityList")],v.prototype,"selectCommodityListChanged",null),Object(d["a"])([Object(u["b"])({default:"default value"})],v.prototype,"propB",void 0),v=Object(d["a"])([Object(u["a"])({components:{banner:p["a"]},filters:{getFormatDate:function(e){return new Date(e).getFullYear()+"年"+(new Date(e).getMonth()+1)+"月"+new Date(e).getDate()},fenToYuan:function(e){return"number"!==typeof e||isNaN(e)?null:"¥"+(e/100).toFixed(2)},billType:function(e){return"property"===e?"物业费用":"parking"===e?"停车费用":"water"===e?"水费":"其他费用"}}})],v);var w=v,y=w,b=(i("e5c3"),i("2877")),T=Object(b["a"])(y,m,f,!1,null,"25e8ea8c",null),x=T.exports,_=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.items=[{id:1,name:"皮蛋瘦肉粥",price:10,oldPrice:"",description:"咸粥",sellCount:229,rating:100,info:"一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",ratings:[{username:"3******c",rateTime:1469281964e3,rateType:0,text:"很喜欢的粥",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"2******3",rateTime:1469271264e3,rateType:0,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"3******b",rateTime:1469261964e3,rateType:1,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],icon:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",image:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"},{id:2,name:"皮蛋瘦肉粥",price:10,oldPrice:"",description:"咸粥",sellCount:229,rating:100,info:"一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",ratings:[{username:"3******c",rateTime:1469281964e3,rateType:0,text:"很喜欢的粥",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"2******3",rateTime:1469271264e3,rateType:0,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"3******b",rateTime:1469261964e3,rateType:1,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],icon:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",image:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"},{id:3,name:"皮蛋瘦肉粥",price:10,oldPrice:"",description:"咸粥",sellCount:229,rating:100,info:"一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",ratings:[{username:"3******c",rateTime:1469281964e3,rateType:0,text:"很喜欢的粥",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"2******3",rateTime:1469271264e3,rateType:0,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"3******b",rateTime:1469261964e3,rateType:1,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],icon:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",image:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"},{id:4,name:"皮蛋瘦肉粥",price:10,oldPrice:"",description:"咸粥",sellCount:229,rating:100,info:"一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",ratings:[{username:"3******c",rateTime:1469281964e3,rateType:0,text:"很喜欢的粥",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"2******3",rateTime:1469271264e3,rateType:0,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"3******b",rateTime:1469261964e3,rateType:1,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],icon:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",image:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"},{id:5,name:"皮蛋瘦肉粥",price:10,oldPrice:"",description:"咸粥",sellCount:229,rating:100,info:"一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",ratings:[{username:"3******c",rateTime:1469281964e3,rateType:0,text:"很喜欢的粥",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"2******3",rateTime:1469271264e3,rateType:0,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"3******b",rateTime:1469261964e3,rateType:1,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],icon:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",image:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"},{id:6,name:"皮蛋瘦肉粥",price:10,oldPrice:"",description:"咸粥",sellCount:229,rating:100,info:"一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",ratings:[{username:"3******c",rateTime:1469281964e3,rateType:0,text:"很喜欢的粥",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"2******3",rateTime:1469271264e3,rateType:0,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"3******b",rateTime:1469261964e3,rateType:1,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],icon:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",image:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"},{id:7,name:"皮蛋瘦肉粥",price:10,oldPrice:"",description:"咸粥",sellCount:229,rating:100,info:"一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",ratings:[{username:"3******c",rateTime:1469281964e3,rateType:0,text:"很喜欢的粥",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"2******3",rateTime:1469271264e3,rateType:0,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"3******b",rateTime:1469261964e3,rateType:1,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],icon:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",image:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"},{id:8,name:"皮蛋瘦肉粥",price:10,oldPrice:"",description:"咸粥",sellCount:229,rating:100,info:"一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",ratings:[{username:"3******c",rateTime:1469281964e3,rateType:0,text:"很喜欢的粥",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"2******3",rateTime:1469271264e3,rateType:0,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"3******b",rateTime:1469261964e3,rateType:1,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],icon:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",image:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"},{id:10,name:"皮蛋瘦肉粥",price:10,oldPrice:"",description:"咸粥",sellCount:229,rating:100,info:"一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",ratings:[{username:"3******c",rateTime:1469281964e3,rateType:0,text:"很喜欢的粥",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"2******3",rateTime:1469271264e3,rateType:0,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"3******b",rateTime:1469261964e3,rateType:1,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],icon:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",image:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"}],e.pullDownRefresh=!1,e.pullDownRefreshThreshold=60,e.pullDownRefreshStop=40,e.pullDownRefreshTxt="Refresh success",e.pullUpLoad=!1,e.pullUpLoadThreshold=0,e.pullUpLoadMoreTxt="Load more",e.pullUpLoadNoMoreTxt="No more data",e.customPullDown=!1,e}return Object(l["a"])(t,e),Object(s["a"])(t,[{key:"onPullingDown",value:function(){}},{key:"onPullingUp",value:function(){}},{key:"foodAdd",value:function(e,t){var i=e.num||0;this.$set(this.items[t],"num",i+1),this.$store.commit("SET_SELECT_COMMODITY_LIST",{type:"add",item:this.items[t]})}},{key:"foodReduce",value:function(e,t){e.num;var i=e.num-1;this.$set(this.items[t],"num",i),this.$store.commit("SET_SELECT_COMMODITY_LIST",{type:"reduce",item:this.items[t]})}},{key:"options",get:function(){return{pullDownRefresh:this.pullDownRefreshObj,pullUpLoad:this.pullUpLoadObj,scrollbar:!1}}},{key:"pullDownRefreshObj",get:function(){return!!this.pullDownRefresh&&{threshold:parseInt(this.pullDownRefreshThreshold),txt:this.pullDownRefreshTxt}}}]),t}(u["c"]);_=Object(d["a"])([Object(u["a"])({components:{banner:p["a"],payBox:x},filters:{getFormatDate:function(e){return new Date(e).getFullYear()+"年"+(new Date(e).getMonth()+1)+"月"+new Date(e).getDate()+"号"},getFoodNum:function(e){return e.num&&e.num>0?e.num:0}}})],_);var k=_,j=k,I=(i("ab95"),Object(b["a"])(j,a,n,!1,null,"3fde2e63",null));t["default"]=I.exports},"319c":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"slide-banner"},[i("cube-slide",{attrs:{data:e.imgUrl}})],1)},n=[],o=(i("ac6a"),i("d225")),s=i("b0b4"),r=i("308d"),c=i("6bb5"),l=i("4e2b"),d=i("9ab4"),u=i("60a3"),p=function(e){function t(){return Object(o["a"])(this,t),Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(s["a"])(t,[{key:"imgUrl",get:function(){if(this.url&&"string"===typeof this.url)return[{image:this.url}];if(Array.isArray(this.url)){var e=[];return this.url.forEach(function(t){e.push({image:t})}),e}return[]}}]),t}(u["c"]);Object(d["a"])([Object(u["b"])({default:""})],p.prototype,"url",void 0),p=Object(d["a"])([Object(u["a"])({components:{},filters:{}})],p);var m=p,f=m,g=(i("5016"),i("72a9"),i("2877")),h=Object(g["a"])(f,a,n,!1,null,"2d55a1be",null);t["a"]=h.exports},5016:function(e,t,i){"use strict";var a=i("fc70"),n=i.n(a);n.a},"5d3b":function(e,t,i){},"72a9":function(e,t,i){"use strict";var a=i("0753"),n=i.n(a);n.a},ab95:function(e,t,i){"use strict";var a=i("e535"),n=i.n(a);n.a},e535:function(e,t,i){},e5c3:function(e,t,i){"use strict";var a=i("5d3b"),n=i.n(a);n.a},fc70:function(e,t,i){}}]);
//# sourceMappingURL=commodityClass.ced2cd1a.js.map