"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[5],{5005:function(e,n,r){r.r(n),r.d(n,{default:function(){return B}});var t=r(1413),a=r(5705),s=r(2791),i=r(1724),c=i.Ry().shape({name:i.Z_().matches(/(^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$)/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("This field is required"),number:i.Z_().matches(/(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("This field is required")}),o=r(9434),u=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.error},l=function(e){return e.contacts.items},h=r(3634),m=r(4363),x=r(7498),f=r(6146),j=r(826),p=r(3821),b=r(7886),v=r(3306),g=r(8656),y=r(8494),w=r(184),C=function(){var e=(0,o.v9)(l),n=(0,o.I0)();return(0,w.jsx)(a.J9,{onSubmit:function(r,t){var a=t.resetForm,s=r.name.toLowerCase();e.find((function(e){return e.name.toLowerCase()===s}))?alert("".concat(r.name," is already in contacts")):n((0,h.uK)({name:r.name,number:r.number})),a()},validationSchema:c,initialValues:(0,t.Z)({},{name:"",number:""}),children:(0,w.jsx)(a.l0,{children:(0,w.jsxs)(f.g,{spacing:4,children:[(0,w.jsxs)(j.B,{children:[(0,w.jsx)(p.Z,{pointerEvents:"none",children:(0,w.jsx)(m.J,{as:y.Bmn,color:"gray.300"})}),(0,w.jsx)(a.gN,{as:b.I,type:"text",name:"name",placeholder:"Name",width:"auto"}),(0,w.jsx)(a.Bc,{as:x.b,status:"error",name:"name"})]}),(0,w.jsxs)(j.B,{children:[(0,w.jsx)(p.Z,{pointerEvents:"none",children:(0,w.jsx)(g.q,{color:"gray.300"})}),(0,w.jsx)(a.gN,{as:b.I,type:"tel",name:"number",placeholder:"Phone number",width:"auto"}),(0,w.jsx)(a.Bc,{status:"error",name:"number"})]}),(0,w.jsx)(v.z,{type:"submit","aria-label":"Add contact",size:"lg",colorScheme:"green",children:"Submit"})]})})})},_=r(1243),Z=function(e){var n=e.name,r=e.number,t=e.id,a=(0,o.I0)();return(0,w.jsxs)("div",{children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("span",{children:n}),(0,w.jsx)("span",{children:r})]}),(0,w.jsxs)("button",{type:"button",onClick:function(){return function(e){a((0,h.GK)(e))}(t)},children:["Delete contact ",(0,w.jsx)(_.p,{})]})]})},k=function(e){return e.filter},I=function(){var e=(0,o.v9)(l),n=(0,o.v9)(k),r=n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):e;return(0,w.jsx)("ul",{children:r.map((function(e){var n=e.name,r=e.number,t=e.id;return(0,w.jsx)("li",{children:(0,w.jsx)(Z,{name:n,number:r,id:t})},t)}))})},z=r(9585),A=function(){var e=(0,o.I0)();return(0,w.jsx)(b.I,{variant:"outline",placeholder:"Find contact by name",type:"text",name:"filter",width:"auto",onChange:function(n){var r=n.target.value;e((0,z.a)(r))}})},B=function(){var e=(0,o.v9)(u),n=(0,o.v9)(d),r=(0,o.v9)(l),t=(0,o.I0)();return(0,s.useEffect)((function(){t((0,h.yF)())}),[t]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(C,{}),(0,w.jsx)(A,{}),r.length>0&&(0,w.jsx)("h2",{children:"Contacts"}),e&&!n&&(0,w.jsx)("b",{children:"Loading..."}),(0,w.jsx)(I,{})]})}}}]);
//# sourceMappingURL=5.b68c154c.chunk.js.map