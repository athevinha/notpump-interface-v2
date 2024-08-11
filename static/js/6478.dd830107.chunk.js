"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[6478],{87383:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(1413),a=t(45987),o=t(50228),i=t(94162),l=t(4565),s=t(33888),c=t(46283),d=t(11087),u=t(80184);function p(e){var n=e.link,t=e.activeLast,a=e.disabled,i=n.name,l=n.href,s=n.icon,p=(0,r.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,u.jsxs)(u.Fragment,{children:[s&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),i]});return l?(0,u.jsx)(c.Z,{component:d.rU,to:l,sx:p,children:m}):(0,u.jsxs)(o.Z,{sx:p,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function h(e){var n=e.links,t=e.action,d=e.heading,h=e.moreLink,f=e.activeLast,g=e.sx,Z=(0,a.Z)(e,m),v=n[n.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,r.Z)({mb:5},g),children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(s.Z,(0,r.Z)((0,r.Z)({separator:(0,u.jsx)(x,{})},Z),{},{children:n.map((function(e){return(0,u.jsx)(p,{link:e,activeLast:f,disabled:e.name===v},e.name||"")}))}))]}),t&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!h&&(0,u.jsx)(o.Z,{sx:{mt:2},children:h.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},8984:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(29439),a=t(72791),o=t(6907),i=t(50228),l=t(476),s=t(61091),c=t(79964),d=t(35702),u=t(45629),p=t(19978),m=t(4346),h=t(13811),x=t(7055),f=t(63402),g=t(87383),Z=t(26052),v=t(80184),y=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"],b=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"],j={display:"flex",alignItems:"center",justifyContent:"center"};function k(){var e=(0,a.useState)(1),n=(0,r.Z)(e,2),t=n[0],k=n[1],C=(0,a.useState)(null),S=(0,r.Z)(C,2),w=S[0],M=S[1],P=(0,a.useState)(null),R=(0,r.Z)(P,2),T=R[0],N=R[1],B=(0,a.useState)(null),H=(0,r.Z)(B,2),_=H[0],L=H[1],I=function(){M(null)},A=function(){L(null)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.ql,{children:(0,v.jsx)("title",{children:" MUI Components: Menu | NotPump"})}),(0,v.jsx)(i.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,v.jsx)(l.Z,{children:(0,v.jsx)(g.Z,{heading:"Menu",links:[{name:"Components",href:x.ko.components},{name:"Menu"}],moreLink:["https://mui.com/components/menus"]})})}),(0,v.jsx)(l.Z,{sx:{my:10},children:(0,v.jsxs)(i.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[(0,v.jsxs)(Z.g,{title:"Simple",sx:j,children:[(0,v.jsx)(s.Z,{variant:"outlined",onClick:function(e){M(e.currentTarget)},children:"Open Menu"}),(0,v.jsx)(c.Z,{keepMounted:!0,id:"simple-menu",anchorEl:w,onClose:I,open:Boolean(w),children:["Profile","My account","Logout"].map((function(e){return(0,v.jsx)(d.Z,{onClick:I,children:e},e)}))})]}),(0,v.jsxs)(Z.g,{title:"Selected",sx:j,children:[(0,v.jsx)(u.Z,{component:"nav","aria-label":"Device settings",children:(0,v.jsx)(p.Z,{"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:function(e){N(e.currentTarget)},children:(0,v.jsx)(m.Z,{primary:"When device is locked",secondary:y[t]})})}),(0,v.jsx)(c.Z,{keepMounted:!0,id:"lock-menu",anchorEl:T,onClose:I,open:Boolean(T),children:y.map((function(e,n){return(0,v.jsx)(d.Z,{disabled:0===n,selected:n===t,onClick:function(e){return function(e,n){k(n),N(null)}(0,n)},children:e},e)}))})]}),(0,v.jsxs)(Z.g,{title:"Max height",sx:j,children:[(0,v.jsx)(h.Z,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){L(e.currentTarget)},children:(0,v.jsx)(f.Z,{icon:"eva:more-vertical-fill"})}),(0,v.jsx)(c.Z,{keepMounted:!0,id:"long-menu",anchorEl:_,onClose:A,open:Boolean(_),PaperProps:{style:{maxHeight:216,width:"20ch"}},children:b.map((function(e){return(0,v.jsx)(d.Z,{selected:"Pyxis"===e,onClick:A,children:e},e)}))})]})]})})]})}},26052:function(e,n,t){t.d(n,{_:function(){return u},g:function(){return d}});var r=t(1413),a=t(12065),o=t(30286),i=t(16398),l=t(50228),s=t(4565),c=t(80184);function d(e){var n=e.title,t=e.sx,s=e.children;return(0,c.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,a.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,c.jsx)(i.Z,{title:n}),(0,c.jsx)(l.Z,{sx:(0,r.Z)({p:5,minHeight:180},t),children:s})]})}function u(e){var n=e.title;return(0,c.jsx)(s.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}},33888:function(e,n,t){t.d(n,{Z:function(){return N}});var r=t(93433),a=t(29439),o=t(4942),i=t(87462),l=t(63366),s=t(72791),c=(t(57441),t(28182)),d=t(94419),u=t(60277),p=t(85513),m=t(4565),h=t(12065),x=t(40233),f=t(80184),g=(0,x.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=t(92842),v=(0,u.ZP)(Z.Z)((function(e){var n=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(n.spacing(1)," * 0.5)"),marginRight:"calc(".concat(n.spacing(1)," * 0.5)")},"light"===n.palette.mode?{backgroundColor:n.palette.grey[100],color:n.palette.grey[700]}:{backgroundColor:n.palette.grey[700],color:n.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===n.palette.mode?{backgroundColor:n.palette.grey[200]}:{backgroundColor:n.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:n.shadows[0]},"light"===n.palette.mode?{backgroundColor:(0,h._4)(n.palette.grey[200],.12)}:{backgroundColor:(0,h._4)(n.palette.grey[600],.12)})})})),y=(0,u.ZP)(g)({width:24,height:16});var b=function(e){var n=e;return(0,f.jsx)("li",{children:(0,f.jsx)(v,(0,i.Z)({focusRipple:!0},e,{ownerState:n,children:(0,f.jsx)(y,{ownerState:n})}))})},j=t(75878),k=t(21217);function C(e){return(0,k.Z)("MuiBreadcrumbs",e)}var S=(0,j.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),w=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],M=(0,u.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,n){return[(0,o.Z)({},"& .".concat(S.li),n.li),n.root]}})({}),P=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,n){return n.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),R=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,n){return n.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function T(e,n,t,r){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,(0,f.jsx)(R,{"aria-hidden":!0,className:n,ownerState:r,children:t},"separator-".concat(i))):a.push(o),a}),[])}var N=s.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),o=t.children,u=t.className,m=t.component,h=void 0===m?"nav":m,x=t.expandText,g=void 0===x?"Show path":x,Z=t.itemsAfterCollapse,v=void 0===Z?1:Z,y=t.itemsBeforeCollapse,j=void 0===y?1:y,k=t.maxItems,S=void 0===k?8:k,R=t.separator,N=void 0===R?"/":R,B=(0,l.Z)(t,w),H=s.useState(!1),_=(0,a.Z)(H,2),L=_[0],I=_[1],A=(0,i.Z)({},t,{component:h,expanded:L,expandText:g,itemsAfterCollapse:v,itemsBeforeCollapse:j,maxItems:S,separator:N}),E=function(e){var n=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},C,n)}(A),z=s.useRef(null),U=s.Children.toArray(o).filter((function(e){return s.isValidElement(e)})).map((function(e,n){return(0,f.jsx)("li",{className:E.li,children:e},"child-".concat(n))}));return(0,f.jsx)(M,(0,i.Z)({ref:n,component:h,color:"text.secondary",className:(0,c.default)(E.root,u),ownerState:A},B,{children:(0,f.jsx)(P,{className:E.ol,ref:z,ownerState:A,children:T(L||S&&U.length<=S?U:function(e){return j+v>=e.length?e:[].concat((0,r.Z)(e.slice(0,j)),[(0,f.jsx)(b,{"aria-label":g,onClick:function(){I(!0);var e=z.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-v,e.length)))}(U),E.separator,N,A)})}))}))},16398:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(4942),a=t(63366),o=t(87462),i=t(72791),l=t(28182),s=t(94419),c=t(4565),d=t(85513),u=t(60277),p=t(75878),m=t(21217);function h(e){return(0,m.Z)("MuiCardHeader",e)}var x=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=t(80184),g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Z=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,n){var t;return(0,o.Z)((t={},(0,r.Z)(t,"& .".concat(x.title),n.title),(0,r.Z)(t,"& .".concat(x.subheader),n.subheader),t),n.root)}})({display:"flex",alignItems:"center",padding:16}),v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,n){return n.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,n){return n.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,n){return n.content}})({flex:"1 1 auto"}),j=i.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiCardHeader"}),r=t.action,i=t.avatar,u=t.className,p=t.component,m=void 0===p?"div":p,x=t.disableTypography,j=void 0!==x&&x,k=t.subheader,C=t.subheaderTypographyProps,S=t.title,w=t.titleTypographyProps,M=(0,a.Z)(t,g),P=(0,o.Z)({},t,{component:m,disableTypography:j}),R=function(e){var n=e.classes;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,n)}(P),T=S;null==T||T.type===c.Z||j||(T=(0,f.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"h5",className:R.title,component:"span",display:"block"},w,{children:T})));var N=k;return null==N||N.type===c.Z||j||(N=(0,f.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"body1",className:R.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:N}))),(0,f.jsxs)(Z,(0,o.Z)({className:(0,l.default)(R.root,u),as:m,ref:n,ownerState:P},M,{children:[i&&(0,f.jsx)(v,{className:R.avatar,ownerState:P,children:i}),(0,f.jsxs)(b,{className:R.content,ownerState:P,children:[T,N]}),r&&(0,f.jsx)(y,{className:R.action,ownerState:P,children:r})]}))}))}}]);
//# sourceMappingURL=6478.dd830107.chunk.js.map