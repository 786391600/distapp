(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orderEditor"],{"07e8":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cube-page",class:e.type},[a("header",{staticClass:"header"},[a("h1",[e._v(e._s(e.title))]),a("i",{directives:[{name:"show",rawName:"v-show",value:e.isBack,expression:"isBack"}],staticClass:"cubeic-back",on:{click:e.back}})]),a("div",{staticClass:"wrapper"},[a("section",{directives:[{name:"show",rawName:"v-show",value:e.desc,expression:"desc"}],staticClass:"desc"},[e._t("desc",[e._v(e._s(e.desc))])],2),a("main",{staticClass:"content"},[e._t("content",[e._v(e._s(e.content))])],2)])])},s=[],r=a("d225"),c=a("b0b4"),o=a("308d"),n=a("6bb5"),l=a("4e2b"),d=a("9ab4"),u=a("60a3"),h=function(e){function t(){return Object(r["a"])(this,t),Object(o["a"])(this,Object(n["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"back",value:function(){this.$router.back()}}]),t}(u["c"]);Object(d["a"])([Object(u["b"])()],h.prototype,"msg",void 0),Object(d["a"])([Object(u["b"])({default:"",required:!0})],h.prototype,"title",void 0),Object(d["a"])([Object(u["b"])({default:""})],h.prototype,"type",void 0),Object(d["a"])([Object(u["b"])({default:""})],h.prototype,"desc",void 0),Object(d["a"])([Object(u["b"])({default:""})],h.prototype,"content",void 0),Object(d["a"])([Object(u["b"])({default:!0})],h.prototype,"isBack",void 0),h=Object(d["a"])([u["a"]],h);var p=h,f=p,b=(a("a406"),a("2877")),m=Object(b["a"])(f,i,s,!1,null,"21abe868",null);t["a"]=m.exports},6981:function(e,t,a){"use strict";var i=a("a2f4"),s=a.n(i);s.a},"828d":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page",{attrs:{type:"form-def",title:"订单分配",isBack:!0}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("cube-checkbox-group",{attrs:{shape:"square","hollow-style":!0},on:{checked:e.orderChecked,"cancel-checked":e.orderCancelChecked},model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},e._l(e.orderList,function(t,i){return a("cube-checkbox",{key:i,staticClass:"checkbox",attrs:{option:t.out_trade_no+"@"+t.number+"@"+t.userId}},[a("p",{staticStyle:{"margin-right":"20px"}},[e._v(e._s(t.start)+"-"+e._s(t.end))]),a("p",{staticClass:"number"},[e._v("人数:"+e._s(t.number))]),a("p",[e._v("联系电话: "+e._s(t.phone))]),a("p",[e._v("身份证")]),e._l(t.riderList,function(t,i){return a("p",{key:i},[e._v("\r\n            "+e._s(t.idCard)+"\r\n          ")])})],2)}),1),a("cube-button",{directives:[{name:"show",rawName:"v-show",value:e.showMore,expression:"showMore"}],staticClass:"btn",on:{click:e.pageTurning}},[e._v("查看更多")]),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.showMore,expression:"!showMore"}],staticClass:"noMore"},[e._v("没有更多了")]),a("div",{staticClass:"footer"}),a("cube-toolbar",{attrs:{actions:e.actions},on:{click:e.clickHandler}}),a("cube-drawer",{ref:"drawer",attrs:{data:e.drawerdata,"selected-index":e.selectedIndex}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("车辆选择")]),a("cube-drawer-panel",{attrs:{data:e.drawerdata}},[e._l(e.drawerdata,function(t,i){return a("cube-drawer-item",{directives:[{name:"show",rawName:"v-show",value:t.id!==e.carId,expression:"item.id !== carId"}],key:i,attrs:{item:t,index:i}},[a("p",{on:{click:function(a){return e.drawerSelect(t)}}},[e._v("车牌："+e._s(t.licensePlate?t.licensePlate:"未填写"))])])}),a("cube-drawer-item",[a("span",[e._v("加载更多")])])],2)],1)],1)])},s=[],r=(a("28a5"),a("d225")),c=a("b0b4"),o=a("308d"),n=a("6bb5"),l=a("4e2b"),d=a("9ab4"),u=a("60a3"),h=a("fdab"),p=a("07e8"),f=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(o["a"])(this,Object(n["a"])(t).apply(this,arguments)),e.page=1,e.limit=10,e.count=0,e.carNums=0,e.checkList=[],e.orderList=[],e.selectNum=0,e.selectCarId="",e.drawerdata=[{}],e.selectedIndex=[],e.actions=[{text:"已选择：0人"},{text:"请选车辆",type:"button",action:"selectCar"},{text:"确认分配",type:"button",action:"distributionOrder"}],e}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"created",value:function(){this.orderList=[]}},{key:"activated",value:function(){this.checkList=[],this.selectNum=0,this.getOrderList({})}},{key:"deactivated",value:function(){this.resetComponentInfo()}},{key:"getOrderList",value:function(e){var t=this,a=e.skip||0,i=(e.limit,this.carId),s=this["$createToast"]({time:0,txt:"加载..."});s.show(),this.$store.dispatch("getOrderList",{carId:i,skip:a}).then(function(e){e.success&&(t.orderList=t.orderList.concat(e.data.list),t.count=e.data.count),s.hide()})}},{key:"pageTurning",value:function(){if(this.showMore){this.page++;var e=(this.page-1)*this.limit;this.getOrderList({skip:e})}}},{key:"orderChecked",value:function(e){var t=e.split("@");this.selectNum+=parseInt(t[1]),this.actions[0].text="已选择："+this.selectNum+"人"}},{key:"orderCancelChecked",value:function(e){var t=e.split("@");this.selectNum-=parseInt(t[1]),this.actions[0].text="已选择："+this.selectNum+"人"}},{key:"clickHandler",value:function(e){"distributionOrder"===e.action?this.distributionOrder():"selectCar"===e.action&&this.selectCar()}},{key:"selectCar",value:function(){this.getCarList({})}},{key:"distributionOrder",value:function(){if(this.checkList.length<=0){var e=this.$createToast({time:1e3,txt:"请选择订单",type:"txt"});e.show()}else{if(!this.selectCarId){var t=this.$createToast({time:1e3,txt:"请选择要分配的车辆",type:"txt"});return t.show(),!1}this.orderAllocation()}}},{key:"getCarList",value:function(e){var t=this,a=e.skip||0,i=e.limit||10,s=(this.fleetId,this["$createToast"]({time:0,txt:"加载..."}));s.show(),console.log(this.fleetId,"fleetId"),this.$store.dispatch("getCarList",{fleetId:this.fleetId,skip:a,limit:i}).then(function(e){e.success&&(t.drawerdata[0]?t.drawerdata=e.data.list:t.drawerdata=t.drawerdata.concat(e.data.list),t.count=e.data.count,t.$refs.drawer.show()),s.hide()})}},{key:"drawerSelect",value:function(e){this.selectCarId=e.id,this.actions[1].text=e.licensePlate?"车牌："+e.licensePlate:"车牌：未知",this.$refs.drawer.hide()}},{key:"resetComponentInfo",value:function(){this.page=1,this.count=0,this.orderList=[],this.selectCarId="",this.actions[1].text="请选车辆",this.actions[0].text="已选择：0人"}},{key:"orderAllocation",value:function(){var e=this;if(!(this.checkList.length<=0)&&this.selectCarId){var t=this["$createToast"]({time:0,txt:"订单分配中..."});t.show(),this.$store.dispatch("orderAllocation",{orderList:this.checkList,toCarId:this.selectCarId,carId:this.carId}).then(function(a){if(a.success){var i=e.$createToast({time:1e3,txt:"分配成功！",type:"txt"});i.show(),e.resetComponentInfo(),e.getOrderList({})}t.hide()})}}},{key:"showMore",get:function(){return Math.ceil(this.count/this.limit)>=this.page+1}},{key:"carId",get:function(){return this.$route.query.carId}},{key:"fleetId",get:function(){return this.$route.query.fleetId}}]),t}(u["c"]);Object(d["a"])([Object(u["b"])({default:"default value"})],f.prototype,"propB",void 0),f=Object(d["a"])([Object(u["a"])({components:{HelloWorld:h["a"],Page:p["a"]}})],f);var b=f,m=b,v=(a("6981"),a("2877")),y=Object(v["a"])(m,i,s,!1,null,null,null);t["default"]=y.exports},a2f4:function(e,t,a){},a406:function(e,t,a){"use strict";var i=a("cd26"),s=a.n(i);s.a},a485:function(e,t,a){},cd26:function(e,t,a){},efa2:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page",{attrs:{type:"form-def",title:"车辆编辑",isBack:!0}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("cube-form",{attrs:{model:e.model},on:{submit:e.submitHandler}},[a("cube-form-group",[a("cube-form-item",{attrs:{field:e.fields[0]}}),a("cube-form-item",{attrs:{field:e.fields[1]}}),a("cube-form-item",{attrs:{field:e.fields[2]}}),a("cube-form-item",{attrs:{field:e.fields[3]}}),a("cube-form-item",{attrs:{field:e.fields[4]}}),a("cube-form-item",{attrs:{field:e.fields[5]}},[a("div",{staticStyle:{"text-align":"left"},on:{click:e.showDatePicker}},[e._v(e._s(e.model.departureTime||"Please select"))])]),e.showComplete?a("cube-form-item",{attrs:{field:e.fields[6]}}):e._e()],1),a("cube-form-group",[a("cube-button",{staticClass:"submit",attrs:{type:"submit"}},[e._v("保存")])],1)],1)],1)])},s=[],r=a("d225"),c=a("b0b4"),o=a("308d"),n=a("6bb5"),l=a("4e2b"),d=a("9ab4"),u=a("60a3"),h=a("fdab"),p=a("07e8"),f=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(o["a"])(this,Object(n["a"])(t).apply(this,arguments)),e.departureTime="",e.model={},e.fields=[{type:"input",modelKey:"num",label:"票数",props:{placeholder:"请输入",type:"number"},rules:{required:!0}},{type:"input",modelKey:"contacts_name",label:"负责人",props:{placeholder:"请输入"},rules:{required:!0}},{type:"input",modelKey:"contacts_phone",label:"联系电话",props:{placeholder:"请输入",type:"number"},rules:{required:!0}},{type:"input",modelKey:"licensePlate",label:"车牌",props:{placeholder:"请输入"},rules:{required:!1}},{type:"input",modelKey:"departurePlace",label:"发车地点",props:{placeholder:"请输入"},rules:{required:!0}},{type:"input",modelKey:"departureTime",label:"发车时间",props:{placeholder:"请输入"},rules:{required:!0}},{type:"switch",modelKey:"complete",label:"业务完成",props:{placeholder:"请输入"}}],e}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"activated",value:function(){this.$route.query.carInfo["departureTime"];this.carId=this.$route.query.carId,this.model=this.$route.query.carInfo}},{key:"deactivated",value:function(){this.model={}}},{key:"submitHandler",value:function(e){var t=this;e.preventDefault(),this.$store.dispatch("addOrUpdateCar",this.model).then(function(e){if(e.success){var a=t["$createToast"]({time:3e3,txt:"更新成功",type:"txt"});a.show()}else{var i=t["$createToast"]({time:1e3,txt:"更新失败",type:"txt"});i.show()}})}},{key:"submitClick",value:function(){return!1}},{key:"showDatePicker",value:function(){var e=this.model.departureTime,t=new Date(e);this.dateTimePicker=this.$createDatePicker({title:"发车时间选择",min:new Date(2008,7,8,8,0,0),max:new Date(2020,9,20,20,59,59),value:t,columnCount:6,onSelect:this.dateSelectHandle,onCancel:this.dateCancelHandle}),this.dateTimePicker.show()}},{key:"dateSelectHandle",value:function(e){console.log(e);var t=this.getNowFormatDate(e);this.model["departureTime"]=t}},{key:"dateCancelHandle",value:function(){}},{key:"getNowFormatDate",value:function(e){var t="-",a=":",i=e.getMonth()+1,s=e.getDate(),r=e.getHours(),c=e.getMinutes(),o=e.getSeconds();i>=1&&i<=9&&(i="0"+i),s>=0&&s<=9&&(s="0"+s),r>=0&&r<=9&&(r="0"+r),c>=0&&c<=9&&(c="0"+c),o>=0&&o<=9&&(o="0"+o);var n=e.getFullYear()+t+i+t+s+" "+r+a+c+a+o;return n}},{key:"fleetId",get:function(){return this.$route.query.fleetId}},{key:"showComplete",get:function(){var e=this.model.departureTime;return new Date>new Date(e)}}]),t}(u["c"]);Object(d["a"])([Object(u["b"])({default:"default value"})],f.prototype,"propB",void 0),f=Object(d["a"])([Object(u["a"])({components:{HelloWorld:h["a"],Page:p["a"]}})],f);var b=f,m=b,v=(a("f653"),a("2877")),y=Object(v["a"])(m,i,s,!1,null,null,null);t["default"]=y.exports},f653:function(e,t,a){"use strict";var i=a("a485"),s=a.n(i);s.a}}]);
//# sourceMappingURL=orderEditor.665e4f82.js.map