const state = {
    games: []
};

const getters = {
    games(state: any) {
        return state.games;
    }
};

const mutations = {
    addGame(state: any, game: any) {
        state.games.unshift(game);
    }
};

const actions = {
    addGame({commit}: any, game: any) {
        commit('addGame', game);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
