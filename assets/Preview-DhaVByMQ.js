import{d as a,z as s,o as t,c as e,f as l,e as n,w as r,i as c,F as o,B as i,A as u,t as y,U as d,n as p,k as w,_ as g}from"./index-bVKc0PdV.js";const v={class:"preview-box"},R={class:"box"},f={key:0},k={class:"box"},T={class:"tag"},_={class:"price"},b={class:"box"},x={class:"box"},h={class:"box"},I={key:0,class:"tit"},H={class:"box"},m={class:"tit"},L={class:"con"},S=g(a({__name:"Preview",props:{currentRow:{type:Object,default:()=>{}}},setup:a=>(w(),(w,g)=>{const S=s("el-col"),j=s("el-row");return t(),e("div",v,[l("div",R,[n(j,null,{default:r((()=>[a.currentRow&&a.currentRow.salaryTag&&a.currentRow.salaryTag.titleList?(t(),c(S,{key:0,span:12},{default:r((()=>[(t(!0),e(o,null,i(a.currentRow.salaryTag.titleList,((s,l)=>(t(),e("span",{class:"price-title",key:l},[u(y(s.price)+"元/"+y(s.unit),1),l!==a.currentRow.salaryTag.titleList.length-1?(t(),e("span",f,"|")):d("",!0)])))),128))])),_:1})):d("",!0)])),_:1})]),l("div",k,[n(j,null,{default:r((()=>[a.currentRow&&a.currentRow.salaryTag&&a.currentRow.salaryTag.tag?(t(),c(S,{key:0,class:"salaryTag-box",span:12},{default:r((()=>[(t(!0),e(o,null,i(a.currentRow.salaryTag.tag,((a,s)=>(t(),e("div",{class:"salaryTag",key:s},[l("div",T,y(a.tag),1),l("div",_,y(a.price)+"元",1)])))),128))])),_:1})):d("",!0)])),_:1})]),l("div",b,[n(j,null,{default:r((()=>[a.currentRow&&a.currentRow.salaryTag&&a.currentRow.salaryTag.show?(t(),c(S,{key:0,span:12},{default:r((()=>[(t(!0),e(o,null,i(a.currentRow.salaryTag.show,((a,s)=>(t(),e("div",{closable:!1,class:"salaryTag-show",key:s},y(a.text),1)))),128))])),_:1})):d("",!0)])),_:1})]),l("div",x,[n(j,null,{default:r((()=>[a.currentRow&&a.currentRow.StationTag?(t(),c(S,{key:0,class:"salaryTag-box",span:12},{default:r((()=>[(t(!0),e(o,null,i(a.currentRow.StationTag,((a,s)=>(t(),e("div",{class:"StationTag",key:s},y(a.label),1)))),128))])),_:1})):d("",!0)])),_:1})]),l("div",h,[n(j,null,{default:r((()=>[a.currentRow&&a.currentRow.salaryInfo?(t(),c(S,{key:0,span:12},{default:r((()=>[(t(!0),e(o,null,i(a.currentRow.salaryInfo,((a,s)=>(t(),e("div",{class:"salaryInfo-box",key:s},[(t(!0),e(o,null,i(a,((a,n)=>(t(),e("div",{class:p([a.type,"salaryInfo-content"]),key:s+n},["title"===a.type?(t(),e("span",I,"收入"+y(n+1),1)):d("",!0),"content"===a.type?(t(),e("span",{key:1,class:p([a.isHigh?"isHigh":""])},y(a.title)+":",3)):d("",!0),l("span",{class:p([a.isHigh?"isHigh":"con"])},y(a.content),3)],2)))),128))])))),128))])),_:1})):d("",!0)])),_:1})]),l("div",H,[n(j,null,{default:r((()=>[a.currentRow&&a.currentRow.content?(t(),c(S,{key:0,span:12},{default:r((()=>[(t(!0),e(o,null,i(a.currentRow.content,((a,s)=>(t(),e("div",{class:"preview-content",key:s},[(t(!0),e(o,null,i(a,((a,n)=>(t(),e("div",{key:s+n},["title"===a.type?(t(),e("div",{key:0,class:p([a.type])},y(a.content),3)):d("",!0),"content"===a.type?(t(),e("div",{key:1,class:p([a.type])},[l("div",m,y(a.title),1),l("div",L,y(a.content),1)],2)):d("",!0)])))),128))])))),128))])),_:1})):d("",!0)])),_:1})])])})}),[["__scopeId","data-v-0add5cb3"]]);export{S as default};
