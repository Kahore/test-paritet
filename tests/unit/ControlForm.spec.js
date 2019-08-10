import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ControlForm from '@/components/ControlForm.vue';
import vContainer from '@/vuetify';
import appInput from '@/components/ControlInput.vue';
const localVue = createLocalVue();

localVue.use( Vuex );
localVue.use( vContainer );
localVue.component( 'app-input', appInput );

describe( 'ControlForm.vue', () => {
  let store;
  let getters;
  let actions;
  let mutations;
  beforeEach( () => {
    getters = {
      GET_CONTROL1: () => 10,
      GET_CONTROL2: () => 20,
      GET_CONTROL_CONST: () => 1000
    };
    mutations = {
      MUTATE_SUMM: jest.fn(),
      MUTATE_CONTROL2: jest.fn()
    };
    actions = {
      MUTATE_SUMM: jest.fn(),
      MUTATE_CONTROL2: jest.fn()
    };
    store = new Vuex.Store( { getters, mutations, actions } );
  } );
  const PAYLOAD_NUM_CONTROL1 = 10;
  const PAYLOAD_NUM_CONTROL2 = 20;
  const PAYLOAD_CONST_CONTROL = 1000;

  it( 'renders a values from getters', () => {
    const wrapper = shallowMount( ControlForm, {
      store,
      localVue,
      attachToDocument: true
    } );
    expect( wrapper.vm.control1 ).toEqual( PAYLOAD_NUM_CONTROL1 );
    expect( wrapper.vm.control2 ).toEqual( PAYLOAD_NUM_CONTROL2 );
    expect( wrapper.vm.control_const ).toEqual( PAYLOAD_CONST_CONTROL );
    wrapper.destroy();
  } );
  it( 'should rise sumControl fn on click', () => {
    const wrapper = shallowMount( ControlForm, {
      store,
      localVue,
      attachToDocument: true
    } );
    let sumControl = jest.fn();
    wrapper.setMethods( { sumControl: sumControl } );
    wrapper.find( '#sumControl' ).trigger( 'click' );
    expect( sumControl ).toHaveBeenCalled( );
    wrapper.destroy();
  } );
  it( 'should rise setConst fn on click', () => {
    const wrapper = shallowMount( ControlForm, {
      store,
      localVue,
      attachToDocument: true
    } );
    let setConst = jest.fn();
    wrapper.setMethods( { setConst: setConst } );
    wrapper.find( '#setConst' ).trigger( 'click' );
    expect( setConst ).toHaveBeenCalled( );
    wrapper.destroy();
  } );
  it( 'should rise MUTATE_SUMM on click', () => {
    const wrapper = shallowMount( ControlForm, {
      store,
      localVue,
      attachToDocument: true
    } );
    wrapper.find( '#sumControl' ).trigger( 'click' );
    expect( actions.MUTATE_SUMM ).toBeCalled();
    wrapper.destroy();
  } );
  it( 'should rise MUTATE_CONTROL2 on click', () => {
    const wrapper = shallowMount( ControlForm, {
      store,
      localVue,
      attachToDocument: true
    } );
    wrapper.find( '#setConst' ).trigger( 'click' );
    expect( actions.MUTATE_CONTROL2 ).toBeCalled();
    wrapper.destroy();
  } );
} );
