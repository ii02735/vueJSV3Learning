<template>
    <div>
        <h2>Here is a few articles for you</h2>
        <br/>
        <button @click="accessToPreviousArticle">Previous article</button>
        <button @click="accessToNextArticle">Next article</button>
        <h2>Current article</h2>
        <div>
          <p>id : {{ currentArticle.index }}</p>
          <p>author : {{ currentArticle.author }}</p>
          <p>content : {{ currentArticle.content }}</p>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import availableArticles from '../data/articles.json';

export default {
  setup() {
    const currentArticleIndex = ref(0);
    const totalArticles = availableArticles.length;
    const setCurrentArticleIndex = (newIndex) => {
      if (newIndex > totalArticles - 1 || newIndex < 0) {
        return;
      }
      currentArticleIndex.value = newIndex;
    };

    const accessToNextArticle = () => setCurrentArticleIndex(currentArticleIndex.value + 1);
    const accessToPreviousArticle = () => setCurrentArticleIndex(currentArticleIndex.value - 1);

    return {
      accessToNextArticle,
      accessToPreviousArticle,
      currentArticle: computed(() => availableArticles[currentArticleIndex.value]),
    };
  },
};
</script>
