(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{56:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(29),i=n.n(c),r=n(17),o=n.n(r),l=n(30),j=n(11),u=n(12),m=n(14),d=n(13),b=n(31),h=n.n(b),v=(n(56),n(8)),p=n(1);var O=function(e){e.id;var t=e.title,n=e.year,a=e.summary,s=e.poster,c=e.genres;return Object(p.jsx)("div",{className:"movie",children:Object(p.jsxs)(v.b,{to:{pathname:"/movie-detail",state:{year:n,title:t,summary:a,poster:s,genres:c}},children:[Object(p.jsx)("img",{src:s,alt:t,title:t}),Object(p.jsxs)("div",{className:"movie__data",children:[Object(p.jsx)("h3",{className:"movie__title",children:t}),Object(p.jsx)("h5",{className:"movie__year",children:n}),Object(p.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(p.jsxs)("li",{children:[" ",e]},t)}))}),Object(p.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})})},x=(n(63),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1}),console.log(a);case 6:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(p.jsx)("section",{className:"container",children:t?Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)("span",{className:"loader__text",children:"Loading .... "})}):Object(p.jsx)("div",{className:"movies",children:n.map((function(e){return Object(p.jsx)(O,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component)),f=(n(64),n(2));n(65);var y=function(e){return console.log(e),Object(p.jsxs)("div",{className:"about__container",children:[Object(p.jsx)("span",{children:'"Freedom is the freedom to say that two plus two make four. IF that is granted, all else follows"'}),Object(p.jsx)("span",{children:" - George Orwell, 1984"})]})};n(66);var _=function(){return Object(p.jsxs)("div",{className:"nav",children:[Object(p.jsx)(v.b,{to:"/",children:"Home"}),Object(p.jsx)(v.b,{to:"/about",children:" About"})]})},g=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0==t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(p.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component);var N=function(){return Object(p.jsxs)(v.a,{children:[Object(p.jsx)(_,{}),Object(p.jsx)(f.a,{path:"/",exact:!0,component:x}),Object(p.jsx)(f.a,{path:"/about",component:y}),Object(p.jsx)(f.a,{path:"/movie-detail",component:g})]})};i.a.render(Object(p.jsx)(N,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.ee13fef5.chunk.js.map