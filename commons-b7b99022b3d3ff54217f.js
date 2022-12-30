"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{3723:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return v},S:function(){return q},_:function(){return l},a:function(){return s},b:function(){return c},g:function(){return d},h:function(){return o}});var r=a(7294),i=(a(2369),a(5697)),n=a.n(i);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(i[a]=e[a]);return i}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,i){return void 0===i&&(i={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},i,{opacity:t?1:0})})}function d(e,t,a,r,i,n,l,o){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=i,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],u=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,p);return r.createElement(r.Fragment,null,r.createElement(u,s({},a)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:i,alt:n="",shouldLoad:o}=e,c=l(e,m);return r.createElement("img",s({},c,{decoding:"async",loading:i,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:n}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,n=l(e,f);const o=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(h,s({},n,t,{sizes:o,shouldLoad:i}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:o})})),c):c};var y;h.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},b.displayName="Picture",b.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const w=["fallback"],v=function(e){let{fallback:t}=e,a=l(e,w);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};v.displayName="Placeholder",v.propTypes={fallback:i.string,sources:null==(y=b.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=b.propTypes;const k=function(e,t,a){for(var r=arguments.length,i=new Array(r>3?r-3:0),s=3;s<r;s++)i[s-3]=arguments[s];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:n().object.isRequired,alt:k},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],S=new Set;let T,_;const N=function(e){let{as:t="div",image:i,style:n,backgroundColor:c,className:d,class:p,onStartLoad:u,onLoad:g,onError:m}=e,f=l(e,C);const{width:h,height:b,layout:y}=i,w=function(e,t,a){const r={};let i="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}(h,b,y),{style:v,className:E}=w,k=l(w,x),L=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(i.images)),[i.images]);p&&(d=p);const j=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(y,h,b);return(0,r.useEffect)((()=>{T||(T=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==u||u({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void S.add(N);if(_&&S.has(N))return;let t,r;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;L.current&&(L.current.innerHTML=a(s({isLoading:!0,isLoaded:S.has(N),image:i},f)),S.has(N)||(t=requestAnimationFrame((()=>{L.current&&(r=l(L.current,N,S,n,u,g,m))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[i]),(0,r.useLayoutEffect)((()=>{S.has(N)&&_&&(L.current.innerHTML=_(s({isLoading:S.has(N),isLoaded:S.has(N),image:i},f)),null==u||u({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(t,s({},k,{style:s({},v,n,{backgroundColor:c}),className:E+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:j},suppressHydrationWarning:!0}))},j=(0,r.memo)((function(e){return e.image?(0,r.createElement)(N,e):null}));j.propTypes=L,j.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),I={src:n().string.isRequired,alt:k,width:z,height:z,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(R=j,function(e){let{src:t,__imageData:a,__error:i}=e,n=l(e,O);return i&&console.warn(i),a?r.createElement(R,s({image:a},n)):(console.warn("Image not loaded",t),null)});var R;q.displayName="StaticImage",q.propTypes=I},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let i=0;i<e.length;i++){const n=e[i];t&&/[a-zA-Z]/.test(n)&&n.toUpperCase()===n?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,r=a,a=!0,i++):a&&r&&/[a-zA-Z]/.test(n)&&n.toLowerCase()===n?(e=e.slice(0,i-1)+"-"+e.slice(i-1),r=a,a=!1,t=!0):(t=n.toLowerCase()===n&&n.toUpperCase()!==n,r=a,a=n.toUpperCase()===n&&n.toLowerCase()!==n)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},8678:function(e,t,a){var r=a(7294),i=a(1883),n=a(3723);t.Z=e=>{let{location:t,title:s,children:l}=e;const o="/"===t.pathname;let c;return c=r.createElement("div",null,r.createElement("h1",{className:"main-heading"},r.createElement(i.Link,{to:"/"},s,r.createElement(n.S,{className:"title-avatar",formats:["auto","webp","avif"],src:"../images/profile-pic.jpeg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(4698)}))),r.createElement(i.Link,{className:"header-link",to:"/"},"Posts")," /",r.createElement(i.Link,{className:"header-link",to:"/tags/"},"Tags")," /",r.createElement(i.Link,{className:"header-link",to:"/README/"},"About Me")," /",r.createElement(i.Link,{className:"header-link",target:"_blank",to:"https://twitter.com/a_zara_n"},"Twitter")," /",r.createElement(i.Link,{className:"header-link",target:"_blank",to:"https://github.com/a-zara-n"},"GitHub")," /",r.createElement(i.Link,{className:"header-link",target:"_blank",to:"https://app.hackthebox.com/users/208274"},"HackTheBox")),r.createElement("div",{className:"global-wrapper","data-is-root-path":o},r.createElement("header",{className:"global-header"},c),r.createElement("main",null,l),r.createElement("footer",null,"© 2022 misc.azara.jp All Rights Reserved. | © ",(new Date).getFullYear(),", Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")," | ",r.createElement("b",null,r.createElement(i.Link,{to:"/privacy"},"プライバシーポリシー"))))}},4698:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/457e7bb552181be565afeb90cd5623f7/d24ee/profile-pic.jpg","srcSet":"/static/457e7bb552181be565afeb90cd5623f7/dc5aa/profile-pic.jpg 13w,\\n/static/457e7bb552181be565afeb90cd5623f7/646b7/profile-pic.jpg 25w,\\n/static/457e7bb552181be565afeb90cd5623f7/d24ee/profile-pic.jpg 50w,\\n/static/457e7bb552181be565afeb90cd5623f7/64618/profile-pic.jpg 100w","sizes":"(min-width: 50px) 50px, 100vw"},"sources":[{"srcSet":"/static/457e7bb552181be565afeb90cd5623f7/e7faa/profile-pic.avif 13w,\\n/static/457e7bb552181be565afeb90cd5623f7/f04f9/profile-pic.avif 25w,\\n/static/457e7bb552181be565afeb90cd5623f7/d4bf4/profile-pic.avif 50w,\\n/static/457e7bb552181be565afeb90cd5623f7/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"(min-width: 50px) 50px, 100vw"},{"srcSet":"/static/457e7bb552181be565afeb90cd5623f7/989b1/profile-pic.webp 13w,\\n/static/457e7bb552181be565afeb90cd5623f7/ce49b/profile-pic.webp 25w,\\n/static/457e7bb552181be565afeb90cd5623f7/3faea/profile-pic.webp 50w,\\n/static/457e7bb552181be565afeb90cd5623f7/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"(min-width: 50px) 50px, 100vw"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=commons-b7b99022b3d3ff54217f.js.map