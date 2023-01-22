<template>
  <div>
    <title-page title="Ticket" />

    <card-container title="Abrir novo ticket">
      <template v-slot:body>
        <div class="row">
          <div class="col-md-6">
            <form @submit.prevent="submit" method="post" class="p-4">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">Título: </label>
                    <input
                      v-model="ticket.title"
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">Enviar para: </label>
                    <select
                      @change="getTeacherById"
                      v-model="ticket.send_to"
                      class="form-control"
                    >
                      <option value="">Selecione</option>
                      <option value="P">Professor</option>
                      <option value="A">Administração</option>
                    </select>
                  </div>
                </div>
                <div v-if="ticket.send_to == 'P'" class="col-md-12">
                  <div class="form-group">
                    <label for="">Professor: </label>
                    <input
                      v-model="teacher.name"
                      type="text"
                      class="form-control"
                      readonly
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="">Mensagem: </label>
                    <textarea
                      v-model="ticket.message"
                      class="form-control"
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-outline-primary py-3 btn-block"
              >
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
          <div class="col-md-6">
            <div class="border-left h-100 p-5">
              <h4 class="text-dark font-weight-bold">Abrir Ticket</h4>
              <div>
                Ao abrir um ticket vc inicia uma conversa com seu professor ou
                com a administração, responderemos o mais rápido possível!
              </div>
            </div>
          </div>
        </div>
      </template>
    </card-container>
  </div>
</template>

<script>
import CardContainer from "../../components/cards/CardContainer.vue";
import TitlePage from "../../components/TitlePage.vue";
import TeacherApi from "../../api/TeacherApi";
import TicketApi from "../../api/TicketApi";

export default {
  components: { TitlePage, CardContainer },
  data() {
    return {
      teacher: {},
      ticket: {
        title: null,
        send_to: "",
        teacher_id: null,
        student_id: this.$auth.user.id,
        message: null,
      },
    };
  },
  methods: {
    submit: function () {
      if (this.validated()) {
        if (this.ticket.send_to == "P")
          this.ticket.teacher_id = this.$auth.user.teacher_id;

        TicketApi.register(this.ticket).then((res) => {
          if (!res.data.error) {
            this.$router.push(`/support/ticket/${res.data.ticket.token}`);
          }
        });
      }
    },
    validated: function () {
      if (!this.ticket.title) {
        this.$notify.error({
          title: "Oops",
          message: "Informe um título para o ticket!",
        });
        return false;
      }
      if (!this.ticket.send_to) {
        this.$notify.error({
          title: "Oops",
          message: "Informe para quem enviar a mensagem!",
        });
        return false;
      }
      if (!this.ticket.message) {
        this.$notify.error({
          title: "Oops",
          message: "Informe uma mensagem para o ticket!",
        });
        return false;
      }
      return true;
    },
    getTeacherById: function () {
      if (this.ticket.send_to == "P") {
        TeacherApi.getById(this.$auth.user.teacher_id).then((res) => {
          this.teacher = res.data.teacher;
        });
      }
    },
  },
};
</script>