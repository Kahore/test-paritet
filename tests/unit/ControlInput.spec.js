import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ControlInput from '@/components/ControlInput.vue';
const localVue = createLocalVue();

const propsData = {
  num: 40,
  inputId: 'control1'
};
localVue.use( Vuex );
describe( 'ControlInput.vue', () => {
  let store;
  //  let getters;
  let actions;
  let mutations;
  beforeEach( () => {
    // getters = {
    //   GET_CONTROL1: () => 10,
    //   GET_CONTROL2: () => 20,
    //   GET_CONTROL_CONST: () => 1000
    // };
    mutations = {
      MUTATE_CONTROL1: jest.fn(),
      MUTATE_CONTROL2: jest.fn()
    };
    actions = {
      MUTATE_CONTROL1: jest.fn(),
      MUTATE_CONTROL2: jest.fn()
    };
    store = new Vuex.Store( { mutations, actions } );
  } );
  it( 'should rise editNum on click', () => {
    const wrapper = shallowMount( ControlInput, {
      propsData,
      store,
      localVue,
      attachToDocument: true
    } );
    let editNum = jest.fn();
    wrapper.setMethods( { editNum: editNum } );
    wrapper.find( '#control1' ).trigger( 'click' );
    expect( editNum ).toBeCalled( );
    wrapper.destroy();
  } );
  it( 'should rise MUTATE_CONTROL1 on click', () => {
    const wrapper = shallowMount( ControlInput, {
      propsData,
      store,
      localVue,
      attachToDocument: true
    } );
    const childInput = wrapper.find( '#control1' );
    childInput.trigger( 'click' );
    childInput.trigger( 'keyup.enter' );

    expect( actions.MUTATE_CONTROL1 ).toBeCalled();
    wrapper.destroy();
  } );
  it( 'should rise MUTATE_CONTROL2 on click', () => {
    propsData.inputId = 'control2';
    const wrapper = shallowMount( ControlInput, {
      propsData,
      store,
      localVue,
      attachToDocument: true
    } );
    const childInput = wrapper.find( '#control2' );
    childInput.trigger( 'click' );
    childInput.trigger( 'keyup.enter' );

    expect( actions.MUTATE_CONTROL2 ).toBeCalled();
    wrapper.destroy();
  } );
  it( 'should init emit and id (diff prop)', () => {
    const wrapper = shallowMount( ControlInput, {
      propsData
    } );
    wrapper.vm.$emit( 'input', propsData.inputVal );
    expect( wrapper.emitted().input ).toBeTruthy();
    expect( wrapper.emitted().input[0] ).toEqual( [propsData.inputVal] );
    expect( wrapper.find( '[type=\'number\']' ).attributes( 'id' ) ).toBe( propsData.inputId );
    expect( typeof wrapper.vm.inputVal ).toBe( 'number' );

    wrapper.destroy();
  } );
  it( 'should reset tmpId on editDone', () => {
    propsData.inputId = 'control1';
    const wrapper = shallowMount( ControlInput, {
      propsData,
      store,
      localVue,
      attachToDocument: true
    } );
    const childInput = wrapper.find( '#control1' );
    childInput.trigger( 'click' );
    childInput.trigger( 'keyup.enter' );
    expect( wrapper.vm.tmpId ).toBe( null );
    wrapper.destroy();
  } );
  it( 'should rise editCancel on 27(esc) key in edit mode ', () => {
    const wrapper = shallowMount( ControlInput, {
      propsData,
      store,
      localVue,
      attachToDocument: true
    } );
    let editCancel = jest.fn();
    let editNum = jest.fn();
    wrapper.setMethods( { editNum: editNum, editCancel: editCancel } );
    wrapper.find( '#control1' ).trigger( 'click' );
    expect( editNum ).toHaveBeenCalled();

    const childInput = wrapper.find( '#control1' );
    childInput.trigger( 'click' );
    childInput.trigger( 'keyup.esc' );
    expect( editCancel ).toHaveBeenCalled();
    wrapper.destroy();
  } );
  it( 'should reset data on esc click ', () => {
    const wrapper = shallowMount( ControlInput, {
      propsData,
      store,
      localVue,
      attachToDocument: true
    } );
    wrapper.setData( {
      tmpNum: propsData.num,
      tmpId: propsData.inputId
    } );
    const childInput = wrapper.find( '#control1' );
    childInput.trigger( 'click' );
    childInput.trigger( 'keyup.esc' );
    expect( Number( wrapper.vm.tmpNum ) ).toEqual( propsData.num );
    expect( wrapper.vm.tmpId ).toBe( null );
    wrapper.destroy();
  } );
} );
