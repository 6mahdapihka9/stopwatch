(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),s=n(4),i=n.n(s),o=(n(9),n(3)),u=(n(10),n(0));var a=function(){var t=r.a.useState(0),e=Object(o.a)(t,2),n=e[0],c=e[1],s=r.a.useState(!1),i=Object(o.a)(s,2),a=i[0],l=i[1];return r.a.useEffect((function(){var t=null;return a?t=setInterval((function(){c((function(t){return t+10}))}),10):a||clearInterval(t),function(){return clearInterval(t)}}),[a]),Object(u.jsxs)("div",{className:"Timers",children:[Object(u.jsx)("h2",{children:"Stopwatch"}),Object(u.jsxs)("div",{id:"display",children:[Object(u.jsxs)("span",{children:[("0"+Math.floor(n/6e4%60)).slice(-2),":"]}),Object(u.jsxs)("span",{children:[("0"+Math.floor(n/1e3%60)).slice(-2),":"]}),Object(u.jsx)("span",{children:("0"+n/10%100).slice(-2)})]}),Object(u.jsxs)("div",{id:"buttons",children:[!a&&0===n&&Object(u.jsx)("button",{onClick:function(){return l(!0)},children:"Start"}),a&&Object(u.jsx)("button",{onClick:function(){return l(!1)},children:"Stop"}),!a&&n>0&&Object(u.jsx)("button",{onClick:function(){return c(0)},children:"Reset"}),!a&&n>0&&Object(u.jsx)("button",{onClick:function(){return l(!0)},children:"Resume"})]})]})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(a,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.948df37f.chunk.js.map