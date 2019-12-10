<template>
  <ArticleList
    :selectedPage="selectedPage"
    :articles="articles"
    :amount="amount"
    @updatePageNumber="updatePageNumber"
  />
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ArticleList from '@/components/Articles/ArticleList';

export default {
  components: {
    ArticleList,
  },
  computed: {
    ...mapState({
      articles: (state) => state.articles,
      amount: (state) => state.amount,
      selectedPage: (state) => state.selectedPage,
    }),
  },
  methods: {
    ...mapActions(['getArticles', 'setPageNumber']),
    updatePageNumber(e) {
      this.setPageNumber(e);
    },
  },
  mounted() {
    this.getArticles();
    console.log(this.selectedPage);
  },
};
</script>
