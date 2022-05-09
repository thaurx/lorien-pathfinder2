<template>
  <v-card class="ma-0 pa-0" flat tile>
    <v-row align="center">
      <v-col cols="4">
        <v-card-text>
          <h3>{{ sauvegarde.full }} : {{ props.select }}</h3>
        </v-card-text>
      </v-col>
      
      <v-col cols="4">
        <v-card-actions class="text-start">
          <v-btn @click="sauvegarde.bonus--">-</v-btn>
          <v-btn @click="sauvegarde.bonus++">+</v-btn>
          <v-btn @click="sauvegarde.bonus=0">R</v-btn>
        </v-card-actions>
      </v-col>

      <v-col cols="4">
        <v-card-text>
          <v-select
            density="compact"
            :items="maitrise"
            hide-details
            single-line
            v-model="sauvegarde.selected"
          ></v-select>
        </v-card-text>
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


const maitrise = usePersistedState("MAITRISE", []);

let sauvegarde = usePersistedState("", {
    selected: '',
    maitrise: 0,
    full: 0,
    bonus: 0
});


switch (props.select) {
  case "Vigueur":
    sauvegarde = usePersistedState("SAUVE_VIGUEUR", {
    selected: '',
    maitrise: 0,
    full: 0,
    bonus: 0
  });
    break;

  case "Réflexes":
    sauvegarde = usePersistedState("SAUVE_REFLEXES", {
    selected: '',
    maitrise: 0,
    full: 0,
    bonus: 0
  });
    break;

  case "Volonté":
    sauvegarde = usePersistedState("SAUVE_VOLONTE", {
    selected: '',
    maitrise: 0,
    full: 0,
    bonus: 0
  });

    break;

  default:
    break;
}

watch(
  sauvegarde,
  () => {
    refreshPersistedState();
  },
  { deep: true }
);
</script>
