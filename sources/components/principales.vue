<template>
  <v-card class="ma-0 pa-0" flat tile>
    <v-row align="center">
      <v-col cols="12">
        <v-card-text>
          <PointsDeVie />
          <Armure />
          <SauvegardeSelect select="Vigueur"/>
          <SauvegardeSelect select="Réflexes"/>
          <SauvegardeSelect select="Volonté"/>
          <Perception />
          
          <DdDeClasse />
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>

refreshPersistedState()
</script>
