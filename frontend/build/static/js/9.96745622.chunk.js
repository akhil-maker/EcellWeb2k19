(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{141:function(e,a,t){"use strict";t.r(a);var n=t(11),l=t(12),s=t(14),r=t(13),c=t(15),i=t(0),o=t.n(i),m=(t(63),t(54)),d=t(61),p=t(52),E=t(67),u=t(26),h=function(e){function a(){var e,t;Object(n.a)(this,a);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(c)))).axios=Object(m.a)(),t.state={sponsors:[],loading:!0,year:null},t}return Object(c.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.year;this.axios.get("/sponsors/list/".concat(a,"/")).then(function(t){console.log(t);var n=t.data.data;e.setState({loading:!1,sponsors:n,year:a})})}},{key:"render",value:function(){var e=this.state.sponsors.map(function(e){return o.a.createElement("div",{className:"col mx-3",key:e.id},o.a.createElement("div",{className:"cont"},o.a.createElement("div",{className:"front shadow-lg p-3 mb-5 bg-white rounded"},o.a.createElement("img",{alt:e.name,className:"spons-Image",src:e.pic_url})),o.a.createElement("div",{className:"back shadow-lg p-3 mb-5 bg-white rounded"},o.a.createElement("div",{className:"inner"},o.a.createElement("h6",{style:{fontWeight:"800"}},e.name),o.a.createElement("p",{className:"ph-no"},e.contact),o.a.createElement("p",null,e.details),o.a.createElement("p",null,o.a.createElement("a",{className:"web",href:e.website},"Website"))))))});return o.a.createElement("div",{className:"sponsors"},o.a.createElement(d.a,null),o.a.createElement("div",{className:"header1"},"SPONSORS ",this.state.year),o.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1200px",paddingTop:"300px"}},o.a.createElement(E.a,null)),o.a.createElement("div",{className:"container-fluid ctn9",style:{maxWidth:"1500px",paddingTop:"0px"}},this.state.loading?o.a.createElement(u.a,{style:{margin:"50px auto"}}):e),o.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1200px",paddingTop:"50px"}},o.a.createElement(E.a,null)),o.a.createElement(p.a,null))}}]),a}(i.Component);a.default=h},52:function(e,a,t){"use strict";var n=t(25),l=t(0),s=t.n(l),r=t(24),c=(t(53),t(60)),i=t.n(c);a.a=function(){return s.a.createElement("div",{className:"footer",style:{background:"#0A0908",textAlign:"center",marginTop:"50px",position:"relative",bottom:"0"}},s.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1500px",padding:"50px"}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-lg-4 col5"},s.a.createElement("h3",{style:{color:"white",fontWeight:"800",padding:"8px",background:"#0A0908"}},"Quick Links"),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/"},"Home")),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/events"},"Events")),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/speakers"},"Speakers")),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/sponsors"},"Sponsors")),s.a.createElement("div",{className:"f-links"},s.a.createElement(r.b,{to:"/team"},"Team"))),s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 col6"},s.a.createElement("img",{alt:"E-Cell Logo",style:{height:"80px",width:"80px"},src:i.a}),s.a.createElement("p",{style:{color:"white",margin:"15px",fontSize:"17px",fontWeight:"600"}},"E-Cell, NIT Raipur is established to motivate and educate people about entrepreneurship and serve as a meeting ground for corporate and young budding entrepreneurs from distinguished institutions.")),s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4"},s.a.createElement("h3",{style:{color:"white",fontWeight:"800"}},"E-SUMMIT'19"),s.a.createElement("p",{style:{color:"white",fontWeight:"600"}},"Follow us online on-"),s.a.createElement("p",{style:{fontSize:"40px"}},s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fab fa-facebook-square"})),s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fab fa-instagram"})),s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fab fa-twitter-square"})),s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fab fa-linkedin"}))),s.a.createElement("div",null,s.a.createElement("a",{className:"site",href:"https://ecell.nitrr.ac.in/"},"E-Cell Official Site")),s.a.createElement("div",null,s.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8094966697"),"+91 80949 66697")),s.a.createElement("div",null,s.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8839579796"),"+91 88395 79796")),s.a.createElement("p",{style:{color:"white",marginTop:"5px"}},"\xa9 All Rights Reserved")))))}},53:function(e,a,t){},63:function(e,a,t){},67:function(e,a,t){"use strict";var n=t(0),l=t.n(n),s=t(24);a.a=function(){return l.a.createElement("div",{className:"ctn10"},l.a.createElement("div",null,l.a.createElement(s.b,{className:"links",to:"/sponsors/yearwise"},"Yearwise Sponsors")),l.a.createElement("div",null,l.a.createElement(s.b,{className:"links link-text",to:"/sponsors/sponsors_heads"},"Head Co-ordinators of Sponsorship")))}}}]);
//# sourceMappingURL=9.96745622.chunk.js.map