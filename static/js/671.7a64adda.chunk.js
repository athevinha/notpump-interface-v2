"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[671],{87383:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(1413),a=t(45987),o=t(50228),i=t(94162),s=t(4565),c=t(33888),l=t(46283),d=t(11087),u=t(80184);function x(e){var n=e.link,t=e.activeLast,a=e.disabled,i=n.name,s=n.href,c=n.icon,x=(0,r.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,u.jsxs)(u.Fragment,{children:[c&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),i]});return s?(0,u.jsx)(l.Z,{component:d.rU,to:s,sx:x,children:h}):(0,u.jsxs)(o.Z,{sx:x,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function p(e){var n=e.links,t=e.action,d=e.heading,p=e.moreLink,Z=e.activeLast,g=e.sx,f=(0,a.Z)(e,h),j=n[n.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,r.Z)({mb:5},g),children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(c.Z,(0,r.Z)((0,r.Z)({separator:(0,u.jsx)(m,{})},f),{},{children:n.map((function(e){return(0,u.jsx)(x,{link:e,activeLast:Z,disabled:e.name===j},e.name||"")}))}))]}),t&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!p&&(0,u.jsx)(o.Z,{sx:{mt:2},children:p.map((function(e){return(0,u.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function m(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},50671:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(29439),a=t(72791),o=t(6907),i=t(50228),s=t(476),c=t(19987),l=t(27561),d=t(16002),u=t(7055),x=t(87383),h=t(26052),p=t(80184),m=["standard","primary","secondary","info","success","warning","error"],Z=["small","medium","large"],g={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{my:1}};function f(){var e=(0,a.useState)(2),n=(0,r.Z)(e,2),t=n[0],f=n[1],j=(0,a.useState)(10),v=(0,r.Z)(j,2),b=v[0],y=v[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.ql,{children:(0,p.jsx)("title",{children:" MUI Components: Pagination | NotPump"})}),(0,p.jsx)(i.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,p.jsx)(s.Z,{children:(0,p.jsx)(x.Z,{heading:"Pagination",links:[{name:"Components",href:u.ko.components},{name:"Pagination"}],moreLink:["https://mui.com/components/pagination"]})})}),(0,p.jsx)(s.Z,{sx:{my:10},children:(0,p.jsxs)(d.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,p.jsxs)(h.g,{title:"Circular",sx:g,children:[(0,p.jsx)(c.Z,{shape:"circular",count:10}),(0,p.jsx)(c.Z,{shape:"circular",count:10,disabled:!0}),(0,p.jsx)(c.Z,{shape:"circular",count:10,variant:"outlined"}),(0,p.jsx)(c.Z,{shape:"circular",count:10,variant:"outlined",disabled:!0}),(0,p.jsx)(c.Z,{shape:"circular",count:10,variant:"soft"}),(0,p.jsx)(c.Z,{shape:"circular",count:10,variant:"soft",disabled:!0})]}),(0,p.jsxs)(h.g,{title:"Rounded",sx:g,children:[(0,p.jsx)(c.Z,{shape:"rounded",count:10}),(0,p.jsx)(c.Z,{shape:"rounded",count:10,disabled:!0}),(0,p.jsx)(c.Z,{shape:"rounded",count:10,variant:"outlined"}),(0,p.jsx)(c.Z,{shape:"rounded",count:10,variant:"outlined",disabled:!0}),(0,p.jsx)(c.Z,{shape:"rounded",count:10,variant:"soft"}),(0,p.jsx)(c.Z,{shape:"rounded",count:10,variant:"soft",disabled:!0})]}),(0,p.jsxs)(h.g,{title:"Colors",sx:g,children:[m.map((function(e){return(0,p.jsx)(c.Z,{color:e,count:10},e)})),m.map((function(e){return(0,p.jsx)(c.Z,{color:e,count:10,variant:"outlined"},e)})),m.map((function(e){return(0,p.jsx)(c.Z,{color:e,count:10,variant:"soft"},e)}))]}),(0,p.jsx)(h.g,{title:"Size",sx:g,children:Z.map((function(e){return(0,p.jsx)(c.Z,{count:10,size:e},e)}))}),(0,p.jsxs)(h.g,{title:"Buttons",sx:g,children:[(0,p.jsx)(c.Z,{count:10,showFirstButton:!0,showLastButton:!0}),(0,p.jsx)(c.Z,{count:10,hidePrevButton:!0,hideNextButton:!0})]}),(0,p.jsxs)(h.g,{title:"Ranges",sx:g,children:[(0,p.jsx)(c.Z,{count:11,defaultPage:6,siblingCount:0}),(0,p.jsx)(c.Z,{count:11,defaultPage:6}),(0,p.jsx)(c.Z,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),(0,p.jsx)(c.Z,{count:11,defaultPage:6,boundaryCount:2})]}),(0,p.jsx)(h.g,{title:"Table",sx:g,children:(0,p.jsx)(l.Z,{component:"div",count:100,page:t,onPageChange:function(e,n){f(n)},rowsPerPage:b,onRowsPerPageChange:function(e){y(parseInt(e.target.value,10)),f(0)}})})]})})]})}},26052:function(e,n,t){t.d(n,{_:function(){return u},g:function(){return d}});var r=t(1413),a=t(12065),o=t(30286),i=t(16398),s=t(50228),c=t(4565),l=t(80184);function d(e){var n=e.title,t=e.sx,c=e.children;return(0,l.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,a.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,l.jsx)(i.Z,{title:n}),(0,l.jsx)(s.Z,{sx:(0,r.Z)({p:5,minHeight:180},t),children:c})]})}function u(e){var n=e.title;return(0,l.jsx)(c.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}},16398:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(4942),a=t(63366),o=t(87462),i=t(72791),s=t(28182),c=t(94419),l=t(4565),d=t(85513),u=t(60277),x=t(75878),h=t(21217);function p(e){return(0,h.Z)("MuiCardHeader",e)}var m=(0,x.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),Z=t(80184),g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,n){var t;return(0,o.Z)((t={},(0,r.Z)(t,"& .".concat(m.title),n.title),(0,r.Z)(t,"& .".concat(m.subheader),n.subheader),t),n.root)}})({display:"flex",alignItems:"center",padding:16}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,n){return n.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,n){return n.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,n){return n.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiCardHeader"}),r=t.action,i=t.avatar,u=t.className,x=t.component,h=void 0===x?"div":x,m=t.disableTypography,y=void 0!==m&&m,P=t.subheader,C=t.subheaderTypographyProps,k=t.title,w=t.titleTypographyProps,R=(0,a.Z)(t,g),N=(0,o.Z)({},t,{component:h,disableTypography:y}),_=function(e){var n=e.classes;return(0,c.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,n)}(N),S=k;null==S||S.type===l.Z||y||(S=(0,Z.jsx)(l.Z,(0,o.Z)({variant:i?"body2":"h5",className:_.title,component:"span",display:"block"},w,{children:S})));var T=P;return null==T||T.type===l.Z||y||(T=(0,Z.jsx)(l.Z,(0,o.Z)({variant:i?"body2":"body1",className:_.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:T}))),(0,Z.jsxs)(f,(0,o.Z)({className:(0,s.default)(_.root,u),as:h,ref:n,ownerState:N},R,{children:[i&&(0,Z.jsx)(j,{className:_.avatar,ownerState:N,children:i}),(0,Z.jsxs)(b,{className:_.content,ownerState:N,children:[S,T]}),r&&(0,Z.jsx)(v,{className:_.action,ownerState:N,children:r})]}))}))}}]);
//# sourceMappingURL=671.7a64adda.chunk.js.map