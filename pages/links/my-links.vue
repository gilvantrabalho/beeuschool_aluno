<template>
  <div>
    <TitlePage title="Link"></TitlePage>

    <card-container title="Todos os link" url_add="/links/register">
      <template v-slot:body>
        <div>
          <message-delete
            :destroy="destroy"
            :cancelar="cancelarDelete"
            :messageDelete="messageDelete"
          />

          <v-client-table :columns="columns" :data="data" :options="options">
            <template slot="actions" slot-scope="{ row }">
              <div class="d-flex justify-content-center">
                <!--<NuxtLink
                  :to="`/students/edit/${row.id}`"
                  class="btn btn-sm btn-outline-primary shadow mr-1"
                >
                  <i class="bi bi-pencil-square"></i>
                </NuxtLink>-->
                <button
                  @click="deleteMsg(row)"
                  class="btn btn-sm btn-outline-danger shadow"
                >
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </div>
            </template>
            <template slot="url" slot-scope="{ row }">
              <a :title="row.url" target="__blanck" :href="row.url"
                >IR PARA O LINK</a
              >
            </template>
          </v-client-table>
        </div>
      </template>
    </card-container>
  </div>
</template>

<script>
import LinkApi from "../../api/LinkApi";
import CardContainer from "../../components/cards/CardContainer.vue";
import MessageDelete from "../../components/messages/MessageDelete.vue";

export default {
  created() {
    this.getAllLink();
  },
  data() {
    return {
      loading: true,
      messageDelete: false,
      registroDelete: null,
      audios: [],
      columns: ["actions", "name", "url", "description"],
      options: {
        perPage: 5,
        perPageValues: [5, 10, 15, 20],
        headings: {
          actions: "AÇÕES",
          name: "Nome",
          url: "URL",
        },
      },
      data: [],
    };
  },
  components: {
    CardContainer,
    MessageDelete,
  },
  methods: {
    getAllLink: function () {
      LinkApi.list(this.$auth.user.id)
        .then((res) => {
          this.data = res.data.links;
        })
        .catch((error) => console.log(error));
    },
    destroy: function () {
      LinkApi.delete(this.registroDelete.id)
        .then((res) => {
          if (!res.data.error) {
            this.getAllLink();
            this.messageDelete = false;
            this.$notify.success({
              title: "Sucesso!",
              message: res.data.message,
            });
          }
        })
        .catch((error) => console.log(error));
    },
    deleteMsg: function (row) {
      this.registroDelete = row;
      this.messageDelete = true;
    },
    cancelarDelete: function () {
      this.messageDelete = false;
    },
  },
};
</script>