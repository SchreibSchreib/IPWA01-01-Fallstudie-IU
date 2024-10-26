<template>
  <div class="row text-justify p-3 mb-5 fs-5">
    <div class="container pb-2">
      <select
        class="form-select fs-5"
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
    <label for="customRange2" class="form-label">Anzahl: {{ numberOfArticles }}</label>
    <input
      type="range"
      class="form-range"
      min="1"
      max="10"
      id="numberOfArticles"
      v-model="numberOfArticles"
      @input="sendDonationData"
    />
  </div>
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
