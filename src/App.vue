<template>
  <v-app>
    <v-app-bar style="z-index: 2" color="primary" app dark>
      <v-app-bar-nav-icon @click.stop="toggleLocationList"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold text-body-2 text-sm-h6">
        Ambisoniczna mapa Trójmiasta
      </v-toolbar-title>
    </v-app-bar>

    <LocationList
      :showList="showList"
      @selectedLocationChanged="onSelectedLocationChanged"
      @selectedCityChanged="onSelectedCityChanged"
    />
    <Map
      :selectedLocation="selectedLocation"
      :selectedCity="selectedCity"
      @selectedLocationChanged="onSelectedLocationChanged"
      @openInfoSheet="openInfoSheet"
    />
    <InfoSheet
      :showInfoSheet="showInfoSheet"
      :selectedLocation="selectedLocation"
      @closeInfoSheet="closeInfoSheet"
    />
  </v-app>
</template>

<script>
import Map from "./components/Map";
import LocationList from "./components/LocationList";
import InfoSheet from "./components/InfoSheet";

export default {
  name: "App",
  data: () => ({
    showList: true,
    showInfoSheet: false,
    selectedLocation: null,
    selectedCity: { city: "" }
  }),
  methods: {
    toggleLocationList() {
      this.showList = !this.showList;
    },
    onSelectedLocationChanged(location) {
      this.selectedLocation = location;
      if (location === null) {
        this.showInfoSheet = false;
      }
    },
    onSelectedCityChanged(city) {
      this.selectedCity = city;
    },
    openInfoSheet() {
      this.showInfoSheet = true;
    },
    closeInfoSheet() {
      this.showInfoSheet = false;
    }
  },
  components: {
    InfoSheet,
    Map,
    LocationList
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
