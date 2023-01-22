(window.webpackJsonp=window.webpackJsonp||[]).push([[17,4,6,12],{547:function(t,e,n){"use strict";var r=n(92),o=n.n(r).a.create({baseURL:"http://192.168.15.4:8000/api/v1/",headers:{Authorization:"Bearer ".concat(localStorage.getItem("auth._token.local"))}});e.a=o},548:function(t,e,n){"use strict";n.r(e);var r={props:["title"]},o=n(58),component=Object(o.a)(r,(function(){var t=this;return(0,t._self._c)("h1",{staticClass:"h3 mb-2 text-gray-800 mb-3"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=component.exports},549:function(t,e,n){"use strict";n.r(e);var r={props:["title"]},o=n(58),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card shadow mb-4"},[e("div",{staticClass:"card-header py-3"},[e("h6",{staticClass:"m-0 font-weight-bold text-primary"},[t._v(t._s(t.title))])]),t._v(" "),e("div",{staticClass:"card-body"},[t._t("body")],2)])}),[],!1,null,null,null);e.default=component.exports},550:function(t,e,n){"use strict";n.r(e);var r={props:{loading:{type:Boolean,default:!1},title:{type:String,required:!0},type:{type:String,required:!0},classStyle:{type:String,required:!1},click:{type:Function,required:!1,default:function(){}}}},o=n(58),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t.loading?e("button",{class:"btn ".concat(t.classStyle),attrs:{type:t.type,disabled:""},on:{click:t.click}},[t._m(0)]):e("button",{class:"btn ".concat(t.classStyle),attrs:{type:t.type},on:{click:t.click}},[t._v("\n    "+t._s(t.title)+"\n  ")])])}),[function(){var t=this._self._c;return t("div",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[this._v("Loading...")])])}],!1,null,null,null);e.default=component.exports},579:function(t,e,n){"use strict";n.r(e);n(15),n(2),n(1),n(22),n(4),n(61),n(37);var r,o=n(548),l=n(549),c=n(32),d=(n(75),n(547)),f={getAll:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("one-hundred-texts/get-all");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)})},v=n(550),m={components:{TitlePage:o.default,CardContainer:l.default,ButtonComponent:v.default},data:function(){return{loading:!1,texts:[],Images:null,audio:{text_ref_id:"",arquivo:null,description:null}}},created:function(){this.getAllOneHundredTexts()},methods:{uploadFile:function(){this.Images=this.$refs.file.files[0]},submit:function(){var t=this;if(this.validated()){this.loading=!0;var e=new FormData;e.append("student_id",this.$auth.user.id),e.append("teacher_id",this.$auth.user.teacher_id),e.append("text_ref_id",this.audio.text_ref_id),e.append("file",this.Images),e.append("description",this.audio.description);this.$axios.post("students/audio/send",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){e.data.error?t.$notify.error({title:"Ops!",message:e.data.message}):(t.$notify.success({title:"Sucesso!",message:e.data.message}),setTimeout((function(){window.location.reload()}),1500)),t.loading=!1}))}},getAllOneHundredTexts:function(){var t=this;f.getAll().then((function(e){t.texts=e.data.texts}))},validated:function(){return this.audio.text_ref_id?!!this.Images||(this.$notify.error({title:"Ops",message:"Selecione um áudio para envio!"}),!1):(this.$notify.error({title:"Ops",message:"Selecione o texto de referência!"}),!1)}}},_=n(58),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("title-page",{attrs:{title:"Enviar áudio"}}),t._v(" "),e("card-container",{attrs:{title:"Enviar novo áudio"},scopedSlots:t._u([{key:"body",fn:function(){return[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 mx-auto"},[e("form",{ref:"formAudio",staticClass:"pb-4",attrs:{enctype:"multipart/form-data",method:"post"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label",attrs:{for:""}},[t._v("Texto de referência:\n                "),e("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.audio.text_ref_id,expression:"audio.text_ref_id"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.audio,"text_ref_id",e.target.multiple?n:n[0])}}},[e("option",{attrs:{selected:"",value:""}},[t._v("Selecione")]),t._v(" "),t._l(t.texts,(function(n,r){return e("option",{key:r,domProps:{value:n.id}},[t._v("\n                  "+t._s(n.name)+"\n                ")])}))],2)]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label",attrs:{for:""}},[t._v("Arquivo: "),e("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e("br"),t._v(" "),e("input",{ref:"file",attrs:{type:"file"},on:{change:t.uploadFile}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Descrição: (opcional)")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.audio.description,expression:"audio.description"}],staticClass:"form-control",attrs:{id:"",cols:"30",rows:"5"},domProps:{value:t.audio.description},on:{input:function(e){e.target.composing||t.$set(t.audio,"description",e.target.value)}}})]),t._v(" "),e("ButtonsButtonComponent",{attrs:{loading:t.loading,title:"Enviar Arquivo",type:"submit",classStyle:"btn-block btn-primary py-2"}})],1)])])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TitlePage:n(548).default,ButtonsButtonComponent:n(550).default})}}]);