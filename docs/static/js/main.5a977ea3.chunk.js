(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),i=n(4),l=n.n(i),a=(n(9),n(2)),r=(n(10),n(0));var o=function(){var t=s.a.useState(0),e=Object(a.a)(t,2),n=e[0],c=e[1],i=s.a.useState(!1),l=Object(a.a)(i,2),o=l[0],u=l[1],j=s.a.useState(null),b=Object(a.a)(j,2),d=b[0],h=b[1];return s.a.useEffect((function(){var t=null;return o?t=setInterval((function(){c((function(t){return t+10}))}),10):clearInterval(t),function(){return clearInterval(t)}}),[o]),Object(r.jsxs)("div",{className:"Timers",children:[Object(r.jsx)("h2",{children:"Stopwatch"}),Object(r.jsxs)("div",{id:"display",children:[Object(r.jsxs)("span",{children:[("0"+Math.floor(n/6e4%60)).slice(-2),":"]}),Object(r.jsxs)("span",{children:[("0"+Math.floor(n/1e3%60)).slice(-2),":"]}),Object(r.jsx)("span",{children:("0"+n/10%100).slice(-2)})]}),Object(r.jsxs)("div",{id:"buttons",children:[!o&&Object(r.jsx)("button",{onClick:function(){u(!0),h(null)},children:0===n?"Start":"Resume"}),o&&Object(r.jsx)("button",{onClick:function(){u(!1),c(0),h(null)},children:"Stop"}),(o||n>0)&&Object(r.jsx)("button",{onClick:function(){c(0),u(!0),h(null)},children:"Reset"}),o&&Object(r.jsx)("button",{onClick:function(){d&&Math.abs(d-new Date)<300?(u(!1),h(null)):h(new Date)},children:"Wait"})]})]})};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(o,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.5a977ea3.chunk.js.map