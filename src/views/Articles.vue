<template>
  <ArticleList :articles="articles" :amount="amount" />
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ArticleList from '@/components/Articles/ArticleList';
export default {
  components: {
    ArticleList
  },
  computed: {
    ...mapState({
      articles: state => state.articles,
      amount: state => state.amount,
    })
  },
  methods: mapActions(['getArticles']),
  mounted() {
    this.getArticles();
  },
};
</script>
