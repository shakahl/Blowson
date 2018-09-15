import e from"chance";import t from"slugify";import n from"md5";import{format as i}from"date-fns";import a from"lodash";import r from"faker";var o=function(e,t){var n=e,i=t-e+1;return Math.floor(Math.random()*i)+n},s=function(e){for(var t;!t;)t=e[o(0,e.length-1)];return t},l=function(e){return e.endsWith("s")?e:(e.match(/(ss|ish|ch|x|us)$/)?e+="e":e.endsWith("y")&&!c.includes(e.charAt(e.length-2))&&(e=e.slice(0,e.length-1),e+="ie"),e+"s")},u=function(e){var t="a";return e.match(/^(a|e|i|o)/)&&(t="an"),t+" "+e},d=["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee","cow","crocodile","deer","dog","dolphin","duck","eagle","elephant","fish","fly","fox","frog","giraffe","goat","goldfish","hamster","hippopotamus","horse","kangaroo","kitten","lion","lobster","monkey","octopus","owl","panda","pig","puppy","rabbit","rat","scorpion","seal","shark","sheep","snail","snake","spider","squirrel","tiger","turtle","wolf","zebra","apple","apricot","banana","blackberry","blueberry","cherry","cranberry","currant","fig","grape","grapefruit","grapes","kiwi","kumquat","lemon","lime","melon","nectarine","orange","peach","pear","persimmon","pineapple","plum","pomegranate","prune","raspberry","strawberry","tangerine","watermelon"],f=["adaptable","adventurous","affable","affectionate","agreeable","alert","alluring","ambitious","ambitious","amiable","amicable","amused","amusing","boundless","brave","brave","bright","bright","broad-minded","calm","calm","capable","careful","charming","charming","cheerful","coherent","comfortable","communicative","compassionate","confident","conscientious","considerate","convivial","cooperative","courageous","courageous","courteous","creative","credible","cultured","dashing","dazzling","debonair","decisive","decisive","decorous","delightful","detailed","determined","determined","diligent","diligent","diplomatic","discreet","discreet","dynamic","dynamic","eager","easygoing","efficient","elated","eminent","emotional","enchanting","encouraging","endurable","energetic","energetic","entertaining","enthusiastic","enthusiastic","excellent","excited","exclusive","exuberant","exuberant","fabulous","fair","fair-minded","faithful","faithful","fantastic","fearless","fearless","fine","forceful","frank","frank","friendly","friendly","funny","funny","generous","generous","gentle","gentle","glorious","good","good","gregarious","happy","hard-working","harmonious","helpful","helpful","hilarious","honest","honorable","humorous","imaginative","impartial","impartial","independent","industrious","instinctive","intellectual","intelligent","intuitive","inventive","jolly","joyous","kind","kind","kind-hearted","knowledgeable","level","likeable","lively","lovely","loving","loving","loyal","lucky","mature","modern","modest","neat","nice","nice","obedient","optimistic","painstaking","passionate","patient","peaceful","perfect","persistent","philosophical","pioneering","placid","placid","plausible","pleasant","plucky","plucky","polite","powerful","practical","pro-active","productive","protective","proud","punctual","quick-witted","quiet","quiet","rational","receptive","reflective","reliable","relieved","reserved","resolute","resourceful","responsible","rhetorical","righteous","romantic","romantic","sedate","seemly","selective","self-assured","self-confident","self-disciplined","sensible","sensitive","sensitive","shrewd","shy","silly","sincere","sincere","skillful","smiling","sociable","splendid","steadfast","stimulating","straightforward","successful","succinct","sympathetic","talented","thoughtful","thoughtful","thrifty","tidy","tough","tough","trustworthy","unassuming","unbiased","understanding","unusual","upbeat","versatile","vigorous","vivacious","warm","warmhearted","willing","willing","wise","witty","witty","wonderful"],c=["a","e","i","o","u","y"],h=["the {{noun}} is {{a_noun}}","{{a_noun}} is {{an_adjective}} {{noun}}","the first {{adjective}} {{noun}} is, in its own way, {{a_noun}}","their {{noun}} was, in this moment, {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}} from the right perspective","the literature would have us believe that {{an_adjective}} {{noun}} is not but {{a_noun}}","{{an_adjective}} {{noun}} is {{a_noun}} of the mind","the {{adjective}} {{noun}} reveals itself as {{an_adjective}} {{noun}} to those who look","authors often misinterpret the {{noun}} as {{an_adjective}} {{noun}}, when in actuality it feels more like {{an_adjective}} {{noun}}","we can assume that any instance of {{a_noun}} can be construed as {{an_adjective}} {{noun}}","they were lost without the {{adjective}} {{noun}} that composed their {{noun}}","the {{adjective}} {{noun}} comes from {{an_adjective}} {{noun}}","{{a_noun}} can hardly be considered {{an_adjective}} {{noun}} without also being {{a_noun}}","few can name {{an_adjective}} {{noun}} that isn't {{an_adjective}} {{noun}}","some posit the {{adjective}} {{noun}} to be less than {{adjective}}","{{a_noun}} of the {{noun}} is assumed to be {{an_adjective}} {{noun}}","{{a_noun}} sees {{a_noun}} as {{an_adjective}} {{noun}}","the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}}'s {{noun}}","{{a_noun}} is the {{noun}} of {{a_noun}}","{{an_adjective}} {{noun}}'s {{noun}} comes with it the thought that the {{adjective}} {{noun}} is {{a_noun}}","{{nouns}} are {{adjective}} {{nouns}}","{{adjective}} {{nouns}} show us how {{nouns}} can be {{nouns}}","before {{nouns}}, {{nouns}} were only {{nouns}}","those {{nouns}} are nothing more than {{nouns}}","some {{adjective}} {{nouns}} are thought of simply as {{nouns}}","one cannot separate {{nouns}} from {{adjective}} {{nouns}}","the {{nouns}} could be said to resemble {{adjective}} {{nouns}}","{{an_adjective}} {{noun}} without {{nouns}} is truly a {{noun}} of {{adjective}} {{nouns}}"],p=["to be more specific, ","in recent years, ","however, ","by the way","of course, ","some assert that ","if this was somewhat unclear, ","unfortunately, that is wrong; on the contrary, ","it's very tricky, if not impossible, ","this could be, or perhaps ","this is not to discredit the idea that ","we know that ","it's an undeniable fact, really; ","framed in a different way, ","what we don't know for sure is whether or not ","as far as we can estimate, ","as far as he is concerned, ","the zeitgeist contends that ","though we assume the latter, ","far from the truth, ","extending this logic, ","nowhere is it disputed that ","in modern times ","in ancient times ","recent controversy aside, ","washing and polishing the car,","having been a gymnast, ","after a long day at school and work, ","waking to the buzz of the alarm clock, ","draped neatly on a hanger, ","shouting with happiness, "],g=["noun","a_noun","nouns","adjective","an_adjective"],m={noun:function(){return s(d)},a_noun:function(){return u(s(d))},nouns:function(){return l(s(d))},adjective:function(){return s(f)},an_adjective:function(){return u(s(f))}},v=function(){return function(e){var t=e,n=e.match(/\{\{(.+?)\}\}/g);if(n&&n.length)for(var i=0;i<n.length;i++){var a=n[i].replace("{{","").replace("}}","").replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," "),r=void 0;g.includes(a)&&(r=m[a]()),t=t.replace(n[i],r)}return t}(s(h))},y=function(){var e,t=(Math.random()<.33?s(p):"")+v();return t=t.charAt(0).toUpperCase()+t.slice(1),t+=(e=".......!?!?;...".split(""),s(e))},w=function(e){void 0===e&&(e=0),e||(e=o(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=y();n.push(i)}return n.join(" ")},b=function(e){void 0===e&&(e=0),e||(e=o(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=w();n.push(i)}return n.join("\n\n")},M=new e;function j(e,t){var n=new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())),i=""+(n.getMonth()+1),a=""+n.getDate(),r=n.getFullYear(),o=""+n.getHours(),s=""+n.getMinutes(),l=""+n.getSeconds();return i.length<2&&(i="0"+i),a.length<2&&(a="0"+a),o.length<2&&(o="0"+o),s.length<2&&(s="0"+s),l.length<2&&(l="0"+l),[r,i,a].join("-")+"T"+[o,s,l].join(":")+"+01:00"}function _(e){var t,n=Math.min.apply(Math,e),i=Math.max.apply(Math,e),a=[];for(t=n;t<=i;t++)-1==e.indexOf(t)&&a.push(t);return a.length>0&&{start:Math.min.apply(Math,a),end:Math.max.apply(Math,a)}}function k(e){if(!isFinite(e))return 0;for(var t=1,n=0;Math.round(e*t)/t!==e;)t*=10,n++;return n}function x(e){for(var t=0,n=0,i=e;n<i.length;n+=1){var a=k(i[n]);a>t&&(t=a)}return t}function C(e){for(var t,n=!0,i=0,a=e;i<a.length;i+=1)if(J(t=a[i])!==t){n=!1;break}return n}function T(e){return Math.min.apply(Math,e)}function z(e){return Math.max.apply(Math,e)}function D(e){for(var t,n,i=999999999,a=0,r=e;a<r.length;a+=1){t=r[a];for(var o=0,s=e;o<s.length;o+=1)t!==(n=s[o])&&Math.abs(t-n)<i&&(i=Math.abs(t-n))}return i}function q(e,t,n){var i,a;return arguments.length<2&&(t=e,e=0),n||(n=1),i=(t-e)/n,a=Math.random(),a*=i,a=Math.floor(a),a*=n,a+=e}function S(e){return Math.max.apply(Math,e.map(function(e){return e.length}))}function E(e){return Math.min.apply(Math,e.map(function(e){return e.split(" ").length}))}function $(e){return Math.max.apply(Math,e.map(function(e){return e.split(" ").length}))}function U(e){return Math.min.apply(Math,e.map(function(e){return e.split(/[\.\!\?]+/).length}))}function L(e){return Math.max.apply(Math,e.map(function(e){return e.split(/[\.\!\?]+/).length}))}function N(e){return Math.min.apply(Math,e.map(function(e){return e.replace(/\n$/gm,"").split(/\n/).length}))}function F(e){return Math.max.apply(Math,e.map(function(e){return e.replace(/\n$/gm,"").split(/\n/).length}))}function I(e){return new Date(Math.min.apply(null,e))}function O(e){return new Date(Math.max.apply(null,e))}function A(e){for(var t=[],n=0,i=e;n<i.length;n+=1)t.push(new Date(i[n]));return t}function J(e){return e.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})}function W(e){return/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\+[0-9]{2}:[0-9]{2}$/.test(e)}function Y(e){return/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/.test(e)}function H(e,t){for(var n,i={},a=[],r=0,o=e;r<o.length;r+=1)void 0===i[n=o[r]]?i[n]=1:i[n]++;for(var s=0,l=t;s<l.length;s+=1)a.push(i[n=l[s]]);return a}function B(e,a){if(e=String(e),"slug"===a)return t(e,{lower:!0});if("lower"===a)return e.toLowerCase();if("uppper"===a)return e.toLowerCase();if("md5"===a)return n(e);if("capitalize"===a)return J(e);if("optional"===a&&Math.random()>=.5)return"";if("date:"===a.substring(0,5)){var r=a.split(":");return i(new Date(e),r[1])}return e}function G(e,t){for(var n=B(e,t[1]),i=2;t.length>i;)n=B(n,t[i]),i++;return n}function K(e,t,n){var i=!1,a=t.slice(0),r=e;if(0===t.length)return null;for(;!i;){var o=a.shift();if(void 0===r[o+"_id"])return void 0!==r[o]?r[o]:null;var s=void 0,u=l(o);if(void 0!==n[u])for(s in n[u])n[u][s].id===r[o+"_id"]&&(r=n[u][s]);0===a.length&&(i=!0)}return null}var P,Q=new e;P=h.concat(["congratulations to the {{noun}} that won the {{adjective}} {{noun}} with {{a_noun}}","incomprehensibilities of a {{adjective}} {{noun}} and {{a_noun}} made {{a_noun}} {{adjective}}"]),h=function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(P),module.exports=function(e){var t,n,i,o,s,l,u,d,f,c,h,p,g=[];for(t in e){var v={key:t,minID:1,maxID:1,totalCount:0,fields:{}},k=void 0,B=void 0;for(k in e[t])for(B in e[t][k]){var P=e[t][k][B],R="undefined",V=!1;"boolean"==typeof P?R="boolean":"number"==typeof P?R=Math.round(P)===P?"int":"float":"string"==typeof P?/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(P)?R="date":W(P)?R="datetime":Y(P)?R="time":1===P.length?R="char":(/{{\s*([\w\.\?\|\:]+)\s*}}/.test(P)&&(V=!0),R="string"):"object"==typeof P&&(R="JSON"),void 0===v.fields[B]?v.fields[B]={types:[R],entries:[P],allEntries:[P],containsTemplate:V,cnt:1}:(v.fields[B].types.push(R),v.fields[B].types=a.uniq(v.fields[B].types),v.fields[B].entries.push(P),v.fields[B].entries=a.uniq(v.fields[B].entries),v.fields[B].allEntries.push(P),v.fields[B].cnt++,V&&(v.fields[B].containsTemplate=!0))}for(B in v.fields)"id"===B&&(v.totalCount=v.fields[B].cnt),1===v.fields[B].types.length&&(v.fields[B].type=v.fields[B].types[0]),v.fields[B].entries.length<v.fields[B].cnt||v.fields[B].containsTemplate?(v.fields[B].repeatEntries=!0,v.fields[B].weights=H(v.fields[B].allEntries,v.fields[B].entries)):v.fields[B].repeatEntries=!1,v.fields[B].required=!(v.fields[B].cnt<v.totalCount);v.gap=_(v.fields.id.entries),g.push(v)}for(t in g){var X=g[t];if(X.gap){var Z=void 0,ee=void 0;for(Z=X.gap.start;Z<=X.gap.end;Z++){var te={};for(ee in X.fields){var ne="";if(X.fields[ee].repeatEntries||X.fields[ee].containsTemplate)ne=Q.weighted(X.fields[ee].entries,X.fields[ee].weights);else{if("id"===ee&&(ne=Z),"age"===ee&&"int"===X.fields[ee].type&&(ne=Q.age()),"firstname"===ee&&"string"===X.fields[ee].type&&(ne=Q.first()),"lastname"===ee&&"string"===X.fields[ee].type&&(ne=Q.last()),"company"===ee&&"string"===X.fields[ee].type&&(ne=Q.company()),"country"===ee&&"string"===X.fields[ee].type&&(ne=Q.country()),"email"===ee&&"string"===X.fields[ee].type&&(ne=r.internet.exampleEmail()),"color"===ee&&"string"===X.fields[ee].type&&(ne=Q.color()),"ip"===ee&&"string"===X.fields[ee].type&&(ne=Q.ip()),"profession"===ee&&"string"===X.fields[ee].type&&(ne=Q.profession()),"url"===ee&&"string"===X.fields[ee].type&&(ne=Q.url()),"city"===ee&&"string"===X.fields[ee].type&&(ne=Q.city()),"street"===ee&&"string"===X.fields[ee].type&&(ne=Q.street()),"zip"===ee&&"int"===X.fields[ee].type&&(ne=parseInt(Q.zip())),"weekday"===ee&&"string"===X.fields[ee].type&&(ne=Q.weekday()),"year"===ee&&"int"===X.fields[ee].type&&(ne=parseInt(Q.year())),"password"===ee&&"string"===X.fields[ee].type&&(ne=Q.hash()),"guid"===ee&&"string"===X.fields[ee].type&&(ne=Q.guid()),"product"===ee&&"string"===X.fields[ee].type&&(ne=r.commerce.productName()),"material"===ee&&"string"===X.fields[ee].type&&(ne=r.commerce.productMaterial()),"iban"===ee&&"string"===X.fields[ee].type&&(ne=r.finance.iban()),"bic"===ee&&"string"===X.fields[ee].type&&(ne=r.finance.bic()),"avatar"===ee&&"string"===X.fields[ee].type&&(ne=r.image.avatar()),"username"===ee&&"string"===X.fields[ee].type&&(ne=r.internet.userName()),"homepage"===ee&&"string"===X.fields[ee].type&&(ne=r.internet.url()),"job"===ee&&"string"===X.fields[ee].type&&(ne=r.name.jobTitle()),"mimetype"===ee&&"string"===X.fields[ee].type&&(ne=r.system.mimeType()),""===ne&&"JSON"===X.fields[ee].type&&(ne={}),""===ne&&"string"===X.fields[ee].type){var ie=Math.min.apply(Math,X.fields[ee].entries.map(function(e){return e.length})),ae=S(X.fields[ee].entries),re=E(X.fields[ee].entries),oe=$(X.fields[ee].entries),se=U(X.fields[ee].entries),le=L(X.fields[ee].entries),ue=N(X.fields[ee].entries),de=F(X.fields[ee].entries);ne=de>1?b(Math.floor(Math.random()*de)+ue):le>1?w(Math.floor(Math.random()*le)+se):oe>1?Q.sentence({words:Math.floor(Math.random()*oe)+re}).slice(0,-1):X.fields[ee].entries[0][0].toUpperCase()===X.fields[ee].entries[0][0]?Q.capitalize(Q.word({length:Math.floor(Math.random()*ie)+ae})):Q.string({length:Math.floor(Math.random()*ie)+ae}),X.fields[ee].entries[0]===X.fields[ee].entries[0].toUpperCase()?ne=ne.toUpperCase():X.fields[ee].entries[0]===X.fields[ee].entries[0].toLowerCase()?ne=ne.toLowerCase():C(X.fields[ee].entries)&&(ne=J(ne))}if(""===ne&&"int"===X.fields[ee].type)ne=q(T(X.fields[ee].entries),z(X.fields[ee].entries),D(X.fields[ee].entries));if(""===ne&&"float"===X.fields[ee].type){var fe=T(X.fields[ee].entries),ce=z(X.fields[ee].entries),he=x(X.fields[ee].entries);ne=Number((Math.random()*ce+fe).toFixed(he))}if(""===ne&&"char"===X.fields[ee].type&&(ne=X.fields[ee].entries[0]===X.fields[ee].entries[0].toUpperCase()?Q.letter({casing:"upper"}):X.fields[ee].entries[0]===X.fields[ee].entries[0].toLowerCase()?Q.letter({casing:"lower"}):Q.letter()),""===ne&&"date"===X.fields[ee].type){var pe=I(A(X.fields[ee].entries)),ge=O(A(X.fields[ee].entries));u=pe,d=ge,f=void 0,c=void 0,h=void 0,p=void 0,f=new Date(u.getTime()+Math.random()*(d.getTime()-u.getTime())),c=""+(f.getMonth()+1),h=""+f.getDate(),p=f.getFullYear(),c.length<2&&(c="0"+c),h.length<2&&(h="0"+h),ne=[p,c,h].join("-")}if(""===ne&&"datetime"===X.fields[ee].type)ne=j(I(A(X.fields[ee].entries)),O(A(X.fields[ee].entries)));""===ne&&"time"===X.fields[ee].type&&(o=void 0,s=void 0,l=void 0,o=String(M.hour({twentyfour:!0})),s=String(M.minute()),l=String(M.second()),ne=[o,s,l].join(":"))}(X.fields[ee].required||Math.random()>=.5)&&(te[ee]=ne)}e[X.key].push(te)}}}for(t in e)for(n in e[t])for(i in e[t][n]){var me=e[t][n][i];"string"==typeof me&&(e[t][n][i]=me.replace(/{{\s*([\w\.\?\|\:]+)\s*}}/g,function(i,a){var r=a.split("?"),o=r[0].split("|"),s=o[0].split(".");if("number"===s[0]&&1===s.length)return Math.floor(10*Math.random());if("sentence"===s[0]&&1===s.length)return y();if("word"===s[0]&&2===s.length){if(void 0!==m[s[1]])return o.length>1?G(m[s[1]](),o):m[s[1]]()}else{if("field"===s[0]&&2===s.length&&void 0!==e[t][n][s[1]])return o.length>1?G(e[t][n][s[1]],o):e[t][n][s[1]];if("field"===s[0]&&s.length>2){var l=s.slice(1),u=K(e[t][n],l,e);if(null!==u)return o.length>1?G(u,o):u;if(r.length>1)return r[1]}else if(r.length>1)return r[1]}return i}),e[t][n][i]=e[t][n][i].replace(/  +/g," "))}return e};
//# sourceMappingURL=blowson.m.js.map
