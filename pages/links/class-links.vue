<template>
  <div>
    <title-page title="Links das aulas" />
    <card-container title="Todos os links">
      <template v-slot:body>
        <v-client-table :columns="columns" :data="data" :options="options">
          <template slot="url" slot-scope="{ row }">
            <a
              @click="lastLinksAccessed(row.id)"
              target="__blanck"
              :href="row.url"
              >{{ row.url }}</a
            >
          </template>
        </v-client-table>
      </template>
    </card-container>
  </div>
</template>

<script>
import LinkApi from "../../api/LinkApi";
import CardContainer from "../../components/cards/CardContainer.vue";

export default {
  components: {
    CardContainer,
  },
  created() {
    this.classLinks();
  },
  data() {
    return {
      data: [],
      columns: ["name", "url", "description"],
      options: {
        perPage: 5,
        perPageValues: [5, 10, 15, 20],
        headings: {
          name: "NOME",
          url: "URL",
          description: "DESCRIÇÃO",
        },
      },
    };
  },
  methods: {
    classLinks: function () {
      LinkApi.classLinks().then((res) => {
        this.data = res.data.links;
      });
    },
    lastLinksAccessed: function (id) {
      LinkApi.lastLinksAccessed({
        student_id: this.$auth.user.id,
        link_id: id,
      });
    },
  },
};
</script>