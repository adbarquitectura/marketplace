(this["webpackJsonpmarketplace-estate"]=this["webpackJsonpmarketplace-estate"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),o=c.n(s),i=c(5),a=c.n(i),r=(c(15),c.p,c(16),c(17),c.p+"static/media/logo-03.610530f4.png"),l=c.p+"static/media/logo-05.5246dd11.png",j=function(){return Object(n.jsxs)("nav",{className:"box-navBar",children:[Object(n.jsx)("img",{className:"imgLogoMenuNavegacion not-visible-mobile",src:r,alt:"Logo"}),Object(n.jsx)("img",{className:"imgLogoMenuNavegacion not-visible-desktop",src:l,alt:"Logo"}),Object(n.jsxs)("ul",{className:"box-menu-desktop",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://houm.com/cl/propietario",children:"Soy propietario"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://me.houm.com/pagar",children:"Pagar arriendo"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://houm.com/cl/partner",children:"S\xe9 un  partner"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://houm.com/cl/login",children:"Mi cuenta"})})]})]})},d=c(3),h=(c(18),c(2)),u=c(6),b=c.n(u),x=c(7),p=c.n(x),O=c(8),m=c.n(O),f=c(9),v=c.n(f),g=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],o=t[1],i=Object(s.useState)(""),a=Object(d.a)(i,2),r=a[0],l=a[1],j=Object(s.useState)("-1"),u=Object(d.a)(j,2),x=u[0],O=u[1],f=function(e){return"-1"===x||e.property_details[0].dormitorios.toString()===x};return Object(s.useEffect)((function(){fetch("https://api.arriendoasegurado.com/marketplace/?page_size=10000&country=Chile").then((function(e){return e.json()})).then((function(e){o(e.results)}))}),[]),Object(n.jsxs)("div",{className:"card-filter-section",children:[Object(n.jsx)("h1",{className:"heading-display",children:"Encuentra un arriendo"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"text",value:r,placeholder:"Calle, comuna",onChange:function(e){return function(e){l(e.target.value)}(e)}}),Object(n.jsx)(h.Icon,{icon:v.a,style:{color:"#FFE7DC",fontSize:"30px"}})]}),Object(n.jsxs)("select",{value:x,onChange:function(e){return function(e){O(e.target.value)}(e)},children:[Object(n.jsx)("option",{value:"-1",children:"Dormitorio"}),Object(n.jsx)("option",{value:"1",children:"1"}),Object(n.jsx)("option",{value:"2",children:"2"}),Object(n.jsx)("option",{value:"3",children:"3"})]})]}),Object(n.jsx)("h4",{children:"En Houm no te pedimos aval y hacemos de tu vida algo maravilloso. Ent\xe9rate de todos los beneficios al arrendar con nosotros."}),Object(n.jsx)("div",{className:"card-section",children:Object(n.jsx)("div",{className:"card-box",children:c.filter((function(e){return function(e){return(e.address.toLowerCase().includes(r.toLowerCase())||e.comuna.toLowerCase().includes(r.toLowerCase()))&&f(e)}(e)})).slice(0,9).map((function(e,t){return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{className:"img-card",src:e.photos[0].url}),Object(n.jsxs)("div",{className:"text-card",children:[Object(n.jsx)("h4",{children:e.type}),Object(n.jsxs)("span",{children:[e.property_details[0].m_construidos,"m2"]})]}),Object(n.jsxs)("div",{className:"icons-card-box",children:[Object(n.jsxs)("div",{className:"icons-card",children:[Object(n.jsx)(h.Icon,{icon:b.a,style:{color:"#999999",fontSize:"30px"}}),Object(n.jsx)("h3",{children:e.property_details[0].dormitorios})]}),Object(n.jsxs)("div",{className:"icons-card",children:[Object(n.jsx)(h.Icon,{icon:p.a,style:{color:"#999999",fontSize:"30px"}}),Object(n.jsx)("h3",{children:e.property_details[0].banos})]}),Object(n.jsxs)("div",{className:"icons-card",children:[Object(n.jsx)(h.Icon,{icon:m.a,style:{color:"#999999",fontSize:"30px"}}),Object(n.jsx)("h3",{children:e.property_details[0].banos})]})]}),Object(n.jsxs)("div",{className:"name-card-box",children:[Object(n.jsx)("h2",{children:e.address}),Object(n.jsx)("p",{children:e.comuna})]}),Object(n.jsx)("div",{className:"value-card-box",children:Object(n.jsxs)("h3",{children:["$",e.property_details[0].valor]})})]},t)}))})})]})};var N=function(){return Object(n.jsxs)("div",{className:"father-container",children:[Object(n.jsx)(j,{}),Object(n.jsx)(g,{})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),o(e),i(e)}))};a.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root")),y()}},[[19,1,2]]]);
//# sourceMappingURL=main.57863a56.chunk.js.map