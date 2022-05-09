<template>
  <v-card class="ma-0 pa-0" flat tile>
    <v-row align="center">
      <v-col cols="4">
        <v-card-text class="text-start">
          <h3>{{ pointsDeVie.acutel }}: Points De Vie</h3>
        </v-card-text>
      </v-col>
      <v-col cols="4">
        <v-card-actions class="text-start">
          <v-btn @click="subPointsDeVie">-</v-btn>
          <v-btn @click="addPointsDeVie">+</v-btn>
          <v-btn @click="pointsDeVie.acutel=pointsDeVie.max">Max</v-btn>
        </v-card-actions>
      </v-col>
      <v-col cols="4">
        <v-card-text class="text-start">
          <h3>(Max: {{ pointsDeVie.max }})</h3>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>

const maitrise = usePersistedState("MAITRISE", []);

const pointsDeVie = usePersistedState("POINTS_DE_VIE", {
    max: 0,
    acutel: 0,
});

function subPointsDeVie() {
  if (pointsDeVie.value.acutel > 0) {
    pointsDeVie.value.acutel--
  }
}

function addPointsDeVie() {
  if (pointsDeVie.value.acutel < pointsDeVie.value.max) {
    pointsDeVie.value.acutel++
  }
}

watch(
  pointsDeVie,
  () => {
    refreshPersistedState();
  },
  { deep: true }
);
</script>
