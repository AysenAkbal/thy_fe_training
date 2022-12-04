<template>
  <select
    class="dropdown select form-select-lg mb-3"
    aria-label=".form-select-lg example"
  >
    <option selected>{{ label }}</option>
    <option value="1">{{ option1 }}</option>
    <option value="2">{{ option2 }}</option>
    <option value="3">{{ option3 }}</option>
  </select>
</template>

<script>
export default {
  props: {
    dropdown1: String,
  },
};
</script>

<style>
.select {
  border: 1px solid #f4f6f8;
}
.dropdown {
  height: 66px !important;
  border-radius: 3px !important;
  background-color: #f4f6f8 !important;
  color: #232b38 !important;
}
</style>
