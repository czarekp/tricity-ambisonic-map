<template>
  <v-container fluid style="width: 100%; height: 100vh" class="pa-0 ma-0">
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      style="width: 100%; height: 100%"
      @click="onMapClickHandler"
    >
      <vl-view
        :zoom.sync="zoom"
        :center.sync="center"
        :rotation.sync="rotation"
        ref="mapView"
      ></vl-view>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-layer-vector>
        <template v-for="location in locations">
          <template v-for="place in location.places">
            <vl-feature :key="place.name" :id="place.name">
              <vl-geom-point
                :coordinates="calculateCoordinates(place.coordinates)"
              ></vl-geom-point>
              <vl-style-box>
                <vl-style-icon
                  :anchor="[32, 64]"
                  anchor-x-units="pixels"
                  anchor-y-units="pixels"
                  src="../assets/marker.png"
                  :scale="0.6"
                ></vl-style-icon>
              </vl-style-box>
            </vl-feature>
          </template>
        </template>
      </vl-layer-vector>

      <template v-if="selectedLocation !== null">
        <vl-overlay
          :id="selectedLocation.name"
          :offset="[-100, -120]"
          :position="calculateCoordinates(selectedLocation.coordinates)"
        >
          <v-card class="d-flex">
            <v-card-title>
              {{ selectedLocation.name }}
            </v-card-title>
            <v-divider vertical></v-divider>
            <v-card-actions>
              <a :href="selectedLocation.videoUrl" target="_blank">
                <v-btn icon>
                  <v-icon>mdi-youtube</v-icon>
                </v-btn>
              </a>
              <v-btn icon @click="openInfoSheet">
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </vl-overlay>
      </template>
    </vl-map>
  </v-container>
</template>

<script>
import locations from "../locations";
import { pointFromLonLat } from "vuelayers/lib/ol-ext";

export default {
  name: "Map",
  data: () => ({
    zoom: 11,
    center: pointFromLonLat([18.55, 54.47]),
    rotation: 0,
    locations
  }),
  props: {
    selectedLocation: Object,
    selectedCity: Object
  },
  watch: {
    selectedLocation: {
      handler(newValue) {
        const animation = newValue
          ? {
              zoom: 17,
              center: this.calculateNewCenter(newValue.coordinates)
            }
          : {
              zoom: 11,
              center: pointFromLonLat([18.55, 54.47])
            };
        this.$refs.mapView.animate(animation);
      }
    },
    selectedCity: {
      handler(newValue) {
        this.$refs.mapView.animate({
          zoom: newValue.zoomValue,
          center: pointFromLonLat(newValue.centerCoordinates)
        });
      }
    }
  },
  methods: {
    calculateCoordinates(latLonPoint) {
      return pointFromLonLat(latLonPoint);
    },
    calculateNewCenter(latLonPoint) {
      const coordinates = this.calculateCoordinates(latLonPoint);
      coordinates[0] -= 100;
      coordinates[1] -= 50;
      return coordinates;
    },
    onMapClickHandler(event) {
      const feature = event.target.forEachFeatureAtPixel(
        event.pixel,
        feature => feature
      );
      if (feature) {
        let clickedLocation = null;
        locations.forEach(city => {
          city.places.forEach(place => {
            if (place.name === feature.id_) {
              clickedLocation = place;
            }
          });
        });
        this.$emit("selectedLocationChanged", clickedLocation);
      } else {
        this.$emit("selectedLocationChanged", null);
      }
    },
    openInfoSheet() {
      this.$emit("openInfoSheet");
    }
  }
};
</script>
