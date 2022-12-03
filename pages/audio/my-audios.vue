<template>
  <div>
    <TitlePage title="Meus áudios"></TitlePage>

    <card-container title="Todos meus aúdios">
      <template v-slot:body>
        <div v-if="loading">
          <Spinner />
        </div>
        <div v-else>
          <v-client-table :columns="columns" :data="data" :options="options">
            <template slot="actions" slot-scope="{ row }">
              <div class="d-flex justify-content-center">
                <NuxtLink :to="`/audio/my-audio/${row.id}`">
                  <button class="btn btn-sm btn-outline-dark shadow">
                    <i class="bi bi-eye-fill"></i>
                  </button>
                </NuxtLink>
              </div>
            </template>
            <template slot="status" slot-scope="{ row }">
              <div class="text-center">
                <Status :status="row.status" />
              </div>
            </template>
          </v-client-table>
        </div>
      </template>
    </card-container>
  </div>
</template>

<script>
import TitlePage from "../../components/TitlePage.vue";
import CardContainer from "../../components/cards/CardContainer.vue";
import AudioApi from "../../api/AudioApi";
import Spinner from "../../components/utilities/Spinner.vue";
import Status from "../../components/audio/Status.vue";

export default {
  components: { TitlePage, CardContainer, Spinner, Status },
  created() {
    this.getAllByUserId();
  },
  data() {
    return {
      loading: true,
      audios: [],
      columns: ["actions", "name", "status", "created_at"],
      //  sortable: ["actions", "name", "file", "status", "created_at"],
      options: {
        perPage: 5,
        perPageValues: [5, 10, 15, 20],
        headings: {
          actions: "AÇÕES",
          name: "TÍTULO",
          status: "STATUS",
          created_at: "ENVIADO EM",
        },
      },
      data: [],
    }
  },
  methods: {
    getAllByUserId: function () {
      this.loading = true;
      AudioApi.getAllByUserId(this.$auth.user.id)
        .then((res) => {
          this.data = res.data.audios;
          this.loading = false;
        })
        .catch((error) => console.log(error));
    },
    edit: function (row) {
      console.log(row);
    },
  },
};
</script>