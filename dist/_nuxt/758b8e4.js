(window.webpackJsonp=window.webpackJsonp||[]).push([[5,10],{554:function(t,e,o){"use strict";o.r(e);var n={props:["id","title","subtitle"]},r=o(58),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal fade",attrs:{id:t.id,"data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("div",[e("h4",{staticClass:"modal-title font-weight-bold",attrs:{id:"staticBackdropLabel"}},[t._v("\n            "+t._s(t.title)+"\n          ")]),t._v(" "),e("div",{staticClass:"m-0 p-0"},[t._v(t._s(t.subtitle))])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"modal-body"},[t._t("body")],2)])])])}),[function(){var t=this._self._c;return t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}],!1,null,null,null);e.default=component.exports},559:function(t,e,o){var content=o(564);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(60).default)("484ae4b2",content,!0,{sourceMap:!1})},563:function(t,e,o){"use strict";o(559)},564:function(t,e,o){var n=o(59)(!1);n.push([t.i,".btn-enviar-comprov{display:block;cursor:pointer;font-weight:700}.ball-comprov{display:block;width:15px;height:15px;border-radius:50%}.card-comprovante{transition:.5s}.card-comprovante:hover{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}",""]),t.exports=n},568:function(t,e,o){"use strict";o.r(e);o(37),o(13);var n={props:["mensalidades"],components:{Modal:o(554).default},created:function(){},data:function(){return{itemSelected:{},Images:null}},methods:{showSelected:function(t){this.itemSelected=t},uploadFile:function(){this.Images=this.$refs.file.files[0]},submit:function(){var t=this;if(this.validated()){this.loading=!0;var e=new FormData;e.append("id",this.itemSelected.id),e.append("file",this.Images);this.$axios.post("voucher/create",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){e.data.error?t.$notify.error({title:"Ops!",message:e.data.message}):(t.$notify.success({title:"Sucesso!",message:e.data.message}),setTimeout((function(){window.location.reload()}),1800)),t.loading=!1}))}},validated:function(){return!!this.Images||(this.$notify.error({title:"Ops",message:"Selecione um áudio para envio!"}),!1)},formatDate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.split("-");return"".concat(e[2],"/").concat(e[1],"/").concat(e[0])},formatNumber:function(t){return parseFloat(t).toLocaleString("pt-br",{minimumFractionDigits:2})}}},r=n,l=(o(563),o(58)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[t._l(t.mensalidades,(function(o,n){return e("div",{key:n,staticClass:"col-md-6"},[e("div",{staticClass:"card-comprovante shadow-sm bg-light rounded w-100 d-flex justify-content-between mb-3"},[e("div",{staticClass:"p-4"},[e("h5",{staticClass:"mb-0 pb-0 font-weight-bold text-dark"},[t._v("\n          Mensalidade de "+t._s(o.month_reference)+"\n        ")]),t._v(" "),e("small",[t._v("Vencimento:\n          "),e("span",{staticClass:"font-weight-bold"},[t._v("\n            "+t._s(t.formatDate(o.due_date))+"\n          ")])])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"p-4"},[e("h5",{staticClass:"mb-1 text-dark"},[t._v("R$ "+t._s(t.formatNumber(o.value)))]),t._v(" "),"Em Aberto"==o.status?e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"ball-comprov bg-success mr-1"}),t._v("\n            "+t._s(o.status)+"\n          ")]):t._e(),t._v(" "),"A Vencer"==o.status?e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"ball-comprov bg-warning mr-1"}),t._v("\n            "+t._s(o.status)+"\n          ")]):t._e(),t._v(" "),"Atrasado"==o.status?e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"ball-comprov bg-danger mr-1"}),t._v("\n            "+t._s(o.status)+"\n          ")]):t._e(),t._v(" "),"Enviado"==o.status?e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"ball-comprov bg-secondary mr-1"}),t._v("\n            "+t._s(o.status)+"\n          ")]):t._e()]),t._v(" "),"Em Aberto"==o.status?e("div",{staticClass:"btn-enviar-comprov bg-success rounded shadow ml-2 p-4 text-white d-flex align-items-center",attrs:{"data-toggle":"modal","data-target":"#modalEnviarComprovante"},on:{click:function(e){return t.showSelected(o)}}},[t._m(0,!0)]):t._e(),t._v(" "),"A Vencer"==o.status?e("div",{staticClass:"btn-enviar-comprov bg-warning rounded shadow ml-2 p-4 text-white d-flex align-items-center",attrs:{"data-toggle":"modal","data-target":"#modalEnviarComprovante"},on:{click:function(e){return t.showSelected(o)}}},[t._v("\n          ENVIAR\n        ")]):t._e(),t._v(" "),"Atrasado"==o.status?e("div",{staticClass:"btn-enviar-comprov bg-danger ml-2 rounded shadow p-4 text-white d-flex align-items-center",attrs:{"data-toggle":"modal","data-target":"#modalEnviarComprovante"},on:{click:function(e){return t.showSelected(o)}}},[t._v("\n          ATRASADO\n        ")]):t._e(),t._v(" "),"Enviado"==o.status?e("div",{staticClass:"btn-enviar-comprov bg-secondary rounded shadow ml-2 p-4 text-white d-flex align-items-center",on:{click:function(e){return t.showSelected(o)}}},[t._v("\n          ENVIADO\n        ")]):t._e()])])])})),t._v(" "),e("modal",{attrs:{id:"modalEnviarComprovante",title:"Enviar comprovante",subtitle:"Envie seu comprovante para aprovação."},scopedSlots:t._u([{key:"body",fn:function(){return["A Vencer"==t.itemSelected.status||"Em Aberto"==t.itemSelected.status?e("div",[e("form",{ref:"formAudio",attrs:{enctype:"multipart/form-data",method:"post"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-label",attrs:{for:""}},[t._v("Arquivo: "),e("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e("br"),t._v(" "),e("input",{ref:"file",attrs:{type:"file"},on:{change:t.uploadFile}})]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Valor: ")]),t._v(" "),e("div",{staticClass:"input-group"},[e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text font-weight-bold"},[t._v("R$")])]),t._v(" "),e("div",{staticClass:"form-control bg-light"},[t._v("\n                    "+t._s(t.formatNumber(t.itemSelected.value))+"\n                  ")])])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Vencimento: ")]),t._v(" "),e("div",{staticClass:"form-control bg-light"},[t._v("\n                  "+t._s(t.formatDate(t.itemSelected.due_date))+"\n                ")])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Mês de referência: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.itemSelected.month_reference,expression:"itemSelected.month_reference"}],staticClass:"form-control",attrs:{readonly:"",type:"text"},domProps:{value:t.itemSelected.month_reference},on:{input:function(e){e.target.composing||t.$set(t.itemSelected,"month_reference",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Status: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.itemSelected.status,expression:"itemSelected.status"}],staticClass:"form-control",attrs:{readonly:"",type:"text"},domProps:{value:t.itemSelected.status},on:{input:function(e){e.target.composing||t.$set(t.itemSelected,"status",e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"modal-footer mt-3"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[e("i",{staticClass:"bi bi-x-circle"}),t._v(" Cancelar\n            ")]),t._v(" "),e("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e("i",{staticClass:"bi bi-send-check-fill mr-1"}),t._v(" Enviar\n            ")])])])]):t._e(),t._v(" "),"Atrasado"==t.itemSelected.status?e("div",{staticClass:"alert alert-danger"},[t._v("\n        Mensalidade em atraso. Entre em contato com o suporte!\n      ")]):t._e()]},proxy:!0}])})],2)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex flex-column align-items-center"},[e("span",[t._v("ADIANTAR")]),t._v(" "),e("span",[t._v("PARCELA")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Modal:o(554).default})}}]);