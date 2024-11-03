<template>
  <div class="container bg-light text-muted rounded-4 border p-4">
    <h2>Alle Daten im Überblick</h2>
    <div class="row">
      <div class="col-12 col-sm text-center text-sm-start fw-bold">Name:</div>
      <div class="col-12 col-sm text-center text-sm-end">
        {{ customerInformation.firstName }} {{ customerInformation.lastName }}
      </div>
    </div>
    <div v-if="donationMode === 'TakeUp'" class="row">
      <div class="col-12 col-sm text-center text-sm-start fw-bold">Straße:</div>
      <div class="col-12 col-sm text-center text-sm-end">
        {{ customerInformation.street }} {{ customerInformation.streetNumber }}
      </div>
    </div>
    <div v-if="donationMode === 'TakeUp'" class="row">
      <div class="col-12 col-sm text-center text-sm-start fw-bold">PLZ:</div>
      <div class="col-12 col-sm text-center text-sm-end">
        {{ customerInformation.zipCode }}
      </div>
    </div>
    <div v-if="donationMode === 'TakeUp'" class="row">
      <div class="col-12 col-sm text-center text-sm-start fw-bold">Stadt:</div>
      <div class="col-12 col-sm text-center text-sm-end">
        {{ customerInformation.city }}
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm text-center text-sm-start fw-bold">Datum:</div>
      <div class="col-12 col-sm text-center text-sm-end">
        {{ date }}
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm text-center text-sm-start fw-bold">Uhrzeit:</div>
      <div class="col-12 col-sm text-center text-sm-end">
        {{ time }}
      </div>
    </div>
    <div class="row">
      <h5 class="fs-3 mt-2">Getätigte Spenden</h5>
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
      //Returns date and timestamp on german format
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
