(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orderEditor"],{"07e8":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cube-page",class:t.type},[s("header",{staticClass:"header"},[s("h1",[t._v(t._s(t.title))]),s("i",{directives:[{name:"show",rawName:"v-show",value:t.isBack,expression:"isBack"}],staticClass:"cubeic-back",on:{click:t.back}})]),s("div",{staticClass:"wrapper"},[s("section",{directives:[{name:"show",rawName:"v-show",value:t.desc,expression:"desc"}],staticClass:"desc"},[t._t("desc",[t._v(t._s(t.desc))])],2),s("main",{staticClass:"content"},[t._t("content",[t._v(t._s(t.content))])],2)])])},i=[],c=s("d225"),r=s("b0b4"),n=s("308d"),o=s("6bb5"),d=s("4e2b"),l=s("9ab4"),u=s("60a3"),h=function(t){function e(){return Object(c["a"])(this,e),Object(n["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),Object(r["a"])(e,[{key:"back",value:function(){this.$router.back()}}]),e}(u["c"]);Object(l["a"])([Object(u["b"])()],h.prototype,"msg",void 0),Object(l["a"])([Object(u["b"])({default:"",required:!0})],h.prototype,"title",void 0),Object(l["a"])([Object(u["b"])({default:""})],h.prototype,"type",void 0),Object(l["a"])([Object(u["b"])({default:""})],h.prototype,"desc",void 0),Object(l["a"])([Object(u["b"])({default:""})],h.prototype,"content",void 0),Object(l["a"])([Object(u["b"])({default:!0})],h.prototype,"isBack",void 0),h=Object(l["a"])([u["a"]],h);var p=h,b=p,v=(s("a406"),s("2877")),f=Object(v["a"])(b,a,i,!1,null,"21abe868",null);e["a"]=f.exports},6981:function(t,e,s){"use strict";var a=s("a2f4"),i=s.n(a);i.a},"828d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("page",{attrs:{type:"form-def",title:"订单分配",isBack:!0}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("cube-checkbox-group",{attrs:{shape:"square","hollow-style":!0},on:{checked:t.orderChecked,"cancel-checked":t.orderCancelChecked},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},t._l(t.orderList,function(e,a){return s("cube-checkbox",{key:a,staticClass:"checkbox",attrs:{option:e.out_trade_no+"@"+e.number+"@"+e.userId}},[s("p",{staticStyle:{"margin-right":"20px"}},[t._v(t._s(e.start)+"-"+t._s(e.end))]),s("p",{staticClass:"number"},[t._v("人数:"+t._s(e.number))]),s("p",[t._v("联系电话: "+t._s(e.phone))]),s("p",[t._v("身份证")]),t._l(e.riderList,function(e,a){return s("p",{key:a},[t._v("\r\n            "+t._s(e.idCard)+"\r\n          ")])})],2)}),1),s("cube-button",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],staticClass:"btn",on:{click:t.pageTurning}},[t._v("查看更多")]),s("p",{directives:[{name:"show",rawName:"v-show",value:!t.showMore,expression:"!showMore"}],staticClass:"noMore"},[t._v("没有更多了")]),s("div",{staticClass:"footer"}),s("cube-toolbar",{attrs:{actions:t.actions},on:{click:t.clickHandler}}),s("cube-drawer",{ref:"drawer",attrs:{data:t.drawerdata,"selected-index":t.selectedIndex}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("车辆选择")]),s("cube-drawer-panel",{attrs:{data:t.drawerdata}},[t._l(t.drawerdata,function(e,a){return s("cube-drawer-item",{directives:[{name:"show",rawName:"v-show",value:e.id!==t.carId,expression:"item.id !== carId"}],key:a,attrs:{item:e,index:a}},[s("p",{on:{click:function(s){return t.drawerSelect(e)}}},[t._v("车牌："+t._s(e.licensePlate?e.licensePlate:"未填写"))])])}),s("cube-drawer-item",[s("span",[t._v("加载更多")])])],2)],1)],1)])},i=[],c=(s("28a5"),s("d225")),r=s("b0b4"),n=s("308d"),o=s("6bb5"),d=s("4e2b"),l=s("9ab4"),u=s("60a3"),h=s("fdab"),p=s("07e8"),b=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(n["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.page=1,t.limit=10,t.count=0,t.carNums=0,t.checkList=[],t.orderList=[],t.selectNum=0,t.selectCarId="",t.drawerdata=[{}],t.selectedIndex=[],t.actions=[{text:"已选择：0人"},{text:"请选车辆",type:"button",action:"selectCar"},{text:"确认分配",type:"button",action:"distributionOrder"}],t}return Object(d["a"])(e,t),Object(r["a"])(e,[{key:"created",value:function(){this.orderList=[]}},{key:"activated",value:function(){this.checkList=[],this.selectNum=0,this.getOrderList({})}},{key:"deactivated",value:function(){this.resetComponentInfo()}},{key:"getOrderList",value:function(t){var e=this,s=t.skip||0,a=(t.limit,this.carId),i=this["$createToast"]({time:0,txt:"加载..."});i.show(),this.$store.dispatch("getOrderList",{carId:a,skip:s}).then(function(t){t.success&&(e.orderList=e.orderList.concat(t.data.list),e.count=t.data.count),i.hide()})}},{key:"pageTurning",value:function(){if(this.showMore){this.page++;var t=(this.page-1)*this.limit;this.getOrderList({skip:t})}}},{key:"orderChecked",value:function(t){var e=t.split("@");this.selectNum+=parseInt(e[1]),this.actions[0].text="已选择："+this.selectNum+"人"}},{key:"orderCancelChecked",value:function(t){var e=t.split("@");this.selectNum-=parseInt(e[1]),this.actions[0].text="已选择："+this.selectNum+"人"}},{key:"clickHandler",value:function(t){"distributionOrder"===t.action?this.distributionOrder():"selectCar"===t.action&&this.selectCar()}},{key:"selectCar",value:function(){this.getCarList({})}},{key:"distributionOrder",value:function(){if(this.checkList.length<=0){var t=this.$createToast({time:1e3,txt:"请选择订单",type:"txt"});t.show()}else if(!this.selectCarId){var e=this.$createToast({time:1e3,txt:"请选择要分配的车辆",type:"txt"});return e.show(),!1}}},{key:"getCarList",value:function(t){var e=this,s=t.skip||0,a=t.limit||10,i=(this.fleetId,this["$createToast"]({time:0,txt:"加载..."}));i.show(),console.log(this.fleetId,"fleetId"),this.$store.dispatch("getCarList",{fleetId:this.fleetId,skip:s,limit:a}).then(function(t){t.success&&(e.drawerdata[0]?e.drawerdata=t.data.list:e.drawerdata=e.drawerdata.concat(t.data.list),e.count=t.data.count,e.$refs.drawer.show()),i.hide()})}},{key:"drawerSelect",value:function(t){this.selectCarId=t.id,this.actions[1].text=t.licensePlate?"车牌："+t.licensePlate:"车牌：未知",this.$refs.drawer.hide()}},{key:"resetComponentInfo",value:function(){this.page=1,this.count=0,this.orderList=[],this.selectCarId="",this.actions[1].text="请选车辆",this.actions[0].text="已选择：0人"}},{key:"orderAllocation",value:function(){var t=this;if(!(this.checkList.length<=0)&&this.selectCarId){var e=this["$createToast"]({time:0,txt:"订单分配中..."});e.show(),this.$store.dispatch("orderAllocation",{orderList:this.checkList,toCarId:this.selectCarId,carId:this.carId}).then(function(s){if(s.success){var a=t.$createToast({time:1e3,txt:"分配成功！",type:"txt"});a.show(),t.resetComponentInfo(),t.getOrderList({})}e.hide()})}}},{key:"showMore",get:function(){return Math.ceil(this.count/this.limit)>=this.page+1}},{key:"carId",get:function(){return this.$route.query.carId}},{key:"fleetId",get:function(){return this.$route.query.fleetId}}]),e}(u["c"]);Object(l["a"])([Object(u["b"])({default:"default value"})],b.prototype,"propB",void 0),b=Object(l["a"])([Object(u["a"])({components:{HelloWorld:h["a"],Page:p["a"]}})],b);var v=b,f=v,k=(s("6981"),s("2877")),w=Object(k["a"])(f,a,i,!1,null,null,null);e["default"]=w.exports},a2f4:function(t,e,s){},a406:function(t,e,s){"use strict";var a=s("cd26"),i=s.n(a);i.a},cd26:function(t,e,s){}}]);
//# sourceMappingURL=orderEditor.034717a5.js.map