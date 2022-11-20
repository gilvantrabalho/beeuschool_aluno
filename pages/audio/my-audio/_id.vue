<template>
  <div>
    <title-page :title="audio.name" />
    <CardsCardContainer title="Meu áudio">
      <template v-slot:body>
        <div class="row">
          <div class="col-md-6">
            <div>
              {{ audio.file }}
              <audio controls>
                <source
                  :src="`http://192.168.15.6:8000/storage/${audio.file}`"
                  type="audio/ogg"
                />
                <source
                  :src="`http://192.168.15.6:8000/storage/${audio.file}`"
                  type="audio/mp3"
                />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </template>
    </CardsCardContainer>
  </div>
</template>

<script>
import AudioApi from "../../../api/AudioApi";
import TitlePage from "../../../components/TitlePage.vue";
export default {
  components: { TitlePage },
  data() {
    return {
      audio: {},
    };
  },
  created() {
    this.getStudentsAudioId();
  },
  methods: {
    getStudentsAudioId: function () {
      AudioApi.showStudentsAudioId(this.$route.params.id).then((res) => {
        console.log(res.data.student_audio[0]);
        this.audio = res.data.student_audio[0];
      });
    },
  },
};
</script>