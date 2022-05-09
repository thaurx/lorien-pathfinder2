<template>
  <v-card class="ma-0 pa-0" flat tile>
    <v-row align="center">
      <v-col cols="12">
        <v-card-text class="text-start">
          <h4>Feu Grégeois inférieur (Bombe)</h4>
          <p>
            Le feu grégeois est un mélange de liquides volatiles qui
            s'enflamment une fois exposés à l'air. Il inflige les dégâts de feu,
            les dégâts de feu persistants et les dégâts d'éclaboussure indiqués.
            Plusieurs types de bombes donnent un bonus d'objet aux jets
            d'attaque.
            <i
              >Cette bombe inflige 1d8 dégâts de feu, 1 dégât de feu persistant
              et 1 dégât d'éclaboussure de feu.</i
            >
          </p>
          <br />
          <h4>Fiole d'acide (Bombe)</h4>
          <p>
            Cette fiole renferme un acide corrosif qui inflige 1 dégât d'acide,
            les dégâts persistants indiqués et les dégâts d'éclaboussure d'acide
            indiqués. Plusieurs types de bombes donnent un bonus d'objet aux
            jets d'attaque
            <i
              >La fiole inflige 1d6 dégâts d'acide persistants et 1 dégât
              d'éclaboussure d'acide</i
            >
          </p>
          <br />
          <h4>Fiole givrée (Bombe)</h4>
          <p>
            Les réactifs liquides de cette fiole absorbent rapidement la chaleur
            une fois exposés à l'air. La fiole givrée inflige les dégâts de
            froid et d'éclaboussure de froid indiqués. Une cible touchée subit
            un malus de statut à la Vitesse jusqu'à la fin de son prochain tour.
            Plusieurs types de fioles givrées donnent un bonus d'objet aux jets
            d'attaque.
            <i
              >La bombe inflige 1d6 dégâts de froid et 1 dégât d'éclaboussure de
              froid. La cible subit un malus de -1,5 m</i
            >
          </p>
          <br />
          <h4>Foudre en bouteille (Bombe)</h4>
          <p>
            La foudre en bouteille déborde de réactifs volatiles qui créent une
            décharge électrique une fois exposés à l'air. Elle inflige les
            dégâts d'électricité, les dégâts d'électricité persistants et les
            dégâts d'éclaboussure d'électricité indiqués. Une cible touchée est
            prise au dépourvu jusqu'au début de votre prochain tour. Plusieurs
            types de bombes donnent un bonus d'objet aux jets d'attaque.
            <i
              >La bombe inflige 1d6 dégâts d'électricité et 1 dégât
              d'éclaboussure d'électricité.</i
            >
          </p>
          <br />
          <h4>Pierre à Tonnerre (Bombe)</h4>
          <p>
            Quand cette pierre heurte une créature ou une surface dure, elle
            explose dans un fracas tonitruant. Elle inflige les dégâts de son et
            d'éclaboussure de son indiqués. Chaque créature dans un rayon de 3 m
            autour de l'espace où elle a explosé doit réussir un jet de Vigueur
            contre le DD indiqué ou être sourde jusqu'à la fin de son prochain
            tour. Plusieurs types de pierre donnent un bonus d'objet aux jets
            d'attaque.
            <i
              >La bombe inflige 1d4 dégâts de son et 1 dégât d'éclaboussure de
              son. Le DD est de 17</i
            >
          </p>
          <br />
          <h4>Élixir de vie inférieur (Élixir)</h4>
          <p>
            L'élixir de vie accélère le processus de guérison naturel du corps
            et son système immunitaire. En le buvant, vous récupérez le nombre
            de points de vie indiqué et gagnez un bonus d'objet aux jets de
            sauvegarde contre la maladie et le poison pendant 10 min.
            <i>L'élixir restaure 1d6 points de vie, le bonus est de +1.</i>
          </p>
          <br />
          <h4>Venin de mille-pattes géant (Poison)</h4>
          <p>
            Le venin de mille-pattes géant cause une forte raideur dans les
            muscles.<br />
            Jet de sauvegarde Vigueur DD 17 ; Durée maximum 6 rounds ; Stade 1
            1d6 dégâts de poison (1 round) ; Stade 2 1d8 dégâts de poison et
            pris au dépourvu (1 round) ; Stade 3 1d12 dégâts de poison,
            maladroit 1 et pris au dépourvu (1 round).
            <i>Effet d'application: Blessure</i>
          </p>
          <br />
          <h4>Bâton fumigène inférieur (Outil)</h4>
          <p>
            D'un mouvement sec, vous faites sortir de l'objet un épais écran de
            fumée opaque qui occupe une explosion centrée sur un angle de votre
            espace. Toutes les créatures au sein de cette zone sont masquées et
            les autres sont masquées à leurs yeux. La fumée persiste 1 min ou
            jusqu'à être dispersée par un vent fort.
            <i>L'explosion a un rayon de 1,5 m</i>
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
