(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{548:function(t,e,n){"use strict";var r=n(92),o=n.n(r).a.create({baseURL:"https://api.beeu.devg.com.br/api/v1/",headers:{Authorization:"Bearer ".concat(localStorage.getItem("auth._token.local"))}});e.a=o},559:function(t,e,n){"use strict";var r,o,c,d,l=n(31),m=(n(75),n(548));e.a={register:(d=Object(l.a)(regeneratorRuntime.mark((function t(data){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("students/ticket/register",data);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t){return d.apply(this,arguments)}),registerMessageTicket:(c=Object(l.a)(regeneratorRuntime.mark((function t(data){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("students/ticket/registerMessageTicket",data);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t){return c.apply(this,arguments)}),getMessagesTicket:(o=Object(l.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("students/ticket/messages-ticket/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),showStudentId:(r=Object(l.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("students/ticket/show-student-id/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)})}},596:function(t,e,n){"use strict";n.r(e);n(22);var r=n(559),o={data:function(){return{ticket:{},ticket_messages:[],message:{ticket_id:null,send_by:"aluno",message:null}}},created:function(){this.getMessages(this.$route.params.token)},methods:{submit:function(){var t=this;this.message&&(this.message.ticket_id=this.ticket.ticket_id,this.message.send_by="aluno",r.a.registerMessageTicket(this.message).then((function(e){e.data.error||(t.$notify.success({title:"Sucesso",message:e.data.message}),t.getMessages(t.$route.params.token))})))},getMessages:function(t){var e=this;r.a.getMessagesTicket(t).then((function(t){e.ticket=t.data.messages[0],e.ticket_messages=t.data.messages}))}}},c=n(58),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"bg-white rounded shadow-sm"},[t._m(0),t._v(" "),e("div",{staticClass:"p-4"},[e("div",{staticClass:"bg-light p-3",staticStyle:{height:"500px","overflow-y":"auto"}},t._l(t.ticket_messages,(function(n,r){return e("div",{key:r},["aluno"!=n.send_by?e("div",{staticClass:"shadow-sm bg-dark text-light d-inline-block rounded p-3 mb-3",staticStyle:{"max-width":"700px","word-wrap":"break-word"}},[t._m(1,!0),t._v(" "),e("div",[t._v("\n              "+t._s(n.message)+"\n            ")])]):e("div",{staticClass:"d-flex justify-content-end"},[e("div",{staticClass:"shadow-sm bg-light text-dark d-inline-block rounded p-3 pb-2 mb-3",staticStyle:{"max-width":"700px","word-wrap":"break-word"}},[e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"font-weight-bold"},[t._v("\n                  "+t._s(t.$auth.user.name)+"\n                ")]),t._v(" "),e("small",{staticClass:"font-weight-bold font-italic"},[t._v(t._s(n.created_at))])]),t._v(" "),e("div",[t._v(t._s(n.message))])])])])})),0),t._v(" "),e("form",{staticClass:"d-flex",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message.message,expression:"message.message"}],staticClass:"form-control",attrs:{cols:"30",rows:"3",placeholder:"Digite sua mensagem..."},domProps:{value:t.message.message},on:{input:function(e){e.target.composing||t.$set(t.message,"message",e.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("ENVIAR")])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-light border-bottom py-3 px-3 rounded"},[e("div",{staticClass:"d-flex justify-content-between align-content-center"},[e("h5",{staticClass:"mb-0 text-dark font-weight-bold"},[t._v("Teste 001")]),t._v(" "),e("span",{staticClass:"font-weight-bold font-italic text-secondary"},[t._v("\n          Criado em: 12/05/2022\n        ")])]),t._v(" "),e("span",{staticClass:"font-weight-bold font-italic text-secondary"},[t._v("\n        Enviado para: Administração\n      ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"font-weight-bold"},[t._v("Professor")]),t._v(" "),e("small",{staticClass:"font-weight-bold font-italic"},[t._v("12/05/2022")])])}],!1,null,null,null);e.default=component.exports}}]);