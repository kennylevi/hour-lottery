const state = {
    games: [],
    stakes: {} as any,
    playedGames: []
};

const getters = {
    games(state: any) {
        return state.games;
    },
    stakes(state: any) {
        return state.stakes;
    },
    playedGames(state: any) {
        return state.playedGames;
    }
};

const mutations = {
    addGame(state: any, game: any) {
        if (game) {
            state.games.unshift(game);
        } else {
            state.games = [];
        }
    },
    gameStakes(state: any, stakes: any) {
        state.stakes = stakes;
    },
    gamesPlayed(state: any, games: any) {
        console.log(games.data);
        state.playedGames = [...games.data];
    }
};

const actions = {
    addGame({commit}: any, game: any) {
        commit('addGame', game);
    },
    gameStakes({commit}: any, data: any) {
        commit('gameStakes', data);
    },
    gamesPlayed({commit}: any, games: any) {
        commit('gamesPlayed', games);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
