<template>
  <div :class="`card border-left-${color} shadow h-100 py-2`">
    <div class="card-body">
      <div class="row no-gutters align-items-center">
        <div class="col mr-2">
          <div
            :class="`text-xs font-weight-bold text-${color} text-uppercase mb-1`"
          >
            {{ title }}
          </div>
          <div class="h5 mb-0 font-weight-bold text-gray-800">
            <!---->
            <div v-if="!loading">
              {{ data }}
            </div>
            <div v-else class="spinner-border spinner-border-sm" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <i
            style="font-size: 35px"
            class="bi bi-people-fill fa-2x text-gray-300"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-dashboard",
  props: ["title", "color", "data", "loading"],
};
</script>