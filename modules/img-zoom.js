import{c,a as b,u as k,h as a}from"./css.js";import{u as w}from"./hooks.js";import{D as u}from"./img-zoom2.js";import{u as x}from"./use-effect.js";function e({src:r,srcOrigin:l,rounded:f,scale:m,inline:o}){const s=k(),[i,n]=w(),d=t=>{n(m*100+"%")},p=t=>{n(0)};return x(()=>{const t=s.current;t&&new u(t.querySelector(".trigger"),{paneContainer:t.querySelector(".main"),inlinePane:o})},[]),a("host",{shadowDom:!0},a("div",{ref:s,class:"relative"},a("img",{onmouseover:d,onmouseout:p,class:"trigger",src:r,"data-zoom":l||r,style:{borderRadius:f+"px"}}),!o&&a("div",{class:"main",style:{width:i,height:i}})))}e.props={src:{type:String,value:""},srcOrigin:{type:String,value:""},rounded:{type:Number,value:0},scale:{type:Number,value:2},inline:{type:Boolean,value:!1}};e.styles=c`@keyframes drift-fadeZoomIn{0%{transform:scale(1.5);opacity:0}to{transform:scale(1);opacity:1}}@keyframes drift-fadeZoomOut{0%{transform:scale(1);opacity:1}15%{transform:scale(1.1);opacity:1}to{transform:scale(.5);opacity:0}}@keyframes drift-loader-rotate{0%{transform:translate(-50%,-50%) rotate(0)}50%{transform:translate(-50%,-50%) rotate(-180deg)}to{transform:translate(-50%,-50%) rotate(-360deg)}}@keyframes drift-loader-before{0%{transform:scale(1)}10%{transform:scale(1.2) translate(6px)}25%{transform:scale(1.3) translate(8px)}40%{transform:scale(1.2) translate(6px)}50%{transform:scale(1)}60%{transform:scale(.8) translate(6px)}75%{transform:scale(.7) translate(8px)}90%{transform:scale(.8) translate(6px)}to{transform:scale(1)}}@keyframes drift-loader-after{0%{transform:scale(1)}10%{transform:scale(1.2) translate(-6px)}25%{transform:scale(1.3) translate(-8px)}40%{transform:scale(1.2) translate(-6px)}50%{transform:scale(1)}60%{transform:scale(.8) translate(-6px)}75%{transform:scale(.7) translate(-8px)}90%{transform:scale(.8) translate(-6px)}to{transform:scale(1)}}@-webkit-keyframes drift-fadeZoomIn{0%{-webkit-transform:scale(1.5);opacity:0}to{-webkit-transform:scale(1);opacity:1}}@-webkit-keyframes drift-fadeZoomOut{0%{-webkit-transform:scale(1);opacity:1}15%{-webkit-transform:scale(1.1);opacity:1}to{-webkit-transform:scale(.5);opacity:0}}@-webkit-keyframes drift-loader-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(-180deg)}to{-webkit-transform:translate(-50%,-50%) rotate(-360deg)}}@-webkit-keyframes drift-loader-before{0%{-webkit-transform:scale(1)}10%{-webkit-transform:scale(1.2) translateX(6px)}25%{-webkit-transform:scale(1.3) translateX(8px)}40%{-webkit-transform:scale(1.2) translateX(6px)}50%{-webkit-transform:scale(1)}60%{-webkit-transform:scale(.8) translateX(6px)}75%{-webkit-transform:scale(.7) translateX(8px)}90%{-webkit-transform:scale(.8) translateX(6px)}to{-webkit-transform:scale(1)}}@-webkit-keyframes drift-loader-after{0%{-webkit-transform:scale(1)}10%{-webkit-transform:scale(1.2) translateX(-6px)}25%{-webkit-transform:scale(1.3) translateX(-8px)}40%{-webkit-transform:scale(1.2) translateX(-6px)}50%{-webkit-transform:scale(1)}60%{-webkit-transform:scale(.8) translateX(-6px)}75%{-webkit-transform:scale(.7) translateX(-8px)}90%{-webkit-transform:scale(.8) translateX(-6px)}to{-webkit-transform:scale(1)}}.relative{position:relative}.trigger{display:block;width:100%;cursor:move}.main{z-index:999;position:absolute;left:102%;top:0}.drift-zoom-pane{pointer-events:none;position:absolute;overflow:hidden;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.5);transform:translateZ(0);-webkit-transform:translate3d(0,0,0)}.drift-zoom-pane.drift-open{display:block}.drift-zoom-pane.drift-opening{animation:drift-fadeZoomIn .18s ease-out;-webkit-animation:drift-fadeZoomIn .18s ease-out}.drift-zoom-pane.drift-closing{animation:drift-fadeZoomOut .21s ease-in;-webkit-animation:drift-fadeZoomOut .21s ease-in}.drift-zoom-pane.drift-inline{position:absolute;width:150px;height:150px;border-radius:75px;box-shadow:0 6px 18px #0000004d}.drift-loading .drift-zoom-pane-loader{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);width:66px;height:20px;animation:drift-loader-rotate 1.8s infinite linear;-webkit-animation:drift-loader-rotate 1.8s infinite linear}.drift-zoom-pane-loader:before,.drift-zoom-pane-loader:after{main:"";display:block;width:20px;height:20px;position:absolute;top:50%;margin-top:-10px;border-radius:20px;background:rgba(255,255,255,.9)}.drift-zoom-pane-loader:before{left:0;animation:drift-loader-before 1.8s infinite linear;-webkit-animation:drift-loader-before 1.8s infinite linear}.drift-zoom-pane-loader:after{right:0;animation:drift-loader-after 1.8s infinite linear;-webkit-animation:drift-loader-after 1.8s infinite linear;animation-delay:-.9s;-webkit-animation-delay:-.9s}.drift-bounding-box{background-color:#0006}`;customElements.define("img-zoom",b(e));
