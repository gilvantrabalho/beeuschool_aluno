<template>
  <audio controls>
    <source :src="`http://192.168.15.6:8000/storage/${src}`" type="audio/ogg" />
    <source :src="`http://192.168.15.6:8000/storage/${src}`" type="audio/mp3" />
    Your browser does not support the audio element.
  </audio>
</template>

<script>
export default {
  props: ["src"],
};
</script>