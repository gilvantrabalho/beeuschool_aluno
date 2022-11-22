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
            <div class="text-center p-3">
              Ainda não há correção para esse áudio!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AudioApi from "../../../api/AudioApi";
//import Audio from "../../../components/Audio.vue";
import TitlePage from "../../../components/TitlePage.vue";
import Spinner from "../../../components/utilities/Spinner.vue";
export default {
  components: { TitlePage, Spinner },
  data() {
    return {
      loading: true,
      audio: {},
    };
  },
  beforeCreate() {
    AudioApi.showStudentsAudioId(this.$route.params.id).then((res) => {
      console.log(res.data.student_audio[0]);
      this.audio = res.data.student_audio[0];
      this.loading = false;
    });
  },
  methods: {
    //getStudentsAudioId: function () {
    //  AudioApi.showStudentsAudioId(this.$route.params.id).then((res) => {
    //    console.log(res.data.student_audio[0]);
    //    this.audio = res.data.student_audio[0];
    //  });
    //},
  },
};
</script>