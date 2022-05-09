<template>
  <v-card class="ma-0 pa-0" flat tile>
    <v-row align="center">
      <v-col cols="12">
        <v-card-text class="text-start">
          <h3>Les sorts intensifiés</h3>
          <p>
            Quand vous obtenez des emplacements de sort de niveau 2 et plus,
            vous pouvez les remplir avec des versions plus puissantes de sorts
            de niveau inférieur. Cela augmente le niveau du sort, l'intensifiant
            pour qu'il corresponde à l'emplacement de sort. Nombre de sorts
            possèdent des améliorations spécifiques quand ils sont intensifiés à
            un niveau donné.
          </p>
          <br />

          <h3>Les tours de magie</h3>
          <p>
            Un tour de magie est un type de sort qui n'utilise pas d'emplacement
            de sort. Il se lance à volonté chaque jour, aussi souvent que vous
            le désirez. Un tour de magie est toujours automatiquement intensifié
            jusqu'à la moitié de votre niveau arrondi à l'entier supérieur, donc
            généralement égal au sort de plus haut niveau que vous pouvez lancer
            en tant que magicien. Par exemple, les tours de magie d'un magicien
            de niveau 1 sont de niveau 1, tandis que ceux d'un magicien de
            niveau 5 sont de niveau 3.
          </p>

          <br />
          <h3>Le grimoire</h3>
          <p>
            Chaque sort arcanique possède une version écrite, normalement
            consignée dans un grimoire. Vous commencez avec un grimoire d'une
            valeur de 10 pa ou moins (comme indiqué p. 290) que vous recevez
            gratuitement et, chaque jour, vous devez l'étudier pour préparer vos
            sorts. Il contient un éventail de 10 tours de magie arcaniques et
            cinq sorts arcaniques de niveau 1 de votre choix. Vous faites votre
            choix parmi les sorts ordinaires de la liste des sorts arcaniques
            (p. 306) ou parmi d'autres sorts arcaniques auxquels vous avez
            accès. À vous de décider de la forme et du nom de votre grimoire. Ce
            peut être un livre moisi à la reliure de cuir ou un ensemble de
            minces disques de métal glissés sur un anneau d'airain. Son nom peut
            être ésotérique, comme le Libram cramoisi ou plus académique, comme
            Études de terrain de la transmutation appliquée. À chaque fois que
            vous gagnez un niveau, vous ajoutez à votre grimoire deux sorts
            arcaniques de n'importe quel niveau que vous êtes capable de lancer.
            Vous pouvez aussi utiliser la compétence Arcanes pour lui ajouter
            d'autres sorts découverts au fil de vos aventures, comme expliqué p.
            241.
          </p>

          <br />
          <h3>Amélioration de l'harmonisation avec le familier</h3>
          <p>
            Cela fait longtemps que vous pensez qu'il suffit d'affiner la magie
            qui lie un magicien à son familier pour améliorer leur lien mystique
            par rapport à celui sécurisé, mais générique, que la majorité des
            magiciens utilisent. Vous avez formé un tel pacte avec votre
            familier et en tirez plus d'avantages que les autres magiciens. Vous
            obtenez le don de magicien Familier comme don bonus. Votre familier
            gagne un pouvoir supplémentaire, puis un autre quand vous atteignez
            les niveaux 6, 12 et 18. Votre lien avec votre familier modifie la
            capacité de classe lien arcanique : vous stockez l'énergie magique
            dans votre familier et non dans un objet vous appartenant. De plus,
            vous gagnez l'action gratuite Drain de familier au lieu de Drain
            d'objet lié. Elle peut s'utiliser à chaque fois qu'un pouvoir vous
            permet d'utiliser Drain d'objet lié et fonctionne à l'identique,
            sauf que vous tirez votre magie du familier et non d'un objet.
          </p>
          <br />

          <h3>Les écoles arcaniques</h3>
          <p>
            Si vous vous spécialisez dans une école arcanique plutôt que de
            toutes les étudier à parts égales (comme les universalistes), vous
            gagnez un emplacement de sort supplémentaire de chaque niveau que
            vous savez lancer. Ces emplacements accueillent uniquement des sorts
            de votre école arcanique de prédilection. De plus, vous pouvez
            préparer un tour de magie de plus de votre école de prédilection.
            Vous ajoutez aussi un autre sort arcanique de votre école de
            prédilection à votre grimoire. Vous apprenez un sort d'école, un
            type de sort spécial enseigné aux étudiants de votre école
            arcanique. Les sorts d'école font partie des sorts focalisés. Il
            faut dépenser 1 point de focalisation pour lancer un sort focalisé
            et vous commencez avec une réserve de focalisation de 1 point. Elle
            se remplit lors de vos préparatifs quotidiens et vous pouvez
            récupérer 1 point de focalisation en consacrant 10 minutes à l'étude
            de votre grimoire ou à des recherches arcaniques, en utilisant
            l'activité Refocaliser. Un sort focalisé est automatiquement
            intensifié à la moitié de votre niveau arrondi à l'entier supérieur.
            Un sort focalisé n'a pas besoin d'emplacement de sort et vous ne
            pouvez pas utiliser un tel emplacement pour le lancer. Certains dons
            accordent d'autres sorts focalisés et augmentent la taille de votre
            réserve de focalisation, bien que cette dernière ne puisse jamais
            contenir plus de 3 points. Les règles complètes concernant les sorts
            focalisés figurent page 300.
          </p>

          <br />
          <h3>Évocation</h3>
          <p>
            En tant qu'évocateur, vous baignez dans la puissance brute de la
            magie et l'utilisez pour créer ou détruire aisément. Vous faites
            appel aux éléments, à la force ou à l'énergie pour dévaster vos
            ennemis ou vous aider. Vous savez que l'approche la plus directe est
            la plus élégante. Vous ajoutez un sort d'évocation de niveau 1
            (comme décharge électrique) à votre grimoire. Vous apprenez le sort
            d'école trait de force (p. 396)
          </p>
          
          <br />
          <h3>Dons de Magicien</h3>
          <p>
            <b>Familier</b> (Gratuit avec la thèse), <b>Familier amélioré</b> (Obtenue niveau 4)
          </p>
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
