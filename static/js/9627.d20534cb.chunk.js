(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[9627],{29032:function(e,t,n){"use strict";n.d(t,{H:function(){return p}});n(72791);var r=n(51802),i=(n(25646),n(15861)),a=n(64687),o=n.n(a),l=n(31243),c=function(){var e=(0,i.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("image",t),e.prev=2,e.next=5,l.Z.post("http://localhost:6633/api/upload",n,{headers:{"content-type":"multipart/form-data"}});case 5:return r=e.sent,e.abrupt("return",r.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),s=n(61134),u=n(75970),d=n(61800),f=n(80184),m={options:["inline","blockType","list","link","embedded","emoji","image","remove","history"],blockType:{inDropdown:!0,options:["Normal","H1","H2","H3","H4","H5"]},image:{urlEnabled:!1,uploadEnabled:!0,alignmentEnabled:!1,uploadCallback:function(e){return c(e)},previewImage:!1,inputAccept:"image/gif,image/jpeg,image/jpg,image/png,image/svg",alt:{present:!0,mandatory:!0}}},p=function(e){var t=e.name,n=(0,s.Gc)(),i=n.control,a=n.formState.errors;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.Qr,{name:t,control:i,render:function(e){var t=e.field,n=t.value,i=t.onChange;return(0,f.jsx)(r.Editor,{editorState:n,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",onEditorStateChange:i,toolbar:m})}}),(0,f.jsx)(u.B,{errors:a,name:t,render:function(e){var t=e.message;return(0,f.jsx)(d.d,{color:"red",children:t})}})]})}},61800:function(e,t,n){"use strict";n.d(t,{d:function(){return u}});var r,i=n(1413),a=n(30168),o=n(17691),l=n(30407),c=o.ZP.p(r||(r=(0,a.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.5;\n  color: ",';\n  text-align: justify;\n\n  @media screen and (min-width: 980px) {\n    line-height: 1.6;\n  } \n&:empty{\n &::after {\n  white-space: break-spaces;\n  content: " "\n}}\n  \n  ',";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ","\n"])),(function(e){return e.theme.fonts.main}),(function(e){return e.theme.fontWeights.regular}),(function(e){return e.theme.fontSizes.main.body}),(function(e){return e.theme.colors.black}),l.$_,l.Dh,l.bK,l.GQ,l.eC,l.Oq,l.Cg,l.FK,l.AF,l.cp),s=n(80184),u=function(e){return(0,s.jsx)(c,(0,i.Z)({},e))}},35297:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r,i=n(1413),a=n(30168),o=n(17691),l=n(30407),c=(0,o.ZP)("section")((0,o.iv)(r||(r=(0,a.Z)(["\n  min-height:45vh;\n    padding-bottom: 100px;\n    @media screen and (min-width: 980px) {\n      padding-bottom: 128px;\n    }\n  "]))),l.$_,l.Dh,l.bK,l.GQ,l.eC,l.Oq,l.Cg,l.FK,l.AF,l.cp),s=n(80184),u=function(e){return(0,s.jsx)(c,(0,i.Z)({},e))}},89627:function(e,t,n){"use strict";n.r(t),n.d(t,{Entrants:function(){return b}});var r=n(1413),i=n(35297),a=n(199),o=n.n(a),l=n(1701),c=n.n(l),s=n(72010),u=n(61134),d=n(29032),f=n(89055),m=n(82518),p=n(72791),h=n(57689),g=n(80184),y={content:s.EditorState.createEmpty()},b=function(){var e=(0,h.UO)().id,t=(0,u.cI)({defaultValues:y}),n=(0,m.Mo)(e).data,a=(0,m.vo)(null===n||void 0===n?void 0:n.entrants.id);(0,p.useEffect)((function(){n&&t.reset({content:s.EditorState.createWithContent(s.ContentState.createFromBlockArray(c()(n.entrants.data.content).contentBlocks))})}),[n,t]);return(0,g.jsx)("main",{children:(0,g.jsx)(i.Z,{children:(0,g.jsx)(f.x,{maxWidth:"960px",m:"0 auto",boxShadow:"regular",children:(0,g.jsx)(f.x,{p:[null,11],px:[6,null],py:[8,null],children:(0,g.jsx)(u.RV,(0,r.Z)((0,r.Z)({},t),{},{children:(0,g.jsxs)("form",{onSubmit:t.handleSubmit((function(e){var n=(0,r.Z)((0,r.Z)({},e),{},{content:o()((0,s.convertToRaw)(e.content.getCurrentContent()))});n.content.length<=30?t.setError("content",{type:"custom",message:"Content must be more than 30 characters long"}):a.mutate(n)})),children:[(0,g.jsxs)("section",{children:[(0,g.jsx)("label",{children:"Content"}),(0,g.jsx)(d.H,{name:"content"})]}),(0,g.jsx)("button",{type:"submit",children:"submit"})]})}))})})})})}},75970:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var r=n(72791),i=n(61134),a=function(e){var t=e.as,n=e.errors,a=e.name,o=e.message,l=e.render,c=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(i[n]=e[n]);return i}(e,["as","errors","name","message","render"]),s=(0,i.Gc)(),u=(0,i.U2)(n||s.formState.errors,a);if(!u)return null;var d=u.message,f=u.types,m=Object.assign({},c,{children:d||o});return r.isValidElement(t)?r.cloneElement(t,m):l?l({message:d||o,messages:f}):r.createElement(t||r.Fragment,m)}},1701:function(e,t,n){window,e.exports=function(e,t){return i={},n.m=r=[function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),a=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n},o=function(e,t,n){var r,a=e.textContent;return""===a.trim()?{chunk:(r=n,{text:" ",inlines:[new i.OrderedSet],entities:[r],blocks:[]})}:{chunk:{text:a,inlines:Array(a.length).fill(t),entities:Array(a.length).fill(n),blocks:[]}}},l=function(){return{text:"\n",inlines:[new i.OrderedSet],entities:new Array(1),blocks:[]}},c=function(){return{text:"",inlines:[],entities:[],blocks:[]}},s=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new i.Map({})}]}},u=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new i.Map({})}]}},d=function(e){return{text:"\r ",inlines:[new i.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new i.Map({})}]}},f=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}},m=new i.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}}),p={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"};function h(e){return e.style.textAlign?new i.Map({"text-align":e.style.textAlign}):e.style.marginLeft?new i.Map({"margin-left":e.style.marginLeft}):void 0}var g=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};t=e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,r.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,r.Entity.__create("LINK","MUTABLE",n))}return t};n.d(t,"default",(function(){return k}));var y=" ",b=new RegExp("&nbsp;","g"),v=!0;function x(e,t,n,i,a,y){var b=e.nodeName.toLowerCase();if(y){var k=y(b,e);if(k){var w=r.Entity.__create(k.type,k.mutability,k.data||{});return{chunk:d(w)}}}if("#text"===b&&"\n"!==e.textContent)return o(e,t,a);if("br"===b)return{chunk:l()};if("img"===b&&e instanceof HTMLImageElement){var E={};E.src=e.getAttribute&&e.getAttribute("src")||e.src,E.alt=e.alt,E.height=e.style.height,E.width=e.style.width,e.style.float&&(E.alignment=e.style.float);var M=r.Entity.__create("IMAGE","MUTABLE",E);return{chunk:d(M)}}if("video"===b&&e instanceof HTMLVideoElement){var S={};S.src=e.getAttribute&&e.getAttribute("src")||e.src,S.alt=e.alt,S.height=e.style.height,S.width=e.style.width,e.style.float&&(S.alignment=e.style.float);var j=r.Entity.__create("VIDEO","MUTABLE",S);return{chunk:d(j)}}if("iframe"===b&&e instanceof HTMLIFrameElement){var C={};C.src=e.getAttribute&&e.getAttribute("src")||e.src,C.height=e.height,C.width=e.width;var O=r.Entity.__create("EMBEDDED_LINK","MUTABLE",C);return{chunk:d(O)}}var T,_=function(e,t){var n=m.filter((function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&-1<n.aliasedElements.indexOf(e)})).keySeq().toSet().toArray();if(1===n.length)return n[0]}(b,i);_&&("ul"===b||"ol"===b?(i=b,n+=1):("unordered-list-item"!==_&&"ordered-list-item"!==_&&(i="",n=-1),v?(T=s(_,h(e)),v=!1):T=u(_,n,h(e)))),T=T||c(),t=function(e,t,n){var r,i=p[e];if(i)r=n.add(i).toOrderedSet();else if(t instanceof HTMLElement){var a=t;r=(r=n).withMutations((function(e){var t=a.style.color,n=a.style.backgroundColor,r=a.style.fontSize,i=a.style.fontFamily.replace(/^"|"$/g,""),o=a.style.fontWeight,l=a.style.textDecoration,c=a.style.fontStyle;t&&e.add("color-".concat(t.replace(/ /g,""))),n&&e.add("bgcolor-".concat(n.replace(/ /g,""))),r&&e.add("fontsize-".concat(r.replace(/px$/g,""))),i&&e.add("fontfamily-".concat(i)),"bold"===o&&e.add(p.strong),"underline"===l&&e.add(p.ins),"italic"===c&&e.add(p.em)})).toOrderedSet()}return r}(b,e,t);for(var A=e.firstChild;A;){var L=x(A,t,n,i,g(A)||a,y).chunk;T=f(T,L),A=A.nextSibling}return{chunk:T}}function k(e,t){var n,o,l,c=(n=t,o=e.trim().replace(b,y),(l=a(o))?(v=!0,{chunk:x(l,new i.OrderedSet,-1,"",void 0,n).chunk}):null);if(c){var s=c.chunk,u=new i.OrderedMap({});s.entities&&s.entities.forEach((function(e){e&&(u=u.set(e,r.Entity.__get(e)))}));var d=0;return{contentBlocks:s.text.split("\r").map((function(e,t){var n=d+e.length,a=s&&s.inlines.slice(d,n),o=s&&s.entities.slice(d,n),l=new i.List(a.map((function(e,t){var n={style:e,entity:null};return o[t]&&(n.entity=o[t]),r.CharacterMetadata.create(n)})));return d=n,new r.ContentBlock({key:Object(r.genKey)(),type:s&&s.blocks[t]&&s.blocks[t].type||"unstyled",depth:s&&s.blocks[t]&&s.blocks[t].depth,data:s&&s.blocks[t]&&s.blocks[t].data||new i.Map({}),text:e,characterList:l})})),entityMap:u}}return null}}],n.c=i,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2);function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var r,i}(n(24124),n(72010))}}]);
//# sourceMappingURL=9627.d20534cb.chunk.js.map