<template>
  <div>
    <span v-if="status == 'C'" class="badge badge-pill badge-success shadow"
      >CORRIGIDO</span
    >
    <small v-if="status == 'E'" class="badge badge-pill badge-primary shadow">
      ENVIADO
    </small>
    <span v-if="status == 'R'" class="badge badge-pill badge-warning shadow"
      >REFAZER</span
    >
  </div>
</template>

<script>
export default {
  name: "audio-status",
  props: ["status"],
};
</script>