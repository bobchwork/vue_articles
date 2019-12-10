<template>
  <div v-if="!article">
    <Loading />
  </div>
  <div v-else>
    <ArticleContent :article="article" />
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import ArticleContent from '../components/Article/ArticleContent';
import Loading from '../components/Common/Loading';

export default {
  components: {
    ArticleContent,
    Loading,
  },
  computed: {
    ...mapState({
      articles: (state) => state.articles,
    }),
    ...mapGetters(['selectedArticle']),
    article() {
      const { id } = this.$route.params;
      return this.selectedArticle(id);
    },
  },
  methods: {
    ...mapActions(['getArticles']),
  },
  mounted() {
    window.scrollTo(0, 0);
    if (this.articles.length === 0) {
      this.getArticles();
    }
  },
};
</script>
