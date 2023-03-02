<template>
    <div>
        <h2>Here is a few articles for you</h2>
        <br/>
        <button @click="accessToPreviousArticle">Previous article</button>
        <button @click="accessToNextArticle">Next article</button>
        <div>
          <p>id : {{ currentArticle.index }}</p>
          <p>Auteur : {{ currentArticle.author }}</p>
          <p>contenu : {{ currentArticle.content }}</p>
        </div>
    </div>
</template>

<script>
import availableArticles from '../data/articles.json';
import createHookMixin from './create-hook-mixin';

export default {
  name: 'FewArticles',
  data() {
    return {
      currentArticleIndex: 0,
      totalArticles: availableArticles.length,
    };
  },
  methods: {
    accessToNextArticle() {
      if (this.currentArticleIndex === this.totalArticles - 1) {
        return;
      }

      this.currentArticleIndex += 1;
    },

    accessToPreviousArticle() {
      if (this.currentArticleIndex === 0) {
        return;
      }

      this.currentArticleIndex -= 1;
    },
  },
  /*
   * L'avantage de mettre cette méthode dans computed,
     permet de mettre en cache le résultat (tant que les propriétés n'ont pas changées)
   */
  computed: {
    currentArticle() {
      return availableArticles[this.currentArticleIndex];
    },
  },
  mixins: [createHookMixin],
};
</script>
