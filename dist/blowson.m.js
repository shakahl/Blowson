import e from"chance";import t from"slugify";import n from"md5";import{format as i}from"date-fns";import r from"numeral";import a from"marked";import s from"prob.js";import o from"lodash";import l from"faker";import u from"json-stringify-pretty-compact";var d=function(e,t){var n=e,i=t-e+1;return Math.floor(Math.random()*i)+n},f=function(e){for(var t;!t;)t=e[d(0,e.length-1)];return t},h=function(e){return e.endsWith("s")?e:(e.match(/(ss|ish|ch|x|us)$/)?e+="e":e.endsWith("y")&&!m.includes(e.charAt(e.length-2))&&(e=e.slice(0,e.length-1),e+="ie"),e+"s")},c=function(e){var t="a";return e.match(/^(a|e|i|o)/)&&(t="an"),t+" "+e},p=["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee","cow","crocodile","deer","dog","dolphin","duck","eagle","elephant","fish","fly","fox","frog","giraffe","goat","goldfish","hamster","hippopotamus","horse","kangaroo","kitten","lion","lobster","monkey","octopus","owl","panda","pig","puppy","rabbit","rat","scorpion","seal","shark","sheep","snail","snake","spider","squirrel","tiger","turtle","wolf","zebra","apple","apricot","banana","blackberry","blueberry","cherry","cranberry","currant","fig","grape","grapefruit","grapes","kiwi","kumquat","lemon","lime","melon","nectarine","orange","peach","pear","persimmon","pineapple","plum","pomegranate","prune","raspberry","strawberry","tangerine","watermelon"],g=["adaptable","adventurous","affable","affectionate","agreeable","alert","alluring","ambitious","ambitious","amiable","amicable","amused","amusing","boundless","brave","brave","bright","bright","broad-minded","calm","calm","capable","careful","charming","charming","cheerful","coherent","comfortable","communicative","compassionate","confident","conscientious","considerate","convivial","cooperative","courageous","courageous","courteous","creative","credible","cultured","dashing","dazzling","debonair","decisive","decisive","decorous","delightful","detailed","determined","determined","diligent","diligent","diplomatic","discreet","discreet","dynamic","dynamic","eager","easygoing","efficient","elated","eminent","emotional","enchanting","encouraging","endurable","energetic","energetic","entertaining","enthusiastic","enthusiastic","excellent","excited","exclusive","exuberant","exuberant","fabulous","fair","fair-minded","faithful","faithful","fantastic","fearless","fearless","fine","forceful","frank","frank","friendly","friendly","funny","funny","generous","generous","gentle","gentle","glorious","good","good","gregarious","happy","hard-working","harmonious","helpful","helpful","hilarious","honest","honorable","humorous","imaginative","impartial","impartial","independent","industrious","instinctive","intellectual","intelligent","intuitive","inventive","jolly","joyous","kind","kind","kind-hearted","knowledgeable","level","likeable","lively","lovely","loving","loving","loyal","lucky","mature","modern","modest","neat","nice","nice","obedient","optimistic","painstaking","passionate","patient","peaceful","perfect","persistent","philosophical","pioneering","placid","placid","plausible","pleasant","plucky","plucky","polite","powerful","practical","pro-active","productive","protective","proud","punctual","quick-witted","quiet","quiet","rational","receptive","reflective","reliable","relieved","reserved","resolute","resourceful","responsible","rhetorical","righteous","romantic","romantic","sedate","seemly","selective","self-assured","self-confident","self-disciplined","sensible","sensitive","sensitive","shrewd","shy","silly","sincere","sincere","skillful","smiling","sociable","splendid","steadfast","stimulating","straightforward","successful","succinct","sympathetic","talented","thoughtful","thoughtful","thrifty","tidy","tough","tough","trustworthy","unassuming","unbiased","understanding","unusual","upbeat","versatile","vigorous","vivacious","warm","warmhearted","willing","willing","wise","witty","witty","wonderful"],m=["a","e","i","o","u","y"],v=["the {{noun}} is {{a_noun}}","{{a_noun}} is {{an_adjective}} {{noun}}","the first {{adjective}} {{noun}} is, in its own way, {{a_noun}}","their {{noun}} was, in this moment, {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}} from the right perspective","the literature would have us believe that {{an_adjective}} {{noun}} is not but {{a_noun}}","{{an_adjective}} {{noun}} is {{a_noun}} of the mind","the {{adjective}} {{noun}} reveals itself as {{an_adjective}} {{noun}} to those who look","authors often misinterpret the {{noun}} as {{an_adjective}} {{noun}}, when in actuality it feels more like {{an_adjective}} {{noun}}","we can assume that any instance of {{a_noun}} can be construed as {{an_adjective}} {{noun}}","they were lost without the {{adjective}} {{noun}} that composed their {{noun}}","the {{adjective}} {{noun}} comes from {{an_adjective}} {{noun}}","{{a_noun}} can hardly be considered {{an_adjective}} {{noun}} without also being {{a_noun}}","few can name {{an_adjective}} {{noun}} that isn't {{an_adjective}} {{noun}}","some posit the {{adjective}} {{noun}} to be less than {{adjective}}","{{a_noun}} of the {{noun}} is assumed to be {{an_adjective}} {{noun}}","{{a_noun}} sees {{a_noun}} as {{an_adjective}} {{noun}}","the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}}'s {{noun}}","{{a_noun}} is the {{noun}} of {{a_noun}}","{{an_adjective}} {{noun}}'s {{noun}} comes with it the thought that the {{adjective}} {{noun}} is {{a_noun}}","{{nouns}} are {{adjective}} {{nouns}}","{{adjective}} {{nouns}} show us how {{nouns}} can be {{nouns}}","before {{nouns}}, {{nouns}} were only {{nouns}}","those {{nouns}} are nothing more than {{nouns}}","some {{adjective}} {{nouns}} are thought of simply as {{nouns}}","one cannot separate {{nouns}} from {{adjective}} {{nouns}}","the {{nouns}} could be said to resemble {{adjective}} {{nouns}}","{{an_adjective}} {{noun}} without {{nouns}} is truly a {{noun}} of {{adjective}} {{nouns}}"],y=["to be more specific, ","in recent years, ","however, ","by the way","of course, ","some assert that ","if this was somewhat unclear, ","unfortunately, that is wrong; on the contrary, ","it's very tricky, if not impossible, ","this could be, or perhaps ","this is not to discredit the idea that ","we know that ","it's an undeniable fact, really; ","framed in a different way, ","what we don't know for sure is whether or not ","as far as we can estimate, ","as far as he is concerned, ","the zeitgeist contends that ","though we assume the latter, ","far from the truth, ","extending this logic, ","nowhere is it disputed that ","in modern times ","in ancient times ","recent controversy aside, ","washing and polishing the car,","having been a gymnast, ","after a long day at school and work, ","waking to the buzz of the alarm clock, ","draped neatly on a hanger, ","shouting with happiness, "],b=["noun","a_noun","nouns","adjective","an_adjective"],w={noun:function(){return f(p)},a_noun:function(){return c(f(p))},nouns:function(){return h(f(p))},adjective:function(){return f(g)},an_adjective:function(){return c(f(g))}},M=function(){return function(e){var t=e,n=e.match(/\{\{(.+?)\}\}/g);if(n&&n.length)for(var i=0;i<n.length;i++){var r=n[i].replace("{{","").replace("}}","").replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," "),a=void 0;b.includes(r)&&(a=w[r]()),t=t.replace(n[i],a)}return t}(f(v))},j=function(){var e,t=(Math.random()<.33?f(y):"")+M();if(t=t.charAt(0).toUpperCase()+t.slice(1),t+=(e=".......!?!?;...".split(""),f(e)),Math.random()>=.9){t=f(["He said","She said","In his own words","In her own words","Yelling","Wispering","Quoting with intend"])+': "'+t+'"'}return t},_=function(e){void 0===e&&(e=0),e||(e=d(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=j();n.push(i)}return n.join(" ")},k=function(e){void 0===e&&(e=0),e||(e=d(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=_();n.push(i)}return n.join("\n\n")},W=new e;function x(e,t){var n=new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())),i=""+(n.getMonth()+1),r=""+n.getDate(),a=n.getFullYear(),s=""+n.getHours(),o=""+n.getMinutes(),l=""+n.getSeconds();return i.length<2&&(i="0"+i),r.length<2&&(r="0"+r),s.length<2&&(s="0"+s),o.length<2&&(o="0"+o),l.length<2&&(l="0"+l),[a,i,r].join("-")+"T"+[s,o,l].join(":")+"+01:00"}function T(e){var t,n=Math.min.apply(Math,e),i=Math.max.apply(Math,e),r=[];for(t=n;t<=i;t++)-1==e.indexOf(t)&&r.push(t);return r.length>0&&{start:Math.min.apply(Math,r),end:Math.max.apply(Math,r)}}function C(e){if(!isFinite(e))return 0;for(var t=1,n=0;Math.round(e*t)/t!==e;)t*=10,n++;return n}function N(e){for(var t=0,n=0,i=e;n<i.length;n+=1){var r=C(i[n]);r>t&&(t=r)}return t}function E(e){for(var t,n=!0,i=0,r=e;i<r.length;i+=1)if(Q(t=r[i])!==t){n=!1;break}return n}function q(e){return Math.min.apply(Math,e)}function z(e){return Math.max.apply(Math,e)}function S(e){for(var t,n,i=999999999,r=0,a=e;r<a.length;r+=1){t=a[r];for(var s=0,o=e;s<o.length;s+=1)t!==(n=o[s])&&Math.abs(t-n)<i&&(i=Math.abs(t-n))}return i}function D(e,t,n){var i,r;return arguments.length<2&&(t=e,e=0),n||(n=1),i=(t-e)/n,r=Math.random(),r*=i,r=Math.floor(r),r*=n,r+=e}function O(e,t){var n=Math.abs((s.normal(0,1)()+3)/6),i=Math.floor(n*(t-e)+e);return i<e&&(i=e),i>t&&(i=t),i}function $(e){return Math.max.apply(Math,e.map(function(e){return e.length}))}function I(e){return Math.min.apply(Math,e.map(function(e){return e.split(" ").length}))}function U(e){return Math.max.apply(Math,e.map(function(e){return e.split(" ").length}))}function A(e){return Math.min.apply(Math,e.map(function(e){return e.split(/[\.\!\?]+/).length}))}function L(e){return Math.max.apply(Math,e.map(function(e){return e.split(/[\.\!\?]+/).length}))}function F(e){return Math.min.apply(Math,e.map(function(e){return e.replace(/\n$/gm,"").split(/\n/).length}))}function J(e){return Math.max.apply(Math,e.map(function(e){return e.replace(/\n$/gm,"").split(/\n/).length}))}function Y(e){return new Date(Math.min.apply(null,e))}function H(e){return new Date(Math.max.apply(null,e))}function P(e){for(var t=[],n=0,i=e;n<i.length;n+=1)t.push(new Date(i[n]));return t}function Q(e){return e.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})}function B(e,t){for(var n,i={},r=[],a=0,s=e;a<s.length;a+=1)void 0===i[n=s[a]]?i[n]=1:i[n]++;for(var o=0,l=t;o<l.length;o+=1)r.push(i[n=l[o]]);return r}function G(e,s){e=String(e);var o=Number(e);if("slug"===s)return t(e,{lower:!0});if("lower"===s)return e.toLowerCase();if("uppper"===s)return e.toLowerCase();if("md5"===s)return n(e);if("capitalize"===s)return Q(e);if("trim"===s)return e.replace(/\s/g,"");if("md"===s)return a(e);if(NaN!==o&&"round"===s)return Math.round(e);if(NaN!==o&&"floor"===s)return Math.floor(e);if(NaN!==o&&"num:"===s.substring(0,4)){var l=s.split(":");return r(o).format(l[1])}if("optional"===s&&Math.random()>=.5)return"";if("date:"===s.substring(0,5)){var u=s.split(":");return i(new Date(e),u[1])}return e}function K(e,t){for(var n=G(e,t[1]),i=2;t.length>i;)n=G(n,t[i]),i++;return n}function R(e,t,n){var i=!1,r=t.slice(0),a=e;if(0===t.length)return null;for(;!i;){var s=r.shift();if(void 0===a[s+"_id"])return void 0!==a[s]?void 0!==a[s][t[t.length-1]]?a[s][t[t.length-1]]:"object"!=typeof a[s]?a[s]:null:null;var o=void 0,l=h(s);if(void 0!==n[l])for(o in n[l])n[l][o].id===a[s+"_id"]&&(a=n[l][o]);0===r.length&&(i=!0)}return null}function V(e){var t="undefined",n=!1;return"boolean"==typeof e?t="boolean":"number"==typeof e?t=Math.round(e)===e?"int":"float":"string"==typeof e?/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(e)?t="date":!function(e){return/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\+[0-9]{2}:[0-9]{2}$/.test(e)}(e)?!function(e){return/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/.test(e)}(e)?1===e.length?t="char":(/{{\s*([\w\.\?\|\:]+)\s*}}/.test(e)&&(n=!0),t="string"):t="time":t="datetime":"object"==typeof e&&(t=Array.isArray(e)?"array":"JSON"),{fieldType:t,containsTemplate:n}}function X(e,t,n){return t==n?e:(e.hasOwnProperty(t)&&(e[n]=e[t],delete e[t]),e)}var Z,ee=new e;Z=v.concat(["congratulations to the {{noun}} that won the {{adjective}} {{noun}} with {{a_noun}}","incomprehensibilities of a {{adjective}} {{noun}} and {{a_noun}} made {{a_noun}} {{adjective}}"]),v=function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(Z),module.exports=function(e){var t,n,i,r,a,s,d,f,h,c,p,g,m,v=!1,y={},b=[],M={},C=[];for(t in"string"==typeof y?(y=JSON.parse(e),v=!0):y=e,y)for(r in y[t])for(i in y[t][r]){var G=i.split("__");"__"!==i.substr(0,2)?G.length>1&&(M[t+"."+G[1]]=t+"."+G[0],X(y[t][r],i,G[1])):(C.push(t+"."+i.substr(2)),X(y[t][r],i,i.substr(2)))}for(t in y){var Z={key:t,minID:1,maxID:1,totalCount:0,fields:{}};for(r in y[t])for(i in y[t][r]){var te=y[t][r][i],ne=V(te),ie=ne.fieldType,re=ne.containsTemplate;if(void 0===Z.fields[i]?Z.fields[i]={types:[ie],entries:[te],allEntries:[te],containsTemplate:re,cnt:1}:(Z.fields[i].types.push(ie),Z.fields[i].types=o.uniq(Z.fields[i].types),Z.fields[i].entries.push(te),Z.fields[i].entries=o.uniq(Z.fields[i].entries),Z.fields[i].allEntries.push(te),Z.fields[i].cnt++,re&&(Z.fields[i].containsTemplate=!0)),"JSON"===ie){var ae=void 0;for(ae in te){var se=te[ae],oe=V(se),le=oe.fieldType,ue=oe.containsTemplate;void 0===Z.fields[i+"."+ae]?Z.fields[i+"."+ae]={types:[le],entries:[se],allEntries:[se],containsTemplate:ue,cnt:1}:(Z.fields[i+"."+ae].types.push(le),Z.fields[i+"."+ae].types=o.uniq(Z.fields[i+"."+ae].types),Z.fields[i+"."+ae].entries.push(se),Z.fields[i+"."+ae].entries=o.uniq(Z.fields[i+"."+ae].entries),Z.fields[i+"."+ae].allEntries.push(se),Z.fields[i+"."+ae].cnt++,ue&&(Z.fields[i+"."+ae].objContainsTemplate=!0))}}}for(i in Z.fields)"id"===i&&(Z.totalCount=Z.fields[i].cnt),1===Z.fields[i].types.length&&(Z.fields[i].type=Z.fields[i].types[0]),Z.fields[i].entries.length<Z.fields[i].cnt||Z.fields[i].containsTemplate?(Z.fields[i].repeatEntries=!0,Z.fields[i].weights=B(Z.fields[i].allEntries,Z.fields[i].entries)):Z.fields[i].repeatEntries=!1,Z.fields[i].required=!(Z.fields[i].cnt<Z.totalCount);Z.gap=T(Z.fields.id.entries),b.push(Z)}for(t in b){var de=b[t];if(de.gap){var fe=void 0,he=void 0;for(fe=de.gap.start;fe<=de.gap.end;fe++){var ce={};for(he in de.fields){var pe="";if(de.fields[he].repeatEntries||de.fields[he].containsTemplate)pe=ee.weighted(de.fields[he].entries,de.fields[he].weights);else{if("id"===he&&(pe=fe),"age"!==he&&!he.endsWith(".age")||"int"!==de.fields[he].type||(pe=ee.age()),"firstname"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=ee.first()),"lastname"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=ee.last()),"company"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=ee.company()),"country"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=ee.country()),"email"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=l.internet.exampleEmail()),"color"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=ee.color()),"ip"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=ee.ip()),"profession"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=ee.profession()),"url"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=ee.url()),"city"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=ee.city()),"street"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=ee.street()),"zip"!==he&&!he.endsWith(".age")||"int"!==de.fields[he].type||(pe=parseInt(ee.zip())),"weekday"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=ee.weekday()),"year"!==he&&!he.endsWith(".age")||"int"!==de.fields[he].type||(pe=parseInt(ee.year())),"password"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=ee.hash()),"guid"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=ee.guid()),"product"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=l.commerce.productName()),"material"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=l.commerce.productMaterial()),"iban"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=l.finance.iban()),"bic"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=l.finance.bic()),"avatar"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=l.image.avatar()),"username"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=l.internet.userName()),"homepage"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=l.internet.url()),"job"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=l.name.jobTitle()),"mimetype"!==he&&!he.endsWith(".age")||"string"!==de.fields[he].type||(pe=l.system.mimeType()),""===pe&&"JSON"===de.fields[he].type&&(pe={}),""===pe&&"array"===de.fields[he].type){for(var ge=null,me=null,ve=0,ye=0,be=de.fields[he].entries;ye<be.length;ye+=1){arrEntry=be[ye];var we=q(arrEntry),Me=z(arrEntry),je=arrEntry.length;je>0&&(null===ge||we<ge)&&(ge=we),je>0&&(null===me||Me>me)&&(me=Me),je>ve&&(ve=je)}(pe=Array.from({length:Math.floor(Math.random()*ve)+1},function(){return D(ge,me,1)})).sort(function(e,t){return e-t})}if(""===pe&&"string"===de.fields[he].type){var _e=Math.min.apply(Math,de.fields[he].entries.map(function(e){return e.length})),ke=$(de.fields[he].entries),We=I(de.fields[he].entries),xe=U(de.fields[he].entries),Te=A(de.fields[he].entries),Ce=L(de.fields[he].entries),Ne=F(de.fields[he].entries),Ee=J(de.fields[he].entries);pe=Ee>1?k(Math.floor(Math.random()*Ee)+Ne):Ce>1?_(Math.floor(Math.random()*Ce)+Te):xe>1?ee.sentence({words:Math.floor(Math.random()*xe)+We}).slice(0,-1):de.fields[he].entries[0][0].toUpperCase()===de.fields[he].entries[0][0]?ee.capitalize(ee.word({length:Math.floor(Math.random()*_e)+ke})):ee.string({length:Math.floor(Math.random()*_e)+ke}),de.fields[he].entries[0]===de.fields[he].entries[0].toUpperCase()?pe=pe.toUpperCase():de.fields[he].entries[0]===de.fields[he].entries[0].toLowerCase()?pe=pe.toLowerCase():E(de.fields[he].entries)&&(pe=Q(pe))}if(""===pe&&"int"===de.fields[he].type){var qe=q(de.fields[he].entries),ze=z(de.fields[he].entries),Se=S(de.fields[he].entries);pe=he.endsWith("_id")?O(qe,ze):D(qe,ze,Se)}if(""===pe&&"float"===de.fields[he].type){var De=q(de.fields[he].entries),Oe=z(de.fields[he].entries),$e=N(de.fields[he].entries);pe=Number((Math.random()*Oe+De).toFixed($e))}if(""===pe&&"char"===de.fields[he].type&&(pe=de.fields[he].entries[0]===de.fields[he].entries[0].toUpperCase()?ee.letter({casing:"upper"}):de.fields[he].entries[0]===de.fields[he].entries[0].toLowerCase()?ee.letter({casing:"lower"}):ee.letter()),""===pe&&"date"===de.fields[he].type){var Ie=Y(P(de.fields[he].entries)),Ue=H(P(de.fields[he].entries));f=Ie,h=Ue,c=void 0,p=void 0,g=void 0,m=void 0,c=new Date(f.getTime()+Math.random()*(h.getTime()-f.getTime())),p=""+(c.getMonth()+1),g=""+c.getDate(),m=c.getFullYear(),p.length<2&&(p="0"+p),g.length<2&&(g="0"+g),pe=[m,p,g].join("-")}if(""===pe&&"datetime"===de.fields[he].type)pe=x(Y(P(de.fields[he].entries)),H(P(de.fields[he].entries)));""===pe&&"time"===de.fields[he].type&&(a=void 0,s=void 0,d=void 0,a=String(W.hour({twentyfour:!0})),s=String(W.minute()),d=String(W.second()),pe=[a,s,d].join(":"))}if(de.fields[he].required||Math.random()>=.5)if(he.indexOf(".")>-1){var Ae=he.split(".");void 0!==ce[Ae[0]]&&(ce[Ae[0]][Ae[1]]=pe)}else ce[he]=pe}y[de.key].push(ce)}}}for(t in y)for(n in y[t])for(i in y[t][n]){var Le=y[t][n][i];"string"==typeof Le&&(y[t][n][i]=Le.replace(/{{\s*([\w\.\?\|\:]+)\s*}}/g,function(e,i){var r=i.split("?"),a=r[0].split("|"),s=a[0].split(".");if("number"===s[0]&&1===s.length)return Math.floor(10*Math.random());if("sentence"===s[0]&&1===s.length)return j();if("paragraph"===s[0]&&1===s.length)return _();if("word"===s[0]&&2===s.length){if(void 0!==w[s[1]])return a.length>1?K(w[s[1]](),a):w[s[1]]()}else{if("field"===s[0]&&2===s.length&&void 0!==y[t][n][s[1]])return a.length>1?K(y[t][n][s[1]],a):y[t][n][s[1]];if("field"===s[0]&&s.length>2){var o=s.slice(1),l=R(y[t][n],o,y);if(null!==l)return a.length>1?K(l,a):l;if(r.length>1)return r[1]}else if(r.length>1)return r[1]}return e}),y[t][n][i]=y[t][n][i].replace(/  +/g," "))}for(t in y)for(r in y[t])for(i in y[t][r])C.indexOf(t+"."+i)>-1&&delete y[t][r][i],void 0!==M[t+"."+i]&&X(y[t][r],i,M[t+"."+i].split(".")[1]);return v?u(y):y};
//# sourceMappingURL=blowson.m.js.map
