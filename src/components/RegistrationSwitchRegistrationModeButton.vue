<template>
  <div class="w-100 p-2">
    <button type="button" class="btn btn-primary w-100 mb-2 align-items-center border-black" @click="switchMode('TakeUp')" to="/">
      Abholung
    </button>
    <button type="button" class="btn btn-primary w-100 align-items-center border-black"
      @click="switchMode('DropOff')" to="/">
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
