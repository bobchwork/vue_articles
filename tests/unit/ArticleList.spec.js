import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueMaterial from 'vue-material';
import * as types from '@/mutations-types';
import ArticleList from '@/components/Articles/ArticleList';
import Loading from '@/components/Common/Loading';
import store from '@/store';

const localVue = createLocalVue();
localVue.use(VueMaterial);
localVue.use(Vuex);

const propsData = {
    articles: [],
    amount: 4,
    selectedPage: 0,
};

describe('ArticleList.vue', () => {
    it("displays loading message", () => {
        const wrapper = shallowMount(ArticleList, {
            propsData,
            localVue
        })

        expect(wrapper.find(Loading).exists()).toBe(true);
    })

    it("The default selected page in the store is 0, 5 after change", () => {
        const wrapper = shallowMount(ArticleList, {
            propsData,
            store,
            localVue
        });
        const data = { data: 5 };
        expect(store.state.selectedPage).toBe(0);
        store.commit(types.SET_SELECTED_PAGE, data);        
        expect(store.state.selectedPage).toBe(5);
    })
})

