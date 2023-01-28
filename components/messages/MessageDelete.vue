<template>
  <div v-if="messageDelete" class="alert alert-secondary shadow rounded">
    <div></div>
    <div>
      <h4><strong>Deseja deletar o registro?</strong></h4>
      <!--<div><strong>Registro:</strong> Gilvan Santos</div>-->
    </div>
    <div class="d-flex justify-content-end">
      <button @click="cancelar" class="btn btn-outline-danger mr-1">
        <i class="bi bi-x-circle-fill"></i> Cancelar
      </button>
      <button @click="destroy" class="btn btn-outline-success">
        <i class="bi bi-trash3-fill"></i> Deletar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["messageDelete", "cancelar", "destroy"],
};
</script>