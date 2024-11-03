<template>
  <div class="p-2">
    <button type="button" class="btn btn-primary w-100 mb-1" @click="switchMode('TakeUp')">
      Abholung
    </button>
    <button type="button" class="btn btn-primary w-100 mt-1" @click="switchMode('DropOff')">
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

.btn:active,
.btn:focus {
  background-color: #8947b8;
}
</style>
