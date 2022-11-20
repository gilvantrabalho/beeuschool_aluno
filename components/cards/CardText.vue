<template>
  <NuxtLink :to="`/audio/send-for-teacher-form/${text.slug}`">
    <div
      title="ENVIADO"
      :class="`${
        status_envio == 0 ? 'bg-white shadow-hover' : 'bg-light'
      } shadow-sm p-3 rounded mb-3 d-flex justify-content-between`"
    >
      {{ text.name }}
      <i
        v-if="status_envio == 0"
        class="bi bi-headphones font-weight-bold text-secondary"
      ></i>
      <i v-else class="bi bi-check-circle-fill text-success"></i>
    </div>
  </NuxtLink>
</template>

<style>
.shadow-hover {
  border-left: 3px solid var(--color-primary);
  cursor: pointer;
  color: #1c1c1c !important;
  transition: 0.5s;
}
.shadow-hover:hover {
  font-weight: 600;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>

<script>
export default {
  props: ["text", "status_envio"],
};
</script>