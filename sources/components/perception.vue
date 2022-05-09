<template>
  <v-card class="ma-0 pa-0" flat tile>
    <v-row align="center">
      <v-col cols="4">
        <v-card-text class="text-start">
          <h3>{{ perception.full }}: Perception</h3>
        </v-card-text>
      </v-col>
      <v-col cols="4">
        <v-card-actions class="text-start">
          <v-btn @click="perception.bonus--">-</v-btn>
          <v-btn @click="perception.bonus++">+</v-btn>
          <v-btn @click="perception.bonus=0">R</v-btn>
        </v-card-actions>
      </v-col>
      <v-col cols="4">
        <v-card-text class="text-start">
          <v-select
            density="compact"
            :items="maitrise"
            hide-details
            single-line
            v-model="perception.selected"
          ></v-select>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>

const maitrise = usePersistedState("MAITRISE", []);

const perception = usePersistedState("PERCEPTION", {
  selected: '',
  maitrise: 0,
  full: 0,
  bonus: 0
});

watch(
  perception,
  () => {
    refreshPersistedState();
  },
  { deep: true }
);
</script>
