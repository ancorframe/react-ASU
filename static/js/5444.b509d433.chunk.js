"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[5444],{35267:function(n,t,e){e.d(t,{Kg:function(){return h},VY:function(){return u},h2:function(){return x}});var i=e(1413),r=e(15861),a=e(64687),o=e.n(a),c=e(85439),s=e(47858),d=e(31243);function h(n){return(0,c.a)({queryKey:["news"],queryFn:function(){var t=(0,r.Z)(o().mark((function t(e){var r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.signal,t.next=3,d.Z.get("/api/news",{signal:r,params:(0,i.Z)({},n)});case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),refetchOnWindowFocus:!1,refetchOnMount:!1,retry:!1})}function u(n){return(0,c.a)({queryKey:["news",n],queryFn:function(){var t=(0,r.Z)(o().mark((function t(e){var i,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.signal,t.next=3,d.Z.get("/api/news/".concat(n),{signal:i});case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),refetchOnWindowFocus:!1,refetchOnMount:!1,retry:!1})}function x(){return(0,s.N)({queryKey:["newsInfinite"],queryFn:function(){var n=(0,r.Z)(o().mark((function n(t){var e,i,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.signal,i=t.pageParam,r=void 0===i?1:i,n.next=3,d.Z.get("/api/news",{signal:e,params:{page:r}});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),getNextPageParam:function(n){return n.totalPage<n.nextPage?void 0:n.nextPage},refetchOnWindowFocus:!1,refetchOnMount:!1,retry:!1})}},31625:function(n,t,e){e.d(t,{j:function(){return c}});var i,r=e(30168),a=e(17691).ZP.p(i||(i=(0,r.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.5;\n  /* color: ","; */\n  color: rgba(15, 31, 44, 0.4);\n  padding-top: 12px;\n  /* opacity: 0.4; */\n\n  border-top: 1px solid #f2f3f5;\n  margin-top: 32px;\n  @media screen and (min-width: 980px) {\n    margin-top: 64px;\n    line-height: 1.42;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.fontSizes.main.additional}),(function(n){return n.theme.colors.black})),o=e(80184),c=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a,{children:"\u0417\u0430 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u043e\u044e \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0454\u044e \u0437\u0432\u0435\u0440\u0442\u0430\u0442\u0438\u0441\u044f \u0434\u043e \u043d\u0430\u0441: asu.dept@lpnu.ua \u0430\u0431\u043e vasyl.m.teslyuk@lpnu.ua (\u0437\u0430\u0432\u0456\u0434\u0443\u0432\u0430\u0447 \u043a\u0430\u0444\u0435\u0434\u0440\u043e\u044e \u0410\u0421\u0423)."})})}},8737:function(n,t,e){e.d(t,{r:function(){return l}});var i=e(58290),r=e(89055),a=e(85216),o=e(44321),c=e(99709),s=e(35297),d=e(63572),h=e(2578),u=e(47201),x=(e(85862),e(80184)),l=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.N,{pt:[17,18],pb:[21,19],children:(0,x.jsx)(u.E,{children:(0,x.jsxs)(a.Ij,{children:[(0,x.jsx)(i.Z,{height:"100%",width:"100%"}),(0,x.jsx)(a.c7,{children:(0,x.jsx)(r.x,{px:[6,9],py:[20,8],children:(0,x.jsx)(h.D,{variant:"h2",children:(0,x.jsx)(i.Z,{})})})})]})})}),(0,x.jsx)(s.Z,{children:(0,x.jsx)(a.W2,{children:(0,x.jsx)(o.a,{})})}),(0,x.jsx)(c.w,{})]})}},99709:function(n,t,e){e.d(t,{w:function(){return m}});var i,r,a,o,c=e(30168),s=e(17691),d=s.ZP.section(i||(i=(0,c.Z)(["\n  max-width: 1248px;\n  margin: 0 auto;\n  padding: 0 12px 100px;\n  @media screen and (min-width: 980px) {\npadding: 0  0 128px;\n  }\n"]))),h=s.ZP.h2(r||(r=(0,c.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.16;\n  letter-spacing: -0.05em;\n  color: ",";\n  opacity: 0.2;\n  margin-bottom: 20px;\n\n  @media screen and (min-width: 980px) {\n    font-size: ",";\n    line-height: 1.2; \n     margin-bottom: 32px;\n  }\n\n"])),(function(n){return n.theme.fonts.titles}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.mobile.xl}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontSizes.desktop.xl})),u=s.ZP.ul(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: center;\n  /* margin-bottom: 16px; */\n  @media screen and (min-width: 980px) {\n    gap: 24px;\n/* \n    margin-bottom: 24px; */\n  }\n  @media screen and (min-width: 600px) {\n    justify-content: unset;\n  }\n"]))),x=s.ZP.li(o||(o=(0,c.Z)(["\n  min-width: 250px;\n\n  /* max-height: 320px; */\n  width: 100%;\n  @media screen and (min-width: 600px) {\n    width: calc(100% / 2 - 8px);\n    max-width: 400px;\n  }\n\n  @media screen and (min-width: 850px) {\n    width: calc(100% / 3 - 16px);\n  }\n"]))),l=e(56273),p=e(58290),f=(e(85862),e(80184)),m=function(n){var t=n.data,e=n.title,i=void 0===e?"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u0456 \u043d\u043e\u0432\u0438\u043d\u0438:":e;return t?(0,f.jsxs)(d,{children:[(0,f.jsx)(h,{children:i}),(0,f.jsx)(u,{children:t.map((function(n){return(0,f.jsx)(x,{children:(0,f.jsx)(l.Z,{news:n})},n.id)}))})]}):(0,f.jsxs)(d,{children:[(0,f.jsx)(h,{children:(0,f.jsx)(p.Z,{height:"100%",width:"100%"})}),(0,f.jsx)(u,{children:Array(3).fill().map((function(n,t){return(0,f.jsx)(x,{children:(0,f.jsx)(l.Z,{})},t)}))})]})}},35297:function(n,t,e){e.d(t,{Z:function(){return h}});var i,r=e(1413),a=e(30168),o=e(17691),c=e(30407),s=(0,o.ZP)("section")((0,o.iv)(i||(i=(0,a.Z)(["\n  min-height:45vh;\n    padding-bottom: 100px;\n    @media screen and (min-width: 980px) {\n      padding-bottom: 128px;\n    }\n  "]))),c.$_,c.Dh,c.bK,c.GQ,c.eC,c.Oq,c.Cg,c.FK,c.AF,c.cp),d=e(80184),h=function(n){return(0,d.jsx)(s,(0,r.Z)({},n))}},63572:function(n,t,e){e.d(t,{N:function(){return h}});var i,r=e(1413),a=e(30168),o=e(17691),c=e(30407),s=(0,o.ZP)("section")((0,o.iv)(i||(i=(0,a.Z)(["\n    padding: 40px 0 20px;\n    @media screen and (min-width: 980px) {\n      padding: 80px 0 40px;\n    }\n  "]))),c.$_,c.Dh,c.bK,c.GQ,c.eC,c.Oq,c.Cg,c.FK,c.AF,c.cp),d=e(80184),h=function(n){return(0,d.jsx)(s,(0,r.Z)({},n))}},47201:function(n,t,e){e.d(t,{E:function(){return h}});var i,r=e(1413),a=e(30168),o=e(17691),c=e(30407),s=(0,o.ZP)("div")((0,o.iv)(i||(i=(0,a.Z)(["\n    margin: 0 auto;\n    padding: 0 12px;\n    @media screen and (min-width: 980px) {\n      max-width: 1272px;\n    }\n  "]))),c.$_,c.Dh,c.bK,c.GQ,c.eC,c.Oq,c.Cg,c.FK,c.AF,c.cp),d=e(80184),h=function(n){return(0,d.jsx)(s,(0,r.Z)({},n))}},56273:function(n,t,e){e.d(t,{Z:function(){return v}});var i,r,a,o,c,s,d=e(89055),h=e(30168),u=e(17691),x=e(11087),l=(0,u.ZP)(x.OL)(i||(i=(0,h.Z)(["\n  /* text-decoration-line:none; */\n  text-decoration: none;\n  display: block;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  /* min-width: 358px; */\n  /* max-width: 400px; */\n  /* max-height: 340px; */\n  /* width: 100%; */\n  padding: 4px 4px 16px;\n  height: 100%;\n  border-radius: 4px;\n  align-items: center;\n  background: #ffffff;\n  box-shadow: 0px 4px 128px rgba(188, 196, 211, 0.5);\n  /* transition-property: text-decoration;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */\n  :hover,\n  :focus {\n    /* box-shadow: 0px 4px 128px rgb(112 123 144 / 56%); */\n    text-decoration-line: underline;\n    text-decoration-color: ",";\n  }\n  @media screen and (min-width: 980px) {\n    padding: 4px 4px 24px;\n    gap: 20px;\n  }\n"])),(function(n){return n.theme.colors.black})),p=u.ZP.div(r||(r=(0,h.Z)(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  border: 2px solid #161b1f;\n  border-radius: 1px;\n  height: 240px;\n  @media screen and (max-width: 599px) {\n    height: 156px;\n  }\n"]))),f=u.ZP.img(a||(a=(0,h.Z)(["\n  /* margin-top: 4px ; */\n  /* max-width: 100%; */\n  width: 100%;\n  height: 240px;\n  object-fit: cover;\n  object-position: center;\n\n  @media screen and (max-width: 599px) {\n    height: 156px;\n  }\n"]))),m=u.ZP.div(o||(o=(0,h.Z)(["\n  width: 100%;\n  /* height: 48px; */\n  /* margin-bottom: 16px; */\n  flex-grow: 1;\n  /* @media screen and (min-width: 980px) { */\n  /* margin-bottom: 24px; */\n  /* height: 52px; */\n\n  /* } */\n"]))),g=u.ZP.p(c||(c=(0,h.Z)(["\n  padding: 0 12px 0 12px;\n  /* margin-bottom: 16px; */\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.33;\n  letter-spacing: -0.06em;\n  color: ",";\n  @media screen and (min-width: 980px) {\n    line-height: 1.3;\n    padding: 0 20px 0 20px;\n    /* margin-bottom: 24px; */\n  }\n\n  height: 100%;\n"])),(function(n){return n.theme.fonts.actions}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.actions.buttonL}),(function(n){return n.theme.colors.black})),j=u.ZP.p(s||(s=(0,h.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  text-transform: uppercase;\n  color: ",";\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.main.tag}),(function(n){return n.theme.colors.black})),w=e(58290),b=e(80184),v=function(n){var t=n.news,e=n.home;if(!t)return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(l,{children:[(0,b.jsx)(p,{children:(0,b.jsx)(w.Z,{height:"100%",width:"100%"})}),(0,b.jsx)(m,{children:(0,b.jsx)(w.Z,{height:"26px",width:"100%"})})]})});var i=t.data,r=t.id,a=new Date(i.date),o=a.getFullYear(),c=String(a.getMonth()+1).padStart(2,"0"),s=String(a.getDate()).padStart(2,"0"),h=String(a.getHours()).padStart(2,"0"),u=String(a.getMinutes()).padStart(2,"0"),x="".concat(s,".").concat(c,".").concat(o," / ").concat(h,":").concat(u);return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(l,{to:e?"/about/news/".concat(r):"".concat(r),children:[(0,b.jsxs)(p,{children:[(0,b.jsx)(f,{src:i.image,alt:"image",loading:"lazy"}),(0,b.jsx)(d.x,{position:"absolute",top:3,left:3,p:4,bg:"white",children:(0,b.jsx)(j,{children:x})})]}),(0,b.jsx)(m,{children:(0,b.jsx)(g,{children:i.title})})]})})}},2291:function(n,t,e){e.r(t),e.d(t,{NewsDetail:function(){return y}});var i=e(73e3),r=e(85216),a=e(31625),o=e(99709),c=e(35297),s=e(63572),d=e(2578),h=e(47201),u=e(89055),x=e(61800),l=e(57689),p=e(53540),f=e(55026),m=e(74124),g=e(35267),j=e(43869),w=e(34549),b=e(8737),v=e(43698),Z=e(80184),P={replace:function(n){switch(n.name){case"h1":return(0,Z.jsx)(d.D,{variant:"h1",pb:[2,6],mb:8,borderBottom:"titles",children:(0,p.du)(n.children,P)});case"h2":return(0,Z.jsx)(d.D,{variant:"h2",pb:[2,6],mb:8,borderBottom:"titles",children:(0,p.du)(n.children,P)});case"h3":return(0,Z.jsx)(d.D,{variant:"h3",pb:[2,6],mb:8,borderBottom:"titles",children:(0,p.du)(n.children,P)});case"h4":return(0,Z.jsx)(d.D,{variant:"h4",pb:[2,6],mb:8,borderBottom:"titles",children:(0,p.du)(n.children,P)});case"h5":return(0,Z.jsx)(d.D,{variant:"h5",pb:[2,6],mb:8,borderBottom:"titles",children:(0,p.du)(n.children,P)});case"p":return(0,Z.jsx)(x.d,{children:(0,p.du)(n.children,P)});case"img":return(0,Z.jsx)(f.J,{src:n.attribs.src,alt:n.attribs.alt});case"ul":return(0,Z.jsxs)(r.aV,{children:[" ",(0,p.du)(n.children,P)]});case"li":return(0,Z.jsxs)("li",{children:[(0,Z.jsx)(x.d,{children:(0,p.du)(n.children,P)})," "]})}}},y=function(){var n=(0,l.UO)().id,t=(0,g.VY)(n),e=t.data,x=t.isLoading,p=t.isError;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(j.A,{children:(0,Z.jsx)("main",{children:(0,Z.jsxs)(w.M,{mode:"wait",children:[!!e&&(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(j.A,{children:[(0,Z.jsx)(s.N,{pt:[17,18],pb:[21,19],children:(0,Z.jsx)(h.E,{children:(0,Z.jsxs)(r.Ij,{children:[(0,Z.jsx)(r.Ei,{src:e.news.news.data.image}),(0,Z.jsx)(r.c7,{children:(0,Z.jsx)(u.x,{px:[6,9],py:[20,8],children:(0,Z.jsx)(d.D,{variant:"h2",children:e.news.news.data.title})})})]})})}),(0,Z.jsx)(c.Z,{children:(0,Z.jsxs)(r.W2,{children:[(0,Z.jsx)(u.x,{mb:[16,19],children:(0,Z.jsx)(m._,{html:e.news.news.data.content,options:P})}),(0,Z.jsx)(a.j,{})]})}),(0,Z.jsx)(o.w,{data:e.news.recommendation})]},90304983)}),x&&(0,Z.jsx)(j.A,{children:(0,Z.jsx)(b.r,{})},34345345),p&&(0,Z.jsx)(j.A,{children:(0,Z.jsx)(v.O,{})},34345345)]})})},34323343443445),(0,Z.jsx)(i.$,{})]})}},47858:function(n,t,e){e.d(t,{N:function(){return j}});var i=e(45987),r=e(1413),a=e(15671),o=e(43144),c=e(11752),s=e(61120),d=e(60136),h=e(27277),u=e(21135),x=e(52806),l=["pageParam"],p=["pageParam"],f=function(n){(0,d.Z)(e,n);var t=(0,h.Z)(e);function e(n,i){return(0,a.Z)(this,e),t.call(this,n,i)}return(0,o.Z)(e,[{key:"bindMethods",value:function(){(0,c.Z)((0,s.Z)(e.prototype),"bindMethods",this).call(this),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}},{key:"setOptions",value:function(n,t){(0,c.Z)((0,s.Z)(e.prototype),"setOptions",this).call(this,(0,r.Z)((0,r.Z)({},n),{},{behavior:(0,x.Gm)()}),t)}},{key:"getOptimisticResult",value:function(n){return n.behavior=(0,x.Gm)(),(0,c.Z)((0,s.Z)(e.prototype),"getOptimisticResult",this).call(this,n)}},{key:"fetchNextPage",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.pageParam,e=(0,i.Z)(n,l);return this.fetch((0,r.Z)((0,r.Z)({},e),{},{meta:{fetchMore:{direction:"forward",pageParam:t}}}))}},{key:"fetchPreviousPage",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.pageParam,e=(0,i.Z)(n,p);return this.fetch((0,r.Z)((0,r.Z)({},e),{},{meta:{fetchMore:{direction:"backward",pageParam:t}}}))}},{key:"createResult",value:function(n,t){var i,a,o,d,h,u,l=n.state,p=(0,c.Z)((0,s.Z)(e.prototype),"createResult",this).call(this,n,t),f=p.isFetching,m=p.isRefetching,g=f&&"forward"===(null==(i=l.fetchMeta)||null==(a=i.fetchMore)?void 0:a.direction),j=f&&"backward"===(null==(o=l.fetchMeta)||null==(d=o.fetchMore)?void 0:d.direction);return(0,r.Z)((0,r.Z)({},p),{},{fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,x.Qy)(t,null==(h=l.data)?void 0:h.pages),hasPreviousPage:(0,x.ZF)(t,null==(u=l.data)?void 0:u.pages),isFetchingNextPage:g,isFetchingPreviousPage:j,isRefetching:m&&!g&&!j})}}]),e}(u.z),m=e(73734),g=e(58560);function j(n,t,e){var i=(0,m._v)(n,t,e);return(0,g.r)(i,f)}}}]);
//# sourceMappingURL=5444.b509d433.chunk.js.map