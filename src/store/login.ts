const state = {
  loggedIn: false,
  user: {}
};

const getters = {
  loggedIn(state: any) {
    return state.loggedIn;
  },
  getUser(){
    return state.user
  }
};

const mutations = {
  loggedIn(state: any, type: string) {
    state.loggedIn = type;
  },
  
  setUser(state: any, user: any) {
    state.user = user;
  }
};

const actions = {
  loggedIn(context: any, loggedIn: string) {
    context.commit("loggedIn", loggedIn);
  },
  
  setUser(context: any, user: any) {
    context.commit("setUser", user);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
