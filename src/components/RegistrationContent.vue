<template>
  <div class="row text-center">
    <h2 class="mt-3">Registrierungsformular</h2>
    <div class="mb-2">
      <div v-if="donationMode === 'TakeUp'">
        <h4>Abholung bei Ihnen zuhause</h4>
      </div>
      <div v-else-if="donationMode === 'DropOff'">
        <h4>Übergabe an der Geschäftstelle</h4>
      </div>
    </div>
    <form @submit="handleSubmit">
      <CustomerInformationMask
        :donationMode="donationMode"
        :customerInformation="customerInformation"
        :addDonation="addDonation"
        :removeDonation="removeDonation"
        @mode-change="changeMode"
        @update:customer-information="updateCustomerInformation"
      />
      <button class="btn btn-success mb-3" type="submit">Spende abschicken</button>
      <div v-for="donationNumber in numberOfDonations" :key="donationNumber">
        <AddClothingDonation
          :index="donationNumber - 1"
          @update-donation="updateDonation"
        />
      </div>
    </form>
  </div>
</template>

<script>
import AddClothingDonation from "./RegistrationAddClothingDonation.vue";
import CustomerInformationMask from "./RegistrationCustomerInformationMask.vue";

export default {
  name: "RegistrationContent",
  components: {
    AddClothingDonation,
    CustomerInformationMask,
  },
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
    removeDonation() {
      if (this.numberOfDonations > 1) {
        this.$emit("update:number-of-donations", this.numberOfDonations - 1);
      }
    },
    addDonation() {
      this.$emit("update:number-of-donations", this.numberOfDonations + 1);
    },
    changeMode(newMode) {
      this.$emit("update:mode", newMode);
    },
    updateCustomerInformation(updatedInfo) {
      this.$emit("update:customer-information", updatedInfo);
    },
    updateDonation(donationData) {
      this.$emit("update:donation", donationData);
    },
    handleSubmit() {
      this.$emit("handle-submit");
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
