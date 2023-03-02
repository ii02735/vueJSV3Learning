<template>
  <FewArticles/>
  <few-articles-reactive-version></few-articles-reactive-version>
</template>

<script>
import FewArticles from './components/FewArticles.vue';
import FewArticlesReactiveVersion from './components/FewArticlesReactiveVersion.vue';

export default {
  name: 'App',
  components: {
    FewArticles,
    FewArticlesReactiveVersion,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
