import Vue from "vue";
import { errorHelper } from "../utilities/helper";

class Alert {
  success(text: string, title: string, duration?: any, speed?: any) {
    Vue.notify({
      group: "user",
      title,
      text,
      type: "success"
    });
  }

  error(text: string, err: any, title: string, duration?: any, speed?: any) {
    const response = errorHelper(text, err);
    Vue.notify({
      group: "user",
      title,
      text: response,
      type: "error"
    });
  }

  warning(text: string, title: string, duration?: any, speed?: any) {
    Vue.notify({
      group: "user",
      title,
      text,
      type: "warn"
    });
  }

  info(text: string, title: string, duration?: any, speed?: any) {
    Vue.notify({
      group: "user",
      title,
      text,
      type: "info"
    });
  }
}

export const NotificationService = new Alert();
