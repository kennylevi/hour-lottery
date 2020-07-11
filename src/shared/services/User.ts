import apiHandler from "./RequestHandler";
import { API_URLS } from "../utilities/api-url";

class User {
  login(payload: any): Promise<any> {
    return apiHandler.post(`${API_URLS.user.account.login}`, payload);
  }

  register(payload: any): Promise<any> {
    return apiHandler.post(`${API_URLS.user.account.register}`, payload);
  }

  fundWallet(payload: any): Promise<any> {
    return apiHandler.post(`${API_URLS.user.fund_wallet}`, payload);
  }

  playGame(payload: any) {
    return apiHandler.post(`${API_URLS.user.playGame}`, payload);
  }
}

// export
export const UserService = new User();
