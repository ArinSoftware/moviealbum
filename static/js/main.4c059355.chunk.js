(this.webpackJsonpmoviealbum=this.webpackJsonpmoviealbum||[]).push([[0],{33:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(16),i=c.n(n),r=c(7),l=c(2),o=c(8),d=c(0),j=Object(s.createContext)(),b=function(e){var t=Object(s.useState)([]),c=Object(o.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(!1),r=Object(o.a)(i,2),l=r[0],b=r[1];Object(s.useEffect)((function(){m()}),[]);var m=function(){b(!0),fetch("https://api.themoviedb.org/3/movie/popular?api_key=274c12e6e2e4f9ca265a01d107280eba").then((function(e){return e.json()})).then((function(e){n(e.results),b(!1)}))};return Object(d.jsx)(j.Provider,{value:{movies:a,searchMovie:function(e){fetch("https://api.themoviedb.org/3/search/movie?api_key=274c12e6e2e4f9ca265a01d107280eba&query=".concat(e)).then((function(e){return e.json()})).then((function(e){return n(e.results)}))},loading:l,getMovies:m},children:e.children})},m=function(){var e=Object(s.useContext)(j).getMovies;return Object(d.jsx)("header",{children:Object(d.jsx)("div",{className:"navbar navbar-dark bg-dark shadow-sm",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)(r.b,{to:"/",className:"navbar-brand d-flex align-items-center",children:[Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2","aria-hidden":"true",className:"me-2",viewBox:"0 0 24 24",children:[Object(d.jsx)("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),Object(d.jsx)("circle",{cx:"12",cy:"13",r:"4"})]}),Object(d.jsx)("strong",{children:"Movie Album"})]}),Object(d.jsxs)("ul",{className:"nav ms-auto",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{className:"nav-link text-white",to:"/about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)("input",{onClick:e,type:"submit",className:"form-control btn btn-danger text-white",value:"RESET"})})]})]})})})},h=function(e){return Object(d.jsx)("section",{className:"pt-5 text-center container",children:Object(d.jsx)("div",{className:"row py-lg-5",children:Object(d.jsxs)("div",{className:"col-lg-6 col-md-8 mx-auto",children:[Object(d.jsx)("h1",{className:"fw-light",children:e.title}),Object(d.jsx)("p",{className:"lead text-muted",children:e.slogan})]})})})};h.defaultProps={title:"Varsay\u0131lan ba\u015fl\u0131kkkkk",slogan:"Varsay\u0131lan slogan"};var u=h,x=function(){var e=Object(s.useContext)(j).searchMovie,t=Object(s.useState)(""),c=Object(o.a)(t,2),a=c[0],n=c[1];return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(a)},className:"row g-3 mb-5",children:[Object(d.jsx)("div",{className:"col-8",children:Object(d.jsx)("input",{onChange:function(e){n(e.target.value)},type:"text",className:"form-control",placeholder:"search..",value:a})}),Object(d.jsx)("div",{className:"col-4",children:Object(d.jsx)("input",{type:"submit",className:"form-control btn-block btn btn-danger text-white",disabled:!(a.length>2)})})]})},O=function(e){var t,c,s=e.movie,a=s.title,n=s.overview,i=s.vote_average,l=s.poster_path,o=s.id;return Object(d.jsxs)("div",{className:"card shadow-sm",children:[Object(d.jsx)("img",{alt:a,src:"https://image.tmdb.org/t/p/w500/".concat(l)}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:a}),Object(d.jsx)("p",{className:"card-text",children:(t=n,c=100,t.length>c?t.slice(0,c)+"...":t)}),Object(d.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(d.jsx)("div",{className:"btn-group",children:Object(d.jsx)(r.b,{to:"/movies/".concat(o),className:"btn btn-sm btn-outline-secondary",children:"View"})}),Object(d.jsx)("small",{className:"text-muted",children:i})]})]})]})},v=function(){var e=Object(s.useContext)(j).movies;return Object(d.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3",children:e.map((function(e){return Object(d.jsx)("div",{className:"col",children:Object(d.jsx)(O,{movie:e})},e.id)}))})},p=c(18),f=c(19),g=c(21),N=c(20),w=function(e){Object(g.a)(c,e);var t=Object(N.a)(c);function c(){return Object(p.a)(this,c),t.apply(this,arguments)}return Object(f.a)(c,[{key:"render",value:function(){return Object(d.jsx)("footer",{className:"text-muted py-5",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("p",{className:"float-end mb-1",children:Object(d.jsx)("a",{href:"/",children:"Back to top"})}),Object(d.jsx)("p",{className:"mb-1",children:"Album example is \xa9 Bootstrap, but please download and customize it for yourself!"})]})})}}]),c}(s.Component);var y=function(){return Object(d.jsx)("main",{children:Object(d.jsxs)("div",{className:"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light",children:[Object(d.jsxs)("div",{className:"col-md-5 p-lg-5 mx-auto my-5",children:[Object(d.jsx)("h1",{className:"display-4 fw-normal",children:"Punny headline"}),Object(d.jsx)("p",{className:"lead fw-normal",children:"And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple\u2019s marketing pages."}),Object(d.jsx)(r.b,{className:"btn btn-outline-secondary",to:"/",children:"Home"})]}),Object(d.jsx)("div",{className:"product-device shadow-sm d-none d-md-block"}),Object(d.jsx)("div",{className:"product-device product-device-2 shadow-sm d-none d-md-block"})]})})},k=function(){var e=Object(s.useState)({}),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(l.f)().id;return Object(s.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=274c12e6e2e4f9ca265a01d107280eba")).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[n]),Object(d.jsx)("main",{children:Object(d.jsxs)("div",{className:"px-4 pt-5 my-5 text-center border-bottom",children:[Object(d.jsx)("h1",{className:"display-4 fw-bold",children:c.title}),Object(d.jsxs)("div",{className:"col-lg-6 mx-auto",children:[Object(d.jsx)("p",{className:"lead mb-4",children:c.overview}),Object(d.jsx)("div",{className:"d-grid gap-2 d-sm-flex justify-content-sm-center mb-5",children:Object(d.jsx)(r.b,{className:"btn btn-outline-secondary",to:"/",children:"Home"})})]}),Object(d.jsx)("div",{className:"overflow-hidden",children:Object(d.jsx)("div",{className:"container px-5",children:c.poster_path?Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(c.poster_path),className:"img-fluid border rounded-3 shadow-lg mb-4",alt:c.title}):null})})]})})},C=function(){var e=Object(s.useContext)(j).loading;return Object(d.jsx)(r.a,{children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsxs)("main",{children:[Object(d.jsx)(u,{title:"Sample Title",slogan:"Sample slogan text"}),Object(d.jsx)("div",{className:"album py-5 bg-light",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(x,{}),e?Object(d.jsx)("div",{className:"spinner-border",role:"status",children:Object(d.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):Object(d.jsx)(v,{})]})})]})}),Object(d.jsx)(l.a,{path:"/about",component:y}),Object(d.jsx)(l.a,{path:"/movies/:id",component:k})]}),Object(d.jsx)(w,{})]})})};c(32);i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(b,{children:Object(d.jsx)(C,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.4c059355.chunk.js.map