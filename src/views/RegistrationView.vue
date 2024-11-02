<template>
  <RegistrationContent
    :customerInformation="customerInformation"
    :donationMode="donationMode"
    :numberOfDonations="numberOfDonations"
    :donations="donations"
    @update:mode="updateMode"
    @update:number-of-donations="updateNumberOfDonations"
    @update:customer-information="updateCustomerInformation"
    @update:donation="updateDonations"
    @handle-submit="handleSubmit"
  />
</template>

<script>
import RegistrationContent from "@/components/RegistrationContent.vue";

export default {
  name: "RegistrationView",
  components: {
    RegistrationContent,
  },
  data() {
    return {
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
      donationMode: "TakeUp",
      numberOfDonations: 1,
      donations: [],
    };
  },
  methods: {
    updateMode(newMode) {
      this.donationMode = newMode;
    },
    updateNumberOfDonations(newNumber) {
      this.numberOfDonations = newNumber;
    },
    updateCustomerInformation(updatedField) {
      const key = Object.keys(updatedField)[0];
      const value = updatedField[key];
      this.customerInformation[key] = value;
    },
    updateDonations(donationData) {
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
};
</script>
