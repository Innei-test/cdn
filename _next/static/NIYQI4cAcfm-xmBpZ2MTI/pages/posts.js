(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"53lW":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n("XCPh")}])},Gbxs:function(t,e,n){t.exports={head:"PostBlock_head__38-FT",title:"PostBlock_title__18Obo",text:"PostBlock_text__Gsfei",btn:"PostBlock_btn__2551h","gradual-change":"PostBlock_gradual-change__20O60",navigator:"PostBlock_navigator__25BE6"}},JX7q:function(t,e,n){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return o}))},Ji7U:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},ODXe:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("BsWD");function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,a=void 0;try{for(var c,u=t[Symbol.iterator]();!(o=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);o=!0);}catch(i){r=!0,a=i}finally{try{o||null==u.return||u.return()}finally{if(r)throw a}}return n}}(t,e)||Object(o.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},U8pU:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}))},XCPh:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return R}));var o,r=n("o0o1"),a=n.n(r),c=n("q1tI"),u=n.n(c),i=n("wHSu"),s=n("IP2g"),l=n("ODXe"),f=n("1OyB"),p=n("vuIU"),b=n("Ji7U"),d=n("md7G"),y=n("foSv"),v=n("TSYQ"),m=n.n(v),h=n("TyAF"),O=n("nOHt"),g=n.n(O),_=n("tcEi"),w=n.n(_),j=n("eSIs"),S=n("Gbxs"),P=n.n(S),x=u.a.createElement;function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var N=Object(h.b)((function(t){return{viewport:t.appStore.viewport,map:t.categoryStore.CategoryMap}}))(o=Object(h.c)(o=function(t){Object(b.a)(o,t);var e,n=(e=o,function(){var t,n=Object(y.a)(e);if(k()){var o=Object(y.a)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return Object(d.a)(this,t)});function o(){return Object(f.a)(this,o),n.apply(this,arguments)}return Object(p.a)(o,[{key:"render",value:function(){var t=this,e=this.props,n=e.date,o=e.title,r=e.text,a=e.slug,c=e.viewport,i=e.raw,s=((null===c||void 0===c?void 0:c.mobile)?Object(j.a)(n,"MM-DD ddd"):Object(j.a)(n,"YYYY-MM-DD ddd")).split(" "),f=Object(l.a)(s,2),p=f[0],b=f[1],d=function(){var e,n=null===(e=t.props.map)||void 0===e?void 0:e.get(i.categoryId);g.a.push("/posts/[category]/[slug]","/posts/".concat(n,"/").concat(a)),window.scrollTo({left:0,top:0,behavior:"smooth"})};return x(u.a.Fragment,null,x("h1",{className:P.a.head},p,x("small",null,"\uff08",b,"\uff09"),!(null===c||void 0===c?void 0:c.mobile)&&x("div",{className:P.a.title,onClick:d},o)),x("div",{className:m()("note-item",P.a.text)},(null===c||void 0===c?void 0:c.mobile)&&x("h2",{className:P.a.title,onClick:d},o),x("article",{className:"note-content"},w()(r).slice(0,250)+".."),x("section",{className:P.a.navigator},x("button",{className:P.a.btn,onClick:d},"\u67e5\u770b\u539f\u6587"))))}}]),o}(u.a.Component))||o)||o,E=n("AauJ"),B=n("ffb8"),C=n("WYo3"),D=n("AoAR"),I=u.a.createElement;function R(t){var e=t.posts,n=t.page,o=Object(C.c)();Object(c.useEffect)((function(){o.categoryStore.fetchCategory()}));var r=Object(O.useRouter)(),u=Object(c.useState)(e),l=u[0],f=u[1],p=Object(c.useState)(!1),b=p[0],d=p[1],y=Object(c.useState)(n),v=y[0],m=y[1],h=Object(C.c)().appStore;return I(E.a,null,I(B.NextSeo,{title:"\u535a\u6587 - "+h.title}),I("article",{className:"paul-note"},l.map((function(t){var e=t.slug,n=t.text,o=t.created,r=t.title,a=t._id;return I(N,{title:r,date:o,key:a,text:n,slug:e,raw:t})}))),v.hasNextPage&&I("section",{className:"paul-more"},I("button",{className:"btn brown",onClick:function(){return function(){var t,e,n,o;return a.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return d(!0),t=v.currentPage,c.next=4,a.a.awrap(Object(D.a)("Post").gets({page:t+1}));case 4:e=c.sent,n=e.data,o=e.page,f(l.concat(n)),m(o),r.push("/posts/index",{pathname:"posts",query:{page:t+1}},{shallow:!0}),d(!1);case 11:case"end":return c.stop()}}),null,null,null,Promise)}()}},b?I(s.a,{icon:i.t}):"\u4e0b\u4e00\u9875")))}R.getInitialProps=function(t){var e,n,o,r;return a.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=t.query,n=e.page,o=e.year,c.next=3,a.a.awrap(Object(D.a)("Post","").gets({page:n||1,year:parseInt(o)||void 0}));case 3:return r=c.sent,c.abrupt("return",{page:r.page,posts:r.data});case 5:case"end":return c.stop()}}),null,null,null,Promise)}},foSv:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},md7G:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("U8pU"),r=n("JX7q");function a(t,e){return!e||"object"!==Object(o.a)(e)&&"function"!==typeof e?Object(r.a)(t):e}}},[["53lW",0,2,6,5,10,1,3,7,4,8,11,9,12,15,14,18]]]);