import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import App from '../../src/App';
import vContainer from '@/vuetify';
import appInput from '@/components/ControlInput.vue';
const localVue = createLocalVue();
localVue.use( vContainer );
localVue.component( 'app-input', appInput );
localVue.use( Vuex );

describe( 'App', () => {
  let store;
  beforeEach( () => {
    store = new Vuex.Store( {
      state: {},
      getters: {}
    } );
  } );
  it( 'should init app container', () => {
    const wrapper = shallowMount( App, {
      store,
      localVue,
      attachToDocument: true
    } );
    expect( wrapper.find( 'div' ).attributes( 'id' ) ).toBe( 'app' );
  } );
} );
