<template>
  <div class="cont-login">
    <h4 class="mb-4 mt-3 text-center">Esqueci a senha</h4>
    <!--<div class="d-flex justify-content-center">
        <img width="200px" src="../../assets/img/logo.png" alt="">
    </div>-->

    <hr />

    <form @submit.prevent="submit" action="" class="pt-3">
      <!--<input type="text" class="form-input" placeholder="Informe seu e-mail...">-->
      <InputComponent
        for_id="password"
        type="text"
        v-model="user.cpf"
        placeholder="Digite seu CPF..."
        v-mask="'###.###.###-##'"
      />

      <InputComponent
        for_id="email"
        type="email"
        v-model="user.email"
        placeholder="Digite seu email..."
        class="mb-3"
      />

      <div class="text-center">
        <button
          v-if="!loading"
          type="submit"
          class="btn btn-dark btn-auth shadow mt-2"
        >
          RECUPERAR SENHA
        </button>
        <button v-else type="submit" class="btn btn-dark btn-auth shadow mt-2">
          <div class="d-flex justify-content-center">
            <div class="spinner-grow spinner-grow-sm" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </button>
      </div>
      <div class="text-center mt-3">
        <NuxtLink to="/auth/login"> Login </NuxtLink>
      </div>
    </form>
  </div>
</template>

<script>
import InputComponent from "../../components/forms/inputs/InputComponent.vue";
import ButtonComponent from "../../components/buttons/ButtonComponent.vue";

export default {
  layout: "auth",
  auth: false,
  components: {
    InputComponent,
    ButtonComponent,
  },
  data() {
    return {
      loading: false,
      user: {
        cpf: null,
        email: null,
      },
    };
  },
  methods: {
    submit: function () {},
  },
};
</script>