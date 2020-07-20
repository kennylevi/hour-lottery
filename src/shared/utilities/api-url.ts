export const API_URLS = {
    user: {
        account: {
            login: 'login',
            register: 'register'
        },
        profile: 'user/profile',
        users: 'users',
        transactions: 'user/transactions',
        wallet: 'user/wallet',
        fund_wallet: 'user/fund-wallet',
        playGame: 'user/play_games',
        ticketStatus: 'user/check_ticket_status',
        claimPrize: 'user/claim_prize'
    },
    games: {
        all: 'games',
        trending_games: 'games/trending_games',
        winning_list: 'games/winning_list',
        game_results: 'games/game_results'
    },
    misc: {
        validateCoupon: 'user/validate_coupon'
    }
};
