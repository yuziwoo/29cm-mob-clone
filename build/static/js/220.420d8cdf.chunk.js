"use strict";(self.webpackChunk_28cm=self.webpackChunk_28cm||[]).push([[220],{8520:(e,n,t)=>{t.d(n,{c:()=>w});var i=t(9060),r=t(7932);function c(){const e=(0,i.useRef)(!1);return(0,r.M)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var o=t(4367);var s=t(3932),l=t(1084);class d extends i.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=n.offsetHeight||0,e.width=n.offsetWidth||0,e.top=n.offsetTop,e.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function a(e){let{children:n,isPresent:t}=e;const r=(0,i.useId)(),c=(0,i.useRef)(null),o=(0,i.useRef)({width:0,height:0,top:0,left:0});return(0,i.useInsertionEffect)((()=>{const{width:e,height:n,top:i,left:s}=o.current;if(t||!c.current||!e||!n)return;c.current.dataset.motionPopId=r;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule('\n          [data-motion-pop-id="'.concat(r,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(n,"px !important;\n            top: ").concat(i,"px !important;\n            left: ").concat(s,"px !important;\n          }\n        ")),()=>{document.head.removeChild(l)}}),[t]),i.createElement(d,{isPresent:t,childRef:c,sizeRef:o},i.cloneElement(n,{ref:c}))}const p=e=>{let{children:n,initial:t,isPresent:r,onExitComplete:c,custom:o,presenceAffectsLayout:d,mode:p}=e;const f=(0,l._)(u),h=(0,i.useId)(),x=(0,i.useMemo)((()=>({id:h,initial:t,isPresent:r,custom:o,onExitComplete:e=>{f.set(e,!0);for(const n of f.values())if(!n)return;c&&c()},register:e=>(f.set(e,!1),()=>f.delete(e))})),d?void 0:[r]);return(0,i.useMemo)((()=>{f.forEach(((e,n)=>f.set(n,!1)))}),[r]),i.useEffect((()=>{!r&&!f.size&&c&&c()}),[r]),"popLayout"===p&&(n=i.createElement(a,{isPresent:r},n)),i.createElement(s.i.Provider,{value:x},n)};function u(){return new Map}var f=t(7264);var h=t(7968);const x=e=>e.key||"";const m=e=>{let{children:n,custom:t,initial:s=!0,onExitComplete:l,exitBeforeEnter:d,presenceAffectsLayout:a=!0,mode:u="sync"}=e;(0,h.O)(!d,"Replace exitBeforeEnter with mode='wait'");const m=(0,i.useContext)(f.m).forceRender||function(){const e=c(),[n,t]=(0,i.useState)(0),r=(0,i.useCallback)((()=>{e.current&&t(n+1)}),[n]);return[(0,i.useCallback)((()=>o.AL.postRender(r)),[r]),n]}()[0],g=c(),v=function(e){const n=[];return i.Children.forEach(e,(e=>{(0,i.isValidElement)(e)&&n.push(e)})),n}(n);let j=v;const w=(0,i.useRef)(new Map).current,y=(0,i.useRef)(j),k=(0,i.useRef)(new Map).current,R=(0,i.useRef)(!0);var E;if((0,r.M)((()=>{R.current=!1,function(e,n){e.forEach((e=>{const t=x(e);n.set(t,e)}))}(v,k),y.current=j})),E=()=>{R.current=!0,k.clear(),w.clear()},(0,i.useEffect)((()=>()=>E()),[]),R.current)return i.createElement(i.Fragment,null,j.map((e=>i.createElement(p,{key:x(e),isPresent:!0,initial:!!s&&void 0,presenceAffectsLayout:a,mode:u},e))));j=[...j];const I=y.current.map(x),b=v.map(x),C=I.length;for(let i=0;i<C;i++){const e=I[i];-1!==b.indexOf(e)||w.has(e)||w.set(e,void 0)}return"wait"===u&&w.size&&(j=[]),w.forEach(((e,n)=>{if(-1!==b.indexOf(n))return;const r=k.get(n);if(!r)return;const c=I.indexOf(n);let o=e;if(!o){const e=()=>{w.delete(n);const e=Array.from(k.keys()).filter((e=>!b.includes(e)));if(e.forEach((e=>k.delete(e))),y.current=v.filter((t=>{const i=x(t);return i===n||e.includes(i)})),!w.size){if(!1===g.current)return;m(),l&&l()}};o=i.createElement(p,{key:x(r),isPresent:!1,onExitComplete:e,custom:t,presenceAffectsLayout:a,mode:u},r),w.set(n,o)}j.splice(c,0,o)})),j=j.map((e=>{const n=e.key;return w.has(n)?e:i.createElement(p,{key:x(e),isPresent:!0,presenceAffectsLayout:a,mode:u},e)})),i.createElement(i.Fragment,null,w.size?j:j.map((e=>(0,i.cloneElement)(e))))};var g=t(2688),v=t(9476),j=t(2496);const w=e=>{let{children:n}=e;return(0,j.jsx)(m,{children:(0,j.jsx)(g.q.div,{initial:v.u.pageOpen.initial,animate:v.u.pageOpen.animate,transition:v.u.pageOpen.transition,exit:v.u.pageOpen.exit,style:{position:"relative",width:"100%"},children:n})})}},7276:(e,n,t)=>{t.d(n,{c:()=>o});var i=t(7728),r=t(9264),c=t(2496);const o=()=>(0,c.jsxs)("div",{style:{width:"100%"},children:[(0,c.jsx)("div",{style:{width:"100%"},children:(0,c.jsx)(i.c,{})}),(0,c.jsx)("div",{style:{paddingTop:"1rem"},children:(0,c.jsx)(r.c,{height:"11px",width:"40px"})}),(0,c.jsx)("div",{style:{paddingTop:"0.5rem"},children:(0,c.jsx)(r.c,{height:"13px",count:2})}),(0,c.jsx)("div",{style:{paddingTop:"0.5rem"},children:(0,c.jsx)(r.c,{height:"13px",width:"80px"})})]})},1220:(e,n,t)=>{t.r(n),t.d(n,{default:()=>pe});var i,r,c,o,s,l,d,a,p,u,f,h,x,m,g,v,j,w,y,k,R,E,I=t(8520),b=t(4312),C=t(360),P=t(7108);const L=C.cp.div(i||(i=(0,b.c)(["\n  padding-top: 3rem;\n"]))),A=C.cp.div(r||(r=(0,b.c)(["\n  overflow: hidden;\n  width: 100%;\n  background-color: ",";\n  background-size: cover;\n  background-position: center center;\n  position: relative;\n"])),P.g.color.GRAY1),z=C.cp.div(c||(c=(0,b.c)(["\n  width: 100%;\n  padding-bottom: 100%;\n"]))),T=C.cp.div(o||(o=(0,b.c)(["\n  width: 28px;\n  height: 28px;\n  background: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n"])),P.g.color.GRAY15),B=C.cp.p(s||(s=(0,b.c)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  text-align: center;\n"])),P.g.color.WHITE),S=C.cp.div(l||(l=(0,b.c)(["\n  padding: 10px 1rem 0;\n"]))),O=C.cp.div(d||(d=(0,b.c)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n"]))),M=C.cp.p(a||(a=(0,b.c)(["\n  font-size: 14px;\n  font-weight: 600;\n  color: ",";\n  user-select: none;\n  cursor: pointer;\n"])),P.g.color.BLACK),F=C.cp.div(p||(p=(0,b.c)(["\n  width: 2.8rem;\n  height: 2.8rem;\n\n  min-width: 20px;\n  min-height: 20px;\n\n  & svg {\n    width: 100%;\n    height: 100%;\n  }\n"]))),G=C.cp.div(u||(u=(0,b.c)(["\n  cursor: pointer;\n  margin-top: 4px;\n  user-select: none;\n"]))),H=C.cp.p(f||(f=(0,b.c)(["\n  font-size: 14px;\n  font-weight: 400;\n  color: ",";\n"])),P.g.color.BLACK),Y=C.cp.div(h||(h=(0,b.c)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin-top: 6px;\n"]))),D=(0,C.gV)(x||(x=(0,b.c)(["\n  font-size: 14px;\n  font-weight: 600;\n"]))),K=C.cp.p(m||(m=(0,b.c)(["\n  color: ",";\n  ",";\n"])),P.g.color.SIGNATURE,D),N=C.cp.p(g||(g=(0,b.c)(["\n  color: ",";\n  ",";\n  padding-left: 1rem;\n"])),P.g.color.BLACK,D),Q=C.cp.div(v||(v=(0,b.c)(["\n  cursor: pointer;\n  padding-top: 10px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  user-select: none;\n"]))),V=(0,C.gV)(j||(j=(0,b.c)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  & svg {\n    max-width: 12px;\n    max-height: 12px;\n  }\n"]))),U=C.cp.div(w||(w=(0,b.c)(["\n  ","\n"])),V),W=(0,C.gV)(y||(y=(0,b.c)(["\n  font-size: 12px;\n  font-weight: 400;\n  color: ",";\n"])),P.g.color.GRAY5),_={Component:L,Thumb:A,ThumbSizer:z,Rank:B,RankBox:T,Info:S,InfoHeader:O,Brand:M,Heart:F,InfoBody:G,ProductName:H,Price:Y,Discount:K,FinalPrice:N,InfoFooter:Q,LikeInfo:U,LikeInfoText:C.cp.p(k||(k=(0,b.c)(["\n  ","\n"])),W),ReviewInfo:C.cp.div(R||(R=(0,b.c)(["\n  ",";\n  padding-left: 1rem;\n"])),V),ReviewInfoText:C.cp.p(E||(E=(0,b.c)(["\n  ","\n"])),W)};var q=t(7276),J=t(9644),X=t(9060),Z=t(2376),$=t(940),ee=t(5484),ne=t(1496),te=t(5956),ie=t(4856),re=t(52),ce=t(2496);const oe=e=>{let{productId:n,rank:t}=e;const{productQuery:i,getProduct:r}=(0,J.s)(),[c,o]=(0,X.useState)(null);(0,X.useEffect)((()=>{i.isSuccess&&void 0!==n&&o(r(n))}),[i,n,r]);const{navigate:s}=(0,$.K)(),l=(0,X.useCallback)((()=>{s(ee.Q.productDetail.replace(":id",n||""))}),[s,n]),d=(0,X.useCallback)((()=>{s(ee.Q.brandDetail.replace(":id","".concat(null!==c&&void 0!==c&&c.brandId?c.brandId:"")))}),[s,null===c||void 0===c?void 0:c.brandId]);return void 0!==n&&i.isSuccess&&null!==c?(0,ce.jsxs)(_.Component,{children:[(0,ce.jsx)(Z.c,{style:{width:"100%"},children:(0,ce.jsxs)(_.Thumb,{onClick:l,style:{backgroundImage:"url(".concat(c.thumb[0],")")},children:[(0,ce.jsx)(_.ThumbSizer,{}),(0,ce.jsx)(_.RankBox,{children:(0,ce.jsx)(_.Rank,{children:t})})]})}),(0,ce.jsxs)(_.Info,{children:[(0,ce.jsxs)(_.InfoHeader,{children:[(0,ce.jsx)(_.Brand,{onClick:d,children:c.brandName}),(0,ce.jsx)(_.Heart,{children:(0,ce.jsx)(ne.c,{productId:n})})]}),(0,ce.jsxs)(_.InfoBody,{onClick:l,children:[(0,ce.jsx)(_.ProductName,{children:c.name}),(0,ce.jsxs)(_.Price,{children:[(0,ce.jsxs)(_.Discount,{children:[(0,te.W)(c.price,c.discount),"%"]}),(0,ce.jsx)(_.FinalPrice,{children:c.discount.toLocaleString()})]})]}),(0,ce.jsxs)(_.InfoFooter,{onClick:l,children:[(0,ce.jsxs)(_.LikeInfo,{children:[(0,ce.jsx)(ie.c,{activeColor:P.g.color.GRAY5,isLiked:!0}),(0,ce.jsx)(_.LikeInfoText,{children:c.likes})]}),(0,ce.jsxs)(_.ReviewInfo,{children:[(0,ce.jsx)(re.c,{fill:P.g.color.GRAY5,stroke:P.g.color.GRAY5}),(0,ce.jsxs)(_.ReviewInfoText,{children:[Math.round(c.reviewRating/2)/10," (",c.review.toLocaleString(),")"]})]})]})]})]}):(0,ce.jsx)(q.c,{})};var se,le,de;const ae={Page:C.cp.section(se||(se=(0,b.c)(["\n  padding-bottom: 180px;\n"]))),ProductList:C.cp.div(le||(le=(0,b.c)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n"]))),Product:C.cp.div(de||(de=(0,b.c)(["\n  width: 50%;\n"])))},pe=()=>{const{productQuery:e}=(0,J.s)();return e.isSuccess?(0,ce.jsx)(I.c,{children:(0,ce.jsx)(ae.Page,{children:(0,ce.jsx)(ae.ProductList,{children:Object.keys(e.data).map(((e,n)=>(0,ce.jsx)(ae.Product,{children:(0,ce.jsx)(oe,{productId:e,rank:n+1})},e)))})})}):(0,ce.jsx)(ce.Fragment,{})}}}]);
//# sourceMappingURL=220.420d8cdf.chunk.js.map