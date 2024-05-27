/*! For license information please see 30c93f3105603764463c.js.LICENSE.txt */
function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _regeneratorRuntime(){"use strict";_regeneratorRuntime=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),c=new C(n||[]);return o(a,"_invoke",{value:I(e,r,c)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var h="suspendedStart",y="suspendedYield",p="executing",v="completed",d={};function g(){}function m(){}function w(){}var b={};u(b,a,(function(){return this}));var S=Object.getPrototypeOf,L=S&&S(S(A([])));L&&L!==r&&n.call(L,a)&&(b=L);var E=w.prototype=g.prototype=Object.create(b);function O(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(o,i,a,c){var s=f(e[o],e,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==_typeof(l)&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function I(t,r,n){var o=h;return function(i,a){if(o===p)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=T(c,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var u=f(t,r,n);if("normal"===u.type){if(o=n.done?v:y,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function T(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,T(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function A(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(_typeof(t)+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=u(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,u(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},t.awrap=function(e){return{__await:e}},O(x.prototype),u(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(E),u(E,s,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=A,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}function asyncGeneratorStep(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){asyncGeneratorStep(i,n,o,a,c,"next",e)}function c(e){asyncGeneratorStep(i,n,o,a,c,"throw",e)}a(void 0)}))}}Office.onReady((function(){console.log("office loaded successfuly")})),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("ticketForm"),t=document.getElementById("serviceLevel1"),r=document.getElementById("serviceLevel2"),n=document.getElementById("issueDescription"),o=document.getElementById("submitButton"),i={},a={ServiceLevel1:[{category:"Software",subcategories:["Operating system issues (Windows, MacOS, Linux..)","Application software issues (Microsoft Office, Adobe Creative Suite..)","Email/Communication SW issues (Outlook, Teams)","Browser issues (Chrome, Firefox)","Intranet/SharePoint issues","Antivirus/Security SW issues","Data backup and recovery issues","JDOC","PITECO","DA VINCI","Other"]},{category:"Network",subcategories:["Internet connectivity issues","Network drive issues","Wi-Fi connectivity issues","VPN issues","LAN/WAN issues","Firewall/Security issues","Other"]},{category:"Hardware",subcategories:["Desktop/Laptop issues","Printer issues","Scanner issues","Peripheral devices (mouse, keyboard…)","Network equipment issues (router, switch…)","Server hardware issues","Workplace moving","Telephone & Mobile issues","Other"]},{category:"SAP",subcategories:["FI/CO","MM","SD","WM","SAP FIORI","Other"]},{category:"BI",subcategories:["Power BI","BO","Check Corporate","Other"]},{category:"CRM",subcategories:["C4C","EMARSYS"]},{category:"DM",subcategories:["Hardware","Networking","DM SQL","GEMAR"]},{category:"CRISTINA",subcategories:["IT Hardware","IT software (Office, Mail)","Networking","RESCO"]},{category:"DILETTA",subcategories:["IT Hardware","IT software (Office, Mail)","Networking","RESCO"]},{category:"SANS SOUCI",subcategories:["IT Hardware","IT software (Office, Mail)","Networking","RESCO"]},{category:"HAMBURG",subcategories:["IT Hardware","IT software (Office, Mail)","Networking","RESCO"]}]};function c(){var e=t.value&&n.value.trim();o.disabled=!e,e?(o.classList.remove("bg-gray-400","cursor-not-allowed"),o.classList.add("bg-indigo-600","hover:bg-indigo-700","focus:ring-indigo-500")):(o.classList.add("bg-gray-400","cursor-not-allowed"),o.classList.remove("bg-indigo-600","hover:bg-indigo-700","focus:ring-indigo-500"))}function s(e){return new Promise((function(t,r){Office.context.mailbox.item.subject.setAsync(e,(function(e){e.status===Office.AsyncResultStatus.Succeeded?t():r(e.error)}))}))}function u(e){return new Promise((function(t,r){Office.context.mailbox.item.to.setAsync(e,(function(e){e.status===Office.AsyncResultStatus.Succeeded?t():r(e.error)}))}))}function l(e){return new Promise((function(t,r){Office.context.mailbox.item.body.setAsync(e,{coercionType:Office.CoercionType.Html},(function(e){e.status===Office.AsyncResultStatus.Succeeded?t():r(e.error)}))}))}function f(){return f=_asyncToGenerator(_regeneratorRuntime().mark((function e(t){var r,n,o;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="\n    <p>".concat(t.IssueDescription,"</p>\n  "),n="".concat(i.ServiceLevel1," - ").concat(i.ServiceLevel2),o="mohammed.musthafa@ligabue.it",e.prev=3,e.next=6,s(n);case 6:return console.log("Subject set successfully."),e.next=9,u([o]);case 9:return console.log("Recipient set successfully."),e.next=12,l(r);case 12:console.log("Content set in the mail body successfully."),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.error("Error:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])}))),f.apply(this,arguments)}t.addEventListener("change",(function(e){var t,n=e.target.value,o=a.ServiceLevel1.find((function(e){return e.category===n}));o?(t=o.subcategories,r.innerHTML='<option value="">Select Service Level 2</option>',t.forEach((function(e){var t=document.createElement("option");t.value=e,t.innerText=e,r.appendChild(t)}))):r.innerHTML='<option value="">Select Service Level 2</option>',c()})),n.addEventListener("input",c),c(),t.innerHTML='<option value="">Select Service Level 1</option>',a.ServiceLevel1.forEach((function(e){var r=document.createElement("option");r.value=e.category,r.innerText=e.category,t.appendChild(r)})),e.addEventListener("submit",(function(e){e.preventDefault(),o.disabled||(i={ServiceLevel1:t.value,ServiceLevel2:r.value,IssueDescription:n.value.trim()},console.log(i),function(e){f.apply(this,arguments)}(i))}))}));