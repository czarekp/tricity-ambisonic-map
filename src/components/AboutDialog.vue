<template>
  <v-dialog v-model="showDialog" max-width="600">
    <v-card class="pa-4">
      <v-card-title class="d-block text-center">
        Ambisoniczna mapa Trójmiasta
      </v-card-title>
      <v-card-text class="text-justify pb-0">
        Ambisoniczna mapa Trójmiasta to projekt stworzony w ramach pracy
        dyplomowej na Katedrze Systemów Multimedialnych. Na tej stronie
        znajdziesz materiały multimedialne, zrealizowane w technologii 360 z
        dźwiękiem ambisonicznym. Nagrania dostępne są z poziomu listy bocznej
        oraz poprzez interaktywną mapę.
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="closeAboutDialog" color="primary" text>
          Zamknij
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AboutDialog",
  props: {
    showDialog: Boolean
  },
  methods: {
    closeAboutDialog() {
      this.$emit("closeAboutDialog");
    }
  }
};
</script>
