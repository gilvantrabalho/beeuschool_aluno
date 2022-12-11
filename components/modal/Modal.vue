<template>
  <div
    class="modal fade"
    :id="id"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <h4 class="modal-title font-weight-bold" id="staticBackdropLabel">
              {{ title }}
            </h4>
            <div class="m-0 p-0">{{ subtitle }}</div>
          </div>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <!--<div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            <i class="bi bi-x-circle"></i> Cancelar
          </button>
          <button type="submit" class="btn btn-success">
            <i class="bi bi-send-check-fill mr-1"></i> Enviar
          </button>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "subtitle"],
};
</script>