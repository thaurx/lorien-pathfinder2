<template>
  <v-card class="ma-0 pa-0" flat tile>
    <v-row align="center">
      <v-col cols="12">
        <v-card-text class="text-start">
          <h3>Dévoument de l'alchimiste</h3>
          <p>
            Vous mettez en pratique votre intérêt pour l'alchimie. Vous devenez
            qualifié dans les bombes alchimiques et l'Artisanat ; si vous étiez
            déjà qualifié en Artisanat, vous devenez à la place qualifié dans
            une compétence de votre choix. Vous devenez qualifié dans le DD de
            classe d'alchimiste. Vous gagnez la capacité de classe d'alchimiste
            réactifs imprégnés, en même temps qu'un nombre de réactifs
            quotidiens égal à votre niveau. Vous obtenez également le don
            Artisanat alchimique, ainsi que quatre formules supplémentaires pour
            des objets alchimiques de niveau 1, et le pouvoir de créer des
            objets gratuits lors de vos préparatifs quotidiens. Votre niveau
            d'alchimie avancée est de 1 et n'augmente pas de son propre chef.
            Spécial. Vous ne pouvez pas sélectionner un autre don de dévouement
            avant d'avoir obtenu deux autres dons de l'archétype alchimiste
          </p>
          <br />

          <h3>Artisanat alchimique</h3>
          <p>
            Vous pouvez utiliser l'activité Artisanat pour créer des objets
            alchimiques. Quand vous choisissez ce don, vous ajoutez
            immédiatement les formules de quatre objets alchimiques ordinaires
            de niveau 1 à votre formulaire.
          </p>
          <br />

          <h3>Artisanat spécialisé (Alchimie)</h3>
          <p>
            Votre formation s'est concentrée sur l'Artisanat d'un type d'objet
            en particulier. Sélectionnez une des spécialités listées ci-dessous.
            Vous gagnez un bonus de circonstances de +1 aux tests d'Artisanat
            pour Fabriquer des objets de ce type. Si vous êtes un maître en
            Artisanat, ce bonus augmente à +2. S'il n'est pas évident de
            déterminer si la spécialité s'applique, c'est le MJ qui décide.
            Certaines spécialités peuvent ne s'appliquer que partiellement. Par
            exemple, si vous réalisiez un morgenstern en possédant la spécialité
            ébénisterie, le MJ pourrait ne vous accorder que la moitié de votre
            bonus parce que l'objet nécessite à la fois forge et ébénisterie.
          </p>
          <br />
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>
const maitrise = usePersistedState("MAITRISE", []);

const armure = usePersistedState("ARMURE", {
  selected: "",
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
