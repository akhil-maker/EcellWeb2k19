(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{130:function(t,e,n){},526:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return d});var a=n(11),r=n(12),l=n(14),c=n(13),o=n(15),u=n(0),s=n.n(u),i=n(51),p=n(67),m=n(60),f=n(63),d=(n(130),function(t){function e(){var t,n;Object(a.a)(this,e);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(n=Object(l.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(o)))).axios=Object(i.b)(),n.state={startup_detail:null,loading:!0},n}return Object(o.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.startup_id=this.props.match.params.id,this.startup_year=this.props.match.params.year,console.log(this.startup_id,this.startup_year),this.axios.get("/startups/list/".concat(this.startup_year,"/")).then(function(e){var n=e.data.data;console.log(n);var a=n.find(function(e){return e.id===Number(t.startup_id)});console.log({data:n,startup_detail:a}),t.setState({startup_detail:a,loading:!1})})}},{key:"render",value:function(){var t=null;if(!this.state.loading){var e=this.state.startup_detail;t=s.a.createElement("div",{className:"startup_detail"},s.a.createElement("div",{className:"startup-item1"},s.a.createElement("img",{alt:"startup",width:"400",height:"400",className:"shadow-lg p-3 mb-5 bg-white rounded startup-detail-pic",src:e.pic})),s.a.createElement("div",{className:"startup-item2"},s.a.createElement("div",{className:"startup-content"},s.a.createElement("div",{className:"startup-detail-name"},s.a.createElement("h4",{className:"s-name"},e.name)),s.a.createElement("br",null),s.a.createElement("div",{className:"startup-details"},s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.details}})),s.a.createElement("br",null))))}return s.a.createElement("div",{className:"startups"},s.a.createElement(p.a,null),s.a.createElement("div",null,this.state.loading?s.a.createElement("div",{style:{paddingTop:"20%"}},s.a.createElement(f.a,null)):t),s.a.createElement(m.a,null))}}]),e}(u.Component))},57:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return a})},58:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",function(){return r})},59:function(t,e,n){"use strict";function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",function(){return a})},61:function(t,e,n){"use strict";function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return a(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":a(t)})(t)}var l=n(26);function c(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(l.a)(t):e}n.d(e,"a",function(){return c})},62:function(t,e,n){"use strict";function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}n.d(e,"a",function(){return r})},63:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n(11),r=n(12),l=n(14),c=n(13),o=n(15),u=n(0),s=n.n(u),i=(n(35),function(t){function e(){return Object(a.a)(this,e),Object(l.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(o.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"loader"},s.a.createElement("div",{className:"l_main"},s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))))}}]),e}(u.Component))}}]);
//# sourceMappingURL=22.5fa90693.chunk.js.map