import{c as P,a as W,u as C,h as t}from"./css.js";import{u as i,a as j}from"./hooks.js";import{t as Y,k as q}from"./keen-slider.min.js";function m({dark:v,mode:b,vertical:k,control:x,controlMiddle:y,dot:h,loops:w,autoPlay:d,lazyLoad:u,perView:c,spacing:z,centerSlides:B,effect:a,items:p,widthRatio:$,heightRatio:S}){if(!p)return;const _=C(),n=C(null),[N,L]=i(!1),[M,R]=i([]),[g,A]=i(0),[T,D]=i(null),f={loop:w,initial:0,mode:b,vertical:k,renderMode:a==="fade"?"custom":"performance",detailsChanged(e){a==="zoom"?D(e.track.details):a==="fade"&&e.slides.forEach((o,r)=>{o.style.opacity=e.track.details.slides[r].portion})},slideChanged(e){A(e.track.details.rel)},created:()=>{L(!0)}};c>1&&(f.slides={perView:c,spacing:z,origin:B?"center":"auto"});const I=e=>{let o,r=!1;function s(){clearTimeout(o)}function l(){clearTimeout(o),!r&&(o=setTimeout(()=>{e.next()},d*1e3))}e.on("created",()=>{e.container.addEventListener("mouseover",()=>{r=!0,s()}),e.container.addEventListener("mouseout",()=>{r=!1,l()}),l()}),e.on("dragStarted",s),e.on("animationEnded",l),e.on("updated",l)},O=e=>{if(!T)return{};const o=T.slides[e],r=.7,s=1-(r-r*o.portion);return{transform:`scale(${s})`,WebkitTransform:`scale(${s})`}},E=[];return d&&E.push(I),j(()=>{const e=_.current;n.current?n.current.update(f):n.current=new q(e,f,E)},[v,b,k,x,y,h,w,d,u,c,z,B,a,p,$,S]),j(()=>{if(u){const e=[...M];e[g]=!0,R(e)}},[g]),t("host",{shadowDom:!0},t("div",{class:`relative ${v?"dark":""}`},t("div",{ref:_,class:`slider-box keen-slider ${a==="zoom"?"zoom-out":""}`,style:{"aspect-ratio":`${$}/${S}`}},Array(p).fill(1).map((e,o)=>t("div",{key:o,class:`relative keen-slider__slide ${a==="fade"?"absolute-full":""} ${u?"lazy__slide":""}`},t("div",{class:"absolute-full",style:a==="zoom"?O(o):{}},t("slot",{name:++o}))))),x&&N&&t("div",{class:y?"middle":""},t("svg",{class:"prev",onclick:e=>e.stopPropagation()||n.current?.prev(),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})),t("svg",{class:"next",onclick:e=>e.stopPropagation()||n.current?.next(),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}))),h&&N&&t("div",{class:"dots"},[...Array(n.current.track.details.slides.length).keys()].map(e=>t("button",{key:e,onclick:()=>{n.current?.moveToIdx(e)},class:"dot"+(g===e?" active":"")})))))}m.props={dark:{type:Boolean,value:!0},vertical:{type:Boolean,value:!1},mode:{type:String,value:"snap"},control:{type:Boolean,value:!1},controlMiddle:{type:Boolean,value:!1},dot:{type:Boolean,value:!1},loops:{type:Boolean,value:!1},autoPlay:{type:Number,value:0},lazyLoad:{type:Boolean,value:!1},perView:{type:Number,value:1},spacing:{type:Number,value:0},centerSlides:{type:Boolean,value:!1},effect:{type:String,value:""},items:{type:Number,value:0},widthRatio:{type:Number,value:4},heightRatio:{type:Number,value:3}};m.styles=P`
${Y}
.relative {
  position: relative;
  overflow: hidden;
}
.flex-end{
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
.dots{
  display: flex;
  justify-content: center;
  padding: 5px;
}
.dot {
  border: none;
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  border: 2px solid transparent;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;
}
.dot.active {
  border-color: rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.7);
}
.dark .dot {
  background: #333;
}
.dark .dot.active {
  border-color: #333;
  background: #fff;
}
.lazy__slide {
  background-color: #c0c0c0;
  background-image: url(/imgs/loader.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100px;
  min-height: auto;
}
.zoom-out {
  perspective: 1000px;
}
`;customElements.define("slider-slot",W(m));
