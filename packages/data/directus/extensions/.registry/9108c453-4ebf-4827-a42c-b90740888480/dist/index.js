import{useStores as e,useApi as t,useCollection as r,defineInterface as n}from"@directus/extensions-sdk";import{ref as i,computed as u,watch as l,defineComponent as o,toRefs as a,inject as f,resolveComponent as s,openBlock as c,createElementBlock as d,Fragment as p,normalizeStyle as m,createElementVNode as g,toDisplayString as y,createBlock as S,mergeProps as v,withCtx as h,createTextVNode as N,createCommentVNode as E}from"vue";function A(e,t){return(e.match(/{{.*?}}/g)||[]).some((e=>e.includes(t)))}const T=(r,n,o,a,f,s)=>{const c=t(),d=e().useUserStore(),p=i({__currentUser:d.currentUser});let m={},g={};const y=u((()=>JSON.stringify(r.value,((e,t)=>void 0===t?null:t))));return l(y,(async(e,t)=>{var r,i,u;const l=JSON.parse(e),y=void 0!==t?JSON.parse(t):{};if(!function(e,t,r,n){const i=[];for(const e of Object.keys({...n,...r}))e!==t&&r[e]!==n[e]&&JSON.stringify(r[e])!==JSON.stringify(n[e])&&i.push(e);return!i.length||i.some((t=>A(e,t)))}(s,a.value,l,y))return;for(const e of Object.keys(y))e in l||(l[e]=null);let S={};const v=l.id||f.value;for(const e of Object.keys(l)){const t=n.value.find((t=>{var r,n;return[null===(r=t.meta)||void 0===r?void 0:r.one_field,null===(n=t.meta)||void 0===n?void 0:n.many_field].includes(e)}));if(!t||!A(s,e))continue;const a=t.collection===o.value;let f=null!==(u=l[a?null===(r=t.meta)||void 0===r?void 0:r.many_field:null===(i=t.meta)||void 0===i?void 0:i.one_field])&&void 0!==u?u:{create:[],update:[],delete:[]},d=[],p=[];if(a)"number"==typeof f||"string"==typeof f?(f={update:[{id:f}]},"object"==typeof y[e]&&(m={},g={})):"object"==typeof f&&(f="id"in f?{update:[f]}:{create:[{...f}]});else{if(f instanceof Array&&!(y[e]instanceof Array)&&(m={},g={}),"+"!==v){let t;e in m?t=m[e]:(t=(await c.get(`items/${o.value}/${v}`,{params:{fields:[e]}})).data.data[e],m[e]=t),d=d.concat(t)}if(f.update){const e=f.update.map((({id:e})=>e));d=d.filter((t=>!e.includes(t)))}f.delete&&(d=d.filter((e=>!f.delete.includes(e))))}if(f.update&&(d=d.concat(f.update.map((({id:e})=>e)))),d.length){const e=a?t.related_collection:t.collection,r="directus_users"===e?"/users":`items/${e}`;if(e){let t;t=e in g&&d.every((t=>t in g[e]))?d.map((t=>g[e][t])):(await c.get(r,{params:{filter:{id:{_in:d.join(",")}}}})).data.data,p=t.map((t=>{var r;return e in g?g[e][t.id]=t:g[e]={[t.id]:t},{...t,...null===(r=f.update)||void 0===r?void 0:r.find((({id:e})=>t.id===e))}}))}}f.create&&(p=p.concat(f.create)),S[e]=a?p[0]:p}p.value={...l,...S,__currentUser:d.currentUser}}),{deep:!1,immediate:!0}),p},R=(e,t)=>{let r=e;for(const e of t.split(".")){if(!(e in r))return{value:null,found:!1};r=r[e]}return{value:r,found:!0}};function O(e){return"string"==typeof e||e instanceof String}function M(e,t,r={},n=!1){const i=function(e,t,r={},n=!1){var i,u,l,o,a,f,s,c,d,p,m,g,y,S,v,h,N,E,A,T,I;if(t){if((e=e.trim()).startsWith('"')&&e.endsWith('"'))return e.slice(1,-1).replace(/\\"/g,'"');let{value:U,found:b}=R(t,e);if(!b||null===U){let t=R(r,e);if(t.found)return t.value}if(b)return U;if("$NOW"===e)return new Date;if(e.startsWith("$CURRENT_USER"))return"$CURRENT_USER"===e?null===(i=t.__currentUser)||void 0===i?void 0:i.id:R({$CURRENT_USER:t.__currentUser},e).value;const C=function(e){const t=e.trim().match(/^([A-Z_]+)\((.+)\)$/);if(t){const e=[],r=t[1],n=t[2];let i=0,u=0,l=0,o=!1,a=!1;for(;u<n.length;u+=1){const t=n[u];if("("!==t||o)if(")"!==t||o)if(","!==t||o||0!==i)if('"'!==t||a){if("\\"===t&&o){a=!0;continue}}else o=!o;else e.push(n.slice(l,u).trim()),l=u+1;else i-=1;else i+=1;a=!1}return l<u&&e.push(n.slice(l,u).trim()),{op:r,args:e}}return null}(e);if(C){const{op:e,args:i}=C;if(1===i.length){const u=M(i[0],t,r,n);if("INT"===e)return parseInt(u);if("FLOAT"===e)return parseFloat(u);if("STRING"===e)return String(u);if("DATE"===e)return new Date(u);if("SLUG"===e)return function(e){if("string"!=typeof e)return"";let t=e.replace(/^\s+|\s+$/g,"");t=t.toLowerCase();const r="àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",n="aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";for(let e=0,i=r.length;e<i;e++)t=t.replace(new RegExp(r.charAt(e),"g"),n.charAt(e));return t=t.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-"),t}(u);if("CURRENCY"===e)return(new Intl.NumberFormat).format(u);if("DATE_ISO"===e)return new Date(u).toISOString();if("DATE_UTC"===e)return new Date(u).toUTCString();if("DATE_STR"===e){const e=new Date(u);return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`}if("TIME_STR"===e){const e=new Date(u);return`${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}:${e.getSeconds().toString().padStart(2,"0")}`}if(["YEAR","MONTH","GET_DATE","DAY","HOURS","MINUTES","SECONDS","TIME"].includes(e)){if(u instanceof Date){return u[{YEAR:"getFullYear",MONTH:"getMonth",GET_DATE:"getDate",DAY:"getDay",HOURS:"getHours",MINUTES:"getMinutes",SECONDS:"getSeconds",TIME:"getTime"}[e]]()}return 0}if("ABS"===e)return Math.abs(u);if("SQRT"===e)return Math.sqrt(u);if("SUM"===e)return u instanceof Array?u.reduce(((e,t)=>e+t),0):0;if("AVERAGE"===e)return u instanceof Array?u.reduce(((e,t)=>e+t),0)/u.length:0;if("CEIL"===e)return Math.ceil(u);if("FLOOR"===e)return Math.floor(u);if("ROUND"===e)return Math.round(u);if("EXP"===e)return Math.exp(u);if("LOG"===e)return Math.log(u);if("MAX"===e)return u instanceof Array?Math.max(...u):0;if("MIN"===e)return u instanceof Array?Math.min(...u):0;if("NULL"===e)return null===u;if("NOT_NULL"===e)return null!==u;if("NOT"===e)return!u;if("STR_LEN"===e)return String(u).length;if("LOWER"===e)return String(u).toLowerCase();if("UPPER"===e)return String(u).toUpperCase();if("TRIM"===e)return String(u).trim();if("ENCODE_URL_COMPONENT"===e)return encodeURIComponent(u);if("ARRAY_LEN"===e)return u instanceof Array?u.length:0;if("LENGTH"===e)return u instanceof Array||O(u)?u.length:null;if("FIRST"===e)return u instanceof Array||O(u)?u[0]:null;if("LAST"===e)return u instanceof Array||O(u)?u[u.length-1]:null;if("REVERSE"===e)return u instanceof Array?u.reverse():O(u)?u.split("").reverse().join(""):null;if("JSON_PARSE"===e)return JSON.parse(u);if("JSON_STRINGIFY"===e)return JSON.stringify(u)}else if(2===i.length){if("ASUM"===e)return null!==(l=null===(u=t[i[0]])||void 0===u?void 0:u.reduce(((e,t)=>e+M(i[1],t,{},n)),0))&&void 0!==l?l:0;if("AMIN"===e)return null!==(a=null===(o=t[i[0]])||void 0===o?void 0:o.reduce(((e,t)=>Math.min(e,M(i[1],t,{},n))),1/0))&&void 0!==a?a:0;if("AMAX"===e)return null!==(s=null===(f=t[i[0]])||void 0===f?void 0:f.reduce(((e,t)=>Math.max(e,M(i[1],t,{},n))),-1/0))&&void 0!==s?s:0;if("AAVG"===e){const e=null!==(c=t[i[0]])&&void 0!==c?c:[];return e.reduce(((e,t)=>e+M(i[1],t,{},n)),0)/e.length}if("AMUL"===e)return null!==(p=null===(d=t[i[0]])||void 0===d?void 0:d.reduce(((e,t)=>e*M(i[1],t,{},n)),1))&&void 0!==p?p:0;if("AAND"===e)return null!==(g=null===(m=t[i[0]])||void 0===m?void 0:m.reduce(((e,t)=>e&&M(i[1],t,{},n)),!0))&&void 0!==g&&g;if("AOR"===e)return null!==(S=null===(y=t[i[0]])||void 0===y?void 0:y.reduce(((e,t)=>e||M(i[1],t,{},n)),!1))&&void 0!==S&&S;if("ACOUNT"===e)return null!==(h=null===(v=t[i[0]])||void 0===v?void 0:v.reduce(((e,t)=>e+(M(i[1],t,{},n)?1:0)),0))&&void 0!==h?h:0;if("MAP"===e)return null!==(E=null===(N=t[i[0]])||void 0===N?void 0:N.map((e=>M(i[1],e,{},n))))&&void 0!==E?E:[];if("FILTER"===e)return null!==(T=null===(A=t[i[0]])||void 0===A?void 0:A.filter((e=>M(i[1],e,{},n))))&&void 0!==T?T:[];if("SORT"===e){const e=null!==(I=t[i[0]])&&void 0!==I?I:[],r=i[1];return[...e].sort(((e,t)=>{const i=M(r,e,{},n),u=M(r,t,{},n);return i<u?-1:i>u?1:0}))}const U=M(i[0],t,r,n),b=M(i[1],t,r,n);if("SUM"===e)return U+b;if("SUBTRACT"===e)return U-b;if("MULTIPLY"===e)return U*b;if("DIVIDE"===e)return U/b;if("REMAINDER"===e)return U%b;if("ROUND"===e)return U.toFixed(b);if("MAX"===e)return Math.max(U,b);if("MIN"===e)return Math.min(U,b);if("POWER"===e)return Math.pow(U,b);if("LEFT"===e)return String(U).slice(0,Number(b));if("RIGHT"===e)return String(U).slice(-Number(b));if("REPT"===e)return String(U).repeat(Number(b));if("JOIN"===e)return U instanceof Array?U.join(String(b)):"";if("SPLIT"===e)return String(U).split(String(b));if("SEARCH"===e){const e=String(U),t=String(b);return e.indexOf(t)}if("EQUAL"===e)return U===b;if("NOT_EQUAL"===e)return U!==b;if("GT"===e)return U>b;if("GTE"===e)return U>=b;if("LT"===e)return U<b;if("LTE"===e)return U<=b;if("AND"===e)return U&&b;if("OR"===e)return U||b;if("CONCAT"===e)return U instanceof Array?U.concat(b):String(U)+String(b);if("AT"===e)return U instanceof Array||O(U)?U[Number(b)]:null;if("INDEX_OF"===e)return U instanceof Array||O(U)?U.indexOf(b):null;if("INCLUDES"===e)return U instanceof Array||O(U)?U.includes(b):null;if("JSON_GET"===e)return"object"!=typeof U||Array.isArray(U)||null===U?null:R(U,b).value}else if(3===i.length){const u=M(i[0],t,r,n),l=M(i[1],t,r,n),o=M(i[2],t,r,n);if("IF"===e)return!0===u?l:o;if("MID"===e){const e=String(u),t=Number(l),r=Number(o);return e.slice(t,t+r)}if("SUBSTITUTE"===e){const e=String(u),t=String(l),r=String(o);return e.split(t).join(r)}if("SEARCH"===e){const e=String(u),t=String(l),r=Number(o);return e.indexOf(t,r)}if("LOCALE_STR"===e){const e=new Date(u),t=String(l);let r={};try{r=JSON.parse(o)}catch(e){}return e.toLocaleString(t,r)}if("RANGE"===e){const e=Number(u),t=Number(l),r=Number(o),n=[];if(r>0)for(let i=e;i<=t;i+=r)n.push(i);else if(r<0)for(let i=e;i>=t;i+=r)n.push(i);return n}if("SLICE"===e){if(u instanceof Array||O(u)){const e=Number(l),t=Number(o);return u.slice(e,t)}return null}}else if(i.length%2==0&&"IFS"===e){for(let e=0;e<i.length;e+=2)if(!0===M(i[e],t,r,n))return M(i[e+1],t,r,n);return null}}if(!isNaN(parseFloat(e)))return parseFloat(e);if(n)throw new Error(`Cannot parse expression: ${e}`)}return""}(e,t,r,n);return n&&console.log(`${e} =`,i),i}var I=o({props:{value:{type:[String,Number],default:null},field:{type:String,default:null},type:{type:String,default:null},collection:{type:String,default:""},primaryKey:{type:[String,Number],default:""},template:{type:String,default:""},mode:{type:String,default:null},prefix:{type:String,default:null},suffix:{type:String,default:null},customCss:{type:Object,default:null},debugMode:{type:Boolean,default:!1},computeIfEmpty:{type:Boolean,default:!1},initialCompute:{type:Boolean,default:!1}},emits:["input"],setup(t,{emit:n}){const u=r(t.collection).defaults,o=i(t.value),s=(t=>{const{useRelationsStore:r}=e(),{getRelationsForCollection:n}=r();return i(n(t))})(t.collection),{collection:c,field:d,primaryKey:p}=a(t),m=T(f("values"),s,c,d,p,t.template),g=i(null);return m&&l(m,(()=>{const e=function(){var e;try{const e=t.template.replace(/{{.*?}}/g,(e=>M(e.slice(2,-2).trim(),m.value,u.value,t.debugMode)));return g.value=null,["integer","decimal","bigInteger"].includes(t.type)?parseInt(e)||0:["float"].includes(t.type)?parseFloat(e)||0:e}catch(t){return g.value=null!==(e=t.message)&&void 0!==e?e:"Unknown error",null}}();o.value=e,"displayonly"!==t.mode&&e!==t.value&&setTimeout((()=>{n("input",e)}),1)}),{immediate:t.initialCompute||t.computeIfEmpty&&(null===t.value||void 0===t.value)}),{computedValue:o,errorMsg:g}}});const U={class:"prefix"},b={class:"computed-value"},C={class:"suffix"};I.render=function(e,t,r,n,i,u){const l=s("v-input"),o=s("v-notice");return c(),d(p,null,[e.mode?(c(),d("div",{key:0,style:m(e.customCss)},[g("span",U,y(e.prefix),1),g("span",b,y(e.computedValue),1),g("span",C,y(e.suffix),1)],4)):(c(),S(l,v({key:1},e.$attrs,{field:e.field,collection:e.collection,"primary-key":e.primaryKey,"model-value":e.value,"onUpdate:modelValue":t[0]||(t[0]=t=>e.$emit("input",t))}),null,16,["field","collection","primary-key","model-value"])),e.errorMsg?(c(),S(o,{key:2,type:"danger"},{default:h((()=>[N(y(e.errorMsg),1)])),_:1})):E("v-if",!0)],64)},I.__file="src/interface.vue";var _=n({id:"computed",name:"Computed",icon:"calculate",description:"Perform computed value based on other fields",component:I,types:["string","text","integer","decimal","bigInteger","float","boolean","alias"],group:"other",options:[{field:"template",name:"Template",type:"string",meta:{width:"full",interface:"input"}},{field:"mode",name:"Field Mode",type:"string",meta:{width:"full",interface:"select-dropdown",options:{allowNone:!0,choices:[{text:"Display Only",value:"displayonly"},{text:"Read Only",value:"readonly"}]}}},{field:"prefix",name:"Prefix",type:"string",meta:{width:"half",interface:"system-input-translated-string",options:{trim:!1}}},{field:"suffix",name:"Suffix",type:"string",meta:{width:"half",interface:"system-input-translated-string",options:{trim:!1}}},{field:"customCss",name:"Custom CSS",type:"json",meta:{width:"full",interface:"input-code",options:{language:"json"}}},{field:"debugMode",name:"Debug Mode",type:"boolean",meta:{width:"full",interface:"boolean",note:"Used for debugging the template. It will show an error message if the template is invalid. It will also log to console the result of each component of the template."}},{field:"computeIfEmpty",name:"Compute If Empty",type:"boolean",meta:{width:"full",interface:"boolean",note:"Compute the value if the field is empty. This is useful if you want a value to be computed once such as the created date or a unique ID."}},{field:"initialCompute",name:"Initial Compute",type:"boolean",meta:{width:"full",interface:"boolean",note:"Compute the value when opening the form. This is useful if you want to compute a value based on the current date or other dynamic values."}}]});export{_ as default};
