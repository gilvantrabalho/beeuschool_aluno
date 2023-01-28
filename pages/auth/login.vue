<template>
  <div class="cont-login">
    <h4 class="mb-4 mt-3 text-center">Hi, student!</h4>
    <!--<div class="d-flex justify-content-center">
        <img width="200px" src="../../assets/img/logo.png" alt="">
    </div>-->

    <hr />

    <form @submit.prevent="submit" action="" class="pt-4">
      <!--<input type="text" class="form-input" placeholder="Informe seu e-mail...">-->
      <InputComponent
        for_id="email"
        type="email"
        v-model="user.email"
        placeholder="Digite seu email..."
        class="mb-3"
      />

      <InputComponent
        for_id="password"
        type="password"
        v-model="user.password"
        placeholder="Digite sua senha..."
      />

      <div class="text-center">
        <button
          v-if="!loading"
          type="submit"
          class="btn btn-dark btn-auth shadow mt-2"
        >
          LOGIN
        </button>
        <button v-else type="submit" class="btn btn-dark btn-auth shadow mt-2">
          <div class="d-flex justify-content-center">
            <div class="spinner-grow spinner-grow-sm" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </button>
      </div>
      <div class="mt-3 d-flex justify-content-between">
        <span>Lembre de mim</span>
        <NuxtLink to="/auth/forgot-password"> Esqueceu a senha? </NuxtLink>
      </div>
    </form>
  </div>
</template>

<style>
.cont-login {
  width: 100%;
  height: 100% !important;
  /*width: 700px;*/
  padding-bottom: 90px;
}
</style>

<script>
import InputComponent from "../../components/forms/inputs/InputComponent.vue";
import ButtonComponent from "../../components/buttons/ButtonComponent.vue";

export default {
  layout: "auth",
  components: { InputComponent, ButtonComponent },
  data() {
    return {
      loading: false,
      user: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    testClick: function () {
      console.log("funcionou");
    },
    submit: async function () {
      if (this.user.email && this.user.password) {
        try {
          this.loading = true;
          let response = await this.$auth.loginWith("local", {
            data: this.user,
          });
          console.log(response);
          if (!response.data.error) {
            window.location.href = "/";
          } else {
            this.$notify.error({
              title: "Ops",
              message: response.data.response.message,
            });
          }
          this.loading = false;
        } catch (err) {
          console.log(err);
        }
      } else {
        this.$notify.error({
          title: "Ops",
          message: "Informe os campos obrigatórios!",
        });
      }
    },
  },
};
</script>