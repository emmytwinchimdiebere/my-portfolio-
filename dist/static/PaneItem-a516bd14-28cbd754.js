import{a3 as D,aT as T,aU as _,aV as R,H as c,aW as E,J as e,aX as F,aD as j,ah as L,aY as M,aZ as W,a_ as B,a$ as U,b0 as $}from"./sanity-9d7a2574.js";const z=(t,n)=>({title:e.jsxs("em",{children:["No schema found for type ",e.jsx("code",{children:n})]}),subtitle:e.jsxs("em",{children:["Document: ",e.jsx("code",{children:t})]}),media:()=>e.jsx($,{})});function H(t){const{layout:n,value:s}=t;return e.jsx(j,{...z(s._id,s._type),layout:n})}function p(t,n,s){return t===!1?!1:t||n&&n.icon||s||!1}function K(t){const{icon:n,id:s,layout:i="default",pressed:g,schemaType:a,selected:u,title:l,value:o,margin:P,marginBottom:k,marginTop:y}=t,I=D(),d=T(),{ChildLink:m}=_(),f=R(s),h=!!(a&&a.name&&I.get(a.name)),[v,r]=c.useState(!1),b=c.useMemo(()=>o&&E(o)?!a||!h?e.jsx(H,{value:o}):e.jsx(F,{documentPreviewStore:d,icon:p(n,a,B),layout:i,schemaType:a,value:o,presence:f}):e.jsx(j,{status:e.jsx(L,{muted:!0,children:e.jsx(M,{})}),icon:p(n,a,U),layout:i,title:l}),[d,h,n,i,a,l,o,f]),C=c.useMemo(()=>function(w){return e.jsx(m,{...w,childId:s})},[m,s]),S=c.useCallback(x=>{if(x.metaKey){r(!1);return}r(!0)},[]);return c.useEffect(()=>r(!1),[u]),e.jsx(W,{__unstable_focusRing:!0,as:C,"data-as":"a","data-ui":"PaneItem",margin:P,marginBottom:k,marginTop:y,onClick:S,padding:2,pressed:g,radius:2,selected:u||v,sizing:"border",tabIndex:-1,tone:"inherit",children:b})}export{K as P};