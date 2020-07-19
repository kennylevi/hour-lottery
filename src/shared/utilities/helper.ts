import moment from 'moment';

declare const $: any;

export const errorHelper = (
  errorMessage: string,
  error: any | Array<string> | Array<object>
): string => {
  let response = errorMessage;

  if (error) {
    if (error.status === 400 || error.status === 422) {
      // TODO if bad request
      if (
          !error.response.data.errors
      ) {
        response = error.response.data.message + "<br>";
      } else {
        response = `<i>Validation Error</i><br>`;
        for (const err in error.response.data.errors) {
          if (error.data.errors.hasOwnProperty(err)) {
            error.data.errors[err].forEach((e: string) => {
              response += ". " + e + "<br>";
            });
          }
        }
      }
    } else {
      response = error.response.data.message + "<br>";
    }
  }

  return response;
};

export const setObjectEmptyHelper = (formObject: any) => {
  for (const key in formObject) {
    formObject[key] = "";
  }
};

export const triggerModalOrOverlay = (
  action: string,
  modalId: string,
  type?: string
) => {
  if (type === "STATIC") {
    $(`#${modalId}`).modal({
      backdrop: "static",
      keyboard: false
    });
  }

  // else {
  //   $(`#${modalId}`).draggable();
  // }
  action === "SHOW"
    ? $(`#${modalId}`).modal("show")
    : $(`#${modalId}`).modal("hide");
};


export const dateFormatter = (date?: any) => {
  return moment(date)
};
