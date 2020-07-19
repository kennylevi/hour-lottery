const state = {
    games: [],
    stakes: {} as any
};

const getters = {
    games(state: any) {
        return state.games;
    },
    stakes(state: any) {
        return state.stakes;
    }
};

const mutations = {
    addGame(state: any, game: any) {
        state.games.unshift(game);
    },
    gameStakes(state: any, stakes: any) {
        console.log(stakes);
        state.stakes = stakes;
    }
};

const actions = {
    addGame({commit}: any, game: any) {
        commit('addGame', game);
    },
    gameStakes({commit}: any, data: any) {
        commit('gameStakes', data);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
