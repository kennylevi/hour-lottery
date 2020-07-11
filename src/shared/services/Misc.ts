import apiHandler from "./RequestHandler";
import { API_URLS } from "../utilities/api-url";

class Misc {
    validateCoupon(code: string): Promise<any> {
        return apiHandler.get(`${API_URLS.misc.validateCoupon}/${code}`);
    }
}

// export
export const MiscService = new Misc();
