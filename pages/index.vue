<template>
  <div>
    <div class="row mb-4">
      <div class="col-md-4">
        <card-dashboard
          title="Áudios Enviados"
          color="primary"
          :data="count_audios"
          :loading="loading"
        />
      </div>
      <div class="col-md-4">
        <card-dashboard
          title="Teste"
          color="primary"
          :data="123"
          :loading="loading"
        />
      </div>
      <div class="col-md-4">
        <card-dashboard
          title="Plano escolhido"
          color="primary"
          :data="plan ? plan.name : null"
          :loading="loading"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <card-container title="Últimos links acessados">
          <template v-slot:body>
            <div v-if="!loading">
              <div v-if="lasts_link.length > 0">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in lasts_link" :key="index">
                      <td>{{ item.name }}</td>
                      <td>
                        <a :href="item.url" target="_blank">
                          <button class="btn btn-sm bg-success shadow-sm">
                            <i class="bi bi-link-45deg"></i> Abrir link
                          </button>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-else class="alert alert-secondary text-center">
                Você ainda não acessou nenhum link
              </div>
            </div>
            <div v-else>
              <div class="d-flex justify-content-center py-4">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </template>
        </card-container>
      </div>
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
import LinkApi from "../api/LinkApi";
import AudioApi from "../api/AudioApi";
import DashboardApi from "../api/DashboardApi";

export default {
  components: {
    CardDashboard,
    CardContainer,
  },
  created() {
    this.configVoucher();
    this.readLastLinksAccessed();
    this.selectedPlan();
    this.countAudios();
  },
  data() {
    return {
      loading: true,
      lasts_link: [],
      plan: null,
      count_audios: 0,
    };
  },
  methods: {
    configVoucher: function () {
      ProofPaymentApi.configVoucher(this.$auth.user.id).then((res) => {});
    },
    readLastLinksAccessed: function () {
      LinkApi.readLastLinksAccessed(this.$auth.user.id).then((res) => {
        this.lasts_link = res.data.links;
      });
    },
    countAudios: function () {
      this.loading = true;
      AudioApi.countAudios(this.$auth.user.id).then((res) => {
        this.count_audios = res.data.count_audios;
        this.loading = false;
      });
    },
    selectedPlan: function () {
      this.loading = true;
      DashboardApi.showStudentPlan(this.$auth.user.plan_id).then((res) => {
        this.plan = res.data.plan;
        this.loading = false;
      });
    },
  },
};
</script>
