<template>
  <div class="row m-2">
    <div class="col">
      <div class="d-flex align-items-center justify-content-center">
        <button type="button" class="btn btn-danger w-75" @click="$emit('remove')">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
    <div class="col">
      <div class="d-flex align-items-center justify-content-center"></div>
      <button type="button" class="btn btn-success w-75" @click="$emit('add')">
        <i class="bi bi-plus-square"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddOrRemoveDonationButtons",
};
</script>

<style scoped></style>
