
import control from '../../src/store/modules/control';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use( Vuex );

let store;
beforeEach( () => {
  store = new Vuex.Store( {
    state: {
      control1: 0,
      control2: 20,
      CONST_CONTROL: 1000,
      idOnEdit: null
    },
    mutations: {
      MUTATE_CONTROL1: control.mutations.MUTATE_CONTROL1,
      MUTATE_CONTROL2: control.mutations.MUTATE_CONTROL2,
      MUTATE_SUMM: control.mutations.MUTATE_SUMM,
      SET_EDIT: control.mutations.SET_EDIT
    },
    actions: {
      MUTATE_CONTROL1: control.actions.MUTATE_CONTROL1,
      MUTATE_CONTROL2: control.actions.MUTATE_CONTROL2,
      MUTATE_SUMM: control.actions.MUTATE_CONTROL2,
      SET_EDIT: control.actions.SET_EDIT
    }
  } );
} );

describe( 'modules/control.js getters', () => {
  it( 'should return control1', () => {
    expect( control.getters.GET_CONTROL1( store.state ) ).toBe( store.state.control1 );
  } );
  it( 'should return control2', () => {
    expect( control.getters.GET_CONTROL2( store.state ) ).toBe( store.state.control2 );
  } );
  it( 'should return CONST_CONTROL', () => {
    expect( control.getters.GET_CONTROL_CONST( store.state ) ).toBe( store.state.CONST_CONTROL );
  } );
  it( 'should return idOnEdit', () => {
    expect( control.getters.GET_ID_ON_EDIT( store.state ) ).toBe( store.state.idOnEdit );
  } );
} );
const PAYLOAD_NUM_CONTROL1 = 10;
const PAYLOAD_NUM_CONTROL2 = 20;
const ID_ON_EDIT = 'control1';
describe( 'modules/control.js mutations', () => {
  it( 'should set value to control1', () => {
    control.mutations.MUTATE_CONTROL1( store.state, PAYLOAD_NUM_CONTROL1 );
    expect( store.state.control1 ).toEqual( PAYLOAD_NUM_CONTROL1 );
  } );
  it( 'should set value to control2', () => {
    control.mutations.MUTATE_CONTROL2( store.state, PAYLOAD_NUM_CONTROL2 );
    expect( store.state.control2 ).toEqual( PAYLOAD_NUM_CONTROL2 );
  } );
  it( 'should set *2 to control1', () => {
    control.mutations.MUTATE_SUMM( store.state, PAYLOAD_NUM_CONTROL2 );
    expect( store.state.control1 ).toEqual( PAYLOAD_NUM_CONTROL2 * 2 );
  } );
  it( 'should set id of edited item', () => {
    control.mutations.SET_EDIT( store.state, ID_ON_EDIT );
    expect( store.state.idOnEdit ).toEqual( ID_ON_EDIT );
  } );
} );
describe( 'modules/control.js actions', () => {
  it( 'test MUTATE_CONTROL1 using a mock mutation but real store', () => {
    let commit = jest.fn();
    control.actions.MUTATE_CONTROL1( { commit }, PAYLOAD_NUM_CONTROL1 );
    expect( commit ).toHaveBeenCalledWith( 'MUTATE_CONTROL1', PAYLOAD_NUM_CONTROL1 );
  } );
  it( 'test MUTATE_CONTROL2 using a mock mutation but real store', () => {
    let commit = jest.fn();
    control.actions.MUTATE_CONTROL2( { commit }, PAYLOAD_NUM_CONTROL2 );
    expect( commit ).toHaveBeenCalledWith( 'MUTATE_CONTROL2', PAYLOAD_NUM_CONTROL2 );
  } );
  it( 'test MUTATE_SUMM using a mock mutation but real store', () => {
    let commit = jest.fn();
    control.actions.MUTATE_SUMM( { commit } );
    expect( commit ).toHaveBeenCalledWith( 'MUTATE_SUMM' );
  } );
  it( 'test SET_EDIT using a mock mutation but real store', () => {
    let commit = jest.fn();
    control.actions.SET_EDIT( { commit }, ID_ON_EDIT );
    expect( commit ).toHaveBeenCalledWith( 'SET_EDIT', ID_ON_EDIT );
  } );
} );
