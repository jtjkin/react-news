(this["webpackJsonpreact-news"]=this["webpackJsonpreact-news"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),r=a.n(l),s=a(1),u=(a(9),function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),u=Object(s.a)(r,2),i=u[0],o=u[1],m=Object(n.useState)([]),E=Object(s.a)(m,2),p=E[0],d=E[1];return Object(n.useEffect)((function(){fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apikey=ce033f2dc9dd40cb8dc05a8709991ce5").then((function(e){return e.json()})).then((function(e){l(null),d(e.articles),o(!0)}),(function(e){l(!0),d([]),o(!0)}))}),[]),a?c.a.createElement("p",null,a.message):i?c.a.createElement("div",null,c.a.createElement("div",{className:"flexContainer"},c.a.createElement("div",{className:"logo"},"/"),c.a.createElement("div",null,c.a.createElement("span",{className:"country"},"US"),c.a.createElement("span",{className:"field"},"Business"))),p.map((function(e){return c.a.createElement("div",{key:e.title,className:"newsContainer"},c.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:e.urlToImage,alt:e.title}),c.a.createElement("div",{className:"textBox"},c.a.createElement("h3",null,e.title),c.a.createElement("p",null),c.a.createElement("p",{className:"source"},e.source.name),c.a.createElement("p",{className:"text"},e.description))))}))):c.a.createElement("p",null,"Loading...")});var i=function(){return c.a.createElement(u,null)};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.3f3986dd.chunk.js.map