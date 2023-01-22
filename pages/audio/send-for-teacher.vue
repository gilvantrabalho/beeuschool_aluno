<template>
  <div>
    <title-page title="Enviar áudio" />

    <card-container title="Enviar novo áudio">
      <template v-slot:body>
        <div class="row">
          <div class="col-md-8 mx-auto">
            <form
              ref="formAudio"
              @submit.prevent="submit"
              enctype="multipart/form-data"
              class="pb-4"
              method="post"
            >
              <div class="form-group">
                <label for="" class="form-label"
                  >Texto de referência:
                  <span class="text-danger">*</span></label
                >
                <!--<input v-model="audio.title" type="text" class="form-control" />-->

                <select v-model="audio.text_ref_id" class="form-control">
                  <option selected value="">Selecione</option>
                  <option
                    v-for="(item, index) in texts"
                    :key="index"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label for="" class="form-label"
                  >Arquivo: <span class="text-danger">*</span></label
                >
                <br />

                <input type="file" @change="uploadFile" ref="file" />
              </div>

              <div class="form-group">
                <label for="">Descrição: (opcional)</label>
                <textarea
                  v-model="audio.description"
                  class="form-control"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <ButtonsButtonComponent
                :loading="loading"
                title="Enviar Arquivo"
                type="submit"
                classStyle="btn-block btn-primary py-2"
              />
            </form>
          </div>
        </div>
      </template>
    </card-container>
  </div>
</template>

<script>
import TitlePage from "../../components/TitlePage.vue";
import CardContainer from "../../components/cards/CardContainer.vue";
import OneHundredTextsApi from "../../api/OneHundredTextsApi";
import ButtonComponent from "../../components/buttons/ButtonComponent.vue";

export default {
  components: { TitlePage, CardContainer, ButtonComponent },
  data() {
    return {
      loading: false,
      texts: [],
      Images: null,
      audio: {
        text_ref_id: "",
        arquivo: null,
        description: null,
      },
    };
  },
  created() {
    this.getAllOneHundredTexts();
  },
  methods: {
    uploadFile() {
      this.Images = this.$refs.file.files[0];
    },
    submit() {
      if (this.validated()) {
        this.loading = true;
        const formData = new FormData();
        formData.append("student_id", this.$auth.user.id);
        formData.append("teacher_id", this.$auth.user.teacher_id);
        formData.append("text_ref_id", this.audio.text_ref_id);
        formData.append("file", this.Images);
        formData.append("description", this.audio.description);
        const headers = { "Content-Type": "multipart/form-data" };
        this.$axios
          .post("students/audio/send", formData, { headers })
          .then((res) => {
            if (!res.data.error) {
              this.$notify.success({
                title: "Sucesso!",
                message: res.data.message,
              });
              setTimeout(() => {
                window.location.reload();
              }, 1500);
            } else {
              this.$notify.error({
                title: "Ops!",
                message: res.data.message,
              });
            }
            this.loading = false;
          });
      }
    },
    getAllOneHundredTexts: function () {
      OneHundredTextsApi.getAll().then((res) => {
        this.texts = res.data.texts;
      });
    },
    validated: function () {
      if (!this.audio.text_ref_id) {
        this.$notify.error({
          title: "Ops",
          message: "Selecione o texto de referência!",
        });
        return false;
      }

      if (!this.Images) {
        this.$notify.error({
          title: "Ops",
          message: "Selecione um áudio para envio!",
        });
        return false;
      }

      return true;
    },
  },
};
</script>