(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["carInfo"],{"07e8":function(t,e,a){"use strict";var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cube-page",class:t.type},[a("header",{staticClass:"header"},[a("h1",[t._v(t._s(t.title))]),a("i",{directives:[{name:"show",rawName:"v-show",value:t.isBack,expression:"isBack"}],staticClass:"cubeic-back",on:{click:t.back}})]),a("div",{staticClass:"wrapper"},[a("section",{directives:[{name:"show",rawName:"v-show",value:t.desc,expression:"desc"}],staticClass:"desc"},[t._t("desc",[t._v(t._s(t.desc))])],2),a("main",{staticClass:"content"},[t._t("content",[t._v(t._s(t.content))])],2)])])},n=[],s=a("d225"),o=a("b0b4"),i=a("308d"),r=a("6bb5"),u=a("4e2b"),l=a("9ab4"),f=a("60a3"),p=function(t){function e(){return Object(s["a"])(this,e),Object(i["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"back",value:function(){this.$router.back()}}]),e}(f["c"]);Object(l["a"])([Object(f["b"])()],p.prototype,"msg",void 0),Object(l["a"])([Object(f["b"])({default:"",required:!0})],p.prototype,"title",void 0),Object(l["a"])([Object(f["b"])({default:""})],p.prototype,"type",void 0),Object(l["a"])([Object(f["b"])({default:""})],p.prototype,"desc",void 0),Object(l["a"])([Object(f["b"])({default:""})],p.prototype,"content",void 0),Object(l["a"])([Object(f["b"])({default:!0})],p.prototype,"isBack",void 0),p=Object(l["a"])([f["a"]],p);var d=p,b=d,h=(a("a406"),a("2877")),v=Object(h["a"])(b,c,n,!1,null,"21abe868",null);e["a"]=v.exports},"0ece":function(t,e,a){"use strict";var c=a("f587"),n=a.n(c);n.a},a406:function(t,e,a){"use strict";var c=a("cd26"),n=a.n(c);n.a},b897:function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page",{attrs:{type:"form-def",title:"订票详情",isBack:!0}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("cube-button",{staticClass:"btn",attrs:{outline:!0}},[t._v("订票人数:"+t._s(t.carNums))]),a("cube-button",{staticClass:"btn",attrs:{outline:!0}},[t._v("剩余票数:"+t._s(t.carInfo.num))]),a("div",{staticClass:"carInfo"},[a("p",[a("span",[t._v("车牌：")]),a("span",[t._v(t._s(t.carInfo.licensePlate?t.carInfo.licensePlate:"未填写"))])]),a("p",[a("span",[t._v("发车地：")]),a("span",[t._v(t._s(t.carInfo.departurePlace?t.carInfo.departurePlace:"未填写"))])]),a("p",[a("span",[t._v("发车时间：")]),a("span",[t._v(t._s(t.carInfo.departureTime?t.carInfo.departureTime:"未填写"))])]),a("p",[a("span",[t._v("负责人：")]),a("span",[t._v(t._s(t.carInfo.contacts_name?t.carInfo.contacts_name:"未填写"))])]),a("p",[a("span",[t._v("联系电话：")]),a("span",[t._v(t._s(t.carInfo.contacts_phone?t.carInfo.contacts_phone:"未填写"))])])]),a("cube-button",{staticClass:"btn",on:{click:function(e){return t.goTo("carEditor")}}},[t._v("车辆管理")]),a("cube-button",{staticClass:"btn",on:{click:function(e){return t.goTo("orderEditor")}}},[t._v("订单管理")]),a("cube-button",{staticClass:"btn",on:{click:t.sendSMS}},[t._v("短信群发")])],1)])},n=[],s=(a("28a5"),a("d225")),o=a("b0b4"),i=a("308d"),r=a("6bb5"),u=a("4e2b"),l=a("9ab4"),f=a("60a3"),p=a("fdab"),d=a("07e8"),b=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(i["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.carList=[],t.page=1,t.limit=10,t.count=0,t.carId="",t.carNums=0,t.carInfo={},t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"activated",value:function(){this.carId=this.$route.query.carId,this.getCarInfo({})}},{key:"deactivated",value:function(){this.carList=[],this.page=1,this.count=0,this.carInfo={}}},{key:"getCarInfo",value:function(t){var e=this,a=(t.skip,t.limit,this.carId),c=this["$createToast"]({time:0,txt:"加载..."});c.show(),this.$store.dispatch("getCarInfo",{carId:a}).then(function(t){t.success&&(e.carNums=t.data.nums,e.carInfo=t.data.carInfo),c.hide()})}},{key:"pageTurning",value:function(){if(this.showMore){this.page++;var t=(this.page-1)*this.limit;this.getCarInfo({skip:t})}}},{key:"goTo",value:function(t){this.$router.push({path:"/"+t,query:{carId:this.carId,fleetId:this.fleetId,carInfo:this.carInfo}})}},{key:"sendSMS",value:function(){var t=this;console.log(this.carInfo);var e=this.carInfo.departureTime.split(" ")[0],a=this.carInfo.licensePlate;if(a){var c="【么么校园】高校大巴，将在"+e+"发车，车牌号："+a+'，乘车地请到公众号查看。有任何问题请及时联系我们。<p style="color:red">注意：每辆车短信只能发一次，请确认好再发送。</p>',n=this.$createDialog({type:"confirm",title:"短信确认",content:c,confirmBtn:{text:"确认发送",active:!0,disabled:!1,href:"javascript:;"},cancelBtn:{text:"取消",active:!1,disabled:!1,href:"javascript:;"},onConfirm:function(){var e=t["$createToast"]({txt:"发送中...",type:"none"});e.show(),t.$store.dispatch("sendSMS",{carInfo:t.carInfo}).then(function(a){if(a.success){e.hide();var c=t["$createToast"]({txt:"发送成功",type:"none",time:3e3});c.show()}else{var n=t["$createToast"]({txt:"发送失败",type:"none",time:3e3});n.show()}})},onCancel:function(){}});n.show()}else{var s=this["$createToast"]({time:2e3,txt:"车牌号未填写",type:"none"});s.show()}}},{key:"showMore",get:function(){return Math.ceil(this.count/this.limit)>=this.page+1}},{key:"fleetId",get:function(){return this.$route.query.fleetId}}]),e}(f["c"]);Object(l["a"])([Object(f["b"])({default:"default value"})],b.prototype,"propB",void 0),b=Object(l["a"])([Object(f["a"])({components:{HelloWorld:p["a"],Page:d["a"]}})],b);var h=b,v=h,I=(a("0ece"),a("2877")),_=Object(I["a"])(v,c,n,!1,null,null,null);e["default"]=_.exports},cd26:function(t,e,a){},f587:function(t,e,a){}}]);
//# sourceMappingURL=carInfo.f09b4224.js.map