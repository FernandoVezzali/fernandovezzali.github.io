"use strict";(self.webpackChunkvezzali=self.webpackChunkvezzali||[]).push([[85],{6416:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var l=n(7294),t=n(6010),i=n(2773),c=n(3905),s=n(5119),m=n(1575),r=n(3725),o="mdxPageWrapper_zHyg";function d(e){var a=e.content,n=a.metadata,d=n.title,v=n.description,u=n.permalink,f=n.frontMatter,N=f.wrapperClassName,g=f.hide_table_of_contents;return l.createElement(i.Z,{title:d,description:v,permalink:u,wrapperClassName:null!=N?N:r.kM.wrapper.mdxPages,pageClassName:r.kM.page.mdxPage},l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,t.Z)("row",o)},l.createElement("div",{className:(0,t.Z)("col",!g&&"col--8")},l.createElement(c.Zo,{components:s.Z},l.createElement(a,null))),!g&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(m.Z,{toc:a.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})))))}},5002:function(e,a,n){n.d(a,{Z:function(){return r}});var l=n(7462),t=n(3366),i=n(7294),c=n(3725),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var a=e.toc,n=e.className,l=e.linkClassName,t=e.isChild;return a.length?i.createElement("ul",{className:t?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(m,{isChild:!0,toc:e.children,className:n,linkClassName:l}))}))):null}function r(e){var a=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,u=void 0===v?void 0:v,f=e.minHeadingLevel,N=e.maxHeadingLevel,g=(0,t.Z)(e,s),k=(0,c.LU)(),C=null!=f?f:k.tableOfContents.minHeadingLevel,_=null!=N?N:k.tableOfContents.maxHeadingLevel,p=(0,c.b9)({toc:a,minHeadingLevel:C,maxHeadingLevel:_}),h=(0,i.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:C,maxHeadingLevel:_}}),[d,u,C,_]);return(0,c.Si)(h),i.createElement(m,(0,l.Z)({toc:p,className:r,linkClassName:d},g))}},1575:function(e,a,n){n.d(a,{Z:function(){return o}});var l=n(7462),t=n(3366),i=n(7294),c=n(6010),s=n(5002),m="tableOfContents_cNA8",r=["className"];function o(e){var a=e.className,n=(0,t.Z)(e,r);return i.createElement("div",{className:(0,c.Z)(m,"thin-scrollbar",a)},i.createElement(s.Z,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);