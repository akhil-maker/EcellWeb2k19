(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{160:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),o=a(14),c=a(13),l=a(15),i=a(0),s=a.n(i),m=a(52),u=a(24),f=(a(71),a(61)),p=a(53),d=a(28),b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).axios=Object(m.b)(),a.state={events:[],loading:!0},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.axios.get("/events/list/2019/").then(function(t){var a=t.data.data;console.log({events:a}),e.setState({events:a,loading:!1})})}},{key:"render",value:function(){var e=this.state.events.map(function(e){return s.a.createElement("div",{className:"event",key:e.id},s.a.createElement("div",{className:"cont1"},s.a.createElement("div",{className:"front1 shadow-lg p-3 mb-5 bg-white rounded"},s.a.createElement("img",{className:"event-pic",src:e.icon_url,alt:e.name})),s.a.createElement("div",{className:"back2 shadow-lg p-3 mb-5 bg-white rounded"},s.a.createElement("div",{className:"inner1"},s.a.createElement("h4",{className:"event-name",style:{fontWeight:"800"}},e.name),s.a.createElement("div",{className:"image-text"},s.a.createElement(u.c,{className:"event-detail-link",to:"/events/".concat(e.id)},"Know More"))))))});return s.a.createElement("div",{className:"events"},s.a.createElement(f.a,null),s.a.createElement("div",{className:"container-fluid ctn16"},s.a.createElement("h2",{className:"header6"},"Our Events"),s.a.createElement("div",{className:"list"},this.state.loading?s.a.createElement(d.a,null):e)),s.a.createElement(p.a,null))}}]),t}(i.Component);t.default=b},53:function(e,t,a){"use strict";var n=a(26),r=a(0),o=a.n(r),c=a(24),l=(a(54),a(60)),i=a.n(l);t.a=function(){return o.a.createElement("div",{className:"footer",style:{background:"#0A0908",textAlign:"center",marginTop:"50px",position:"relative",bottom:"0"}},o.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1500px",padding:"50px"}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-lg-4 col5"},o.a.createElement("h3",{style:{color:"white",fontWeight:"800",padding:"8px",background:"#0A0908"}},"Quick Links"),o.a.createElement("div",{className:"f-links"},o.a.createElement(c.b,{to:"/"},"Home")),o.a.createElement("div",{className:"f-links"},o.a.createElement(c.b,{to:"/events"},"Events")),o.a.createElement("div",{className:"f-links"},o.a.createElement(c.b,{to:"/speakers"},"Speakers")),o.a.createElement("div",{className:"f-links"},o.a.createElement(c.b,{to:"/sponsors"},"Sponsors")),o.a.createElement("div",{className:"f-links"},o.a.createElement(c.b,{to:"/team"},"Team"))),o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 col6"},o.a.createElement("img",{alt:"E-Cell Logo",style:{height:"80px",width:"80px"},src:i.a}),o.a.createElement("p",{style:{color:"white",margin:"15px",fontSize:"17px",fontWeight:"600"}},"E-Cell, NIT Raipur is established to motivate and educate people about entrepreneurship and serve as a meeting ground for corporate and young budding entrepreneurs from distinguished institutions.")),o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4"},o.a.createElement("h3",{style:{color:"white",fontWeight:"800"}},"E-SUMMIT'19"),o.a.createElement("p",{style:{color:"white",fontWeight:"600"}},"Follow us online on-"),o.a.createElement("p",{style:{fontSize:"40px"}},o.a.createElement("a",{href:"#"},o.a.createElement("i",{className:"fab fa-facebook-square"})),o.a.createElement("a",{href:"#"},o.a.createElement("i",{className:"fab fa-instagram"})),o.a.createElement("a",{href:"#"},o.a.createElement("i",{className:"fab fa-twitter-square"})),o.a.createElement("a",{href:"#"},o.a.createElement("i",{className:"fab fa-linkedin"}))),o.a.createElement("div",null,o.a.createElement("a",{className:"site",href:"https://ecell.nitrr.ac.in/"},"E-Cell Official Site")),o.a.createElement("div",null,o.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8094966697"),"+91 80949 66697")),o.a.createElement("div",null,o.a.createElement("a",Object(n.a)({href:"#",style:{color:"white"}},"href","tel:8839579796"),"+91 88395 79796")),o.a.createElement("p",{style:{color:"white",marginTop:"5px"}},"\xa9 All Rights Reserved")))))}},54:function(e,t,a){},55:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",function(){return n})},56:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",function(){return r})},57:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",function(){return n})},58:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",function(){return r})},59:function(e,t,a){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}var o=a(25);function c(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}a.d(t,"a",function(){return c})},71:function(e,t,a){}}]);
//# sourceMappingURL=13.f98f2b18.chunk.js.map