/**
 * Un mixin est de la logique qu'on peut partager à plusieurs composants
 * Chaque composant devra importer ce code, dans son attribut mixins:
 */

export default {
  created() {
    console.log('Fonction créée à la création du composant, utile pour alimenter un composant depuis un appel HTTP par exemple');
  },
};
