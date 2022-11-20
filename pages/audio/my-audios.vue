<template>
  <div>
    <TitlePage title="Meus áudios"></TitlePage>

    <card-container title="Todos meus aúdios">
      <template v-slot:body>
        <v-client-table :columns="columns" :data="data" :options="options">
          <template slot="actions" slot-scope="{ row }">
            <div class="d-flex justify-content-center">
              <NuxtLink :to="`/audio/my-audio/${row.id}`">
                <button class="btn btn-sm btn-info d-block">
                  <i class="bi bi-eye-fill"></i>
                </button>
              </NuxtLink>
            </div>
          </template>
          <template slot="status" slot-scope="{ row }">
            <div class="text-center">
              <span v-if="row.status == 'E'" class="badge badge-sm badge-info"
                >ENVIADO</span
              >
              <span
                v-if="row.status == 'C'"
                class="badge badge-sm badge-success"
                >CORRIGIDO</span
              >
              <span
                v-if="row.status == 'R'"
                class="badge badge-sm badge-warning"
                >REFAZER</span
              >
            </div>
          </template>
        </v-client-table>
      </template>
    </card-container>
  </div>
</template>

<script>
import TitlePage from "../../components/TitlePage.vue";
import CardContainer from "../../components/cards/CardContainer.vue";
import AudioApi from "../../api/AudioApi";

export default {
  components: { TitlePage, CardContainer },
  created() {
    this.getAllByUserId();
  },
  data() {
    return {
      audios: [],
      columns: ["name", "status", "created_at", "actions"],
      //  sortable: ["actions", "name", "file", "status", "created_at"],
      options: {
        headings: {
          actions: "",
          name: "TÍTULO",
          status: "STATUS",
          created_at: "ENVIADO EM",
        },
      },
      data: [],
    };
  },
  methods: {
    getAllByUserId: function () {
      console.log(this.$auth.user);
      AudioApi.getAllByUserId(this.$auth.user.id)
        .then((res) => {
          this.data = res.data.audios;
        })
        .catch((error) => console.log(error));
    },
    edit: function (row) {
      console.log(row);
    },
  },
};
</script>