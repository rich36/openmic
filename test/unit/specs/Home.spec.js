import Vue from 'vue'
import Home from '@/components/Home'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#upcoming-performances-card h2.title').textContent)
      .toEqual('Upcoming Performances Near You')
  })
})
