<template>
  <div class="form-group">
    <label v-if="label" :for="for_id" class="form-label">{{ label }} <span v-if="require" class="text-danger">*</span></label>
    <input
      :id="for_id"
      v-model="model"
      :type="type"
      class="form-input form-control"
      :placeholder="placeholder"
    />
  </div>
</template>

<style>
.form-input {
  display: block;
  width: 100%;
  /*height: calc(1.5em + .75rem + 2px);*/
  padding: 25px 20px 25px 20px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6e707e;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #d1d3e2;
  border-radius: 40px;
  /*transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;*/
}

.form-input:focus {
  box-shadow: none !important;
  /*border: none !important;*/
  /*background-color: rebeccapurple;*/
}
</style>

<script>
export default {
  props: ["for_id", "label", "type", "placeholder", "require"],

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script> 