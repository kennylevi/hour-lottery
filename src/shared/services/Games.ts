import apiHandler from "./RequestHandler";
import { API_URLS } from "../utilities/api-url";

class Games {
    getGames(): Promise<any> {
        return apiHandler.get(`${API_URLS.games.all}`);
    }

    register(payload: any): Promise<any> {
        return apiHandler.post(`${API_URLS.user.account.register}`, payload);
    }

    fundWallet(payload: any): Promise<any> {
        return apiHandler.post(`${API_URLS.user.fund_wallet}`, payload);
    }

    getWinningList(): Promise<any> {
        return apiHandler.get(`${API_URLS.games.winning_list}`);
    }

    getResults(): Promise<any> {
        return apiHandler.get(`${API_URLS.games.game_results}`);
    }

}

// export
export const GameService = new Games();
