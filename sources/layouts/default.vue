<style>
html {
  overflow-y: hidden;
}
</style>

<template>
  <v-app>
    <!--  -->
    <v-app-bar density="compact" fixed app color="#204ac8">
      <v-row>
        <v-col cols="4"
          ><h2 class="text-white text-start">Magicien - Alchimiste</h2></v-col
        >
        <v-col cols="4"
          ><h2 class="text-white text-center">
            Lórien "Dieu des rêves"
          </h2></v-col
        >
        <v-col cols="4"
          ><h2 class="text-white text-end">Niveau: {{ niveau }}</h2></v-col
        >
      </v-row>
    </v-app-bar>

    <v-navigation-drawer color="#4169e1" floating permanent width="200">
      <v-list bg-color="#4169e1" density="compact" nav>
        <v-list-item
          title="Ascendance & Historique"
          value="0"
          class="text-white text-start"
          @click="page=0"
        ></v-list-item>
        <v-list-item
          title="Caractéristiques"
          value="1"
          class="text-white text-start"
          @click="page=1"
        ></v-list-item>
        <v-list-item
          title="Compétences"
          value="2"
          class="text-white text-start"
          @click="page=2"
        ></v-list-item>
        <v-list-item
          title="Magicien"
          value="3"
          class="text-white text-start"
          @click="page=3"
        ></v-list-item>
        <v-list-item
          title="Alchimiste"
          value="4"
          class="text-white text-start"
          @click="page=4"
        ></v-list-item>
        <v-list-item
          title="Forumules Alchimiques"
          value="5"
          class="text-white text-start"
          @click="page=5"
        ></v-list-item>
        <v-list-item
          title="Sorts Magiciens Lvl 0"
          value="6"
          class="text-white text-start"
          @click="page=6"
        ></v-list-item>
        <v-list-item
          title="Sorts Magiciens Lvl 1"
          value="7"
          class="text-white text-start"
          @click="page=7"
        ></v-list-item>
        <v-list-item
          title="Sorts Magiciens Lvl 2"
          value="8"
          class="text-white text-start"
          @click="page=8"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!--  -->
    <v-main>
      <v-container fluid class="ma-0 pa-0">
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
const page = usePersistedState("PAGE", 0);

const niveau = usePersistedState("NIVEAU", 0);
niveau.value = 4;

const maitrise = usePersistedState("MAITRISE", []);
maitrise.value = [
  "Inexpérimenté",
  "Qualifié",
  "Expert",
  "Maitre",
  "Legendaire",
];
</script>
