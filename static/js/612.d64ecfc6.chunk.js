"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[612],{3612:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r,i,o,a,s,x,p,c,d,l,u,m,h=t(1413),b=t(5705),f=t(2791),g=t(168),w=t(7691),j=((0,w.ZP)(b.l0)(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 25px;\n  width: 100%;\n  margin-bottom: 20px;\n\n  @media screen and (min-width: 1200px) {\n    max-width: 1000px;\n  }\n"]))),w.ZP.label(i||(i=(0,g.Z)(["\n  margin: 10px auto;\n  min-width: 20px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  position: relative;\n  font-size: 18px;\n  font-family: 'Roboto Serif', serif;\n  font-weight: 400;\n"]))),(0,w.ZP)(b.gN)(o||(o=(0,g.Z)(["\n  font: inherit;\n  letter-spacing: inherit;\n  color: black;\n  outline: none;\n  border: none;\n  border: 1px solid #dad2bc;\n  height: 50px;\n  max-width: 400px;\n  @media screen and (min-width: 1200px) {\n    max-width: 600px;\n  }\n  padding: 16.5px 14px;\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n\n  &:hover,\n  &:focus {\n    border: 1px solid #7c0b2b;\n    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),\n      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n  }\n"]))),w.ZP.button(a||(a=(0,g.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  outline: 0;\n  border: 0;\n  margin: 0 auto;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: inherit;\n  font-family: 'Roboto Serif', serif;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.75;\n  letter-spacing: 0.02857em;\n  text-transform: uppercase;\n  min-width: 64px;\n  max-width: 200px;\n  width: 100%;\n  padding: 6px 16px;\n  border-radius: 4px;\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  color: black;\n  background-color: #59cd90;\n  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),\n    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n\n  &:hover,\n  &:focus {\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  }\n"])))),Z=w.ZP.p(s||(s=(0,g.Z)(["\n  font-size: 18px;\n  color: #f95738;\n  text-transform: uppercase;\n  margin: 0;\n"]))),y=t(1724),v=y.Ry().shape({name:y.Z_().matches(/(^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$)/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("This field is required"),number:y.Z_().matches(/(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("This field is required")}),C=t(9434),P=function(n){return n.contacts.isLoading},z=function(n){return n.contacts.error},k=function(n){return n.contacts.items},_=t(3634),A=t(9085),I=t(4363),S=t(1213),B=t(826),L=t(3821),q=t(3887),F=t(8656),N=t(8494),R=t(184),E=function(){var n=(0,C.v9)(k),e=(0,C.I0)();return(0,R.jsx)(b.J9,{onSubmit:function(t,r){var i=r.resetForm,o=t.name.toLowerCase();n.find((function(n){return n.name.toLowerCase()===o}))?alert("".concat(t.name," is already in contacts")):e((0,_.uK)({name:t.name,number:t.number})).then(A.Am.success("Contact has been added")),i()},validationSchema:v,initialValues:(0,h.Z)({},{name:"",number:""}),children:(0,R.jsx)(b.l0,{children:(0,R.jsxs)(S.g,{spacing:4,align:"flex-start",children:[(0,R.jsxs)(B.B,{children:[(0,R.jsx)(L.Z,{pointerEvents:"none",children:(0,R.jsx)(I.J,{as:N.Bmn,color:"gray.300"})}),(0,R.jsx)(b.gN,{as:q.I,type:"text",name:"name",placeholder:"Name",width:"auto"}),(0,R.jsx)(b.Bc,{name:"name",component:Z})]}),(0,R.jsxs)(B.B,{children:[(0,R.jsx)(L.Z,{pointerEvents:"none",children:(0,R.jsx)(F.q,{color:"gray.300"})}),(0,R.jsx)(b.gN,{as:q.I,type:"tel",name:"number",placeholder:"Phone number",width:"auto"}),(0,R.jsx)(b.Bc,{name:"number",component:Z})]}),(0,R.jsx)(j,{type:"submit","aria-label":"Add contact",children:"Submit"})]})})})},J=w.ZP.div(x||(x=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin: 0 auto;\n  justify-content: center;\n"]))),T=w.ZP.div(p||(p=(0,g.Z)(["\n  margin-right: 30px;\n  display: flex;\n  gap: 10px;\n"]))),K=w.ZP.span(c||(c=(0,g.Z)(["\n  font-size: 20px;\n  font-family: 'Crimson Text', serif;\n"]))),D=w.ZP.button(d||(d=(0,g.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  outline: 0;\n  border: 0;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  text-decoration: none;\n  color: inherit;\n  font-family: 'Roboto Serif', serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.75;\n  letter-spacing: 0.03;\n  max-width: 200px;\n  width: 100%;\n  padding: 6px 8px;\n  border-radius: 4px;\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  color: black;\n  background-color: #f79d84;\n  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),\n    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n\n  &:hover,\n  &:focus {\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  }\n"]))),G=t(1243),M=function(n){var e=n.name,t=n.number,r=n.id,i=(0,C.I0)();return(0,R.jsxs)(J,{children:[(0,R.jsxs)(T,{children:[(0,R.jsx)(K,{children:e}),(0,R.jsx)(K,{children:t})]}),(0,R.jsxs)(D,{type:"button",onClick:function(){return function(n){i((0,_.GK)(n)).then(A.Am.success("Contact has been deleted"))}(r)},children:["Delete contact ",(0,R.jsx)(G.p,{})]})]})},V=w.ZP.ul(l||(l=(0,g.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  width: 100%;\n"]))),$=w.ZP.li(u||(u=(0,g.Z)(["\n  margin: 10px auto;\n"]))),H=w.ZP.h2(m||(m=(0,g.Z)(["\n  font-family: 'Roboto Serif', serif;\n  margin: 20px auto;\n  padding: 0;\n"]))),O=function(n){return n.filter},Q=function(){var n=(0,C.v9)(k),e=(0,C.v9)(O),t=e?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):n;return(0,R.jsx)(V,{children:t.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,R.jsx)($,{children:(0,R.jsx)(M,{name:e,number:t,id:r})},r)}))})},U=t(9585),W=function(){var n=(0,C.I0)();return(0,R.jsx)(q.I,{variant:"outline",placeholder:"Find contact by name",type:"text",name:"filter",width:"auto",onChange:function(e){var t=e.target.value;n((0,U.a)(t))}})},X=function(){var n=(0,C.v9)(P),e=(0,C.v9)(z),t=(0,C.v9)(k),r=(0,C.I0)();return(0,f.useEffect)((function(){r((0,_.yF)())}),[r]),(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(E,{}),(0,R.jsx)(W,{}),t.length>0&&(0,R.jsx)(H,{children:"Contacts"}),n&&!e&&(0,R.jsx)("b",{children:"Loading..."}),(0,R.jsx)(Q,{})]})}}}]);
//# sourceMappingURL=612.d64ecfc6.chunk.js.map