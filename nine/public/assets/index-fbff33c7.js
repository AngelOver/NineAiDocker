import{d as H,r as p,o as K,a as S,b as W,e as l,K as G,w as q,c as $,t as k,u as x,f as B,m as D,z as C,B as z,q as O,x as R}from"./index-7b7a4325.js";import{b as J}from"./mjDraw-58cf192b.js";const Q={class:"relative w-full h-full"},Z=["width","height"],A=["width","height"],ee=H({__name:"index",props:{src:String,width:Number,height:Number,max:{type:Number,default:500},exportMaskBackgroundColor:{type:String,default:"black"},exportMaskColor:{type:String,default:"white"},penColor:{type:String,default:"white"},penWidth:{type:Number,default:20},updateFileInfo:Function},setup(E,{expose:I}){const c=E,a=p(null),r=p(null),v=p([]);let h=!1,_=[];const d=new Image,y=p(!1),w=p(0),m=p(0),L=p(0);K(()=>{var n;a.value.getContext("2d");const t=(n=r.value)==null?void 0:n.getContext("2d");d.src=c.src,d.onload=()=>{var u;const i=Math.min(c.max/d.width,c.max/d.height);L.value=i,w.value=c.width||(i<1?d.width*i:d.width),m.value=c.height||(i<1?d.height*i:d.height),(u=c.updateFileInfo)==null||u.call(c,{width:d.width,height:d.height,scaleRatio:i.toFixed(3)}),a.value.width=w.value,r.value.width=w.value,a.value.height=m.value,r.value.height=m.value,t.drawImage(d,0,0,w.value,m.value)},a.value.addEventListener("mousedown",M),a.value.addEventListener("mousemove",U),a.value.addEventListener("mouseup",j)});const M=t=>{h=!0;const n=a.value.getContext("2d");n.beginPath(),n.moveTo(t.offsetX,t.offsetY),_=[{type:y.value?"erase":"draw",x:t.offsetX,y:t.offsetY}]},U=t=>{if(!h)return;const n=a.value.getContext("2d");n.lineTo(t.offsetX,t.offsetY),y.value?(n.globalCompositeOperation="destination-out",n.lineWidth=c.penWidth*2):(n.globalCompositeOperation="source-over",n.strokeStyle=c.penColor,n.lineWidth=c.penWidth),n.stroke(),_.push({type:y.value?"erase":"draw",x:t.offsetX,y:t.offsetY})},j=()=>{h=!1,v.value.push([..._,{type:"end"}]),_=[]},N=()=>new Promise((t,n)=>{const i=document.createElement("canvas"),u=d;i.width=u.width,i.height=u.height;const o=i.getContext("2d");if(o){o.fillStyle=c.exportMaskBackgroundColor,o.fillRect(0,0,i.width,i.height),o.beginPath();const f=u.width/w.value,X=u.height/m.value;o.beginPath(),v.value.forEach(P=>{P.forEach((b,F)=>{(b.type==="begin"||b.type==="draw")&&((F===0||P[F-1].type!==b.type)&&o.beginPath(),o.lineTo(b.x*f,b.y*X),o.strokeStyle=c.exportMaskColor,o.lineWidth=c.penWidth*f),b.type==="erase"&&((F===0||P[F-1].type!==b.type)&&o.beginPath(),o.lineTo(b.x*f,b.y*X),o.strokeStyle=c.exportMaskBackgroundColor),F<P.length-1&&P[F+1].type!==b.type&&o.stroke()}),P[P.length-1].type!=="begin"&&o.stroke()});const Y=i.toDataURL("image/png");t(Y)}else n(new Error("无法获取canvas的2D渲染上下文"))});function T(){v.value=[],a.value.getContext("2d").clearRect(0,0,a.value.width,a.value.height)}async function V(){return await N()}function g(){v.value.length>0&&(v.value.pop(),e())}function e(){const t=a.value.getContext("2d");t.clearRect(0,0,a.value.width,a.value.height),t.drawImage(d,0,0,w.value,m.value),v.value.forEach(n=>{n.forEach((i,u)=>{(u===0||n[u-1].type!==i.type)&&t.beginPath(),i.type==="erase"?(t.globalCompositeOperation="destination-out",t.strokeStyle="rgba(0,0,0,0)"):(t.globalCompositeOperation="source-over",t.strokeStyle="white"),t.lineWidth=i.type==="erase"?c.penWidth*2:c.penWidth,t.lineTo(i.x,i.y),t.stroke(),(u===n.length-1||n[u+1].type!==i.type)&&t.closePath()})}),t.globalCompositeOperation="source-over"}return I({getBase:V,undo:g,clear:T,toggleEraser:()=>{y.value=!y.value}}),(t,n)=>(S(),W("div",Q,[l("canvas",{ref_key:"backgroundCanvas",ref:r,class:"absolute left-0 top-0",width:E.width,height:E.height},null,8,Z),l("canvas",{ref_key:"canvas",ref:a,class:"absolute left-0 top-0",width:E.width,height:E.height},null,8,A)]))}});const te=G(ee,[["__scopeId","data-v-a0c7a6e9"]]),ae=H({__name:"index",props:{src:String,selectColor:String,maxSteps:Number,updateFileInfo:Function},setup(E,{expose:I}){const c=E,a=p(null),r=p(null);let v=new Set;const h=p([]),_=p(10);q(()=>c.maxSteps,e=>{e&&(_.value=e)},{immediate:!0}),K(()=>{a.value&&(r.value=a.value.getContext("2d",{willReadFrequently:!0}),d())}),q(()=>c.src,e=>{e&&d()});function d(){if(!r.value||!c.src)return;const e=new Image;e.crossOrigin="anonymous",e.onload=()=>{var s;a.value.width=e.width,a.value.height=e.height,(s=c.updateFileInfo)==null||s.call(c,{width:e.width,height:e.height,scaleRatio:1}),r.value.drawImage(e,0,0,e.width,e.height)},e.src=c.src}function y(e,s){return(s*a.value.width+e)*4}function w(e,s,t){const n=y(e,s);return[t[n],t[n+1],t[n+2],t[n+3]]}function m(e,s){return e.reduce((n,i,u)=>n+Math.abs(i-s[u]),0)}function L(e,s,t,n,i){if(r.value&&a.value){const o=r.value.getImageData(0,0,a.value.width,a.value.height);g(o)}const u=[[e,s]];for(;u.length;){const[o,f]=u.shift();if(o<0||o>=a.value.width||f<0||f>=a.value.height)continue;const X=w(o,f,i);if(m(X,n)>50||m(X,t)===0)continue;const Y=y(o,f);i.set(t,Y),v.add(o+","+f),u.push([o+1,f]),u.push([o-1,f]),u.push([o,f+1]),u.push([o,f-1])}}function M(e){if(!r.value||!a.value)return;const s=e.offsetX,t=e.offsetY,n=r.value.getImageData(0,0,a.value.width,a.value.height),i=w(s,t,n.data),u=j(c.selectColor);L(s,t,u,i,n.data),r.value.putImageData(n,0,0)}function U(){if(!r.value||!a.value)return"";const e=r.value.getImageData(0,0,a.value.width,a.value.height),s=new Uint8ClampedArray(e.data);for(let u=0;u<a.value.height;u++)for(let o=0;o<a.value.width;o++){const f=y(o,u);v.has(o+","+u)?(s[f]=255,s[f+1]=255,s[f+2]=255):(s[f]=0,s[f+1]=0,s[f+2]=0),s[f+3]=255}const t=new ImageData(s,a.value.width,a.value.height),n=document.createElement("canvas");return n.width=a.value.width,n.height=a.value.height,n.getContext("2d").putImageData(t,0,0),n.toDataURL("image/png")}function j(e){if(e&&e.startsWith("#")){const s=e.length===4?"#"+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]:e,t=parseInt(s.slice(1,3),16),n=parseInt(s.slice(3,5),16),i=parseInt(s.slice(5,7),16);return[t,n,i,255]}else if(e&&e.startsWith("rgb")){const s=e.replace(/rgba?\(/,"").replace(/\)/,"").split(",").map(t=>parseInt(t));return s.length===3&&s.push(255),s}return[0,0,0,255]}async function N(){return await U()}function T(){if(h.value.length===0||!r.value||!a.value)return;const e=h.value.pop();r.value.putImageData(e.imageData,0,0),v=new Set(e.currentModifiedPixels)}function V(){!r.value||!a.value||(r.value.clearRect(0,0,a.value.width,a.value.height),v.clear(),h.value=[],d())}function g(e){const s=new Set(v);h.value.push({imageData:e,currentModifiedPixels:s}),h.value.length>_.value&&h.value.shift()}return I({getBase:N,undo:T,clear:V}),(e,s)=>(S(),W("div",null,[l("canvas",{ref_key:"canvas",ref:a,onClick:M,crossOrigin:"anonymous"},null,512)]))}});const ne={class:"w-full h-full bg-gray-100"},se={class:"h-[80px] w-full flex justify-center items-center space-x-5"},le={class:"text-2xl font-bold"},oe={key:0,class:"bg-gray-100 flex-1 h-full w-full flex"},ie={class:"w-[50%] flex flex-col border-r"},ce=l("span",{class:"text-2xl w-full text-center"},"操作区域",-1),ue={class:"border-b border-t h-[50px] flex justify-center items-center space-x-5"},re={class:"mt-10 ml-10"},de={class:"w-[50%] flex flex-col"},he=l("span",{class:"text-2xl w-full text-center"},"预览区域",-1),fe={class:"border-b border-t h-[50px] flex justify-center items-center space-x-5"},ve={class:"border-b border-t h-[50px] flex justify-center items-center space-x-5"},ge=l("span",null,"图片原始信息：",-1),pe=["src"],me={key:1,class:"bg-gray-100 flex-1 h-full w-full flex"},xe={class:"w-[50%] flex flex-col border-r"},_e=l("span",{class:"text-2xl w-full text-center"},"操作区域",-1),ye={class:"border-b border-t h-[50px] flex justify-center items-center space-x-5"},we={class:"mt-10 ml-10"},be={class:"w-[50%] flex flex-col"},ke=l("span",{class:"text-2xl w-full text-center"},"预览区域",-1),Ce={class:"border-b border-t h-[50px] flex justify-center items-center space-x-5"},Ie={class:"border-b border-t h-[50px] flex justify-center items-center space-x-5"},Se=l("span",null,"图片原始信息：",-1),Ee=["src"],Re=H({__name:"index",setup(E){const I=p(""),c="https://chevereto.jiangly.com/images/2023/11/21/61888bd4ede4.png",a="https://chevereto.jiangly.com/images/2023/11/19/shoes.jpg",r=p(null),v=p(""),h=p(1),_=p(!1),d=p({}),y=$(()=>h.value===1?"模块选区":"自由绘制"),w=$(()=>h.value===2?"模块选区模式":"自由绘制模式");async function m(){var e;const g=await((e=r.value)==null?void 0:e.getBase());I.value=g}async function L(){const g=h.value===1?c:a,s="data:image/png;base64,"+(await J({url:g})).data;v.value=s}const M=$(()=>_.value?"橡皮擦模式":"画笔模式");function U(){v.value=null,h.value=h.value===1?2:1}q(h,()=>{L()},{immediate:!0});function j(){var g;(g=r.value)==null||g.undo()}function N(){var g;(g=r.value)==null||g.clear()}function T(g){d.value=g}function V(){var g;(g=r.value)==null||g.toggleEraser(),_.value=!_.value}return(g,e)=>(S(),W("div",ne,[l("div",se,[l("span",le," 当前测试模式："+k(x(w)),1),B(x(R),{type:"primary",onClick:U},{default:D(()=>[C("切换至"+k(x(y))+"模式",1)]),_:1})]),h.value===1?(S(),W("div",oe,[l("div",ie,[ce,l("div",ue,[B(x(R),{type:"primary",onClick:j},{default:D(()=>[C("返回上一步")]),_:1}),B(x(R),{type:"primary",onClick:N},{default:D(()=>[C("清空画布")]),_:1}),B(x(R),{type:"primary",onClick:V},{default:D(()=>[C("切换橡皮擦模式")]),_:1}),C(" 当前模式: "+k(x(M)),1)]),l("div",re,[l("div",null,[v.value&&h.value===1?(S(),z(te,{key:0,ref_key:"canvasRef",ref:r,updateFileInfo:T,max:700,src:v.value},null,8,["src"])):O("",!0)])])]),l("div",de,[he,l("div",fe,[B(x(R),{type:"primary",onClick:m},{default:D(()=>[C("获取蒙层")]),_:1})]),l("div",ve,[ge,l("span",null,"宽度： "+k(d.value.width),1),l("span",null,"高度： "+k(d.value.height),1),l("span",null,"缩放比： "+k(d.value.scaleRatio),1)]),l("div",null,[I.value?(S(),W("img",{key:0,src:I.value,alt:""},null,8,pe)):O("",!0)])])])):O("",!0),h.value===2?(S(),W("div",me,[l("div",xe,[_e,l("div",ye,[B(x(R),{type:"primary",onClick:j},{default:D(()=>[C("返回上一步")]),_:1}),B(x(R),{type:"primary",onClick:N},{default:D(()=>[C("清空画布")]),_:1}),C(" 当前模式: "+k(x(M)),1)]),l("div",we,[l("div",null,[v.value&&h.value===2?(S(),z(ae,{key:0,selectColor:"#fff",ref_key:"canvasRef",ref:r,updateFileInfo:T,max:500,src:v.value},null,8,["src"])):O("",!0)])])]),l("div",be,[ke,l("div",Ce,[B(x(R),{type:"primary",onClick:m},{default:D(()=>[C("获取蒙层")]),_:1})]),l("div",Ie,[Se,l("span",null,"宽度： "+k(d.value.width),1),l("span",null,"高度： "+k(d.value.height),1),l("span",null,"缩放比： "+k(d.value.scaleRatio),1)]),l("div",null,[I.value?(S(),W("img",{key:0,src:I.value,alt:""},null,8,Ee)):O("",!0)])])])):O("",!0)]))}});export{Re as default};