(this["webpackJsonptesla-clone"]=this["webpackJsonptesla-clone"]||[]).push([[0],{27:function(e,n,t){},28:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var i,r,c,s,o,a,l,d=t(0),j=t.n(d),x=t(7),b=t.n(x),h=(t(27),t(28),t(2)),p=t(21),g=t(3),O=t(19),f=t.n(O),m=t(20),u=t.n(m),v=t(1);var w,y,T,I,B,k,A=g.a.div(i||(i=Object(h.a)(["\n    min-height: 50px;\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 20px;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 1;\n"]))),C=g.a.div(r||(r=Object(h.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    p {\n        font-weight: 400;\n        text-transform: uppercase;\n        padding: 0 10px;\n        flex-wrap: nowrap;\n    }\n\n    @media (max-width: 700px) {\n        display: none;\n    }\n"]))),M=g.a.div(c||(c=Object(h.a)(["\n    display: flex;\n    align-items: center;\n    a{\n        margin-right: 10px; \n        font-weight: 400;\n        text-transform: uppercase;\n    }\n"]))),S=Object(g.a)(f.a)(s||(s=Object(h.a)(["\n    cursor: pointer;\n"]))),z=g.a.div(o||(o=Object(h.a)(["\n    background-color: white;\n    width: 300px;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    list-style: none;\n    display: flex;\n    padding: 20px;\n    align-items: start;\n    flex-direction: column;\n    transition: .8s;\n    transform: ",";\n    li {\n        padding: 15px 0;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n        width: 100%;\n        text-align: left;\n        a {\n            text-transform: uppercase;\n            font-size: 12px;\n        }\n    }\n\n"])),(function(e){return e.show?"translateX(0)":"translateX(100%)"})),N=Object(g.a)(u.a)(a||(a=Object(h.a)(["\n    cursor: pointer;\n"]))),L=g.a.div(l||(l=Object(h.a)(["\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n"]))),F=function(){var e=Object(d.useState)(!1),n=Object(p.a)(e,2),t=n[0],i=n[1];return Object(v.jsxs)(A,{children:[Object(v.jsx)("a",{children:Object(v.jsx)("img",{src:"./images/logo.svg",alt:""})}),Object(v.jsxs)(C,{children:[Object(v.jsx)("p",{children:Object(v.jsx)("a",{href:"",children:"Model S"})}),Object(v.jsx)("p",{children:Object(v.jsx)("a",{href:"",children:"Model 3"})}),Object(v.jsx)("p",{children:Object(v.jsx)("a",{href:"",children:"Model y"})}),Object(v.jsx)("p",{children:Object(v.jsx)("a",{href:"",children:"Model X"})})]}),Object(v.jsxs)(M,{children:[Object(v.jsx)("a",{href:"",children:"Shop"}),Object(v.jsx)("a",{href:"",children:"Tesla Account"}),Object(v.jsx)(S,{onClick:function(){return i(!0)}})]}),Object(v.jsxs)(z,{show:t,children:[Object(v.jsx)(L,{children:Object(v.jsx)(N,{onClick:function(){return i(!1)}})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"",children:"Available Inventories"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"",children:"Used Inventories"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"",children:"Cyber Truck"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"",children:"Trade-in"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"",children:"Roadster"})})]})]})},R=t(10),X=t.n(R);var Y=g.a.div(w||(w=Object(h.a)(["\n    height: 100vh;\n    width: 100vw;\n    background-image: ",";\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 50px;\n"])),(function(e){return"url('./images/".concat(e.bgImg,"')")})),J=g.a.div(y||(y=Object(h.a)(["\n    color: #322626;\n    text-transform: capitalize;\n    margin: 60px;\n    span {\n        font-size: 16px;\n        font-weight: light;\n        opacity: 0.7;\n    \n    }\n"]))),P=g.a.div(T||(T=Object(h.a)(["\n    display: flex;\n    margin-bottom: 30px;\n    @media (max-width:700px){\n        flex-direction: column;\n    }\n"]))),D=g.a.div(I||(I=Object(h.a)(["\n    color: white;\n    height: 30px;\n    width: 250px;\n    font-size: 12px;\n    background: #1d1c1c;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 0.9;\n    margin: 15px;\n    border-radius: 50px;\n    text-transform: uppercase;\n    cursor: pointer;\n    &:hover {\n        opacity: 0.75;\n    }\n"]))),E=Object(g.a)(D)(B||(B=Object(h.a)(["\n    background: white;\n    color: #282626;\n"]))),H=g.a.img(k||(k=Object(h.a)(["\n    height: 30px;\n    animation: downArrow infinite 1.5s;\n    @keyframes downArrow {\n        0%, 50%, 100% {\n            transform: translateY(0);\n        }\n        30% {\n            transform: translateY(5px);\n        }\n        60% {\n            transform: translateY(3px);\n        }\n    }\n"]))),U=function(e){var n=e.title,t=e.bgImg,i=e.description,r=e.leftBtnText,c=e.rightBtnText;return Object(v.jsx)("div",{className:"section",children:Object(v.jsxs)(Y,{bgImg:t,children:[Object(v.jsx)(X.a,{bottom:!0,children:Object(v.jsxs)(J,{children:[Object(v.jsx)("h1",{children:n}),Object(v.jsx)("span",{children:i})]})}),Object(v.jsxs)("div",{className:"buttons",children:[Object(v.jsx)(X.a,{bottom:!0,children:Object(v.jsxs)(P,{children:[Object(v.jsx)(D,{children:r}),c&&Object(v.jsx)(E,{children:c})]})}),Object(v.jsx)(H,{id:"downArrow",src:"./images/down-arrow.svg"})]})]})})};var q=function(){return Object(v.jsx)("div",{className:"Home",children:Object(v.jsxs)("div",{className:"sections",children:[Object(v.jsx)(U,{title:"Model S",description:"Order online for touchless delivery",leftBtnText:"Custom Order",rightBtnText:"Available Inventories",bgImg:"model-s.jpg"}),Object(v.jsx)(U,{title:"Model Y",description:"Order online for touchless delivery",leftBtnText:"Custom Order",rightBtnText:"Available Inventories",bgImg:"model-y.jpg"}),Object(v.jsx)(U,{title:"Model X",description:"Order online for touchless delivery",leftBtnText:"Custom Order",rightBtnText:"Available Inventories",bgImg:"model-x.jpg"}),Object(v.jsx)(U,{title:"Model 3",description:"Order online for touchless delivery",leftBtnText:"Custom Order",rightBtnText:"Available Inventories",bgImg:"model-3.jpg"}),Object(v.jsx)(U,{title:"Solar for New Roofs",description:"Solar Roof Cost Less Than the new Roof",leftBtnText:"Order now",rightBtnText:"Learn more",bgImg:"solar-roof.jpg"}),Object(v.jsx)(U,{title:"lowest cost solar panels in america",description:"money-back guarantee",leftBtnText:"Order now",rightBtnText:"Learn more",bgImg:"solar-panel.jpg"}),Object(v.jsx)(U,{title:"Accessories",leftBtnText:"Shop now",bgImg:"accessories.jpg"})]})})};var G=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(F,{}),Object(v.jsx)(q,{})]})},K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,c=n.getLCP,s=n.getTTFB;t(e),i(e),r(e),c(e),s(e)}))};b.a.render(Object(v.jsx)(j.a.StrictMode,{children:Object(v.jsx)(G,{})}),document.getElementById("root")),K()}},[[38,1,2]]]);
//# sourceMappingURL=main.f178f257.chunk.js.map