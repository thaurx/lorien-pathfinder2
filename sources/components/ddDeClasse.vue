<template>
  <v-card class="ma-0 pa-0" flat tile>
    <v-row align="center">
      <v-col cols="4">
        <v-card-text class="text-start">
          <h3>{{ ddDeClasse.full }}: DD de Classe</h3>
        </v-card-text>
      </v-col>
      <v-col cols="4">
        <v-card-actions class="text-start">
          <v-btn @click="ddDeClasse.bonus--">-</v-btn>
          <v-btn @click="ddDeClasse.bonus++">+</v-btn>
          <v-btn @click="ddDeClasse.bonus=10">R</v-btn>
        </v-card-actions>
      </v-col>
      <v-col cols="4">
        <v-card-text class="text-start">
          <v-select
            density="compact"
            :items="maitrise"
            hide-details
            single-line
            v-model="ddDeClasse.selected"
          ></v-select>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>

const maitrise = usePersistedState("MAITRISE", []);

const ddDeClasse = usePersistedState("DD_DE_CLASSE", {
  selected: '',
  maitrise: 0,
  full: 0,
  bonus: 0
});

watch(
  ddDeClasse,
  () => {
    refreshPersistedState();
  },
  { deep: true }
);
</script>
