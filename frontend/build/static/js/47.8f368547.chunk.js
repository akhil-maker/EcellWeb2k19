(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{51:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(72),c=a.n(n),l=a(36),s="http://localhost:8000";s="",t.b=function(){var e=void 0,t=l.store.getState().auth;return t&&(e=t.loggedin?t.token:void 0),c.a.create({baseURL:s,headers:{Authorization:e,Access:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ"}})}},542:function(e,t,a){"use strict";a.r(t);var n=a(11),c=a(12),l=a(14),s=a(13),o=a(15),r=a(0),i=a.n(r),u=a(51),m=a(65),p=a(25),d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={applications:[],loading:!0},a._status_func=function(e){return"RJD"===e.status?i.a.createElement("span",{class:"badge py-2 badge-danger"},"Rejected"):"HRD"===e.status?i.a.createElement("span",{class:"badge py-2 badge-success"},"Hired"):"PND"===e.status?i.a.createElement("span",{class:"badge py-2 badge-info"},"Pending"):"URV"===e.status?i.a.createElement("span",{class:"badge py-2 badge-warning"},"Reviewing"):void 0},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(u.b)().get("/iportal/job_application/?applicant=".concat(this.props.auth.id)).then(function(t){var a=t.data.results;console.log(a),a=(a=a.map(function(e){return e.created_at=new Date(e.created_at).toISOString().slice(0,10),e})).sort(function(e,t){return t.id-e.id}),console.log({applications:a}),e.setState({applications:a,loading:!1})})}},{key:"render",value:function(){var e=this,t=this.state.applications.map(function(t,a){return i.a.createElement("tr",{key:t.id},i.a.createElement("th",{scope:"row"},a+1),i.a.createElement("td",null,t.startup_name),i.a.createElement("td",null,t.opening_name),i.a.createElement("td",null,e._status_func(t)),i.a.createElement("td",null,Object(m.b)(t.created_at)))});return i.a.createElement("div",{className:"container jumbotron hoverable ",style:{marginBottom:"80px"}},i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return e.props.history.goBack()},className:"btn align-self-center font-weight-bold btn-primary"},"Go Back")),i.a.createElement("div",{className:"d-flex"},i.a.createElement("h1",{className:"text-center font-weight-bold flex-grow-1 my-5"},"My Applications")),i.a.createElement("div",{className:"table-responsive "},this.state.loading?i.a.createElement("div",{className:"my-5 text-center"},i.a.createElement("i",{style:{margin:"0 auto"},className:"fa fa-2x fa-spinner fa-spin"})):i.a.createElement(r.Fragment,null,i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{scope:"col",className:"font-weight-bold"},"#"),i.a.createElement("th",{scope:"col",className:"font-weight-bold"},"Company"),i.a.createElement("th",{scope:"col",className:"font-weight-bold"},"Posting"),i.a.createElement("th",{scope:"col",className:"font-weight-bold"},"Status"),i.a.createElement("th",{scope:"col",className:"font-weight-bold"},"Applied on"))),i.a.createElement("tbody",null,t)))))}}]),t}(r.Component);t.default=Object(p.b)(function(e){return e})(d)}}]);
//# sourceMappingURL=47.8f368547.chunk.js.map