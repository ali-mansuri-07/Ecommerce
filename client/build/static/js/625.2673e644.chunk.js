"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[625],{2066:function(n,t,e){var r=e(1413),a=(e(72791),e(3466)),c=e.n(a),s=e(74569),o=e.n(s),u=e(59434),i=e(75594),l=e(67734),p=e(80184);t.Z=function(n){var t=n.values,e=n.setValues,a=n.setLoading,s=(0,u.v9)((function(n){return(0,r.Z)({},n)})).user;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"row",children:t.images&&t.images.map((function(n){return(0,p.jsx)(i.Z,{count:"X",onClick:function(){return c=n.public_id,a(!0),void o().post("".concat("http://localhost:8000/api","/removeimage"),{public_id:c},{headers:{authtoken:s?s.token:""}}).then((function(n){a(!1);var s=t.images.filter((function(n){return n.public_id!==c}));e((0,r.Z)((0,r.Z)({},t),{},{images:s}))})).catch((function(n){console.log(n),a(!1)}));var c},style:{cursor:"pointer"},children:(0,p.jsx)(l.C,{src:n.url,size:100,shape:"square",className:"ml-3"})},n.public_id)}))}),(0,p.jsx)("div",{className:"row",children:(0,p.jsxs)("label",{className:"btn btn-primary btn-raised mt-3",children:["Choose File",(0,p.jsx)("input",{type:"file",multiple:!0,hidden:!0,accept:"images/*",onChange:function(n){var u=n.target.files,i=t.images;if(u){a(!0);for(var l=0;l<u.length;l++)c().imageFileResizer(u[l],720,720,"JPEG",100,0,(function(n){o().post("".concat("http://localhost:8000/api","/uploadimages"),{image:n},{headers:{authtoken:s?s.token:""}}).then((function(n){console.log("IMAGE UPLOAD RES DATA",n),a(!1),i.push(n.data),e((0,r.Z)((0,r.Z)({},t),{},{images:i}))})).catch((function(n){a(!1),console.log("CLOUDINARY UPLOAD ERR",n)}))}),"base64")}}})]})})]})}},77834:function(n,t,e){e(72791);var r=e(91523),a=e(80184);t.Z=function(){return(0,a.jsx)("nav",{children:(0,a.jsxs)("ul",{className:"nav flex-column",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/dashboard",className:"nav-link",children:"Dashboard"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/product",className:"nav-link",children:"Product"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/products",className:"nav-link",children:"Products"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/category",className:"nav-link",children:"Category"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/sub",className:"nav-link",children:"Sub Category"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/coupon",className:"nav-link",children:"Coupon"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/user/password",className:"nav-link",children:"Password"})})]})})}},86729:function(n,t,e){e.d(t,{CP:function(){return o},Gu:function(){return h},k4:function(){return p},n3:function(){return u},sT:function(){return i},yr:function(){return l}});var r=e(74165),a=e(15861),c=e(74569),s=e.n(c),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat("http://localhost:8000/api","/categories"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat("http://localhost:8000/api","/category/").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().delete("".concat("http://localhost:8000/api","/category/").concat(t),{headers:{authtoken:e}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e,a){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().put("".concat("http://localhost:8000/api","/category/").concat(t),e,{headers:{authtoken:a}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().post("".concat("http://localhost:8000/api","/category"),t,{headers:{authtoken:e}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat("http://localhost:8000/api","/category/subs/").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},57027:function(n,t,e){e.d(t,{Ej:function(){return f},RB:function(){return v},Xp:function(){return h},Y2:function(){return d},cE:function(){return m},kh:function(){return i},nM:function(){return p},ry:function(){return o},su:function(){return u},wv:function(){return l}});var r=e(74165),a=e(15861),c=e(74569),s=e.n(c),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().post("".concat("http://localhost:8000/api","/product"),t,{headers:{authtoken:e}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat("http://localhost:8000/api","/products/").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().delete("".concat("http://localhost:8000/api","/product/").concat(t),{headers:{authtoken:e}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat("http://localhost:8000/api","/product/").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e,a){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().put("".concat("http://localhost:8000/api","/product/").concat(t),e,{headers:{authtoken:a}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e,a){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().post("".concat("http://localhost:8000/api","/products"),{sort:t,order:e,page:a});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat("http://localhost:8000/api","/products/total"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e,a){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().put("".concat("http://localhost:8000/api","/product/star/").concat(t),{star:e},{headers:{authtoken:a}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),m=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat("http://localhost:8000/api","/product/related/").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().post("".concat("http://localhost:8000/api","/search/filters"),t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},34625:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r=e(4942),a=e(1413),c=e(29439),s=e(72791),o=e(77834),u=e(9085),i=e(59434),l=e(57027),p=e(86729),h=e(2066),d=e(77106),f=e(42220),m=e(80184),v=f.Z.Option,x=function(n){var t=n.handleSubmit,e=n.handleChange,r=(n.setValues,n.values),a=n.handleCategoryChange,c=n.categories,s=n.subOptions,o=n.arrayOfSubs,u=n.setArrayOfSubs,i=n.selectedCategory,l=r.title,p=r.description,h=r.price,d=r.category,x=(r.subs,r.shipping),g=r.quantity,Z=(r.images,r.colors),j=r.brands,b=r.color,y=r.brand;return(0,m.jsxs)("form",{onSubmit:t,children:[(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Title"}),(0,m.jsx)("input",{type:"text",name:"title",className:"form-control",value:l,onChange:e})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Description"}),(0,m.jsx)("input",{type:"text",name:"description",className:"form-control",value:p,onChange:e})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Price"}),(0,m.jsx)("input",{type:"number",name:"price",className:"form-control",value:h,onChange:e})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Shipping"}),(0,m.jsxs)("select",{value:"Yes"===x?"Yes":"No",name:"shipping",className:"form-control",onChange:e,children:[(0,m.jsx)("option",{value:"No",children:"No"}),(0,m.jsx)("option",{value:"Yes",children:"Yes"})]})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Quantity"}),(0,m.jsx)("input",{type:"number",name:"quantity",className:"form-control",value:g,onChange:e})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Color"}),(0,m.jsx)("select",{value:b,name:"color",className:"form-control",onChange:e,children:Z.map((function(n){return(0,m.jsx)("option",{value:n,children:n},n)}))})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Brand"}),(0,m.jsx)("select",{value:y,name:"brand",className:"form-control",onChange:e,children:j.map((function(n){return(0,m.jsx)("option",{value:n,children:n},n)}))})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Category"}),(0,m.jsx)("select",{name:"category",className:"form-control",onChange:a,value:i||d._id,children:c.length>0&&c.map((function(n){return(0,m.jsx)("option",{value:n._id,children:n.name},n._id)}))})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("label",{children:"Sub Categories"}),(0,m.jsx)(f.Z,{mode:"multiple",style:{width:"100%"},placeholder:"Please select",value:o,onChange:function(n){return u(n)},children:s&&s.length&&s.map((function(n){return(0,m.jsx)(v,{value:n._id,children:n.name},n._id)}))})]}),(0,m.jsx)("br",{}),(0,m.jsx)("button",{className:"btn btn-outline-info",children:"Save"})]})},g={title:"",description:"",price:"",category:"",subs:[],shipping:"",quantity:"",images:[],colors:["Black","Brown","Silver","White","Blue"],brands:["Apple","Samsung","Microsoft","Lenovo","ASUS"],color:"",brand:""},Z=function(n){var t=n.match,e=n.history,f=(0,s.useState)(g),v=(0,c.Z)(f,2),Z=v[0],j=v[1],b=(0,s.useState)([]),y=(0,c.Z)(b,2),N=y[0],k=y[1],w=(0,s.useState)([]),C=(0,c.Z)(w,2),S=C[0],A=C[1],O=(0,s.useState)([]),E=(0,c.Z)(O,2),P=E[0],U=E[1],R=(0,s.useState)(""),T=(0,c.Z)(R,2),_=T[0],D=T[1],G=(0,s.useState)(!1),I=(0,c.Z)(G,2),Y=I[0],L=I[1],B=(0,i.v9)((function(n){return(0,a.Z)({},n)})).user,q=t.params.slug;(0,s.useEffect)((function(){M(),V()}),[]);var M=function(){(0,l.wv)(q).then((function(n){j((0,a.Z)((0,a.Z)({},Z),n.data)),(0,p.Gu)(n.data.category._id).then((function(n){A(n.data)}));var t=[];n.data.subs.map((function(n){t.push(n._id)})),console.log("ARR",t),U((function(n){return t}))}))},V=function(){return(0,p.CP)().then((function(n){console.log("GET CATEGORIES IN UPDATE PRODUCT",n.data),k(n.data)}))};return(0,m.jsx)("div",{className:"container-fluid",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-md-2",children:(0,m.jsx)(o.Z,{})}),(0,m.jsxs)("div",{className:"col-md-10",children:[Y?(0,m.jsx)(d.Z,{className:"text-danger h1"}):(0,m.jsx)("h4",{children:"Product update"}),(0,m.jsx)("div",{className:"p-3",children:(0,m.jsx)(h.Z,{values:Z,setValues:j,setLoading:L})}),(0,m.jsx)(x,{handleSubmit:function(n){n.preventDefault(),L(!0),Z.subs=P,Z.category=_||Z.category,(0,l.nM)(q,Z,B.token).then((function(n){L(!1),u.Am.success('"'.concat(n.data.title,'" is updated')),e.push("/admin/products")})).catch((function(n){console.log(n),L(!1),u.Am.error(n.response.data.err)}))},handleChange:function(n){j((0,a.Z)((0,a.Z)({},Z),{},(0,r.Z)({},n.target.name,n.target.value)))},setValues:j,values:Z,handleCategoryChange:function(n){n.preventDefault(),console.log("CLICKED CATEGORY",n.target.value),j((0,a.Z)((0,a.Z)({},Z),{},{subs:[]})),D(n.target.value),(0,p.Gu)(n.target.value).then((function(n){console.log("SUB OPTIONS ON CATGORY CLICK",n),A(n.data)})),console.log("EXISTING CATEGORY values.category",Z.category),Z.category._id===n.target.value&&M(),U([])},categories:N,subOptions:S,arrayOfSubs:P,setArrayOfSubs:U,selectedCategory:_}),(0,m.jsx)("hr",{})]})]})})}}}]);
//# sourceMappingURL=625.2673e644.chunk.js.map