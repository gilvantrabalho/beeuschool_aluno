<template>
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
        Mensalidade de {{ mensalidade.mes_ref }}
      </h5>
      <small
        >Vencimento:
        <span class="font-weight-bold">
          {{ mensalidade.vencimento }}
        </span></small
      >
    </div>
    <div class="d-flex">
      <div class="p-4">
        <h5 class="mb-1 text-dark">R$ {{ mensalidade.valor }}</h5>

        <div
          v-if="mensalidade.status == 'Em aberto'"
          class="d-flex align-items-center"
        >
          <span class="ball-comprov bg-success mr-1"></span>
          {{ mensalidade.status }}
        </div>

        <div
          v-if="mensalidade.status == 'Atrasado'"
          class="d-flex align-items-center"
        >
          <span class="ball-comprov bg-danger mr-1"></span>
          {{ mensalidade.status }}
        </div>

        <div
          v-if="mensalidade.status == 'Enviado'"
          class="d-flex align-items-center"
        >
          <span class="ball-comprov bg-warning mr-1"></span>
          {{ mensalidade.status }}
        </div>

        <!--<div class="d-flex align-items-center">
          <span class="ball-comprov bg-success mr-1"></span>
          {{ mensalidade.status }}
        </div>

        <div class="d-flex align-items-center">
          <span class="ball-comprov bg-success mr-1"></span>
          {{ mensalidade.status }}
        </div>-->
      </div>
      <div
        v-if="mensalidade.status == 'Em aberto'"
        class="
          btn-enviar-comprov
          bg-success
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
        v-if="mensalidade.status == 'Atrasado'"
        class="
          btn-enviar-comprov
          bg-danger
          ml-2
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
        v-if="mensalidade.status == 'Enviado'"
        class="
          btn-enviar-comprov
          bg-warning
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

    <modal
      id="modalEnviarComprovante"
      title="Enviar comprovante"
      subtitle="Envie seu comprovante para aprovação."
    >
      <template v-slot:body>
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

          <div class="form-group">
            <label for="">Valor: </label>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text font-weight-bold">R$</div>
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="000,00"
                v-mask="'###,##'"
              />
            </div>
          </div>
        </form>
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
  props: ["mensalidade"],
  components: { Modal },
  data() {
    return {
      Images: null,
    };
  },
  methods: {
    uploadFile() {
      this.Images = this.$refs.file.files[0];
    },
    submit() {
      if (this.validated()) {
        this.loading = true;
        const formData = new FormData();
        formData.append("student_id", this.$auth.user.id);
        formData.append("teacher_id", this.$auth.user.teacher_id);
        formData.append("text_ref_id", this.audio.text_ref_id);
        formData.append("file", this.Images);
        formData.append("description", this.audio.description);
        const headers = { "Content-Type": "multipart/form-data" };
        this.$axios
          .post("students/audio/send", formData, { headers })
          .then((res) => {
            if (!res.data.error) {
              this.$notify.success({
                title: "Sucesso!",
                message: res.data.message,
              });
              setTimeout(() => {
                window.location.reload();
              }, 1500);
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
      if (!this.audio.text_ref_id) {
        this.$notify.error({
          title: "Ops",
          message: "Selecione o texto de referência!",
        });
        return false;
      }

      if (!this.Images) {
        this.$notify.error({
          title: "Ops",
          message: "Selecione um áudio para envio!",
        });
        return false;
      }

      return true;
    },
  },
};
</script>