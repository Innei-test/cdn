(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"2x5v":function(t,e,a){"use strict";var r=a("QbLZ"),n=a.n(r),o=a("iCc5"),i=a.n(o),c=a("FYw3"),u=a.n(c),l=a("mRg0"),p=a.n(l),y=a("q1tI"),s=a("6y1p"),d=a("TSYQ"),f=a.n(d),m={left:{x:30,opacity:0},right:{x:-30,opacity:0},top:{y:-30,opacity:0},bottom:{y:30,opacity:0},alpha:{opacity:0},scale:{scale:0,opacity:0},scaleBig:{scale:2,opacity:0},scaleX:{opacity:0,scaleX:0},scaleY:{opacity:0,scaleY:0},"mask-bottom":{opacity:0,scale:.8,y:"100%"},"mask-top":{opacity:0,scale:.8,y:"-100%"},flash:{enter:[{opacity:0,type:"from",duration:150},{opacity:0,duration:150},{opacity:1,duration:150}],leave:[{opacity:0,duration:150},{opacity:1,duration:150},{opacity:0,duration:150}]},bounce:{enter:[{opacity:0,type:"set"},{y:-30,opacity:1,duration:300},{y:15,duration:200},{y:-10,duration:200},{y:5,duration:200},{y:0,duration:200}],leave:[{y:5,duration:200},{y:-10,duration:200},{y:15,duration:200},{y:-30,opacity:0,duration:300}]},swing:{enter:[{opacity:0,type:"set"},{x:10,opacity:1,duration:150},{x:-10,duration:150},{x:8,duration:100},{x:-8,duration:100},{x:5,duration:100},{x:-5,duration:100},{x:0,duration:100}],leave:[{x:-5,duration:100},{x:5,duration:100},{x:-8,duration:100},{x:8,duration:100},{x:-10,duration:150},{x:10,opacity:0,duration:150}]},"swing-rotate":{enter:[{opacity:0,transformOrigin:"50% 0",type:"set"},{rotate:30,opacity:1,duration:300},{rotate:-30,duration:300},{rotate:15,duration:200},{rotate:-15,duration:200},{rotate:5,duration:100},{rotate:-5,duration:100},{rotate:0,duration:50}],leave:[{rotate:-5,duration:100},{rotate:5,duration:100},{rotate:-15,duration:200},{rotate:15,duration:200},{rotate:-30,duration:300},{rotate:30,opacity:0,duration:300}]},"swing-y":{enter:[{opacity:0,type:"set"},{y:10,opacity:1,duration:150},{y:-10,duration:150},{y:8,duration:100},{y:-8,duration:100},{y:5,duration:100},{y:-5,duration:100},{y:0,duration:100}],leave:[{y:-5,duration:100},{y:5,duration:100},{y:-8,duration:100},{y:8,duration:100},{y:-10,duration:150},{y:10,opacity:0,duration:150}]}},v=function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&(a[r[n]]=t[r[n]])}return a};function h(t,e){return"function"===typeof t?t(e):t}var b=function(t){function e(){i()(this,e);var a=u()(this,t.apply(this,arguments));return a.getChildrenToRender=function(t){if(!t)return[];var e=a.props.split;return(e?e(t):t.split("")).map((function(t,e){return y.createElement("span",{key:t+"-"+e.toString()},t)}))},a.getEnterOrLeave=function(t,e,r){var o=a.props,i=o.mode,c=o.type,u=o.enter,l=o.appear,p=o.interval,y=o.duration;if(!l&&"enter"===e||r<0)return null;var s=n()({},t,{type:e}),d=h(y,s),f=h(p,s),v=void 0;if("function"===typeof p)v=f;else switch(i){case"reverse":v=(r-t.index)*f;break;case"sync":v=0;break;case"random":v=r*f*Math.random();break;default:v=t.index*f}v+=h(a.props.delay,s);var b="enter"===e?"from":"to",g=a.props[e]||u;return g&&"function"===typeof g?g=g(n()({},t,{delay:v})):g||(g=m[c]),g.enter&&(g=g[e]||g.etner),Array.isArray(g)?g.map((function(t,e){return e||t.duration&&"set"!==t.type?1!==e||g[0].duration&&"set"!==t.type?n()({delay:e?0:v},t):n()({delay:v},t):t})):n()({delay:v,duration:d,type:b},g)},a}return p()(e,t),e.prototype.render=function(){var t,e=this,a=this.props,r=a.prefixCls,o=a.type,i=a.className,c=a.enter,u=(a.mode,a.duration,a.delay,a.interval,a.children),l=(a.split,v(a,["prefixCls","type","className","enter","mode","duration","delay","interval","children","split"])),p=this.getChildrenToRender(u),d=f()(r,((t={})[o]=o&&!c,t[i]=!!i,t));return y.createElement(s.a,n()({},l,{className:d,enter:function(t){return e.getEnterOrLeave(t,"enter",p.length-1)},leave:function(t){return e.getEnterOrLeave(t,"leave",e.tweenGrooup.keysToLeave.length-1)},ref:function(t){e.tweenGrooup=t}}),p)},e}(y.Component),g=b;b.defaultProps={type:"top",mode:"smooth",prefixCls:"texty",component:"div",delay:0,interval:50,appear:!0};e.a=g},AauJ:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var r=a("q1tI"),n=a.n(r),o=a("2x5v"),i=a("0Xwh"),c=n.a.createElement,u=Object(r.forwardRef)((t,e)=>{var{children:a,title:r,subtitle:n}=t;return c("main",{className:"is-article"},r&&c("section",{className:"post-title"},c("h1",null,c(o.a,{type:"bottom",mode:"smooth"},r)),n&&c("h2",null,c(o.a,{type:"bottom",mode:"smooth",delay:500},n))),c(i.a,{delay:500,duration:500,animConfig:{opacity:[1,0],translateY:[0,50]}},c("article",{className:"post-content paul-note",key:"a"},a)))})},"F+gt":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/friends",function(){return a("LjU7")}])},LjU7:function(t,e,a){"use strict";a.r(e);var r,n=a("q1tI"),o=a.n(n),i=a("AoAR");!function(t){t[t.Friend=0]="Friend",t[t.Collection=1]="Collection"}(r||(r={}));var c=a("AauJ"),u=a("PJ1c"),l=a("MaJT"),p=o.a.createElement,y=t=>{var e=[],a=[];for(var n of t.data)switch(n.type){case r.Friend:e.push(n);break;case r.Collection:a.push(n)}var i=t=>p("div",{className:"note-item"},p("ul",null,p(u.a,{delay:700},t.map(t=>p("li",{key:t._id},p("a",{href:t.url,target:"_blank"},t.name),p("span",{className:"meta"},t.description||"")))))),y=(t,e)=>p(u.a,{delay:e,type:"right"},p("h1",{key:e},t));return p(c.a,{title:"\u670b\u53cb\u4eec",subtitle:"\u6d77\u5185\u5b58\u77e5\u5df1, \u5929\u6daf\u82e5\u6bd4\u90bb"},p(l.a,{title:"\u670b\u53cb\u4eec"}),p("article",{className:"post-content paul-note article-list"},e.length>0&&p(o.a.Fragment,null,0!==a.length&&y("\u4e92\u76f8\u5173\u6ce8",650),i(e)),a.length>0&&p(o.a.Fragment,null,0!==e.length&&y("\u4e2a\u4eba\u6536\u85cf",650),i(a))))};y.getInitialProps=async()=>{var{data:t}=await Object(i.a)("Link").get("all");return{data:t}};e.default=y},MaJT:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var r=a("rePB"),n=a("Ff2n"),o=a("q1tI"),i=a.n(o),c=a("ffb8"),u=a("F/y2"),l=a("WYo3"),p=a("TyAF"),y=i.a.createElement;function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}var d=Object(p.c)(t=>{var{title:e}=t,a=Object(n.a)(t,["title"]),{appStore:o}=Object(l.c)();return y(c.NextSeo,function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){Object(r.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({title:e+" - "+(u.a.title||o.title)},a))})},PJ1c:function(t,e,a){"use strict";var r=a("0Xwh");a.d(e,"a",(function(){return r.a}));a("2x5v")}},[["F+gt",0,1,5,3,8,2,4,6,7,10,11]]]);