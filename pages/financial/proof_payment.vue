<template>
  <div>
    <TitlePage title="Comprovantes de Pagamento"></TitlePage>

    <card-container title="Todos meus comprovantes">
      <template v-slot:body>
        <!-- Button trigger modal -->
        <div class="d-flex justify-content-end mb-4">
          <NuxtLink
            to="/financial/my-vouchers"
            type="button"
            class="btn btn-success shadow py-2"
          >
            <i class="bi bi-stickies-fill mr-2"></i>
            Ver todos os comprovantes
          </NuxtLink>
        </div>
        <div v-if="loading">
          <spinner />
        </div>
        <div v-else>
          <card-comprovante :mensalidades="mensalidades" />
        </div>
      </template>
    </card-container>
  </div>
</template>

<script>
import ProofPaymentApi from "../../api/ProofPaymentApi";
import CardComprovante from "../../components/cards/CardComprovante.vue";
import CardContainer from "../../components/cards/CardContainer.vue";
import Modal from "../../components/modal/Modal.vue";
import Spinner from "../../components/utilities/Spinner.vue";

export default {
  components: {
    CardContainer,
    Modal,
    CardComprovante,
    Spinner,
  },
  created() {
    this.getVouchersByStudentId();
  },
  data() {
    return {
      loading: false,
      Images: null,
      mensalidades: [
        {
          mes_ref: "Janeiro",
          vencimento: "15/12/2022",
          valor: "123,90",
          status: "Enviado",
        },
        {
          mes_ref: "Fevereiro",
          vencimento: "15/12/2022",
          valor: "123,90",
          status: "Em aberto",
        },
        {
          mes_ref: "Fevereiro",
          vencimento: "15/12/2022",
          valor: "123,90",
          status: "Atrasado",
        },
      ],
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
          message: "Selecione o comprovante para envio!",
        });
        return false;
      }

      return true;
    },
    getVouchersByStudentId: function () {
      this.loading = true;
      ProofPaymentApi.getAllByIdStudent(this.$auth.user.id).then((res) => {
        this.mensalidades = res.data.vouchers;
        this.loading = false;
      });
    },
  },
};
</script>