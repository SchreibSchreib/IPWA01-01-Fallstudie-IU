<template>
  <div class="row justify-content-center pb-3 w-100">
    <div class="card border-info border-5 pt-1 pb-1 d-none d-sm-block w-auto mx-auto">
      <div class="row">
        <div class="col">
          <h5 class="col d-flex justify-content-center fs-3 mx-3">
            Ihre Daten im Überblick
          </h5>
        </div>
      </div>
      <div class="row">
        <div
          class="col d-flex justify-content-start text-uppercase text-muted fw-bold mx-3"
        >
          Name:
        </div>
        <div class="col d-flex justify-content-end mx-3 text-nowrap">
          {{ customerInformation.firstName }} {{ customerInformation.lastName }}
        </div>
      </div>
      <div class="row">
        <div
          class="col d-flex justify-content-start text-uppercase text-muted fw-bold mx-3"
        >
          E-Mail:
        </div>
        <div class="col d-flex justify-content-end mx-3 text-nowrap">
          {{ customerInformation.email }}
        </div>
      </div>
      <div v-if="donationMode === 'TakeUp'">
        <div class="row">
          <div
            class="col d-flex justify-content-start text-uppercase text-muted fw-bold mx-3"
          >
            Straße:
          </div>
          <div class="col d-flex justify-content-end mx-3 text-nowrap">
            {{ customerInformation.street }}
          </div>
        </div>
        <div class="row">
          <div
            class="col d-flex justify-content-start text-uppercase text-muted fw-bold mx-3"
          >
            PLZ:
          </div>
          <div class="col d-flex justify-content-end mx-3 text-nowrap">
            {{ customerInformation.zipCode }}
          </div>
        </div>
        <div class="row">
          <div
            class="col d-flex justify-content-start text-uppercase text-muted fw-bold mx-3"
          >
            Stadt:
          </div>
          <div class="col d-flex justify-content-end mx-3 text-nowrap">
            {{ customerInformation.city }}
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col d-flex justify-content-start text-uppercase text-muted fw-bold mx-3"
        >
          Datum:
        </div>
        <div class="col d-flex justify-content-end mx-3 text-nowrap">{{ date }}</div>
      </div>
      <div class="row">
        <div
          class="col d-flex justify-content-start text-uppercase text-muted fw-bold mx-3"
        >
          Uhrzeit:
        </div>
        <div class="col d-flex justify-content-end mx-3 text-nowrap">{{ time }}</div>
      </div>
    </div>
    <div class="card border-info border-5 pt-1 pb-1 d-sm-none">
      <div class="row">
        <div class="col">
          <h5 class="col d-flex justify-content-center fs-3 mx-3">
            Ihre Daten im Überblick
          </h5>
        </div>
      </div>
      <div class="mb-2">
        <div class="text-muted text-uppercase fw-bold">Name</div>
        <div>{{ customerInformation.firstName }} {{ customerInformation.lastName }}</div>
      </div>
      <div class="mb-2">
        <div class="text-muted text-uppercase fw-bold">E-Mail</div>
        <div>{{ customerInformation.email }}</div>
      </div>
      <div v-if="donationMode === 'TakeUp'">
        <div class="mb-2">
          <div class="text-muted text-uppercase fw-bold">Straße</div>
          <div>
            {{ customerInformation.street }} {{ customerInformation.streetNumber }}
          </div>
        </div>
        <div class="mb-2">
          <div class="text-muted text-uppercase fw-bold">Postleitzahl</div>
          <div>{{ customerInformation.zipCode }}</div>
        </div>
        <div class="mb-2">
          <div class="text-muted text-uppercase fw-bold">Stadt</div>
          <div>{{ customerInformation.city }}</div>
        </div>
      </div>
      <div class="mb-2">
        <div class="text-muted text-uppercase fw-bold">Datum</div>
        <div>{{ date }}</div>
      </div>
      <div>
        <div class="text-muted text-uppercase fw-bold">Uhrzeit</div>
        <div>{{ time }}</div>
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
