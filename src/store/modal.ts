const state = {
  modalType: ""
};

const getters = {
  modalType(state: any) {
    return state.modalType;
  }
};

const mutations = {
  modal(state: any, type: string) {
    state.modalType = type;
  }
};

const actions = {
  openModal(context: any, modalType: string) {
    console.log(modalType)
    context.commit("modal", modalType);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
