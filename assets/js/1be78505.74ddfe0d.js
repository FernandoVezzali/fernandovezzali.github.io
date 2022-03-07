"use strict";(self.webpackChunkvezzali=self.webpackChunkvezzali||[]).push([[514,75],{6756:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var n=a(7294),l=a(3905),r=a(8790),o=a(2773),i=a(6010),c=a(3725),s=a(5537),d=a(7462);function m(e){return n.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var u=a(5999),b=a(3366),p=a(9960),f=a(3919),h=a(541),v="menuHtmlItem_fVIQ",E=a(2389),g=["item"],k=["item","onItemClick","activePath","level","index"],_=["item","onItemClick","activePath","level","index"];function C(e){var t=e.item,a=(0,b.Z)(e,g);switch(t.type){case"category":return n.createElement(S,(0,d.Z)({item:t},a));case"html":return n.createElement(I,(0,d.Z)({item:t},a));default:return n.createElement(N,(0,d.Z)({item:t},a))}}function S(e){var t=e.item,a=e.onItemClick,l=e.activePath,r=e.level,o=e.index,s=(0,b.Z)(e,k),m=t.items,f=t.label,h=t.collapsible,v=t.className,g=t.href,_=function(e){var t=(0,E.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),C=(0,c._F)(t,l),S=(0,c.Mg)(g,l),I=(0,c.uR)({initialState:function(){return!!h&&(!C&&t.collapsed)}}),N=I.collapsed,Z=I.setCollapsed;!function(e){var t=e.isActive,a=e.collapsed,l=e.setCollapsed,r=(0,c.D9)(t);(0,n.useEffect)((function(){t&&!r&&a&&l(!1)}),[t,r,a,l])}({isActive:C,collapsed:N,setCollapsed:Z});var T=(0,c.fP)(),y=T.expandedItem,x=T.setExpandedItem;function L(e){void 0===e&&(e=!N),x(e?null:o),Z(e)}var A=(0,c.LU)().autoCollapseSidebarCategories;return(0,n.useEffect)((function(){h&&y&&y!==o&&A&&Z(!0)}),[h,y,o,Z,A]),n.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":N},v)},n.createElement("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":S})},n.createElement(p.Z,(0,d.Z)({className:(0,i.Z)("menu__link",{"menu__link--sublist":h&&!g,"menu__link--active":C}),onClick:h?function(e){null==a||a(t),g?L(!1):(e.preventDefault(),L())}:function(){null==a||a(t)},"aria-current":S?"page":void 0,href:h?null!=_?_:"#":_},s),f),g&&h&&n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:f}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),L()}})),n.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:N},n.createElement(M,{items:m,tabIndex:N?-1:0,onItemClick:a,activePath:l,level:r+1})))}function I(e){var t=e.item,a=e.level,l=e.index,r=t.value,o=t.defaultStyle,s=t.className;return n.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(a),o&&v+" menu__list-item",s),key:l,dangerouslySetInnerHTML:{__html:r}})}function N(e){var t=e.item,a=e.onItemClick,l=e.activePath,r=e.level,o=(e.index,(0,b.Z)(e,_)),s=t.href,m=t.label,u=t.className,v=(0,c._F)(t,l);return n.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(r),"menu__list-item",u),key:m},n.createElement(p.Z,(0,d.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":v}),"aria-current":v?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:a?function(){return a(t)}:void 0},o),(0,f.Z)(s)?m:n.createElement("span",null,m,n.createElement(h.Z,null))))}var Z=["items"];function T(e){var t=e.items,a=(0,b.Z)(e,Z);return n.createElement(c.D_,null,t.map((function(e,t){return n.createElement(C,(0,d.Z)({key:t,item:e,index:t},a))})))}var M=(0,n.memo)(T),y="sidebar_CW9Y",x="sidebarWithHideableNavbar_FoYL",L="sidebarHidden_D64r",A="sidebarLogo_FJUI",w="menu_SkdO",P="menuWithAnnouncementBar_x19h",F="collapseSidebarButton_cwdi",B="collapseSidebarButtonIcon_xORG";function D(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",F),onClick:t},n.createElement(m,{className:B}))}function H(e){var t,a,l=e.path,r=e.sidebar,o=e.onCollapse,d=e.isHidden,m=function(){var e=(0,c.nT)().isActive,t=(0,n.useState)(e),a=t[0],l=t[1];return(0,c.RF)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}(),u=(0,c.LU)(),b=u.navbar.hideOnScroll,p=u.hideableSidebar;return n.createElement("div",{className:(0,i.Z)(y,(t={},t[x]=b,t[L]=d,t))},b&&n.createElement(s.Z,{tabIndex:-1,className:A}),n.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",w,(a={},a[P]=m,a))},n.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},n.createElement(M,{items:r,activePath:l,level:1}))),p&&n.createElement(D,{onClick:o}))}var R=function(e){var t=e.toggleSidebar,a=e.sidebar,l=e.path;return n.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},n.createElement(M,{items:a,activePath:l,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function W(e){return n.createElement(c.Cv,{component:R,props:e})}var z=n.memo(H),Y=n.memo(W);function q(e){var t=(0,c.iP)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(z,e),l&&n.createElement(Y,e))}var U=a(4689),O=a(4608),V="backToTopButton_RiI4",G="backToTopButtonShow_ssHd";function K(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}function X(){var e,t=(0,n.useState)(!1),a=t[0],l=t[1],r=(0,n.useRef)(!1),o=K(),s=o.smoothScrollTop,d=o.cancelScrollToTop;return(0,c.RF)((function(e,t){var a=e.scrollY,n=null==t?void 0:t.scrollY;if(n)if(r.current)r.current=!1;else{var o=a<n;if(o||d(),a<300)l(!1);else if(o){var i=document.documentElement.scrollHeight;a+window.innerHeight<i&&l(!0)}else l(!1)}})),(0,c.SL)((function(e){e.location.hash&&(r.current=!0,l(!1))})),n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,V,(e={},e[G]=a,e)),type:"button",onClick:function(){return s()}})}var J=a(6775),Q={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"},j=a(5742);function $(e){var t,a,r,s=e.currentDocRoute,d=e.versionMetadata,b=e.children,p=e.sidebarName,f=(0,c.Vq)(),h=d.pluginId,v=d.version,E=(0,n.useState)(!1),g=E[0],k=E[1],_=(0,n.useState)(!1),C=_[0],S=_[1],I=(0,n.useCallback)((function(){C&&S(!1),k((function(e){return!e}))}),[C]);return n.createElement(o.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadata:{version:v,tag:(0,c.os)(h,v)}},n.createElement("div",{className:Q.docPage},n.createElement(X,null),f&&n.createElement("aside",{className:(0,i.Z)(c.kM.docs.docSidebarContainer,Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&g&&S(!0)}},n.createElement(q,{key:p,sidebar:f,path:s.path,onCollapse:I,isHidden:C}),C&&n.createElement("div",{className:Q.collapsedDocSidebar,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:I,onClick:I},n.createElement(m,{className:Q.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,i.Z)(Q.docMainContainer,(a={},a[Q.docMainContainerEnhanced]=g||!f,a))},n.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(r={},r[Q.docItemWrapperEnhanced]=g,r))},n.createElement(l.Zo,{components:U.Z},b)))))}function ee(e){var t=e.route.routes,a=e.versionMetadata,l=e.location,o=t.find((function(e){return(0,J.LX)(l.pathname,e)}));if(!o)return n.createElement(O.default,null);var i=o.sidebar,s=i?a.docsSidebars[i]:null;return n.createElement(n.Fragment,null,n.createElement(j.Z,null,n.createElement("html",{className:a.className})),n.createElement(c.qu,{version:a},n.createElement(c.bT,{sidebar:s},n.createElement($,{currentDocRoute:o,versionMetadata:a,sidebarName:i},(0,r.H)(t,{versionMetadata:a})))))}},4608:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),l=a(2773),r=a(5999);function o(){return n.createElement(l.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);