<template>
  <div class="p-2">
    <button
      type="button"
      class="btn btn-primary w-100 mb-2"
      @click="switchMode('TakeUp')"
      to="/"
    >
      Abholung
    </button>
    <button
      type="button"
      class="btn btn-primary w-100"
      @click="switchMode('DropOff')"
      to="/"
    >
      Übergabe an der Geschäftstelle
    </button>
  </div>
</template>

<script>
export default {
  name: "SwitchRegistrationModeButton",
  methods: {
    switchMode(mode) {
      this.$emit("mode-change", mode);
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #a153d8;
  border: 0;
}
</style>
