import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { formatDate } from '@/helpers/helper';
import * as types from '@/mutations-types';

Vue.use(Vuex);

const state = {
  articles: [],
  amount: 4,
  selectedArticleId: null,
};

export default new Vuex.Store({
  state,
  mutations: {
    [types.GET_ARTICLES](state, { data }) {
      state.articles = data;
    }
  },
  getters: {
    selectedArticle(state) {
      return (id) => (state.articles.find((article) => article.id === id))
    },
    readableDate(state) {
      return (
        (date) => {
          const transformedDate = formatDate(date);
          return transformedDate;
        }
      );
    },
  },
  actions: {
    async getArticles({ commit }) {
      await axios.get('http://localhost:3000/articles')
        .then(({ data }) => {
          commit({ type: types.GET_ARTICLES, data });
        });
    },
  },
});
