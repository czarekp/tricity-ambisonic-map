<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Ambisoniczna mapa Trójmiasta</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-navigation-drawer v-model="drawer" absolute width="30%">
        <v-list>
          <v-subheader>Lokalizacje</v-subheader>
          <v-list-item-group>
            <v-list-item v-for="(location, i) in locations" :key="i">
              {{ location }}
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <Map />
    </v-main>
  </v-app>
</template>

<script>
import Map from "./components/Map";

export default {
  name: "App",
  data: () => ({
    drawer: null,
    locations: []
  }),
  components: {
    Map
  }
};
</script>
