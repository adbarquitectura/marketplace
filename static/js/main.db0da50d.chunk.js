(this["webpackJsonpmarketplace-estate"]=this["webpackJsonpmarketplace-estate"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),o=n.n(s),r=n(5),i=n.n(r),a=(n(15),n.p,n(16),function(){return Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#acerca",children:"Acerca de m\xed"})})})})}),j=n(3),l=(n(17),n(2)),d=n(6),u=n.n(d),b=n(7),h=n.n(b),x=n(8),O=n.n(x),p=n(9),f=n.n(p),v=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),n=t[0],o=t[1],r=Object(s.useState)(""),i=Object(j.a)(r,2),a=i[0],d=i[1],b=Object(s.useState)("-1"),x=Object(j.a)(b,2),p=x[0],v=x[1],m=function(e){return"-1"===p||e.property_details[0].dormitorios.toString()===p};return Object(s.useEffect)((function(){fetch("https://api.arriendoasegurado.com/marketplace/?page_size=10000&country=Chile").then((function(e){return e.json()})).then((function(e){o(e.results)}))}),[]),Object(c.jsxs)("div",{className:"card-filter-section",children:[Object(c.jsx)("h1",{className:"heading-display",children:"Encuentra un arriendo"}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"text",value:a,placeholder:"Calle, comuna",onChange:function(e){return function(e){d(e.target.value)}(e)}}),Object(c.jsx)(l.Icon,{icon:f.a,style:{color:"#FFE7DC",fontSize:"30px"}})]}),Object(c.jsxs)("select",{value:p,onChange:function(e){return function(e){v(e.target.value)}(e)},children:[Object(c.jsx)("option",{value:"-1",children:"Dormitorio"}),Object(c.jsx)("option",{value:"1",children:"1"}),Object(c.jsx)("option",{value:"2",children:"2"}),Object(c.jsx)("option",{value:"3",children:"3"})]})]}),Object(c.jsx)("p",{children:"En Houm no te pedimos aval y hacemos de tu vida algo maravilloso. Ent\xe9rate de todos los beneficios al arrendar con nosotros."}),Object(c.jsx)("div",{className:"card-section",children:Object(c.jsx)("div",{className:"card-box",children:n.filter((function(e){return function(e){return(e.address.toLowerCase().includes(a.toLowerCase())||e.comuna.toLowerCase().includes(a.toLowerCase()))&&m(e)}(e)})).slice(0,9).map((function(e,t){return Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{style:{width:"200px"},src:e.photos[0].url}),Object(c.jsx)("h4",{children:e.address}),Object(c.jsx)("p",{children:e.comuna}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(l.Icon,{icon:u.a,style:{color:"#999999",fontSize:"30px"}}),Object(c.jsxs)("p",{children:["Dormitorios: ",e.property_details[0].dormitorios]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(l.Icon,{icon:h.a,style:{color:"#999999",fontSize:"30px"}}),Object(c.jsxs)("p",{children:["Ba\xf1os: ",e.property_details[0].banos]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(l.Icon,{icon:O.a,style:{color:"#999999",fontSize:"30px"}}),Object(c.jsxs)("p",{children:["Ba\xf1os: ",e.property_details[0].banos]})]})]})]},t)}))})})]})};var m=function(){return Object(c.jsxs)("div",{className:"father-container",children:[Object(c.jsx)(a,{}),Object(c.jsx)(v,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),o(e),r(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),g()}},[[18,1,2]]]);
//# sourceMappingURL=main.db0da50d.chunk.js.map