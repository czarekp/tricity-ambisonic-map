<template>
  <v-app>
    <v-app-bar style="z-index: 2" color="primary" app dark>
      <v-app-bar-nav-icon @click.stop="toggleLocationList"></v-app-bar-nav-icon>
      <v-toolbar-title>Ambisoniczna mapa Trójmiasta</v-toolbar-title>
    </v-app-bar>

    <LocationList :showList="showList" />
    <Map />
  </v-app>
</template>

<script>
import Map from "./components/Map";
import LocationList from "./components/LocationList";

export default {
  name: "App",
  data: () => ({
    showList: true
  }),
  methods: {
    toggleLocationList() {
      this.showList = !this.showList;
    }
  },
  components: {
    Map,
    LocationList
  }
};
</script>
