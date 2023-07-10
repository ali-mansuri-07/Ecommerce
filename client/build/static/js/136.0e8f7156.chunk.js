"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[136],{74136:function(e,n,t){t.d(n,{Z:function(){return A}});var r=t(87462),l=t(4942),o=t(15671),i=t(43144),a=t(60136),c=t(27277),s=t(72791),u=t(68801),p=t(81694),d=t.n(p),m=t(41818),f=(0,s.createContext)({inlineCollapsed:!1}),v=t(61113),h=function(e){(0,a.Z)(t,e);var n=(0,c.Z)(t);function t(){return(0,o.Z)(this,t),n.apply(this,arguments)}return(0,i.Z)(t,[{key:"renderTitle",value:function(e){var n=this.props,t=n.icon,r=n.title,l=n.level,o=n.rootPrefixCls;if(!t)return e&&1===l&&r&&"string"===typeof r?s.createElement("div",{className:"".concat(o,"-inline-collapsed-noicon")},r.charAt(0)):r;var i=(0,v.l$)(r)&&"span"===r.type;return s.createElement(s.Fragment,null,t,i?r:s.createElement("span",null,r))}},{key:"render",value:function(){var e=this,n=this.props,t=n.rootPrefixCls,l=n.popupClassName;return s.createElement(f.Consumer,null,(function(n){var o=n.inlineCollapsed,i=n.antdMenuTheme;return s.createElement(u.Wd,(0,r.Z)({},(0,m.Z)(e.props,["icon"]),{title:e.renderTitle(o),popupClassName:d()(t,"".concat(t,"-").concat(i),l)}))}))}}]),t}(s.Component);h.contextType=f,h.isSubMenu=1;var C=h,y=t(85501),Z=t(14598),g=s.createContext({}),E=(function(){var e=0}(),function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]])}return t}),N=function(e){(0,a.Z)(t,e);var n=(0,c.Z)(t);function t(){var e;return(0,o.Z)(this,t),(e=n.apply(this,arguments)).renderItem=function(n){var t=n.siderCollapsed,o=e.props,i=o.level,a=o.className,c=o.children,p=o.rootPrefixCls,m=e.props,h=m.title,C=m.icon,g=m.danger,N=E(m,["title","icon","danger"]);return s.createElement(f.Consumer,null,(function(n){var o,m,f=n.inlineCollapsed,E=n.direction,b=h;"undefined"===typeof h?b=1===i?c:"":!1===h&&(b="");var x={title:b};t||f||(x.title=null,x.visible=!1);var I=(0,y.Z)(c).length;return s.createElement(Z.Z,(0,r.Z)({},x,{placement:"rtl"===E?"left":"right",overlayClassName:"".concat(p,"-inline-collapsed-tooltip")}),s.createElement(u.ck,(0,r.Z)({},N,{className:d()((o={},(0,l.Z)(o,"".concat(p,"-item-danger"),g),(0,l.Z)(o,"".concat(p,"-item-only-child"),1===(C?I+1:I)),o),a),title:h}),(0,v.Tm)(C,{className:d()((0,v.l$)(C)?null===(m=C.props)||void 0===m?void 0:m.className:"","".concat(p,"-item-icon"))}),e.renderItemChildren(f)))}))},e}return(0,i.Z)(t,[{key:"renderItemChildren",value:function(e){var n=this.props,t=n.icon,r=n.children,l=n.level,o=n.rootPrefixCls;return!t||(0,v.l$)(r)&&"span"===r.type?r&&e&&1===l&&"string"===typeof r?s.createElement("div",{className:"".concat(o,"-inline-collapsed-noicon")},r.charAt(0)):r:s.createElement("span",null,r)}},{key:"render",value:function(){return s.createElement(g.Consumer,null,this.renderItem)}}]),t}(s.Component);N.isMenuItem=!0;var b=t(23785),x=t(14824),I=function(){return{height:0,opacity:0}},P=function(e){return{height:e.scrollHeight,opacity:1}},k=function(e,n){return"height"===n.propertyName},M={motionName:"ant-motion-collapse",onAppearStart:I,onEnterStart:I,onAppearActive:P,onEnterActive:P,onLeaveStart:function(e){return{height:e.offsetHeight}},onLeaveActive:I,onAppearEnd:k,onEnterEnd:k,onLeaveEnd:k,motionDeadline:500},S=function(e){(0,a.Z)(t,e);var n=(0,c.Z)(t);function t(e){var i;return(0,o.Z)(this,t),(i=n.call(this,e)).renderMenu=function(e){var n=e.getPopupContainer,t=e.getPrefixCls,o=e.direction,a=i.props,c=a.prefixCls,p=a.className,m=a.theme,h=a.expandIcon,C={horizontal:{motionName:"slide-up"},inline:M,other:{motionName:"zoom-big"}},y=t("menu",c),Z=d()("".concat(y,"-").concat(m),(0,l.Z)({},"".concat(y,"-inline-collapsed"),i.getInlineCollapsed()),p);return s.createElement(f.Provider,{value:{inlineCollapsed:i.getInlineCollapsed()||!1,antdMenuTheme:m,direction:o}},s.createElement(u.ZP,(0,r.Z)({getPopupContainer:n},i.props,{className:Z,prefixCls:y,direction:o,defaultMotions:C,expandIcon:(0,v.Tm)(h,{className:"".concat(y,"-submenu-expand-icon")})})))},(0,x.Z)(!("inlineCollapsed"in e&&"inline"!==e.mode),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),(0,x.Z)(!(void 0!==e.siderCollapsed&&"inlineCollapsed"in e),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."),i}return(0,i.Z)(t,[{key:"getInlineCollapsed",value:function(){var e=this.props,n=e.inlineCollapsed,t=e.siderCollapsed;return void 0!==t?t:n}},{key:"render",value:function(){return s.createElement(b.C,null,this.renderMenu)}}]),t}(s.Component);S.defaultProps={className:"",theme:"light",focusable:!1};var O=function(e){(0,a.Z)(t,e);var n=(0,c.Z)(t);function t(){return(0,o.Z)(this,t),n.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){var e=this;return s.createElement(g.Consumer,null,(function(n){return s.createElement(S,(0,r.Z)({},e.props,n))}))}}]),t}(s.Component);O.Divider=u.iz,O.Item=N,O.SubMenu=C,O.ItemGroup=u.BW;var A=O}}]);
//# sourceMappingURL=136.0e8f7156.chunk.js.map