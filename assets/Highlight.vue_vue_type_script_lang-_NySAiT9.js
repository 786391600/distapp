import{d as t,R as r,x as e,M as s,a as l}from"./index-xKMN8uKn.js";const o=t({name:"Highlight",props:{tag:r.string.def("span"),keys:{type:Array,default:()=>[]},color:r.string.def("var(--el-color-primary)")},emits:["click"],setup(t,{emit:r,slots:o}){const a=e((()=>t.keys.map((e=>s("span",{onClick:()=>{r("click",e)},style:{color:t.color,cursor:"pointer"}},e))))),n=()=>{if(!(null==o?void 0:o.default))return null;const r=null==o?void 0:o.default()[0].children;if(!r)return null==o?void 0:o.default()[0];const e=(n=r,t.keys.forEach(((t,r)=>{const e=new RegExp(t,"g");n=n.replace(e,`{{${r}}}`)})),n.split(/{{|}}/));var n;const i=/^[0-9]*$/,c=e.map((t=>i.test(t)&&l(a)[t]||t));return s(t.tag,c)};return()=>n()}});export{o as _};
