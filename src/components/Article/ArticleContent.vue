<template>
  <div id="container">
    <div id="header-container">
      <div id="image">
        <img :src="article.user.image" alt="Avatar" />
      </div>
      <div id="headline">
        <div id="title" class="md-title">{{ article.title}}</div>
        <div id="date" class="md-subhead">{{ readableDateVar }}</div>
      </div>
    </div>
    <p v-for="(content, index) in contentArray" :key="`${article.id}-${index}`">{{ content }}</p>
    <md-button class="md-raised md-primary" @click="goBack"> Back </md-button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { splitContent } from "@/helpers/helper";
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(["readableDate"]),
    readableDateVar() {
      return this.readableDate(this.article.date);
    },
    contentArray() {
      return splitContent(this.article.content);
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
div {
  float: left;
  text-align: left;
}
#header-container {
  width: 100%;
  margin: auto;
  margin-bottom: 10px;
}
#container {
  width: 100%;
  display: block;
  background-color: white;
  padding: 10px;
}
#headline {
  width: 80%;
  padding-left: 20px;
}
#date {
  width: 100%;
}
#image {
  width: 20%;
}
</style>