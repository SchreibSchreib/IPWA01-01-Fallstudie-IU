<template>
  <RegistrationContent
    :customerInformation="customerInformation"
    :donationMode="donationMode"
    :numberOfDonations="numberOfDonations"
    :donations="donations"
    @update:mode="updateMode"
    @update:customer-information="updateCustomerInformation"
    @update:donation="updateDonations"
    @update:donation-mask="updateDonationMask"
    @handle-submit="handleSubmit"
  />
</template>

<script>
import RegistrationContent from "@/components/RegistrationContent.vue";

export default {
  name: "RegistrationView",
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
    updateCustomerInformation(updatedField) {
      console.log("Updated CustomerInformation")
      const key = Object.keys(updatedField)[0];
      const value = updatedField[key];
      this.customerInformation[key] = value;
    },
    updateDonationMask(donationMaskData) {
      if (donationMaskData === "add") {
        console.log("Added donationmask");
        this.addDonation();
      } else {
        console.log("Removed donationmask");
        this.removeDonation();
      }
    },
    updateDonations(donationData) {
      console.log("Updated Donation");
      this.donations[donationData.index] = {
        clothing: donationData.clothing,
        quantity: donationData.quantity,
      };
    },
    addDonation() {
      this.numberOfDonations++;
    },
    removeDonation() {
      if (this.numberOfDonations > 1) {
        this.numberOfDonations--;
      }
    },
    handleSubmit() {
      console.log("Kundendaten: ", this.customerInformation);
      console.log("Spenden: ", this.donations);
      this.saveData();
      this.$router.push({
        path: "/confirmation",
      });
    },
    saveData() {
      sessionStorage.setItem(
        "donationData",
        JSON.stringify({
          donationMode: this.donationMode,
          customerInformation: this.customerInformation,
          donations: this.donations,
        })
      );
    },
  },
  components: {
    RegistrationContent,
  },
};
</script>
