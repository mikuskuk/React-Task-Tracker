(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),l=(n(16),n(6)),u=n(2),i=n(1),d=function(e){var t=e.color,n=e.text,a=e.onClick;return r.a.createElement("button",{onClick:a,style:{backgroundColor:t},className:"btn"},n)};d.defaultProps={color:"steelblue"};var m=d,s=function(e){var t=e.title,n=e.onAdd,a=e.showAdd;return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,t),r.a.createElement(m,{color:a?"red":"green",text:a?"Close":"Add",onClick:n}))};s.defaultProps={title:"Task Tracker"};var f=s,b=n(5),p=function(e){var t=e.task,n=e.onDelete,a=e.onToggle;return r.a.createElement("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return a(t.id)}},r.a.createElement("h3",null,t.text," ",r.a.createElement(b.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})),r.a.createElement("p",null,t.day))},E=function(e){var t=e.tasks,n=e.onDelete,a=e.onToggle;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(p,{key:e.id,task:e,onDelete:n,onToggle:a})}))},h=function(e){var t=e.onAdd,n=Object(a.useState)(""),o=Object(i.a)(n,2),c=o[0],l=o[1],u=Object(a.useState)(""),d=Object(i.a)(u,2),m=d[0],s=d[1],f=Object(a.useState)(!1),b=Object(i.a)(f,2),p=b[0],E=b[1];return r.a.createElement("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),c?(t({text:c,day:m,reminder:p}),l(""),s(""),E(!1)):alert("Please add a task")}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Task"),r.a.createElement("input",{type:"text",placeholder:"Add Task",value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Day & Time"),r.a.createElement("input",{type:"text",placeholder:"Add Day & Time",value:m,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"form-control form-control-check"},r.a.createElement("label",null,"Set Reminder"),r.a.createElement("input",{type:"checkbox",checked:p,value:p,onChange:function(e){return E(e.currentTarget.checked)}})),r.a.createElement("input",{type:"submit",value:"Save Task",className:"btn btn-block"}))},g=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([{id:1,text:"Doctors Appointment",day:"Feb 5th at 2:30pm",reminder:!0},{id:2,text:"Meeting at School",day:"Feb 6th at 1:30pm",reminder:!0},{id:3,text:"Food Shopping",day:"Feb 5th at 2:30pm",reminder:!1}]),d=Object(i.a)(c,2),m=d[0],s=d[1];return r.a.createElement("div",{className:"container"},r.a.createElement(f,{onAdd:function(){return o(!n)},showAdd:n}),n&&r.a.createElement(h,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(u.a)({id:t},e);s([].concat(Object(l.a)(m),[n]))}}),m.length>0?r.a.createElement(E,{tasks:m,onDelete:function(e){s(m.filter(function(t){return t.id!==e}))},onToggle:function(e){s(m.map(function(t){return t.id===e?Object(u.a)({},t,{reminder:!t.reminder}):t}))}}):"No Tasks To Show")},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null))),k()},7:function(e,t,n){e.exports=n(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.31f0b849.chunk.js.map