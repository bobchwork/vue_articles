<template>
  <md-card>
    <md-card-header id="article-card-header">
      <md-card-media>
        <img :src="article.user.image" alt="Avatar" />
      </md-card-media>
      <md-card-header-text>
        <div class="md-title">{{ article.title}}</div>
        <div class="md-subhead">{{ readableDateVar }}</div>
        <md-button class="md-primary" @click="showArticle">Read more</md-button>
      </md-card-header-text>
    </md-card-header>
  </md-card>
</template>

<script>
import { mapGetters } from "vuex";
import { formatDate } from "@/helpers/helper";
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(["readableDate"]),
    readableDateVar: function() {
      return this.readableDate(this.article.date);
    }
  },
  methods: {
    showArticle: function() {
      this.$router.push({
        name: "article",
        params: {
          id: this.article.id
        }
      });
    }
  }
};
</script>
<style scoped>
.md-card-header-text {
  text-align: left;
  margin-left: 20px;
}
</style>