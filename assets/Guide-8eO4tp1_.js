import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-JQS4WQ-M.js";import{k as t,j as o,d as n,o as i,i as r,w as s,e as l,A as d,t as a,a as p,D as c}from"./index-xKMN8uKn.js";import"./el-card-l7jIfdM_.js";import"./el-popper-Y51o7hz7.js";let v={};function u(e={}){v={animate:!0,allowClose:!0,overlayOpacity:.7,smoothScroll:!1,disableActiveInteraction:!1,showProgress:!1,stagePadding:10,stageRadius:5,popoverOffset:10,showButtons:["next","previous","close"],disableButtons:[],overlayColor:"#000",...e}}function m(e){return e?v[e]:v}function h(e,t,o,n){return(e/=n/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t}function w(e){const t='a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';return e.flatMap((e=>{const o=e.matches(t),n=Array.from(e.querySelectorAll(t));return[...o?[e]:[],...n]})).filter((e=>"none"!==getComputedStyle(e).pointerEvents&&function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}(e)))}function g(e){if(!e||function(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(e))return;const t=m("smoothScroll");e.scrollIntoView({behavior:!t||f(e)?"auto":"smooth",inline:"center",block:"center"})}function f(e){if(!e||!e.parentElement)return;const t=e.parentElement;return t.scrollHeight>t.clientHeight}let y={};function b(e,t){y[e]=t}function x(e){return e?y[e]:y}function _(){y={}}let C={};function L(e,t){C[e]=t}function E(e){var t;null==(t=C[e])||t.call(C)}function k(e){if(!e)return;const t=e.getBoundingClientRect(),o={x:t.x,y:t.y,width:t.width,height:t.height};b("__activeStagePosition",o),B(o)}function $(e){const t=function(e){const t=window.innerWidth,o=window.innerHeight,n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.classList.add("driver-overlay","driver-overlay-animated"),n.setAttribute("viewBox",`0 0 ${t} ${o}`),n.setAttribute("xmlSpace","preserve"),n.setAttribute("xmlnsXlink","http://www.w3.org/1999/xlink"),n.setAttribute("version","1.1"),n.setAttribute("preserveAspectRatio","xMinYMin slice"),n.style.fillRule="evenodd",n.style.clipRule="evenodd",n.style.strokeLinejoin="round",n.style.strokeMiterlimit="2",n.style.zIndex="10000",n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="100%",n.style.height="100%";const i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("d",P(e)),i.style.fill=m("overlayColor")||"rgb(0,0,0)",i.style.opacity=`${m("overlayOpacity")}`,i.style.pointerEvents="auto",i.style.cursor="auto",n.appendChild(i),n}(e);document.body.appendChild(t),T(t,(e=>{"path"===e.target.tagName&&E("overlayClick")})),b("__overlaySvg",t)}function B(e){const t=x("__overlaySvg");if(!t)return void $(e);const o=t.firstElementChild;if("path"!==(null==o?void 0:o.tagName))throw new Error("no path element found in stage svg");o.setAttribute("d",P(e))}function P(e){const t=window.innerWidth,o=window.innerHeight,n=m("stagePadding")||0,i=m("stageRadius")||0,r=e.width+2*n,s=e.height+2*n,l=Math.min(i,r/2,s/2),d=Math.floor(Math.max(l,0)),a=r-2*d,p=s-2*d;return`M${t},0L0,0L0,${o}L${t},${o}L${t},0Z\n    M${e.x-n+d},${e.y-n} h${a} a${d},${d} 0 0 1 ${d},${d} v${p} a${d},${d} 0 0 1 -${d},${d} h-${a} a${d},${d} 0 0 1 -${d},-${d} v-${p} a${d},${d} 0 0 1 ${d},-${d} z`}function A(e){const{element:t}=e;let o="string"==typeof t?document.querySelector(t):t;o||(o=function(){const e=document.getElementById("driver-dummy-element");if(e)return e;let t=document.createElement("div");return t.id="driver-dummy-element",t.style.width="0",t.style.height="0",t.style.pointerEvents="none",t.style.opacity="0",t.style.position="fixed",t.style.top="50%",t.style.left="50%",document.body.appendChild(t),t}()),function(e,t){const o=Date.now(),n=x("__activeStep"),i=x("__activeElement")||e,r=!i||i===e,s="driver-dummy-element"===e.id,l="driver-dummy-element"===i.id,d=m("animate"),a=t.onHighlightStarted||m("onHighlightStarted"),p=(null==t?void 0:t.onHighlighted)||m("onHighlighted"),c=(null==n?void 0:n.onDeselected)||m("onDeselected"),v=m(),u=x();!r&&c&&c(l?void 0:i,n,{config:v,state:u}),a&&a(s?void 0:e,t,{config:v,state:u});const w=!r&&d;let f=!1;(function(){const e=x("popover");e&&(e.wrapper.style.display="none")})(),b("previousStep",n),b("previousElement",i),b("activeStep",t),b("activeElement",e);const y=()=>{if(x("__transitionCallback")!==y)return;const r=Date.now()-o,l=400-r<=200;t.popover&&l&&!f&&w&&(W(e,t),f=!0),m("animate")&&r<400?function(e,t,o,n){let i=x("__activeStagePosition");const r=i||o.getBoundingClientRect(),s=n.getBoundingClientRect();i={x:h(e,r.x,s.x-r.x,t),y:h(e,r.y,s.y-r.y,t),width:h(e,r.width,s.width-r.width,t),height:h(e,r.height,s.height-r.height,t)},B(i),b("__activeStagePosition",i)}(r,400,i,e):(k(e),p&&p(s?void 0:e,t,{config:m(),state:x()}),b("__transitionCallback",void 0),b("__previousStep",n),b("__previousElement",i),b("__activeStep",t),b("__activeElement",e)),window.requestAnimationFrame(y)};b("__transitionCallback",y),window.requestAnimationFrame(y),g(e),!w&&t.popover&&W(e,t),i.classList.remove("driver-active-element","driver-no-interaction"),i.removeAttribute("aria-haspopup"),i.removeAttribute("aria-expanded"),i.removeAttribute("aria-controls"),m("disableActiveInteraction")&&e.classList.add("driver-no-interaction"),e.classList.add("driver-active-element"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-controls","driver-popover-content")}(o,e)}function S(){const e=x("__activeElement"),t=x("__activeStep");e&&(k(e),function(){const e=x("__activeStagePosition"),t=x("__overlaySvg");if(!e)return;if(!t)return;const o=window.innerWidth,n=window.innerHeight;t.setAttribute("viewBox",`0 0 ${o} ${n}`)}(),z(e,t))}function D(){const e=x("__resizeTimeout");e&&window.cancelAnimationFrame(e),b("__resizeTimeout",window.requestAnimationFrame(S))}function H(e){var t;if(!x("isInitialized")||"Tab"!==e.key&&9!==e.keyCode)return;const o=x("__activeElement"),n=null==(t=x("popover"))?void 0:t.wrapper,i=w([...n?[n]:[],...o?[o]:[]]),r=i[0],s=i[i.length-1];if(e.preventDefault(),e.shiftKey){const e=i[i.indexOf(document.activeElement)-1]||s;null==e||e.focus()}else{const e=i[i.indexOf(document.activeElement)+1]||r;null==e||e.focus()}}function M(e){var t;(null==(t=m("allowKeyboardControl"))||t)&&("Escape"===e.key?E("escapePress"):"ArrowRight"===e.key?E("arrowRightPress"):"ArrowLeft"===e.key&&E("arrowLeftPress"))}function T(e,t,o){const n=(t,n)=>{const i=t.target;e.contains(i)&&((!o||o(i))&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()),null==n||n(t))};document.addEventListener("pointerdown",n,!0),document.addEventListener("mousedown",n,!0),document.addEventListener("pointerup",n,!0),document.addEventListener("mouseup",n,!0),document.addEventListener("click",(e=>{n(e,t)}),!0)}function W(e,t){var o,n;let i=x("popover");i&&document.body.removeChild(i.wrapper),i=function(){const e=document.createElement("div");e.classList.add("driver-popover");const t=document.createElement("div");t.classList.add("driver-popover-arrow");const o=document.createElement("header");o.id="driver-popover-title",o.classList.add("driver-popover-title"),o.style.display="none",o.innerText="Popover Title";const n=document.createElement("div");n.id="driver-popover-description",n.classList.add("driver-popover-description"),n.style.display="none",n.innerText="Popover description is here";const i=document.createElement("button");i.type="button",i.classList.add("driver-popover-close-btn"),i.setAttribute("aria-label","Close"),i.innerHTML="&times;";const r=document.createElement("footer");r.classList.add("driver-popover-footer");const s=document.createElement("span");s.classList.add("driver-popover-progress-text"),s.innerText="";const l=document.createElement("span");l.classList.add("driver-popover-navigation-btns");const d=document.createElement("button");d.type="button",d.classList.add("driver-popover-prev-btn"),d.innerHTML="&larr; Previous";const a=document.createElement("button");return a.type="button",a.classList.add("driver-popover-next-btn"),a.innerHTML="Next &rarr;",l.appendChild(d),l.appendChild(a),r.appendChild(s),r.appendChild(l),e.appendChild(i),e.appendChild(t),e.appendChild(o),e.appendChild(n),e.appendChild(r),{wrapper:e,arrow:t,title:o,description:n,footer:r,previousButton:d,nextButton:a,closeButton:i,footerButtons:l,progress:s}}(),document.body.appendChild(i.wrapper);const{title:r,description:s,showButtons:l,disableButtons:d,showProgress:a,nextBtnText:p=m("nextBtnText")||"Next &rarr;",prevBtnText:c=m("prevBtnText")||"&larr; Previous",progressText:v=m("progressText")||"{current} of {total}"}=t.popover||{};i.nextButton.innerHTML=p,i.previousButton.innerHTML=c,i.progress.innerHTML=v,r?(i.title.innerHTML=r,i.title.style.display="block"):i.title.style.display="none",s?(i.description.innerHTML=s,i.description.style.display="block"):i.description.style.display="none";const u=l||m("showButtons"),h=a||m("showProgress")||!1,f=(null==u?void 0:u.includes("next"))||(null==u?void 0:u.includes("previous"))||h;i.closeButton.style.display=u.includes("close")?"block":"none",f?(i.footer.style.display="flex",i.progress.style.display=h?"block":"none",i.nextButton.style.display=u.includes("next")?"block":"none",i.previousButton.style.display=u.includes("previous")?"block":"none"):i.footer.style.display="none";const y=d||m("disableButtons")||[];null!=y&&y.includes("next")&&(i.nextButton.disabled=!0,i.nextButton.classList.add("driver-popover-btn-disabled")),null!=y&&y.includes("previous")&&(i.previousButton.disabled=!0,i.previousButton.classList.add("driver-popover-btn-disabled")),null!=y&&y.includes("close")&&(i.closeButton.disabled=!0,i.closeButton.classList.add("driver-popover-btn-disabled"));const _=i.wrapper;_.style.display="block",_.style.left="",_.style.top="",_.style.bottom="",_.style.right="",_.id="driver-popover-content",_.setAttribute("role","dialog"),_.setAttribute("aria-labelledby","driver-popover-title"),_.setAttribute("aria-describedby","driver-popover-description");i.arrow.className="driver-popover-arrow";const C=(null==(o=t.popover)?void 0:o.popoverClass)||m("popoverClass")||"";_.className=`driver-popover ${C}`.trim(),T(i.wrapper,(o=>{var n,i,r;const s=o.target,l=(null==(n=t.popover)?void 0:n.onNextClick)||m("onNextClick"),d=(null==(i=t.popover)?void 0:i.onPrevClick)||m("onPrevClick"),a=(null==(r=t.popover)?void 0:r.onCloseClick)||m("onCloseClick");return s.classList.contains("driver-popover-next-btn")?l?l(e,t,{config:m(),state:x()}):E("nextClick"):s.classList.contains("driver-popover-prev-btn")?d?d(e,t,{config:m(),state:x()}):E("prevClick"):s.classList.contains("driver-popover-close-btn")?a?a(e,t,{config:m(),state:x()}):E("closeClick"):void 0}),(e=>!(null!=i&&i.description.contains(e))&&!(null!=i&&i.title.contains(e))&&"string"==typeof e.className&&e.className.includes("driver-popover"))),b("popover",i);const L=(null==(n=t.popover)?void 0:n.onPopoverRender)||m("onPopoverRender");L&&L(i,{config:m(),state:x()}),z(e,t),g(_);const k=w([_,...e.classList.contains("driver-dummy-element")?[]:[e]]);k.length>0&&k[0].focus()}function I(){const e=x("popover");if(null==e||!e.wrapper)return;const t=e.wrapper.getBoundingClientRect(),o=m("stagePadding")||0,n=m("popoverOffset")||0;return{width:t.width+o+n,height:t.height+o+n,realWidth:t.width,realHeight:t.height}}function N(e,t){const{elementDimensions:o,popoverDimensions:n,popoverPadding:i,popoverArrowDimensions:r}=t;return"start"===e?Math.max(Math.min(o.top-i,window.innerHeight-n.realHeight-r.width),r.width):"end"===e?Math.max(Math.min(o.top-(null==n?void 0:n.realHeight)+o.height+i,window.innerHeight-(null==n?void 0:n.realHeight)-r.width),r.width):"center"===e?Math.max(Math.min(o.top+o.height/2-(null==n?void 0:n.realHeight)/2,window.innerHeight-(null==n?void 0:n.realHeight)-r.width),r.width):0}function R(e,t){const{elementDimensions:o,popoverDimensions:n,popoverPadding:i,popoverArrowDimensions:r}=t;return"start"===e?Math.max(Math.min(o.left-i,window.innerWidth-n.realWidth-r.width),r.width):"end"===e?Math.max(Math.min(o.left-(null==n?void 0:n.realWidth)+o.width+i,window.innerWidth-(null==n?void 0:n.realWidth)-r.width),r.width):"center"===e?Math.max(Math.min(o.left+o.width/2-(null==n?void 0:n.realWidth)/2,window.innerWidth-(null==n?void 0:n.realWidth)-r.width),r.width):0}function z(e,t){const o=x("popover");if(!o)return;const{align:n="start",side:i="left"}=(null==t?void 0:t.popover)||{},r=n,s="driver-dummy-element"===e.id?"over":i,l=m("stagePadding")||0,d=I(),a=o.arrow.getBoundingClientRect(),p=e.getBoundingClientRect(),c=p.top-d.height;let v=c>=0;const u=window.innerHeight-(p.bottom+d.height);let h=u>=0;const w=p.left-d.width;let g=w>=0;const f=window.innerWidth-(p.right+d.width);let y=f>=0;const b=!(v||h||g||y);let _=s;if("top"===s&&v?y=g=h=!1:"bottom"===s&&h?y=g=v=!1:"left"===s&&g?y=v=h=!1:"right"===s&&y&&(g=v=h=!1),"over"===s){const e=window.innerWidth/2-d.realWidth/2,t=window.innerHeight/2-d.realHeight/2;o.wrapper.style.left=`${e}px`,o.wrapper.style.right="auto",o.wrapper.style.top=`${t}px`,o.wrapper.style.bottom="auto"}else if(b){const e=window.innerWidth/2-(null==d?void 0:d.realWidth)/2,t=10;o.wrapper.style.left=`${e}px`,o.wrapper.style.right="auto",o.wrapper.style.bottom=`${t}px`,o.wrapper.style.top="auto"}else if(g){const e=Math.min(w,window.innerWidth-(null==d?void 0:d.realWidth)-a.width),t=N(r,{elementDimensions:p,popoverDimensions:d,popoverPadding:l,popoverArrowDimensions:a});o.wrapper.style.left=`${e}px`,o.wrapper.style.top=`${t}px`,o.wrapper.style.bottom="auto",o.wrapper.style.right="auto",_="left"}else if(y){const e=Math.min(f,window.innerWidth-(null==d?void 0:d.realWidth)-a.width),t=N(r,{elementDimensions:p,popoverDimensions:d,popoverPadding:l,popoverArrowDimensions:a});o.wrapper.style.right=`${e}px`,o.wrapper.style.top=`${t}px`,o.wrapper.style.bottom="auto",o.wrapper.style.left="auto",_="right"}else if(v){const e=Math.min(c,window.innerHeight-d.realHeight-a.width);let t=R(r,{elementDimensions:p,popoverDimensions:d,popoverPadding:l,popoverArrowDimensions:a});o.wrapper.style.top=`${e}px`,o.wrapper.style.left=`${t}px`,o.wrapper.style.bottom="auto",o.wrapper.style.right="auto",_="top"}else if(h){const e=Math.min(u,window.innerHeight-(null==d?void 0:d.realHeight)-a.width);let t=R(r,{elementDimensions:p,popoverDimensions:d,popoverPadding:l,popoverArrowDimensions:a});o.wrapper.style.left=`${t}px`,o.wrapper.style.bottom=`${e}px`,o.wrapper.style.top="auto",o.wrapper.style.right="auto",_="bottom"}b?o.arrow.classList.add("driver-popover-arrow-none"):function(e,t,o){const n=x("popover");if(!n)return;const i=o.getBoundingClientRect(),r=I(),s=n.arrow,l=r.width,d=window.innerWidth,a=i.width,p=i.left,c=r.height,v=window.innerHeight,u=i.top,m=i.height;s.className="driver-popover-arrow";let h=t,w=e;"top"===t?(p+a<=0?(h="right",w="end"):p+a-l<=0&&(h="top",w="start"),p>=d?(h="left",w="end"):p+l>=d&&(h="top",w="end")):"bottom"===t?(p+a<=0?(h="right",w="start"):p+a-l<=0&&(h="bottom",w="start"),p>=d?(h="left",w="start"):p+l>=d&&(h="bottom",w="end")):"left"===t?(u+m<=0?(h="bottom",w="end"):u+m-c<=0&&(h="left",w="start"),u>=v?(h="top",w="end"):u+c>=v&&(h="left",w="end")):"right"===t&&(u+m<=0?(h="bottom",w="start"):u+m-c<=0&&(h="right",w="start"),u>=v?(h="top",w="start"):u+c>=v&&(h="right",w="end")),h?(s.classList.add(`driver-popover-arrow-side-${h}`),s.classList.add(`driver-popover-arrow-align-${w}`)):s.classList.add("driver-popover-arrow-none")}(r,_,e)}function O(e={}){function t(){m("allowClose")&&d()}function o(){const e=x("activeIndex"),t=m("steps")||[];if(void 0===e)return;const o=e+1;t[o]?l(o):d()}function n(){const e=x("activeIndex"),t=m("steps")||[];if(void 0===e)return;const o=e-1;t[o]?l(o):d()}function i(){var e;if(x("__transitionCallback"))return;const t=x("activeIndex"),o=x("__activeStep"),i=x("__activeElement");if(void 0===t||void 0===o||void 0===x("activeIndex"))return;const r=(null==(e=o.popover)?void 0:e.onPrevClick)||m("onPrevClick");if(r)return r(i,o,{config:m(),state:x()});n()}function r(){var e;if(x("__transitionCallback"))return;const t=x("activeIndex"),n=x("__activeStep"),i=x("__activeElement");if(void 0===t||void 0===n)return;const r=(null==(e=n.popover)?void 0:e.onNextClick)||m("onNextClick");if(r)return r(i,n,{config:m(),state:x()});o()}function s(){x("isInitialized")||(b("isInitialized",!0),document.body.classList.add("driver-active",m("animate")?"driver-fade":"driver-simple"),window.addEventListener("keyup",M,!1),window.addEventListener("keydown",H,!1),window.addEventListener("resize",D),window.addEventListener("scroll",D),L("overlayClick",t),L("escapePress",t),L("arrowLeftPress",i),L("arrowRightPress",r))}function l(e=0){var t,o,n,i,r,s,a,p;const c=m("steps");if(!c)return void d();if(!c[e])return void d();b("__activeOnDestroyed",document.activeElement),b("activeIndex",e);const v=c[e],u=c[e+1],h=c[e-1],w=(null==(t=v.popover)?void 0:t.doneBtnText)||m("doneBtnText")||"Done",g=m("allowClose"),f=void 0!==(null==(o=v.popover)?void 0:o.showProgress)?null==(n=v.popover)?void 0:n.showProgress:m("showProgress"),y=((null==(i=v.popover)?void 0:i.progressText)||m("progressText")||"{{current}} of {{total}}").replace("{{current}}",`${e+1}`).replace("{{total}}",`${c.length}`),x=(null==(r=v.popover)?void 0:r.showButtons)||m("showButtons"),_=["next","previous",...g?["close"]:[]].filter((e=>!(null!=x&&x.length)||x.includes(e))),C=(null==(s=v.popover)?void 0:s.onNextClick)||m("onNextClick"),L=(null==(a=v.popover)?void 0:a.onPrevClick)||m("onPrevClick"),E=(null==(p=v.popover)?void 0:p.onCloseClick)||m("onCloseClick");A({...v,popover:{showButtons:_,nextBtnText:u?void 0:w,disableButtons:[...h?[]:["previous"]],showProgress:f,progressText:y,onNextClick:C||(()=>{u?l(e+1):d()}),onPrevClick:L||(()=>{l(e-1)}),onCloseClick:E||(()=>{d()}),...(null==v?void 0:v.popover)||{}}})}function d(e=!0){const t=x("__activeElement"),o=x("__activeStep"),n=x("__activeOnDestroyed"),i=m("onDestroyStarted");if(e&&i){return void i(!t||"driver-dummy-element"===(null==t?void 0:t.id)?void 0:t,o,{config:m(),state:x()})}const r=(null==o?void 0:o.onDeselected)||m("onDeselected"),s=m("onDestroyed");if(document.body.classList.remove("driver-active","driver-fade","driver-simple"),window.removeEventListener("keyup",M),window.removeEventListener("resize",D),window.removeEventListener("scroll",D),function(){var e;const t=x("popover");t&&(null==(e=t.wrapper.parentElement)||e.removeChild(t.wrapper))}(),function(){var e;null==(e=document.getElementById("driver-dummy-element"))||e.remove(),document.querySelectorAll(".driver-active-element").forEach((e=>{e.classList.remove("driver-active-element","driver-no-interaction"),e.removeAttribute("aria-haspopup"),e.removeAttribute("aria-expanded"),e.removeAttribute("aria-controls")}))}(),function(){const e=x("__overlaySvg");e&&e.remove()}(),C={},_(),t&&o){const e="driver-dummy-element"===t.id;r&&r(e?void 0:t,o,{config:m(),state:x()}),s&&s(e?void 0:t,o,{config:m(),state:x()})}n&&n.focus()}return u(e),{isActive:()=>x("isInitialized")||!1,refresh:D,drive:(e=0)=>{s(),l(e)},setConfig:u,setSteps:e=>{_(),u({...m(),steps:e})},getConfig:m,getState:x,getActiveIndex:()=>x("activeIndex"),isFirstStep:()=>0===x("activeIndex"),isLastStep:()=>{const e=m("steps")||[],t=x("activeIndex");return void 0!==t&&t===e.length-1},getActiveStep:()=>x("activeStep"),getActiveElement:()=>x("activeElement"),getPreviousElement:()=>x("previousElement"),getPreviousStep:()=>x("previousStep"),moveNext:o,movePrevious:n,moveTo:function(e){(m("steps")||[])[e]?l(e):d()},hasNextStep:()=>{const e=m("steps")||[],t=x("activeIndex");return void 0!==t&&e[t+1]},hasPreviousStep:()=>{const e=m("steps")||[],t=x("activeIndex");return void 0!==t&&e[t-1]},highlight:e=>{s(),A({...e,popover:e.popover?{showButtons:[],showProgress:!1,progressText:"",...e.popover}:void 0})},destroy:()=>{d(!1)}}}const{t:j}=t(),{variables:q}=o(),F=n({__name:"Guide",setup(o){const{t:n}=t(),{drive:v}={...O(u||{showProgress:!0,nextBtnText:j("common.nextLabel"),prevBtnText:j("common.prevLabel"),doneBtnText:j("common.doneLabel"),steps:[{element:`#${q.namespace}-menu`,popover:{title:j("common.menu"),description:j("common.menuDes"),side:"right"}},{element:`#${q.namespace}-tool-header`,popover:{title:j("common.tool"),description:j("common.toolDes"),side:"left"}},{element:`#${q.namespace}-tags-view`,popover:{title:j("common.tagsView"),description:j("common.tagsViewDes"),side:"bottom"}}]})};var u;const m=()=>{v()};return(t,o)=>(i(),r(p(e),{title:p(n)("guideDemo.guide"),message:p(n)("guideDemo.message")},{default:s((()=>[l(p(c),{type:"primary",onClick:m},{default:s((()=>[d(a(p(n)("guideDemo.start")),1)])),_:1})])),_:1},8,["title","message"]))}});export{F as default};
