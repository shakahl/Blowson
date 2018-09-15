function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(require("chance")),n=e(require("slugify")),i=e(require("md5")),r=require("date-fns"),a=e(require("lodash")),o=e(require("faker")),s=function(e,t){var n=e,i=t-e+1;return Math.floor(Math.random()*i)+n},l=function(e){for(var t;!t;)t=e[s(0,e.length-1)];return t},u=function(e){var t="a";return e.match(/^(a|e|i|o)/)&&(t="an"),t+" "+e},d=["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee","cow","crocodile","deer","dog","dolphin","duck","eagle","elephant","fish","fly","fox","frog","giraffe","goat","goldfish","hamster","hippopotamus","horse","kangaroo","kitten","lion","lobster","monkey","octopus","owl","panda","pig","puppy","rabbit","rat","scorpion","seal","shark","sheep","snail","snake","spider","squirrel","tiger","turtle","wolf","zebra","apple","apricot","banana","blackberry","blueberry","cherry","cranberry","currant","fig","grape","grapefruit","grapes","kiwi","kumquat","lemon","lime","melon","nectarine","orange","peach","pear","persimmon","pineapple","plum","pomegranate","prune","raspberry","strawberry","tangerine","watermelon"],f=["adaptable","adventurous","affable","affectionate","agreeable","alert","alluring","ambitious","ambitious","amiable","amicable","amused","amusing","boundless","brave","brave","bright","bright","broad-minded","calm","calm","capable","careful","charming","charming","cheerful","coherent","comfortable","communicative","compassionate","confident","conscientious","considerate","convivial","cooperative","courageous","courageous","courteous","creative","credible","cultured","dashing","dazzling","debonair","decisive","decisive","decorous","delightful","detailed","determined","determined","diligent","diligent","diplomatic","discreet","discreet","dynamic","dynamic","eager","easygoing","efficient","elated","eminent","emotional","enchanting","encouraging","endurable","energetic","energetic","entertaining","enthusiastic","enthusiastic","excellent","excited","exclusive","exuberant","exuberant","fabulous","fair","fair-minded","faithful","faithful","fantastic","fearless","fearless","fine","forceful","frank","frank","friendly","friendly","funny","funny","generous","generous","gentle","gentle","glorious","good","good","gregarious","happy","hard-working","harmonious","helpful","helpful","hilarious","honest","honorable","humorous","imaginative","impartial","impartial","independent","industrious","instinctive","intellectual","intelligent","intuitive","inventive","jolly","joyous","kind","kind","kind-hearted","knowledgeable","level","likeable","lively","lovely","loving","loving","loyal","lucky","mature","modern","modest","neat","nice","nice","obedient","optimistic","painstaking","passionate","patient","peaceful","perfect","persistent","philosophical","pioneering","placid","placid","plausible","pleasant","plucky","plucky","polite","powerful","practical","pro-active","productive","protective","proud","punctual","quick-witted","quiet","quiet","rational","receptive","reflective","reliable","relieved","reserved","resolute","resourceful","responsible","rhetorical","righteous","romantic","romantic","sedate","seemly","selective","self-assured","self-confident","self-disciplined","sensible","sensitive","sensitive","shrewd","shy","silly","sincere","sincere","skillful","smiling","sociable","splendid","steadfast","stimulating","straightforward","successful","succinct","sympathetic","talented","thoughtful","thoughtful","thrifty","tidy","tough","tough","trustworthy","unassuming","unbiased","understanding","unusual","upbeat","versatile","vigorous","vivacious","warm","warmhearted","willing","willing","wise","witty","witty","wonderful"],c=["a","e","i","o","u","y"],h=["the {{noun}} is {{a_noun}}","{{a_noun}} is {{an_adjective}} {{noun}}","the first {{adjective}} {{noun}} is, in its own way, {{a_noun}}","their {{noun}} was, in this moment, {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}} from the right perspective","the literature would have us believe that {{an_adjective}} {{noun}} is not but {{a_noun}}","{{an_adjective}} {{noun}} is {{a_noun}} of the mind","the {{adjective}} {{noun}} reveals itself as {{an_adjective}} {{noun}} to those who look","authors often misinterpret the {{noun}} as {{an_adjective}} {{noun}}, when in actuality it feels more like {{an_adjective}} {{noun}}","we can assume that any instance of {{a_noun}} can be construed as {{an_adjective}} {{noun}}","they were lost without the {{adjective}} {{noun}} that composed their {{noun}}","the {{adjective}} {{noun}} comes from {{an_adjective}} {{noun}}","{{a_noun}} can hardly be considered {{an_adjective}} {{noun}} without also being {{a_noun}}","few can name {{an_adjective}} {{noun}} that isn't {{an_adjective}} {{noun}}","some posit the {{adjective}} {{noun}} to be less than {{adjective}}","{{a_noun}} of the {{noun}} is assumed to be {{an_adjective}} {{noun}}","{{a_noun}} sees {{a_noun}} as {{an_adjective}} {{noun}}","the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}}'s {{noun}}","{{a_noun}} is the {{noun}} of {{a_noun}}","{{an_adjective}} {{noun}}'s {{noun}} comes with it the thought that the {{adjective}} {{noun}} is {{a_noun}}","{{nouns}} are {{adjective}} {{nouns}}","{{adjective}} {{nouns}} show us how {{nouns}} can be {{nouns}}","before {{nouns}}, {{nouns}} were only {{nouns}}","those {{nouns}} are nothing more than {{nouns}}","some {{adjective}} {{nouns}} are thought of simply as {{nouns}}","one cannot separate {{nouns}} from {{adjective}} {{nouns}}","the {{nouns}} could be said to resemble {{adjective}} {{nouns}}","{{an_adjective}} {{noun}} without {{nouns}} is truly a {{noun}} of {{adjective}} {{nouns}}"],p=["to be more specific, ","in recent years, ","however, ","by the way","of course, ","some assert that ","if this was somewhat unclear, ","unfortunately, that is wrong; on the contrary, ","it's very tricky, if not impossible, ","this could be, or perhaps ","this is not to discredit the idea that ","we know that ","it's an undeniable fact, really; ","framed in a different way, ","what we don't know for sure is whether or not ","as far as we can estimate, ","as far as he is concerned, ","the zeitgeist contends that ","though we assume the latter, ","far from the truth, ","extending this logic, ","nowhere is it disputed that ","in modern times ","in ancient times ","recent controversy aside, ","washing and polishing the car,","having been a gymnast, ","after a long day at school and work, ","waking to the buzz of the alarm clock, ","draped neatly on a hanger, ","shouting with happiness, "],g=["noun","a_noun","nouns","adjective","an_adjective"],m={noun:function(){return l(d)},a_noun:function(){return u(l(d))},nouns:function(){return(e=l(d)).endsWith("s")?e:(e.match(/(ss|ish|ch|x|us)$/)?e+="e":e.endsWith("y")&&!c.includes(e.charAt(e.length-2))&&(e=e.slice(0,e.length-1),e+="ie"),e+"s");var e},adjective:function(){return l(f)},an_adjective:function(){return u(l(f))}},v=function(){return function(e){var t=e,n=e.match(/\{\{(.+?)\}\}/g);if(n&&n.length)for(var i=0;i<n.length;i++){var r=n[i].replace("{{","").replace("}}","").replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," "),a=void 0;g.includes(r)&&(a=m[r]()),t=t.replace(n[i],a)}return t}(l(h))},y=function(){var e,t=(Math.random()<.33?l(p):"")+v();return t=t.charAt(0).toUpperCase()+t.slice(1),t+=(e=".......!?!?;...".split(""),l(e))},w=function(e){void 0===e&&(e=0),e||(e=s(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=y();n.push(i)}return n.join(" ")},b=function(e){void 0===e&&(e=0),e||(e=s(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=w();n.push(i)}return n.join("\n\n")},M=new t;function j(e,t){var n=new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())),i=""+(n.getMonth()+1),r=""+n.getDate(),a=n.getFullYear(),o=""+n.getHours(),s=""+n.getMinutes(),l=""+n.getSeconds();return i.length<2&&(i="0"+i),r.length<2&&(r="0"+r),o.length<2&&(o="0"+o),s.length<2&&(s="0"+s),l.length<2&&(l="0"+l),[a,i,r].join("-")+"T"+[o,s,l].join(":")+"+01:00"}function _(e){var t,n=Math.min.apply(Math,e),i=Math.max.apply(Math,e),r=[];for(t=n;t<=i;t++)-1==e.indexOf(t)&&r.push(t);return r.length>0&&{start:Math.min.apply(Math,r),end:Math.max.apply(Math,r)}}function k(e){if(!isFinite(e))return 0;for(var t=1,n=0;Math.round(e*t)/t!==e;)t*=10,n++;return n}function x(e){for(var t=0,n=0,i=e;n<i.length;n+=1){var r=k(i[n]);r>t&&(t=r)}return t}function q(e){for(var t,n=!0,i=0,r=e;i<r.length;i+=1)if(J(t=r[i])!==t){n=!1;break}return n}function C(e){return Math.min.apply(Math,e)}function z(e){return Math.max.apply(Math,e)}function D(e){for(var t,n,i=999999999,r=0,a=e;r<a.length;r+=1){t=a[r];for(var o=0,s=e;o<s.length;o+=1)t!==(n=s[o])&&Math.abs(t-n)<i&&(i=Math.abs(t-n))}return i}function T(e,t,n){var i,r;return arguments.length<2&&(t=e,e=0),n||(n=1),i=(t-e)/n,r=Math.random(),r*=i,r=Math.floor(r),r*=n,r+=e}function S(e){return Math.max.apply(Math,e.map(function(e){return e.length}))}function E(e){return Math.min.apply(Math,e.map(function(e){return e.split(" ").length}))}function $(e){return Math.max.apply(Math,e.map(function(e){return e.split(" ").length}))}function U(e){return Math.min.apply(Math,e.map(function(e){return e.split(/[\.\!\?]+/).length}))}function L(e){return Math.max.apply(Math,e.map(function(e){return e.split(/[\.\!\?]+/).length}))}function N(e){return Math.min.apply(Math,e.map(function(e){return e.replace(/\n$/gm,"").split(/\n/).length}))}function F(e){return Math.max.apply(Math,e.map(function(e){return e.replace(/\n$/gm,"").split(/\n/).length}))}function I(e){return new Date(Math.min.apply(null,e))}function O(e){return new Date(Math.max.apply(null,e))}function A(e){for(var t=[],n=0,i=e;n<i.length;n+=1)t.push(new Date(i[n]));return t}function J(e){return e.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})}function W(e){return/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\+[0-9]{2}:[0-9]{2}$/.test(e)}function Y(e){return/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/.test(e)}function H(e,t){for(var n,i={},r=[],a=0,o=e;a<o.length;a+=1)void 0===i[n=o[a]]?i[n]=1:i[n]++;for(var s=0,l=t;s<l.length;s+=1)r.push(i[n=l[s]]);return r}function B(e,t){if(e=String(e),"slug"===t)return n(e,{lower:!0});if("lower"===t)return e.toLowerCase();if("uppper"===t)return e.toLowerCase();if("md5"===t)return i(e);if("capitalize"===t)return J(e);if("optional"===t&&Math.random()>=.5)return"";if("date:"===t.substring(0,5)){var a=t.split(":");return r.format(new Date(e),a[1])}return e}function G(e,t){for(var n=B(e,t[1]),i=2;t.length>i;)n=B(n,t[i]),i++;return n}function K(e,t,n){var i=!1,r=t.slice(0),a=e;if(0===t.length)return null;for(;!i;){var o=r.shift();if(void 0===a[o+"_id"])return void 0!==a[o]?a[o]:null;var s=void 0;if(void 0!==n[o+"s"])for(s in n[o+"s"])n[o+"s"][s].id===a[o+"_id"]&&(a=n[o+"s"][s]);0===r.length&&(i=!0)}return null}var P,Q=new t;P=h.concat(["congratulations to the {{noun}} that won the {{adjective}} {{noun}} with {{a_noun}}","incomprehensibilities of a {{adjective}} {{noun}} and {{a_noun}} made {{a_noun}} {{adjective}}"]),h=function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(P),module.exports=function(e){var t,n,i,r,s,l,u,d,f,c,h,p,g=[];for(t in e){var v={key:t,minID:1,maxID:1,totalCount:0,fields:{}},k=void 0,B=void 0;for(k in e[t])for(B in e[t][k]){var P=e[t][k][B],R="undefined";"boolean"==typeof P?R="boolean":"number"==typeof P?R=Math.round(P)===P?"int":"float":"string"==typeof P?R=/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(P)?"date":W(P)?"datetime":Y(P)?"time":1===P.length?"char":"string":"object"==typeof P&&(R="JSON"),void 0===v.fields[B]?v.fields[B]={types:[R],entries:[P],allEntries:[P],cnt:1}:(v.fields[B].types.push(R),v.fields[B].types=a.uniq(v.fields[B].types),v.fields[B].entries.push(P),v.fields[B].entries=a.uniq(v.fields[B].entries),v.fields[B].allEntries.push(P),v.fields[B].cnt++)}for(B in v.fields)"id"===B&&(v.totalCount=v.fields[B].cnt),1===v.fields[B].types.length&&(v.fields[B].type=v.fields[B].types[0]),v.fields[B].entries.length<v.fields[B].cnt?(v.fields[B].repeatEntries=!0,v.fields[B].weights=H(v.fields[B].allEntries,v.fields[B].entries)):v.fields[B].repeatEntries=!1,v.fields[B].required=!(v.fields[B].cnt<v.totalCount);v.gap=_(v.fields.id.entries),g.push(v)}for(t in g){var V=g[t];if(V.gap){var X=void 0,Z=void 0;for(X=V.gap.start;X<=V.gap.end;X++){var ee={};for(Z in V.fields){var te="";if(V.fields[Z].repeatEntries)te=Q.weighted(V.fields[Z].entries,V.fields[Z].weights);else{if("id"===Z&&(te=X),"age"===Z&&"int"===V.fields[Z].type&&(te=Q.age()),"firstname"===Z&&"string"===V.fields[Z].type&&(te=Q.first()),"lastname"===Z&&"string"===V.fields[Z].type&&(te=Q.last()),"company"===Z&&"string"===V.fields[Z].type&&(te=Q.company()),"country"===Z&&"string"===V.fields[Z].type&&(te=Q.country()),"email"===Z&&"string"===V.fields[Z].type&&(te=o.internet.exampleEmail()),"color"===Z&&"string"===V.fields[Z].type&&(te=Q.color()),"ip"===Z&&"string"===V.fields[Z].type&&(te=Q.ip()),"profession"===Z&&"string"===V.fields[Z].type&&(te=Q.profession()),"url"===Z&&"string"===V.fields[Z].type&&(te=Q.url()),"city"===Z&&"string"===V.fields[Z].type&&(te=Q.city()),"street"===Z&&"string"===V.fields[Z].type&&(te=Q.street()),"zip"===Z&&"int"===V.fields[Z].type&&(te=parseInt(Q.zip())),"weekday"===Z&&"string"===V.fields[Z].type&&(te=Q.weekday()),"year"===Z&&"int"===V.fields[Z].type&&(te=parseInt(Q.year())),"password"===Z&&"string"===V.fields[Z].type&&(te=Q.hash()),"guid"===Z&&"string"===V.fields[Z].type&&(te=Q.guid()),"product"===Z&&"string"===V.fields[Z].type&&(te=o.commerce.productName()),"material"===Z&&"string"===V.fields[Z].type&&(te=o.commerce.productMaterial()),"iban"===Z&&"string"===V.fields[Z].type&&(te=o.finance.iban()),"bic"===Z&&"string"===V.fields[Z].type&&(te=o.finance.bic()),"avatar"===Z&&"string"===V.fields[Z].type&&(te=o.image.avatar()),"username"===Z&&"string"===V.fields[Z].type&&(te=o.internet.userName()),"homepage"===Z&&"string"===V.fields[Z].type&&(te=o.internet.url()),"job"===Z&&"string"===V.fields[Z].type&&(te=o.name.jobTitle()),"mimetype"===Z&&"string"===V.fields[Z].type&&(te=o.system.mimeType()),""===te&&"JSON"===V.fields[Z].type&&(te={}),""===te&&"string"===V.fields[Z].type){var ne=Math.min.apply(Math,V.fields[Z].entries.map(function(e){return e.length})),ie=S(V.fields[Z].entries),re=E(V.fields[Z].entries),ae=$(V.fields[Z].entries),oe=U(V.fields[Z].entries),se=L(V.fields[Z].entries),le=N(V.fields[Z].entries),ue=F(V.fields[Z].entries);te=ue>1?b(Math.floor(Math.random()*ue)+le):se>1?w(Math.floor(Math.random()*se)+oe):ae>1?Q.sentence({words:Math.floor(Math.random()*ae)+re}).slice(0,-1):V.fields[Z].entries[0][0].toUpperCase()===V.fields[Z].entries[0][0]?Q.capitalize(Q.word({length:Math.floor(Math.random()*ne)+ie})):Q.string({length:Math.floor(Math.random()*ne)+ie}),V.fields[Z].entries[0]===V.fields[Z].entries[0].toUpperCase()?te=te.toUpperCase():V.fields[Z].entries[0]===V.fields[Z].entries[0].toLowerCase()?te=te.toLowerCase():q(V.fields[Z].entries)&&(te=J(te))}if(""===te&&"int"===V.fields[Z].type)te=T(C(V.fields[Z].entries),z(V.fields[Z].entries),D(V.fields[Z].entries));if(""===te&&"float"===V.fields[Z].type){var de=C(V.fields[Z].entries),fe=z(V.fields[Z].entries),ce=x(V.fields[Z].entries);te=Number((Math.random()*fe+de).toFixed(ce))}if(""===te&&"char"===V.fields[Z].type&&(te=V.fields[Z].entries[0]===V.fields[Z].entries[0].toUpperCase()?Q.letter({casing:"upper"}):V.fields[Z].entries[0]===V.fields[Z].entries[0].toLowerCase()?Q.letter({casing:"lower"}):Q.letter()),""===te&&"date"===V.fields[Z].type){var he=I(A(V.fields[Z].entries)),pe=O(A(V.fields[Z].entries));u=he,d=pe,f=void 0,c=void 0,h=void 0,p=void 0,f=new Date(u.getTime()+Math.random()*(d.getTime()-u.getTime())),c=""+(f.getMonth()+1),h=""+f.getDate(),p=f.getFullYear(),c.length<2&&(c="0"+c),h.length<2&&(h="0"+h),te=[p,c,h].join("-")}if(""===te&&"datetime"===V.fields[Z].type)te=j(I(A(V.fields[Z].entries)),O(A(V.fields[Z].entries)));""===te&&"time"===V.fields[Z].type&&(r=void 0,s=void 0,l=void 0,r=String(M.hour({twentyfour:!0})),s=String(M.minute()),l=String(M.second()),te=[r,s,l].join(":"))}(V.fields[Z].required||Math.random()>=.5)&&(ee[Z]=te)}e[V.key].push(ee)}}}for(t in e)for(n in e[t])for(i in e[t][n]){var ge=e[t][n][i];"string"==typeof ge&&(e[t][n][i]=ge.replace(/{{\s*([\w\.\?\|\:]+)\s*}}/g,function(i,r){var a=r.split("?"),o=a[0].split("|"),s=o[0].split(".");if("number"===s[0]&&1===s.length)return Math.floor(10*Math.random());if("sentence"===s[0]&&1===s.length)return y();if("word"===s[0]&&2===s.length){if(void 0!==m[s[1]])return o.length>1?G(m[s[1]](),o):m[s[1]]()}else{if("field"===s[0]&&2===s.length&&void 0!==e[t][n][s[1]])return o.length>1?G(e[t][n][s[1]],o):e[t][n][s[1]];if("field"===s[0]&&s.length>2){var l=s.slice(1),u=K(e[t][n],l,e);if(null!==u)return o.length>1?G(u,o):u;if(a.length>1)return a[1]}else if(a.length>1)return a[1]}return i}),e[t][n][i]=e[t][n][i].replace(/  +/g," "))}return e};
//# sourceMappingURL=blowson.js.map