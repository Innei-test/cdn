(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{CBBT:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var a=t("wx14"),i=t("Ff2n"),o=t("MX0m"),s=t.n(o),c=t("q1tI"),r=t.n(c),l=t("8tEE"),u=t("IP2g"),m=t("PL58"),d=t.n(m),p=r.a.createElement;function f(e){var n=e.actions,t=void 0===n?[]:n,o=e.informs,c=void 0===o?[]:o,m=Object(i.a)(e,["actions","informs"]);return p(r.a.Fragment,null,p(s.a,{id:"2106237933"},[".note-action.jsx-2106237933{min-height:1rem;}"]),p("div",Object(a.a)({},m,{className:"jsx-2106237933 "+(m&&null!=m.className&&m.className||"note-inform")}),c.map((function(e,n){return p("span",{key:n,className:"jsx-2106237933"},p(u.a,{icon:e.icon,className:d.a.icon}),e.name)})),p("a",{href:"https://creativecommons.org/licenses/by-nc-sa/3.0/cn/",style:{color:"currentColor"},target:"_blank",className:"jsx-2106237933"},p("span",{title:"\u7f72\u540d-\u975e\u5546\u4e1a\u6027\u4f7f\u7528-\u76f8\u540c\u65b9\u5f0f\u5171\u4eab 3.0 \u4e2d\u56fd\u5927\u9646 (CC BY-NC-SA 3.0 CN)",className:"jsx-2106237933"},p(u.a,{icon:l.a,className:d.a.icon})))),p("div",{className:"jsx-2106237933 note-action"},t.map((function(e){return p("span",{key:e.name,style:{cursor:"pointer"},onClick:e.callback,className:"jsx-2106237933"},p(u.a,{icon:e.icon,className:d.a.icon}),e.name)}))))}},IpzM:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notes/[id]",function(){return t("MjEs")}])},MjEs:function(e,n,t){"use strict";t.r(n);var a,i,o=t("o0o1"),s=t.n(o),c=t("wx14"),r=t("q1tI"),l=t.n(r),u=t("twK/"),m=t("wHSu"),d=t("IP2g"),p=t("CBBT"),f=t("ib2w"),h=t("9uS9"),b=t("AauJ"),w=t("MX0m"),x=t.n(w),g=l.a.createElement,j=function(e){var n=e.children,t=e.meta,a=e.title,i=e.tips;return g("main",{className:"jsx-2449350866 is-article is-note post-content paul-note"},g(x.a,{id:"2449350866"},[".is-note #write{font-family:'Noto Serif SC','PingFang SC','Hiragino Sans GB', 'Heiti SC','Microsoft YaHei','WenQuanYi Micro Hei';}",".is-note .note-head{width:100%;text-align:center;}",".is-note .note-head h1{font-size:32px;}",".is-note .note-meta{margin:1rem;text-align:center;line-height:16px;font-size:16px;opacity:0.8;font-family:unset;}",".is-note .note-meta>div{display:inline-block;}",".is-note .note-meta span{margin:0 6px;display:inline-block;}",".is-note #write{color:var(--shizuku-text-color);font-size:16px;line-height:1.75;word-wrap:break-word;text-align:justify;padding-top:2rem;}",".is-note #write>p:first-child::first-letter{float:left;font-size:2.4em;margin:0 0.2em 0 0;}",".is-note #write>p{clear:both;}",".is-note #write>p:not(:first-child)::first-letter{margin-left:2rem;}"]),g("div",{className:"jsx-2449350866 note-head"},g("h1",{className:"jsx-2449350866"},a),g("div",{title:i,className:"jsx-2449350866 note-meta"},t),g("article",{className:"jsx-2449350866"},n)))},y=t("TyAF");!function(e){e.happy="\u5f00\u5fc3",e.sad="\u4f24\u5fc3",e.angry="\u751f\u6c14",e.sorrow="\u60b2\u54c0",e.pain="\u75db\u82e6",e.terrible="\u53ef\u6015",e.unhappy="\u4e0d\u5feb",e.detestable="\u53ef\u6076",e.worry="\u62c5\u5fc3",e.despair="\u7edd\u671b",e.anxiety="\u7126\u8651",e.excite="\u6fc0\u52a8"}(a||(a={})),function(e){e.sunshine="\u6674",e.cloudy="\u591a\u4e91",e.rainy="\u96e8",e.overcast="\u9634",e.snow="\u96ea"}(i||(i={}));var v=Object.freeze(Object.fromEntries(Object.entries(a))),N=Object.freeze(Object.fromEntries(Object.entries(i))),O=t("ffb8"),k=t("nOHt"),C=t("tcEi"),E=t.n(C),M=t("WYo3"),S=t("AoAR"),Y=t("eSIs"),_=function(e){return{sunshine:m.v,cloudy:m.i,overcast:m.g,snow:m.s,rainy:m.h}[e]},z=function(e){return{happy:u.i,sad:u.h,angry:u.a,pain:u.j,sorrow:u.g,unhappy:u.g,excite:u.f,worry:u.d,terrible:u.e,detestable:u.a,despair:u.d,anxiety:u.c}[e]},P=l.a.createElement,B=function(e){var n=e.data,t=e.prev,o=e.next,s=n.title,w=n._id,x=n.text,g=n.mood,y=n.weather,C=Object(M.c)().userStore,S=P(l.a.Fragment,null,P(d.a,{icon:m.x}),P("span",null,C.name),P(d.a,{icon:m.f}),P("span",null,Object(Y.b)(n.created)),P(d.a,{icon:m.d}),P("span",null,n.count.read),P("svg",{"aria-hidden":"true",role:"img",xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},P("path",{fill:"currentColor",d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"})),P("span",null,n.count.like)),B=Object(k.useRouter)(),I=Object(r.useState)(""),H=I[0],A=I[1];Object(r.useEffect)((function(){var e=E()(x).length;A("\u521b\u5efa\u4e8e ".concat(Object(Y.a)(n.created,"YYYY-MM-DD dddd"),", \u4fee\u6539\u4e8e ").concat(Object(Y.a)(n.modified,"YYYY-MM-DD dddd"),", \u5168\u6587\u5b57\u6570: ").concat(e,", \u9605\u8bfb\u6b21\u6570: ").concat(n.count.read,", \u559c\u6b22\u6b21\u6570: ").concat(n.count.like))}),[x,n.created,n.modified,n.count.read,n.count.like]),Object(r.useEffect)((function(){window.scroll({top:0,left:0,behavior:"smooth"})}));var F={informs:[],actions:[{name:"\u559c\u6b22",icon:m.m,callback:function(){}}]};y&&Object.keys(i).includes(y)?F.informs.push({name:N[y],icon:_(y)}):y&&F.informs.push({name:y,icon:m.g}),g&&Object.keys(a).includes(g)?F.informs.push({name:v[g],icon:z(g)}):g&&F.informs.push({name:g,icon:u.i});var T=E()(x).slice(0,100);return P(l.a.Fragment,null,P(O.NextSeo,{title:s,description:T,openGraph:{title:s,description:T,profile:{username:C.name}}}),P(j,{title:s,meta:S,tips:H},P(h.a,{value:x,escapeHtml:!1}),P(p.a,Object(c.a)({},F,{style:{marginTop:"24px"}})),(!!o||!!t)&&P("section",{className:"paul-more"},!!o&&P("button",{className:"btn green",onClick:function(){B.push("/notes/[id]","/notes/".concat(o.nid),{})}},"\u524d\u4e00\u7bc7")," ",!!t&&P("button",{className:"btn green",onClick:function(){B.push("/notes/[id]","/notes/".concat(t.nid),{})}},"\u540e\u4e00\u7bc7"))),P(b.a,null,P(f.c,{type:"Note",id:w})))};B.getInitialProps=function(e){var n,t,a,i,o,c;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.query,t=n.id,r.next=4,s.a.awrap(Object(S.a)("Note","nid").get(t));case 4:return a=r.sent,i=a.data,o=a.prev,c=a.next,r.abrupt("return",{data:i,prev:o,next:c});case 9:case"end":return r.stop()}}),null,null,null,Promise)};n.default=Object(y.c)(B)},PL58:function(e,n,t){e.exports={icon:"Action_icon__3BtwG"}}},[["IpzM",0,2,6,5,10,1,3,7,4,8,11,9,12,13,15,16,14,19,17,18,20]]]);