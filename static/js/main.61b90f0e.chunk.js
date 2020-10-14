(this.webpackJsonproutine=this.webpackJsonproutine||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(20)},,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),o=a(7),c=a.n(o),l=(a(14),a(15),a(2)),r=a(3),i=a(5),u=a(4),m=a(1),d=a.n(m),g=(a(17),function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={time:d()().format("HH:mm")},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.intervalID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.setState({time:d()().format("HH:mm")})}},{key:"render",value:function(){var t=this.state.time;return s.a.createElement("p",{className:"App-clock"},t)}}]),a}(n.Component)),k=(a(18),function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={events:[],loggedIn:!!localStorage.getItem("calendarId"),calendarId:""},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getEvents()}},{key:"getEvents",value:function(){var t=this,e=localStorage.getItem("calendarId"),a=window.gapi;a.load("client",(function(){a.client.init({apiKey:"AIzaSyDph-ap1PUcdfVH66PfGNzrAKjUFEmbssI"}).then((function(){return a.client.request({path:"https://www.googleapis.com/calendar/v3/calendars/".concat(e,"/events?maxResults=").concat(5,"&orderBy=updated&timeMin=").concat(d()().toISOString(),"&timeMax=").concat(d()().endOf("day").toISOString())})})).then((function(e){var a=e.result.items;t.setState({events:a})}),(function(t){console.log(t)}))}))}},{key:"onCalendarIdInputChange",value:function(t){this.setState({calendarId:t.target.value})}},{key:"onFormSubmit",value:function(t){t.preventDefault(),localStorage.setItem("calendarId",this.state.calendarId),this.setState({loggedIn:!0}),this.getEvents()}},{key:"render",value:function(){var t=this;return this.state.loggedIn?s.a.createElement("div",{className:"schedule"},this.state.events.length>0?s.a.createElement("h2",{className:"schedule-heading"},"Upcoming meetings"):s.a.createElement("h2",{className:"schedule-heading no-upcoming"},"No Upcoming meetings"),this.state.events.length>0&&this.state.events.map((function(t,e){return s.a.createElement("p",{key:e},t.summary," at ",t.start&&t.start.dateTime&&d()(t.start.dateTime).format("HH:mm"))}))):s.a.createElement("form",{onSubmit:function(e){return t.onFormSubmit(e)},className:"schedule"},s.a.createElement("input",{type:"text",name:"calendarId",onChange:function(e){return t.onCalendarIdInputChange(e)},value:this.state.calendarId,placeholder:"Google Calendar ID",className:"calendar-id-input"}),s.a.createElement("button",{className:"calendar-submit",type:"submit"},"Submit"))}}]),a}(n.Component)),p=a(8),h=(a(19),function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).componentDidMount=function(){n.getTasks()},n.onChange=function(t){n.setState(Object(p.a)({},t.target.name,t.target.value))},n.onSubmit=function(){if(n.state.task){var t=JSON.parse(localStorage.getItem("tasklist"));null==t&&(t=[]);var e={task:n.state.task,status:!1};t.push(e),localStorage.setItem("tasklist",JSON.stringify(t)),n.setState({task:""}),n.getTasks()}},n.getTasks=function(){var t=JSON.parse(localStorage.getItem("tasklist"));t&&(t=t.sort((function(t,e){return t.status?1:e.status?-1:0})),localStorage.setItem("tasklist",JSON.stringify(t)),n.setState({tasklist:t.map((function(t,e){var a={color:"black",background:"lightgrey"},o={textDecoration:"none"};return t.status&&(a.color="green",a.background="beige",o.textDecoration="line-through"),s.a.createElement("div",{key:e,className:"task",style:a},s.a.createElement("div",null,s.a.createElement("p",{className:"task-body",style:o},t.task),s.a.createElement("div",{className:"task-options"},t.status?s.a.createElement("p",{className:"task-option",onClick:function(){return n.undoTask(e)}},"Undo"):s.a.createElement("p",{className:"task-option",onClick:function(){return n.updateTask(e)}},"Done"),s.a.createElement("p",{className:"task-option",onClick:function(){return n.deleteTask(e)}},"Delete"))))}))}))},n.updateTask=function(t){var e=JSON.parse(localStorage.getItem("tasklist"));e[t].status=!0,localStorage.setItem("tasklist",JSON.stringify(e)),n.getTasks()},n.undoTask=function(t){var e=JSON.parse(localStorage.getItem("tasklist"));e[t].status=!1,localStorage.setItem("tasklist",JSON.stringify(e)),n.getTasks()},n.deleteTask=function(t){var e=JSON.parse(localStorage.getItem("tasklist"));e.splice(t,1),localStorage.setItem("tasklist",JSON.stringify(e)),n.getTasks()},n.state={task:"",tasklist:[]},n}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"todo-list"},s.a.createElement("div",null,s.a.createElement("h1",{className:"app-header"},"My Task List")," "),s.a.createElement("div",{className:"app-form"},s.a.createElement("form",{onSubmit:this.onSubmit,className:"todo-form"},s.a.createElement("input",{type:"text",name:"task",onChange:this.onChange,value:this.state.task,placeholder:"New task...",autoComplete:"off",className:"todo-input"}),s.a.createElement("button",{className:"todo-submit",type:"submit"},"Create"))),s.a.createElement("div",null,s.a.createElement("div",{className:"task-list"},this.state.tasklist)))}}]),a}(n.Component)),f=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("section",{className:"section section-one"},s.a.createElement(g,null),s.a.createElement(k,null)),s.a.createElement("section",{className:"section section-two"},s.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.61b90f0e.chunk.js.map