(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{135:function(e,t,a){},54:function(e,t){var a,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function i(e){if(a===setTimeout)return setTimeout(e,0);if((a===o||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"===typeof setTimeout?setTimeout:o}catch(e){a=o}try{n="function"===typeof clearTimeout?clearTimeout:l}catch(e){n=l}}();var c,s=[],m=!1,u=-1;function p(){m&&c&&(m=!1,c.length?s=c.concat(s):u=-1,s.length&&d())}function d(){if(!m){var e=i(p);m=!0;for(var t=s.length;t;){for(c=s,s=[];++u<t;)c&&c[u].run();u=-1,t=s.length}c=null,m=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===l||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function _(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];s.push(new h(e,t)),1!==s.length||m||i(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=_,r.addListener=_,r.once=_,r.off=_,r.removeListener=_,r.removeAllListeners=_,r.emit=_,r.prependListener=_,r.prependOnceListener=_,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},547:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),o=a(14),l=a(13),i=a(15),c=a(0),s=a.n(c),m=a(51),u=(a(135),a(68)),p=a(64),d=a(61),h=a(24),_=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).axios=Object(m.b)(),a.state={members:{},loading:!0},a.members_html=function(e,t,a){return t=t.map(function(t){var a=s.a.createElement(c.Fragment,null,null===t.linkedin?null:s.a.createElement("a",{className:"profile_links",style:{margin:"0 15px"},target:"_blank",href:t.linkedin},s.a.createElement("i",{className:"fab fa-linkedin-in"})),null===t.facebook?null:s.a.createElement("a",{className:"profile_links",style:{margin:"0 15px"},target:"_blank",href:t.facebook},s.a.createElement("i",{className:"fab fa-facebook-f"})));return["FCT","HCD","DIR"].indexOf(t.member_type)>-1&&(a=null===t.profile_url?null:s.a.createElement("a",{className:"profile_links",target:"_blank",style:{color:"white"},href:t.profile_url},s.a.createElement("i",{className:"fa fa-link"}))),s.a.createElement("div",{key:t.id,className:"text-center"},s.a.createElement("div",null,"Head of Career Development Centre"===e||"Director"===e||"Faculty Incharge"===e||"Overall Co-ordinators"===e||"Head Co-ordinators"===e?s.a.createElement("div",null,s.a.createElement("div",{className:"page "},s.a.createElement("div",{className:"page__demo"},s.a.createElement("div",{className:"page__container "},s.a.createElement("div",{className:"photobox photobox_type9"},s.a.createElement("div",{className:"photobox__previewbox shadow p-3 mb-5 bg-white rounded"},s.a.createElement("img",{src:t.image,width:"270",height:"270",class:" photobox__preview member-image",alt:t.name}),s.a.createElement("div",{className:"photobox__label"},s.a.createElement("span",{style:{marginBottom:"15px"}},"Connect"),s.a.createElement("br",null),a)))))),s.a.createElement("div",null,s.a.createElement("h6",{className:"member-name"},t.name)),s.a.createElement("div",{className:"domain"},"pr"===t.domain?s.a.createElement("p",{style:{fontSize:"20px",marginBottom:"25px",marginTop:"-25px"}},s.a.createElement("i",null,"(Public Relation and Marketing)")):null,"tech"===t.domain?s.a.createElement("p",{style:{fontSize:"20px",marginBottom:"25px",marginTop:"-25px"}},s.a.createElement("i",null,"(Technical Team)")):null,"design"===t.domain?s.a.createElement("p",{style:{fontSize:"20px",marginBottom:"25px",marginTop:"-25px"}},s.a.createElement("i",null,"(Design Team)")):null,"spons"===t.domain?s.a.createElement("p",{style:{fontSize:"20px",marginBottom:"25px",marginTop:"-25px"}},s.a.createElement("i",null,"(Sponsorship Team)")):null,"doc"===t.domain?s.a.createElement("p",{style:{fontSize:"20px",marginBottom:"25px",marginTop:"-25px"}},s.a.createElement("i",null,"(Documentation Team)")):null)):s.a.createElement("div",null,s.a.createElement("h6",{className:"member-name"},t.name))))}),s.a.createElement("div",{key:a},"Head_Career_Development"===e||"Director"===e||"Faculty Incharge"===e||"Overall Co-ordinators"===e||"Head Co-ordinators"===e?s.a.createElement("h2",{style:{marginTop:"70px"},className:"position shadow p-3 mb-5 bg-white rounded"},e):s.a.createElement("h2",{style:{marginTop:"70px"},className:"position-exec shadow p-3 mb-5 bg-white rounded"},e),s.a.createElement("div",{className:"flex-containerrr justify-content-center"},t))},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.year;this.axios.get("/team/list/".concat(t,"/")).then(function(t){var a=t.data.data;console.log(a);var n={Director:[],Head_Career_Development:[],Faculty_Incharge:[],Overall_Coordinator:[],Head_Coordinator:[],Manager_pr:[],Manager_tech:[],Manager_des:[],Manager_doc:[],Manager_spons:[],Executive_pr:[],Executive_tech:[],Executive_des:[],Executive_doc:[],Executive_spons:[]};a.forEach(function(e){"DIR"===e.member_type&&n.Director.push(e),"HCD"===e.member_type&&n.Head_Career_Development.push(e),"FCT"===e.member_type&&n.Faculty_Incharge.push(e),"OCO"===e.member_type&&(n.Overall_Coordinator.push(e),n.Overall_Coordinator.sort(function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a<n?-1:a>n?1:0})),"HCO"===e.member_type&&n.Head_Coordinator.push(e),"MNG"===e.member_type&&"pr"===e.domain&&n.Manager_pr.push(e),"MNG"===e.member_type&&"tech"===e.domain&&n.Manager_tech.push(e),"MNG"===e.member_type&&"design"===e.domain&&n.Manager_des.push(e),"MNG"===e.member_type&&"doc"===e.domain&&n.Manager_doc.push(e),"MNG"===e.member_type&&"spons"===e.domain&&n.Manager_spons.push(e),"EXC"===e.member_type&&"pr"===e.domain&&n.Executive_pr.push(e),"EXC"===e.member_type&&"tech"===e.domain&&n.Executive_tech.push(e),"EXC"===e.member_type&&"design"===e.domain&&n.Executive_des.push(e),"EXC"===e.member_type&&"doc"===e.domain&&n.Executive_doc.push(e),"EXC"===e.member_type&&"spons"===e.domain&&n.Executive_spons.push(e)}),console.log(n),e.setState({members:n,loading:!1})})}},{key:"render",value:function(){var e={};for(var t in this.state.members){var a=this.state.members[t];switch(t){case"Director":e.Director=this.members_html("Director",a,t);break;case"Head_Career_Development":e.Head_Career_Development=this.members_html("Head of Career Development Centre",a,t);break;case"Faculty_Incharge":e.Faculty_Incharge=this.members_html("Faculty Incharge",a,t);break;case"Overall_Coordinator":e.Overall_Coordinator=this.members_html("Overall Co-ordinators",a,t);break;case"Head_Coordinator":e.Head_Coordinator=this.members_html("Head Co-ordinators",a,t);break;case"Manager_pr":e.Manager_pr=this.members_html("Public Relation and Marketing Managers",a,t);break;case"Manager_tech":e.Manager_tech=this.members_html("Technical Team Managers ",a,t);break;case"Manager_des":e.Manager_des=this.members_html("Design Team Managers ",a,t);break;case"Manager_doc":e.Manager_doc=this.members_html("Documentation Team Manager ",a,t);break;case"Manager_spons":e.Manager_spons=this.members_html("Sponsorship and Brand Management Managers ",a,t);break;case"Executive_pr":e.Executive_pr=this.members_html("Public Relation and Marketing Executives",a);break;case"Executive_tech":e.Executive_tech=this.members_html("Technical Team Executives",a);break;case"Executive_des":e.Executive_des=this.members_html("Design Team Executives",a);break;case"Executive_doc":e.Executive_doc=this.members_html("Documentation Team Executives",a);break;case"Executive_spons":e.Executive_spons=this.members_html("Sponsorship and Brand Management Executives",a);break;default:console.log("default")}}var n=this.props.match.params.year;return s.a.createElement("div",{className:"team-whole"},s.a.createElement(u.a,null),s.a.createElement("div",{className:"team-div"},s.a.createElement(h.b,{className:"team-links shadow p-3 mb-5 bg-white rounded",to:"/team/yearwise"},"Previous Year Teams")),s.a.createElement("div",{style:{marginBottom:"20px"},className:"team-year"},"Team of ",n,"-",n-2e3+1),this.state.loading?s.a.createElement("div",{style:{marginTop:"10%"}},s.a.createElement(d.a,null)):s.a.createElement("div",null,"2019"===n?e.Director:null,"2019"===n?e.Head_Career_Development:null,"2019"===n?e.Faculty_Incharge:null,"2013"===n||"2014"===n?null:e.Overall_Coordinator,e.Head_Coordinator,"2019"===n?e.Manager_pr:null,"2019"===n?e.Manager_tech:null,"2019"===n?e.Manager_des:null,"2019"===n?e.Manager_doc:null,"2019"===n?e.Manager_spons:null,"2019"===n?e.Executive_pr:null,"2019"===n?e.Executive_tech:null,"2019"===n?e.Executive_des:null,"2019"===n?e.Executive_doc:null,"2019"===n?e.Executive_spons:null),s.a.createElement("div",{className:"team-div"},s.a.createElement(h.b,{className:"team-links shadow p-3 mb-5 bg-white rounded",to:"/team/yearwise"},"Previous Year Teams")),s.a.createElement(p.a,null))}}]),t}(c.Component);t.default=_},58:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",function(){return n})},59:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",function(){return r})},60:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",function(){return n})},61:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(11),r=a(12),o=a(14),l=a(13),i=a(15),c=a(0),s=a.n(c),m=(a(36),function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"loader"},s.a.createElement("div",{className:"l_main"},s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))))}}]),t}(c.Component))},62:function(e,t,a){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}var o=a(26);function l(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}a.d(t,"a",function(){return l})},63:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",function(){return r})}}]);
//# sourceMappingURL=27.c9addd12.chunk.js.map