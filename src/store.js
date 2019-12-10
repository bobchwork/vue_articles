import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { formatDate } from '@/helpers/helper';
import * as types from '@/mutations-types';

Vue.use(Vuex);

const state = {
  articles: [],
  amount: 4,
  selectedPage: 0,
};

export default new Vuex.Store({
  state,
  mutations: {
    [types.GET_ARTICLES](state, { data }) {
      state.articles = data;
    },
    [types.SET_SELECTED_PAGE](state, { data }) {
      state.selectedPage = data;
    },
  },
  getters: {
    selectedArticle(state) {
      return (id) => (state.articles.find((article) => article.id === id));
    },
    readableDate() {
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
    setPageNumber({ commit }, number) {
      commit({ type: types.SET_SELECTED_PAGE, data: number });
    },
  },
});
