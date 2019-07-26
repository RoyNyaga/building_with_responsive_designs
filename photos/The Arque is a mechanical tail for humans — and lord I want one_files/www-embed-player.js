(function(){var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ca;
if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;da=fa.a;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ca;
function t(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.C=b.prototype}
var ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ka(a,b){if(b){for(var c=ja,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ia(c,d,{configurable:!0,writable:!0,value:f})}}
function la(){la=function(){};
ja.Symbol||(ja.Symbol=ma)}
function na(a,b){this.f=a;ia(this,"description",{configurable:!0,writable:!0,value:b})}
na.prototype.toString=function(){return this.f};
var ma=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new na("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function oa(){la();var a=ja.Symbol.iterator;a||(a=ja.Symbol.iterator=ja.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return pa(aa(this))}});
oa=function(){}}
function pa(a){oa();a={next:a};a[ja.Symbol.iterator]=function(){return this};
return a}
function ra(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
ka("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=q(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ra(k,g)){var l=new c;ia(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ra(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&ra(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&ra(k,g)&&ra(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&ra(k,g)&&ra(k[g],this.f)?delete k[g][this.f]:!1};
return b});
ka("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return pa(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.g[l];if(n&&ra(h.g,l))for(var r=0;r<n.length;r++){var v=n[r];if(k!==k&&v.key!==v.key||k===v.key)return{id:l,list:n,index:r,u:v}}return{id:l,list:n,index:-1,u:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=q(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(q([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(r){return!1}}())return a;
oa();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.u?l.u.value=k:(l.u={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.u),this.f.previous.next=l.u,this.f.previous=l.u,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.u&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.u.previous.next=h.u.next,h.u.next.previous=h.u.previous,h.u.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).u};
e.prototype.get=function(h){return(h=d(this,h).u)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function sa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
ka("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=sa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ka("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=sa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
var ta="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ra(d,e)&&(a[e]=d[e])}return a};
ka("Object.assign",function(a){return a||ta});
ka("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=ja.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.B),reject:g(this.j)}};
b.prototype.B=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.D(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.A(g):this.l(g)}};
b.prototype.A=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.G(h,g):this.l(g)};
b.prototype.j=function(g){this.w(2,g)};
b.prototype.l=function(g){this.w(1,g)};
b.prototype.w=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.h=h;this.o()};
b.prototype.o=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.D=function(g){var h=this.i();g.X(h.resolve,h.reject)};
b.prototype.G=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(v,p){return"function"==typeof v?function(C){try{l(v(C))}catch(K){n(K)}}:p}
var l,n,r=new b(function(v,p){l=v;n=p});
this.X(k(g,l),k(h,n));return r};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.X=function(g,h){function k(){switch(l.g){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=q(g),n=l.next();!n.done;n=l.next())d(n.value).X(h,k)})};
b.all=function(g){var h=q(g),k=h.next();return k.done?d([]):new b(function(l,n){function r(C){return function(K){v[C]=K;p--;0==p&&l(v)}}
var v=[],p=0;do v.push(void 0),p++,d(k.value).X(r(v.length-1),n),k=h.next();while(!k.done)})};
return b});
ka("Set",function(a){function b(c){this.f=new Map;if(c){c=q(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(q([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
oa();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ka("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==sa(this,b,"includes").indexOf(b,c||0)}});
var ua=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ba(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ka("Reflect.construct",function(){return ua});
var u=this||self;function w(a){return void 0!==a}
function x(a){return"string"==typeof a}
function y(a,b,c){a=a.split(".");c=c||u;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&w(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
var va=/^[\w+/_-]+[=]{0,2}$/,wa=null;function z(a,b){for(var c=a.split("."),d=b||u,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function xa(){}
function ya(a){a.fa=void 0;a.getInstance=function(){return a.fa?a.fa:a.fa=new a}}
function za(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Aa(a){return"array"==za(a)}
function Ba(a){var b=za(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ca(a){return"function"==za(a)}
function Da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var Ea="closure_uid_"+(1E9*Math.random()>>>0),Fa=0;function Ga(a,b,c){return a.call.apply(a.bind,arguments)}
function Ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function A(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A=Ga:A=Ha;return A.apply(null,arguments)}
function Ia(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var B=Date.now||function(){return+new Date};
function Ja(a,b){y(a,b,void 0)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;var E=window;function F(a){if(Error.captureStackTrace)Error.captureStackTrace(this,F);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
D(F,Error);F.prototype.name="CustomError";var La=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(x(a))return x(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=x(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ma=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=x(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Na=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=x(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Oa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Pa(a,b){a:{var c=a.length;for(var d=x(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:x(a)?a.charAt(c):a[c]}
function Qa(a,b){var c=La(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ra(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Sa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Ta(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ua(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Va(a,b){var c=Ba(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Wa(a){var b=Xa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ya(a){for(var b in a)return!1;return!0}
function Za(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function $a(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function ab(a){var b={},c;for(c in a)b[c]=a[c];return b}
function bb(a){var b=za(a);if("object"==b||"array"==b){if(Ca(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=bb(a[c]);return b}return a}
var cb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function db(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<cb.length;f++)c=cb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function eb(a,b){this.f=a===fb&&b||"";this.g=gb}
eb.prototype.J=!0;eb.prototype.I=function(){return this.f};
eb.prototype.toString=function(){return"Const{"+this.f+"}"};
var gb={},fb={},hb;hb=new eb(fb,"");function ib(){this.f="";this.g=jb}
ib.prototype.J=!0;ib.prototype.I=function(){return this.f.toString()};
ib.prototype.ea=!0;ib.prototype.ba=function(){return 1};
function kb(a){if(a instanceof ib&&a.constructor===ib&&a.g===jb)return a.f;za(a);return"type_error:TrustedResourceUrl"}
var jb={};function lb(a){var b=new ib;b.f=a;return b}
;var mb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function nb(a,b){if(b)a=a.replace(ob,"&amp;").replace(pb,"&lt;").replace(qb,"&gt;").replace(rb,"&quot;").replace(sb,"&#39;").replace(tb,"&#0;");else{if(!ub.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ob,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(pb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(qb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(rb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(sb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(tb,"&#0;"))}return a}
var ob=/&/g,pb=/</g,qb=/>/g,rb=/"/g,sb=/'/g,tb=/\x00/g,ub=/[\x00&<>"']/;function H(){this.f="";this.g=vb}
H.prototype.J=!0;H.prototype.I=function(){return this.f.toString()};
H.prototype.ea=!0;H.prototype.ba=function(){return 1};
function wb(a){if(a instanceof H&&a.constructor===H&&a.g===vb)return a.f;za(a);return"type_error:SafeUrl"}
var xb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function yb(a){if(a instanceof H)return a;a="object"==typeof a&&a.J?a.I():String(a);xb.test(a)||(a="about:invalid#zClosurez");return zb(a)}
var vb={};function zb(a){var b=new H;b.f=a;return b}
zb("about:blank");var Ab;a:{var Bb=u.navigator;if(Bb){var Cb=Bb.userAgent;if(Cb){Ab=Cb;break a}}Ab=""};function Db(){this.f="";this.h=Eb;this.g=null}
Db.prototype.ea=!0;Db.prototype.ba=function(){return this.g};
Db.prototype.J=!0;Db.prototype.I=function(){return this.f.toString()};
function Fb(a){if(a instanceof Db&&a.constructor===Db&&a.h===Eb)return a.f;za(a);return"type_error:SafeHtml"}
var Eb={};function Gb(a,b){var c=new Db;c.f=a;c.g=b;return c}
Gb("<!DOCTYPE html>",0);var Hb=Gb("",0);Gb("<br>",0);function Jb(a,b){var c=b instanceof H?b:yb(b);a.href=wb(c)}
function Kb(a){var b=lb(hb instanceof eb&&hb.constructor===eb&&hb.g===gb?hb.f:"type_error:Const");a.src=kb(b).toString()}
function Lb(a,b){a.src=kb(b);if(null===wa)b:{var c=u.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&va.test(c)){wa=c;break b}wa=""}c=wa;c&&a.setAttribute("nonce",c)}
;function Mb(a){return a=nb(a,void 0)}
function Nb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ob=-1!=Ab.indexOf("Trident")||-1!=Ab.indexOf("MSIE"),Pb;var Qb;if(u.document&&Ob){var Rb=u.document;Qb=Rb?Rb.documentMode:void 0}else Qb=void 0;Pb=Qb;var Sb={},Tb=null;function Ub(a){this.f=a||{cookie:""}}
m=Ub.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');w(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(B()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=mb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=w(this.get(a));this.set(a,"",0,b,c);return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=mb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Vb=new Ub("undefined"==typeof document?null:document);function Wb(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(x(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||u.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&a.constructor instanceof
Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,Xb[b]?b=Xb[b]:(b=String(b),Xb[b]||(c=/function\s+([^\(]+)/m.exec(b),Xb[b]=c?c[1]:"[Anonymous]"),b=Xb[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var Xb={};var Yb=!Ob||9<=Number(Pb);function Zb(a,b){this.x=w(a)?a:0;this.y=w(b)?b:0}
m=Zb.prototype;m.clone=function(){return new Zb(this.x,this.y)};
m.equals=function(a){return a instanceof Zb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function $b(a,b){this.width=a;this.height=b}
m=$b.prototype;m.clone=function(){return new $b(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ac(a){var b=document;return x(a)?b.getElementById(a):a}
function bc(a,b){Ua(b,function(c,d){c&&"object"==typeof c&&c.J&&(c=c.I());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:cc.hasOwnProperty(d)?a.setAttribute(cc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var cc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function dc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Yb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Mb(g.name),'"');if(g.type){f.push(' type="',Mb(g.type),'"');var h={};db(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(x(g)?f.className=g:Aa(g)?f.className=g.join(" "):bc(f,g));2<d.length&&ec(e,f,d);return f}
function ec(a,b,c){function d(g){g&&b.appendChild(x(g)?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!Ba(f)||Da(f)&&0<f.nodeType?d(f):G(fc(f)?Ra(f):f,d)}}
function fc(a){if(a&&"number"==typeof a.length){if(Da(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ca(a))return"function"==typeof a.item}return!1}
function gc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function hc(a){ic();return lb(a)}
var ic=xa;var jc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function I(a){return a?decodeURI(a):a}
function J(a,b){return b.match(jc)[a]||null}
function kc(a,b,c){if(Aa(b))for(var d=0;d<b.length;d++)kc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function lc(a){var b=[],c;for(c in a)kc(c,a[c],b);return b.join("&")}
function mc(a,b){var c=lc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var nc=/#|$/;function oc(a,b){var c=a.search(nc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function pc(a){var b=qc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function rc(){var a=[];pc(function(b){a.push(b)});
return a}
var qc={Za:"allow-forms",ab:"allow-modals",bb:"allow-orientation-lock",cb:"allow-pointer-lock",eb:"allow-popups",fb:"allow-popups-to-escape-sandbox",gb:"allow-presentation",hb:"allow-same-origin",ib:"allow-scripts",jb:"allow-top-navigation",kb:"allow-top-navigation-by-user-activation"},sc=Ta(function(){return rc()});
function uc(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};G(sc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function vc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var wc=(new Date).getTime();function xc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function yc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(r){for(var v=g,p=0;64>p;p+=4)v[p/4]=r[p]<<24|r[p+1]<<16|r[p+2]<<8|r[p+3];for(p=16;80>p;p++)r=v[p-3]^v[p-8]^v[p-14]^v[p-16],v[p]=(r<<1|r>>>31)&4294967295;r=e[0];var C=e[1],K=e[2],qa=e[3],tc=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var Ka=qa^C&(K^qa);var Ib=1518500249}else Ka=C^K^qa,Ib=1859775393;else 60>p?(Ka=C&K|qa&(C|K),Ib=2400959708):(Ka=C^K^qa,Ib=3395469782);Ka=((r<<5|r>>>27)&4294967295)+Ka+tc+Ib+v[p]&4294967295;tc=qa;qa=K;K=(C<<30|C>>>2)&4294967295;C=r;r=Ka}e[0]=e[0]+r&4294967295;e[1]=
e[1]+C&4294967295;e[2]=e[2]+K&4294967295;e[3]=e[3]+qa&4294967295;e[4]=e[4]+tc&4294967295}
function c(r,v){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var p=[],C=0,K=r.length;C<K;++C)p.push(r.charCodeAt(C));r=p}v||(v=r.length);p=0;if(0==l)for(;p+64<v;)b(r.slice(p,p+64)),p+=64,n+=64;for(;p<v;)if(f[l++]=r[p++],n++,64==l)for(l=0,b(f);p+64<v;)b(r.slice(p,p+64)),p+=64,n+=64}
function d(){var r=[],v=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=v&255,v>>>=8;b(f);for(p=v=0;5>p;p++)for(var C=24;0<=C;C-=8)r[v++]=e[p]>>C&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,ta:function(){for(var r=d(),v="",p=0;p<r.length;p++)v+="0123456789ABCDEF".charAt(Math.floor(r[p]/16))+"0123456789ABCDEF".charAt(r[p]%16);return v}}}
;function zc(a,b,c){var d=[],e=[];if(1==(Aa(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),Ac(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=Ac(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ac(a){var b=yc();b.update(a);return b.ta().toLowerCase()}
;function Bc(a){var b=xc(String(u.location.href)),c=u.__OVERRIDE_SID;null==c&&(c=(new Ub(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?u.__SAPISID:u.__APISID,null==b&&(b=(new Ub(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(u.location.href);return d&&b&&c?[c,zc(xc(d),b,a||null)].join(" "):null}return null}
;function Cc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Cc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Dc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Ec(a){u.setTimeout(function(){throw a;},0)}
var Fc;
function Gc(){var a=u.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==Ab.indexOf("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Kb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Fb(Hb));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=A(function(k){if(("*"==h||k.origin==h)&&
k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&-1==Ab.indexOf("Trident")&&-1==Ab.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(w(c.next)){c=c.next;var e=c.ia;c.ia=null;e()}};
return function(e){d.next={ia:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){u.setTimeout(e,0)}}
;function Hc(){this.g=this.f=null}
var Jc=new Cc(function(){return new Ic},function(a){a.reset()});
Hc.prototype.add=function(a,b){var c=Jc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Hc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Ic(){this.next=this.scope=this.f=null}
Ic.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Ic.prototype.reset=function(){this.next=this.scope=this.f=null};function Kc(a,b){Lc||Mc();Nc||(Lc(),Nc=!0);Oc.add(a,b)}
var Lc;function Mc(){if(u.Promise&&u.Promise.resolve){var a=u.Promise.resolve(void 0);Lc=function(){a.then(Pc)}}else Lc=function(){var b=Pc;
!Ca(u.setImmediate)||u.Window&&u.Window.prototype&&-1==Ab.indexOf("Edge")&&u.Window.prototype.setImmediate==u.setImmediate?(Fc||(Fc=Gc()),Fc(b)):u.setImmediate(b)}}
var Nc=!1,Oc=new Hc;function Pc(){for(var a;a=Oc.remove();){try{a.f.call(a.scope)}catch(b){Ec(b)}Dc(Jc,a)}Nc=!1}
;function Qc(){this.g=-1}
;function Rc(){this.g=64;this.f=[];this.l=[];this.w=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
D(Rc,Qc);Rc.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function Sc(a,b,c){c||(c=0);var d=a.w;if(x(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):(f=c^g^h,l=
3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Rc.prototype.update=function(a,b){if(null!=a){w(b)||(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)Sc(this,a,d),d+=this.g;if(x(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Sc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Sc(this,e);f=0;break}}this.h=f;this.j+=b}};
Rc.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;Sc(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function L(){this.g=this.g;this.w=this.w}
L.prototype.g=!1;L.prototype.dispose=function(){this.g||(this.g=!0,this.m())};
function Tc(a,b){a.g?w(void 0)?b.call(void 0):b():(a.w||(a.w=[]),a.w.push(w(void 0)?A(b,void 0):b))}
L.prototype.m=function(){if(this.w)for(;this.w.length;)this.w.shift()()};
function Uc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Vc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ba(d)?Vc.apply(null,d):Uc(d)}}
;function Wc(a){if(a.classList)return a.classList;a=a.className;return x(a)&&a.match(/\S+/g)||[]}
function Xc(a,b){if(a.classList)var c=a.classList.contains(b);else c=Wc(a),c=0<=La(c,b);return c}
function Yc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Xc(a,"inverted-hdpi")&&(a.className=Ma(Wc(a),function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Zc="StopIteration"in u?u.StopIteration:{message:"StopIteration",stack:""};function $c(){}
$c.prototype.next=function(){throw Zc;};
$c.prototype.H=function(){return this};
function ad(a){if(a instanceof $c)return a;if("function"==typeof a.H)return a.H(!1);if(Ba(a)){var b=0,c=new $c;c.next=function(){for(;;){if(b>=a.length)throw Zc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function bd(a,b){if(Ba(a))try{G(a,b,void 0)}catch(c){if(c!==Zc)throw c;}else{a=ad(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Zc)throw c;}}}
function cd(a){if(Ba(a))return Ra(a);a=ad(a);var b=[];bd(a,function(c){b.push(c)});
return b}
;function dd(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof dd)for(c=ed(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function ed(a){fd(a);return a.f.concat()}
m=dd.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||gd;fd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function gd(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.h={};this.i=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&fd(this),!0):!1};
function fd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
m.forEach=function(a,b){for(var c=ed(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new dd(this)};
m.H=function(a){fd(this);var b=0,c=this.i,d=this,e=new $c;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Zc;var f=d.f[b++];return a?f:d.h[f]};
return e};function hd(a){var b=[];id(new jd,a,b);return b.join("")}
function jd(){}
function id(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Aa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),id(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),kd(d,c),c.push(":"),id(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":kd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var ld={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},md=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function kd(a,b){b.push('"',a.replace(md,function(c){var d=ld[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),ld[c]=d);return d}),'"')}
;function nd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function M(a){this.f=0;this.w=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=xa)try{var b=this;a.call(void 0,function(c){od(b,2,c)},function(c){od(b,3,c)})}catch(c){od(this,3,c)}}
function pd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
pd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var qd=new Cc(function(){return new pd},function(a){a.reset()});
function rd(a,b,c){var d=qd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function sd(a){return new M(function(b,c){c(a)})}
M.prototype.then=function(a,b,c){return td(this,Ca(a)?a:null,Ca(b)?b:null,c)};
M.prototype.$goog_Thenable=!0;function ud(a,b){return td(a,null,b,void 0)}
M.prototype.cancel=function(a){0==this.f&&Kc(function(){var b=new vd(a);wd(this,b)},this)};
function wd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?wd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):xd(c),yd(c,e,3,b)))}a.h=null}else od(a,3,b)}
function zd(a,b){a.g||2!=a.f&&3!=a.f||Ad(a);a.i?a.i.next=b:a.g=b;a.i=b}
function td(a,b,c,d){var e=rd(null,null,null);e.f=new M(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);!w(k)&&h instanceof vd?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;zd(a,e);return e.f}
M.prototype.A=function(a){this.f=0;od(this,2,a)};
M.prototype.B=function(a){this.f=0;od(this,3,a)};
function od(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.A,f=a.B;if(d instanceof M){zd(d,rd(e||xa,f||null,a));var g=!0}else if(nd(d))d.then(e,f,a),g=!0;else{if(Da(d))try{var h=d.then;if(Ca(h)){Bd(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.w=c,a.f=b,a.h=null,Ad(a),3!=b||c instanceof vd||Cd(a,c))}}
function Bd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ad(a){a.l||(a.l=!0,Kc(a.o,a))}
function xd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
M.prototype.o=function(){for(var a;a=xd(this);)yd(this,a,this.f,this.w);this.l=!1};
function yd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Dd(b,c,d);else try{b.h?b.g.call(b.context):Dd(b,c,d)}catch(e){Ed.call(null,e)}Dc(qd,b)}
function Dd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Cd(a,b){a.j=!0;Kc(function(){a.j&&Ed.call(null,b)})}
var Ed=Ec;function vd(a){F.call(this,a)}
D(vd,F);vd.prototype.name="cancel";function N(a){L.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.o=!!a}
D(N,L);m=N.prototype;m.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function Fd(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=Pa(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.M(b)}}
m.M=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=xa):(c&&Qa(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
m.L=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var g=c[e];Gd(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.M(c)}}return 0!=e}return!1};
function Gd(a,b,c){Kc(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.h[a];b&&(G(b,this.M,this),delete this.h[a])}else this.f.length=0,this.h={}};
m.m=function(){N.C.m.call(this);this.clear();this.i.length=0};function Hd(a){this.f=a}
Hd.prototype.set=function(a,b){w(b)?this.f.set(a,hd(b)):this.f.remove(a)};
Hd.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Hd.prototype.remove=function(a){this.f.remove(a)};function Id(a){this.f=a}
D(Id,Hd);function Jd(a){this.data=a}
function Kd(a){return!w(a)||a instanceof Jd?a:new Jd(a)}
Id.prototype.set=function(a,b){Id.C.set.call(this,a,Kd(b))};
Id.prototype.g=function(a){a=Id.C.get.call(this,a);if(!w(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Id.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!w(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ld(a){this.f=a}
D(Ld,Id);Ld.prototype.set=function(a,b,c){if(b=Kd(b)){if(c){if(c<B()){Ld.prototype.remove.call(this,a);return}b.expiration=c}b.creation=B()}Ld.C.set.call(this,a,b)};
Ld.prototype.g=function(a){var b=Ld.C.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<B()||c&&c>B())Ld.prototype.remove.call(this,a);else return b}};function Md(){}
;function Nd(){}
D(Nd,Md);Nd.prototype.clear=function(){var a=cd(this.H(!0)),b=this;G(a,function(c){b.remove(c)})};function Od(a){this.f=a}
D(Od,Nd);m=Od.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if(!x(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.H=function(a){var b=0,c=this.f,d=new $c;d.next=function(){if(b>=c.length)throw Zc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!x(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function Pd(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
D(Pd,Od);function Qd(a,b){this.g=a;this.f=null;if(Ob&&!(9<=Number(Pb))){Rd||(Rd=new dd);this.f=Rd.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Rd.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
D(Qd,Nd);var Sd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Rd=null;function Td(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Sd[b]})}
m=Qd.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(Td(a),b);Ud(this)};
m.get=function(a){a=this.f.getAttribute(Td(a));if(!x(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(Td(a));Ud(this)};
m.H=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new $c;d.next=function(){if(b>=c.length)throw Zc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if(!x(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ud(this)};
function Ud(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Vd(a,b){this.g=a;this.f=b+"::"}
D(Vd,Nd);Vd.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Vd.prototype.get=function(a){return this.g.get(this.f+a)};
Vd.prototype.remove=function(a){this.g.remove(this.f+a)};
Vd.prototype.H=function(a){var b=this.g.H(!0),c=this,d=new $c;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function Wd(){this.g=[];this.f=-1}
Wd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Wd.prototype.get=function(a){return!!this.g[a]};
function Xd(a){-1==a.f&&(a.f=Oa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
function Yd(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Zd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};y("yt.config_",Zd,void 0);function O(a){Yd(Zd,arguments)}
function P(a,b){return a in Zd?Zd[a]:b}
function $d(a){return P(a,void 0)}
function ae(){return P("PLAYER_CONFIG",{})}
;function be(){var a=ce;z("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a,void 0)}
function de(a){y("yt.ads.biscotti.lastId_",a,void 0)}
;function ee(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Q(b)}}:a}
function Q(a,b,c,d,e){var f=z("yt.logging.errors.log");f?f(a,b,c,d,e):(f=P("ERRORS",[]),f.push([a,b,c,d,e]),O("ERRORS",f))}
function fe(a){Q(a,"WARNING",void 0,void 0,void 0)}
;function ge(a){var b=[];Ua(a,function(c,d){var e=encodeURIComponent(String(d)),f;Aa(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function he(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Aa(b[f])?Sa(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){var h=Error("Error decoding URL component");h.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?fe(h):Q(h)}}return b}
function ie(a,b){return je(a,b||{},!0)}
function je(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=he(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return mc(a,e)+d}
;function ke(a){var b=le;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(me(b),ne(b));b.ca_type="image";a&&(b.bid=a);return b}
function me(a){var b={};b.dt=wc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?E:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!E.navigator&&"unknown"!==typeof E.navigator.javaEnabled&&!!E.navigator.javaEnabled&&E.navigator.javaEnabled();E.screen&&(b.u_h=E.screen.height,b.u_w=E.screen.width,b.u_ah=E.screen.availHeight,b.u_aw=E.screen.availWidth,b.u_cd=E.screen.colorDepth);
E.navigator&&E.navigator.plugins&&(b.u_nplug=E.navigator.plugins.length);E.navigator&&E.navigator.mimeTypes&&(b.u_nmime=E.navigator.mimeTypes.length);return b}
function ne(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(r){}try{var e=b.outerWidth;var f=b.outerHeight}catch(r){}try{var g=b.innerWidth;var h=b.innerHeight}catch(r){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var n=(new $b(l.clientWidth,l.clientHeight)).round()}catch(r){n=new $b(-12245933,-12245933)}k=n;n={};l=new Wd;u.SVGElement&&
u.document.createElementNS&&l.set(0);c=uc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);u.crypto&&u.crypto.subtle&&l.set(3);u.TextDecoder&&u.TextEncoder&&l.set(4);l=Xd(l);n.bc=l;n.bih=k.height;n.biw=k.width;n.brdim=b.join();a=a.g;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!E.WebGLRenderingContext,n}
var le=new function(){var a=window.document;this.f=window;this.g=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return ge(ke(a))},void 0);B();function oe(a,b){var c=R(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function R(a){return P("EXPERIMENT_FLAGS",{})[a]}
;var pe=w(XMLHttpRequest)?function(){return new XMLHttpRequest}:w(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function qe(){if(!pe)return null;var a=pe();return"open"in a?a:null}
function re(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function S(a,b){Ca(a)&&(a=ee(a));return window.setTimeout(a,b)}
function T(a){window.clearTimeout(a)}
;var se={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},te="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
ue=!1;
function ve(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(1,a),e=I(J(3,a));d&&e?(d=c,c=a.match(jc),d=d.match(jc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?I(J(3,c))==e&&(Number(J(4,c))||null)==(Number(J(4,a))||null):!0;d=!!R("web_ajax_ignore_global_headers_if_set");for(var f in se)e=P(se[f]),!e||!c&&!we(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||we(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(R("pass_biscotti_id_in_header_ajax")||R("pass_biscotti_id_in_header_ajax_tv"))&&(c||
we(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=ge(ke(void 0)));return b}
function xe(a){var b=window.location.search,c=I(J(3,a)),d=I(J(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=he(b),f={};G(te,function(g){e[g]&&(f[g]=e[g])});
return je(a,f||{},!1)}
function we(a,b){var c=P("CORS_HEADER_WHITELIST")||{},d=I(J(3,a));return d?(c=c[d])?0<=La(c,b):!1:!0}
function ye(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=ze(a,b);var d=Ae(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&T(f);var h=g.ok,k=function(l){l=l||{};var n=b.context||u;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.ga&&b.ga.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.ka&&0<b.timeout&&(f=S(function(){e||(e=!0,T(f),b.ka.call(b.context||u))},b.timeout))}else Be(a,b)}
function Be(a,b){var c=b.format||"JSON";a=ze(a,b);var d=Ae(a,b),e=!1,f,g=Ce(a,function(h){if(!e){e=!0;f&&T(f);var k=re(h),l=null,n=400<=h.status&&500>h.status,r=500<=h.status&&600>h.status;if(k||n||r)l=De(c,h,b.ob);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};n=b.context||u;k?b.onSuccess&&b.onSuccess.call(n,h,l):b.onError&&b.onError.call(n,h,l);b.ga&&b.ga.call(n,h,l)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.N&&0<b.timeout&&(f=S(function(){e||(e=!0,g.abort(),T(f),b.N.call(b.context||u,g))},b.timeout));
return g}
function ze(a,b){b.ya&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.Ya;d&&(d[c]&&delete d[c],a=ie(a,d));return a}
function Ae(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.F,g=$d("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.qb||I(J(3,a))&&!b.withCredentials&&I(J(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.F&&b.F[g]||(f||(f={}),f[c]=d);f&&x(e)&&(e=he(e),db(e,f),e=b.la&&"JSON"==b.la?JSON.stringify(e):lc(e));f=e||f&&!Ya(f);!ue&&f&&"POST"!=b.method&&(ue=!0,Q(Error("AJAX request with postData should use POST")));
return e}
function De(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ee(b):null)d={},G(b.getElementsByTagName("*"),function(e){d[e.tagName]=Fe(e)})}c&&Ge(d);
return d}
function Ge(a){if(Da(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Gb(a[b],null);a[c]=d}else Ge(a[b])}}
function Ee(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Fe(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function He(a,b){b.method="POST";b.F||(b.F={});Be(a,b)}
function Ce(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ee(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=qe();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=xe(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ve(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Ie={},Je=0;
function Ke(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Ab,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof H||(a="object"==typeof a&&a.J?a.I():String(a),xb.test(a)||(a="about:invalid#zClosurez"),a=zb(a)),b=wb(a).toString(),"about:invalid#zClosurez"===b?a="":(b instanceof Db?a=b:(d="object"==typeof b,a=null,d&&b.ea&&(a=b.ba()),b=nb(d&&b.J?b.I():String(b)),a=Gb(b,a)),a=Fb(a).toString(),a=encodeURIComponent(String(hd(a)))),/^[\s\xa0]*$/.test(a)||(a=dc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Ce(a,b,"POST",e,d):P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ce(a,b,"GET","",d):((d=Zd.EXPERIMENT_FLAGS)&&d.web_use_beacon_api_for_ad_click_server_pings&&-1!=I(J(5,a)).indexOf("/aclk")&&"1"===oc(a,"ae")&&"1"===oc(a,"act")?Le(a)?(b&&b(),d=!0):d=!1:d=!1,d||Me(a,b)))}
function Le(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Me(a,b){var c=new Image,d=""+Je++;Ie[d]=c;c.onload=c.onerror=function(){b&&Ie[d]&&b();delete Ie[d]};
c.src=a}
;var Ne={},Oe=0;
function Pe(a,b,c,d,e,f){f=f||{};f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Oe||(R("console_log_js_exceptions")&&(e=a,c=[],c.push("Name: "+e.name),c.push("Message: "+e.message),e.hasOwnProperty("params")&&c.push("Error Params: "+JSON.stringify(e.params)),c.push("File name: "+e.fileName),c.push("Stacktrace: "+e.stack),
window.console.log(c.join("\n"),e)),e=a.stacktrace,c=a.columnNumber,a.hasOwnProperty("params")&&(d=String(JSON.stringify(a.params)),f.params=d.substr(0,500)),a=Wb(a),e=e||a.stack,d=a.lineNumber.toString(),isNaN(d)||isNaN(c)||(d=d+":"+c),window.yterr&&Ca(window.yterr)&&window.yterr(a),Ne[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={Ya:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:d,level:b,"client.name":f.name},F:{url:P("PAGE_NAME",window.location.href),
file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);e&&(b.F.stack=e);for(var g in f)b.F["client."+g]=f[g];if(g=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var h in g)b.F[h]=g[h];Be(P("ECATCHER_REPORT_HOST","")+"/error_204",b);Ne[a.message]=!0;Oe++}}
;var Qe=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",Qe,void 0);function Re(a){Yd(Qe,arguments)}
;function Se(a){a&&(a.dataset?a.dataset[Te("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Ue(a,b){return a?a.dataset?a.dataset[Te(b)]:a.getAttribute("data-"+b):null}
var Ve={};function Te(a){return Ve[a]||(Ve[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var We=z("ytPubsubPubsubInstance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.M;N.prototype.publish=N.prototype.L;N.prototype.clear=N.prototype.clear;y("ytPubsubPubsubInstance",We,void 0);var Xe=z("ytPubsubPubsubSubscribedKeys")||{};y("ytPubsubPubsubSubscribedKeys",Xe,void 0);var Ye=z("ytPubsubPubsubTopicToKeys")||{};y("ytPubsubPubsubTopicToKeys",Ye,void 0);var Ze=z("ytPubsubPubsubIsSynchronous")||{};y("ytPubsubPubsubIsSynchronous",Ze,void 0);
function $e(a,b){var c=af();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Xe[d]&&b.apply(window,e)};
try{Ze[a]?f():S(f,0)}catch(g){Q(g)}},void 0);
Xe[d]=!0;Ye[a]||(Ye[a]=[]);Ye[a].push(d);return d}return 0}
function bf(a){var b=af();b&&("number"==typeof a?a=[a]:x(a)&&(a=[parseInt(a,10)]),G(a,function(c){b.unsubscribeByKey(c);delete Xe[c]}))}
function cf(a,b){var c=af();c&&c.publish.apply(c,arguments)}
function df(a){var b=af();if(b)if(b.clear(a),a)ef(a);else for(var c in Ye)ef(c)}
function af(){return z("ytPubsubPubsubInstance")}
function ef(a){Ye[a]&&(a=Ye[a],G(a,function(b){Xe[b]&&delete Xe[b]}),a.length=0)}
;var ff=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,gf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function hf(a,b,c){c=void 0===c?null:c;if(window.spf){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ff,""),c=c.replace(gf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else jf(a,b,c)}
function jf(a,b,c){c=void 0===c?null:c;var d=kf(a),e=document.getElementById(d),f=e&&Ue(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=$e(d,b),b=""+(b[Ea]||(b[Ea]=++Fa)),lf[b]=f),g||(e=mf(a,d,function(){Ue(e,"loaded")||(Se(e),cf(d),S(Ia(df,d),0))},c)))}
function mf(a,b,c,d){d=void 0===d?null:d;var e=document.createElement("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Lb(e,hc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function nf(a){a=kf(a);var b=document.getElementById(a);b&&(df(a),b.parentNode.removeChild(b))}
function of(a,b){if(a&&b){var c=""+(b[Ea]||(b[Ea]=++Fa));(c=lf[c])&&bf(c)}}
function kf(a){var b=document.createElement("a");Jb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Nb(a)}
var lf={};function pf(){}
function qf(a,b){return rf(a,1,b)}
;function sf(){}
t(sf,pf);function rf(a,b,c){isNaN(c)&&(c=void 0);var d=z("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):S(a,c||0)}
function tf(a){if(!isNaN(a)){var b=z("yt.scheduler.instance.cancelJob");b?b(a):T(a)}}
sf.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
sf.prototype.pause=function(){var a=z("yt.scheduler.instance.pause");a&&a()};
ya(sf);sf.getInstance();var uf=[],vf=!1;function wf(){if("1"!=Va(ae(),"args","privembed")){var a=function(){vf=!0;"google_ad_status"in window?O("DCLKSTAT",1):O("DCLKSTAT",2)};
hf("//static.doubleclick.net/instream/ad_status.js",a);uf.push(qf(function(){vf||"google_ad_status"in window||(of("//static.doubleclick.net/instream/ad_status.js",a),vf=!0,O("DCLKSTAT",3))},5E3))}}
function xf(){return parseInt(P("DCLKSTAT",0),10)}
;function yf(){this.g=!1;this.f=null}
yf.prototype.initialize=function(a,b,c,d,e){var f=this;b?(this.g=!0,hf(b,function(){f.g=!1;if(window.botguard)zf(f,c,d);else{nf(b);var g=Error("Unable to load Botguard");g.params="from "+b;fe(g)}},e)):a&&(eval(a),window.botguard?zf(this,c,d):fe(Error("Unable to load Botguard from JS")))};
function zf(a,b,c){try{a.f=new window.botguard.bg(b)}catch(d){fe(d)}c&&c(b)}
yf.prototype.dispose=function(){this.f=null};var U=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Af=new yf,Bf=!1,Cf=0,Df="";function Ef(a){R("botguard_periodic_refresh")?Cf=U():R("botguard_always_refresh")&&(Df=a)}
function Ff(a){if(a){if(Af.g)return!1;if(R("botguard_periodic_refresh"))return 72E5<U()-Cf;if(R("botguard_always_refresh"))return Df!=a}else return!1;return!Bf}
function Gf(){return!!Af.f}
function Hf(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Af.f?Af.f.invoke(void 0,void 0,a):null}
;var If=0;y("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++If},void 0);var Jf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Kf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){return}for(var b in a)b in Jf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}
function Lf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
Kf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Kf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Kf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Xa=z("ytEventsEventsListeners")||{};y("ytEventsEventsListeners",Xa,void 0);var Mf=z("ytEventsEventsCounter")||{count:0};y("ytEventsEventsCounter",Mf,void 0);
function Nf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Wa(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=Da(e[4])&&Da(d)&&$a(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Of=Ta(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Nf(a,b,c,d);if(e)return e;e=++Mf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Kf(h);if(!gc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Kf(h);
h.currentTarget=a;return c.call(a,h)};
g=ee(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Of()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Xa[e]=[a,b,c,g,d];return e}
function Pf(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in Xa){var c=Xa[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Of()||"boolean"==typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Xa[b]}}))}
;function Qf(a){this.A=a;this.f=null;this.j=0;this.o=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.D=V(window,"mousemove",A(this.G,this));a=A(this.B,this);Ca(a)&&(a=ee(a));this.K=window.setInterval(a,25)}
D(Qf,L);Qf.prototype.G=function(a){w(a.f)||Lf(a);var b=a.f;w(a.g)||Lf(a);this.f=new Zb(b,a.g)};
Qf.prototype.B=function(){if(this.f){var a=U();if(0!=this.j){var b=this.o,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.A();this.l=d}this.j=a;this.o=this.f;this.i=(this.i+1)%4}};
Qf.prototype.m=function(){window.clearInterval(this.K);Pf(this.D)};var Rf={};
function Sf(a){var b=void 0===a?{}:a;a=void 0===b.za?!0:b.za;b=void 0===b.Na?!1:b.Na;if(null==z("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?B()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&Tf();V(document,"keydown",Tf);V(document,"keyup",Tf);V(document,"mousedown",Tf);V(document,"mouseup",Tf);a&&(b?V(window,"touchmove",function(){Uf("touchmove",200)},{passive:!0}):(V(window,"resize",function(){Uf("resize",200)}),V(window,"scroll",function(){Uf("scroll",200)})));
new Qf(function(){Uf("mouse",100)});
V(document,"touchstart",Tf,{passive:!0});V(document,"touchend",Tf,{passive:!0})}}
function Uf(a,b){Rf[a]||(Rf[a]=!0,qf(function(){Tf();Rf[a]=!1},b))}
function Tf(){null==z("_lact",window)&&Sf();var a=B();y("_lact",a,window);-1==z("_fact",window)&&y("_fact",a,window);(a=z("ytglobal.ytUtilActivityCallback_"))&&a()}
function Vf(){var a=z("_lact",window);return null==a?-1:Math.max(B()-a,0)}
;var Wf=Math.pow(2,16)-1,Xf=null,Yf=0,Zf={log_event:"events",log_interaction:"interactions"},$f=Object.create(null);$f.log_event="GENERIC_EVENT_LOGGING";$f.log_interaction="INTERACTION_LOGGING";var ag=new Set(["log_event"]),bg={},cg=0,dg=0,W=z("ytLoggingTransportLogPayloadsQueue_")||{};y("ytLoggingTransportLogPayloadsQueue_",W,void 0);var eg=z("ytLoggingTransportTokensToCttTargetIds_")||{};y("ytLoggingTransportTokensToCttTargetIds_",eg,void 0);var fg=z("ytLoggingTransportDispatchedStats_")||{};
y("ytLoggingTransportDispatchedStats_",fg,void 0);y("ytytLoggingTransportCapturedTime_",z("ytLoggingTransportCapturedTime_")||{},void 0);function gg(){T(cg);T(dg);dg=0;if(!Ya(W)){for(var a in W){var b=bg[a];b&&(hg(a,b),delete W[a])}Ya(W)||ig()}}
function ig(){R("web_gel_timeout_cap")&&!dg&&(dg=S(gg,6E4));T(cg);cg=S(gg,P("LOGGING_BATCH_TIMEOUT",oe("web_gel_debounce_ms",1E4)))}
function jg(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
function hg(a,b){var c=Zf[a],d=fg[a]||{};fg[a]=d;var e=Math.round(U());for(l in W[a]){var f=bb,g=b.f;g={client:{hl:g.Ga,gl:g.Fa,clientName:g.Da,clientVersion:g.Ea,configInfo:g.Ca}};var h=window.devicePixelRatio;h&&1!=h&&(g.client.screenDensityFloat=String(h));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(g.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=jg(a,l);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=eg[l])a:{var k=
l;if(g.videoId)h="VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:k,scope:h}]}delete eg[l];f.requestTimeMs=e;if(g=$d("EVENT_ID"))h=(P("BATCH_CLIENT_COUNTER",void 0)||0)+1,h>Wf&&(h=1),O("BATCH_CLIENT_COUNTER",h),g={serializedEventId:g,clientCounter:h},f.serializedClientEventId=g,Xf&&Yf&&R("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Xf,
roundtripMs:Yf}),Xf=g,Yf=0;kg(b,a,f,{retry:ag.has(a),onSuccess:A(lg,this,U())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var l=d.diffCount||0;d.averageTimeBetweenDispatchesMs=l?(d.averageTimeBetweenDispatchesMs*l+c)/(l+1):c;d.diffCount=l+1}d.previousDispatchMs=e}
function lg(a){Yf=Math.round(U()-a)}
;var mg=z("ytLoggingGelSequenceIdObj_")||{};y("ytLoggingGelSequenceIdObj_",mg,void 0);
function ng(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||U());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:Vf())};R("log_sequence_info_on_gel_web")&&d.O&&(a=e.context,b=d.O,mg[b]=b in mg?mg[b]+1:0,a.sequence={index:mg[b],groupKey:b},d.pb&&delete mg[d.O]);(d=d.aa)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),eg[d.token]=a,d=jg("log_event",d.token)):d=jg("log_event");d.push(e);c&&(bg.log_event=new c);d.length>=(oe("web_logging_max_batch")||
100)?gg():ig()}
;function og(a){this.f=a}
function pg(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,null!=a.f.veCounter&&(b.veCounter=a.f.veCounter),null!=a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=pg(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
og.prototype.toString=function(){return JSON.stringify(pg(this))};
var qg=1;function rg(a,b,c){var d=sg;b={csn:a,parentVe:pg(b),childVes:Na(c,function(f){return pg(f)})};
c=q(c);for(var e=c.next();!e.done;e=c.next())e=pg(e.value),(Ya(e)||!e.trackingParams&&!e.veType)&&Pe(Error("Child VE logged with no data"),"WARNING");c={aa:void 0,O:a};"UNDEFINED_CSN"==a?tg("visualElementAttached",b,c):ng("visualElementAttached",b,d,c)}
function tg(a,b,c){a={sb:a,payload:b,options:c};(b=P("INTERACTIONS_LOGGER_QUEUE",void 0))?b.push(a):O("INTERACTIONS_LOGGER_QUEUE",[a])}
;function ug(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.mb||P("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().lb:b=Bc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
function vg(a){a=Object.assign({},a);delete a.Authorization;var b=Bc();if(b){var c=new Rc;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ba(b);!1===c||void 0===c?c=0:!0===c&&(c=3);if(!Tb){Tb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Sb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Tb[k]&&(Tb[k]=h)}}}c=Sb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],
n=(f=e+1<b.length)?b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|n>>4;n=(n&15)<<2|k>>6;k&=63;g||(k=64,f||(n=64));d.push(c[h],c[l],c[n]||"",c[k]||"")}a.hash=d.join("")}return a}
;function wg(a,b,c,d){Vb.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function xg(){var a=new Pd;(a=a.isAvailable()?new Vd(a,"yt.innertube"):null)||(a=new Qd("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Ld(a):null;this.g=document.domain||window.location.hostname}
xg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,B()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(hd(b))}catch(f){return}else e=escape(b);wg(a,e,c,this.g)};
xg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Vb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
xg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;Vb.remove(""+a,"/",void 0===b?"youtube.com":b)};var yg=new xg;function zg(a,b,c,d){if(d)return null;d=yg.get("nextId",!0)||1;var e=yg.get("requests",!0)||{};e[d]={method:a,request:b,authState:vg(c),requestTime:Math.round(U())};yg.set("nextId",d+1,86400,!0);yg.set("requests",e,86400,!0);return d}
function Ag(a){var b=yg.get("requests",!0)||{};delete b[a];yg.set("requests",b,86400,!0)}
function Bg(a){var b=yg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=vg(ug(!1));$a(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),kg(a,d.method,e,{}));delete b[c]}}yg.set("requests",b,86400,!0)}}
;function sg(a){var b=this;this.f=a||{Aa:$d("INNERTUBE_API_KEY"),Ba:$d("INNERTUBE_API_VERSION"),Ca:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Da:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ea:$d("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ga:$d("INNERTUBE_CONTEXT_HL"),Fa:$d("INNERTUBE_CONTEXT_GL"),Ha:$d("INNERTUBE_HOST_OVERRIDE")||"",Ia:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};rf(function(){Bg(b)},0,5E3)}
function kg(a,b,c,d){!P("VISITOR_DATA")&&.01>Math.random()&&Q(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",F:c,la:"JSON",N:function(){d.N()},
ka:d.N,onSuccess:function(v,p){if(d.onSuccess)d.onSuccess(p)},
ja:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,p){if(d.onError)d.onError(p)},
rb:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Ha;g&&(f=g);g=a.f.Ia||!1;var h=ug(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=ie(""+f+("/youtubei/"+a.f.Ba+"/"+b),{alt:"json",key:a.f.Aa}),l;if(d.retry&&R("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=zg(b,c,h,g))){var n=e.onSuccess,r=e.ja;e.onSuccess=function(v,p){Ag(l);n(v,p)};
c.ja=function(v,p){Ag(l);r(v,p)}}try{R("use_fetch_for_op_xhr")?ye(k,e):He(k,e)}catch(v){if("InvalidAccessError"==v)l&&(Ag(l),l=0),Q(Error("An extension is blocking network request."),"WARNING");
else throw v;}l&&rf(function(){Bg(a)},0,5E3)}
;var Cg=B().toString();
function Dg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=B();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Cg)for(a=1,b=0;b<Cg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Cg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Eg=z("ytLoggingTimeDocumentNonce_")||Dg();y("ytLoggingTimeDocumentNonce_",Eg,void 0);function Fg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Gg(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Hg(a){return P(Gg(void 0===a?0:a),void 0)}
y("yt_logging_screen.getRootVeType",Hg,void 0);function Ig(){var a=Hg(0),b;a?b=new og({veType:a,youtubeData:void 0}):b=null;return b}
function Jg(a){a=void 0===a?0:a;var b=P(Fg(a));b||0!=a||(R("kevlar_client_side_screens")?b="UNDEFINED_CSN":b=P("EVENT_ID"));return b?b:null}
y("yt_logging_screen.getCurrentCsn",Jg,void 0);function Kg(a,b,c){c=void 0===c?0:c;if(a!==P(Fg(c))||b!==P(Gg(c)))O(Fg(c),a),O(Gg(c),b),0==c&&(b=function(){setTimeout(function(){a&&ng("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Eg,clientScreenNonce:a},sg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
y("yt_logging_screen.setCurrentScreen",Kg,void 0);function Lg(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=I(J(3,window.location.href));g&&f.push(g);g=I(J(3,d));if(0<=La(f,g)||!g&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(f=document.createElement("a"),Jb(f,d),d=f.href),d){g=d.match(jc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&(b.itct||b.ved)&&
(b.csn=b.csn||Jg()),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e="ST-"+Nb(d).toString(36),b=b?lc(b):"",wg(e,b,k||5))}else k="ST-"+Nb(d).toString(36),b=b?lc(b):"",wg(k,b,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var r=void 0===r?window:r;c=r.location;a=mc(a,l)+n;a=a instanceof H?a:yb(a);c.href=wb(a)}return!0}
;function Mg(a){a=a||{};var b={enablejsapi:1},c={};this.url=a.url||"";this.args=a.args||ab(b);this.assets=a.assets||{};this.attrs=a.attrs||ab(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Mg.prototype.clone=function(){var a=new Mg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==za(c)?a[b]=ab(c):a[b]=c}return a};function Ng(){L.call(this);this.f=[]}
t(Ng,L);Ng.prototype.m=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.nb)}L.prototype.m.call(this)};var Og=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Pg(a){a=a||"";if(window.spf){var b=a.match(Og);spf.style.load(a,b?b[1]:"",void 0)}else Qg(a)}
function Qg(a){var b=Rg(a),c=document.getElementById(b),d=c&&Ue(c,"loaded");d||c&&!d||(c=Sg(a,b,function(){Ue(c,"loaded")||(Se(c),cf(b),S(Ia(df,b),0))}))}
function Sg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=hc(a);d.rel="stylesheet";d.href=kb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Rg(a){var b=document.createElement("A");a=zb(a);Jb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Nb(b)}
;function Tg(a,b){L.call(this);this.l=this.U=a;this.D=b;this.o=!1;this.api={};this.S=this.B=null;this.G=new N;Tc(this,Ia(Uc,this.G));this.i={};this.P=this.T=this.h=this.Z=this.f=null;this.K=!1;this.j=this.A=null;this.V={};this.qa=["onReady"];this.Y=null;this.ha=NaN;this.R={};Ug(this);this.W("WATCH_LATER_VIDEO_ADDED",this.Ka.bind(this));this.W("WATCH_LATER_VIDEO_REMOVED",this.La.bind(this));this.W("onAdAnnounce",this.sa.bind(this));this.ra=new Ng(this);Tc(this,Ia(Uc,this.ra))}
t(Tg,L);m=Tg.prototype;m.getId=function(){return this.D};
m.loadNewVideoConfig=function(a){if(!this.g){a instanceof Mg||(a=new Mg(a));this.Z=a;this.f=a.clone();this.h=this.f.attrs.id||this.h;"video-player"==this.h&&(this.h=this.D,this.f.attrs.id=this.D);this.l.id==this.h&&(this.h+="-player",this.f.attrs.id=this.h);this.f.args.enablejsapi="1";this.f.args.playerapiid=this.D;this.T||(this.T=Vg(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.l.style.width=vc(Number(a)||a);if(a=this.f.attrs.height)this.l.style.height=
vc(Number(a)||a);Wg(this);this.o&&Xg(this)}};
m.va=function(){return this.Z};
function Xg(a){a.f.loaded||(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function Yg(a){var b=!0,c=Zg(a);c&&a.f&&(a=a.f,b=Ue(c,"version")==a.assets.js);return b&&!!z("yt.player.Application.create")}
function Wg(a){if(!a.g&&!a.K){var b=Yg(a);if(b&&"html5"==(Zg(a)?"html5":null))a.P="html5",a.o||$g(a);else if(ah(a),a.P="html5",b&&a.j)a.U.appendChild(a.j),$g(a);else{a.f.loaded=!0;var c=!1;a.A=function(){c=!0;var d=a.f.clone();z("yt.player.Application.create")(a.U,d);$g(a)};
a.K=!0;b?a.A():(hf(a.f.assets.js,a.A),Pg(a.f.assets.css),bh(a)&&!c&&y("yt.player.Application.create",null,void 0))}}}
function Zg(a){var b=ac(a.h);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.h));return b}
function $g(a){if(!a.g){var b=Zg(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.K=!1,b.isNotServable&&b.isNotServable(a.f.args.video_id)||ch(a)):a.ha=S(function(){$g(a)},50)}}
function ch(a){Ug(a);a.o=!0;var b=Zg(a);b.addEventListener&&(a.B=dh(a,b,"addEventListener"));b.removeEventListener&&(a.S=dh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=dh(a,b,e))}for(var f in a.i)a.B(f,a.i[f]);Xg(a);a.T&&a.T(a.api);a.G.L("onReady",a.api)}
function dh(a,b,c){var d=b[c];return function(){try{return a.Y=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Y=e,fe(e))}}}
function Ug(a){a.o=!1;if(a.S)for(var b in a.i)a.S(b,a.i[b]);for(var c in a.R)T(parseInt(c,10));a.R={};a.B=null;a.S=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.W.bind(a);a.api.removeEventListener=a.Pa.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.wa.bind(a);a.api.getPlayerType=a.xa.bind(a);a.api.getCurrentVideoConfig=a.va.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Ja.bind(a)}
m.Ja=function(){return this.o};
m.W=function(a,b){var c=this,d=Vg(this,b);if(d){if(!(0<=La(this.qa,a)||this.i[a])){var e=eh(this,a);this.B&&this.B(a,e)}this.G.subscribe(a,d);"onReady"==a&&this.o&&S(function(){d(c.api)},0)}};
m.Pa=function(a,b){if(!this.g){var c=Vg(this,b);c&&Fd(this.G,a,c)}};
function Vg(a,b){var c=b;if("string"==typeof b){if(a.V[b])return a.V[b];c=function(){var d=z(b);d&&d.apply(u,arguments)};
a.V[b]=c}return c?c:null}
function eh(a,b){var c="ytPlayer"+b+a.D;a.i[b]=c;u[c]=function(d){var e=S(function(){if(!a.g){a.G.L(b,d);var f=a.R,g=String(e);g in f&&delete f[g]}},0);
Za(a.R,String(e))};
return c}
m.sa=function(a){cf("a11y-announce",a)};
m.Ka=function(a){cf("WATCH_LATER_VIDEO_ADDED",a)};
m.La=function(a){cf("WATCH_LATER_VIDEO_REMOVED",a)};
m.xa=function(){return this.P||(Zg(this)?"html5":null)};
m.wa=function(){return this.Y};
function ah(a){a.cancel();Ug(a);a.P=null;a.f&&(a.f.loaded=!1);var b=Zg(a);b&&(Yg(a)||!bh(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.U;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.A&&of(this.f.assets.js,this.A);T(this.ha);this.K=!1};
m.m=function(){ah(this);if(this.j&&this.f&&this.j.destroy)try{this.j.destroy()}catch(b){Q(b)}this.V=null;for(var a in this.i)u[this.i[a]]=null;this.Z=this.f=this.api=null;delete this.U;delete this.l;L.prototype.m.call(this)};
function bh(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var fh={},gh="player_uid_"+(1E9*Math.random()>>>0);function hh(a){var b="player";b=x(b)?ac(b):b;var c=gh+"_"+(b[Ea]||(b[Ea]=++Fa)),d=fh[c];if(d)return d.loadNewVideoConfig(a),d.api;d=new Tg(b,c);fh[c]=d;cf("player-added",d.api);Tc(d,Ia(ih,d));S(function(){d.loadNewVideoConfig(a)},0);
return d.api}
function ih(a){delete fh[a.getId()]}
;function jh(a,b,c){c=void 0===c?{}:c;var d=sg;P("ytLoggingEventsDefaultDisabled",!1)&&sg==sg&&(d=null);ng(a,b,d,c)}
;var kh=z("ytLoggingLatencyUsageStats_")||{};y("ytLoggingLatencyUsageStats_",kh,void 0);var lh=0;function mh(a){kh[a]=kh[a]||{count:0};var b=kh[a];b.count++;b.time=U();lh||(lh=rf(nh,0,5E3));if(5<b.count){if(6==b.count&&1>1E5*Math.random()){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;Pe(c,b)}return!0}return!1}
function nh(){var a=U(),b;for(b in kh)6E4<a-kh[b].time&&delete kh[b];lh=0}
;function oh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!ph(a)||c.some(function(e){return!ph(e)}))throw Error("Only objects may be merged.");
c=q(c);for(d=c.next();!d.done;d=c.next())qh(a,d.value)}
function qh(a,b){for(var c in b)if(ph(b[c])){if(c in a&&!ph(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});qh(a[c],b[c])}else if(rh(b[c])){if(c in a&&!rh(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);sh(a[c],b[c])}else a[c]=b[c];return a}
function sh(a,b){for(var c=q(b),d=c.next();!d.done;d=c.next())d=d.value,ph(d)?a.push(qh({},d)):rh(d)?a.push(sh([],d)):a.push(d);return a}
function ph(a){return"object"===typeof a&&!Array.isArray(a)}
function rh(a){return"object"===typeof a&&Array.isArray(a)}
;function th(a,b){this.version=a;this.args=b}
;function uh(a){this.topic=a}
uh.prototype.toString=function(){return this.topic};var vh=z("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.M;N.prototype.publish=N.prototype.L;N.prototype.clear=N.prototype.clear;y("ytPubsub2Pubsub2Instance",vh,void 0);y("ytPubsub2Pubsub2SubscribedKeys",z("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);y("ytPubsub2Pubsub2TopicToKeys",z("ytPubsub2Pubsub2TopicToKeys")||{},void 0);y("ytPubsub2Pubsub2IsAsync",z("ytPubsub2Pubsub2IsAsync")||{},void 0);
y("ytPubsub2Pubsub2SkipSubKey",null,void 0);function wh(a,b){var c=z("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function xh(){var a=P("TIMING_TICK_EXPIRATION");a||(a={},O("TIMING_TICK_EXPIRATION",a));return a}
function yh(){var a=xh(),b;for(b in a)tf(a[b]);O("TIMING_TICK_EXPIRATION",{})}
;function zh(a,b){th.call(this,1,arguments)}
t(zh,th);function Ah(a,b){th.call(this,1,arguments)}
t(Ah,th);var Bh=new uh("aft-recorded"),Ch=new uh("timing-sent");var Dh={vc:!0},Y={},Eh=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.cseg="creatorInfo.creatorSegment",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="getHomeRequestId",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",
Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.prt="playbackRequiresTap",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre=
"playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Fh="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
Gh="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Hh={},Ih=(Hh.mver="MEASUREMENT_VERSION_",Hh.pis="PLAYER_INITIALIZED_STATE_",Hh.yt_pt="LATENCY_PLAYER_",Hh.pa="LATENCY_ACTION_",Hh.yt_vst="VIDEO_STREAM_TYPE_",Hh),Jh=!1;
function Kh(){Lh().info.yt_lt="hot_bg";if(Mh()){var a="hot_bg";Nh().info_yt_lt=a;if("yt_lt"in Eh){var b=Eh.yt_lt;0<=La(Gh,b)&&(a=!!a);"yt_lt"in Ih&&(a=Ih.yt_lt+a.toUpperCase());var c={};b=b.split(".");for(var d=c,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=a;Mh()&&(a=Lh(),"gelInfo"in a||(a.gelInfo={}),oh(a.gelInfo,c),a=Oh(),b=Object.keys(c).join(""),mh("info_"+b+"_"+a)||(c.clientActionNonce=a,jh("latencyActionInfo",c)))}else 0<=La(Fh,"yt_lt")||(c=Error("Unknown label logged with GEL CSI"),
c.params="yt_lt",fe(c))}}
function Ph(){var a=Qh();if(a.aft)return a.aft;for(var b=P("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
A(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||xa,X);function Oh(){var a=Lh().nonce;a||(a=Dg(),Lh().nonce=a);return a}
function Qh(){return Lh().tick}
function Nh(){var a=Lh();"gel"in a||(a.gel={});return a.gel}
function Lh(){var a;(a=z("ytcsi.data_"))||(a={tick:{},info:{}},Ja("ytcsi.data_",a));return a}
function Rh(){var a=Qh(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Lh().info.yt_pvis}
function Mh(){return!!R("csi_on_gel")||!!Lh().useGel}
function Sh(){yh();if(!Mh()){var a=Qh(),b=Lh().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&Aa(a[f])){var d=f.slice(1);if(d in Dh){var e=Na(a[f],function(l){return Math.round(l-c)});
b["all_"+d]=e.join()}delete a[f]}e=P("CSI_SERVICE_NAME","youtube");var f={v:2,s:e,action:P("TIMING_ACTION",void 0)};d=Kh.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var g=window.location.protocol+z("ytplayer.config.assets.js");(g=X.getEntriesByName?X.getEntriesByName(g)[0]:null)?b.h5jse=Math.round(b.h5jse-g.responseEnd):delete b.h5jse}a.aft=Ph();Rh()&&"youtube"==e&&(Kh(),e=a.vc,g=a.pbs,delete a.aft,b.aft=Math.round(g-e));for(var h in b)"_"!=h.charAt(0)&&(f[h]=b[h]);a.ps=U();h={};e=[];for(var k in a)"_"!=
k.charAt(0)&&(g=Math.round(a[k]-c),h[k]=g,e.push(k+"."+g));f.rt=e.join(",");(a=z("ytdebug.logTiming"))&&a(f,h);Th(f,!!b.ap);wh(Ch,new Ah(h.aft+(d||0),void 0))}}
function Th(a,b){if(R("debug_csi_data")){var c=z("yt.timing.csiData");c||(c=[],y("yt.timing.csiData",c,void 0));c.push({page:location.href,time:new Date,args:a})}c="";for(var d in a)c+="&"+d+"="+a[d];d="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var e=void 0===e?"":e;Le(d,e)||Ke(d,void 0,void 0,void 0,e)}else Ke(d);Ja("yt.timing.pingSent_",!0)}
;function Uh(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Vh(a,b,c){x(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Wh(a)}
function Wh(a,b,c){if(Da(a)){b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Xh(a,b,c,d){if(Da(a)&&!Aa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};x(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
;function Yh(a){L.call(this);this.f=a;this.f.subscribe("command",this.ma,this);this.h={};this.j=!1}
D(Yh,L);m=Yh.prototype;m.start=function(){this.j||this.g||(this.j=!0,Zh(this.f,"RECEIVING"))};
m.ma=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":x(d.event)&&(a=d.event,a in this.h||(c=A(this.Ra,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":x(d.event)&&$h(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=ai(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=bi(a,c))&&this.j&&!this.g&&Zh(this.f,a,c))}}};
m.Ra=function(a,b){this.j&&!this.g&&Zh(this.f,a,this.ca(a,b))};
m.ca=function(a,b){if(null!=b)return{value:b}};
function $h(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
m.m=function(){var a=this.f;a.g||Fd(a.f,"command",this.ma,this);this.f=null;for(var b in this.h)$h(this,b);Yh.C.m.call(this)};function ci(a,b){Yh.call(this,b);this.i=a;this.start()}
D(ci,Yh);ci.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
ci.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function ai(a,b){switch(a){case "loadVideoById":return b=Wh(b),[b];case "cueVideoById":return b=Wh(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Xh(b),[b];case "cuePlaylist":return b=Xh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function bi(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ci.prototype.ca=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ci.C.ca.call(this,a,b)};
ci.prototype.m=function(){ci.C.m.call(this);delete this.i};function di(a,b,c,d){L.call(this);this.h=b||null;this.A="*";this.i=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.o=A(this.B,this);window.addEventListener("message",this.o)}
t(di,L);di.prototype.B=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.h&&a.source!=this.h)&&x(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.i=this.A=a.origin);this.h=a.source;this.sessionId=b.id;this.f&&(this.f(),this.f=null);break;case "command":this.j&&(!this.l||0<=La(this.l,b.func))&&this.j(b.func,b.args,a.origin)}}};
di.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=hd(a);c.postMessage(d,this.A)}catch(e){Q(e,"WARNING")}}};
di.prototype.m=function(){window.removeEventListener("message",this.o);L.prototype.m.call(this)};function ei(a,b,c){di.call(this,a,b,c||P("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.l=this.f=this.j=null}
t(ei,di);function fi(){var a=this.g=new ei(!!P("WIDGET_ID_ENFORCE")),b=A(this.Oa,this);a.j=b;a.l=null;this.g.channel="widget";if(a=P("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
m=fi.prototype;m.Oa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,gi(this,a)),this.j[a]=!0)):this.oa(a,b,c)};
m.oa=function(){};
function gi(a,b){return A(function(c){this.sendMessage(b,c)},a)}
m.addEventListener=function(){};
m.ua=function(){this.l=!0;this.sendMessage("initialDelivery",this.da());this.sendMessage("onReady");G(this.i,this.na,this);this.i=[]};
m.da=function(){return null};
function hi(a,b){a.sendMessage("infoDelivery",b)}
m.na=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.na({event:a,info:void 0==b?null:b})};
m.dispose=function(){this.g=null};function ii(a){fi.call(this);this.f=a;this.h=[];this.addEventListener("onReady",A(this.Ma,this));this.addEventListener("onVideoProgress",A(this.Va,this));this.addEventListener("onVolumeChange",A(this.Wa,this));this.addEventListener("onApiChange",A(this.Qa,this));this.addEventListener("onPlaybackQualityChange",A(this.Sa,this));this.addEventListener("onPlaybackRateChange",A(this.Ta,this));this.addEventListener("onStateChange",A(this.Ua,this));this.addEventListener("onWebglSettingsChanged",A(this.Xa,
this))}
D(ii,fi);m=ii.prototype;m.oa=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Uh(a)){var d=b;if(Da(d[0])&&!Aa(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Wh.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Vh.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Xh.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);Uh(a)&&hi(this,this.da())}};
m.Ma=function(){var a=A(this.ua,this);this.g.f=a};
m.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
m.da=function(){if(!this.f)return null;var a=this.f.getApiInterface();Qa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.f[e]();b[f]=h}catch(k){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=B()/1E3;return b};
m.Ua=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:B()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());hi(this,a)};
m.Sa=function(a){hi(this,{playbackQuality:a})};
m.Ta=function(a){hi(this,{playbackRate:a})};
m.Qa=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Wa=function(){hi(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
m.Va=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:B()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());hi(this,a)};
m.Xa=function(){var a={sphericalProperties:this.f.getSphericalProperties()};hi(this,a)};
m.dispose=function(){ii.C.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function ji(a){a=void 0===a?!1:a;L.call(this);this.f=new N(a);Tc(this,Ia(Uc,this.f))}
D(ji,L);ji.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
ji.prototype.j=function(a,b){this.g||this.f.L.apply(this.f,arguments)};function ki(a,b,c){ji.call(this);this.h=a;this.i=b;this.l=c}
D(ki,ji);function Zh(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(hd(a),d.i))}}
ki.prototype.m=function(){this.i=this.h=null;ki.C.m.call(this)};function li(a,b,c){L.call(this);this.f=a;this.i=c;this.j=V(window,"message",A(this.l,this));this.h=new ki(this,a,b);Tc(this,Ia(Uc,this.h))}
D(li,L);li.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,x(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
li.prototype.m=function(){Pf(this.j);this.f=null;li.C.m.call(this)};function mi(){var a=ab(ni),b;return ud(new M(function(c,d){a.onSuccess=function(e){re(e)?c(e):d(new oi("Request failed, status="+e.status,"net.badstatus",e))};
a.onError=function(e){d(new oi("Unknown request error","net.unknown",e))};
a.N=function(e){d(new oi("Request timed out","net.timeout",e))};
b=Be("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof vd&&b.abort();
return sd(c)})}
function oi(a,b){F.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
t(oi,F);function pi(){this.g=0;this.f=null}
pi.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),nd(a)?a:qi(a)):2===this.g&&b?(a=b.call(c,this.f),nd(a)?a:ri(a)):this};
pi.prototype.getValue=function(){return this.f};
pi.prototype.$goog_Thenable=!0;function ri(a){var b=new pi;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function qi(a){var b=new pi;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function si(a){F.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ti;this.isTimeout=a instanceof oi&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof vd}
t(si,F);si.prototype.name="BiscottiError";function ti(){F.call(this,"Biscotti ID is missing from server")}
t(ti,F);ti.prototype.name="BiscottiMissingError";var ni={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},ui=null;function ce(){if("1"===Va(ae(),"args","privembed"))return sd(Error("Biscotti ID is not available in private embed mode"));ui||(ui=ud(mi().then(vi),function(a){return wi(2,a)}));
return ui}
function vi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ti;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ti;a=a.id;de(a);ui=qi(a);xi(18E5,2);return a}
function wi(a,b){var c=new si(b);de("");ui=ri(c);0<a&&xi(12E4,a-1);throw c;}
function xi(a,b){S(function(){ud(mi().then(vi,function(c){return wi(b,c)}),xa)},a)}
function yi(){try{var a=z("yt.ads.biscotti.getId_");return a?a():ce()}catch(b){return sd(b)}}
;function zi(a){if("1"!==Va(ae(),"args","privembed")){a&&be();try{yi().then(function(b){R("pass_biscotti_id_in_header_ajax_tv")||R("pass_biscotti_id_in_header_ajax")||(b=ke(b),b.bsq=Ai++,He("//www.youtube.com/ad_data_204",{ya:!1,F:b,withCredentials:!0}))},function(){}),S(zi,18E5)}catch(b){Q(b)}}}
var Ai=0;var Z=z("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Bi(){this.f=P("ALT_PREF_COOKIE_NAME","PREF");var a=Vb.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
m=Bi.prototype;m.get=function(a,b){Ci(a);Di(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
m.set=function(a,b){Ci(a);Di(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
m.remove=function(a){Ci(a);Di(a);delete Z[a]};
m.save=function(){wg(this.f,this.dump(),63072E3)};
m.clear=function(){for(var a in Z)delete Z[a]};
m.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function Di(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Ci(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ei(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ya(Bi);var Fi=null,Gi=null,Hi=null,Ii={};function Ji(a){var b=a.id;a=a.ve_type;var c=qg++;a=new og({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Ii[b]=a;b=Jg();c=Ig();b&&c&&rg(b,c,[a])}
function Ki(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Kg(b,a),a=Ig()))for(var c in Ii){var d=Ii[c];d&&rg(b,a,[d])}}
function Li(a){Ii[a.id]=new og({trackingParams:a.tracking_params})}
function Mi(a){var b=Jg(),c=Ii[a.id];if(b&&c){a=sg;c={csn:b,ve:pg(c),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"};var d={aa:void 0,O:b};"UNDEFINED_CSN"==b?tg("visualElementGestured",c,d):ng("visualElementGestured",c,a,d)}}
function Ni(a){a=a.ids;var b=Jg();if(b)for(var c=0;c<a.length;c++){var d=Ii[a[c]];if(d){var e=sg;d={csn:b,ve:pg(d),eventType:1};var f={aa:void 0,O:b};"UNDEFINED_CSN"==b?tg("visualElementShown",d,f):ng("visualElementShown",d,e,f)}}}
;y("yt.setConfig",O,void 0);y("yt.config.set",O,void 0);y("yt.setMsg",Re,void 0);y("yt.msgs.set",Re,void 0);y("yt.logging.errors.log",Pe,void 0);
y("writeEmbed",function(){var a=P("PLAYER_CONFIG",void 0);zi(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=P("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);P("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");Fi=a=hh(a);a.addEventListener("onScreenChanged",Ki);a.addEventListener("onLogClientVeCreated",Ji);a.addEventListener("onLogServerVeCreated",Li);a.addEventListener("onLogVeClicked",Mi);a.addEventListener("onLogVesShown",
Ni);b=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Hi=new ii(a):P("ENABLE_POST_API")&&x(b)&&x(c)&&(Gi=new li(window.parent,b,c),Hi=new ci(a,Gi.h));c=$d("BG_P");Ff(c)&&(P("BG_I")||P("BG_IU"))&&(Bf=!0,Af.initialize(P("BG_I",null),P("BG_IU",null),c,Ef,void 0));wf()},void 0);
y("yt.www.watch.ads.restrictioncookie.spr",function(a){Ke(a+"mac_204?action_fcts=1");return!0},void 0);
var Oi=ee(function(){var a="ol";X.mark&&(0==a.lastIndexOf("mark_",0)||(a="mark_"+a),X.mark(a));a=Qh();var b=U();a.ol&&(a._ol=a._ol||[a.ol],a._ol.push(b));a.ol=b;a=xh();if(b=a.ol)tf(b),a.ol=0;Nh().tick_ol=void 0;U();Mh()?(a=Oh(),mh("tick_ol_"+a)||jh("latencyActionTicked",{tickName:"ol",clientActionNonce:a},{timestamp:void 0}),a=!0):a=!1;if(a=!a)a=!z("yt.timing.pingSent_");if(a&&(b=P("TIMING_ACTION",void 0),a=Qh(),z("ytglobal.timingready_")&&b&&a._start&&(b=Ph()))){Jh||(wh(Bh,new zh(Math.round(b-a._start),
void 0)),Jh=!0);b=!0;var c=P("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Sh()}a=Bi.getInstance();c=!!((Ei("f"+(Math.floor(119/31)+1))||0)&67108864);b=1<window.devicePixelRatio;document.body&&Xc(document.body,"exp-invert-logo")&&(b&&!Xc(document.body,"inverted-hdpi")?(d=document.body,d.classList?d.classList.add("inverted-hdpi"):Xc(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")):!b&&Xc(document.body,"inverted-hdpi")&&
Yc());c!=b&&(c="f"+(Math.floor(119/31)+1),d=Ei(c)||0,d=b?d|67108864:d&-67108865,0==d?delete Z[c]:(b=d.toString(16),Z[c]=b.toString()),a.save())}),Pi=ee(function(){var a=Fi;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();P("PL_ATT")&&Af.dispose();a=0;for(var b=uf.length;a<b;a++)tf(uf[a]);uf.length=0;nf("//static.doubleclick.net/instream/ad_status.js");vf=!1;O("DCLKSTAT",0);Vc(Hi,Gi);if(a=Fi)a.removeEventListener("onScreenChanged",Ki),a.removeEventListener("onLogClientVeCreated",Ji),a.removeEventListener("onLogServerVeCreated",Li),a.removeEventListener("onLogVeClicked",Mi),a.removeEventListener("onLogVesShown",Ni),a.destroy();Ii={}});
window.addEventListener?(window.addEventListener("load",Oi),window.addEventListener("unload",Pi)):window.attachEvent&&(window.attachEvent("onload",Oi),window.attachEvent("onunload",Pi));Ja("yt.abuse.player.botguardInitialized",z("yt.abuse.player.botguardInitialized")||Gf);Ja("yt.abuse.player.invokeBotguard",z("yt.abuse.player.invokeBotguard")||Hf);Ja("yt.abuse.dclkstatus.checkDclkStatus",z("yt.abuse.dclkstatus.checkDclkStatus")||xf);
Ja("yt.player.exports.navigate",z("yt.player.exports.navigate")||Lg);Ja("yt.util.activity.init",z("yt.util.activity.init")||Sf);Ja("yt.util.activity.getTimeSinceActive",z("yt.util.activity.getTimeSinceActive")||Vf);Ja("yt.util.activity.setTimestamp",z("yt.util.activity.setTimestamp")||Tf);}).call(this);
