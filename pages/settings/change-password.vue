<template>
  <div>
    <title-page title="Alterar Senha" />

    <card-container title="Alterar minha senha">
      <template v-slot:body>
        <form @submit.prevent="submit" method="POST">
          <div class="form-group">
            <label for="">Senha atual: </label>
            <input
              v-model="change_password.password"
              type="password"
              class="form-control py-4"
              placeholder="****"
            />
          </div>

          <div class="form-group">
            <label for="">Nova senha: </label>
            <input
              v-model="change_password.new_password"
              type="password"
              class="form-control py-4"
              placeholder="****"
            />
          </div>

          <div class="form-group">
            <label for="">Confirmar senha: </label>
            <input
              v-model="change_password.c_passsword"
              type="password"
              class="form-control py-4"
              placeholder="****"
            />
          </div>

          <button-component
            title="ALTERAR SENHA"
            type="submit"
            classStyle="btn-primary btn-block py-3"
          />
        </form>
      </template>
    </card-container>
  </div>
</template>

<script>
import ButtonComponent from "../../components/buttons/ButtonComponent.vue";
import CardContainer from "../../components/cards/CardContainer.vue";
import InputComponent from "../../components/forms/inputs/InputComponent.vue";
import TitlePage from "../../components/TitlePage.vue";
import ChangePasswordApi from "../../api/ChangePasswordApi";

export default {
  components: { TitlePage, CardContainer, InputComponent, ButtonComponent },
  data() {
    return {
      change_password: {
        user_id: null,
        password: null,
        new_password: null,
        c_passsword: null,
      },
    };
  },
  methods: {
    submit: function () {
      if (this.validated()) {
        //console.log(this.$auth.user.id);
        this.change_password.user_id = this.$auth.user.id;
        ChangePasswordApi.change(this.change_password)
          .then((res) => {
            if (!res.data.error) {
              this.$notify.success({
                title: "Ops",
                message: res.data.message,
              });
              setTimeout(() => {
                window.location.reload();
              }, 1800);
            } else {
              this.$notify.error({
                title: "Ops",
                message: res.data.message,
              });
            }
          })
          .catch((error) => console.log(error));
      }
    },
    validated: function () {
      if (!this.change_password.password) {
        this.$notify.error({
          title: "Ops",
          message: "Informe a senha atual!",
        });
        return false;
      }

      if (!this.change_password.new_password) {
        this.$notify.error({
          title: "Ops",
          message: "Informe uma nova senha!",
        });
        return false;
      }

      if (!this.change_password.c_passsword) {
        this.$notify.error({
          title: "Ops",
          message: "Informe a confirmação de senha!",
        });
        return false;
      }

      if (
        this.change_password.new_password != this.change_password.c_passsword
      ) {
        this.$notify.error({
          title: "Ops",
          message: "Senha e confirmação de senha não são iguais!",
        });
        return false;
      }

      return true;
    },
  },
};
</script>