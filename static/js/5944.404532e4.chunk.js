(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[5944],{65499:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var r=n(61134),i=n(12652),o=(n(22427),n(830),n(65749),n(75970)),a=n(61800),c=n(80184),l=function(e){var t=e.name,n=(0,r.Gc)(),l=n.control,s=n.formState.errors;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.Qr,{render:function(e){var t=e.field;return(0,c.jsx)(i.Z,{onChange:function(e){return t.onChange(e)},value:t.value,format:"dd-MM-y h:mm",locale:"uk-UK"})},name:t,control:l}),(0,c.jsx)(o.B,{errors:s,name:t,render:function(e){var t=e.message;return(0,c.jsx)(a.d,{color:"red",children:t})}})]})}},28899:function(e,t,n){"use strict";n.d(t,{h:function(){return d}});var r=n(1413),i=n(61134),o=n(18267),a=n(72791),c=n(75970),l=n(61800),s=n(80184);function u(e){try{return new URL(e),!0}catch(t){return!1}}var d=function(e){var t=e.name,n=(0,i.Gc)(),r=n.control,o=n.formState.errors;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Qr,{render:function(e){var t=e.field,n=t.value,r=t.onChange;return(0,s.jsx)(f,{value:n,onChange:r})},name:t,control:r,defaultValue:""}),(0,s.jsx)(c.B,{errors:o,name:t,render:function(e){var t=e.message;return(0,s.jsx)(l.d,{color:"red",children:t})}})]})},f=function(e){var t=e.value,n=e.onChange,i=(0,a.useCallback)((function(e){n(null===e||void 0===e?void 0:e[0],{shouldValidate:!0})}),[n]),c=(0,o.uI)({onDrop:i,multiple:!1,accept:{"image/*":[".png",".jpeg",".jpg"]}}),l=c.getRootProps,d=c.getInputProps,f=c.isDragActive;return(0,s.jsxs)("div",(0,r.Z)((0,r.Z)({},l()),{},{children:[(0,s.jsx)("input",(0,r.Z)({},d({onChange:n}))),f?(0,s.jsx)("p",{children:"Drop the files here ..."}):(0,s.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"}),t&&(u(t)?(0,s.jsx)("img",{src:t,alt:"promo img",width:"300px"}):"object"===typeof t&&(0,s.jsx)("img",{src:URL.createObjectURL(t),alt:"promo img",width:"300px"}))]}))}},29032:function(e,t,n){"use strict";n.d(t,{H:function(){return h}});n(72791);var r=n(51802),i=(n(25646),n(15861)),o=n(64687),a=n.n(o),c=n(31243),l=function(){var e=(0,i.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("image",t),e.prev=2,e.next=5,c.Z.post("http://localhost:6633/api/upload",n,{headers:{"content-type":"multipart/form-data"}});case 5:return r=e.sent,e.abrupt("return",r.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),s=n(61134),u=n(75970),d=n(61800),f=n(80184),m={options:["inline","blockType","list","link","embedded","emoji","image","remove","history"],blockType:{inDropdown:!0,options:["Normal","H1","H2","H3","H4","H5"]},image:{urlEnabled:!1,uploadEnabled:!0,alignmentEnabled:!1,uploadCallback:function(e){return l(e)},previewImage:!1,inputAccept:"image/gif,image/jpeg,image/jpg,image/png,image/svg",alt:{present:!0,mandatory:!0}}},h=function(e){var t=e.name,n=(0,s.Gc)(),i=n.control,o=n.formState.errors;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.Qr,{name:t,control:i,render:function(e){var t=e.field,n=t.value,i=t.onChange;return(0,f.jsx)(r.Editor,{editorState:n,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",onEditorStateChange:i,toolbar:m})}}),(0,f.jsx)(u.B,{errors:o,name:t,render:function(e){var t=e.message;return(0,f.jsx)(d.d,{color:"red",children:t})}})]})}},68581:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(81724),i=r.Ry({image:r.nK().test("Image is required","Image is required",(function(e){return r.Ry().isValidSync(e)||r.Z_().min(10).isValidSync(e)})),date:r.hT().required().nullable(),title:r.Z_().min(3).required()}).required()},61800:function(e,t,n){"use strict";n.d(t,{d:function(){return u}});var r,i=n(1413),o=n(30168),a=n(17691),c=n(30407),l=a.ZP.p(r||(r=(0,o.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.5;\n  color: ",';\n  text-align: justify;\n\n  @media screen and (min-width: 980px) {\n    line-height: 1.6;\n  } \n&:empty{\n &::after {\n  white-space: break-spaces;\n  content: " "\n}}\n  \n  ',";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ","\n"])),(function(e){return e.theme.fonts.main}),(function(e){return e.theme.fontWeights.regular}),(function(e){return e.theme.fontSizes.main.body}),(function(e){return e.theme.colors.black}),c.$_,c.Dh,c.bK,c.GQ,c.eC,c.Oq,c.Cg,c.FK,c.AF,c.cp),s=n(80184),u=function(e){return(0,s.jsx)(l,(0,i.Z)({},e))}},21305:function(e,t,n){"use strict";n.d(t,{I:function(){return p}});var r,i=n(1413),o=n(45987),a=n(30168),c=n(17691),l=n(30407),s=c.ZP.input(r||(r=(0,a.Z)(["\n  height: 56px;\n  background: #ffffff;\n  width: 100%;\n  border: 1px solid #bcc4d3;\n  border-radius: 1px;\n  padding: 12px 52px 12px 16px;\n  transition-property: (border-color, color);\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  ::placeholder {\n    font-family: ",";\n    font-weight: ",";\n    font-size: ",";\n    line-height: 1.5;\n    color: ",";\n    @media screen and (min-width: 980px) {\n      font-size: ",";\n      line-height: 1.6;\n    }\n  }\n  :hover,\n  :focus {\n    border-color: ",";\n  }\n  :focus {\n    ::placeholder {\n      color: ",";\n    }\n  }\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ","\n"])),(function(e){return e.theme.fonts.main}),(function(e){return e.theme.fontWeights.regular}),(function(e){return e.theme.fontSizes.mobile.sm}),(function(e){return e.theme.colors.grey}),(function(e){return e.theme.fontSizes.desktop.m}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.black}),l.$_,l.Dh,l.bK,l.GQ,l.eC,l.Oq,l.Cg,l.FK,l.AF,l.cp),u=n(61134),d=n(75970),f=n(61800),m=n(80184),h=["name"],p=function(e){var t=e.name,n=(0,o.Z)(e,h),r=(0,u.Gc)(),a=r.control,c=r.formState.errors;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u.Qr,{render:function(e){var t=e.field;return(0,m.jsx)(s,(0,i.Z)((0,i.Z)({},t),n))},name:t,control:a,defaultValue:""}),(0,m.jsx)(d.B,{errors:c,name:t,render:function(e){var t=e.message;return(0,m.jsx)(f.d,{color:"red",children:t})}})]})}},35297:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r,i=n(1413),o=n(30168),a=n(17691),c=n(30407),l=(0,a.ZP)("section")((0,a.iv)(r||(r=(0,o.Z)(["\n  min-height:45vh;\n    padding-bottom: 100px;\n    @media screen and (min-width: 980px) {\n      padding-bottom: 128px;\n    }\n  "]))),c.$_,c.Dh,c.bK,c.GQ,c.eC,c.Oq,c.Cg,c.FK,c.AF,c.cp),s=n(80184),u=function(e){return(0,s.jsx)(l,(0,i.Z)({},e))}},5292:function(e,t,n){"use strict";n.r(t),n.d(t,{News:function(){return k}});var r=n(1413),i=n(35297),o=n(199),a=n.n(o),c=n(1701),l=n.n(c),s=n(72010),u=n(61134),d=n(29032),f=n(89055),m=n(72791),h=n(57689),p=n(87985),g=n(28899),x=n(65499),b=n(21305),v=n(44695),y=n(68581),j=n(80184),w={title:"",image:"",date:new Date,content:s.EditorState.createEmpty()},k=function(){var e=(0,h.UO)().id,t=(0,u.cI)({defaultValues:w,resolver:(0,v.X)(y.V)}),n=(0,p.VY)(e).data,o=(0,p.po)(e),c=(0,p.rj)(e),k=(0,h.s0)();(0,m.useEffect)((function(){if(n){var e=(0,r.Z)((0,r.Z)({},n.news.data),{},{date:new Date(n.news.data.date),content:s.EditorState.createWithContent(s.ContentState.createFromBlockArray(l()(n.news.data.content).contentBlocks))});t.reset((0,r.Z)({},e))}}),[n,t]);return(0,j.jsx)("main",{children:(0,j.jsx)(i.Z,{children:(0,j.jsx)(f.x,{maxWidth:"960px",m:"0 auto",boxShadow:"regular",children:(0,j.jsxs)(f.x,{p:[null,11],px:[6,null],py:[8,null],children:[(0,j.jsx)(u.RV,(0,r.Z)((0,r.Z)({},t),{},{children:(0,j.jsxs)("form",{onSubmit:t.handleSubmit((function(e){var n=(0,r.Z)((0,r.Z)({},e),{},{content:a()((0,s.convertToRaw)(e.content.getCurrentContent()))}),i=new FormData;for(var o in n)i.append(o,n[o]);n.content.length<=30?t.setError("content",{type:"custom",message:"Content must be more than 30 characters long"}):c.mutate(i)})),children:[(0,j.jsxs)("section",{children:[(0,j.jsx)("label",{children:"title"}),(0,j.jsx)(b.I,{name:"title"})]}),(0,j.jsxs)("section",{children:[(0,j.jsx)("label",{children:"image"}),(0,j.jsx)(g.h,{name:"image"})]}),(0,j.jsxs)("section",{children:[(0,j.jsx)("label",{children:"date"}),(0,j.jsx)(x.M,{name:"date"})]}),(0,j.jsxs)("section",{children:[(0,j.jsx)("label",{children:"DraftJS"}),(0,j.jsx)(d.H,{name:"content"})]}),(0,j.jsx)("button",{type:"submit",children:"submit"})]})})),(0,j.jsx)("button",{type:"button",onClick:function(){o.mutate(),k("/admin/news")},children:"delete"})]})})})})}},1701:function(e,t,n){window,e.exports=function(e,t){return i={},n.m=r=[function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),o=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n},a=function(e,t,n){var r,o=e.textContent;return""===o.trim()?{chunk:(r=n,{text:" ",inlines:[new i.OrderedSet],entities:[r],blocks:[]})}:{chunk:{text:o,inlines:Array(o.length).fill(t),entities:Array(o.length).fill(n),blocks:[]}}},c=function(){return{text:"\n",inlines:[new i.OrderedSet],entities:new Array(1),blocks:[]}},l=function(){return{text:"",inlines:[],entities:[],blocks:[]}},s=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new i.Map({})}]}},u=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new i.Map({})}]}},d=function(e){return{text:"\r ",inlines:[new i.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new i.Map({})}]}},f=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}},m=new i.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}}),h={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"};function p(e){return e.style.textAlign?new i.Map({"text-align":e.style.textAlign}):e.style.marginLeft?new i.Map({"margin-left":e.style.marginLeft}):void 0}var g=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};t=e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,r.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,r.Entity.__create("LINK","MUTABLE",n))}return t};n.d(t,"default",(function(){return j}));var x=" ",b=new RegExp("&nbsp;","g"),v=!0;function y(e,t,n,i,o,x){var b=e.nodeName.toLowerCase();if(x){var j=x(b,e);if(j){var w=r.Entity.__create(j.type,j.mutability,j.data||{});return{chunk:d(w)}}}if("#text"===b&&"\n"!==e.textContent)return a(e,t,o);if("br"===b)return{chunk:c()};if("img"===b&&e instanceof HTMLImageElement){var k={};k.src=e.getAttribute&&e.getAttribute("src")||e.src,k.alt=e.alt,k.height=e.style.height,k.width=e.style.width,e.style.float&&(k.alignment=e.style.float);var E=r.Entity.__create("IMAGE","MUTABLE",k);return{chunk:d(E)}}if("video"===b&&e instanceof HTMLVideoElement){var M={};M.src=e.getAttribute&&e.getAttribute("src")||e.src,M.alt=e.alt,M.height=e.style.height,M.width=e.style.width,e.style.float&&(M.alignment=e.style.float);var S=r.Entity.__create("VIDEO","MUTABLE",M);return{chunk:d(S)}}if("iframe"===b&&e instanceof HTMLIFrameElement){var C={};C.src=e.getAttribute&&e.getAttribute("src")||e.src,C.height=e.height,C.width=e.width;var _=r.Entity.__create("EMBEDDED_LINK","MUTABLE",C);return{chunk:d(_)}}var A,L=function(e,t){var n=m.filter((function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&-1<n.aliasedElements.indexOf(e)})).keySeq().toSet().toArray();if(1===n.length)return n[0]}(b,i);L&&("ul"===b||"ol"===b?(i=b,n+=1):("unordered-list-item"!==L&&"ordered-list-item"!==L&&(i="",n=-1),v?(A=s(L,p(e)),v=!1):A=u(L,n,p(e)))),A=A||l(),t=function(e,t,n){var r,i=h[e];if(i)r=n.add(i).toOrderedSet();else if(t instanceof HTMLElement){var o=t;r=(r=n).withMutations((function(e){var t=o.style.color,n=o.style.backgroundColor,r=o.style.fontSize,i=o.style.fontFamily.replace(/^"|"$/g,""),a=o.style.fontWeight,c=o.style.textDecoration,l=o.style.fontStyle;t&&e.add("color-".concat(t.replace(/ /g,""))),n&&e.add("bgcolor-".concat(n.replace(/ /g,""))),r&&e.add("fontsize-".concat(r.replace(/px$/g,""))),i&&e.add("fontfamily-".concat(i)),"bold"===a&&e.add(h.strong),"underline"===c&&e.add(h.ins),"italic"===l&&e.add(h.em)})).toOrderedSet()}return r}(b,e,t);for(var T=e.firstChild;T;){var Z=y(T,t,n,i,g(T)||o,x).chunk;A=f(A,Z),T=T.nextSibling}return{chunk:A}}function j(e,t){var n,a,c,l=(n=t,a=e.trim().replace(b,x),(c=o(a))?(v=!0,{chunk:y(c,new i.OrderedSet,-1,"",void 0,n).chunk}):null);if(l){var s=l.chunk,u=new i.OrderedMap({});s.entities&&s.entities.forEach((function(e){e&&(u=u.set(e,r.Entity.__get(e)))}));var d=0;return{contentBlocks:s.text.split("\r").map((function(e,t){var n=d+e.length,o=s&&s.inlines.slice(d,n),a=s&&s.entities.slice(d,n),c=new i.List(o.map((function(e,t){var n={style:e,entity:null};return a[t]&&(n.entity=a[t]),r.CharacterMetadata.create(n)})));return d=n,new r.ContentBlock({key:Object(r.genKey)(),type:s&&s.blocks[t]&&s.blocks[t].type||"unstyled",depth:s&&s.blocks[t]&&s.blocks[t].depth,data:s&&s.blocks[t]&&s.blocks[t].data||new i.Map({}),text:e,characterList:c})})),entityMap:u}}return null}}],n.c=i,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2);function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var r,i}(n(24124),n(72010))}}]);
//# sourceMappingURL=5944.404532e4.chunk.js.map