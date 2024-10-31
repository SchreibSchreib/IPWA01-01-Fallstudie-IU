<template>
  <div class="fs-5">
    <select
      class="form-select"
      v-model="selectedClothing"
      @change="sendDonationData"
      required
    >
      <option value="" selected disabled>Kleidungsstück wählen</option>
      <option value="Jacke">Jacke</option>
      <option value="Pullover">Pullover</option>
      <option value="T-Shirt">T-Shirt</option>
      <option value="Hose">Hose</option>
    </select>
  </div>
  <label for="customRange2" class="form-label fs-5 mt-2">Anzahl: {{ numberOfArticles }}</label>
  <input
    type="range"
    class="form-range mb-3"
    min="1"
    max="10"
    id="numberOfArticles"
    v-model="numberOfArticles"
    @input="sendDonationData"
  />
</template>

<script>
export default {
  name: "AddClothingDonation",
  props: {
    index: Number,
  },
  data() {
    return {
      numberOfArticles: 1,
      selectedClothing: "",
    };
  },
  methods: {
    sendDonationData() {
      this.$emit("update-donation", {
        index: this.index,
        clothing: this.selectedClothing,
        quantity: this.numberOfArticles,
      });
    },
  },
};
</script>

<style scoped></style>
