declare const $: any;

export const errorHelper = (errorMessage: string, error: any | Array<string> | Array<object>): string => {
	let response = errorMessage;
	console.log(error);

	if (error !== null) {
		if (error.status === 400 || error.status === 422) {
			// TODO if bad request
			if (!error.data.errors || error.data.errors === null || typeof error.data.errors === 'string') {
				response = error.data.message + '<br>';
			} else {
				response = `<i>Validation Error</i><br>`;
				for (const err in error.data.errors) {
					if (error.data.errors.hasOwnProperty(err)) {
						error.data.errors[err].forEach((e: string) => {
							response += '. ' + e + '<br>';
						});
					}
				}
			}
		}
	}

	return response;
};

export const setObjectEmptyHelper = (formObject: any) => {
	for (const key in formObject) {
		formObject[key] = '';
	}
};

export const triggerModalOrOverlay = (action: string, modalId: string, type?: string) => {
	if (type === 'STATIC') {
		$(`#${modalId}`).modal({
			backdrop: 'static',
			keyboard: false,
		});
	}

	// else {
	//   $(`#${modalId}`).draggable();
	// }
	action === 'SHOW' ? $(`#${modalId}`).modal('show') : $(`#${modalId}`).modal('hide');
};
