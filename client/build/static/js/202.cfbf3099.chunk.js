"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[202],{98189:function(t,n,e){var r=e(1413),a=e(29439),c=e(72791),s=e(83833),u=e(14598),i=e(24215),o=e(86533),l=e(68823),p=e(91523),d=e(50538),f=e(763),h=e.n(f),x=e(59434),m=e(80184),g=s.Z.Meta;n.Z=function(t){var n=t.product,e=(0,c.useState)("Click to add"),f=(0,a.Z)(e,2),v=f[0],Z=f[1],j=(0,x.v9)((function(t){return(0,r.Z)({},t)})),b=(j.user,j.cart,(0,x.I0)()),y=n.images,w=n.title,k=n.description,N=n.slug,S=n.price;return(0,m.jsxs)(m.Fragment,{children:[n&&n.ratings&&n.ratings.length>0?(0,d.m)(n):(0,m.jsx)("div",{className:"text-center pt-1 pb-3",children:"No rating yet"}),(0,m.jsx)(s.Z,{cover:(0,m.jsx)("img",{src:y&&y.length?y[0].url:l,style:{height:"150px",objectFit:"cover"},className:"p-1"}),actions:[(0,m.jsxs)(p.rU,{to:"/product/".concat(N),children:[(0,m.jsx)(i.Z,{className:"text-warning"})," ",(0,m.jsx)("br",{})," View Product"]}),(0,m.jsx)(u.Z,{title:v,children:(0,m.jsxs)("a",{onClick:function(){var t=[];if("undefined"!==typeof window){localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.push((0,r.Z)((0,r.Z)({},n),{},{count:1}));var e=h().uniqWith(t,h().isEqual);localStorage.setItem("cart",JSON.stringify(e)),Z("Added"),b({type:"ADD_TO_CART",payload:e}),b({type:"SET_VISIBLE",payload:!0})}},disabled:n.quantity<1,children:[(0,m.jsx)(o.Z,{className:"text-danger"})," ",(0,m.jsx)("br",{}),n.quantity<1?"Out of stock":"Add to Cart"]})})],children:(0,m.jsx)(g,{title:"".concat(w," - $").concat(S),description:"".concat(k&&k.substring(0,40),"...")})})]})}},50538:function(t,n,e){e.d(n,{m:function(){return c}});e(72791);var r=e(45778),a=e(80184),c=function(t){if(t&&t.ratings){var n=t&&t.ratings,e=[],c=n.length;n.map((function(t){return e.push(t.star)}));var s=e.reduce((function(t,n){return t+n}),0),u=5*s/(5*c);return(0,a.jsx)("div",{className:"text-center pt-1 pb-3",children:(0,a.jsx)("span",{children:(0,a.jsx)(r.Z,{starDimension:"20px",starSpacing:"2px",starRatedColor:"red",rating:u,editing:!1})})})}}},3818:function(t,n,e){e.d(n,{Gt:function(){return p},PU:function(){return o},cy:function(){return i},kL:function(){return u},m$:function(){return l}});var r=e(74165),a=e(15861),c=e(74569),s=e.n(c),u=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat("http://localhost:8000/api","/subs"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat("http://localhost:8000/api","/sub/").concat(n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n,e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().delete("".concat("http://localhost:8000/api","/sub/").concat(n),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n,e,a){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().put("".concat("http://localhost:8000/api","/sub/").concat(n),e,{headers:{authtoken:a}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n,e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().post("".concat("http://localhost:8000/api","/sub"),n,{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()},5202:function(t,n,e){e.r(n);var r=e(29439),a=e(72791),c=e(3818),s=e(98189),u=e(80184);n.default=function(t){var n=t.match,e=(0,a.useState)({}),i=(0,r.Z)(e,2),o=i[0],l=i[1],p=(0,a.useState)([]),d=(0,r.Z)(p,2),f=d[0],h=d[1],x=(0,a.useState)(!1),m=(0,r.Z)(x,2),g=m[0],v=m[1],Z=n.params.slug;return(0,a.useEffect)((function(){v(!0),(0,c.cy)(Z).then((function(t){console.log(JSON.stringify(t.data,null,4)),l(t.data.sub),h(t.data.products),v(!1)}))}),[]),(0,u.jsxs)("div",{className:"container-fluid",children:[(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col",children:g?(0,u.jsx)("h4",{className:"text-center p-3 mt-5 mb-5 display-4 jumbotron",children:"Loading..."}):(0,u.jsxs)("h4",{className:"text-center p-3 mt-5 mb-5 display-4 jumbotron",children:[f.length,' Products in "',o.name,'" sub category']})})}),(0,u.jsx)("div",{className:"row",children:f.map((function(t){return(0,u.jsx)("div",{className:"col",children:(0,u.jsx)(s.Z,{product:t})},t._id)}))})]})}},68823:function(t,n,e){t.exports=e.p+"static/media/laptop.d70fd72a362501f69261.png"}}]);
//# sourceMappingURL=202.cfbf3099.chunk.js.map