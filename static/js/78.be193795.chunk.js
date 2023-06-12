"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[78],{28899:function(n,e,r){r.d(e,{h:function(){return d}});var t=r(1413),i=r(61134),a=r(18267),u=r(72791),o=r(75970),c=r(61800),s=r(80184);function l(n){try{return new URL(n),!0}catch(e){return!1}}var d=function(n){var e=n.name,r=(0,i.Gc)(),t=r.control,a=r.formState.errors;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Qr,{render:function(n){var e=n.field,r=e.value,t=e.onChange;return(0,s.jsx)(f,{value:r,onChange:t})},name:e,control:t,defaultValue:""}),(0,s.jsx)(o.B,{errors:a,name:e,render:function(n){var e=n.message;return(0,s.jsx)(c.d,{color:"red",children:e})}})]})},f=function(n){var e=n.value,r=n.onChange,i=(0,u.useCallback)((function(n){r(null===n||void 0===n?void 0:n[0],{shouldValidate:!0})}),[r]),o=(0,a.uI)({onDrop:i,multiple:!1,accept:{"image/*":[".png",".jpeg",".jpg"]}}),c=o.getRootProps,d=o.getInputProps,f=o.isDragActive;return(0,s.jsxs)("div",(0,t.Z)((0,t.Z)({},c()),{},{children:[(0,s.jsx)("input",(0,t.Z)({},d({onChange:r}))),f?(0,s.jsx)("p",{children:"Drop the files here ..."}):(0,s.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"}),e&&(l(e)?(0,s.jsx)("img",{src:e,alt:"promo img",width:"300px"}):"object"===typeof e&&(0,s.jsx)("img",{src:URL.createObjectURL(e),alt:"promo img",width:"300px"}))]}))}},25650:function(n,e,r){r.d(e,{AE:function(){return f},Bq:function(){return l},Kp:function(){return h},S_:function(){return p},gJ:function(){return d}});var t=r(15861),i=r(64687),a=r.n(i),u=r(85439),o=r(96403),c=r(73418),s=r(31243);function l(){return(0,u.a)({queryKey:["literature"],queryFn:function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.signal,n.next=3,s.Z.get("/api/admin/literature",{withCredentials:!0,signal:r});case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),refetchOnWindowFocus:!1,refetchOnMount:!1,retry:!1})}function d(n){return(0,u.a)({queryKey:["literature",n],queryFn:function(){var e=(0,t.Z)(a().mark((function e(r){var t,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.signal,e.next=3,s.Z.get("/api/admin/literature/".concat(n),{withCredentials:!0,signal:t});case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),refetchOnWindowFocus:!1,refetchOnMount:!1,retry:2})}function f(n){var e=(0,o.NL)();return(0,c.D)({mutationFn:function(){var e=(0,t.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.put("/api/admin/literature/".concat(n),r,{withCredentials:!0});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),onSuccess:function(n){e.invalidateQueries({queryKey:["literature"]})},retry:!1})}function p(){var n=(0,o.NL)();return(0,c.D)({mutationFn:function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.post("/api/admin/literature",e,{withCredentials:!0});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),onSuccess:function(e){n.invalidateQueries({queryKey:["literature"]})},retry:!1})}function h(n){var e=(0,o.NL)();return(0,c.D)({mutationFn:function(){var e=(0,t.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.delete("/api/admin/literature/".concat(n),{withCredentials:!0});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onSuccess:function(n){e.invalidateQueries({queryKey:["literature"]})},retry:!1})}},43127:function(n,e,r){r.d(e,{Z:function(){return i}});var t=r(81724),i=t.Ry({image:t.nK().test("Image is required","Image is required",(function(n){return t.Ry().isValidSync(n)||t.Z_().min(10).isValidSync(n)})),title:t.Z_().min(3).required(),author:t.Z_().min(3).required(),specialty:t.IX().of(t.Ry().shape({value:t.Z_().min(3).required(),label:t.Z_().min(1).required()})).min(1).required(),url:t.Z_().url().required()}).required()},61800:function(n,e,r){r.d(e,{d:function(){return l}});var t,i=r(1413),a=r(30168),u=r(17691),o=r(30407),c=u.ZP.p(t||(t=(0,a.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.5;\n  color: ",';\n  text-align: justify;\n\n  @media screen and (min-width: 980px) {\n    line-height: 1.6;\n  } \n&:empty{\n &::after {\n  white-space: break-spaces;\n  content: " "\n}}\n  \n  ',";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ","\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.fontSizes.main.body}),(function(n){return n.theme.colors.black}),o.$_,o.Dh,o.bK,o.GQ,o.eC,o.Oq,o.Cg,o.FK,o.AF,o.cp),s=r(80184),l=function(n){return(0,s.jsx)(c,(0,i.Z)({},n))}},92689:function(n,e,r){r.d(e,{Q:function(){return y}});var t=r(1413),i=r(45987),a=r(15861),u=r(64687),o=r.n(u),c=r(85439),s=r(96403),l=r(73418),d=r(31243);var f=r(25984),p=r(61134),h=r(60781),m=r(75970),x=r(61800),v=r(80184),g=["name","placeholder"],y=function(n){var e=n.name,r=n.placeholder,u=void 0===r?"Select":r,y=(0,i.Z)(n,g),j=(0,p.Gc)(),b=j.control,Z=j.formState.errors,w=(0,c.a)({queryKey:["specialtyAdmin"],queryFn:function(){var n=(0,a.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.signal,n.next=3,d.Z.get("/api/admin/specialty",{withCredentials:!0,signal:r});case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),refetchOnWindowFocus:!1,refetchOnMount:!1,retry:!1}),k=w.data,q=w.isLoading,C=function(n){var e=(0,s.NL)();return(0,l.D)({mutationFn:function(){var e=(0,a.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.patch("/api/admin/specialty/".concat(n),r,{withCredentials:!0});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),onSuccess:function(n){e.invalidateQueries({queryKey:["specialtyAdmin"]})},retry:!1})}(null===k||void 0===k?void 0:k.specialty.id),F=function(n){var e={label:n,value:(0,f.x0)(3)};C.mutate(e)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.Qr,{name:e,control:b,render:function(n){var e=n.field;return(0,v.jsx)(h.Z,(0,t.Z)((0,t.Z)({isClearable:!0,options:null===k||void 0===k?void 0:k.specialty.data.specialty,placeholder:u,isDisabled:q,isLoading:q,onCreateOption:F},e),y))}}),(0,v.jsx)(m.B,{errors:Z,name:e,render:function(n){var e=n.message;return(0,v.jsx)(x.d,{color:"red",children:e})}})]})}},21305:function(n,e,r){r.d(e,{I:function(){return m}});var t,i=r(1413),a=r(45987),u=r(30168),o=r(17691),c=r(30407),s=o.ZP.input(t||(t=(0,u.Z)(["\n  height: 56px;\n  background: #ffffff;\n  width: 100%;\n  border: 1px solid #bcc4d3;\n  border-radius: 1px;\n  padding: 12px 52px 12px 16px;\n  transition-property: (border-color, color);\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  ::placeholder {\n    font-family: ",";\n    font-weight: ",";\n    font-size: ",";\n    line-height: 1.5;\n    color: ",";\n    @media screen and (min-width: 980px) {\n      font-size: ",";\n      line-height: 1.6;\n    }\n  }\n  :hover,\n  :focus {\n    border-color: ",";\n  }\n  :focus {\n    ::placeholder {\n      color: ",";\n    }\n  }\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ","\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.fontSizes.mobile.sm}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.fontSizes.desktop.m}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.black}),c.$_,c.Dh,c.bK,c.GQ,c.eC,c.Oq,c.Cg,c.FK,c.AF,c.cp),l=r(61134),d=r(75970),f=r(61800),p=r(80184),h=["name"],m=function(n){var e=n.name,r=(0,a.Z)(n,h),t=(0,l.Gc)(),u=t.control,o=t.formState.errors;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.Qr,{render:function(n){var e=n.field;return(0,p.jsx)(s,(0,i.Z)((0,i.Z)({},e),r))},name:e,control:u,defaultValue:""}),(0,p.jsx)(d.B,{errors:o,name:e,render:function(n){var e=n.message;return(0,p.jsx)(f.d,{color:"red",children:e})}})]})}},35297:function(n,e,r){r.d(e,{Z:function(){return l}});var t,i=r(1413),a=r(30168),u=r(17691),o=r(30407),c=(0,u.ZP)("section")((0,u.iv)(t||(t=(0,a.Z)(["\n  min-height:45vh;\n    padding-bottom: 100px;\n    @media screen and (min-width: 980px) {\n      padding-bottom: 128px;\n    }\n  "]))),o.$_,o.Dh,o.bK,o.GQ,o.eC,o.Oq,o.Cg,o.FK,o.AF,o.cp),s=r(80184),l=function(n){return(0,s.jsx)(c,(0,i.Z)({},n))}},80078:function(n,e,r){r.r(e),r.d(e,{Literature:function(){return v}});var t=r(1413),i=r(35297),a=r(61134),u=r(89055),o=r(72791),c=r(57689),s=r(21305),l=r(25650),d=r(28899),f=r(92689),p=r(44695),h=r(43127),m=r(80184),x={title:"",image:"",author:"",specialty:[],url:""},v=function(){var n=(0,c.UO)().id,e=(0,a.cI)({defaultValues:x,resolver:(0,p.X)(h.Z)}),r=(0,l.gJ)(n).data,v=(0,l.Kp)(n),g=(0,l.AE)(n),y=(0,c.s0)();(0,o.useEffect)((function(){r&&e.reset((0,t.Z)({},r.literature.data))}),[r,e]);return(0,m.jsx)("main",{children:(0,m.jsx)(i.Z,{children:(0,m.jsx)(u.x,{maxWidth:"960px",m:"0 auto",boxShadow:"regular",children:(0,m.jsxs)(u.x,{p:[null,11],px:[6,null],py:[8,null],children:[(0,m.jsx)(a.RV,(0,t.Z)((0,t.Z)({},e),{},{children:(0,m.jsxs)("form",{onSubmit:e.handleSubmit((function(n){var e=(0,t.Z)((0,t.Z)({},n),{},{specialty:JSON.stringify(n.specialty)}),r=new FormData;for(var i in e)r.append(i,e[i]);g.mutate(r)})),onKeyDown:function(n){return function(n){"Enter"===n.key&&n.preventDefault()}(n)},children:[(0,m.jsxs)("section",{children:[(0,m.jsx)("label",{children:"title"}),(0,m.jsx)(s.I,{name:"title"})]}),(0,m.jsxs)("section",{children:[(0,m.jsx)("label",{children:"specialty"}),(0,m.jsx)(f.Q,{isMulti:!0,name:"specialty"})]}),(0,m.jsxs)("section",{children:[(0,m.jsx)("label",{children:"author"}),(0,m.jsx)(s.I,{name:"author"})]}),(0,m.jsxs)("section",{children:[(0,m.jsx)("label",{children:"url"}),(0,m.jsx)(s.I,{name:"url"})]}),(0,m.jsxs)("section",{children:[(0,m.jsx)("label",{children:"image"}),(0,m.jsx)(d.h,{name:"image"})]}),(0,m.jsx)("button",{type:"submit",children:"submit"})]})})),(0,m.jsx)("button",{type:"button",onClick:function(){v.mutate(),y("/admin/literature")},children:"delete"})]})})})})}}}]);
//# sourceMappingURL=78.be193795.chunk.js.map