<template>
  <div>
    <!--<title-page :title="audio.name" />-->

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item text-primary">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="breadcrumb-item">
          <NuxtLink to="/audio/my-audios">Meus áudios</NuxtLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>

    <div class="row">
      <!--ÁUDIO DO ALUNO -->
      <div class="col-md-6">
        <div class="card shadow-sm border-0 pb-3">
          <div class="card-header">
            <div
              class="
                d-flex
                justify-content-between
                align-items-center
                bg-light
                rounded
              "
            >
              <h5 class="m-0 p-0 text-secondary">Áudio</h5>
              <div>
                <audio-status :status="audio.status" />
              </div>
            </div>
          </div>
          <div v-if="loading" class="card-body">
            <Spinner />
          </div>
          <div v-else class="card-body">
            <div class="">
              <div class="mb-3 text-primary font-weight-bold">
                {{ audio.name }}
              </div>
              <div class="mb-4 d-flex justify-content-center" v-if="audio.file">
                <Audio :src="audio.file" />
              </div>
              <hr />
              <div class="mb-4">
                <span class="font-weight-bold">Descrição</span>
                <div v-if="audio.description != 'null'">
                  {{ audio.description }}
                </div>
                <div v-else>---</div>
              </div>
              <div class="d-flex justify-content-between">
                <div>
                  <a
                    :href="audio.link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button class="btn btn-sm btn-success">
                      Ir para o áudio
                    </button>
                  </a>
                </div>
                <div class="text-right">
                  <small>{{ audio.created_at }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--CORREÇÃO DO Professor-->
      <div class="col-md-6">
        <div class="card shadow-sm border-0">
          <div class="card-header text-secondary">
            <h5 class="m-0 p-0">Correção do Professor</h5>
          </div>
          <div class="card-body">
            <div v-if="audio.grade" class="d-flex mb-2">
              <span class="font-weight-bold">Nota: </span>
              <div class="ml-1">
                {{ audio.grade }}
              </div>
            </div>
            <div v-if="audio.desc_teacher">
              <span class="font-weight-bold">Descrição</span>
              <div>
                {{ audio.desc_teacher }}
              </div>
            </div>
            <div v-else class="text-center p-3">
              Ainda não há correção para esse áudio!
            </div>
            <div v-if="audio.status == 'R'">
              <hr />
              <form
                ref="formAudio"
                @submit.prevent="submit"
                enctype="multipart/form-data"
                method="post"
              >
                <div class="form-group mb-3">
                  <label for="" class="form-label"
                    >Reenviar Arquivo: <span class="text-danger">*</span></label
                  >
                  <br />

                  <input type="file" @change="uploadFile" ref="file" />
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AudioApi from "../../../api/AudioApi";
import TitlePage from "../../../components/TitlePage.vue";
import Spinner from "../../../components/utilities/Spinner.vue";
import ButtonComponent from "../../../components/buttons/ButtonComponent.vue";

export default {
  components: { TitlePage, Spinner, ButtonComponent },
  data() {
    return {
      loading: false,
      loadingForm: false,
      Images: null,
      audio: {},
    };
  },
  beforeCreate() {
    AudioApi.showStudentsAudioId(this.$route.params.id).then((res) => {
      this.audio = res.data.student_audio[0];
      this.loading = false;
    });
  },
  methods: {
    uploadFile() {
      this.Images = this.$refs.file.files[0];
    },
    submit() {
      if (this.validated()) {
        this.loadingForm = true;
        const formData = new FormData();
        formData.append("id", this.audio.id);
        formData.append("idSac", this.audio.idSac);
        formData.append("file_name", this.audio.file);
        formData.append("file", this.Images);
        //formData.append("description", this.audio.description);
        const headers = { "Content-Type": "multipart/form-data" };
        console.log(this.Images, formData);
        this.$axios
          .post(`students/audio/update`, formData, { headers })
          .then((res) => {
            console.log();
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
            this.loadingForm = false;
          });
      }
    },
    validated: function () {
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