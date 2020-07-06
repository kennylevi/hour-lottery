const state = {
  openNav: false
};

const getters = {
  openNav(state: any) {
    return state.openNav;
  }
};

const mutations = {
  template(state: any, type: string) {
    state.openNav = type;
  }
};

const actions = {
  openSidebar(context: any, openNav: string) {
    context.commit("template", openNav);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
