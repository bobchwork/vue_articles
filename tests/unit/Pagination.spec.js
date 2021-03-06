import { mount, createLocalVue } from '@vue/test-utils';
import VueMaterial from 'vue-material';
import Pagination from '@/components/Common/Pagination';

const localVue = createLocalVue();
localVue.use(VueMaterial);

describe('Pagination.vue', () => {
  it('selectPage is called', () => {
    const wrapper = mount(Pagination, {
      propsData: {
        totalLength: 101,
        limit: 4,
        currentPage: 0,
      },
      localVue,
    });
    const selectPage = jest.fn();
    wrapper.setMethods({
      selectPage,
    });
    const button = wrapper.findAll('.page-number').at(1);
    console.log(button.html());
    button.trigger('click');
    expect(selectPage).toHaveBeenCalled();
  });
});
