(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6783],{29032:function(e,t,n){"use strict";n.d(t,{H:function(){return p}});n(72791);var r=n(51802),i=(n(25646),n(15861)),a=n(64687),o=n.n(a),c=n(31243),l=function(){var e=(0,i.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("image",t),e.prev=2,e.next=5,c.Z.post("http://localhost:6633/api/upload",n,{headers:{"content-type":"multipart/form-data"}});case 5:return r=e.sent,e.abrupt("return",r.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),s=n(61134),u=n(75970),d=n(61800),f=n(80184),m={options:["inline","blockType","list","link","embedded","emoji","image","remove","history"],blockType:{inDropdown:!0,options:["Normal","H1","H2","H3","H4","H5"]},image:{urlEnabled:!1,uploadEnabled:!0,alignmentEnabled:!1,uploadCallback:function(e){return l(e)},previewImage:!1,inputAccept:"image/gif,image/jpeg,image/jpg,image/png,image/svg",alt:{present:!0,mandatory:!0}}},p=function(e){var t=e.name,n=(0,s.Gc)(),i=n.control,a=n.formState.errors;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.Qr,{name:t,control:i,render:function(e){var t=e.field,n=t.value,i=t.onChange;return(0,f.jsx)(r.Editor,{editorState:n,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",onEditorStateChange:i,toolbar:m})}}),(0,f.jsx)(u.B,{errors:a,name:t,render:function(e){var t=e.message;return(0,f.jsx)(d.d,{color:"red",children:t})}})]})}},61800:function(e,t,n){"use strict";n.d(t,{d:function(){return u}});var r,i=n(1413),a=n(30168),o=n(17691),c=n(30407),l=o.ZP.p(r||(r=(0,a.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.5;\n  color: ",';\n  text-align: justify;\n\n  @media screen and (min-width: 980px) {\n    line-height: 1.6;\n  } \n&:empty{\n &::after {\n  white-space: break-spaces;\n  content: " "\n}}\n  \n  ',";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ","\n"])),(function(e){return e.theme.fonts.main}),(function(e){return e.theme.fontWeights.regular}),(function(e){return e.theme.fontSizes.main.body}),(function(e){return e.theme.colors.black}),c.$_,c.Dh,c.bK,c.GQ,c.eC,c.Oq,c.Cg,c.FK,c.AF,c.cp),s=n(80184),u=function(e){return(0,s.jsx)(l,(0,i.Z)({},e))}},35297:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r,i=n(1413),a=n(30168),o=n(17691),c=n(30407),l=(0,o.ZP)("section")((0,o.iv)(r||(r=(0,a.Z)(["\n  min-height:45vh;\n    padding-bottom: 100px;\n    @media screen and (min-width: 980px) {\n      padding-bottom: 128px;\n    }\n  "]))),c.$_,c.Dh,c.bK,c.GQ,c.eC,c.Oq,c.Cg,c.FK,c.AF,c.cp),s=n(80184),u=function(e){return(0,s.jsx)(l,(0,i.Z)({},e))}},16783:function(e,t,n){"use strict";n.r(t),n.d(t,{History:function(){return E}});var r=n(1413),i=n(35297),a=n(199),o=n.n(a),c=n(72010),l=n(61134),s=n(29032),u=n(89055),d=n(15861),f=n(64687),m=n.n(f),p=n(96403),h=n(73418),g=n(85439),y=n(31243);var b=n(1701),v=n.n(b),x=n(72791),w=n(80184),k={content:c.EditorState.createEmpty()},E=function(){var e=(0,l.cI)({defaultValues:k}),t=(0,g.a)({queryKey:["historyAdmin"],queryFn:function(){var e=(0,d.Z)(m().mark((function e(t){var n,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signal,e.next=3,y.Z.get("/api/admin/history",{withCredentials:!0,signal:n});case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),refetchOnWindowFocus:!1,refetchOnMount:!1,retry:!1}),n=t.data,a=function(e){var t=(0,p.NL)();return(0,h.D)({mutationFn:function(){var t=(0,d.Z)(m().mark((function t(n){var r;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.Z.put("/api/admin/history/".concat(e),n,{withCredentials:!0});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),onSuccess:function(e){t.invalidateQueries({queryKey:["historyAdmin"]})},retry:!1})}(null===n||void 0===n?void 0:n.history.id);(0,x.useEffect)((function(){n&&e.reset({content:c.EditorState.createWithContent(c.ContentState.createFromBlockArray(v()(n.history.data.content).contentBlocks))})}),[n,e]);return(0,w.jsx)("main",{children:(0,w.jsx)(i.Z,{children:(0,w.jsx)(u.x,{maxWidth:"960px",m:"0 auto",boxShadow:"regular",children:(0,w.jsx)(u.x,{p:[null,11],px:[6,null],py:[8,null],children:(0,w.jsx)(l.RV,(0,r.Z)((0,r.Z)({},e),{},{children:(0,w.jsxs)("form",{onSubmit:e.handleSubmit((function(t){var n=(0,r.Z)((0,r.Z)({},t),{},{content:o()((0,c.convertToRaw)(t.content.getCurrentContent()))});n.content.length<=30?e.setError("content",{type:"custom",message:"Content must be more than 30 characters long"}):a.mutate(n)})),children:[(0,w.jsxs)("section",{children:[(0,w.jsx)("label",{children:"DraftJS"}),(0,w.jsx)(s.H,{name:"content"})]}),(0,w.jsx)("button",{type:"submit",children:"submit"})]})}))})})})})}},75970:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var r=n(72791),i=n(61134),a=function(e){var t=e.as,n=e.errors,a=e.name,o=e.message,c=e.render,l=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(i[n]=e[n]);return i}(e,["as","errors","name","message","render"]),s=(0,i.Gc)(),u=(0,i.U2)(n||s.formState.errors,a);if(!u)return null;var d=u.message,f=u.types,m=Object.assign({},l,{children:d||o});return r.isValidElement(t)?r.cloneElement(t,m):c?c({message:d||o,messages:f}):r.createElement(t||r.Fragment,m)}},1701:function(e,t,n){window,e.exports=function(e,t){return i={},n.m=r=[function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),a=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n},o=function(e,t,n){var r,a=e.textContent;return""===a.trim()?{chunk:(r=n,{text:" ",inlines:[new i.OrderedSet],entities:[r],blocks:[]})}:{chunk:{text:a,inlines:Array(a.length).fill(t),entities:Array(a.length).fill(n),blocks:[]}}},c=function(){return{text:"\n",inlines:[new i.OrderedSet],entities:new Array(1),blocks:[]}},l=function(){return{text:"",inlines:[],entities:[],blocks:[]}},s=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new i.Map({})}]}},u=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new i.Map({})}]}},d=function(e){return{text:"\r ",inlines:[new i.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new i.Map({})}]}},f=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}},m=new i.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}}),p={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"};function h(e){return e.style.textAlign?new i.Map({"text-align":e.style.textAlign}):e.style.marginLeft?new i.Map({"margin-left":e.style.marginLeft}):void 0}var g=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};t=e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,r.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,r.Entity.__create("LINK","MUTABLE",n))}return t};n.d(t,"default",(function(){return w}));var y=" ",b=new RegExp("&nbsp;","g"),v=!0;function x(e,t,n,i,a,y){var b=e.nodeName.toLowerCase();if(y){var w=y(b,e);if(w){var k=r.Entity.__create(w.type,w.mutability,w.data||{});return{chunk:d(k)}}}if("#text"===b&&"\n"!==e.textContent)return o(e,t,a);if("br"===b)return{chunk:c()};if("img"===b&&e instanceof HTMLImageElement){var E={};E.src=e.getAttribute&&e.getAttribute("src")||e.src,E.alt=e.alt,E.height=e.style.height,E.width=e.style.width,e.style.float&&(E.alignment=e.style.float);var M=r.Entity.__create("IMAGE","MUTABLE",E);return{chunk:d(M)}}if("video"===b&&e instanceof HTMLVideoElement){var S={};S.src=e.getAttribute&&e.getAttribute("src")||e.src,S.alt=e.alt,S.height=e.style.height,S.width=e.style.width,e.style.float&&(S.alignment=e.style.float);var j=r.Entity.__create("VIDEO","MUTABLE",S);return{chunk:d(j)}}if("iframe"===b&&e instanceof HTMLIFrameElement){var C={};C.src=e.getAttribute&&e.getAttribute("src")||e.src,C.height=e.height,C.width=e.width;var O=r.Entity.__create("EMBEDDED_LINK","MUTABLE",C);return{chunk:d(O)}}var A,T=function(e,t){var n=m.filter((function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&-1<n.aliasedElements.indexOf(e)})).keySeq().toSet().toArray();if(1===n.length)return n[0]}(b,i);T&&("ul"===b||"ol"===b?(i=b,n+=1):("unordered-list-item"!==T&&"ordered-list-item"!==T&&(i="",n=-1),v?(A=s(T,h(e)),v=!1):A=u(T,n,h(e)))),A=A||l(),t=function(e,t,n){var r,i=p[e];if(i)r=n.add(i).toOrderedSet();else if(t instanceof HTMLElement){var a=t;r=(r=n).withMutations((function(e){var t=a.style.color,n=a.style.backgroundColor,r=a.style.fontSize,i=a.style.fontFamily.replace(/^"|"$/g,""),o=a.style.fontWeight,c=a.style.textDecoration,l=a.style.fontStyle;t&&e.add("color-".concat(t.replace(/ /g,""))),n&&e.add("bgcolor-".concat(n.replace(/ /g,""))),r&&e.add("fontsize-".concat(r.replace(/px$/g,""))),i&&e.add("fontfamily-".concat(i)),"bold"===o&&e.add(p.strong),"underline"===c&&e.add(p.ins),"italic"===l&&e.add(p.em)})).toOrderedSet()}return r}(b,e,t);for(var _=e.firstChild;_;){var L=x(_,t,n,i,g(_)||a,y).chunk;A=f(A,L),_=_.nextSibling}return{chunk:A}}function w(e,t){var n,o,c,l=(n=t,o=e.trim().replace(b,y),(c=a(o))?(v=!0,{chunk:x(c,new i.OrderedSet,-1,"",void 0,n).chunk}):null);if(l){var s=l.chunk,u=new i.OrderedMap({});s.entities&&s.entities.forEach((function(e){e&&(u=u.set(e,r.Entity.__get(e)))}));var d=0;return{contentBlocks:s.text.split("\r").map((function(e,t){var n=d+e.length,a=s&&s.inlines.slice(d,n),o=s&&s.entities.slice(d,n),c=new i.List(a.map((function(e,t){var n={style:e,entity:null};return o[t]&&(n.entity=o[t]),r.CharacterMetadata.create(n)})));return d=n,new r.ContentBlock({key:Object(r.genKey)(),type:s&&s.blocks[t]&&s.blocks[t].type||"unstyled",depth:s&&s.blocks[t]&&s.blocks[t].depth,data:s&&s.blocks[t]&&s.blocks[t].data||new i.Map({}),text:e,characterList:c})})),entityMap:u}}return null}}],n.c=i,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2);function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var r,i}(n(24124),n(72010))}}]);
//# sourceMappingURL=6783.25200c8f.chunk.js.map