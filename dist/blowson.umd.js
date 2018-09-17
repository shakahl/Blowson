!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("chance"),require("slugify"),require("md5"),require("date-fns"),require("lodash"),require("faker")):"function"==typeof define&&define.amd?define(["chance","slugify","md5","date-fns","lodash","faker"],t):t(e.chance,e.slugify,e.md5,e.dateFns,e.lodash,e.faker)}(this,function(e,t,n,i,a,r){e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n,a=a&&a.hasOwnProperty("default")?a.default:a,r=r&&r.hasOwnProperty("default")?r.default:r;var s=function(e,t){var n=e,i=t-e+1;return Math.floor(Math.random()*i)+n},o=function(e){for(var t;!t;)t=e[s(0,e.length-1)];return t},l=function(e){return e.endsWith("s")?e:(e.match(/(ss|ish|ch|x|us)$/)?e+="e":e.endsWith("y")&&!h.includes(e.charAt(e.length-2))&&(e=e.slice(0,e.length-1),e+="ie"),e+"s")},u=function(e){var t="a";return e.match(/^(a|e|i|o)/)&&(t="an"),t+" "+e},d=["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee","cow","crocodile","deer","dog","dolphin","duck","eagle","elephant","fish","fly","fox","frog","giraffe","goat","goldfish","hamster","hippopotamus","horse","kangaroo","kitten","lion","lobster","monkey","octopus","owl","panda","pig","puppy","rabbit","rat","scorpion","seal","shark","sheep","snail","snake","spider","squirrel","tiger","turtle","wolf","zebra","apple","apricot","banana","blackberry","blueberry","cherry","cranberry","currant","fig","grape","grapefruit","grapes","kiwi","kumquat","lemon","lime","melon","nectarine","orange","peach","pear","persimmon","pineapple","plum","pomegranate","prune","raspberry","strawberry","tangerine","watermelon"],f=["adaptable","adventurous","affable","affectionate","agreeable","alert","alluring","ambitious","ambitious","amiable","amicable","amused","amusing","boundless","brave","brave","bright","bright","broad-minded","calm","calm","capable","careful","charming","charming","cheerful","coherent","comfortable","communicative","compassionate","confident","conscientious","considerate","convivial","cooperative","courageous","courageous","courteous","creative","credible","cultured","dashing","dazzling","debonair","decisive","decisive","decorous","delightful","detailed","determined","determined","diligent","diligent","diplomatic","discreet","discreet","dynamic","dynamic","eager","easygoing","efficient","elated","eminent","emotional","enchanting","encouraging","endurable","energetic","energetic","entertaining","enthusiastic","enthusiastic","excellent","excited","exclusive","exuberant","exuberant","fabulous","fair","fair-minded","faithful","faithful","fantastic","fearless","fearless","fine","forceful","frank","frank","friendly","friendly","funny","funny","generous","generous","gentle","gentle","glorious","good","good","gregarious","happy","hard-working","harmonious","helpful","helpful","hilarious","honest","honorable","humorous","imaginative","impartial","impartial","independent","industrious","instinctive","intellectual","intelligent","intuitive","inventive","jolly","joyous","kind","kind","kind-hearted","knowledgeable","level","likeable","lively","lovely","loving","loving","loyal","lucky","mature","modern","modest","neat","nice","nice","obedient","optimistic","painstaking","passionate","patient","peaceful","perfect","persistent","philosophical","pioneering","placid","placid","plausible","pleasant","plucky","plucky","polite","powerful","practical","pro-active","productive","protective","proud","punctual","quick-witted","quiet","quiet","rational","receptive","reflective","reliable","relieved","reserved","resolute","resourceful","responsible","rhetorical","righteous","romantic","romantic","sedate","seemly","selective","self-assured","self-confident","self-disciplined","sensible","sensitive","sensitive","shrewd","shy","silly","sincere","sincere","skillful","smiling","sociable","splendid","steadfast","stimulating","straightforward","successful","succinct","sympathetic","talented","thoughtful","thoughtful","thrifty","tidy","tough","tough","trustworthy","unassuming","unbiased","understanding","unusual","upbeat","versatile","vigorous","vivacious","warm","warmhearted","willing","willing","wise","witty","witty","wonderful"],h=["a","e","i","o","u","y"],c=["the {{noun}} is {{a_noun}}","{{a_noun}} is {{an_adjective}} {{noun}}","the first {{adjective}} {{noun}} is, in its own way, {{a_noun}}","their {{noun}} was, in this moment, {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}} from the right perspective","the literature would have us believe that {{an_adjective}} {{noun}} is not but {{a_noun}}","{{an_adjective}} {{noun}} is {{a_noun}} of the mind","the {{adjective}} {{noun}} reveals itself as {{an_adjective}} {{noun}} to those who look","authors often misinterpret the {{noun}} as {{an_adjective}} {{noun}}, when in actuality it feels more like {{an_adjective}} {{noun}}","we can assume that any instance of {{a_noun}} can be construed as {{an_adjective}} {{noun}}","they were lost without the {{adjective}} {{noun}} that composed their {{noun}}","the {{adjective}} {{noun}} comes from {{an_adjective}} {{noun}}","{{a_noun}} can hardly be considered {{an_adjective}} {{noun}} without also being {{a_noun}}","few can name {{an_adjective}} {{noun}} that isn't {{an_adjective}} {{noun}}","some posit the {{adjective}} {{noun}} to be less than {{adjective}}","{{a_noun}} of the {{noun}} is assumed to be {{an_adjective}} {{noun}}","{{a_noun}} sees {{a_noun}} as {{an_adjective}} {{noun}}","the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}}'s {{noun}}","{{a_noun}} is the {{noun}} of {{a_noun}}","{{an_adjective}} {{noun}}'s {{noun}} comes with it the thought that the {{adjective}} {{noun}} is {{a_noun}}","{{nouns}} are {{adjective}} {{nouns}}","{{adjective}} {{nouns}} show us how {{nouns}} can be {{nouns}}","before {{nouns}}, {{nouns}} were only {{nouns}}","those {{nouns}} are nothing more than {{nouns}}","some {{adjective}} {{nouns}} are thought of simply as {{nouns}}","one cannot separate {{nouns}} from {{adjective}} {{nouns}}","the {{nouns}} could be said to resemble {{adjective}} {{nouns}}","{{an_adjective}} {{noun}} without {{nouns}} is truly a {{noun}} of {{adjective}} {{nouns}}"],p=["to be more specific, ","in recent years, ","however, ","by the way","of course, ","some assert that ","if this was somewhat unclear, ","unfortunately, that is wrong; on the contrary, ","it's very tricky, if not impossible, ","this could be, or perhaps ","this is not to discredit the idea that ","we know that ","it's an undeniable fact, really; ","framed in a different way, ","what we don't know for sure is whether or not ","as far as we can estimate, ","as far as he is concerned, ","the zeitgeist contends that ","though we assume the latter, ","far from the truth, ","extending this logic, ","nowhere is it disputed that ","in modern times ","in ancient times ","recent controversy aside, ","washing and polishing the car,","having been a gymnast, ","after a long day at school and work, ","waking to the buzz of the alarm clock, ","draped neatly on a hanger, ","shouting with happiness, "],g=["noun","a_noun","nouns","adjective","an_adjective"],m={noun:function(){return o(d)},a_noun:function(){return u(o(d))},nouns:function(){return l(o(d))},adjective:function(){return o(f)},an_adjective:function(){return u(o(f))}},v=function(){return function(e){var t=e,n=e.match(/\{\{(.+?)\}\}/g);if(n&&n.length)for(var i=0;i<n.length;i++){var a=n[i].replace("{{","").replace("}}","").replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," "),r=void 0;g.includes(a)&&(r=m[a]()),t=t.replace(n[i],r)}return t}(o(c))},y=function(){var e,t=(Math.random()<.33?o(p):"")+v();if(t=t.charAt(0).toUpperCase()+t.slice(1),t+=(e=".......!?!?;...".split(""),o(e)),Math.random()>=.9){t=o(["He said","She said","In his own words","In her own words","Yelling","Wispering","Quoting with intend"])+': "'+t+'"'}return t},w=function(e){void 0===e&&(e=0),e||(e=s(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=y();n.push(i)}return n.join(" ")},b=function(e){void 0===e&&(e=0),e||(e=s(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=w();n.push(i)}return n.join("\n\n")},M=new e;function j(e,t){var n=new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())),i=""+(n.getMonth()+1),a=""+n.getDate(),r=n.getFullYear(),s=""+n.getHours(),o=""+n.getMinutes(),l=""+n.getSeconds();return i.length<2&&(i="0"+i),a.length<2&&(a="0"+a),s.length<2&&(s="0"+s),o.length<2&&(o="0"+o),l.length<2&&(l="0"+l),[r,i,a].join("-")+"T"+[s,o,l].join(":")+"+01:00"}function _(e){var t,n=Math.min.apply(Math,e),i=Math.max.apply(Math,e),a=[];for(t=n;t<=i;t++)-1==e.indexOf(t)&&a.push(t);return a.length>0&&{start:Math.min.apply(Math,a),end:Math.max.apply(Math,a)}}function k(e){if(!isFinite(e))return 0;for(var t=1,n=0;Math.round(e*t)/t!==e;)t*=10,n++;return n}function W(e){for(var t=0,n=0,i=e;n<i.length;n+=1){var a=k(i[n]);a>t&&(t=a)}return t}function x(e){for(var t,n=!0,i=0,a=e;i<a.length;i+=1)if(P(t=a[i])!==t){n=!1;break}return n}function T(e){return Math.min.apply(Math,e)}function q(e){return Math.max.apply(Math,e)}function C(e){for(var t,n,i=999999999,a=0,r=e;a<r.length;a+=1){t=r[a];for(var s=0,o=e;s<o.length;s+=1)t!==(n=o[s])&&Math.abs(t-n)<i&&(i=Math.abs(t-n))}return i}function z(e,t,n){var i,a;return arguments.length<2&&(t=e,e=0),n||(n=1),i=(t-e)/n,a=Math.random(),a*=i,a=Math.floor(a),a*=n,a+=e}function O(e){return Math.max.apply(Math,e.map(function(e){return e.length}))}function D(e){return Math.min.apply(Math,e.map(function(e){return e.split(" ").length}))}function S(e){return Math.max.apply(Math,e.map(function(e){return e.split(" ").length}))}function E(e){return Math.min.apply(Math,e.map(function(e){return e.split(/[\.\!\?]+/).length}))}function $(e){return Math.max.apply(Math,e.map(function(e){return e.split(/[\.\!\?]+/).length}))}function I(e){return Math.min.apply(Math,e.map(function(e){return e.replace(/\n$/gm,"").split(/\n/).length}))}function N(e){return Math.max.apply(Math,e.map(function(e){return e.replace(/\n$/gm,"").split(/\n/).length}))}function U(e){return new Date(Math.min.apply(null,e))}function F(e){return new Date(Math.max.apply(null,e))}function L(e){for(var t=[],n=0,i=e;n<i.length;n+=1)t.push(new Date(i[n]));return t}function P(e){return e.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})}function J(e,t){for(var n,i={},a=[],r=0,s=e;r<s.length;r+=1)void 0===i[n=s[r]]?i[n]=1:i[n]++;for(var o=0,l=t;o<l.length;o+=1)a.push(i[n=l[o]]);return a}function Y(e,a){if(e=String(e),"slug"===a)return t(e,{lower:!0});if("lower"===a)return e.toLowerCase();if("uppper"===a)return e.toLowerCase();if("md5"===a)return n(e);if("capitalize"===a)return P(e);if("trim"===a)return e.replace(/\s/g,"");if("optional"===a&&Math.random()>=.5)return"";if("date:"===a.substring(0,5)){var r=a.split(":");return i.format(new Date(e),r[1])}return e}function A(e,t){for(var n=Y(e,t[1]),i=2;t.length>i;)n=Y(n,t[i]),i++;return n}function H(e,t,n){var i=!1,a=t.slice(0),r=e;if(0===t.length)return null;for(;!i;){var s=a.shift();if(void 0===r[s+"_id"])return void 0!==r[s]?void 0!==r[s][t[t.length-1]]?r[s][t[t.length-1]]:"object"!=typeof r[s]?r[s]:null:null;var o=void 0,u=l(s);if(void 0!==n[u])for(o in n[u])n[u][o].id===r[s+"_id"]&&(r=n[u][o]);0===a.length&&(i=!0)}return null}function Q(e){var t="undefined",n=!1;return"boolean"==typeof e?t="boolean":"number"==typeof e?t=Math.round(e)===e?"int":"float":"string"==typeof e?/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(e)?t="date":!function(e){return/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\+[0-9]{2}:[0-9]{2}$/.test(e)}(e)?!function(e){return/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/.test(e)}(e)?1===e.length?t="char":(/{{\s*([\w\.\?\|\:]+)\s*}}/.test(e)&&(n=!0),t="string"):t="time":t="datetime":"object"==typeof e&&(t="JSON"),{fieldType:t,containsTemplate:n}}var B,G=new e;B=c.concat(["congratulations to the {{noun}} that won the {{adjective}} {{noun}} with {{a_noun}}","incomprehensibilities of a {{adjective}} {{noun}} and {{a_noun}} made {{a_noun}} {{adjective}}"]),c=function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(B),module.exports=function(e){var t,n,i,s,o,l,u,d,f,h,c,p,g=[];for(t in e){var v={key:t,minID:1,maxID:1,totalCount:0,fields:{}},k=void 0,Y=void 0;for(k in e[t])for(Y in e[t][k]){var B=e[t][k][Y],K=Q(B),R=K.fieldType,V=K.containsTemplate;if(void 0===v.fields[Y]?v.fields[Y]={types:[R],entries:[B],allEntries:[B],containsTemplate:V,cnt:1}:(v.fields[Y].types.push(R),v.fields[Y].types=a.uniq(v.fields[Y].types),v.fields[Y].entries.push(B),v.fields[Y].entries=a.uniq(v.fields[Y].entries),v.fields[Y].allEntries.push(B),v.fields[Y].cnt++,V&&(v.fields[Y].containsTemplate=!0)),"JSON"==R){var X=void 0;for(X in B){var Z=B[X],ee=Q(Z),te=ee.fieldType,ne=ee.containsTemplate;void 0===v.fields[Y+"."+X]?v.fields[Y+"."+X]={types:[te],entries:[Z],allEntries:[Z],containsTemplate:ne,cnt:1}:(v.fields[Y+"."+X].types.push(te),v.fields[Y+"."+X].types=a.uniq(v.fields[Y+"."+X].types),v.fields[Y+"."+X].entries.push(Z),v.fields[Y+"."+X].entries=a.uniq(v.fields[Y+"."+X].entries),v.fields[Y+"."+X].allEntries.push(Z),v.fields[Y+"."+X].cnt++,ne&&(v.fields[Y+"."+X].objContainsTemplate=!0))}}}for(Y in v.fields)"id"===Y&&(v.totalCount=v.fields[Y].cnt),1===v.fields[Y].types.length&&(v.fields[Y].type=v.fields[Y].types[0]),v.fields[Y].entries.length<v.fields[Y].cnt||v.fields[Y].containsTemplate?(v.fields[Y].repeatEntries=!0,v.fields[Y].weights=J(v.fields[Y].allEntries,v.fields[Y].entries)):v.fields[Y].repeatEntries=!1,v.fields[Y].required=!(v.fields[Y].cnt<v.totalCount);v.gap=_(v.fields.id.entries),g.push(v)}for(t in g){var ie=g[t];if(ie.gap){var ae=void 0,re=void 0;for(ae=ie.gap.start;ae<=ie.gap.end;ae++){var se={};for(re in ie.fields){var oe="";if(ie.fields[re].repeatEntries||ie.fields[re].containsTemplate)oe=G.weighted(ie.fields[re].entries,ie.fields[re].weights);else{if("id"===re&&(oe=ae),"age"!==re&&!re.endsWith(".age")||"int"!==ie.fields[re].type||(oe=G.age()),"firstname"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=G.first()),"lastname"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=G.last()),"company"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=G.company()),"country"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=G.country()),"email"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=r.internet.exampleEmail()),"color"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=G.color()),"ip"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=G.ip()),"profession"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=G.profession()),"url"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=G.url()),"city"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=G.city()),"street"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=G.street()),"zip"!==re&&!re.endsWith(".age")||"int"!==ie.fields[re].type||(oe=parseInt(G.zip())),"weekday"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=G.weekday()),"year"!==re&&!re.endsWith(".age")||"int"!==ie.fields[re].type||(oe=parseInt(G.year())),"password"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=G.hash()),"guid"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=G.guid()),"product"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=r.commerce.productName()),"material"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=r.commerce.productMaterial()),"iban"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=r.finance.iban()),"bic"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=r.finance.bic()),"avatar"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=r.image.avatar()),"username"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=r.internet.userName()),"homepage"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=r.internet.url()),"job"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=r.name.jobTitle()),"mimetype"!==re&&!re.endsWith(".age")||"string"!==ie.fields[re].type||(oe=r.system.mimeType()),""===oe&&"JSON"===ie.fields[re].type&&(oe={}),""===oe&&"string"===ie.fields[re].type){var le=Math.min.apply(Math,ie.fields[re].entries.map(function(e){return e.length})),ue=O(ie.fields[re].entries),de=D(ie.fields[re].entries),fe=S(ie.fields[re].entries),he=E(ie.fields[re].entries),ce=$(ie.fields[re].entries),pe=I(ie.fields[re].entries),ge=N(ie.fields[re].entries);oe=ge>1?b(Math.floor(Math.random()*ge)+pe):ce>1?w(Math.floor(Math.random()*ce)+he):fe>1?G.sentence({words:Math.floor(Math.random()*fe)+de}).slice(0,-1):ie.fields[re].entries[0][0].toUpperCase()===ie.fields[re].entries[0][0]?G.capitalize(G.word({length:Math.floor(Math.random()*le)+ue})):G.string({length:Math.floor(Math.random()*le)+ue}),ie.fields[re].entries[0]===ie.fields[re].entries[0].toUpperCase()?oe=oe.toUpperCase():ie.fields[re].entries[0]===ie.fields[re].entries[0].toLowerCase()?oe=oe.toLowerCase():x(ie.fields[re].entries)&&(oe=P(oe))}if(""===oe&&"int"===ie.fields[re].type)oe=z(T(ie.fields[re].entries),q(ie.fields[re].entries),C(ie.fields[re].entries));if(""===oe&&"float"===ie.fields[re].type){var me=T(ie.fields[re].entries),ve=q(ie.fields[re].entries),ye=W(ie.fields[re].entries);oe=Number((Math.random()*ve+me).toFixed(ye))}if(""===oe&&"char"===ie.fields[re].type&&(oe=ie.fields[re].entries[0]===ie.fields[re].entries[0].toUpperCase()?G.letter({casing:"upper"}):ie.fields[re].entries[0]===ie.fields[re].entries[0].toLowerCase()?G.letter({casing:"lower"}):G.letter()),""===oe&&"date"===ie.fields[re].type){var we=U(L(ie.fields[re].entries)),be=F(L(ie.fields[re].entries));u=we,d=be,f=void 0,h=void 0,c=void 0,p=void 0,f=new Date(u.getTime()+Math.random()*(d.getTime()-u.getTime())),h=""+(f.getMonth()+1),c=""+f.getDate(),p=f.getFullYear(),h.length<2&&(h="0"+h),c.length<2&&(c="0"+c),oe=[p,h,c].join("-")}if(""===oe&&"datetime"===ie.fields[re].type)oe=j(U(L(ie.fields[re].entries)),F(L(ie.fields[re].entries)));""===oe&&"time"===ie.fields[re].type&&(s=void 0,o=void 0,l=void 0,s=String(M.hour({twentyfour:!0})),o=String(M.minute()),l=String(M.second()),oe=[s,o,l].join(":"))}if(ie.fields[re].required||Math.random()>=.5)if(re.indexOf(".")>-1){var Me=re.split(".");void 0!==se[Me[0]]&&(se[Me[0]][Me[1]]=oe)}else se[re]=oe}e[ie.key].push(se)}}}for(t in e)for(n in e[t])for(i in e[t][n]){var je=e[t][n][i];"string"==typeof je&&(e[t][n][i]=je.replace(/{{\s*([\w\.\?\|\:]+)\s*}}/g,function(i,a){var r=a.split("?"),s=r[0].split("|"),o=s[0].split(".");if("number"===o[0]&&1===o.length)return Math.floor(10*Math.random());if("sentence"===o[0]&&1===o.length)return y();if("word"===o[0]&&2===o.length){if(void 0!==m[o[1]])return s.length>1?A(m[o[1]](),s):m[o[1]]()}else{if("field"===o[0]&&2===o.length&&void 0!==e[t][n][o[1]])return s.length>1?A(e[t][n][o[1]],s):e[t][n][o[1]];if("field"===o[0]&&o.length>2){var l=o.slice(1),u=H(e[t][n],l,e);if(null!==u)return s.length>1?A(u,s):u;if(r.length>1)return r[1]}else if(r.length>1)return r[1]}return i}),e[t][n][i]=e[t][n][i].replace(/  +/g," "))}return e}});
//# sourceMappingURL=blowson.umd.js.map
