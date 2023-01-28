<template>
  <div>
    <title-page title="Meus comprovantes" />
    <card-container title="Todos meus comprovantes">
      <template v-slot:body>
        <v-client-table :columns="columns" :data="data" :options="options">
          <template slot="due_date" slot-scope="{ row }">
            {{ formatDate(row.due_date) }}
          </template>
          <template slot="status" slot-scope="{ row }">
            <div class="d-flex justify-content-center">
              <div v-if="row.status == 'Enviado'" class="badge badge-primary">
                {{ row.status }}
              </div>
              <div v-if="row.status == 'Pago'" class="badge badge-success">
                {{ row.status }}
              </div>
            </div>
          </template>
          <template slot="file" slot-scope="{ row }">
            <a
              class="float-center"
              :href="`http://192.168.15.9:8000/storage/${row.file}`"
              target="_blank"
              >DOWNLOAD</a
            >
          </template>
        </v-client-table>
      </template>
    </card-container>
  </div>
</template>

<script>
import CardContainer from "../../components/cards/CardContainer.vue";
import ProofPaymentApi from "../../api/ProofPaymentApi";

export default {
  components: {
    CardContainer,
  },
  created() {
    this.getDataGrid();
  },
  data() {
    return {
      data: [],
      columns: ["month_reference", "due_date", "status", "updated_at", "file"],
      options: {
        perPage: 5,
        perPageValues: [5, 10, 15, 20],
        headings: {
          month_reference: "MÊS DE REFERÊNCIA",
          due_date: "DATA DE VENCIMENTO",
          status: "STATUS",
          file: "ARQUIVO",
          updated_at: "ENVIADO EM",
        },
      },
    };
  },
  methods: {
    getDataGrid: function () {
      ProofPaymentApi.getByGrid().then((res) => {
        this.data = res.data.vouchers;
      });
    },
    formatDate: function (date = "") {
      let array_date = date.split("-");
      return `${array_date[2]}/${array_date[1]}/${array_date[0]}`;
    },
    formatDate2: function (date) {
      date = new Date(date);

      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    },
  },
};
</script>