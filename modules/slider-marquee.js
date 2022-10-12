import{c as f,a as v,u as d,h as t}from"./css.js";import{u as y}from"./use-effect.js";import{t as k,k as h}from"./keen-slider.min.js";/*!
 * miniwidget v1.0.1 - (c) 2022 by kimthiendung@gmail.com - Apache-2.0 License.
 *//*!
 * miniwidget v1.0.1 - (c) 2022 by kimthiendung@gmail.com - Apache-2.0 License.
 */function a({items:n,drag:s,control:c,spacing:i,duration:m}){if(!n)return;const l=d(),r=d(null),o={duration:m*1e3,easing:e=>e},u={mode:"free",loop:!0,drag:s,slides:{perView:"auto",spacing:i},created(e){e.moveToIdx(5,!0,o)},updated(e){e.moveToIdx(e.track.details.abs+5,!0,o)},animationEnded(e){e.moveToIdx(e.track.details.abs+5,!0,o)}};return y(()=>{const e=l.current;r.current?r.current.update(u):r.current=new h(e,u)},[n,s,i]),t("host",{shadowDom:!0},t("div",{class:"slider-marquee"},t("div",{ref:l,class:"keen-slider"},Array(n).fill(1).map((e,p)=>t("div",{className:"keen-slider__slide"},t("slot",{name:++p})))),r&&c&&t("div",null,t("div",{onclick:e=>e.stopPropagation()||r.current?.prev()},t("slot",{name:"prev"})),t("div",{onclick:e=>e.stopPropagation()||r.current?.next()},t("slot",{name:"next"})))))}a.props={items:{type:Number,value:0},drag:{type:Boolean,value:!1},control:{type:Boolean,value:!0},spacing:{type:Number,value:0},duration:{type:Number,value:5}};a.styles=f`
${k}
.slider-marquee {position: relative}
.slider-marquee .keen-slider__slide{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: fit-content;
  min-width: fit-content;
}
`;customElements.define("slider-marquee",v(a));
