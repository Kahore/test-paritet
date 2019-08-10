import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';

import control from '../../src/store/modules/control';
import store from '../../src/store/store';
const localVue = createLocalVue();
localVue.use( control );

let _store;
beforeEach( () => {
  _store = new Vuex.Store( {
    modules: {
      control
    }
  } );
} );

describe( 'store modules wrapper', () => {
  it( 'should return equal quantity of modules', () => {
    expect( store.modules ).toEqual( _store.modules );
  } );
} );
