(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{107:function(e,t,n){},57:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return a})},58:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",function(){return r})},59:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return a})},60:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(11),r=n(12),o=n(14),c=n(13),l=n(15),u=n(0),s=n.n(u),i=(n(35),function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"loader"},s.a.createElement("div",{className:"l_main"},s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))))}}]),t}(u.Component))},61:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}var o=n(26);function c(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}n.d(t,"a",function(){return c})},62:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",function(){return r})},746:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(12),o=n(14),c=n(13),l=n(15),u=n(0),s=n.n(u),i=n(24),f=(n(107),n(67)),p=n(63),m=n(51),y=n(60),b=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),u=0;u<r;u++)l[u]=arguments[u];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).axios=Object(m.b)(),n.state={spons_years:[],loading:!0},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.axios.get("/sponsors/spons_years/").then(function(t){var n=t.data.spons_year;console.log(n),e.setState({spons_years:n,loading:!1})})}},{key:"render",value:function(){console.log(this.state);var e=this.state.spons_years.map(function(e){return s.a.createElement("div",{key:e},s.a.createElement(i.b,{to:"/sponsors/".concat(e)},s.a.createElement("button",{className:"btn"},"Sponsors ",e)))});return s.a.createElement("div",{className:"sponsors"},s.a.createElement(f.a,null),s.a.createElement("div",{className:"header1"},"OUR SPONSORS"),s.a.createElement("div",{className:"container-fluid ctn11"},s.a.createElement("div",null,this.state.loading?s.a.createElement(y.a,null):e)),s.a.createElement(p.a,null))}}]),t}(u.Component);t.default=b}}]);
//# sourceMappingURL=24.cb44729b.chunk.js.map