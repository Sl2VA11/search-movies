"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[680],{4126:function(t,n,r){r.d(n,{Z:function(){return c}});var e=r(6871),u=r(501),a=r(184);function c(t){var n=t.movies,r=(0,e.TH)(),c=n.map((function(t){var n=t.id,e=t.title;return(0,a.jsx)("li",{className:"popular-movie",children:(0,a.jsx)(u.rU,{state:{from:r},to:"/movies/"+n,className:"popular-link",children:(0,a.jsx)("p",{children:e})})},n)}));return(0,a.jsx)("ul",{children:c})}},680:function(t,n,r){r.r(n),r.d(n,{default:function(){return s}});var e=r(885),u=r(2791),a=r(7335),c=r(4126),o=r(184);function s(){var t=(0,u.useState)(null),n=(0,e.Z)(t,2),r=n[0],s=n[1];return(0,u.useEffect)((function(){(0,a.JN)().then((function(t){return s(t),t}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"movie-title",children:"Movies"}),null!==r&&(0,o.jsx)(c.Z,{movies:r})]})}},7335:function(t,n,r){r.d(n,{JN:function(){return p},TP:function(){return f},gH:function(){return x},tx:function(){return d},zv:function(){return v}});var e=r(5861),u=r(7757),a=r.n(u),c=r(4569),o=r.n(c),s="1b50ba0e0b99203af5e26bdcee6d2298",i="https://api.themoviedb.org/3/";function p(){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get(i+"movie/popular",{params:{api_key:s}}).catch((function(t){return console.log(t),"No results"}));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,o().get(i+"/movie/".concat(n),{params:{api_key:s}}).catch((function(t){return console.log(t),"No results"}));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,o().get(i+"/movie/".concat(n,"/credits"),{params:{api_key:s}}).catch((function(){return function(t){return console.log(t),"No results"}}));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,o().get(i+"/movie/".concat(n,"/reviews"),{params:{api_key:s}}).catch((function(){return function(t){return console.log(t),"No results"}}));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return y.apply(this,arguments)}function y(){return(y=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,o().get(i+"search/movie",{params:{api_key:s,query:n}}).catch((function(){return function(t){return console.log(t),"No results"}}));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=680.b0e2b58f.chunk.js.map