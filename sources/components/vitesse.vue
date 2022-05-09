<template>
  <v-card class="ma-0 pa-0" flat tile>
    <v-row align="center">
      <v-col cols="12">
        <v-card-text class="text-start">
          <h3>Vitesse: {{ vitesse.full }}</h3>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>

const maitrise = usePersistedState("MAITRISE", []);

const vitesse = usePersistedState("VITESSE", {
  full: 0,
});

watch(
  vitesse,
  () => {
    refreshPersistedState();
  },
  { deep: true }
);
</script>
