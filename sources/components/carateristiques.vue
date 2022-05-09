<template>
  <v-card class="mx-0 mb-0 mt-4 pa-0" flat tile>
    <v-row align="center">
      <v-col cols="12">
        <v-card-text class="text-start mb-4"> 
            <h2>Valeurs de Caractéristique</h2>
        </v-card-text>
        <v-card-text>
          <CarateristiquesSelect select="Force"/>
          <CarateristiquesSelect select="Dextérité"/>
          <CarateristiquesSelect select="Constitution"/>
          <CarateristiquesSelect select="Intelligence"/>
          <CarateristiquesSelect select="Sagesse"/>
          <CarateristiquesSelect select="Charisme"/>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>

refreshPersistedState()
</script>
