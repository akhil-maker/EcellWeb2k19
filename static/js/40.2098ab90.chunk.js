(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{157:function(e,t,a){e.exports=a.p+"static/media/no_pic.67edcff8.svg"},502:function(e,t,a){"use strict";a.r(t);var l=a(11),s=a(12),n=a(14),r=a(13),c=a(15),i=a(0),o=a.n(i),m=(a(503),a(51)),u=(a(83),a(25)),d=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(a=Object(n.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c)))).state={loading:!0,startup:{}},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(m.b)().get("/iportal/startup/".concat(this.props.auth.startup_id,"/")).then(function(t){console.log(t.data),e.setState({loading:!1,startup:t.data})})}},{key:"render",value:function(){var e=this;if(this.state.loading)return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"text-center mt-5"}),this.state.loading?o.a.createElement("h1",null,"loading"):null);var t=this.state.startup.logo?this.state.startup.logo:a(157);return o.a.createElement("div",{className:"pb-2",style:{background:"lightgray",paddingTop:"",marginBottom:"-50px"}},o.a.createElement("div",{className:"container jumbotron hoverable"},o.a.createElement("div",null,o.a.createElement("div",{className:"d-flex my-5"},o.a.createElement("h1",{className:"text-center flex-grow-1 font-weight-bold"},"Dashboard"),o.a.createElement("button",{onClick:function(){return e.props.history.push("/internship/startup/edit/")},className:"btn btn-danger font-weight-bold"},"edit")),this.state.loading?o.a.createElement("h1",null,"loading"):null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"font-weight-bold"},"Name : "),o.a.createElement("span",null,this.state.startup.name)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"font-weight-bold"},"Email : "),o.a.createElement("span",null,this.state.startup.email)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"font-weight-bold"},"Approved : "),o.a.createElement("span",null,this.state.startup.approved?o.a.createElement("i",{className:"fa fa-check text-success"}):o.a.createElement("i",{className:"fa fa-times text-danger"}))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"font-weight-bold"},"Contact : "),o.a.createElement("span",null,this.state.startup.contact)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"font-weight-bold"},"Sector : "),o.a.createElement("span",{className:"font-weight-bold"},this.state.startup.sector)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"font-weight-bold"},"Address Line 1 : "),o.a.createElement("span",null,this.state.startup.address1)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"font-weight-bold"},"Address Line 2 : "),o.a.createElement("span",null,this.state.startup.address2))),o.a.createElement("div",{className:"col-md-4 text-right my-5 d-flex",style:{justifyContent:"center",alignItems:"center"}},o.a.createElement("img",{className:"logo_img image-fluid align-self-center",style:{outline:"3px solid #EA4763",outlineOffset:"8px"},src:t,alt:""}))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"font-weight-bold"},"Brief : "),o.a.createElement("span",null,this.state.startup.brief)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"font-weight-bold"},"Description : "),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.startup.description}})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"font-weight-bold"},"District : "),o.a.createElement("span",null,this.state.startup.district)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"font-weight-bold"},"State : "),o.a.createElement("span",null,this.state.startup.state)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"font-weight-bold"},"Country : "),o.a.createElement("span",null,this.state.startup.country)))))}}]),t}(i.Component);t.default=Object(u.b)(function(e){return e})(d)},51:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var l=a(72),s=a.n(l),n=a(35),r="http://localhost:8000";r="",t.b=function(){var e=void 0,t=n.store.getState().auth;return t&&(e=t.loggedin?t.token:void 0),s.a.create({baseURL:r,headers:{Authorization:e,Access:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ"}})}},83:function(e,t,a){}}]);
//# sourceMappingURL=40.2098ab90.chunk.js.map