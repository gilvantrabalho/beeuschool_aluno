<template>
  <div>
    <title-page title="Cadastrar Link"></title-page>

    <CardsCardContainer title="Novo Link" url_list="/links/my-links">
      <template v-slot:body>
        <form
          @submit.prevent="submit"
          class="col-10 mx-auto mb-5 mt-2"
          action=""
        >
          <div class="row">
            <div class="col-md-6">
              <input-component
                v-model="link.name"
                label="Nome"
                require="true"
                type="text"
                placeholder="..."
              />
            </div>
            <div class="col-md-6">
              <input-component
                v-model="link.url"
                label="URL"
                require="true"
                type="text"
                placeholder="..."
              />
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label for="description">Descrição</label>
                <textarea
                  v-model="link.description"
                  class="form-control"
                  cols="30"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>

          <button-component
            classStyle="w-100 btn-outline-primary py-3 mt-1"
            title="SALVAR LINK"
            type="submit"
          />
        </form>
      </template>
    </CardsCardContainer>
  </div>
</template>
  
  <script>
import InputComponent from "../../components/forms/inputs/InputComponent.vue";
import ButtonComponent from "../../components/buttons/ButtonComponent.vue";
import LinkApi from "../../api/LinkApi";

export default {
  components: {
    InputComponent,
    ButtonComponent,
  },
  data() {
    return {
      link: {
        student_id: this.$auth.user.id,
        name: null,
        url: null,
        description: null,
      },
    };
  },
  methods: {
    submit: function () {
      if (this.validated()) {
        LinkApi.register(this.link)
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
      if (!this.link.name) {
        this.$notify.error({
          title: "Ops",
          message: "Informe um nome para o link!",
        });
        return false;
      }

      if (!this.link.url) {
        this.$notify.error({
          title: "Ops",
          message: "Informe a URL do link!",
        });
        return false;
      }

      return true;
    },
  },
};
</script>