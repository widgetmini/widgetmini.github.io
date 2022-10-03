import{c as J,a as K,u as c,h as a}from"./css.js";import{u as m}from"./hooks.js";import{t as Q,k as j}from"./keen-slider.min.js";import{D as U}from"./img-zoom2.js";import{u as g}from"./use-effect.js";function h({dark:v,mode:y,vertical:i,control:z,controlMiddle:X,loops:S,autoPlay:k,lazyLoad:n,effect:o,items:l,widthRatio:E,heightRatio:_,zoomHover:q,thumbReverse:B,thumbItems:$}){if(!l||!l.length)return;const T=c(),s=c(null),p=c(),d=c(null),I=c(),[u,D]=m(!1),[w,P]=m([]),[Z,V]=m(0),[O,L]=m(),[N,W]=m(null),C={loop:S,initial:0,mode:y,vertical:i,renderMode:o==="fade"?"custom":"performance",detailsChanged(e){o==="zoom"?W(e.track.details):o==="fade"?e.slides.forEach((t,r)=>{t.style.opacity=e.track.details.slides[r].portion}):e.slides.forEach(t=>{t.style.opacity=1})},slideChanged(e){const t=e.track.details.rel;if(V(t),d&&p){const r=p.current.querySelectorAll(".keen-slider__slide");R(r,function(){d.current.moveToIdx(t),r[t].classList.add("active")})}},created:()=>{D(!0)}},G=e=>{let t,r=!1;function f(){clearTimeout(t)}function x(){clearTimeout(t),!r&&(t=setTimeout(()=>{e.next()},k*1e3))}e.on("created",()=>{e.container.addEventListener("mouseover",()=>{r=!0,f()}),e.container.addEventListener("mouseout",()=>{r=!1,x()}),x()}),e.on("dragStarted",f),e.on("animationEnded",x),e.on("updated",x)},H=e=>{if(!N)return{};const t=N.slides[e],r=.7,f=1-(r-r*t.portion);return{transform:`scale(${f})`,WebkitTransform:`scale(${f})`}},M=[];k&&M.push(G),g(()=>{const e=T.current;s.current?s.current.update(C):s.current=new j(e,C,M)},[v,y,i,z,X,S,k,n,o,l,E,_]),g(()=>{if(n){const e=[...w];e[Z]=!0,P(e)}},[Z]);function R(e,t){return e.forEach(r=>{r.classList.remove("active")}),t()}const A={initial:0,loop:!0,mode:"snap",vertical:i,slides:{perView:$,spacing:8},created(e){e.slides.forEach((t,r)=>{t.addEventListener("click",()=>{s.current.moveToIdx(r),R(e.slides,()=>{t.classList.add("active"),e.moveToIdx(r)})})})}};g(()=>{if(d.current)d.current.update(A);else{if(!u)return;const e=p.current;d.current=new j(e,A)}},[u,$,i]);let b="flex-base";i?B&&(b="flex-reverse"):B?b="flex-col-reverse":b="flex-col";const Y=e=>{L(1*100+"%")},F=e=>{L(0)};return g(()=>{if(q){const e=I.current;e.querySelectorAll(".img").forEach(t=>{new U(t,{paneContainer:e.querySelector(".main"),inlinePane:window.innerWidth<768})})}},[u]),a("host",{shadowDom:!0},a("div",{ref:I,class:`relative flex ${b}`,style:{"aspect-ratio":`${E}/${_}`}},a("div",{class:`relative overflow-hidden ${v?"dark":""}`},a("div",{ref:T,class:`slider-box keen-slider ${o==="zoom"?"zoom-out":""}`},l.map((e,t)=>a("div",{key:t,class:`relative keen-slider__slide ${o==="fade"?"absolute-full":""} ${n?"lazy__slide":""}`},a("a",{href:"#",class:"absolute-full flex-end",style:o==="zoom"?H(t):{}},a("img",{class:"absolute-full img",onmouseover:Y,onmouseout:F,src:n?w[t]?e.image:"":e.image,"data-zoom":n?w[t]?e.image:"":e.image}),a("span",{class:"relative title"},e.title,a("span",{class:"caption"},e.caption)))))),z&&u&&a("div",{class:X?"middle":""},a("svg",{class:"prev",onclick:e=>e.stopPropagation()||s.current?.prev(),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})),a("svg",{class:"next",onclick:e=>e.stopPropagation()||s.current?.next(),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})))),a("div",{ref:p,class:"slider-thumb keen-slider"},l.map((e,t)=>a("div",{class:"keen-slider__slide",style:{backgroundImage:`url(${e.thumb||e.image})`},key:t}))),a("div",{class:"main",style:{width:O,height:O}})))}h.props={dark:{type:Boolean,value:!0},vertical:{type:Boolean,value:!1},mode:{type:String,value:"snap"},zoomHover:{type:Boolean,value:!1},thumbReverse:{type:Boolean,value:!1},thumbItems:{type:Number,value:4},control:{type:Boolean,value:!1},controlMiddle:{type:Boolean,value:!1},loops:{type:Boolean,value:!1},autoPlay:{type:Number,value:0},lazyLoad:{type:Boolean,value:!1},perView:{type:Number,value:1},spacing:{type:Number,value:0},centerSlides:{type:Boolean,value:!1},effect:{type:String,value:""},items:{type:Array,value:[]},widthRatio:{type:Number,value:4},heightRatio:{type:Number,value:3}};h.styles=J`
${Q}
.overflow-hidden {
  overflow: hidden;
}
.relative {
  position: relative;
}
.slider-box {
  height: 100%;
}
.flex {
  display: flex;
  align-items: stretch;
}
.flex-base .slider-thumb,
.flex-reverse .slider-thumb {
  flex: none;
  width: 64px;
  height: auto;
  flex-direction: column;
  padding: 0 0 0 8px !important;
}
.flex-reverse {
  flex-direction: row-reverse;
}
.flex-reverse .slider-thumb{
  padding: 0 8px 0 0 !important;
}
.flex .overflow-hidden,
.flex-reverse .overflow-hidden {
  flex: 1;
}
.flex-col-reverse {
  flex-direction: column-reverse;
}
.flex-col-reverse .slider-thumb {
  padding-top: 0 !important;
}
.flex-col {
  flex-direction: column;
}
.flex-col .slider-thumb {
  padding-bottom: 0 !important;
}
.flex-end {
  display: flex;
  align-items: end;
  text-decoration: none;
}
.absolute-full {
  position: absolute !important;
  width: 100%;
  height: 100%;
}
.img {
  object-fit: cover;
}
.title {
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  padding: .75rem 1rem;
  color: #111;
  background-image: linear-gradient(0deg, #fff, rgba(255, 255, 255, 0));
}
.caption {
  font-size: 0.9rem;
  font-weight: 400;
  display: block;
}
.dark .title {
  color: #fff;
  background-image: linear-gradient(0deg, #000, rgba(0, 0, 0, 0));
}
.prev,
.next {
  cursor: pointer;
  color: #111;
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 28px;
  height: 28px;
  padding: 0 8px 8px 0;
  border-radius: 0 0 32px 0;
}
.middle .prev,
.middle .next {
  top: 50%;
  transform: translateY(-50%);
  border-radius: 0;
  padding: 4px;
}
.next {
  left: auto;
  right: 0;
  padding: 0 0 8px 8px;
  border-radius: 0 0 0 32px;
}
.dark .prev,
.dark .next {
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}
.lazy__slide {
  background-image: url(/imgs/loader.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100px;
  min-height: auto;
}
.zoom-out {
  perspective: 1000px;
}
.slider-thumb {
  width: 100%;
  height: 64px;
  overflow: auto;
  display: flex;
  padding: 8px 0;
  flex-wrap: nowrap !important;
}
.slider-thumb > div {
  box-sizing: border-box;
  cursor: pointer;
  background-size: cover;
}
.slider-thumb > .active {
  border: 2px solid #fff;
}
/* ZOOM IMAGE */
@keyframes drift-fadeZoomIn {
  0% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes drift-fadeZoomOut {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  15% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(0.5);
    opacity: 0;
  }
}

@keyframes drift-loader-rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }
  50% {
    transform: translate(-50%, -50%) rotate(-180deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes drift-loader-before {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.2) translateX(6px);
  }
  25% {
    transform: scale(1.3) translateX(8px);
  }
  40% {
    transform: scale(1.2) translateX(6px);
  }
  50% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.8) translateX(6px);
  }
  75% {
    transform: scale(0.7) translateX(8px);
  }
  90% {
    transform: scale(0.8) translateX(6px);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes drift-loader-after {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.2) translateX(-6px);
  }
  25% {
    transform: scale(1.3) translateX(-8px);
  }
  40% {
    transform: scale(1.2) translateX(-6px);
  }
  50% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.8) translateX(-6px);
  }
  75% {
    transform: scale(0.7) translateX(-8px);
  }
  90% {
    transform: scale(0.8) translateX(-6px);
  }
  100% {
    transform: scale(1);
  }
}

@-webkit-keyframes drift-fadeZoomIn {
  0% {
    -webkit-transform: scale(1.5);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 1;
  }
}

@-webkit-keyframes drift-fadeZoomOut {
  0% {
    -webkit-transform: scale(1);
    opacity: 1;
  }
  15% {
    -webkit-transform: scale(1.1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0.5);
    opacity: 0;
  }
}

@-webkit-keyframes drift-loader-rotate {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0);
  }
  50% {
    -webkit-transform: translate(-50%, -50%) rotate(-180deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@-webkit-keyframes drift-loader-before {
  0% {
    -webkit-transform: scale(1);
  }
  10% {
    -webkit-transform: scale(1.2) translateX(6px);
  }
  25% {
    -webkit-transform: scale(1.3) translateX(8px);
  }
  40% {
    -webkit-transform: scale(1.2) translateX(6px);
  }
  50% {
    -webkit-transform: scale(1);
  }
  60% {
    -webkit-transform: scale(0.8) translateX(6px);
  }
  75% {
    -webkit-transform: scale(0.7) translateX(8px);
  }
  90% {
    -webkit-transform: scale(0.8) translateX(6px);
  }
  100% {
    -webkit-transform: scale(1);
  }
}

@-webkit-keyframes drift-loader-after {
  0% {
    -webkit-transform: scale(1);
  }
  10% {
    -webkit-transform: scale(1.2) translateX(-6px);
  }
  25% {
    -webkit-transform: scale(1.3) translateX(-8px);
  }
  40% {
    -webkit-transform: scale(1.2) translateX(-6px);
  }
  50% {
    -webkit-transform: scale(1);
  }
  60% {
    -webkit-transform: scale(0.8) translateX(-6px);
  }
  75% {
    -webkit-transform: scale(0.7) translateX(-8px);
  }
  90% {
    -webkit-transform: scale(0.8) translateX(-6px);
  }
  100% {
    -webkit-transform: scale(1);
  }
}
.main {
  z-index: 999;
  position: absolute;
  left: 102%;
  top: 0;
}
.drift-zoom-pane {
  pointer-events: none;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  /* This is required because of a bug that causes border-radius to not
  work with child elements in certain cases. */
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
}

.drift-zoom-pane.drift-open {
  display: block;
}

.drift-zoom-pane.drift-opening {
  animation: drift-fadeZoomIn 180ms ease-out;
  -webkit-animation: drift-fadeZoomIn 180ms ease-out;
}

.drift-zoom-pane.drift-closing {
  animation: drift-fadeZoomOut 210ms ease-in;
  -webkit-animation: drift-fadeZoomOut 210ms ease-in;
}

.drift-zoom-pane.drift-inline {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
}

.drift-zoom-pane img{
  object-fit: cover;
}

.drift-loading .drift-zoom-pane-loader {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  width: 66px;
  height: 20px;
  animation: drift-loader-rotate 1800ms infinite linear;
  -webkit-animation: drift-loader-rotate 1800ms infinite linear;
}

.drift-zoom-pane-loader:before,
.drift-zoom-pane-loader:after {
  main: "";
  display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  margin-top: -10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.9);
}

.drift-zoom-pane-loader:before {
  left: 0;
  animation: drift-loader-before 1800ms infinite linear;
  -webkit-animation: drift-loader-before 1800ms infinite linear;
}

.drift-zoom-pane-loader:after {
  right: 0;
  animation: drift-loader-after 1800ms infinite linear;
  -webkit-animation: drift-loader-after 1800ms infinite linear;
  animation-delay: -900ms;
  -webkit-animation-delay: -900ms;
}

.drift-bounding-box {
  background-color: rgba(0, 0, 0, 0.4);
}
`;customElements.define("slider-thumbnail",K(h));
