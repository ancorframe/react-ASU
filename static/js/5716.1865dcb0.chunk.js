"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[5716],{35267:function(n,t,e){e.d(t,{Kg:function(){return h},VY:function(){return u},h2:function(){return l}});var i=e(1413),r=e(15861),o=e(64687),a=e.n(o),c=e(85439),s=e(47858),d=e(31243);function h(n){return(0,c.a)({queryKey:["news"],queryFn:function(){var t=(0,r.Z)(a().mark((function t(e){var r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.signal,t.next=3,d.Z.get("/api/news",{signal:r,params:(0,i.Z)({},n)});case 3:return o=t.sent,t.abrupt("return",o.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),refetchOnWindowFocus:!1,refetchOnMount:!1,retry:!1})}function u(n){return(0,c.a)({queryKey:["news",n],queryFn:function(){var t=(0,r.Z)(a().mark((function t(e){var i,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.signal,t.next=3,d.Z.get("/api/news/".concat(n),{signal:i});case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),refetchOnWindowFocus:!1,refetchOnMount:!1,retry:!1})}function l(){return(0,s.N)({queryKey:["newsInfinite"],queryFn:function(){var n=(0,r.Z)(a().mark((function n(t){var e,i,r,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.signal,i=t.pageParam,r=void 0===i?1:i,n.next=3,d.Z.get("/api/news",{signal:e,params:{page:r}});case 3:return o=n.sent,n.abrupt("return",o.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),getNextPageParam:function(n){return n.totalPage<n.nextPage?void 0:n.nextPage},refetchOnWindowFocus:!1,refetchOnMount:!1,retry:!1})}},73168:function(n,t,e){e.d(t,{Eq:function(){return b},HC:function(){return P},NR:function(){return k},N_:function(){return v},W2:function(){return y},Z0:function(){return w},bk:function(){return Z},jC:function(){return S},nf:function(){return z},pK:function(){return g},rU:function(){return j}});var i,r,o,a,c,s,d,h,u,l,f,p=e(30168),m=e(11087),x=e(17691),g=x.ZP.p(i||(i=(0,p.Z)(["\n  text-align: center;\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.5;\n  letter-spacing: -0.05em;\n  color: ",";\n  opacity: 0.4;\n  @media screen and (min-width: 980px) {\n    text-align: none;\n\n    line-height: 1.42;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.fontSizes.main.additional}),(function(n){return n.theme.colors.black})),w=x.ZP.div(r||(r=(0,p.Z)(["\n  @media screen and (min-width: 980px) {\n    text-align: none;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n  }\n  text-align: center;\n\n  border-top: 1px solid rgba(15, 31, 44, 0.1);\n  padding-top: 12px;\n"]))),b=x.ZP.div(o||(o=(0,p.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.5;\n  letter-spacing: -0.05em;\n  color: ",";\n  opacity: 0.4;\n  @media screen and (min-width: 980px) {\n    text-align: none;\n    line-height: 1.42;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n  }\n  text-align: center;\n\n  border-top: 1px solid rgba(255, 255, 255, 0.4);\n  padding-top: 12px;\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.fontSizes.main.additional}),(function(n){return n.theme.colors.white})),y=x.ZP.div(a||(a=(0,p.Z)(["\n  background-color: ",";\n  border-radius: 4px;\n  padding: 32px;\n  @media screen and (min-width: 980px) {\n    padding: 48px;\n  }\n"])),(function(n){return n.theme.colors.black})),Z=x.ZP.footer(c||(c=(0,p.Z)(["\n  padding: 0 12px 14px;\n  margin: 0 auto;\n  @media screen and (min-width: 980px) {\n    padding: 0 24px 24px;\n    /* padding: 0 24px 24px; */\n    max-width: 1440px;\n  }\n"]))),v=x.ZP.ul(s||(s=(0,p.Z)(["\n  display: flex;\n  gap: 32px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n  @media screen and (min-width: 980px) {\n    margin-bottom: 64px;\n    flex-direction: row;\n  }\n"]))),j=(0,x.ZP)(m.OL)(d||(d=(0,p.Z)(["\n  display: block;\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.5;\n  letter-spacing: -0.05em;\n  color: ",";\n\n  @media screen and (min-width: 980px) {\n    text-align: none;\n    line-height: 1.42;\n  }\n\n  text-decoration-line: underline;\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.fontSizes.actions.linkS}),(function(n){return n.theme.colors.white})),k=x.ZP.a(h||(h=(0,p.Z)(["\n  display: block;\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.5;\n  letter-spacing: -0.05em;\n  color: ",";\n\n  @media screen and (min-width: 980px) {\n    text-align: none;\n\n    line-height: 1.42;\n  }\n\n  text-decoration-line: underline;\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.fontSizes.actions.linkS}),(function(n){return n.theme.colors.white})),P=x.ZP.li(u||(u=(0,p.Z)(["\n  /* display: block; */\n  max-width: 300px;\n  /* width: 100%; */\n  width: calc(100% / 4 - 24px);\n  min-width: 250px;\n"]))),z=x.ZP.li(l||(l=(0,p.Z)(["\n  :not(:last-child) {\n    margin-bottom: 8px;\n    @media screen and (min-width: 980px) {\n      margin-bottom: 12px;\n    }\n  }\n"]))),S=x.ZP.footer(f||(f=(0,p.Z)(["\n  padding-bottom: 20px;\n  @media screen and (min-width: 980px) {\n    padding-bottom: 24px;\n  }\n"])))},43869:function(n,t,e){e.d(t,{A:function(){return a}});var i=e(1413),r=e(16981),o=e(80184),a=function(n){return(0,o.jsx)(r.E.div,(0,i.Z)({initial:{opacity:0},animate:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.15}}},n))}},61800:function(n,t,e){e.d(t,{d:function(){return h}});var i,r=e(1413),o=e(30168),a=e(17691),c=e(30407),s=a.ZP.p(i||(i=(0,o.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.5;\n  color: ",';\n  text-align: justify;\n\n  @media screen and (min-width: 980px) {\n    line-height: 1.6;\n  } \n&:empty{\n &::after {\n  white-space: break-spaces;\n  content: " "\n}}\n  \n  ',";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ","\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.fontSizes.main.body}),(function(n){return n.theme.colors.black}),c.$_,c.Dh,c.bK,c.GQ,c.eC,c.Oq,c.Cg,c.FK,c.AF,c.cp),d=e(80184),h=function(n){return(0,d.jsx)(s,(0,r.Z)({},n))}},76233:function(n,t,e){e.d(t,{I:function(){return u}});var i,r=e(1413),o=e(30168),a=e(17691),c=e(30407),s=a.ZP.ul(i||(i=(0,o.Z)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));\n  gap: 16px;\n  @media screen and (min-width: 980px) {\n    grid-template-columns: repeat(3, minmax(330px, 1fr));\n    gap: 24px;\n  }\n\n  ","\n  ","\n","\n","\n","\n","\n","\n","\n","\n","\n"])),c.$_,c.Dh,c.bK,c.GQ,c.eC,c.Oq,c.Cg,c.FK,c.AF,c.cp),d=e(16981),h=e(80184),u=function(n){return(0,h.jsx)(s,(0,r.Z)({as:d.E.ul,initial:{opacity:0},animate:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.15}}},n))}},2578:function(n,t,e){e.d(t,{D:function(){return a}});var i=e(1413),r=e(4867),o=e(80184),a=function(n){return(0,o.jsxs)(o.Fragment,{children:["h1"===n.variant&&(0,o.jsx)(r.H1,(0,i.Z)({},n)),"h2"===n.variant&&(0,o.jsx)(r.H2,(0,i.Z)({},n)),"h3"===n.variant&&(0,o.jsx)(r.H3,(0,i.Z)({},n)),"h4"===n.variant&&(0,o.jsx)(r.H4,(0,i.Z)({},n)),"h5"===n.variant&&(0,o.jsx)(r.H5,(0,i.Z)({},n))]})}},4867:function(n,t,e){e.d(t,{H1:function(){return u},H2:function(){return l},H3:function(){return f},H4:function(){return p},H5:function(){return m}});var i,r,o,a,c,s=e(30168),d=e(17691),h=e(30407),u=(0,d.ZP)("h1")(h.$_,h.Dh,h.bK,h.GQ,h.eC,h.Oq,h.Cg,h.FK,h.AF,h.cp,(0,d.iv)(i||(i=(0,s.Z)(["\n    font-family: ",";\n    font-weight: ",";\n    font-size: ",";\n    line-height: 1.12;\n    letter-spacing: ",";\n    color: ",";\n    @media screen and (min-width: 980px) {\n      line-height: 1.07;\n    }\n  "])),(function(n){return n.theme.fonts.titles}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.titles.h1}),(function(n){return n.theme.letterSpacings.titles}),(function(n){return n.theme.colors.black}))),l=(0,d.ZP)("h2")(h.$_,h.Dh,h.bK,h.GQ,h.eC,h.Oq,h.Cg,h.FK,h.AF,h.cp,(0,d.iv)(r||(r=(0,s.Z)(["\n    font-family: ",";\n    font-weight: ",";\n    font-size: ",";\n    line-height: 1.16;\n    letter-spacing: ",";\n    color: ",";\n    @media screen and (min-width: 980px) {\n      line-height: 1.2;\n    }\n  "])),(function(n){return n.theme.fonts.titles}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.titles.h2}),(function(n){return n.theme.letterSpacings.titles}),(function(n){return n.theme.colors.black}))),f=(0,d.ZP)("h3")(h.$_,h.Dh,h.bK,h.GQ,h.eC,h.Oq,h.Cg,h.FK,h.AF,h.cp,(0,d.iv)(o||(o=(0,s.Z)(["\n    font-family: ",";\n    font-weight: ",";\n    font-size: ",";\n    line-height: 1.2;\n    letter-spacing: ",";\n    color: ",";\n    @media screen and (min-width: 980px) {\n      line-height: 1.25;\n    }\n  "])),(function(n){return n.theme.fonts.titles}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.titles.h3}),(function(n){return n.theme.letterSpacings.titles}),(function(n){return n.theme.colors.black}))),p=(0,d.ZP)("h4")(h.$_,h.Dh,h.bK,h.GQ,h.eC,h.Oq,h.Cg,h.FK,h.AF,h.cp,(0,d.iv)(a||(a=(0,s.Z)(["\n    font-family: ",";\n    font-weight: ",";\n    font-size: ",";\n    line-height: 1.25;\n    letter-spacing: ",";\n    color: ",";\n    @media screen and (min-width: 980px) {\n      line-height: 1.33;\n    }\n  "])),(function(n){return n.theme.fonts.titles}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.titles.h4}),(function(n){return n.theme.letterSpacings.titles}),(function(n){return n.theme.colors.black}))),m=(0,d.ZP)("h5")(h.Dh,h.bK,h.GQ,h.eC,h.Oq,h.Cg,h.FK,h.AF,h.cp,(0,d.iv)(c||(c=(0,s.Z)(["\n    font-family: ",";\n    font-weight: ",";\n    font-size: ",";\n    line-height: 1.42;\n    letter-spacing: ",";\n    color: ",";\n    @media screen and (min-width: 980px) {\n      line-height: 1.4;\n    }\n  "])),(function(n){return n.theme.fonts.titles}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.titles.h5}),(function(n){return n.theme.letterSpacings.titles}),(function(n){return n.theme.colors.black})),h.$_)},56273:function(n,t,e){e.d(t,{Z:function(){return Z}});var i,r,o,a,c,s,d=e(89055),h=e(30168),u=e(17691),l=e(11087),f=(0,u.ZP)(l.OL)(i||(i=(0,h.Z)(["\n  /* text-decoration-line:none; */\n  text-decoration: none;\n  display: block;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  /* min-width: 358px; */\n  /* max-width: 400px; */\n  /* max-height: 340px; */\n  /* width: 100%; */\n  padding: 4px 4px 16px;\n  height: 100%;\n  border-radius: 4px;\n  align-items: center;\n  background: #ffffff;\n  box-shadow: 0px 4px 128px rgba(188, 196, 211, 0.5);\n  /* transition-property: text-decoration;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */\n  :hover,\n  :focus {\n    /* box-shadow: 0px 4px 128px rgb(112 123 144 / 56%); */\n    text-decoration-line: underline;\n    text-decoration-color: ",";\n  }\n  @media screen and (min-width: 980px) {\n    padding: 4px 4px 24px;\n    gap: 20px;\n  }\n"])),(function(n){return n.theme.colors.black})),p=u.ZP.div(r||(r=(0,h.Z)(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  border: 2px solid #161b1f;\n  border-radius: 1px;\n  height: 240px;\n  @media screen and (max-width: 599px) {\n    height: 156px;\n  }\n"]))),m=u.ZP.img(o||(o=(0,h.Z)(["\n  /* margin-top: 4px ; */\n  /* max-width: 100%; */\n  width: 100%;\n  height: 240px;\n  object-fit: cover;\n  object-position: center;\n\n  @media screen and (max-width: 599px) {\n    height: 156px;\n  }\n"]))),x=u.ZP.div(a||(a=(0,h.Z)(["\n  width: 100%;\n  /* height: 48px; */\n  /* margin-bottom: 16px; */\n  flex-grow: 1;\n  /* @media screen and (min-width: 980px) { */\n  /* margin-bottom: 24px; */\n  /* height: 52px; */\n\n  /* } */\n"]))),g=u.ZP.p(c||(c=(0,h.Z)(["\n  padding: 0 12px 0 12px;\n  /* margin-bottom: 16px; */\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.33;\n  letter-spacing: -0.06em;\n  color: ",";\n  @media screen and (min-width: 980px) {\n    line-height: 1.3;\n    padding: 0 20px 0 20px;\n    /* margin-bottom: 24px; */\n  }\n\n  height: 100%;\n"])),(function(n){return n.theme.fonts.actions}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.actions.buttonL}),(function(n){return n.theme.colors.black})),w=u.ZP.p(s||(s=(0,h.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  text-transform: uppercase;\n  color: ",";\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.main.tag}),(function(n){return n.theme.colors.black})),b=e(58290),y=e(80184),Z=function(n){var t=n.news,e=n.home;if(!t)return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(f,{children:[(0,y.jsx)(p,{children:(0,y.jsx)(b.Z,{height:"100%",width:"100%"})}),(0,y.jsx)(x,{children:(0,y.jsx)(b.Z,{height:"26px",width:"100%"})})]})});var i=t.data,r=t.id,o=new Date(i.date),a=o.getFullYear(),c=String(o.getMonth()+1).padStart(2,"0"),s=String(o.getDate()).padStart(2,"0"),h=String(o.getHours()).padStart(2,"0"),u=String(o.getMinutes()).padStart(2,"0"),l="".concat(s,".").concat(c,".").concat(a," / ").concat(h,":").concat(u);return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(f,{to:e?"/about/news/".concat(r):"".concat(r),children:[(0,y.jsxs)(p,{children:[(0,y.jsx)(m,{src:i.image,alt:"image",loading:"lazy"}),(0,y.jsx)(d.x,{position:"absolute",top:3,left:3,p:4,bg:"white",children:(0,y.jsx)(w,{children:l})})]}),(0,y.jsx)(x,{children:(0,y.jsx)(g,{children:i.title})})]})})}},91981:function(n,t,e){e.r(t),e.d(t,{Home:function(){return kn}});var i,r,o,a,c,s,d,h,u=e(89055),l=e(30168),f=e(17691),p=e(11087),m=f.ZP.span(i||(i=(0,l.Z)(["\n  display: block;\n"]))),x=(0,f.ZP)(p.OL)(r||(r=(0,l.Z)(["\n  text-decoration: none;\n  /* text-decoration-line: none; */\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  width: 171px;\n  height: 56px;\n  border-radius: 2px;\n  background-color: ",";\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.33;\n  letter-spacing: -0.05em;\n  color: ",";\n  transition-property: (background-color);\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  @media screen and (min-width: 980px) {\n    font-size: ",";\n    line-height: 1.3;\n    height: 64px;\n  }\n\n  :hover,\n  :focus {\n    text-decoration-line: underline;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fonts.actions}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.mobile.m}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.desktop.m}),(function(n){return n.theme.colors.blackLight})),g=(0,f.ZP)(p.OL)(o||(o=(0,l.Z)(["\n  text-decoration: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  width: 171px;\n  height: 56px;\n  border-radius: 2px;\n  background-color: ",";\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.33;\n  letter-spacing: -0.05em;\n  color: ",";\n  border: 1px solid ",";\n  transition-property: (border);\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  @media screen and (min-width: 980px) {\n    font-size: ",";\n    line-height: 1.3;\n    width: 144px;\n    height: 64px;\n  }\n\n  :hover,\n  :focus {\n    text-decoration-line: underline;\n    border: 1px solid #0f1f2c;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fonts.actions}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.mobile.m}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.fontSizes.desktop.m})),w=(0,f.F4)(a||(a=(0,l.Z)(["\n 0% { color:#0F1F2C }\n 50% { color:#FF7536}\n 100% { color:#0F1F2C }\n"]))),b=f.ZP.span(c||(c=(0,l.Z)(["\n  animation-name: ",";\n  animation-duration: 1.5s;\n  animation-iteration-count: infinite;\n"])),w),y=e(2578),Z=e(61800),v=e(80184),j=function(){return(0,v.jsxs)(u.x,{as:"section",pb:[16,12],pt:[null,10],children:[(0,v.jsx)(y.D,{variant:"h3",mb:[2,4],opacity:"0.1",children:"\u041a\u0410\u0424\u0415\u0414\u0420\u0410"}),(0,v.jsxs)(y.D,{variant:"h1",mb:[4,7],children:[(0,v.jsx)(m,{children:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u043e\u0432\u0430\u043d\u0438\u0445"}),(0,v.jsxs)(m,{children:["\u0421\u0438\u0441\u0442\u0435\u043c \u0423\u043f\u0440\u0430\u0432\u043b\u0456\u043d\u043d\u044f",(0,v.jsx)(b,{children:"_"})]})]}),(0,v.jsx)(Z.d,{mb:[8,16],textAlign:"unset",children:"C\u0442\u0432\u043e\u0440\u0435\u043d\u0430 \u0432 1974 \u0440\u043e\u0446\u0456 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u0433\u0440\u0443\u043f\u0438 \u0432\u0438\u043a\u043b\u0430\u0434\u0430\u0447\u0456\u0432 \u043a\u0430\u0444\u0435\u0434\u0440\u0438 \xab\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0439\u043d\u043e-\u0432\u0438\u043c\u0456\u0440\u044e\u0432\u0430\u043b\u044c\u043d\u0430 \u0442\u0435\u0445\u043d\u0456\u043a\u0430\xbb \u0442\u0430 \u0440\u043e\u0437\u043c\u0456\u0449\u0435\u043d\u0430 \u043d\u0430 8-\u043c\u0443 \u043f\u043e\u0432\u0435\u0440\u0441\u0456 5-\u0433\u043e \u043d\u0430\u0432\u0447\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u0440\u043f\u0443\u0441\u0443."}),(0,v.jsxs)(u.x,{display:"flex",gridGap:"24px",children:[(0,v.jsx)(x,{to:"/entrants",children:"\u0412\u0441\u0442\u0443\u043f\u043d\u0438\u043a\u0430\u043c"}),(0,v.jsx)(g,{to:"/about/history",children:"\u041f\u0440\u043e_\u043d\u0430\u0441"})]})]})},k=e(76233),P=(0,f.ZP)(p.OL)(s||(s=(0,l.Z)(["\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.33;\n  letter-spacing: -0.05em;\n  color: ",";\n  border: 1px solid ",";\n  border-radius: 1px;\n  height: 56px;\n\n  box-shadow: 0px 4px 128px rgba(188, 196, 211, 0.5);\n  transition-property: (border);\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  @media screen and (min-width: 980px) {\n    font-size: ",";\n    line-height: 1.3;\n    height: 64px;\n  }\n  :hover,\n  :focus {\n    border: 1px solid ",";\n    text-decoration-line: underline;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fonts.actions}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.mobile.m}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.fontSizes.desktop.m}),(function(n){return n.theme.colors.black})),z=(0,f.ZP)(k.I)(d||(d=(0,l.Z)(["\n  margin-bottom: 16px;\n  @media screen and (min-width: 980px) {\n    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));\n    margin-bottom: 24px;\n  }\n"]))),S=e(56273),F=e(35267),O=e(34549),C=function(){var n=(0,F.Kg)({page:1,limit:4}).data;return(0,v.jsxs)(u.x,{as:"section",pb:[16,12],children:[(0,v.jsx)(y.D,{variant:"h2",pb:[2,6],mb:[8,22],borderBottom:"titles",opacity:"0.4",children:"\u041d\u043e\u0432\u0438\u043d\u0438"}),(0,v.jsxs)(O.M,{mode:"wait",children:[n&&(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(z,{children:n.news.map((function(n){return(0,v.jsx)("li",{children:(0,v.jsx)(S.Z,{news:n,home:!0})},n.id)}))},9847938759)}),!n&&(0,v.jsx)(z,{children:Array(4).fill().map((function(n,t){return(0,v.jsx)("li",{children:(0,v.jsx)(S.Z,{})},t)}))},984798789938759)]}),(0,v.jsx)(P,{to:"/about/news",children:"\u0412\u0441\u0456_\u043d\u043e\u0432\u0438\u043d\u0438"})]})},K=e(70885),W=e(72791),q=["title","titleId"];function _(){return _=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},_.apply(this,arguments)}function D(n,t){if(null==n)return{};var e,i,r=function(n,t){if(null==n)return{};var e,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}function A(n,t){var e=n.title,i=n.titleId,r=D(n,q);return W.createElement("svg",_({width:38,height:48,viewBox:"0 0 38 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},r),e?W.createElement("title",{id:i},e):null,h||(h=W.createElement("path",{d:"M0.666748 0.666656V47.3333L37.3334 24L0.666748 0.666656Z",fill:"currentColor"})))}var E,H,L,M,G,Q,$,I,B,N,R,U=W.forwardRef(A),V=(e.p,f.ZP.section(E||(E=(0,l.Z)(["\n  /* padding: 0 12px; */\n  position: relative;\n  display:block;\n  width: 100%;\n  min-height:366px;\n  max-height: 370px;\n   border-radius: 4px;\n    background: #f2f3f5;\n  @media screen and (min-width: 980px) {\n    padding: 0;\n    height: 84vh;\n    top: 96px;\n    /* right:0px; */\n    max-width: 472px;\n    width: 100%;\n    max-height: 900px;\n    position: sticky;\n   \n    /* z-index: 10; */\n    /* overflow: hidden; */\n  }\n"])))),Y=f.ZP.img(H||(H=(0,l.Z)(["\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n\n  height: 100%;\n  @media screen and (max-width: 979px) {\n    max-height: 370px;\n  }\n  @media screen and (min-width: 980px) {\n    object-position: 75%;\n  }\n"]))),J=f.ZP.button(L||(L=(0,l.Z)(["\n  position: absolute;\n  padding: 0;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #fff;\n  width: 64px;\n  height: 64px;\n  background: rgba(255, 255, 255, 0.1);\n  box-shadow: 12px 24px 40px rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(6px);\n  /* Note: backdrop-filter has minimal browser support */\n  border: 0;\n  border-radius: 4px;\n  transition-property: (color, background-color);\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  @media screen and (min-width: 980px) {\n    width: 128px;\n    height: 128px;\n  }\n  :hover,\n  :focus {\n    color: #ff7536;\n    background-color: #fff;\n  }\n"]))),T=(0,f.ZP)(U)(M||(M=(0,l.Z)(["\n  height: 24px;\n  width: 19px;\n  @media screen and (min-width: 980px) {\n    height: 47px;\n    width: 37px;\n  }\n"]))),X=f.ZP.div(G||(G=(0,l.Z)(["\n  position: absolute;\n  right: 12px;\n  bottom: 12px;\n\n  @media screen and (min-width: 980px) {\n    right: 32px;\n    bottom: 32px;\n  }\n"]))),nn=f.ZP.p(Q||(Q=(0,l.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.5;\n\n  color: ",";\n  opacity: 0.8;\n  @media screen and (min-width: 980px) {\n    font-size: ",";\n    line-height: 1.42;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.fontSizes.mobile.xs}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.desktop.s})),tn=e(54164),en=e(16981),rn=(0,f.ZP)(en.E.div)($||($=(0,l.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),on=f.ZP.div(I||(I=(0,l.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),an=document.querySelector("#modal-root"),cn=function(n){var t=n.onBackdropClose,e=n.children;return tn.createPortal((0,v.jsx)(rn,{initial:{opacity:0,transition:{delay:.1,type:"spring",stiffness:400,damping:40}},animate:{opacity:1,transition:{delay:.1,type:"spring",stiffness:400,damping:40}},exit:{opacity:0,transition:{delay:.1,type:"spring",stiffness:400,damping:40}},onClick:function(n){return t(n)},children:(0,v.jsx)(on,{children:e})}),an)},sn=e(96403),dn=e(58290),hn=(e(85862),e(49686)),un=function(){var n=(0,W.useState)(!1),t=(0,K.Z)(n,2),e=t[0],i=t[1],r=(0,sn.NL)().getQueryData({queryKey:["home"]});function o(n){"Escape"===n.code&&(i(!1),document.removeEventListener("keydown",o))}var a=r&&function(n){var t=n.split("v=")[1];if(t){var e=t.indexOf("&");return-1!==e?t.substring(0,e):t}return null}(r.home.data.promoUrl);return(0,v.jsx)(O.M,{mode:"wait",children:r?(0,v.jsxs)(V,{as:en.E.div,initial:{opacity:0},animate:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.15}},children:[(0,v.jsx)(Y,{src:r.home.data.image,alt:r.home.data.promoAlt,loading:"lazy"}),(0,v.jsx)(J,{type:"button",onClick:function(){window.screen.width<980?window.open("".concat(r.home.data.promoUrl),"_blank","noreferrer"):(i(!0),document.addEventListener("keydown",o))},children:(0,v.jsx)(T,{})}),(0,v.jsx)(X,{children:(0,v.jsx)(nn,{children:r.home.data.promoAlt})}),(0,v.jsx)(O.M,{children:e&&(0,v.jsx)(cn,{onBackdropClose:function(){i(!1)},children:(0,v.jsx)(hn.Z,{videoId:a,opts:{height:"562",width:"900",playerVars:{autoplay:1}}})})})]}):(0,v.jsx)(V,{as:en.E.div,initial:{opacity:0},animate:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.15}},children:(0,v.jsx)(dn.Z,{width:"100%",height:"100%"})})})},ln=e(73168),fn=function(){return(0,v.jsx)(ln.jC,{children:(0,v.jsxs)(ln.Z0,{children:[(0,v.jsx)(ln.pK,{children:"\xa9 2022 Department of automated management systems. All Rigths Reserved."}),(0,v.jsx)(ln.pK,{children:"Sokolov Design"})]})})},pn=e(30407),mn=f.ZP.div(B||(B=(0,l.Z)(["\n  /* min-width: 390px; */\n  display: flex;\n  margin: 0 auto;\n  gap: 24px;\n  flex-direction: column-reverse;\n  @media screen and (min-width: 980px) {\n    max-width: 1440px;\n    flex-direction: row;\n  }\n  ","\n"])),pn.$_),xn=f.ZP.div(N||(N=(0,l.Z)(["\npadding: 0 12px;\n/* min-width: 390px; */\n  @media screen and (min-width: 980px) {\n    padding: 0;\npadding-left: 96px;\nmax-width: 920px;\n  }\n"]))),gn=f.ZP.div(R||(R=(0,l.Z)(["\nmin-width: 330px;\n  padding: 0 12px;\n  @media screen and (min-width: 980px) {\n    padding: 0;\n    width: calc(100% - 920px);\n    padding-right: 24px;\n  }\n"]))),wn=e(43869),bn=e(15861),yn=e(64687),Zn=e.n(yn),vn=e(85439),jn=e(31243);var kn=function(){return(0,vn.a)({queryKey:["home"],queryFn:function(){var n=(0,bn.Z)(Zn().mark((function n(t){var e,i;return Zn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.signal,n.next=3,jn.Z.get("/api/home",{withCredentials:!0,signal:e});case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),onSuccess:function(n){},refetchOnWindowFocus:!1,refetchOnMount:!1,retry:!1}),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(wn.A,{children:(0,v.jsxs)(mn,{bg:"white",children:[(0,v.jsxs)(xn,{children:[(0,v.jsxs)("main",{children:[(0,v.jsx)(j,{}),(0,v.jsx)(C,{})]}),(0,v.jsx)(fn,{})]}),(0,v.jsx)(gn,{children:(0,v.jsx)(un,{})})]})},"home")})}}}]);
//# sourceMappingURL=5716.1865dcb0.chunk.js.map