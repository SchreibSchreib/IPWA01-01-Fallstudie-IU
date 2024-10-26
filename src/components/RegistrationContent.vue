<template>
  <div class="pt-2">
    <div v-if="donationMode === 'TakeUp'">
      <h3>Abholung bei Ihnen zuhause</h3>
    </div>
    <div v-else-if="donationMode === 'DropOff'">
      <h3>Übergabe an der Geschäftstelle</h3>
    </div>
    <form @submit.prevent="handleSubmit">
      <CustomerInformationMask
        :donationMode="donationMode"
        :customerInformation="customerInformation"
        :addDonation="addDonation"
        :removeDonation="removeDonation"
        @mode-change="handleModeChange"
        @update:customerInformation="updateCustomerInformation"
      />
      <button class="btn btn-primary " type="submit">Spende abschicken</button>
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
  data() {
    return {
      numberOfDonations: 1,
      customerInformation: {
        firstName: "",
        lastName: "",
        email: "",
        zipCode: null,
        city: "",
        street: "",
        streetNumber: "",
        crisisArea: "",
      },
      donations: [],
    };
  },
  methods: {
    addDonation() {
      this.numberOfDonations++;
    },
    removeDonation() {
      if (this.numberOfDonations > 1) {
        this.numberOfDonations--;
      }
    },
    handleModeChange(newMode) {
      this.$emit("mode-change", newMode);
    },
    updateCustomerInformation(updatedInfo) {
      this.customerInformation = updatedInfo;
    },
    updateDonation(donationData) {
      this.donations[donationData.index] = {
        clothing: donationData.clothing,
        quantity: donationData.quantity,
      };
    },
    handleSubmit() {
      console.log("Kundendaten: ", this.customerInformation);
      console.log("Spenden: ", this.donations);
    },
  },
  props: {
    donationMode: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
