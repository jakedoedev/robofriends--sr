(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{108:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest;for(var s in o.open(t.method||"get",e,!0),t.headers)o.setRequestHeader(s,t.headers[s]);function u(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(o,s,u){t.push(s=s.toLowerCase()),n.push([s,u]),r[s]=(e=r[s])?e+","+u:u}),{ok:2==(o.status/100|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:u,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==t.credentials,o.onload=function(){n(u())},o.onerror=r,o.send(t.body||null)})}},109:function(e,t,n){e.exports=window.fetch||(window.fetch=n(108).default||n(108))},212:function(e,t,n){__NEXT_REGISTER_PAGE("/robots",function(){return e.exports=n(213),{page:e.exports.default}})},213:function(e,t,n){"use strict";n.r(t);var r=n(76),o=n.n(r),s=n(0),u=n.n(s),a=n(19),c=n.n(a),i=n(109),l=n.n(i);function f(e,t,n,r,o,s,u){try{var a=e[s](u),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}function p(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var s=e.apply(t,n);function u(e){f(s,r,o,u,a,"next",e)}function a(e){f(s,r,o,u,a,"throw",e)}u(void 0)})}}var d=function(e){return u.a.createElement("div",null,u.a.createElement("h1",null,"Robots"),u.a.createElement("div",null,u.a.createElement("h4",null," Robots Data "),e.robots.map(function(e){return u.a.createElement("li",{key:e.id},u.a.createElement(c.a,{href:"robots/".concat(e.id)},u.a.createElement("a",null,e.name)))})),u.a.createElement("br",null),u.a.createElement(c.a,{href:"/"},u.a.createElement("button",null,"Home")))};d.getInitialProps=p(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",{robots:n});case 7:case"end":return e.stop()}},e,this)})),t.default=d},76:function(e,t,n){e.exports=n(85)}},[[212,1,0]]]);