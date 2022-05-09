<template>
  <v-card class="ma-0 pa-0" flat tile>
    <v-row align="center">
      <v-col cols="12">
        <v-card-text class="text-start">
          <br />
          <h3>Historique: Bricoleur</h3>
          <p>
            Vous inventez toutes sortes de petites choses afin de satisfaire
            votre imagination fertile. Vos compétences en ingénierie s'expriment
            avec beaucoup de créativité et il est impossible de deviner ce que
            vous allez bien pouvoir inventer ensuite. Il s'agira peut-être d'un
            génial appareil qui aura un potentiel fabuleux... ou qui risquera
            d'exploser. <br />
            Choisissez deux primes de caractéristiques. Une de ces primes doit
            être de Dextérité ou d'Intelligence et l'autre est une prime de
            caractéristique libre. <br />
            <b>Vous êtes qualifié dans les compétences Artisanat et Connaissance de
            l'ingénierie</b>. Vous gagnez le don de <b>compétence Artisanat
            spécialisé. [Alchimie]</b>
          </p>

          <br />
          <br />
          <br />
          <h3>Elfe visionnaire</h3>
          <p>
            Vous avez le pouvoir inné de détecter et comprendre les phénomènes
            magiques. Vous pouvez lancer le tour de magie détection de la magie
            comme un sort inné arcanique à volonté. Un tour de magie est
            intensifié à un niveau de sort égal à la moitié de votre niveau
            arrondi à l'entier supérieur. En outre, vous gagnez un
            <b
              >bonus de circonstances de +1 à vos tests pour Identifier la magie
              et Déchiffrer un texte de nature magique</b
            >. Ces actions font généralement appel aux compétences Arcanes,
            Nature, Occultisme ou Religion
          </p>

          <br />
          <br />
          <br />
          <h3>Dons Ancestraux</h3>
          <br />
          <h4>Magie Surnaturelle (Don 1)</h4>
          <p>
            Votre magie elfique se manifeste sous la forme d'un sort arcanique
            simple, même si vous n'avez pas été formé à la magie.<br />
            <b>Choisissez un tour de magie</b> dans la liste des sorts
            arcaniques (page 306). Vous pouvez lancer ce tour de magie comme un
            <b>sort inné arcanique</b> à volonté. Un tour de magie est
            intensifié à un niveau de sort égal à la moitié de votre niveau
            arrondi à l'entier supérieur.
          </p>
          
          <br />
          <br />
          <br />
          <h3>Alignement</h3>
          <p>Bon et Neutre</p>

          <br />
          <br />
          <br />
          <h3>Langues</h3>
          <p>Commun, Elfique, Céleste, Draconique, Sylvestre, Abyssal</p>
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
