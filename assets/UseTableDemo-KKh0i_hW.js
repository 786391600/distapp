import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-JQS4WQ-M.js";import{d as t,q as a,e as l,A as o,D as i,r as n,o as s,c as d,w as r,a as m,t as u,O as p,F as c,N as b,k as f,_ as g}from"./index-xKMN8uKn.js";import{_ as D}from"./Table.vue_vue_type_script_lang-lIORahCP.js";import{g as _}from"./index-mgweG9W_.js";import{E as h}from"./el-tag-lyEM4pop.js";import{u as v}from"./useTable-qCwfUbF9.js";import"./el-card-l7jIfdM_.js";import"./el-popper-Y51o7hz7.js";import"./el-checkbox-TmK4Ph9W.js";import"./isEqual-Ylka9Umq.js";import"./el-pagination-vGHARdHa.js";import"./debounce-aOP__3CO.js";import"./el-image-viewer-na4tD7Qd.js";import"./tsxHelper-wGexMPjt.js";import"./el-dropdown-item-BRufpSJQ.js";import"./refs-x16bpk_F.js";import"./index-Mm_mg0nA.js";import"./index-nDEnW3MX.js";function x(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!b(e)}const y=g(t({__name:"UseTableDemo",setup(t){const{tableRegister:b,tableMethods:g,tableState:y}=v({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=y,a=await _({pageIndex:m(e),pageSize:m(t)});return{list:a.data.list,total:a.data.total}}}),{loading:j,dataList:C,total:k,currentPage:w,pageSize:S}=y,{setProps:T,setColumn:A,getElTableExpose:R,addColumn:z,delColumn:E,refresh:O}=g,{t:P}=f(),U=a([{field:"expand",type:"expand",slots:{default:e=>{const{row:t}=e;return l("div",{class:"ml-30px"},[l("div",null,[P("tableDemo.title"),o("："),t.title]),l("div",null,[P("tableDemo.author"),o("："),t.author]),l("div",null,[P("tableDemo.displayTime"),o("："),t.display_time])])}}},{field:"selection",type:"selection"},{field:"index",label:P("tableDemo.index"),type:"index"},{field:"content",label:P("tableDemo.header"),children:[{field:"title",label:P("tableDemo.title")},{field:"author",label:P("tableDemo.author")},{field:"display_time",label:P("tableDemo.displayTime")},{field:"importance",label:P("tableDemo.importance"),formatter:(e,t,a)=>l(h,{type:1===a?"success":2===a?"warning":"danger"},{default:()=>[P(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:P("tableDemo.pageviews")}]},{field:"action",label:P("tableDemo.action"),slots:{default:e=>{let t;return l(i,{type:"primary",onClick:()=>I(e)},x(t=P("tableDemo.action"))?t:{default:()=>[t]})}}}]),I=e=>{},$=n(!0),H=e=>{$.value=e},q=e=>{T({reserveIndex:e})},M=e=>{A([{field:"selection",path:"hidden",value:!e}])},N=n(1),W=()=>{A([{field:"title",path:"label",value:`${P("tableDemo.title")}${m(N)}`}]),N.value++},B=e=>{A([{field:"expand",path:"hidden",value:!e}])},F=async()=>{const e=await R();null==e||e.toggleAllSelection()},L=n(!0),Q=()=>{m(L)?(E("action"),L.value=!1):(z({field:"action",label:P("tableDemo.action"),slots:{default:e=>{let t;return l(i,{type:"primary",onClick:()=>I(e)},x(t=P("tableDemo.action"))?t:{default:()=>[t]})}}}),L.value=!0)},G=n(!1),J=()=>{T({stripe:!m(G)}),G.value=!m(G)},K=n("auto"),V=()=>{"auto"===m(K)?(T({height:300}),K.value=300):(T({height:"auto"}),K.value="auto")},X=async()=>{const e=await R();null==e||e.getSelectionRows()};return(t,a)=>(s(),d(c,null,[l(m(e),{title:`UseTable ${m(P)("tableDemo.operate")}`,style:{"margin-bottom":"20px"}},{default:r((()=>[l(m(i),{onClick:a[0]||(a[0]=e=>H(!0))},{default:r((()=>[o(u(m(P)("tableDemo.show"))+" "+u(m(P)("tableDemo.pagination")),1)])),_:1}),l(m(i),{onClick:a[1]||(a[1]=e=>H(!1))},{default:r((()=>[o(u(m(P)("tableDemo.hidden"))+" "+u(m(P)("tableDemo.pagination")),1)])),_:1}),l(m(i),{onClick:a[2]||(a[2]=e=>q(!0))},{default:r((()=>[o(u(m(P)("tableDemo.reserveIndex")),1)])),_:1}),l(m(i),{onClick:a[3]||(a[3]=e=>q(!1))},{default:r((()=>[o(u(m(P)("tableDemo.restoreIndex")),1)])),_:1}),l(m(i),{onClick:a[4]||(a[4]=e=>M(!0))},{default:r((()=>[o(u(m(P)("tableDemo.showSelections")),1)])),_:1}),l(m(i),{onClick:a[5]||(a[5]=e=>M(!1))},{default:r((()=>[o(u(m(P)("tableDemo.hiddenSelections")),1)])),_:1}),l(m(i),{onClick:W},{default:r((()=>[o(u(m(P)("tableDemo.changeTitle")),1)])),_:1}),l(m(i),{onClick:a[6]||(a[6]=e=>B(!0))},{default:r((()=>[o(u(m(P)("tableDemo.showExpandedRows")),1)])),_:1}),l(m(i),{onClick:a[7]||(a[7]=e=>B(!1))},{default:r((()=>[o(u(m(P)("tableDemo.hiddenExpandedRows")),1)])),_:1}),l(m(i),{onClick:F},{default:r((()=>[o(u(m(P)("tableDemo.selectAllNone")),1)])),_:1}),l(m(i),{onClick:Q},{default:r((()=>[o(u(m(P)("tableDemo.delOrAddAction")),1)])),_:1}),l(m(i),{onClick:J},{default:r((()=>[o(u(m(P)("tableDemo.showOrHiddenStripe")),1)])),_:1}),l(m(i),{onClick:V},{default:r((()=>[o(u(m(P)("tableDemo.fixedHeaderOrAuto")),1)])),_:1}),l(m(i),{onClick:X},{default:r((()=>[o(u(m(P)("tableDemo.getSelections")),1)])),_:1})])),_:1},8,["title"]),l(m(e),{title:`UseTable ${m(P)("tableDemo.example")}`},{default:r((()=>[l(m(D),{pageSize:m(S),"onUpdate:pageSize":a[8]||(a[8]=e=>p(S)?S.value=e:null),currentPage:m(w),"onUpdate:currentPage":a[9]||(a[9]=e=>p(w)?w.value=e:null),showAction:"",columns:U,data:m(C),loading:m(j),pagination:$.value?{total:m(k)}:void 0,onRegister:m(b),onRefresh:m(O)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister","onRefresh"])])),_:1},8,["title"])],64))}}),[["__scopeId","data-v-985f3f47"]]);export{y as default};
