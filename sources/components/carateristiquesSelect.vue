<template>
  <v-card class="mx-0 mt-0 mb-6 pa-0" flat tile>
    <v-row align="center">
      <v-col cols="6">
        <v-card-text class="text-start">
          <h3>{{ caracteristique.full }} : {{ props.select }}</h3>
        </v-card-text>
      </v-col>

      <v-col cols="6">
        <v-card-actions class="justify-end">
          <v-btn @click="caracteristique.full=10">10</v-btn>
          <v-btn @click="caracteristique.full--">-</v-btn>
          <v-btn @click="caracteristique.full++">+</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>
const props = defineProps({
  select: {
    type: [String],
    required: true,
  },
});

let caracteristique = usePersistedState("", {
  full: 0,
  mod: 0,
});

switch (props.select) {
  case "Force":
    caracteristique = usePersistedState("CARACT_FORCE", {
      full: 0,
      mod: 0,
    });
    break;

  case "Dextérité":
    caracteristique = usePersistedState("CARACT_DEXTERITE", {
      full: 0,
      mod: 0,
    });
    break;

  case "Constitution":
    caracteristique = usePersistedState("CARACT_CONSTITUTION", {
      full: 0,
      mod: 0,
    });
    break;

  case "Intelligence":
    caracteristique = usePersistedState("CARACT_INTELLIGENCE", {
      full: 0,
      mod: 0,
    });
    break;

  case "Sagesse":
    caracteristique = usePersistedState("CARACT_SAGESSE", {
      full: 0,
      mod: 0,
    });
    break;

  case "Charisme":
    caracteristique = usePersistedState("CARACT_CHARISME", {
      full: 0,
      mod: 0,
    });
    break;

  default:
    break;
}

watch(
  caracteristique,
  () => {
    refreshPersistedState();
  },
  { deep: true }
);
</script>
