"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[541],{8541:function(e,t,n){n.r(t);var r=n(74165),s=n(15861),a=n(1413),i=n(29439),c=n(72791),o=n(63108),l=n(9085),u=n(59434),m=n(80184);t.default=function(e){var t=e.history,n=(0,c.useState)(""),f=(0,i.Z)(n,2),h=f[0],p=f[1],d=(0,u.v9)((function(e){return(0,a.Z)({},e)})).user;(0,c.useEffect)((function(){d&&d.token&&t.push("/")}),[d,t]);var v=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={url:"http://localhost:3000/register/complete",handleCodeInApp:!0},e.next=4,o.I.sendSignInLinkToEmail(h,n);case 4:l.Am.success("Email is sent to ".concat(h,". Click the link to complete your registration.")),window.localStorage.setItem("emailForRegistration",h),p("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsx)("div",{className:"container p-5",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsxs)("div",{className:"col-md-6 offset-md-3",children:[(0,m.jsx)("h4",{children:"Register"}),(0,m.jsxs)("form",{onSubmit:v,children:[(0,m.jsx)("input",{type:"email",className:"form-control",value:h,onChange:function(e){return p(e.target.value)},placeholder:"Your email",autoFocus:!0}),(0,m.jsx)("br",{}),(0,m.jsx)("button",{type:"submit",className:"btn btn-raised",children:"Register"})]})]})})})}}}]);
//# sourceMappingURL=541.cf93f25a.chunk.js.map