import{B as j,G as h,H as l,J as t,K as v,O as _,Q as H,U as B,X as E,Y as I,Z as b,_ as y,$ as k}from"./sanity-9d7a2574.js";function C(e){const{actionHandlers:n,index:o,menuItems:s,menuItemGroups:r,title:i}=e,{features:a}=H();return!(s!=null&&s.length)&&!i?null:t.jsx(B,{actions:t.jsx(E,{menuItems:s,menuItemGroups:r,actionHandlers:n}),backButton:a.backButton&&o>0&&t.jsx(I,{as:b,"data-as":"a",icon:y,mode:"bleed"}),title:i})}var d=Object.freeze,U=Object.defineProperty,w=(e,n)=>d(U(e,"raw",{value:d(n||e.slice())})),u;const G=j(h)(u||(u=w([`
  position: relative;
`])));function O(e){const{children:n}=e,{collapsed:o}=k();return t.jsx(G,{hidden:o,height:"fill",overflow:"auto",children:n})}function z(e){const{index:n,pane:o,paneKey:s,...r}=e,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:R,...x}=o,[c,P]=l.useState(null);return t.jsxs(v,{id:s,minWidth:320,selected:r.isSelected,children:[t.jsx(C,{actionHandlers:c==null?void 0:c.actionHandlers,index:n,menuItems:m,menuItemGroups:p,title:f}),t.jsxs(O,{children:[_.isValidElementType(a)&&l.createElement(a,{...r,...x,ref:P,child:i,paneKey:s}),l.isValidElement(a)&&a]})]})}export{z as default};
