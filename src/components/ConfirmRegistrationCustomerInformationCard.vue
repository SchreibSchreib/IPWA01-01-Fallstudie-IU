<template>
  <div class="row justify-content-center pb-3 w-100">
    <div class="card border-info border-5 pt-1 pb-1 w-auto mx-auto">
      <div class="row">
        <div class="col">
          <h5 class="col d-flex justify-content-center fs-3 mx-3">
            Ihre Daten im Überblick
          </h5>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-start mx-3"><b>Name:</b></div>
        <div class="col d-flex justify-content-end mx-3 text-nowrap">
          {{ customerInformation.firstName }} {{ customerInformation.lastName }}
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-start mx-3"><b>E-Mail:</b></div>
        <div class="col d-flex justify-content-end mx-3 text-nowrap">{{ customerInformation.email }}</div>
      </div>
      <div v-if="donationMode === 'TakeUp'">
        <div class="row">
          <div class="col d-flex justify-content-start mx-3"><b>Straße:</b></div>
          <div class="col d-flex justify-content-end mx-3 text-nowrap">{{ customerInformation.street }}</div>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-start mx-3"><b>PLZ:</b></div>
          <div class="col d-flex justify-content-end mx-3 text-nowrap">{{ customerInformation.zipCode }}</div>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-start mx-3"><b>Stadt</b></div>
          <div class="col d-flex justify-content-end mx-3 text-nowrap">{{ customerInformation.city }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-start mx-3"><b>Datum:</b></div>
        <div class="col d-flex justify-content-end mx-3 text-nowrap">{{ date }}</div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-start mx-3"><b>Uhrzeit:</b></div>
        <div class="col d-flex justify-content-end mx-3 text-nowrap">{{ time }}</div>
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
