"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[969],{3450:function(e,t,a){a.r(t);var l=a(7294),r=a(1883),n=a(8678);t.default=e=>{var t;let{pageContext:a,data:s}=e;const m=(null===(t=s.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",{tag:c}=a,{edges:o,totalCount:i}=s.allMarkdownRemark,p=i+" post"+(1===i?"":"s")+' tagged with 🏷️ "'+c+'"';return l.createElement(n.Z,{location:!0,title:m},l.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h1",{itemProp:"headline"},p)),l.createElement("ol",{style:{listStyle:"none"}},o.map((e=>{let{node:t}=e;const{slug:a}=t.fields,{title:n}=t.frontmatter;return l.createElement("li",{key:a},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("small",null,t.frontmatter.createDate),l.createElement("h2",null,l.createElement(r.Link,{to:a,itemProp:"url"},l.createElement("span",{itemProp:"headline"},"📝 ",n))),l.createElement("small",null,"tags: ",t.frontmatter.tags.map((e=>l.createElement(r.Link,{key:e,to:"/tags/"+e,className:"blog-tag-small"},"🏷️ ",e))))),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt||"aaaa"},itemProp:"description"}))))})),l.createElement(r.Link,{to:"/"},"TopPage")," / ",l.createElement(r.Link,{to:"/tags"},"Tags"))))}}}]);
//# sourceMappingURL=component---src-templates-tag-js-8ec71dc5df21583b6f28.js.map