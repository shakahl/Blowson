import e from"lodash";import t from"chance";import n from"slugify";import i from"md5";import{format as r}from"date-fns";import a from"numeral";import s from"marked";import l from"prob.js";import o from"pluralize";import u from"voca";import f from"faker";import d from"json-stringify-pretty-compact";var p=function(e,t){var n=e,i=t-e+1;return Math.floor(Math.random()*i)+n},h=function(e){for(var t;!t;)t=e[p(0,e.length-1)];return t},c=function(e){var t="a";return e.match(/^(a|e|i|o)/)&&(t="an"),t+" "+e},g=["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee","cow","crocodile","deer","dog","dolphin","duck","eagle","elephant","fish","fly","fox","frog","giraffe","goat","goldfish","hamster","hippopotamus","horse","kangaroo","kitten","lion","lobster","monkey","octopus","owl","panda","pig","puppy","rabbit","rat","scorpion","seal","shark","sheep","snail","snake","spider","squirrel","tiger","turtle","wolf","zebra","apple","apricot","banana","blackberry","blueberry","cherry","cranberry","currant","fig","grape","grapefruit","grapes","kiwi","kumquat","lemon","lime","melon","nectarine","orange","peach","pear","persimmon","pineapple","plum","pomegranate","prune","raspberry","strawberry","tangerine","watermelon"],m=["adaptable","adventurous","affable","affectionate","agreeable","alert","alluring","ambitious","ambitious","amiable","amicable","amused","amusing","boundless","brave","brave","bright","bright","broad-minded","calm","calm","capable","careful","charming","charming","cheerful","coherent","comfortable","communicative","compassionate","confident","conscientious","considerate","convivial","cooperative","courageous","courageous","courteous","creative","credible","cultured","dashing","dazzling","debonair","decisive","decisive","decorous","delightful","detailed","determined","determined","diligent","diligent","diplomatic","discreet","discreet","dynamic","dynamic","eager","easygoing","efficient","elated","eminent","emotional","enchanting","encouraging","endurable","energetic","energetic","entertaining","enthusiastic","enthusiastic","excellent","excited","exclusive","exuberant","exuberant","fabulous","fair","fair-minded","faithful","faithful","fantastic","fearless","fearless","fine","forceful","frank","frank","friendly","friendly","funny","funny","generous","generous","gentle","gentle","glorious","good","good","gregarious","happy","hard-working","harmonious","helpful","helpful","hilarious","honest","honorable","humorous","imaginative","impartial","impartial","independent","industrious","instinctive","intellectual","intelligent","intuitive","inventive","jolly","joyous","kind","kind","kind-hearted","knowledgeable","level","likeable","lively","lovely","loving","loving","loyal","lucky","mature","modern","modest","neat","nice","nice","obedient","optimistic","painstaking","passionate","patient","peaceful","perfect","persistent","philosophical","pioneering","placid","placid","plausible","pleasant","plucky","plucky","polite","powerful","practical","pro-active","productive","protective","proud","punctual","quick-witted","quiet","quiet","rational","receptive","reflective","reliable","relieved","reserved","resolute","resourceful","responsible","rhetorical","righteous","romantic","romantic","sedate","seemly","selective","self-assured","self-confident","self-disciplined","sensible","sensitive","sensitive","shrewd","shy","silly","sincere","sincere","skillful","smiling","sociable","splendid","steadfast","stimulating","straightforward","successful","succinct","sympathetic","talented","thoughtful","thoughtful","thrifty","tidy","tough","tough","trustworthy","unassuming","unbiased","understanding","unusual","upbeat","versatile","vigorous","vivacious","warm","warmhearted","willing","willing","wise","witty","witty","wonderful"],v=["a","e","i","o","u","y"],y=["the {{noun}} is {{a_noun}}","{{a_noun}} is {{an_adjective}} {{noun}}","the first {{adjective}} {{noun}} is, in its own way, {{a_noun}}","their {{noun}} was, in this moment, {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}} from the right perspective","the literature would have us believe that {{an_adjective}} {{noun}} is not but {{a_noun}}","{{an_adjective}} {{noun}} is {{a_noun}} of the mind","the {{adjective}} {{noun}} reveals itself as {{an_adjective}} {{noun}} to those who look","authors often misinterpret the {{noun}} as {{an_adjective}} {{noun}}, when in actuality it feels more like {{an_adjective}} {{noun}}","we can assume that any instance of {{a_noun}} can be construed as {{an_adjective}} {{noun}}","they were lost without the {{adjective}} {{noun}} that composed their {{noun}}","the {{adjective}} {{noun}} comes from {{an_adjective}} {{noun}}","{{a_noun}} can hardly be considered {{an_adjective}} {{noun}} without also being {{a_noun}}","few can name {{an_adjective}} {{noun}} that isn't {{an_adjective}} {{noun}}","some posit the {{adjective}} {{noun}} to be less than {{adjective}}","{{a_noun}} of the {{noun}} is assumed to be {{an_adjective}} {{noun}}","{{a_noun}} sees {{a_noun}} as {{an_adjective}} {{noun}}","the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}}'s {{noun}}","{{a_noun}} is the {{noun}} of {{a_noun}}","{{an_adjective}} {{noun}}'s {{noun}} comes with it the thought that the {{adjective}} {{noun}} is {{a_noun}}","{{nouns}} are {{adjective}} {{nouns}}","{{adjective}} {{nouns}} show us how {{nouns}} can be {{nouns}}","before {{nouns}}, {{nouns}} were only {{nouns}}","those {{nouns}} are nothing more than {{nouns}}","some {{adjective}} {{nouns}} are thought of simply as {{nouns}}","one cannot separate {{nouns}} from {{adjective}} {{nouns}}","the {{nouns}} could be said to resemble {{adjective}} {{nouns}}","{{an_adjective}} {{noun}} without {{nouns}} is truly a {{noun}} of {{adjective}} {{nouns}}"],b=["to be more specific, ","in recent years, ","however, ","by the way","of course, ","some assert that ","if this was somewhat unclear, ","unfortunately, that is wrong; on the contrary, ","it's very tricky, if not impossible, ","this could be, or perhaps ","this is not to discredit the idea that ","we know that ","it's an undeniable fact, really; ","framed in a different way, ","what we don't know for sure is whether or not ","as far as we can estimate, ","as far as he is concerned, ","the zeitgeist contends that ","though we assume the latter, ","far from the truth, ","extending this logic, ","nowhere is it disputed that ","in modern times ","in ancient times ","recent controversy aside, ","washing and polishing the car,","having been a gymnast, ","after a long day at school and work, ","waking to the buzz of the alarm clock, ","draped neatly on a hanger, ","shouting with happiness, "],w=["noun","a_noun","nouns","adjective","an_adjective"],M={noun:function(){return h(g)},a_noun:function(){return c(h(g))},nouns:function(){return(e=h(g)).endsWith("s")?e:(e.match(/(ss|ish|ch|x|us)$/)?e+="e":e.endsWith("y")&&!v.includes(e.charAt(e.length-2))&&(e=e.slice(0,e.length-1),e+="ie"),e+"s");var e},adjective:function(){return h(m)},an_adjective:function(){return c(h(m))}},j=function(){return function(e){var t=e,n=e.match(/\{\{(.+?)\}\}/g);if(n&&n.length)for(var i=0;i<n.length;i++){var r=n[i].replace("{{","").replace("}}","").replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," "),a=void 0;w.includes(r)&&(a=M[r]()),t=t.replace(n[i],a)}return t}(h(y))},_=function(){var e,t=(Math.random()<.33?h(b):"")+j();if(t=t.charAt(0).toUpperCase()+t.slice(1),t+=(e=".......!?!?;...".split(""),h(e)),Math.random()>=.9){t=h(["He said","She said","In his own words","In her own words","Yelling","Wispering","Quoting with intend"])+': "'+t+'"'}return t},k=function(e){void 0===e&&(e=0),e||(e=p(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=_();n.push(i)}return n.join(" ")},x=function(e){void 0===e&&(e=0),e||(e=p(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=k();n.push(i)}return n.join("\n\n")},W=new t;function T(e,t){var n=new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())),i=""+(n.getMonth()+1),r=""+n.getDate(),a=n.getFullYear(),s=""+n.getHours(),l=""+n.getMinutes(),o=""+n.getSeconds();return i.length<2&&(i="0"+i),r.length<2&&(r="0"+r),s.length<2&&(s="0"+s),l.length<2&&(l="0"+l),o.length<2&&(o="0"+o),[a,i,r].join("-")+"T"+[s,l,o].join(":")+"+01:00"}function N(e){var t,n=Math.min.apply(Math,e),i=Math.max.apply(Math,e),r=[];for(t=n;t<=i;t++)-1==e.indexOf(t)&&r.push(t);return r.length>0&&{start:Math.min.apply(Math,r),end:Math.max.apply(Math,r)}}function O(e){if(!isFinite(e))return 0;for(var t=1,n=0;Math.round(e*t)/t!==e;)t*=10,n++;return n}function D(e){for(var t=0,n=0,i=e;n<i.length;n+=1){var r=O(i[n]);r>t&&(t=r)}return t}function F(e){for(var t,n=!0,i=0,r=e;i<r.length;i+=1)if(Q(t=r[i])!==t){n=!1;break}return n}function C(e){return Math.min.apply(Math,e)}function z(e){return Math.max.apply(Math,e)}function E(e){for(var t,n,i=999999999,r=0,a=e;r<a.length;r+=1){t=a[r];for(var s=0,l=e;s<l.length;s+=1)t!==(n=l[s])&&Math.abs(t-n)<i&&(i=Math.abs(t-n))}return i}function q(e,t,n){var i,r;return arguments.length<2&&(t=e,e=0),n||(n=1),i=(t-e)/n,r=Math.random(),r*=i,r=Math.floor(r),r*=n,r+=e}function S(e,t){var n=Math.abs((l.normal(0,1)()+3)/6),i=Math.floor(n*(t-e)+e);return i<e&&(i=e),i>t&&(i=t),i}function A(e){return Math.max.apply(Math,e.map(function(e){return e.length}))}function U(e){return Math.min.apply(Math,e.map(function(e){return e.split(" ").length}))}function $(e){return Math.max.apply(Math,e.map(function(e){return e.split(" ").length}))}function I(t){return Math.min.apply(Math,t.map(function(t){return e.compact(t.split(/[\.\!\?]+/)).length}))}function L(t){return Math.max.apply(Math,t.map(function(t){return e.compact(t.split(/[\.\!\?]+/)).length}))}function J(t){return Math.min.apply(Math,t.map(function(t){return e.compact(t.replace(/\n$/gm,"").split(/\n/)).length}))}function B(t){return Math.max.apply(Math,t.map(function(t){return e.compact(t.replace(/\n$/gm,"").split(/\n/)).length}))}function Y(e){return new Date(Math.min.apply(null,e))}function H(e){return new Date(Math.max.apply(null,e))}function P(e){for(var t=[],n=0,i=e;n<i.length;n+=1)t.push(new Date(i[n]));return t}function Q(e){return e.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})}function G(e,t){for(var n,i={},r=[],a=0,s=e;a<s.length;a+=1)void 0===i[n=s[a]]?i[n]=1:i[n]++;for(var l=0,o=t;l<o.length;l+=1)r.push(i[n=o[l]]);return r}function K(e){for(var t,n=null,i=null,r=!1,a=0,s=e;a<s.length;a+=1){if(t=s[a],null!==i&&t>i){if("desc"===n){r=!0;break}n="asc"}if(null!==i&&t<i){if("asc"===n){r=!0;break}n="desc"}i=t}return!r&&null!==n&&n}function R(e){for(var t=null,n=null,i=!1,r=0,a=e;r<a.length;r+=1){var s=new Date(a[r]);if(null!==n&&s>n){if("desc"===t){i=!0;break}t="asc"}if(null!==n&&s<n){if("asc"===t){i=!0;break}t="desc"}n=s}return!i&&null!==t&&t}function V(t,l){if(t.constructor!==Array){t=String(t);var u=Number(t);if("slug"===l)return n(t,{lower:!0});if("lower"===l)return t.toLowerCase();if("upper"===l)return t.toUpperCase();if("md5"===l)return i(t);if("capitalize"===l)return Q(t);if("plural"===l)return o.plural(t);if("singular"===l)return o.singular(t);if("trim"===l)return t.replace(/\s/g,"");if("md"===l)return s(t);if(NaN!==u&&"round"===l)return Math.round(t);if(NaN!==u&&"floor"===l)return Math.floor(t);if(NaN!==u&&"ceil"===l)return Math.ceil(t);if(NaN!==u&&"plus:"===l.substring(0,5)){var f=l.split(":");return u+Number(f[1])}if(NaN!==u&&"minus:"===l.substring(0,6)){var d=l.split(":");return u-Number(d[1])}if(NaN!==u&&"times:"===l.substring(0,6)){var p=l.split(":");return u*Number(p[1])}if(NaN!==u&&"max:"===l.substring(0,4)){var h=l.split(":"),c=Number(h[1]);return u>c?c:u}if(NaN!==u&&"min:"===l.substring(0,4)){var g=l.split(":"),m=Number(g[1]);return u<m?m:u}if(NaN!==u&&"num:"===l.substring(0,4)){var v=l.split(":");return a(u).format(v[1])}if("optional"===l&&Math.random()>=.5)return"";if("date:"===l.substring(0,5)){var y=l.split(":");return r(new Date(t),y[1])}return t}return"count"===l?t.length:"max"===l?z(t):"min"===l?C(t):"sum"===l?e.sum(t):"avg"===l?e.mean(t):"rand"===l?e.sample(t):t}function X(e,t){for(var n=V(e,t[1]),i=2;t.length>i;)n=V(n,t[i]),i++;return n}function Z(e,t,n,i){var r=e[0];if(void 0!==i[r]){for(var a,s=[],l=0,o=i[r];l<o.length;l+=1)(a=o[l])[t+"_id"]===n&&s.push(e.length>1?a[e[1]]:a.id);return s}return[]}function ee(e,t,n){var i=!1,r=t.slice(0),a=e;if(0===t.length)return null;for(;!i;){var s=r.shift();if(void 0===a[s+"_id"])return void 0!==a[s]?void 0!==a[s][t[t.length-1]]?a[s][t[t.length-1]]:"object"!=typeof a[s]?a[s]:null:null;var l=void 0,u=o.plural(s);if(void 0!==n[u])for(l in n[u])n[u][l].id===a[s+"_id"]&&(a=n[u][l]);0===r.length&&(i=!0)}return null}function te(e){var t="undefined",n=!1;return"boolean"==typeof e?t="boolean":"number"==typeof e?t=Math.round(e)===e?"int":"float":"string"==typeof e?/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(e)?t="date":!function(e){return/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\+[0-9]{2}:[0-9]{2}$/.test(e)}(e)?!function(e){return/^[0-9]{2}:[0-9]{2}:[0-9]{2}$|^[0-9]{2}:[0-9]{2}$/.test(e)}(e)?1===e.length?t="char":(/{{\s*([\w\.\?\|\:]+)\s*}}/.test(e)&&(n=!0),t="string"):t="time":t="datetime":"object"==typeof e&&(t=Array.isArray(e)?"array":"JSON"),{fieldType:t,containsTemplate:n}}function ne(e,t,n){return t==n?e:(e.hasOwnProperty(t)&&(e[n]=e[t],delete e[t]),e)}function ie(e,t,n,i){for(var r=[],a=0,s=i;a<s.length;a+=1)if(prevField=s[a],"int"!==n&&"float"!==n||"int"!==prevField.type&&"float"!==prevField.type){if("date"===n&&"date"===prevField.type||"datetime"===n&&"datetime"===prevField.type){var l=new Date(t),o=new Date(prevField.value);r.push(l>o?e+">"+prevField.key:l<o?e+"<"+prevField.key:e+"="+prevField.key)}}else t>prevField.value?r.push(e+">"+prevField.key):t<prevField.value?r.push(e+"<"+prevField.key):r.push(e+"="+prevField.key);return r}function re(e){for(var t,n=[],i=0,r=e;i<r.length;i+=1){var a=(t=r[i]).split(/>|<|=/);t.indexOf("<")>-1&&-1===e.indexOf(a[0]+">"+a[1])&&-1===e.indexOf(a[0]+"="+a[1])&&n.push(t),t.indexOf(">")>-1&&-1===e.indexOf(a[0]+"<"+a[1])&&-1===e.indexOf(a[0]+"="+a[1])&&n.push(t),t.indexOf("=")>-1&&-1===e.indexOf(a[0]+">"+a[1])&&-1===e.indexOf(a[0]+"<"+a[1])&&n.push(t)}return n}function ae(e,t,n,i){if(0===t.length)return!0;if(""===e)return!1;for(var r,a=0,s=t;a<s.length;a+=1){var l=(r=s[a]).split(/>|<|=/);if(void 0!==n[l[1]]&&""!==n[l[1]])if("int"===i||"float"===i){if(r.indexOf("<")>-1&&e>=n[l[1]])return!1;if(r.indexOf(">")>-1&&e<=n[l[1]])return!1;if(r.indexOf("=")>-1&&e!==n[l[1]])return!1}else if("date"===i||"datetime"===i){var o=new Date(e),u=new Date(n[l[1]]);if(r.indexOf("<")>-1&&o>=u)return!1;if(r.indexOf(">")>-1&&o<=u)return!1;if(r.indexOf("=")>-1&&o!==u)return!1}}return!0}function se(e,t,n){var i;for(i in t)if(e.indexOf(n+"="+i)>-1)return t[i];return null}function le(e){for(var t,n=null,i="",r=0,a=e;r<a.length;r+=1){var s="";if((t=a[r]).length<2)return!1;if(null===n)n=t.length;else if(t.length!==n)return!1;for(var l=0,o=t;l<o.length;l+=1)char=o[l],u.isAlpha(char)?u.isLowerCase(char)?s+="a":s+="A":u.isDigit(char)?s+="D":u.isBlank(char)?s+="B":s+=char;if(""===i)i=s;else if(i!==s)return!1}return i}function oe(t){for(var n="",i=0,r=t;i<r.length;i+=1)char=r[i],"A"===char?n+=e.sample("ABCDEFGHIJKLMNOPQRSTUVWXYZ"):"a"===char?n+=e.sample("abcdefghijklmnopqrstuvwxyz"):"D"===char?n+=Math.floor(10*Math.random()):"B"===char?n+=" ":n+=char;return n}var ue,fe=new t;ue=y.concat(["congratulations to the {{noun}} that won the {{adjective}} {{noun}} with {{a_noun}}","incomprehensibilities of a {{adjective}} {{noun}} and {{a_noun}} made {{a_noun}} {{adjective}}"]),y=function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(ue),module.exports=function(t){var n,i,r,a,s,l,u,p,h,c,g,m,v,y=!1,b={},w=[],j={},O=[];for(n in"string"==typeof b?(b=JSON.parse(t),y=!0):b=t,b)for(a in b[n])for(r in b[n][a]){var V=r.split("__");"__"!==r.substr(0,2)?V.length>1&&(j[n+"."+V[1]]=n+"."+V[0],ne(b[n][a],r,V[1])):(O.push(n+"."+r.substr(2)),ne(b[n][a],r,r.substr(2)))}for(n in b){var ue={key:n,minID:1,maxID:1,totalCount:0,fields:{}};for(a in b[n]){var de=[];for(r in b[n][a]){var pe=b[n][a][r],he=te(pe),ce=he.fieldType,ge=he.containsTemplate;if(void 0===ue.fields[r]?ue.fields[r]={types:[ce],entries:[pe],allEntries:[pe],containsTemplate:ge,rules:[],cnt:1}:(ue.fields[r].types.push(ce),ue.fields[r].types=e.uniq(ue.fields[r].types),ue.fields[r].entries.push(pe),ue.fields[r].entries=e.uniq(ue.fields[r].entries),ue.fields[r].allEntries.push(pe),ue.fields[r].cnt++,ge&&(ue.fields[r].containsTemplate=!0)),"JSON"===ce){var me=void 0;for(me in pe){var ve=pe[me],ye=te(ve),be=ye.fieldType,we=ye.containsTemplate;void 0===ue.fields[r+"."+me]?ue.fields[r+"."+me]={types:[be],entries:[ve],allEntries:[ve],containsTemplate:we,cnt:1}:(ue.fields[r+"."+me].types.push(be),ue.fields[r+"."+me].types=e.uniq(ue.fields[r+"."+me].types),ue.fields[r+"."+me].entries.push(ve),ue.fields[r+"."+me].entries=e.uniq(ue.fields[r+"."+me].entries),ue.fields[r+"."+me].allEntries.push(ve),ue.fields[r+"."+me].cnt++,we&&(ue.fields[r+"."+me].objContainsTemplate=!0))}}if(de.length>0&&"id"!==r&&!r.endsWith("_id")&&!r.endsWith("_ids")){var Me=ie(r,pe,ce,de);Me.length>0&&(ue.fields[r].rules=ue.fields[r].rules.concat(Me))}"id"===r||r.endsWith("_id")||r.endsWith("_ids")||de.push({key:r,value:pe,type:ce})}}for(r in ue.fields)"id"===r&&(ue.totalCount=ue.fields[r].cnt),ue.fields[r].type=1===ue.fields[r].types.length?ue.fields[r].types[0]:2==ue.fields[r].types.length&&ue.fields[r].types.indexOf("int")>-1&&ue.fields[r].types.indexOf("float")>-1?"float":"string",ue.fields[r].pattern="string"===ue.fields[r].type&&!ue.fields[r].containsTemplate&&le(ue.fields[r].entries),ue.fields[r].entries.length<ue.fields[r].cnt||ue.fields[r].containsTemplate?(ue.fields[r].repeatEntries=!0,ue.fields[r].weights=G(ue.fields[r].allEntries,ue.fields[r].entries)):ue.fields[r].repeatEntries=!1,ue.fields[r].required=!(ue.fields[r].cnt<ue.totalCount),ue.fields[r].rules=re(e.uniq(ue.fields[r].rules)),ue.fields[r].dir=!1,"int"!==ue.fields[r].type&&"float"!==ue.fields[r].type||(ue.fields[r].dir=K(ue.fields[r].entries)),"date"!==ue.fields[r].type&&"datetime"!==ue.fields[r].type||(ue.fields[r].dir=R(ue.fields[r].entries));ue.gap=N(ue.fields.id.entries),w.push(ue)}for(n in w){var je=w[n];if(je.gap){var _e=void 0,ke=void 0;for(_e=je.gap.start;_e<=je.gap.end;_e++){var xe={};for(ke in je.fields){var We="";if(je.fields[ke].repeatEntries||je.fields[ke].containsTemplate)We=fe.weighted(je.fields[ke].entries,je.fields[ke].weights);else{if("id"===ke&&(We=_e),"age"!==ke&&!ke.endsWith(".age")||"int"!==je.fields[ke].type||(We=fe.age()),"firstname"!==ke&&!ke.endsWith(".firstname")||"string"!==je.fields[ke].type||(We=fe.first()),"lastname"!==ke&&!ke.endsWith(".lastname")||"string"!==je.fields[ke].type||(We=fe.last()),"company"!==ke&&!ke.endsWith(".company")||"string"!==je.fields[ke].type||(We=fe.company()),"country"!==ke&&!ke.endsWith(".country")||"string"!==je.fields[ke].type||(We=fe.country()),"email"!==ke&&!ke.endsWith(".email")||"string"!==je.fields[ke].type||(We=f.internet.exampleEmail()),"color"!==ke&&!ke.endsWith(".color")||"string"!==je.fields[ke].type||(We=fe.color()),"ip"!==ke&&!ke.endsWith(".ip")||"string"!==je.fields[ke].type||(We=fe.ip()),"profession"!==ke&&!ke.endsWith(".profession")||"string"!==je.fields[ke].type||(We=fe.profession()),"url"!==ke&&!ke.endsWith(".url")||"string"!==je.fields[ke].type||(We=fe.url()),"city"!==ke&&!ke.endsWith(".city")||"string"!==je.fields[ke].type||(We=fe.city()),"street"!==ke&&!ke.endsWith(".street")||"string"!==je.fields[ke].type||(We=fe.street()),"zip"!==ke&&!ke.endsWith(".zip")||"int"!==je.fields[ke].type||(We=parseInt(fe.zip())),"weekday"!==ke&&!ke.endsWith(".weekday")||"string"!==je.fields[ke].type||(We=fe.weekday()),"year"!==ke&&!ke.endsWith(".year")||"int"!==je.fields[ke].type||(We=parseInt(fe.year())),"password"!==ke&&!ke.endsWith(".password")||"string"!==je.fields[ke].type||(We=fe.hash()),"guid"!==ke&&!ke.endsWith(".guid")||"string"!==je.fields[ke].type||(We=fe.guid()),"product"!==ke&&!ke.endsWith(".product")||"string"!==je.fields[ke].type||(We=f.commerce.productName()),"material"!==ke&&!ke.endsWith(".material")||"string"!==je.fields[ke].type||(We=f.commerce.productMaterial()),"iban"!==ke&&!ke.endsWith(".iban")||"string"!==je.fields[ke].type||(We=f.finance.iban()),"bic"!==ke&&!ke.endsWith(".bic")||"string"!==je.fields[ke].type||(We=f.finance.bic()),"avatar"!==ke&&!ke.endsWith(".avatar")||"string"!==je.fields[ke].type||(We=f.image.avatar()),"username"!==ke&&!ke.endsWith(".username")||"string"!==je.fields[ke].type||(We=f.internet.userName()),"homepage"!==ke&&!ke.endsWith(".homepage")||"string"!==je.fields[ke].type||(We=f.internet.url()),"job"!==ke&&!ke.endsWith(".job")||"string"!==je.fields[ke].type||(We=f.name.jobTitle()),"mimetype"!==ke&&!ke.endsWith(".mimetype")||"string"!==je.fields[ke].type||(We=f.system.mimeType()),""===We&&"JSON"===je.fields[ke].type&&(We={}),""===We&&"array"===je.fields[ke].type){for(var Te=null,Ne=null,Oe=0,De=0,Fe=je.fields[ke].entries;De<Fe.length;De+=1){arrEntry=Fe[De];var Ce=C(arrEntry),ze=z(arrEntry),Ee=arrEntry.length;Ee>0&&(null===Te||Ce<Te)&&(Te=Ce),Ee>0&&(null===Ne||ze>Ne)&&(Ne=ze),Ee>Oe&&(Oe=Ee)}(We=Array.from({length:Math.floor(Math.random()*Oe)+1},function(){return q(Te,Ne,1)})).sort(function(e,t){return e-t})}if(""===We&&"string"===je.fields[ke].type){var qe=Math.min.apply(Math,je.fields[ke].entries.map(function(e){return e.length})),Se=A(je.fields[ke].entries),Ae=(U(je.fields[ke].entries),$(je.fields[ke].entries)),Ue=I(je.fields[ke].entries),$e=L(je.fields[ke].entries),Ie=J(je.fields[ke].entries),Le=B(je.fields[ke].entries);Le>1?We=x(Math.floor(Math.random()*Le)+Ie):$e>1?We=k(Math.floor(Math.random()*$e)+Ue):Ae>1?(We=_(),je.fields[ke].entries[0].endsWith(".")||je.fields[ke].entries[0].endsWith("!")||je.fields[ke].entries[0].endsWith("?")||(We=We.slice(0,-1))):We=je.fields[ke].pattern?oe(je.fields[ke].pattern):je.fields[ke].entries[0][0].toUpperCase()===je.fields[ke].entries[0][0]?fe.capitalize(fe.word({length:Math.floor(Math.random()*qe)+Se})):fe.string({length:Math.floor(Math.random()*qe)+Se}),je.fields[ke].entries[0]===je.fields[ke].entries[0].toUpperCase()?We=We.toUpperCase():je.fields[ke].entries[0]===je.fields[ke].entries[0].toLowerCase()?We=We.toLowerCase():F(je.fields[ke].entries)&&(We=Q(We))}if(""===We&&"int"===je.fields[ke].type){var Je=C(je.fields[ke].entries),Be=z(je.fields[ke].entries),Ye=E(je.fields[ke].entries),He=0,Pe=se(je.fields[ke].rules,xe,ke),Qe=(Be-Je)/(je.gap.end-je.gap.start+1);if("asc"===je.fields[ke].dir?(Be=Math.ceil(Je+(_e-je.gap.start+1)*Qe-1),Je=Math.floor(Je+(_e-je.gap.start)*Qe+1)):"desc"===je.fields[ke].dir&&(Je=Math.ceil(Be-(_e-je.gap.start+1)*Qe+1),Be=Math.floor(Be-(_e-je.gap.start)*Qe-1)),ke.endsWith("_id"))We=S(Je,Be);else if(null===Pe)for(;0===He||!ae(We,je.fields[ke].rules,xe,je.fields[ke].type)&&He<100;)We=q(Je,Be,Ye),He++;else We=Pe}if(""===We&&"float"===je.fields[ke].type){var Ge=C(je.fields[ke].entries),Ke=z(je.fields[ke].entries),Re=D(je.fields[ke].entries),Ve=0,Xe=se(je.fields[ke].rules,xe,ke),Ze=(Ke-Ge-1)/(je.gap.end-je.gap.start+1);if("asc"===je.fields[ke].dir?(Ke=Ge+(_e-je.gap.start+1)*Ze+1,Ge=Ge+(_e-je.gap.start)*Ze+1):"desc"===je.fields[ke].dir&&(Ge=Ke-(_e-je.gap.start+1)*Ze-1,Ke=Ke-(_e-je.gap.start)*Ze-1),null===Xe)for(;0===Ve||!ae(We,je.fields[ke].rules,xe,je.fields[ke].type)&&Ve<100;)We=Number(fe.floating({min:Ge,max:Ke}).toFixed(Re)),Ve++;else We=Xe}if(""===We&&"char"===je.fields[ke].type&&(We=je.fields[ke].entries[0]===je.fields[ke].entries[0].toUpperCase()?fe.letter({casing:"upper"}):je.fields[ke].entries[0]===je.fields[ke].entries[0].toLowerCase()?fe.letter({casing:"lower"}):fe.letter()),""===We&&"date"===je.fields[ke].type){var et=Y(P(je.fields[ke].entries)),tt=H(P(je.fields[ke].entries)),nt=0,it=se(je.fields[ke].rules,xe,ke),rt=je.gap.end-je.gap.start+1,at=(tt.getTime()-et.getTime()-1)/rt;if("asc"===je.fields[ke].dir?(tt=new Date(et.getTime()+(_e-je.gap.start+1)*at+1),et=new Date(et.getTime()+(_e-je.gap.start)*at+1)):"desc"===je.fields[ke].dir&&(et=new Date(tt.getTime()-(_e-je.gap.start+1)*at-1),tt=new Date(tt.getTime()-(_e-je.gap.start)*at-1)),null===it)for(;0===nt||!ae(We,je.fields[ke].rules,xe,je.fields[ke].type)&&nt<100;)p=et,h=tt,c=void 0,g=void 0,m=void 0,v=void 0,c=new Date(p.getTime()+Math.random()*(h.getTime()-p.getTime())),g=""+(c.getMonth()+1),m=""+c.getDate(),v=c.getFullYear(),g.length<2&&(g="0"+g),m.length<2&&(m="0"+m),We=[v,g,m].join("-"),nt++;else We=it}if(""===We&&"datetime"===je.fields[ke].type){var st=Y(P(je.fields[ke].entries)),lt=H(P(je.fields[ke].entries)),ot=0,ut=se(je.fields[ke].rules,xe,ke),ft=je.gap.end-je.gap.start+1,dt=(lt.getTime()-st.getTime()-1)/ft;if("asc"===je.fields[ke].dir?(lt=new Date(st.getTime()+(_e-je.gap.start+1)*dt+1),st=new Date(st.getTime()+(_e-je.gap.start)*dt+1)):"desc"===je.fields[ke].dir&&(st=new Date(lt.getTime()-(_e-je.gap.start+1)*dt-1),lt=new Date(lt.getTime()-(_e-je.gap.start)*dt-1)),null===ut)for(;0===ot||!ae(We,je.fields[ke].rules,xe,je.fields[ke].type)&&ot<100;)We=T(st,lt),ot++;else We=ut}""===We&&"time"===je.fields[ke].type&&(s=void 0,l=void 0,u=void 0,s=String(W.hour({twentyfour:!0})),l=String(W.minute()),u=String(W.second()),1===s.length&&(s="0"+s),1===l.length&&(l="0"+l),1===u.length&&(u="0"+u),We=Math.random()>=.5?[s,l,u].join(":"):[s,l].join(":")),""===We&&"boolean"===je.fields[ke].type&&(We=Math.random()>=.5)}if(je.fields[ke].required||Math.random()>=.5)if(ke.indexOf(".")>-1){var pt=ke.split(".");void 0!==xe[pt[0]]&&(xe[pt[0]][pt[1]]=We)}else xe[ke]=We}b[je.key].push(xe)}}}for(n in b)for(i in b[n]){var ht=function(){var e,t=b[n][i][r],a=b[n][i].id;"string"==typeof t&&(b[n][i][r]=t.replace(/{{\s*([\w\.\?\|\:]+)\s*}}/g,function(e,t){var r=t.split("?"),s=r[0].split("|"),l=s[0].split(".");if("number"===l[0]&&1===l.length)return Math.floor(10*Math.random());if("sentence"===l[0]&&1===l.length)return _();if("paragraph"===l[0]&&1===l.length)return k();if("word"===l[0]&&2===l.length){if(void 0!==M[l[1]])return s.length>1?X(M[l[1]](),s):M[l[1]]()}else{if("field"===l[0]&&2===l.length&&void 0!==b[n][i][l[1]])return s.length>1?X(b[n][i][l[1]],s):b[n][i][l[1]];if("field"===l[0]&&l.length>2){var u=l.slice(1),f=ee(b[n][i],u,b);if(null!==f)return s.length>1?X(f,s):f;if(r.length>1)return r[1]}else{if("connected"===l[0]&&l.length>1){var d=Z(l.slice(1),o.singular(n),a,b);return s.length>1?X(d,s):d.length>1?[d.slice(0,-1).join(", "),d.slice(-1)[0]].join(d.length<2?"":" and "):d.join(",")}if(r.length>1)return r[1]}}return e}),b[n][i][r]=b[n][i][r].replace(/  +/g," "),e=b[n][i][r],!isNaN(parseFloat(e))&&isFinite(e)&&(b[n][i][r]=Number(b[n][i][r])))};for(r in b[n][i])ht()}for(n in b)for(a in b[n])for(r in b[n][a])O.indexOf(n+"."+r)>-1&&delete b[n][a][r],void 0!==j[n+"."+r]&&ne(b[n][a],r,j[n+"."+r].split(".")[1]);return y?d(b):b};
//# sourceMappingURL=blowson.m.js.map
