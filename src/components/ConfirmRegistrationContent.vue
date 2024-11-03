<template>
  <section>
    <div class="row text-center mt-5">
      <h1>Danke für deine Hilfe!</h1>
    </div>
    <div class="row justify-content-center p-5">
      <img src="@/assets/Confirmation.png" />
    </div>
    <div class="row text-center fs-5">
      <div class="justify-content-center">
        <h3>
          Die Spende wurde erfolgreich angenommen und leistet wertvolle Hilfe für die
          Menschen in {{ customerInformation.crisisArea }}.
        </h3>
      </div>
    </div>
  </section>

  <section>
    <div class="row my-5 justify-content-center text-center fs-5">
      <div class="col-12 col-sm-11 col-lg-7">
        <ConfirmRegistrationCustomerInformationCard
          :donation-mode="donationMode"
          :customer-information="customerInformation"
          :donations="donations"
        />
      </div>
    </div>
  </section>

  <section>
    <div class="row mb-3">
      <div class="text-center fs-5">
        <h5>
          Die Auftragsbestätigung senden wir in Kürze an
          <strong>{{ customerInformation.email }}</strong
          >.
        </h5>
      </div>
    </div>
  </section>
</template>

<script>
import ConfirmRegistrationCustomerInformationCard from "./ConfirmRegistrationCustomerInformationCard.vue";

export default {
  name: "ConfirmRegistrationContent",
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
  components: {
    ConfirmRegistrationCustomerInformationCard,
  },
};
</script>

<style scoped>
img {
  max-width: 150px;
}
</style>
