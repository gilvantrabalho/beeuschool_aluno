(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,3,4,12,14],{547:function(t,e,n){"use strict";var r=n(92),o=n.n(r).a.create({baseURL:"https://api.beeu.devg.com.br/api/v1/",headers:{Authorization:"Bearer ".concat(localStorage.getItem("auth._token.local"))}});e.a=o},548:function(t,e,n){"use strict";n.r(e);var r={props:["title"]},o=n(58),component=Object(o.a)(r,(function(){var t=this;return(0,t._self._c)("h1",{staticClass:"h3 mb-2 text-gray-800 mb-3"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=component.exports},550:function(t,e,n){"use strict";n.r(e);var r={props:{loading:{type:Boolean,default:!1},title:{type:String,required:!0},type:{type:String,required:!0},classStyle:{type:String,required:!1},click:{type:Function,required:!1,default:function(){}}}},o=n(58),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t.loading?e("button",{class:"btn ".concat(t.classStyle),attrs:{type:t.type,disabled:""},on:{click:t.click}},[t._m(0)]):e("button",{class:"btn ".concat(t.classStyle),attrs:{type:t.type},on:{click:t.click}},[t._v("\n    "+t._s(t.title)+"\n  ")])])}),[function(){var t=this._self._c;return t("div",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[this._v("Loading...")])])}],!1,null,null,null);e.default=component.exports},555:function(t,e,n){"use strict";n.r(e);var r={},o=n(58),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex flex-column align-items-center"},[e("div",{staticClass:"spinner-grow",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])]),t._v(" "),e("span",{staticClass:"mt-2"},[t._v("Carregando...")])])}],!1,null,null,null);e.default=component.exports},560:function(t,e,n){"use strict";n.r(e);var r={name:"audio-status",props:["status"]},o=n(58),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",["C"==t.status?e("span",{staticClass:"badge badge-pill badge-success shadow"},[t._v("CORRIGIDO")]):t._e(),t._v(" "),"E"==t.status?e("small",{staticClass:"badge badge-pill badge-primary shadow"},[t._v("\n    ENVIADO\n  ")]):t._e(),t._v(" "),"R"==t.status?e("span",{staticClass:"badge badge-pill badge-warning shadow"},[t._v("REFAZER")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},561:function(t,e,n){"use strict";n.r(e);var r={props:["src"]},o=n(58),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("audio",{attrs:{controls:""}},[e("source",{attrs:{src:"http://192.168.15.9:8000/storage/".concat(t.src),type:"audio/ogg"}}),t._v(" "),e("source",{attrs:{src:"http://192.168.15.9:8000/storage/".concat(t.src),type:"audio/mp3"}}),t._v("\n  Your browser does not support the audio element.\n")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Audio:n(561).default})},562:function(t,e,n){"use strict";var r,o,l=n(32),d=(n(75),n(547));e.a={getAllByUserId:(o=Object(l.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("students/audio/get-by-user_id/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),showStudentsAudioId:(r=Object(l.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("students/audio/get-show-student-audio-id/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)})}},588:function(t,e,n){"use strict";n.r(e);n(22),n(4),n(61),n(186),n(37);var r=n(562),o=n(548),l=n(555),d=n(550),c={components:{TitlePage:o.default,Spinner:l.default,ButtonComponent:d.default},data:function(){return{loading:!1,loadingForm:!1,Images:null,audio:{}}},beforeCreate:function(){var t=this;r.a.showStudentsAudioId(this.$route.params.id).then((function(e){t.audio=e.data.student_audio[0],t.loading=!1}))},methods:{uploadFile:function(){this.Images=this.$refs.file.files[0]},submit:function(){var t=this;if(this.validated()){this.loadingForm=!0;var e=new FormData;e.append("id",this.audio.id),e.append("idSac",this.audio.idSac),e.append("file_name",this.audio.file),e.append("file",this.Images);console.log(this.Images,e),this.$axios.post("students/audio/update",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(),e.data.error?t.$notify.error({title:"Ops!",message:e.data.message}):(t.$notify.success({title:"Sucesso!",message:e.data.message}),setTimeout((function(){window.location.reload()}),1500)),t.loadingForm=!1}))}},validated:function(){return!!this.Images||(this.$notify.error({title:"Ops",message:"Selecione um áudio para envio!"}),!1)}}},v=n(58),component=Object(v.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item text-primary"},[e("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item"},[e("NuxtLink",{attrs:{to:"/audio/my-audios"}},[t._v("Meus áudios")])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Data")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"card shadow-sm border-0 pb-3"},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"d-flex justify-content-between align-items-center bg-light rounded"},[e("h5",{staticClass:"m-0 p-0 text-secondary"},[t._v("Áudio")]),t._v(" "),e("div",[e("audio-status",{attrs:{status:t.audio.status}})],1)])]),t._v(" "),t.loading?e("div",{staticClass:"card-body"},[e("Spinner")],1):e("div",{staticClass:"card-body"},[e("div",{},[e("div",{staticClass:"mb-3 text-primary font-weight-bold"},[t._v("\n              "+t._s(t.audio.name)+"\n            ")]),t._v(" "),t.audio.file?e("div",{staticClass:"mb-4 d-flex justify-content-center"},[e("Audio",{attrs:{src:t.audio.file}})],1):t._e(),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"mb-4"},[e("span",{staticClass:"font-weight-bold"},[t._v("Descrição")]),t._v(" "),"null"!=t.audio.description?e("div",[t._v("\n                "+t._s(t.audio.description)+"\n              ")]):e("div",[t._v("---")])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("div",[e("a",{attrs:{href:t.audio.link,target:"_blank",rel:"noopener noreferrer"}},[e("button",{staticClass:"btn btn-sm btn-success"},[t._v("\n                    Ir para o áudio\n                  ")])])]),t._v(" "),e("div",{staticClass:"text-right"},[e("small",[t._v(t._s(t.audio.created_at))])])])])])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"card shadow-sm border-0"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[t.audio.grade?e("div",{staticClass:"d-flex mb-2"},[e("span",{staticClass:"font-weight-bold"},[t._v("Nota: ")]),t._v(" "),e("div",{staticClass:"ml-1"},[t._v("\n              "+t._s(t.audio.grade)+"\n            ")])]):t._e(),t._v(" "),t.audio.desc_teacher?e("div",[e("span",{staticClass:"font-weight-bold"},[t._v("Descrição")]),t._v(" "),e("div",[t._v("\n              "+t._s(t.audio.desc_teacher)+"\n            ")])]):e("div",{staticClass:"text-center p-3"},[t._v("\n            Ainda não há correção para esse áudio!\n          ")]),t._v(" "),"R"==t.audio.status?e("div",[e("hr"),t._v(" "),e("form",{ref:"formAudio",attrs:{enctype:"multipart/form-data",method:"post"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"form-group mb-3"},[t._m(1),t._v(" "),e("br"),t._v(" "),e("input",{ref:"file",attrs:{type:"file"},on:{change:t.uploadFile}})]),t._v(" "),e("ButtonsButtonComponent",{attrs:{loading:t.loading,title:"Enviar Arquivo",type:"submit",classStyle:"btn-block btn-primary py-2"}})],1)]):t._e()])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header text-secondary"},[t("h5",{staticClass:"m-0 p-0"},[this._v("Correção do Professor")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"form-label",attrs:{for:""}},[t._v("Reenviar Arquivo: "),e("span",{staticClass:"text-danger"},[t._v("*")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AudioStatus:n(560).default,Audio:n(561).default,ButtonsButtonComponent:n(550).default})}}]);