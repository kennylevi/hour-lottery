import axios from "axios";
import {token} from '@/shared/services/Token';

export default class Interceptor {
  intercept() {
    axios.interceptors.request.use(
      function(config) {
        const loggedin = token.isTokenLogged();
        if (loggedin) {
          config.headers = {
            "Content-Type": "application/json",
            Accept: "application/json"
          };
          config.headers.Authorization = "Bearer "+token.getAuthUserToken();
          console.log(config);
          return config;
        } else {
          console.log("There is no token yet...");
          return config;
        }
      },
      function(err) {
        return Promise.reject(err);
      }
    );
  }
}
