(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={search__wrapper:"filter_search__wrapper__EgK3M",search__label:"filter_search__label__gVvDr",search__input:"filter_search__input__3zEYH"}},32:function(t,e,n){t.exports={container:"container_container__2RgEM"}},39:function(t,e,n){},6:function(t,e,n){t.exports={contact__wrapper:"phonebook_contact__wrapper__3TV1L",title:"phonebook_title__1foJM",contacts__count:"phonebook_contacts__count__1_0KY",form:"phonebook_form__SqtVU",contact__name:"phonebook_contact__name__3DCCh",contact__number:"phonebook_contact__number__1FxLI",input__name:"phonebook_input__name__2N6XA",input__tel:"phonebook_input__tel__KojV9",add__button:"phonebook_add__button__145hu"}},67:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(11),r=n.n(o),s=(n(39),n(22)),u=n(5),i=n(6),b=n.n(i),_=n(14),l=(n(46),n(8)),d=n(12),j=function(t){return t.phonebook.contacts},h=function(t){return t.phonebook.filter},p=Object(d.a)([j,h],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),f=n(2),m=n(69),O={addContacts:Object(f.b)("phonebook/add",(function(t){var e=t.name,n=t.number;return{type:"phonebook/add",payload:{id:Object(m.a)(),name:e,number:n}}})),deleteContact:Object(f.b)("phonebook/delete"),filter:Object(f.b)("phonebook/filterContact"),getContactsRequest:Object(f.b)("contacts/getContactsRequest"),getContactsSuccess:Object(f.b)("contacts/getContactsSuccess"),getContactsError:Object(f.b)("contacts/getContactsError"),addContactsRequest:Object(f.b)("contacts/addContactsRequest"),addContactsSuccess:Object(f.b)("contacts/addContactsSuccess"),addContactsError:Object(f.b)("contacts/addContactsError"),deleteContactsRequest:Object(f.b)("contacts/deleteContactsRequest"),deleteContactsSuccess:Object(f.b)("contacts/deleteContactsSuccess"),deleteContactsError:Object(f.b)("contacts/deleteContactsError")},C=n(15),g=n.n(C);g.a.defaults.baseURL="http://localhost:3000/";var x={getContacts:function(){return g.a.get("/contacts").then((function(t){return t.data}))},addContacts:function(t){return g.a.post("/contacts",t).then((function(t){return t.data}))},deleteContact:function(t){return g.a.delete("/contacts/".concat(t)).then((function(t){return t.data}))}},v=function(){return function(t){t(O.getContactsRequest()),x.getContacts().then((function(e){return t(O.getContactsSuccess(e))})).catch((function(e){return t(O.getContactsError(e.message))}))}},k=function(t){var e=t.name,n=t.number;return function(t){t(O.addContactsRequest()),x.addContacts({name:e,number:n}).then((function(e){return t(O.addContactsSuccess(e))})).catch((function(e){return t(O.addContactsError(e.message))}))}},N=function(t){return function(e){e(O.deleteContactsRequest()),x.deleteContact(t).then((function(){return e(O.deleteContactsSuccess(t))})).catch((function(t){return e(O.deleteContactsError(t.message))}))}},S=n(1);function w(){var t=Object(c.useState)(""),e=Object(s.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),r=Object(s.a)(o,2),i=r[0],d=r[1],h=Object(u.c)((function(t){return j(t)})),p=Object(u.b)(),f=function(t){switch(t.currentTarget.name){case"name":a(t.currentTarget.value);break;case"number":d(t.currentTarget.value);break;default:throw new Error}},m=function(){a(""),d("")},O=function(){return _.b.success("\ud83e\udd84Added new contact",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},C=function(){return _.b.error("\ud83e\udd84 The contact already exists in the phone book",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};return Object(S.jsxs)("div",{className:b.a.contact__wrapper,children:[Object(S.jsx)("h2",{className:b.a.title,children:"Phonebook"}),Object(S.jsxs)("p",{className:b.a.contacts__count,children:["In your phone book: ",h.length," contacts"]}),Object(S.jsxs)("form",{className:b.a.form,onSubmit:function(t){if(t.preventDefault(),e=n,h.find((function(t){return t.name===e})))return m(),void C();var e;p(k({name:n,number:i})),m(),O()},children:[Object(S.jsxs)("label",{className:b.a.contact__name,children:[Object(S.jsx)(l.a,{})," Name",Object(S.jsx)("input",{className:b.a.input__name,placeholder:"Whats you're name?",type:"text",name:"name",value:n,onChange:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"",required:!0})]}),Object(S.jsxs)("label",{className:b.a.contact__number,children:[Object(S.jsx)(l.b,{})," Number",Object(S.jsx)("input",{className:b.a.input__tel,placeholder:"Your phone number",type:"tel",name:"number",value:i,onChange:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"",required:!0})]}),Object(S.jsx)("button",{className:b.a.add__button,type:"submit",children:"Add contacts"})]})]})}var E=n(9),y=n.n(E);function q(){var t=Object(u.c)((function(t){return p(t)})),e=Object(u.b)();return Object(c.useEffect)((function(){e(v())}),[e]),Object(S.jsx)("ul",{className:y.a.contact__list,children:t&&t.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(S.jsxs)("li",{className:y.a.contact__item,children:[Object(S.jsxs)("p",{className:y.a.contact__name,children:[Object(S.jsx)("span",{className:y.a.contact__icon,children:Object(S.jsx)(l.a,{})}),c]}),Object(S.jsxs)("p",{children:[Object(S.jsx)("span",{className:y.a.contact__icon,children:Object(S.jsx)(l.b,{})}),a]}),Object(S.jsxs)("button",{className:y.a.delete__button,onClick:function(){return function(t){return e(N(t))}(n)},children:["delete",Object(S.jsx)("span",{children:Object(S.jsx)(l.c,{})})]})]},n)}))})}var L=n(19),R=n.n(L);function T(){var t=Object(u.c)((function(t){return h(t)})),e=Object(u.b)();return Object(S.jsx)("div",{className:R.a.search__wrapper,children:Object(S.jsxs)("label",{className:R.a.search__label,children:["All your contacts here",Object(S.jsx)("input",{placeholder:"Enter contact to search . . .",type:"text",className:R.a.search__input,value:t,onChange:function(t){return e(O.filter(t.target.value))}})]})})}var A=n(32),F=n.n(A),P=function(t){var e=t.children;return Object(S.jsx)("div",{className:F.a.container,children:e})};function z(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(_.a,{}),Object(S.jsxs)(P,{children:[Object(S.jsx)(w,{}),Object(S.jsx)(T,{}),Object(S.jsx)(q,{})]})]})}var B,D=n(10),I=n(33),M=n.n(I),V=n(7),H=n(34),J=n(3),K=Object(f.c)([],(B={},Object(V.a)(B,O.getContactsSuccess,(function(t,e){return e.payload})),Object(V.a)(B,O.addContactsSuccess,(function(t,e){var n=e.payload;return[].concat(Object(H.a)(t),[n])})),Object(V.a)(B,O.deleteContactsSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),B)),U=Object(f.c)("",Object(V.a)({},O.filter,(function(t,e){return e.payload}))),W=Object(J.b)({contacts:K,filter:U}),Y=Object(f.a)({reducer:{phonebook:W},devTools:!1,middleware:function(t){return t({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}}).concat(M.a)}}),Z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))};r.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(u.a,{store:Y,children:Object(S.jsx)(z,{})})}),document.getElementById("root")),Z()},9:function(t,e,n){t.exports={contact__list:"contactList_contact__list__2Uo_E",contact__item:"contactList_contact__item__bQRCp",delete__button:"contactList_delete__button__2bDlP",contact__icon:"contactList_contact__icon__WbBtr",contact__name:"contactList_contact__name__3WTGq"}}},[[67,1,2]]]);
//# sourceMappingURL=main.5d1d2813.chunk.js.map