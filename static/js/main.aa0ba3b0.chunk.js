(this.webpackJsonproutine=this.webpackJsonproutine||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(17)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),o=a(6),r=a.n(o),i=(a(13),a(14),a(1)),l=a(2),c=a(4),u=a(3),m=(a(15),function(t){Object(c.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={time:(new Date).getHours()+":"+(new Date).getMinutes()},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.intervalID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){var t=new Date;this.setState({time:t.getHours()+":"+t.getMinutes()})}},{key:"render",value:function(){var t=this.state.time;return s.a.createElement("p",{className:"App-clock"},t)}}]),a}(n.Component)),k=a(7),g=(a(16),function(t){Object(c.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).componentDidMount=function(){n.getTasks()},n.onChange=function(t){n.setState(Object(k.a)({},t.target.name,t.target.value))},n.onSubmit=function(){if(n.state.task){var t=JSON.parse(localStorage.getItem("tasklist"));null==t&&(t=[]);var e={task:n.state.task,status:!1};t.push(e),localStorage.setItem("tasklist",JSON.stringify(t)),n.setState({task:""}),n.getTasks()}},n.getTasks=function(){var t=JSON.parse(localStorage.getItem("tasklist"));t&&(t=t.sort((function(t,e){return t.status?1:e.status?-1:0})),localStorage.setItem("tasklist",JSON.stringify(t)),n.setState({tasklist:t.map((function(t,e){var a={color:"black",background:"lightgrey"},o={textDecoration:"none"};return t.status&&(a.color="green",a.background="beige",o.textDecoration="line-through"),s.a.createElement("div",{key:e,className:"task",style:a},s.a.createElement("div",null,s.a.createElement("p",{className:"task-body",style:o},t.task),s.a.createElement("div",{className:"task-options"},t.status?s.a.createElement("p",{className:"task-option",onClick:function(){return n.undoTask(e)}},"Undo"):s.a.createElement("p",{className:"task-option",onClick:function(){return n.updateTask(e)}},"Done"),s.a.createElement("p",{className:"task-option",onClick:function(){return n.deleteTask(e)}},"Delete"))))}))}))},n.updateTask=function(t){var e=JSON.parse(localStorage.getItem("tasklist"));e[t].status=!0,localStorage.setItem("tasklist",JSON.stringify(e)),n.getTasks()},n.undoTask=function(t){var e=JSON.parse(localStorage.getItem("tasklist"));e[t].status=!1,localStorage.setItem("tasklist",JSON.stringify(e)),n.getTasks()},n.deleteTask=function(t){var e=JSON.parse(localStorage.getItem("tasklist"));e.splice(t,1),localStorage.setItem("tasklist",JSON.stringify(e)),n.getTasks()},n.state={task:"",tasklist:[]},n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"todo-list"},s.a.createElement("div",null,s.a.createElement("h1",{className:"app-header"},"My Task List")," "),s.a.createElement("div",{className:"app-form"},s.a.createElement("form",{onSubmit:this.onSubmit,className:"todo-form"},s.a.createElement("input",{type:"text",name:"task",onChange:this.onChange,value:this.state.task,placeholder:"New task...",autoComplete:"off",className:"todo-input"}),s.a.createElement("button",{className:"todo-submit",type:"submit"},"Create"))),s.a.createElement("div",null,s.a.createElement("div",{className:"task-list"},this.state.tasklist)))}}]),a}(n.Component)),p=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("section",{className:"section section-one"},s.a.createElement(m,null)),s.a.createElement("section",{className:"section section-two"},s.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.aa0ba3b0.chunk.js.map