<template>
  <div class="row m-2">
    <div class="col">
      <div class="d-flex align-items-center justify-content-center">
        <button type="button" class="btn btn-danger w-75" @click="removeDonationMask">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
    <div class="col">
      <button type="button" class="btn btn-success w-75" @click="addDonationMask">
        <i class="bi bi-plus-square"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddOrRemoveDonationButtons",
  methods: {
    addDonationMask() {
      this.$emit("update:donation-mask", "add");
    },
    removeDonationMask() {
      this.$emit("update:donation-mask", "remove");
    },
  },
};
</script>

<style scoped></style>
