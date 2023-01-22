<template>
  <div>
    <!-- {{ $auth.user.active }} -->

    <div class="row mb-4">
      <div class="col-md-4">
        <card-dashboard title="Áudios Enviados" color="primary" />
      </div>
      <div class="col-md-4">
        <card-dashboard title="Teste" color="primary" />
      </div>
      <div class="col-md-4">
        <card-dashboard title="Plano escolhido" color="primary" />
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">33333</div>
      <div class="col-md-6">
        <card-container title="Financeiro">
          <template v-slot:body>
            <div class="alert alert-secondary text-center">
              Não existe mensalidade a vencer!
            </div>
          </template>
        </card-container>
      </div>
    </div>
  </div>
</template>

<script>
import ProofPaymentApi from "../api/ProofPaymentApi";
import CardDashboard from "../components/cards/CardDashboard.vue";
import CardContainer from "../components/cards/CardContainer.vue";

export default {
  components: {
    CardDashboard,
    CardContainer,
  },
  created() {
    this.configVoucher();
  },
  methods: {
    configVoucher: function () {
      ProofPaymentApi.configVoucher(this.$auth.user.id).then((res) => {});
    },
  },
};
</script>
