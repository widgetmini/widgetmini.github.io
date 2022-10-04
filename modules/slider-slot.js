import{c as P,a as W,u as C,h as o}from"./css.js";import{u as l}from"./hooks.js";import{t as Y,k as q}from"./keen-slider.min.js";import{u as L}from"./use-effect.js";/*!
 * miniwidget v1.0.1 - (c) 2022 by kimthiendung@gmail.com - Apache-2.0 License.
 *//*!
 * miniwidget v1.0.1 - (c) 2022 by kimthiendung@gmail.com - Apache-2.0 License.
 */function g({dark:b,mode:v,vertical:y,control:k,controlMiddle:x,dot:h,loops:z,autoPlay:d,lazyLoad:u,perView:c,spacing:w,centerSlides:$,effect:a,items:p,widthRatio:B,heightRatio:S}){if(!p)return;const _=C(),n=C(null),[E,R]=l(!1),[j,A]=l([]),[m,D]=l(0),[N,M]=l(null),f={loop:z,initial:0,mode:v,vertical:y,renderMode:a==="fade"?"custom":"performance",detailsChanged(e){a==="zoom"?M(e.track.details):a==="fade"?e.slides.forEach((t,r)=>{t.style.opacity=e.track.details.slides[r].portion}):e.slides.forEach(t=>{t.style.opacity=1})},slideChanged(e){D(e.track.details.rel)},created:()=>{R(!0)}};c>1&&(f.slides={perView:c,spacing:w,origin:$?"center":"auto"});const I=e=>{let t,r=!1;function s(){clearTimeout(t)}function i(){clearTimeout(t),!r&&(t=setTimeout(()=>{e.next()},d*1e3))}e.on("created",()=>{e.container.addEventListener("mouseover",()=>{r=!0,s()}),e.container.addEventListener("mouseout",()=>{r=!1,i()}),i()}),e.on("dragStarted",s),e.on("animationEnded",i),e.on("updated",i)},O=e=>{if(!N)return{};const t=N.slides[e],r=.7,s=1-(r-r*t.portion);return{transform:`scale(${s})`,WebkitTransform:`scale(${s})`}},T=[];return d&&T.push(I),L(()=>{const e=_.current;n.current?n.current.update(f):n.current=new q(e,f,T)},[b,v,y,k,x,h,z,d,u,c,w,$,a,p,B,S]),L(()=>{if(u){const e=[...j];e[m]=!0,A(e)}},[m]),o("host",{shadowDom:!0},o("div",{class:`relative ${b?"dark":""}`},o("div",{ref:_,class:`slider-box keen-slider ${a==="zoom"?"zoom-out":""}`,style:{"aspect-ratio":`${B}/${S}`}},Array(p).fill(1).map((e,t)=>o("div",{key:t,class:`relative keen-slider__slide ${a==="fade"?"absolute-full":""} ${u?"lazy__slide":""}`},o("div",{class:"absolute-full",style:a==="zoom"?O(t):{}},o("slot",{name:++t}))))),k&&E&&o("div",{class:x?"middle":""},o("div",{onclick:e=>e.stopPropagation()||n.current?.prev()},o("slot",{name:"prev"})),o("div",{onclick:e=>e.stopPropagation()||n.current?.next()},o("slot",{name:"next"}))),h&&E&&o("div",{class:"dots"},[...Array(n.current.track.details.slides.length).keys()].map(e=>o("button",{key:e,onclick:()=>{n.current?.moveToIdx(e)},class:"dot"+(m===e?" active":"")})))))}g.props={dark:{type:Boolean,value:!0},vertical:{type:Boolean,value:!1},mode:{type:String,value:"snap"},control:{type:Boolean,value:!1},controlMiddle:{type:Boolean,value:!1},dot:{type:Boolean,value:!1},loops:{type:Boolean,value:!1},autoPlay:{type:Number,value:0},lazyLoad:{type:Boolean,value:!1},perView:{type:Number,value:1},spacing:{type:Number,value:0},centerSlides:{type:Boolean,value:!1},effect:{type:String,value:""},items:{type:Number,value:0},widthRatio:{type:Number,value:4},heightRatio:{type:Number,value:3}};g.styles=P`
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
  background-image: url(/imgs/loader.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100px;
  min-height: auto;
}
.zoom-out {
  perspective: 1000px;
}
`;customElements.define("slider-slot",W(g));
