(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var n=a(11),l=a(12),r=a(14),c=a(13),o=a(15),i=a(0),s=a.n(i),m=a(52),u=a(61),f=a(53),d=a(28),p=(a(71),function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),i=0;i<l;i++)o[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).axios=Object(m.b)(),a.state={event_detail:null,loading:!0},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.event_id=this.props.match.params.id,console.log(this.event_id),this.axios.get("/events/list/2019/").then(function(t){var a=t.data.data,n=a.find(function(t){return t.id===Number(e.event_id)});console.log({data:a,event_detail:n}),e.setState({event_detail:n,loading:!1})})}},{key:"render",value:function(){var e=null;if(!this.state.loading){var t=this.state.event_detail;e=s.a.createElement("div",{className:"event_detail"},s.a.createElement("div",{className:"event-item1"},s.a.createElement("img",{className:"shadow-lg p-3 mb-5 bg-white rounded event-detail-pic",alt:t.name,src:t.icon})),s.a.createElement("div",{className:"event-item2"},s.a.createElement("div",{className:"event-content"},s.a.createElement("div",{className:"event-detail-name"},s.a.createElement("h4",{className:"e-name shadow p-3 mb-5 bg-white rounded"},t.name)),s.a.createElement("br",null),s.a.createElement("div",{className:"event-venue",style:{color:"black"}},s.a.createElement("i",{className:"fas fa-map-marker-alt"}),"\xa0Venue:\xa0",s.a.createElement("span",{style:{color:"white"}},t.venue)),s.a.createElement("br",null),s.a.createElement("div",{className:"event-time",style:{color:"black"}},s.a.createElement("span",null,s.a.createElement("i",{className:"far fa-clock"}),"\xa0Time:"),"\xa0",s.a.createElement("span",{style:{color:"white"}},t.time)),s.a.createElement("br",null),s.a.createElement("div",{className:"event-details"},t.details),s.a.createElement("br",null),s.a.createElement("div",{className:"event-email"},s.a.createElement("i",{className:"far fa-paper-plane"}),"\xa0Email:\xa0",s.a.createElement("a",{className:"e-email",href:"mailto:".concat(t.email)},t.mail)))))}return s.a.createElement("div",{className:"events"},s.a.createElement(u.a,null),this.state.loading?s.a.createElement("div",{className:"loading-gif",style:{paddingTop:"350px"}}," ",s.a.createElement(d.a,null)):s.a.createElement("div",null,e),s.a.createElement(f.a,null))}}]),t}(i.Component))},53:function(e,t,a){"use strict";var n=a(26),l=a(0),r=a.n(l),c=a(24),o=(a(54),a(60)),i=a.n(o);t.a=function(){return r.a.createElement("div",{className:"footer",style:{background:"#0A0908",textAlign:"center",marginTop:"50px",position:"relative",bottom:"0"}},r.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1500px",padding:"50px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-lg-4 col5"},r.a.createElement("h3",{style:{color:"white",fontWeight:"800",padding:"8px",background:"#0A0908"}},"Quick Links"),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/"},"Home")),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/events"},"Events")),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/speakers"},"Speakers")),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/sponsors"},"Sponsors")),r.a.createElement("div",{className:"f-links"},r.a.createElement(c.b,{to:"/team"},"Team"))),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 col6"},r.a.createElement("img",{alt:"E-Cell Logo",style:{height:"80px",width:"80px"},src:i.a}),r.a.createElement("p",{style:{color:"white",margin:"15px",fontSize:"17px",fontWeight:"600"}},"E-Cell, NIT Raipur is established to motivate and educate people about entrepreneurship and serve as a meeting ground for corporate and young budding entrepreneurs from distinguished institutions.")),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4"},r.a.createElement("h3",{style:{color:"white",fontWeight:"800"}},"E-SUMMIT'19"),r.a.createElement("p",{style:{color:"white",fontWeight:"600"}},"Follow us online on-"),r.a.createElement("p",{style:{fontSize:"40px"}},r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-facebook-square"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-twitter-square"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("div",null,r.a.createElement("a",{className:"site",href:"https://ecell.nitrr.ac.in/"},"E-Cell Official Site")),r.a.createElement("div",null,r.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8094966697"),"+91 80949 66697")),r.a.createElement("div",null,r.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8839579796"),"+91 88395 79796")),r.a.createElement("p",{style:{color:"white",marginTop:"5px"}},"\xa9 All Rights Reserved")))))}},54:function(e,t,a){},55:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",function(){return n})},56:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",function(){return l})},57:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",function(){return n})},58:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",function(){return l})},59:function(e,t,a){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return(l="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}var r=a(25);function c(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?Object(r.a)(e):t}a.d(t,"a",function(){return c})},71:function(e,t,a){}}]);
//# sourceMappingURL=12.885d3695.chunk.js.map