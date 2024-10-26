<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col d-flex justify-content-center align-items-center">
        <h1 class="text-center">Danke für Ihre Hilfe!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-center align-items-center m-3">
        <img src="@/assets/Confirmation.png" class="img-fluid" alt="" />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col d-flex justify-content-center align-items-center text-center fs-5">
        Die Spende wurde erfolgreich angenommen und leistet wertvolle Hilfe für die
        Menschen in {{ customerInformation.crisisArea }}.
      </div>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-center align-items-center text-center fs-5">
        <ConfirmRegistrationCustomerInformationCard
          :customer-information="customerInformation"
          :donation-mode="donationMode"
        />
      </div>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-center align-items-center text-center fs-5">
        In Kürze erhalten Sie eine E-Mail mit allen wichtigen Informationen von uns.
      </div>
    </div>
  </div>
</template>

<script>
import ConfirmRegistrationCustomerInformationCard from "./ConfirmRegistrationCustomerInformationCard.vue";

export default {
  name: "ConfirmRegistrationComponent",
  components: {
    ConfirmRegistrationCustomerInformationCard,
  },
  props: {
    donationMode: {
      type: String,
      required: true,
    },
    customerInformation: {
      type: Object,
      required: true,
    },
    donations: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
