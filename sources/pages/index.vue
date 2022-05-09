<style scoped></style>

<template>
  <v-card class="h-screen ma-0 pa-0" color="dark-grey" flat tile>
    <v-row v-if="page == 0">
      <v-col cols="9">
        <AscendanceHistorique />
      </v-col>
      
      <v-col cols="3"><HeroImage /> </v-col>
    </v-row>

    <v-row v-if="page == 1">
      <v-col cols="4">
        <v-card-text class="text-start"> 
          <Carateristiques />
        </v-card-text>
      </v-col>

      <v-col cols="5">
        <v-card-text class="text-start"> 
          <Principales />
        </v-card-text>
      </v-col>

      <v-col cols="3"><HeroImage /> </v-col>
    </v-row>
    
    <v-row v-if="page == 2">
      <v-col cols="9">
        actions
      </v-col>
      
      <v-col cols="3"><HeroImage /> </v-col>
    </v-row>
    
    <v-row v-if="page == 3">
      <v-col cols="9">
        <Magicien />
      </v-col>
      
      <v-col cols="3"><HeroImage /> </v-col>
    </v-row>
    
    <v-row v-if="page == 4">
      <v-col cols="9">
        <Alchimiste />
      </v-col>
      
      <v-col cols="3"><HeroImage /> </v-col>
    </v-row>
    
    <v-row v-if="page == 5">
      <v-col cols="9">
        <FormulesAlchimique />
      </v-col>
      
      <v-col cols="3"><HeroImage /> </v-col>
    </v-row>
    
    <v-row v-if="page == 6">
      <v-col cols="9">
        <SortMagicienLvl0 />
      </v-col>
      
      <v-col cols="3"><HeroImage /> </v-col>
    </v-row>
    
    <v-row v-if="page == 7">
      <v-col cols="9">
        <SortMagicienLvl1 />
      </v-col>
      
      <v-col cols="3"><HeroImage /> </v-col>
    </v-row>
    
    <v-row v-if="page == 8">
      <v-col cols="9">
        <SortMagicienLvl2 />
      </v-col>
      
      <v-col cols="3"><HeroImage /> </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>
const page = usePersistedState("PAGE", 0);
refreshPersistedState()
</script>
