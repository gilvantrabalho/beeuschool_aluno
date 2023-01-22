<template>
  <div>
    <title-page title="Suporte" />

    <div class="row">
      <div class="col-md-6">
        <div class="shadow-sm p-5 bg-white rounded">
          <h3 class="mb-3 text-dark">Contatar suporte</h3>
          <div class="text-dark">
            <div class="mb-3">Este é o seu canal direto com nossa equipe.</div>
            <div class="mb-3">
              Alternativamente, você também pode enviar um e-mail para:
              <strong>suporte@b7web.com.br</strong>
            </div>
            <div class="mb-3">Estamos a sua total disposição.</div>
          </div>
          <NuxtLink disabled to="#" class="btn btn-success">
            <i class="bi bi-send"></i> Abrir Ticket (Em breve)
          </NuxtLink>

          <hr class="my-5" />
          <div class="d-flex justify-content-center align-items-center">
            <div>
              <h4 class="text-center mb-3 font-weight-bold">REDES SOCIAIS</h4>
              <img
                class="mr-2"
                width="60px"
                src="../../assets/img/icons/facebook.png"
                alt=""
              />
              <img
                class="mr-2"
                width="60px"
                src="../../assets/img/icons/instagram.png"
                alt=""
              />
              <img
                width="60px"
                src="../../assets/img/icons/whatsapp.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
<!--       <div class="col-md-6">
        <div class="shadow-sm bg-white p-4">
          <h5>Tickets Abertos</h5>
          <hr />

          <div class="bg-light d-flex justify-content-between rounded p-3 mb-3">
            <h6>Teste Api</h6>
            <small class="font-weight-bold font-italic">2022-12-14</small>
          </div>

          <div class="bg-light p-3 text-center font-weight-bold rounded">
            Nenhum ticket aberto!
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import TicketApi from "../../api/TicketApi";

export default {
  created() {
    TicketApi.showStudentId(this.$auth.user.id).then((res) => {
      this.tickets = res.data.tickets;
    });
  },
  data() {
    return {
      tickets: [],
      msgSuccess: false,
    };
  },
  methods: {
    submit: function () {},
    validated: function () {},
  },
};
</script>