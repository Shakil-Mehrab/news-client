(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4,5],{259:function(t,e,r){"use strict";r.r(e);var n=r(2),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"flex items-center my-1 date"},[r("svg",{staticClass:"inline-block w-5 h-5 mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}})]),r("span",[t._v(" Tuesday, June 29, 2021 ")])])}),[],!1,null,null,null);e.default=component.exports},260:function(t,e,r){"use strict";r.r(e);var n=r(2),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"flex items-center my-1 date"},[r("svg",{staticClass:"inline-block w-5 h-5 mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}})]),t._v(" "),r("span",[t._v("8:20 AM")])])}),[],!1,null,null,null);e.default=component.exports},261:function(t,e,r){"use strict";var n=r(11),l=r(5),o=r(91),c=r(17),f=r(12),d=r(46),v=r(179),m=r(67),h=r(178),w=r(6),N=r(54),_=r(68).f,I=r(38).f,E=r(16).f,x=r(262).trim,C="Number",k=l.Number,y=k.prototype,A=d(N(y))==C,T=function(t){if(m(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,l,o,c,f,code,d=h(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=x(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+d}for(c=(o=d.slice(2)).length,f=0;f<c;f++)if((code=o.charCodeAt(f))<48||code>l)return NaN;return parseInt(o,n)}return+d};if(o(C,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var V,M=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof M&&(A?w((function(){y.valueOf.call(r)})):d(r)!=C)?v(new k(T(e)),r,M):T(e)},S=n?_(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),j=0;S.length>j;j++)f(k,V=S[j])&&!f(M,V)&&E(M,V,I(k,V));M.prototype=y,y.constructor=M,c(l,C,M)}},262:function(t,e,r){var n=r(21),l=r(9),o="["+r(263)+"]",c=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),d=function(t){return function(e){var r=l(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(f,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},263:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},280:function(t,e,r){"use strict";r.r(e);r(261);var n=r(259),l=r(260),o={props:{date:{required:!1,type:Boolean,default:!1},news:{required:!1,type:Number,default:5}},components:{Date:n.default,Time:l.default}},c=r(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full xl:mt-0"},t._l(5,(function(e){return r("div",{key:e,staticClass:"py-3 border-b-2 first:pt-0"},[r("a",{attrs:{href:""}},[r("h4",{staticClass:"title"},[t._v("নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ")]),t._v(" "),r("div",{staticClass:"flex justify-between mt-2"},[r("Date"),t._v(" "),r("Time")],1)])])})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Date:r(259).default})}}]);