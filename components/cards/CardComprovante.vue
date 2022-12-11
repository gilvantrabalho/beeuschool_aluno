<template>
  <div class="row">
    <!--{{ mensalidades }}-->
    <div class="col-md-6" v-for="(item, index) in mensalidades" :key="index">
      <div
        class="
          card-comprovante
          shadow-sm
          bg-light
          rounded
          w-100
          d-flex
          justify-content-between
          mb-3
        "
      >
        <div class="p-4">
          <h5 class="mb-0 pb-0 font-weight-bold text-dark">
            Mensalidade de {{ item.month_reference }}
          </h5>
          <small
            >Vencimento:
            <span class="font-weight-bold">
              {{ formatDate(item.due_date) }}
            </span></small
          >
        </div>
        <div class="d-flex">
          <div class="p-4">
            <h5 class="mb-1 text-dark">R$ {{ formatNumber(item.value) }}</h5>

            <div
              v-if="item.status == 'Em Aberto'"
              class="d-flex align-items-center"
            >
              <span class="ball-comprov bg-primary mr-1"></span>
              {{ item.status }}
            </div>

            <div
              v-if="item.status == 'Atrasado'"
              class="d-flex align-items-center"
            >
              <span class="ball-comprov bg-danger mr-1"></span>
              {{ item.status }}
            </div>

            <div
              v-if="item.status == 'Enviado'"
              class="d-flex align-items-center"
            >
              <span class="ball-comprov bg-warning mr-1"></span>
              {{ item.status }}
            </div>
          </div>

          <div
            @click="showSelected(item)"
            v-if="item.status == 'Em Aberto'"
            class="
              btn-enviar-comprov
              bg-primary
              rounded
              shadow
              ml-2
              p-4
              text-white
              d-flex
              align-items-center
            "
            data-toggle="modal"
            data-target="#modalEnviarComprovante"
          >
            ENVIAR
          </div>

          <div
            @click="showSelected(item)"
            v-if="item.status == 'Atrasado'"
            class="
              btn-enviar-comprov
              bg-danger
              ml-2
              rounded
              shadow
              p-4
              text-white
              d-flex
              align-items-center
            "
            data-toggle="modal"
            data-target="#modalEnviarComprovante"
          >
            ATRASADO
          </div>

          <div
            @click="showSelected(item)"
            v-if="item.status == 'Enviado'"
            class="
              btn-enviar-comprov
              bg-warning
              rounded
              shadow
              ml-2
              p-4
              text-white
              d-flex
              align-items-center
            "
          >
            ENVIADO
          </div>
        </div>
      </div>
    </div>

    <modal
      id="modalEnviarComprovante"
      title="Enviar comprovante"
      subtitle="Envie seu comprovante para aprovação."
    >
      <template v-slot:body>
        <div v-if="itemSelected.status == 'Em Aberto'">
          <form
            ref="formAudio"
            @submit.prevent="submit"
            enctype="multipart/form-data"
            method="post"
          >
            <div class="form-group">
              <label for="" class="form-label"
                >Arquivo: <span class="text-danger">*</span></label
              >
              <br />

              <input type="file" @change="uploadFile" ref="file" />
            </div>

            <hr />

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">Valor: </label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text font-weight-bold">R$</div>
                    </div>
                    <div class="form-control bg-light">
                      {{ formatNumber(itemSelected.value) }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">Vencimento: </label>
                  <div class="form-control bg-light">
                    {{ formatDate(itemSelected.due_date) }}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">Mês de referência: </label>
                  <input
                    v-model="itemSelected.month_reference"
                    readonly
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">Status: </label>
                  <input
                    v-model="itemSelected.status"
                    readonly
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer mt-3">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                <i class="bi bi-x-circle"></i> Cancelar
              </button>
              <button type="submit" class="btn btn-success">
                <i class="bi bi-send-check-fill mr-1"></i> Enviar
              </button>
            </div>
          </form>
        </div>

        <div
          class="alert alert-danger"
          v-if="itemSelected.status == 'Atrasado'"
        >
          Mensalidade em atraso. Entre em contato com o suporte!
        </div>
      </template>
    </modal>
  </div>
</template>

<style>
.btn-enviar-comprov {
  display: block;
  cursor: pointer;
  font-weight: bold;
}

.ball-comprov {
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
.card-comprovante {
  transition: 0.5s;
}
.card-comprovante:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>

<script>
import Modal from "../modal/Modal.vue";
export default {
  props: ["mensalidades"],
  components: { Modal },
  created() {
    // window.formatDate("2020-05-10");
  },
  data() {
    return {
      itemSelected: {},
      Images: null,
    };
  },
  methods: {
    showSelected: function (item) {
      this.itemSelected = item;
      //  this.itemSelected.due_date = this.formatDate(item.due_date);
    },
    uploadFile() {
      this.Images = this.$refs.file.files[0];
    },
    submit() {
      if (this.validated()) {
        this.loading = true;
        const formData = new FormData();
        formData.append("id", this.itemSelected.id);
        formData.append("file", this.Images);
        const headers = { "Content-Type": "multipart/form-data" };

        this.$axios
          .post("voucher/create", formData, { headers })
          .then((res) => {
            if (!res.data.error) {
              this.$notify.success({
                title: "Sucesso!",
                message: res.data.message,
              });
              setTimeout(() => {
                window.location.reload();
              }, 1800);
            } else {
              this.$notify.error({
                title: "Ops!",
                message: res.data.message,
              });
            }
            this.loading = false;
          });
      }
    },
    validated: function () {
      if (!this.Images) {
        this.$notify.error({
          title: "Ops",
          message: "Selecione um áudio para envio!",
        });
        return false;
      }

      return true;
    },
    formatDate: function (date = "") {
      let array_date = date.split("-");
      return `${array_date[2]}/${array_date[1]}/${array_date[0]}`;
    },
    formatNumber: function (number) {
      return parseFloat(number).toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      });
    },
  },
};
</script>