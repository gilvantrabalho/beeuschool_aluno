<template>
  <div>
    <!--{{ $route.params }}-->

    <div class="bg-white rounded shadow-sm">
      <div class="bg-light border-bottom py-3 px-3 rounded">
        <div class="d-flex justify-content-between align-content-center">
          <h5 class="mb-0 text-dark font-weight-bold">Teste 001</h5>
          <span class="font-weight-bold font-italic text-secondary">
            Criado em: 12/05/2022
          </span>
        </div>
        <span class="font-weight-bold font-italic text-secondary">
          Enviado para: Administração
        </span>
      </div>

      <div class="p-4">
        <div class="bg-light p-3" style="height: 500px; overflow-y: auto">
          <div v-for="(item, index) in ticket_messages" :key="index">
            <div
              v-if="item.send_by != 'aluno'"
              style="max-width: 700px; word-wrap: break-word"
              class="
                shadow-sm
                bg-dark
                text-light
                d-inline-block
                rounded
                p-3
                mb-3
              "
            >
              <div class="d-flex justify-content-between">
                <div class="font-weight-bold">Professor</div>
                <small class="font-weight-bold font-italic">12/05/2022</small>
              </div>
              <div>
                {{ item.message }}
              </div>
            </div>

            <div v-else class="d-flex justify-content-end">
              <div
                style="max-width: 700px; word-wrap: break-word"
                class="
                  shadow-sm
                  bg-light
                  text-dark
                  d-inline-block
                  rounded
                  p-3
                  pb-2
                  mb-3
                "
              >
                <div class="d-flex justify-content-between">
                  <div class="font-weight-bold">
                    {{ $auth.user.name }}
                  </div>
                  <small class="font-weight-bold font-italic">{{
                    item.created_at
                  }}</small>
                </div>
                <div>{{ item.message }}</div>
              </div>
            </div>
          </div>
        </div>
        <form @submit.prevent="submit" action="" class="d-flex">
          <textarea
            v-model="message.message"
            class="form-control"
            cols="30"
            rows="3"
            placeholder="Digite sua mensagem..."
          ></textarea>
          <button type="submit" class="btn btn-primary">ENVIAR</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import TicketApi from "../../../api/TicketApi";
export default {
  data() {
    return {
      ticket: {},
      ticket_messages: [],
      message: {
        ticket_id: null,
        send_by: "aluno",
        message: null,
      },
    };
  },
  created() {
    this.getMessages(this.$route.params.token);
  },
  methods: {
    submit: function () {
      if (this.message) {
        this.message.ticket_id = this.ticket.ticket_id;
        this.message.send_by = "aluno";
        TicketApi.registerMessageTicket(this.message).then((res) => {
          if (!res.data.error) {
            this.$notify.success({
              title: "Sucesso",
              message: res.data.message,
            });
            this.getMessages(this.$route.params.token);
          }
        });
      }
    },
    getMessages: function (token) {
      TicketApi.getMessagesTicket(token).then((res) => {
        this.ticket = res.data.messages[0];
        this.ticket_messages = res.data.messages;
      });
    },
  },
};
</script>