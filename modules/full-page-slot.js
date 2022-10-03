import{c as j,a as q,u as z,h as i}from"./css.js";import{u as c}from"./hooks.js";import{t as I,k as F}from"./keen-slider.min.js";import{u as G}from"./use-event.js";import{u as m}from"./use-effect.js";function f({anchor:h,mode:v,vertical:y,loops:g,autoPlay:u,lazyLoad:d,effect:l,items:r,resize:T}){if(!r)return;const b=z(),p=z(null),[_,$]=c([]),[w,D]=c(0),[k,R]=c(null),[S,C]=c(1),L=G("change",{bubbles:!1,cancelable:!0,composed:!0}),x={initial:0,loop:g,mode:v,vertical:y,renderMode:l==="fade"?"custom":"performance",detailsChanged(e){l==="zoom"?R(e.track.details):l==="fade"?e.slides.forEach((t,o)=>{t.style.opacity=e.track.details.slides[o].portion}):e.slides.forEach(t=>{t.style.opacity=1})},slideChanged(e){const t=e.track.details.rel;D(t),L(t),history.pushState(null,null,`#${r[t]}`)},created:e=>{h&&r.forEach((t,o)=>{h===t&&(e.moveToIdx(o),history.replaceState(null,null,`#${t}`))})}},M=e=>{let t,o,s;function a(n,Y){o.x-=n.deltaX,o.y-=n.deltaY,e.container.dispatchEvent(new CustomEvent(Y,{detail:{x:o.x,y:o.y}}))}function A(n){o={x:n.pageX,y:n.pageY},a(n,"ksDragStart")}function N(n){a(n,"ksDrag")}function O(n){a(n,"ksDragEnd")}function X(n){n.preventDefault(),s||(A(n),s=!0),N(n),clearTimeout(t),t=setTimeout(()=>{s=!1,O(n)},50)}e.on("created",()=>{e.container.addEventListener("wheel",X,{passive:!1})})},B=e=>{let t,o=!1;function s(){clearTimeout(t)}function a(){clearTimeout(t),!o&&(t=setTimeout(()=>{e.next()},u*1e3))}e.on("created",()=>{e.container.addEventListener("mouseover",()=>{o=!0,s()}),e.container.addEventListener("mouseout",()=>{o=!1,a()}),a()}),e.on("dragStarted",s),e.on("animationEnded",a),e.on("updated",a)},W=e=>{if(!k)return{};const t=k.slides[e],o=.7,s=1-(o-o*t.portion);return{transform:`scale(${s})`,WebkitTransform:`scale(${s})`}},E=[M];return u&&E.push(B),m(()=>{const e=b.current;p.current?p.current.update(x):p.current=new F(e,x,E)},[v,y,g,u,d,l,r,S]),m(()=>{if(d){const e=[..._];e[w]=!0,$(e)}},[w]),m(()=>{const e=document.querySelector(T),t=new ResizeObserver(o=>{const s=Math.ceil(o[0].contentRect.width),a=Math.ceil(o[0].contentRect.height);C(s+"/"+a)});return e&&t.observe(e),()=>{t.disconnect()}},[]),i("host",{shadowDom:!0},i("div",{class:"w-full relative"},i("div",{ref:b,class:`slider-box keen-slider ${l==="zoom"?"zoom-out":""}`,style:{"aspect-ratio":S}},r.map((e,t)=>i("div",{key:t,class:`relative keen-slider__slide ${l==="fade"?"absolute-full":""} ${d?"lazy__slide":""}`},i("div",{class:"absolute-full",style:l==="zoom"?W(t):{}},i("slot",{name:e})))))))}f.props={items:{type:Array,value:[]},anchor:{type:String,value:""},vertical:{type:Boolean,value:!1},mode:{type:String,value:"snap"},loops:{type:Boolean,value:!1},autoPlay:{type:Number,value:0},lazyLoad:{type:Boolean,value:!1},effect:{type:String,value:""},resize:{type:String,value:"body"}};f.styles=j`
${I}
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
.slider-box {
  -webkit-overflow-scrolling: touch;
}
.img {
  object-fit: cover;
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
`;customElements.define("full-page",q(f));
