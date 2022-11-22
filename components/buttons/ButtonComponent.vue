<template>
  <div>
    <button
      v-if="loading"
      :type="type"
      @click="click"
      :class="`btn ${classStyle}`"
      disabled
    >
      <div class="spinner-grow spinner-grow-sm" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </button>
    <button v-else :type="type" @click="click" :class="`btn ${classStyle}`">
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    classStyle: {
      type: String,
      required: false,
    },
    click: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
};
</script>