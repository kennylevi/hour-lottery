import { CUSTOM_CONSTANTS } from "../utilities/constants";
import { Cookie, Session } from "../utilities/Cache";

class Token {
  isTokenLogged = () => {
    return !!this.getAuthUser();
  };

  /**
   * setAuthUser
   */
  setAuthUser = (user: any) => {
    // Cookies.
    // Cookie.set(CUSTOM_CONSTANTS.APP_VARIABLE, user, {
    //   expires: 1
    // });
    Session.set(CUSTOM_CONSTANTS.APP_VARIABLE, user);
  };

  /**
   * getAuthUser
   */
  getAuthUser = () => {
    return Session.get(CUSTOM_CONSTANTS.APP_VARIABLE);
  };

  getAuthUserToken = () => {
    // return Cookie.getToken().accessToken || Cookie.getToken();
    return Session.get(CUSTOM_CONSTANTS.APP_VARIABLE).accessToken || Session.get(CUSTOM_CONSTANTS.APP_VARIABLE);
    // return Cookie.getToken();
  };

  removeAuthUser = () => {
    // Cookie.remove(CUSTOM_CONSTANTS.APP_VARIABLE);
    Session.remove(CUSTOM_CONSTANTS.APP_VARIABLE);
  };

  /**
   * removeLogUser
   */
  removeLoggedUser = () => {
    this.removeAuthUser();
    Session.clear();
    localStorage.clear();
  };

  logout = () => {
    this.removeAuthUser();
    Session.clear();
    localStorage.clear();
  };
}

export const token = new Token();
