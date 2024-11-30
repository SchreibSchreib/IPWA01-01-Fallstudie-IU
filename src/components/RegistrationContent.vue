<template>
  <div class="row text-center">
    <section>
      <h2 class="mt-3">Registrierungsformular</h2>
      <div class="mb-3">
        <div v-if="donationMode === 'TakeUp'">
          <h4>Abholung bei Ihnen zuhause</h4>
        </div>
        <div v-else-if="donationMode === 'DropOff'">
          <h4>Übergabe an der Geschäftstelle</h4>
        </div>
      </div>
    </section>

    <section>
      <form @submit="handleSubmit">
        <CustomerInformationMask
          :donationMode="donationMode"
          :customerInformation="customerInformation"
          :addDonation="addDonation"
          :removeDonation="removeDonation"
          @mode-change="changeMode"
          @update:customer-information="updateCustomerInformation"
          @update:donation-mask="updateDonationMask"
        />
        <div v-for="donationNumber in numberOfDonations" :key="donationNumber">
          <AddClothingDonation
            :index="donationNumber - 1"
            @update:donation="updateDonation"
          />
        </div>
        <button class="btn btn-success mb-3" type="submit">Spende abschicken</button>
      </form>
    </section>
  </div>
</template>

<script>
import AddClothingDonation from "./RegistrationAddClothingDonation.vue";
import CustomerInformationMask from "./RegistrationCustomerInformationMask.vue";

export default {
  name: "RegistrationContent",
  props: {
    customerInformation: {
      type: Object,
      required: true,
    },
    donationMode: {
      type: String,
      required: true,
    },
    numberOfDonations: {
      type: Number,
      required: true,
    },
    donations: {
      type: Array,
      required: true,
    },
  },

  methods: {
    changeMode(newMode) {
      this.$emit("update:mode", newMode);
    },
    updateCustomerInformation(updatedInfo) {
      this.$emit("update:customer-information", updatedInfo);
    },
    updateDonationMask(donationMaskData) {
      this.$emit("update:donation-mask", donationMaskData);
    },
    updateDonation(donationData) {
      this.$emit("update:donation", donationData);
    },
    handleSubmit() {
      this.$emit("handle-submit");
    },
  },
  components: {
    AddClothingDonation,
    CustomerInformationMask,
  },
};
</script>

<style scoped>
.btn {
  background-color: #a153d8;
  border: 0;
}
</style>
