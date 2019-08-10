const state = () => ( {
  control1: 0,
  control2: 20,
  CONST_CONTROL: 1000,
  idOnEdit: null
} );
const getters = {
  GET_CONTROL1: state => {
    return Number( state.control1 );
  },
  GET_CONTROL2: state => {
    return Number( state.control2 );
  },
  GET_CONTROL_CONST: state => {
    return state.CONST_CONTROL;
  },
  GET_ID_ON_EDIT: state => {
    return state.idOnEdit;
  }
};
const mutations = {
  MUTATE_CONTROL1: ( state, payload ) => {
    state.control1 = payload;
  },
  MUTATE_CONTROL2: ( state, payload ) => {
    state.control2 = payload;
  },
  MUTATE_SUMM: ( state ) => {
    let _sum = state.control2 * 2;
    state.control1 = _sum;
  },
  SET_EDIT: ( state, payload ) => {
    state.idOnEdit = payload;
  }
};
const actions = {
  MUTATE_CONTROL1: ( { commit }, payload ) => {
    commit( 'MUTATE_CONTROL1', payload );
  },
  MUTATE_CONTROL2: ( { commit }, payload ) => {
    commit( 'MUTATE_CONTROL2', payload );
  },
  MUTATE_SUMM: ( { commit } ) => {
    commit( 'MUTATE_SUMM' );
  },
  SET_EDIT: ( { commit }, payload ) => {
    commit( 'SET_EDIT', payload );
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
