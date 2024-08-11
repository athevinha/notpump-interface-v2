"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[9529],{87383:function(e,r,t){t.d(r,{Z:function(){return h}});var n=t(1413),a=t(45987),o=t(50228),i=t(94162),s=t(4565),l=t(33888),c=t(46283),d=t(11087),u=t(80184);function p(e){var r=e.link,t=e.activeLast,a=e.disabled,i=r.name,s=r.href,l=r.icon,p=(0,n.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),i]});return s?(0,u.jsx)(c.Z,{component:d.rU,to:s,sx:p,children:m}):(0,u.jsxs)(o.Z,{sx:p,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function h(e){var r=e.links,t=e.action,d=e.heading,h=e.moreLink,x=e.activeLast,Z=e.sx,v=(0,a.Z)(e,m),g=r[r.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,n.Z)({mb:5},Z),children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!r.length&&(0,u.jsx)(l.Z,(0,n.Z)((0,n.Z)({separator:(0,u.jsx)(f,{})},v),{},{children:r.map((function(e){return(0,u.jsx)(p,{link:e,activeLast:x,disabled:e.name===g},e.name||"")}))}))]}),t&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!h&&(0,u.jsx)(o.Z,{sx:{mt:2},children:h.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function f(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},49529:function(e,r,t){t.r(r),t.d(r,{default:function(){return y}});var n=t(93433),a=t(29439),o=t(72791),i=t(6907),s=t(50228),l=t(476),c=t(94162),d=t(48928),u=t(16398),p=t(72900),m=t(71770),h=t(55194),f=t(4565),x=t(7055),Z=t(50289),v=t(63402),g=t(87383),j=t(41785),b=t(80184);function y(){var e=(0,o.useState)(!1),r=(0,a.Z)(e,2),t=r[0],y=r[1],C=(0,o.useState)([]),w=(0,a.Z)(C,2),R=w[0],k=w[1],S=(0,o.useState)(null),M=(0,a.Z)(S,2),N=M[0],P=M[1],U=(0,o.useState)(null),L=(0,a.Z)(U,2),B=L[0],T=L[1],A=(0,o.useCallback)((function(e){var r=e[0];r&&P(Object.assign(r,{preview:URL.createObjectURL(r)}))}),[]),_=(0,o.useCallback)((function(e){var r=e[0];r&&T(Object.assign(r,{preview:URL.createObjectURL(r)}))}),[]),O=(0,o.useCallback)((function(e){k([].concat((0,n.Z)(R),(0,n.Z)(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))))}),[R]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.ql,{children:(0,b.jsx)("title",{children:" Extra Components: Upload | NotPump"})}),(0,b.jsx)(s.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,b.jsx)(l.Z,{children:(0,b.jsx)(g.Z,{heading:"Upload",links:[{name:"Components",href:x.ko.components},{name:"Upload"}],moreLink:["https://react-dropzone.js.org/#section-basic-example"]})})}),(0,b.jsx)(l.Z,{sx:{my:10},children:(0,b.jsxs)(c.Z,{spacing:5,children:[(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(u.Z,{title:"Upload Multi File",action:(0,b.jsx)(p.Z,{control:(0,b.jsx)(m.Z,{checked:t,onChange:function(e){return y(e.target.checked)}}),label:"Show Thumbnail"})}),(0,b.jsx)(h.Z,{children:(0,b.jsx)(j.gq,{multiple:!0,thumbnail:t,files:R,onDrop:O,onRemove:function(e){var r=R.filter((function(r){return r!==e}));k(r)},onRemoveAll:function(){k([])},onUpload:function(){return console.log("ON UPLOAD")}})})]}),(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(u.Z,{title:"Upload Single File"}),(0,b.jsx)(h.Z,{children:(0,b.jsx)(j.gq,{file:N,onDrop:A,onDelete:function(){return P(null)}})})]}),(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(u.Z,{title:"Upload Avatar"}),(0,b.jsx)(h.Z,{children:(0,b.jsx)(j.ab,{file:B,onDrop:_,helperText:(0,b.jsxs)(f.Z,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",(0,b.jsx)("br",{})," max size of ",(0,Z.oe)(3145728)]})})})]}),(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(u.Z,{title:"Upload Box"}),(0,b.jsx)(h.Z,{children:(0,b.jsxs)(c.Z,{direction:"row",spacing:2,children:[(0,b.jsx)(j.un,{}),(0,b.jsx)(j.un,{placeholder:(0,b.jsxs)(c.Z,{spacing:.5,alignItems:"center",children:[(0,b.jsx)(v.Z,{icon:"eva:cloud-upload-fill",width:40}),(0,b.jsx)(f.Z,{variant:"body2",children:"Upload file"})]}),sx:{flexGrow:1,height:"auto",py:2.5,mb:3}})]})})]})]})})]})}},33888:function(e,r,t){t.d(r,{Z:function(){return U}});var n=t(93433),a=t(29439),o=t(4942),i=t(87462),s=t(63366),l=t(72791),c=(t(57441),t(28182)),d=t(94419),u=t(60277),p=t(85513),m=t(4565),h=t(12065),f=t(40233),x=t(80184),Z=(0,f.Z)((0,x.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),v=t(92842),g=(0,u.ZP)(v.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,h._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,h._4)(r.palette.grey[600],.12)})})})),j=(0,u.ZP)(Z)({width:24,height:16});var b=function(e){var r=e;return(0,x.jsx)("li",{children:(0,x.jsx)(g,(0,i.Z)({focusRipple:!0},e,{ownerState:r,children:(0,x.jsx)(j,{ownerState:r})}))})},y=t(75878),C=t(21217);function w(e){return(0,C.Z)("MuiBreadcrumbs",e)}var R=(0,y.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),k=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],S=(0,u.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,o.Z)({},"& .".concat(R.li),r.li),r.root]}})({}),M=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),N=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function P(e,r,t,n){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,(0,x.jsx)(N,{"aria-hidden":!0,className:r,ownerState:n,children:t},"separator-".concat(i))):a.push(o),a}),[])}var U=l.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),o=t.children,u=t.className,m=t.component,h=void 0===m?"nav":m,f=t.expandText,Z=void 0===f?"Show path":f,v=t.itemsAfterCollapse,g=void 0===v?1:v,j=t.itemsBeforeCollapse,y=void 0===j?1:j,C=t.maxItems,R=void 0===C?8:C,N=t.separator,U=void 0===N?"/":N,L=(0,s.Z)(t,k),B=l.useState(!1),T=(0,a.Z)(B,2),A=T[0],_=T[1],O=(0,i.Z)({},t,{component:h,expanded:A,expandText:Z,itemsAfterCollapse:g,itemsBeforeCollapse:y,maxItems:R,separator:U}),H=function(e){var r=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,r)}(O),I=l.useRef(null),z=l.Children.toArray(o).filter((function(e){return l.isValidElement(e)})).map((function(e,r){return(0,x.jsx)("li",{className:H.li,children:e},"child-".concat(r))}));return(0,x.jsx)(S,(0,i.Z)({ref:r,component:h,color:"text.secondary",className:(0,c.default)(H.root,u),ownerState:O},L,{children:(0,x.jsx)(M,{className:H.ol,ref:I,ownerState:O,children:P(A||R&&z.length<=R?z:function(e){return y+g>=e.length?e:[].concat((0,n.Z)(e.slice(0,y)),[(0,x.jsx)(b,{"aria-label":Z,onClick:function(){_(!0);var e=I.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-g,e.length)))}(z),H.separator,U,O)})}))}))},48928:function(e,r,t){t.d(r,{Z:function(){return Z}});var n=t(87462),a=t(63366),o=t(72791),i=t(28182),s=t(94419),l=t(60277),c=t(85513),d=t(30286),u=t(75878),p=t(21217);function m(e){return(0,p.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var h=t(80184),f=["className","raised"],x=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),Z=o.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiCard"}),o=t.className,l=t.raised,d=void 0!==l&&l,u=(0,a.Z)(t,f),p=(0,n.Z)({},t,{raised:d}),Z=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},m,r)}(p);return(0,h.jsx)(x,(0,n.Z)({className:(0,i.default)(Z.root,o),elevation:d?8:void 0,ref:r,ownerState:p},u))}))},55194:function(e,r,t){t.d(r,{Z:function(){return x}});var n=t(87462),a=t(63366),o=t(72791),i=t(28182),s=t(94419),l=t(60277),c=t(85513),d=t(75878),u=t(21217);function p(e){return(0,u.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var m=t(80184),h=["className","component"],f=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),x=o.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiCardContent"}),o=t.className,l=t.component,d=void 0===l?"div":l,u=(0,a.Z)(t,h),x=(0,n.Z)({},t,{component:d}),Z=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},p,r)}(x);return(0,m.jsx)(f,(0,n.Z)({as:d,className:(0,i.default)(Z.root,o),ownerState:x,ref:r},u))}))},16398:function(e,r,t){t.d(r,{Z:function(){return y}});var n=t(4942),a=t(63366),o=t(87462),i=t(72791),s=t(28182),l=t(94419),c=t(4565),d=t(85513),u=t(60277),p=t(75878),m=t(21217);function h(e){return(0,m.Z)("MuiCardHeader",e)}var f=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),x=t(80184),Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,r){var t;return(0,o.Z)((t={},(0,n.Z)(t,"& .".concat(f.title),r.title),(0,n.Z)(t,"& .".concat(f.subheader),r.subheader),t),r.root)}})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,r){return r.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,r){return r.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,r){return r.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiCardHeader"}),n=t.action,i=t.avatar,u=t.className,p=t.component,m=void 0===p?"div":p,f=t.disableTypography,y=void 0!==f&&f,C=t.subheader,w=t.subheaderTypographyProps,R=t.title,k=t.titleTypographyProps,S=(0,a.Z)(t,Z),M=(0,o.Z)({},t,{component:m,disableTypography:y}),N=function(e){var r=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,r)}(M),P=R;null==P||P.type===c.Z||y||(P=(0,x.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"h5",className:N.title,component:"span",display:"block"},k,{children:P})));var U=C;return null==U||U.type===c.Z||y||(U=(0,x.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:U}))),(0,x.jsxs)(v,(0,o.Z)({className:(0,s.default)(N.root,u),as:m,ref:r,ownerState:M},S,{children:[i&&(0,x.jsx)(g,{className:N.avatar,ownerState:M,children:i}),(0,x.jsxs)(b,{className:N.content,ownerState:M,children:[P,U]}),n&&(0,x.jsx)(j,{className:N.action,ownerState:M,children:n})]}))}))}}]);
//# sourceMappingURL=9529.0d6a0cdc.chunk.js.map