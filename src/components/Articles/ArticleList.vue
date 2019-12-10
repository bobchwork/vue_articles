<template>
  <md-content fixed>
    <div v-if="articles.length === 0">
      <Loading />
    </div>
    <div v-else>
      <div v-for="(article, index) in splittedArticles" :key="`${index}-${article.id}`">
        <ArticleCard :article="article" />
      </div>
      <Pagination
        @goToPage="goToPage"
        :limit="amount"
        :totalLength="articles.length"
        :currentPage="selectedPage"
      />
    </div>
  </md-content>
</template>
<script>
import ArticleCard from '@/components/Articles/ArticleCard';
import Loading from '@/components/Common/Loading';
import Pagination from '@/components/Common/Pagination';

export default {
  components: {
    ArticleCard,
    Loading,
    Pagination,
  },
  data() {
    return {
      currentPage: this.selectedPage,
    };
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    selectedPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    splittedArticles() {
      return this.articles.slice(this.selectedPage, this.limit);
    },
    limit() {
      return this.selectedPage + this.amount;
    },
  },
  methods: {
    goToPage(e) {
      this.$emit('updatePageNumber', e);
    },
  },
};
</script>
