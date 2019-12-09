import { shallowMount, createLocalVue } from '@vue/test-utils';

import VueMaterial from 'vue-material';
import ArticleList from '@/components/Articles/ArticleList';
import Loading from '@/components/Common/Loading';

const localVue = createLocalVue();
localVue.use(VueMaterial); 

describe('ArticleList.vue', () => {
    it("displays loading message", () => {
        const msg = "submit"
        const wrapper = shallowMount(ArticleList, {
            propsData: {
                articles: [],
                amount: 4,
            },
            localVue
        })

        console.log(wrapper.html())

        expect(wrapper.find(Loading).exists()).toBe(true);
    })
})

