"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[422],{16177:function(e,t,s){s.r(t),s.d(t,{default:function(){return U}});var n=s(1413),o=s(29439),i=s(72791),r=s(74136),l=s(75594),c=s.p+"static/media/Logo3.f8061912ee5ad7108d69.png",a=s(11890),h=s(72643),d=s(86533),x=s(50713),u=s(29529),m=s(92414),j=s(87962),f=s(91523),g=s(31610),p=(s(84480),s(260),s(59434)),b=s(28931),w=s(11730),Z=s(80184),N=function(){var e=(0,p.I0)(),t=(0,p.v9)((function(e){return(0,n.Z)({},e)})).search.text,s=(0,b.k6)(),o=function(e){e.preventDefault(),s.push("/shop?".concat(t))};return(0,Z.jsxs)("form",{className:"form-inline my-2 my-lg-0",onSubmit:o,children:[(0,Z.jsx)("input",{onChange:function(t){e({type:"SEARCH_QUERY",payload:{text:t.target.value}})},type:"search",value:t,className:"form-control mr-sm-2 text-white",placeholder:"Search"}),(0,Z.jsx)(w.Z,{onClick:o,style:{cursor:"pointer"}})]})},k=r.Z.SubMenu,y=r.Z.Item,U=function(){var e=(0,i.useState)("home"),t=(0,o.Z)(e,2),s=t[0],w=t[1],U=(0,p.I0)(),v=(0,p.v9)((function(e){return(0,n.Z)({},e)})),C=v.user,S=v.cart,L=(0,b.k6)();return(0,Z.jsxs)(r.Z,{onClick:function(e){w(e.key)},selectedKeys:[s],mode:"horizontal",className:"bg-dark text-white",children:[(0,Z.jsx)(y,{icon:(0,Z.jsx)("img",{src:c,className:"logo",alt:""}),children:(0,Z.jsx)(f.rU,{to:"/",className:"font-weight-bold text-white"})},"home"),(0,Z.jsx)(y,{icon:(0,Z.jsx)(a.Z,{}),children:(0,Z.jsx)(f.rU,{to:"/",className:"font-weight-bold text-white",children:"Home"})},"home"),(0,Z.jsx)(y,{icon:(0,Z.jsx)(h.Z,{}),children:(0,Z.jsx)(f.rU,{to:"/shop",className:"font-weight-bold text-white",children:"Shop"})},"shop"),(0,Z.jsx)(y,{icon:(0,Z.jsx)(d.Z,{}),children:(0,Z.jsx)(f.rU,{to:"/cart",children:(0,Z.jsx)(l.Z,{count:S&&S.length,offset:[9,0],className:"font-weight-bold text-white",children:"Cart"})})},"cart"),!C&&(0,Z.jsx)(y,{icon:(0,Z.jsx)(x.Z,{}),className:"float-right",children:(0,Z.jsx)(f.rU,{to:"/register",className:"font-weight-bold",children:"Register"})},"register"),!C&&(0,Z.jsx)(y,{icon:(0,Z.jsx)(u.Z,{}),className:"float-right",children:(0,Z.jsx)(f.rU,{to:"/login",className:"font-weight-bold",children:"Login"})},"login"),C&&(0,Z.jsxs)(k,{icon:(0,Z.jsx)(m.Z,{}),title:C.email&&C.email.split("@")[0],className:"float-right font-weight-bold",children:[C&&"subscriber"===C.role&&(0,Z.jsx)(y,{children:(0,Z.jsx)(f.rU,{to:"/user/history",children:"Dashboard"})}),C&&"admin"===C.role&&(0,Z.jsx)(y,{children:(0,Z.jsx)(f.rU,{to:"/admin/dashboard",className:"font-weight-bold",children:"Dashboard"})}),(0,Z.jsx)(y,{icon:(0,Z.jsx)(j.Z,{}),onClick:function(){g.Z.auth().signOut(),U({type:"LOGOUT",payload:null}),L.push("/login")},children:"Logout"})]}),(0,Z.jsx)("span",{className:"float-right p-1",children:(0,Z.jsx)(N,{})})]})}}}]);
//# sourceMappingURL=422.7139a5df.chunk.js.map