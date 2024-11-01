<template>
  <div class="container bg-light text-muted rounded-4 border p-3">
    <h2>Alle Daten im Überblick</h2>
    <div class="row">
      <div class="col-2 d-flex justify-content-start text-muted fw-bold ms-2">Name:</div>
      <div class="col d-flex justify-content-end me-2">
        {{ customerInformation.firstName }} {{ customerInformation.lastName }}
      </div>
    </div>
    <div v-if="donationMode === 'TakeUp'" class="row">
      <div class="col-2 d-flex justify-content-start fw-bold ms-2">Straße:</div>
      <div class="col d-flex justify-content-end me-2">
        {{ customerInformation.street }} {{ customerInformation.streetNumber }}
      </div>
    </div>
    <div v-if="donationMode === 'TakeUp'" class="row">
      <div class="col-2 d-flex justify-content-start fw-bold ms-2">PLZ:</div>
      <div class="col d-flex justify-content-end me-2">
        {{ customerInformation.zipCode }}
      </div>
    </div>
    <div v-if="donationMode === 'TakeUp'" class="row">
      <div class="col-2 d-flex justify-content-start fw-bold ms-2">Stadt:</div>
      <div class="col d-flex justify-content-end me-2">
        {{ customerInformation.city }}
      </div>
    </div>
    <div class="row">
      <div class="col-2 d-flex justify-content-start fw-bold ms-2">Datum:</div>
      <div class="col d-flex justify-content-end me-2">
        {{ date }}
      </div>
    </div>
    <div class="row">
      <div class="col-2 d-flex justify-content-start fw-bold ms-2">Uhrzeit:</div>
      <div class="col d-flex justify-content-end me-2">
        {{ time }}
      </div>
    </div>
    <div class="row">
      <h5 class="fs-3 mt-2 mx-3">Getätigte Spenden</h5>
    </div>
    <hr class="mt-2" />
    <div v-for="donation in donations" :key="donation">
      <div class="mb-1">
        <div class="text-muted fs-5">
          {{ donation.quantity }}x {{ donation.clothing }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmRegistrationCustomerInformationCard",
  components: {},
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
  data() {
    const currentDate = new Date();
    return {
      date: currentDate.toLocaleDateString("de-DE"),
      time: currentDate.toLocaleTimeString("de-DE"),
    };
  },
};
</script>

<style scoped>
.bg-light {
  background: linear-gradient(90deg, #ffd3a590, #eb083980);
}
</style>
