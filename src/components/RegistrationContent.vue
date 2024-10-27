<template>
  <div>
    <div v-if="donationMode === 'TakeUp'">
      <h4>Abholung bei Ihnen zuhause</h4>
    </div>
    <div v-else-if="donationMode === 'DropOff'">
      <h4>Übergabe an der Geschäftstelle</h4>
    </div>
    <form @submit="handleSubmit">
      <CustomerInformationMask
        :donationMode="donationMode"
        :customerInformation="customerInformation"
        :addDonation="addDonation"
        :removeDonation="removeDonation"
        @mode-change="handleModeChange"
        @update:customerInformation="updateCustomerInformation"
      />
      <button class="btn btn-primary" type="submit">Spende abschicken</button>
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
      sessionStorage.setItem(
        "donationData",
        JSON.stringify({
          donationMode: this.donationMode,
          customerInformation: this.customerInformation,
          donations: this.donations,
        })
      );
      this.$router.push({
        path: "/confirmation",
      });
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
