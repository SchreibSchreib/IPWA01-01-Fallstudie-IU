<template>
  <div class="row justify-content-center pb-3 w-100">
    <div class="card p-2 col-10 col-sm-10 col-md-8 col-lg-4 mx-auto">
      <div class="row">
        <div class="col">
          <h5>Ihre Daten im Überblick</h5>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-start mx-3">Name:</div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-start mx-3">Email:</div>
        <div class="col"></div>
      </div>
      <!-- Ab hier v-if (wegen abholung) -->
      <div class="row">
        <div class="col d-flex justify-content-start mx-3">Straße:</div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-start mx-3">Adresse:</div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-start mx-3">Straße:</div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-start mx-3">Vorname:</div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmRegistrationCustomerInformationCard",
  components: {},
};
</script>
