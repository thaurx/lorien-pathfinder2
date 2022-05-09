<template>
  <v-card class="ma-0 pa-0" flat tile>
    <v-row align="center">
      <v-col cols="4">
        <v-card-text class="text-start">
          <h3>{{ armure.ca }}: Classe d'armure</h3>
        </v-card-text>
      </v-col>
      <v-col cols="4">
        <v-card-actions class="text-start">
          <v-btn @click="armure.caBonus--">-</v-btn>
          <v-btn @click="armure.caBonus++">+</v-btn>
          <v-btn @click="armure.caBonus=0">R</v-btn>
        </v-card-actions>
      </v-col>
      <v-col cols="4">
        <v-card-text class="text-start">
          <v-select
            density="compact"
            :items="maitrise"
            hide-details
            single-line
            v-model="armure.selected"
          ></v-select>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>

const maitrise = usePersistedState("MAITRISE", []);

const armure = usePersistedState("ARMURE", {
  selected: '',
  maitrise: 0,
  ca: 0,
  caBonus: 0,
});

watch(
  armure,
  () => {
    refreshPersistedState();
  },
  { deep: true }
);
</script>
