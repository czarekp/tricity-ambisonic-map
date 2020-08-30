<template>
  <v-bottom-sheet
    v-model="showInfoSheet"
    :selectedLocation="selectedLocation"
    hide-overlay
    persistent
    no-click-animation
    inset
  >
    <v-card v-if="selectedLocation !== null" flat outlined>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-card-title class="font-weight-bold text-body-2 text-sm-h6">
              {{ selectedLocation.name }}
            </v-card-title>
            <v-card-text class="text-justify">
              {{ selectedLocation.description }}
            </v-card-text>
            <v-card-actions>
              <a :href="selectedLocation.videoUrl" class="d-md-none">
                <v-btn icon>
                  <v-icon>mdi-youtube</v-icon>
                </v-btn>
              </a>
              <v-spacer></v-spacer>
              <v-btn @click="closeInfoSheet" color="primary" text>
                Zamknij
              </v-btn>
            </v-card-actions>
          </v-col>
          <v-col cols="12" md="6">
            <iframe
              :src="selectedLocation.videoUrl"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
export default {
  name: "InfoSheet",
  props: {
    showInfoSheet: Boolean,
    selectedLocation: Object
  },
  methods: {
    closeInfoSheet() {
      this.$emit("closeInfoSheet");
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
iframe {
  width: 100%;
  height: 100%;
  min-height: 320px;
}
</style>
