"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[5755],{16455:function(e,t,r){r.d(t,{b8:function(){return j},ZQ:function(){return c},tR:function(){return g}});var n=r(12065),i=r(94162),o=r(50228),a=r(4565),s=r(80184);function c(e){var t=e.colors,r=e.limit,c=void 0===r?3:r,l=e.sx,d=t.slice(0,c),h=t.length-c;return(0,s.jsxs)(i.Z,{component:"span",direction:"row",alignItems:"center",justifyContent:"flex-end",sx:l,children:[d.map((function(e,t){return(0,s.jsx)(o.Z,{sx:{ml:-.75,width:16,height:16,borderRadius:"50%",border:function(e){return"solid 2px ".concat(e.palette.background.paper)},boxShadow:function(e){return"inset -1px 1px 2px ".concat((0,n.Fq)(e.palette.common.black,.24))},bgcolor:e}},e+t)})),t.length>c&&(0,s.jsx)(a.Z,{variant:"subtitle2",children:"+".concat(h)})]})}var l=r(1413),d=r(45987),h=r(45473),x=r(63402),u=["checked","whiteColor","sx"];function Z(e){var t=e.checked,r=e.whiteColor,i=e.sx,a=(0,d.Z)(e,u),c=(0,s.jsx)(o.Z,{sx:{width:1,height:1,opacity:.48,borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"}}),h=(0,s.jsx)(x.Z,{icon:"eva:checkmark-fill",sx:(0,l.Z)({opacity:0},t&&(0,l.Z)({opacity:1,color:"common.white"},r&&{color:"common.black"}))});return(0,s.jsxs)(o.Z,(0,l.Z)((0,l.Z)({sx:(0,l.Z)((0,l.Z)((0,l.Z)({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(e){return e.transitions.create("all",{duration:e.transitions.duration.shortest})}},r&&{border:function(e){return"solid 1px ".concat(e.palette.divider)},boxShadow:function(e){return"4px 4px 8px 0 ".concat((0,n.Fq)(e.palette.grey[500],.24))}}),t&&{transform:"scale(1.4)"}),i)},a),{},{children:[t&&c,h]}))}var p=["colors","selected","onChangeColor","sx"];function j(e){var t=e.colors,r=e.selected,n=e.onChangeColor,i=e.sx,a=(0,d.Z)(e,p);return(0,s.jsx)(o.Z,{sx:i,children:t.map((function(e){var t="#FFFFFF"===e||"white"===e;return(0,s.jsx)(h.Z,(0,l.Z)({size:"small",value:e,color:"default",checked:r.includes(e),onChange:function(){return n(e)},icon:(0,s.jsx)(Z,{whiteColor:t}),checkedIcon:(0,s.jsx)(Z,{checked:!0,whiteColor:t}),sx:{color:e,"&:hover":{opacity:.72},"& svg":{width:12,height:12}}},a),e)}))})}var f=r(72791),m=r(97265),v=r(7226),b=["colors"],g=(0,f.forwardRef)((function(e,t){var r=e.colors,n=(0,d.Z)(e,b);return(0,s.jsx)(m.Z,(0,l.Z)((0,l.Z)({row:!0,ref:t},n),{},{children:r.map((function(e){var t="#FFFFFF"===e||"white"===e;return(0,s.jsx)(v.Z,{value:e,color:"default",icon:(0,s.jsx)(Z,{whiteColor:t}),checkedIcon:(0,s.jsx)(Z,{checked:!0,whiteColor:t}),sx:{color:e,"&:hover":{opacity:.72},"& svg":{width:12,height:12}}},e)}))}))}))},85755:function(e,t,r){r.d(t,{A8:function(){return C},dO:function(){return D},wT:function(){return ie},XH:function(){return te},Db:function(){return v},WH:function(){return O},iB:function(){return Y},ko:function(){return M}});var n=r(45987),i=r(1413),o=r(60277),a=r(12065),s=r(74142),c=r(48928),l=r(50228),d=r(55194),h=r(4565),x=r(61091),u=r(65266),Z=r(43932),p=r(42774),j=r(80184),f=["list"],m=(0,o.ZP)("div")((function(e){var t=e.theme;return(0,i.Z)((0,i.Z)({},(0,u.v3)({startColor:"".concat((0,a.Fq)(t.palette.common.black,0)," 0%"),endColor:"".concat(t.palette.common.black," 75%")})),{},{top:0,left:0,right:0,bottom:0,zIndex:8,position:"absolute"})}));function v(e){var t=e.list,r=(0,n.Z)(e,f),o=(0,s.Z)(),a=(0,i.Z)({speed:1e3,dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===o.direction)},(0,p.A0)({sx:{right:24,bottom:24,position:"absolute"}}));return(0,j.jsx)(c.Z,(0,i.Z)((0,i.Z)({},r),{},{children:(0,j.jsx)(p.ZP,(0,i.Z)((0,i.Z)({},a),{},{children:t.map((function(e){return(0,j.jsx)(b,{item:e},e.id)}))}))}))}function b(e){var t=e.item,r=t.image,n=t.name;return(0,j.jsxs)(l.Z,{sx:{position:"relative"},children:[(0,j.jsxs)(d.Z,{sx:{left:0,bottom:0,zIndex:9,maxWidth:"80%",position:"absolute",color:"common.white"},children:[(0,j.jsx)(h.Z,{variant:"overline",sx:{opacity:.48},children:"New"}),(0,j.jsx)(h.Z,{noWrap:!0,variant:"h5",sx:{mt:1,mb:3},children:n}),(0,j.jsx)(x.Z,{variant:"contained",children:"Buy Now"})]}),(0,j.jsx)(m,{}),(0,j.jsx)(Z.Z,{alt:n,src:r,sx:{height:{xs:280,xl:320}}})]})}var g=r(29439),w=r(72791),y=r(11633),k=["title","subheader","chart","height"];function C(e){e.title,e.subheader;var t=e.chart,r=e.height,o=(0,n.Z)(e,k),a=t.colors,s=t.categories,d=t.series,h=t.options,x=(0,w.useState)("2019"),u=(0,g.Z)(x,2),Z=u[0],p=(u[1],(0,y.Q8)((0,i.Z)({colors:a,legend:{position:"top",horizontalAlign:"right"},xaxis:{categories:s}},h)));return(0,j.jsx)(c.Z,(0,i.Z)((0,i.Z)({},o),{},{sx:{height:r||600},children:d.map((function(e){return(0,j.jsx)(l.Z,{sx:{mt:3,mx:3,height:"100%"},dir:"ltr",children:e.year===Z&&(0,j.jsx)(y.ZP,{type:"area",series:e.data,options:p,height:"100%"})},e.year)}))}))}var F=r(16398),_=r(69963),T=r(21680),I=r(19773),B=r(60807),S=r(24390),W=r(94162),A=r(83423),R=r(50289),z=r(35922),P=r(53512),q=r(54278),Q=["title","subheader","tableData","tableLabels"];function D(e){var t=e.title,r=e.subheader,o=e.tableData,a=e.tableLabels,s=(0,n.Z)(e,Q);return(0,j.jsxs)(c.Z,(0,i.Z)((0,i.Z)({},s),{},{children:[(0,j.jsx)(F.Z,{title:t,subheader:r,sx:{mb:3}}),(0,j.jsx)(_.Z,{sx:{overflow:"unset"},children:(0,j.jsx)(P.Z,{children:(0,j.jsxs)(T.Z,{sx:{minWidth:720},children:[(0,j.jsx)(q.K,{headLabel:a}),(0,j.jsx)(I.Z,{children:o.map((function(e){return(0,j.jsx)(K,{row:e},e.id)}))})]})})})]}))}function K(e){var t=e.row;return(0,j.jsxs)(B.Z,{children:[(0,j.jsx)(S.Z,{children:(0,j.jsxs)(W.Z,{direction:"row",alignItems:"center",children:[(0,j.jsx)(A.Z,{alt:t.name,src:t.avatar}),(0,j.jsxs)(l.Z,{sx:{ml:2},children:[(0,j.jsxs)(h.Z,{variant:"subtitle2",children:[" ",t.name," "]}),(0,j.jsx)(h.Z,{variant:"body2",sx:{color:"text.secondary"},children:t.email})]})]})}),(0,j.jsx)(S.Z,{children:t.category}),(0,j.jsx)(S.Z,{children:(0,j.jsx)(Z.Z,{src:t.flag,alt:"country flag",sx:{maxWidth:28,mx:"auto"}})}),(0,j.jsx)(S.Z,{children:(0,R.e_)(t.total)}),(0,j.jsx)(S.Z,{align:"right",children:(0,j.jsx)(z.Z,{variant:"soft",color:("Top 1"===t.rank?"primary":"Top 2"===t.rank&&"info")||"Top 3"===t.rank&&"success"||"Top 4"===t.rank&&"warning"||"error",children:t.rank})})]})}var L=["title","subheader","total","chart"],G=(0,o.ZP)("div")((function(e){var t=e.theme;return{height:400,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:400},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(328,"px) !important")}}}));function O(e){var t=e.title,r=e.subheader,o=e.total,a=e.chart,l=(0,n.Z)(e,L),d=(0,s.Z)(),h=a.colors,x=a.series,u=a.options,Z=x.map((function(e){return e.value})),p=h||[[d.palette.primary.light,d.palette.primary.main],[d.palette.warning.light,d.palette.warning.main]],f=(0,y.Q8)((0,i.Z)({chart:{sparkline:{enabled:!0}},labels:x.map((function(e){return e.label})),legend:{floating:!0,horizontalAlign:"center"},fill:{type:"gradient",gradient:{colorStops:p.map((function(e){return[{offset:0,color:e[0]},{offset:100,color:e[1]}]}))}},plotOptions:{radialBar:{hollow:{size:"68%"},dataLabels:{value:{offsetY:16},total:{formatter:function(){return(0,R.FK)(o)}}}}}},u));return(0,j.jsxs)(c.Z,(0,i.Z)((0,i.Z)({},l),{},{children:[(0,j.jsx)(F.Z,{title:t,subheader:r}),(0,j.jsx)(G,{dir:"ltr",children:(0,j.jsx)(y.ZP,{type:"radialBar",series:Z,options:f,height:300})})]}))}var H=r(91888),N=["title","subheader","data"];function Y(e){var t=e.title,r=e.subheader,o=e.data,a=(0,n.Z)(e,N);return(0,j.jsxs)(c.Z,(0,i.Z)((0,i.Z)({},a),{},{children:[(0,j.jsx)(F.Z,{title:t,subheader:r}),(0,j.jsx)(W.Z,{spacing:4,sx:{p:3},children:o.map((function(e){return(0,j.jsx)(E,{progress:e},e.label)}))})]}))}function E(e){var t=e.progress;return(0,j.jsxs)(W.Z,{spacing:1,children:[(0,j.jsxs)(W.Z,{direction:"row",alignItems:"center",children:[(0,j.jsx)(h.Z,{variant:"subtitle2",sx:{flexGrow:1},children:t.label}),(0,j.jsx)(h.Z,{variant:"subtitle2",children:(0,R.e_)(t.amount)}),(0,j.jsxs)(h.Z,{variant:"body2",sx:{color:"text.secondary"},children:["\xa0(",(0,R.f2)(t.value),")"]})]}),(0,j.jsx)(H.Z,{variant:"determinate",value:t.value,color:("Total Income"===t.label?"info":"Total Expenses"===t.label&&"warning")||"primary"})]})}var X=r(63402),J=["title","percent","total","chart","sx"];function M(e){var t=e.title,r=e.percent,o=e.total,a=e.chart,s=e.sx,d=(0,n.Z)(e,J),x=a.colors,u=a.series,Z=a.options,p=(0,y.Q8)((0,i.Z)({colors:x,chart:{animations:{enabled:!0},sparkline:{enabled:!0}},stroke:{width:2},tooltip:{x:{show:!1},y:{formatter:function(e){return(0,R.FK)(e)},title:{formatter:function(){return""}}},marker:{show:!1}}},Z));return(0,j.jsxs)(c.Z,(0,i.Z)((0,i.Z)({sx:(0,i.Z)({display:"flex",alignItems:"center",p:3},s)},d),{},{children:[(0,j.jsxs)(l.Z,{sx:{flexGrow:1},children:[(0,j.jsx)(h.Z,{variant:"subtitle2",paragraph:!0,children:t}),(0,j.jsx)(h.Z,{variant:"h3",gutterBottom:!0,children:(0,R.FK)(o)}),(0,j.jsx)(U,{percent:r})]}),(0,j.jsx)(y.ZP,{type:"line",series:[{data:u}],options:p,width:120,height:80})]}))}function U(e){var t=e.percent;return(0,j.jsxs)(W.Z,{direction:"row",alignItems:"center",sx:{mt:2,mb:1},children:[(0,j.jsx)(X.Z,{icon:t<0?"eva:trending-down-fill":"eva:trending-up-fill",sx:(0,i.Z)({mr:1,p:.5,width:24,height:24,borderRadius:"50%",color:"success.main",bgcolor:function(e){return(0,a.Fq)(e.palette.success.main,.16)}},t<0&&{color:"error.main",bgcolor:function(e){return(0,a.Fq)(e.palette.error.main,.16)}})}),(0,j.jsxs)(h.Z,{variant:"subtitle2",component:"div",noWrap:!0,children:[t>0&&"+",(0,R.f2)(t),(0,j.jsx)(l.Z,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:" than last week"})]})]})}var V=r(46283),$=r(16455),ee=["title","subheader","list"];function te(e){var t=e.title,r=e.subheader,o=e.list,a=(0,n.Z)(e,ee);return(0,j.jsxs)(c.Z,(0,i.Z)((0,i.Z)({},a),{},{children:[(0,j.jsx)(F.Z,{title:t,subheader:r}),(0,j.jsx)(P.Z,{children:(0,j.jsx)(W.Z,{spacing:3,sx:{p:3,pr:0},children:o.map((function(e){return(0,j.jsx)(re,{product:e},e.id)}))})})]}))}function re(e){var t=e.product,r=t.name,n=t.image,i=t.price,o=t.priceSale,a=o>0;return(0,j.jsxs)(W.Z,{direction:"row",spacing:2,children:[(0,j.jsx)(Z.Z,{alt:r,src:n,sx:{width:48,height:48,borderRadius:1.5,flexShrink:0}}),(0,j.jsxs)(l.Z,{sx:{flexGrow:1,minWidth:200},children:[(0,j.jsx)(V.Z,{sx:{color:"text.primary",typography:"subtitle2"},children:r}),(0,j.jsxs)(W.Z,{direction:"row",children:[a&&(0,j.jsx)(h.Z,{variant:"body2",sx:{color:"text.secondary",textDecoration:"line-through"},children:(0,R.e_)(o)}),"\xa0",(0,j.jsx)(h.Z,{variant:"body2",sx:{color:o?"error.main":"text.secondary"},children:(0,R.e_)(i)})]})]}),(0,j.jsx)($.ZQ,{limit:3,colors:t.colors,sx:{minWidth:72,pr:3}})]})}var ne=["title","sentAmount","currentBalance","sx"];function ie(e){var t=e.title,r=e.sentAmount,o=e.currentBalance,a=e.sx,s=(0,n.Z)(e,ne),l=o-r;return(0,j.jsxs)(c.Z,(0,i.Z)((0,i.Z)({sx:(0,i.Z)({p:3},a)},s),{},{children:[(0,j.jsx)(h.Z,{variant:"subtitle2",gutterBottom:!0,children:t}),(0,j.jsxs)(W.Z,{spacing:2,children:[(0,j.jsx)(h.Z,{variant:"h3",children:(0,R.e_)(l)}),(0,j.jsxs)(W.Z,{direction:"row",justifyContent:"space-between",children:[(0,j.jsx)(h.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Your Current Balance"}),(0,j.jsx)(h.Z,{variant:"body2",children:(0,R.e_)(o)})]}),(0,j.jsxs)(W.Z,{direction:"row",justifyContent:"space-between",children:[(0,j.jsx)(h.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Sent Amount"}),(0,j.jsxs)(h.Z,{variant:"body2",children:["- ",(0,R.e_)(r)]})]}),(0,j.jsxs)(W.Z,{direction:"row",justifyContent:"space-between",children:[(0,j.jsx)(h.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Total Amount"}),(0,j.jsx)(h.Z,{variant:"subtitle1",children:(0,R.e_)(l)})]}),(0,j.jsxs)(W.Z,{direction:"row",spacing:1.5,children:[(0,j.jsx)(x.Z,{fullWidth:!0,variant:"contained",color:"warning",children:"Transfer"}),(0,j.jsx)(x.Z,{fullWidth:!0,variant:"contained",children:"Receive"})]})]})]}))}}}]);
//# sourceMappingURL=5755.0cd3e2f4.chunk.js.map