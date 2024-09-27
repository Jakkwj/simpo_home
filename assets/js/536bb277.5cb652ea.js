"use strict";(self.webpackChunksimpo_home=self.webpackChunksimpo_home||[]).push([[4593],{5216:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var l=t(4848),r=t(8453),a=t(4784),s=t(1470),i=t(9365);const o={},u="Installtion",c={id:"Tutorials/Installtion",title:"Installtion",description:"As a cross-platform web-based platform, SIMPO works on Windows, Linux, and Mac (Pending) operating",source:"@site/docs/Tutorials/Installtion.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/Installtion",permalink:"/docs/Tutorials/Installtion",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tutorials/Installtion.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Tutorials",permalink:"/docs/Tutorials/"},next:{title:"BioModel",permalink:"/docs/Tutorials/BioModel"}},d={},h=[{value:"Ubuntu",id:"ubuntu",level:3}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"installtion",children:"Installtion"})}),"\n",(0,l.jsxs)(n.p,{children:["As a cross-platform web-based platform, ",(0,l.jsx)(n.strong,{children:"SIMPO"})," works on Windows, Linux, and Mac (Pending) operating\nsystems. Therefore, it can leverage the power of supercomputers, as their systems are usually\nLinux-based."]}),"\n",(0,l.jsxs)(n.p,{children:["To calculate a ",(0,l.jsx)(n.strong,{children:"SIMPO"})," project, you need to download and install the calculation client, and then sign up and sign in to ",(0,l.jsx)("a",{href:a.default.customFields.urlDashHome,children:"Dashborad"}),"."]}),"\n",(0,l.jsx)(n.admonition,{title:"NOTE",type:"warning",children:(0,l.jsxs)(n.p,{children:["The client will automatically run once you start calculating, you ",(0,l.jsx)("b",{children:"cannot run it by double click it"}),"."]})}),"\n",(0,l.jsxs)(n.p,{children:["While running a calcualtion task, the client will stay in the system tray. Right click the client icon can get relevant informations. For instance, log file becomes very important if your calcualtion goes wrong, click ",(0,l.jsx)(n.strong,{children:"Log"})," and open the ",(0,l.jsx)(n.code,{children:"run.log"})," to see what happened."]}),"\n",(0,l.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,l.jsx)(n.p,{children:"You will not be able to run calculations if you don't install the client, but you can still sign in and use the other functions (i.e. editting you own repositories, browsing and cloning the public repositories)."})}),"\n",(0,l.jsxs)(s.A,{children:[(0,l.jsx)(i.A,{value:"windows",label:"Windows",default:!0,children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsxs)(n.p,{children:["Download and install the client: ",(0,l.jsx)("a",{href:a.default.customFields.urlDownloadClientWindows,target:"_blank",download:!0,children:"Windows"}),"."]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(n.p,{children:["Uninstall: click the ",(0,l.jsx)("code",{children:"Uninstall SimpoClient"})," in startup menu, or click ",(0,l.jsx)("code",{children:"C:\\Program Files\\SimpoClient\\unins000.exe"}),"."]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(n.p,{children:["Available: ",(0,l.jsx)("b",{children:"Windows 10"})," (and above)."]})})]})}),(0,l.jsxs)(i.A,{value:"linux",label:"Linux",children:[(0,l.jsx)(n.h3,{id:"ubuntu",children:"Ubuntu"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsxs)(n.p,{children:["Download:\n",(0,l.jsx)("a",{href:a.default.customFields.urlDownloalClientUbuntu,target:"_blank",download:!0,children:"Ubuntu"}),", then run: ",(0,l.jsx)("code",{children:"chmod +x SimpoClient_installer.sh && sudo ./SimpoClient_installer.sh"}),"."]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(n.p,{children:["Uninstall: ",(0,l.jsx)("code",{children:"cd /opt/SimpoClient/ && sudo ./uninstall.sh"}),"."]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(n.p,{children:["Available: ",(0,l.jsx)("b",{children:"Ubuntu 20"})," (and above)."]})})]})]}),(0,l.jsx)(i.A,{value:"mac",label:"Mac",children:(0,l.jsx)("ul",{children:(0,l.jsx)("li",{children:"Pending..."})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var l=t(8215);const r={tabItem:"tabItem_Ymn6"};var a=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var l=t(6540),r=t(8215),a=t(3104),s=t(6347),i=t(205),o=t(7485),u=t(1682),c=t(679);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:l,default:r}}=e;return{value:n,label:t,attributes:l,default:r}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,l.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:a}))),[u,d]=m({queryString:t,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,c.Dv)(t);return[r,(0,l.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),x=(()=>{const e=u??b;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function v(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),r=i[t].value;r!==l&&(u(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":l===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var l=t(6540);const r={},a=l.createContext(r);function s(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);