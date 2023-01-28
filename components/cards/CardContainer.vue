<template>
  <div class="card shadow mb-4">
    <div
      class="d-flex justify-content-between align-items-center card-header py-3"
    >
      <h6 class="m-0 font-weight-bold text-primary">{{ title }}</h6>
      <div v-if="url_add != '/'">
        <NuxtLink :to="url_add" class="btn btn-sm btn-success font-weight-bold"
          >+ Adicionar Novo</NuxtLink
        >
      </div>
      <div v-if="url_list != '/'">
        <NuxtLink :to="url_list" class="btn btn-sm btn-success font-weight-bold"
          ><i class="bi bi-card-checklist"></i> Todos os registros</NuxtLink
        >
      </div>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    url_add: {
      type: String,
      default: "/",
    },
    url_list: {
      type: String,
      default: "/",
    },
  },
};
</script>