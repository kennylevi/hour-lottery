// import CryptoJS from "crypto-js";
import * as CryptoJS from "crypto-js";

export default class Encryption {
    static KEY = CryptoJS.enc.Hex.parse('19E6EC47825B1E1EEA1B97F23609EDC709E7D4A064898EF6B46EFB7403CAACEC7E58B7A2FA3BF6F0078FE7FF8CE6EF6B363A3F492C1E9862EF1BCAD0645243B9');
    // static KEY = 'U2FsdGVkX19LHO5WvYAftSALKstND6fksYlNY6dQdOnJhT0R61gnfInGTIoaMhOPtZB+d8L59FhFJr0O0JNzubvCaDe/LshmdppueZjQecbxEK6puoM8udp2r4BN+/2OAyBOZ+gug08YnPw4TUKOuvx5EfSTHI0iRLhpvA2W7ZJ36o2kEesK8/VNM95gbtKKM+/tiYBouCW59V1yKjxsnQMh684NXnicgdnUqXz/RgNZCMsQ/K3eDnYTqcHc0wUHiac1ja2vyNLhPH4ko4iH9HS7aWQ56OT+4vAJFplpr5FzlsOnTyjCsiyRVDiJ8DsqutpK/KpNMHywMGRwDoFOtqi6+Q+g7/HLumzPwFu1ThjmiNUXfoDvekFrX11KOQDILJL19UBlbKrQbWKQ4WDzzHFsdgG22gSk/nq6ZT1FB4nk6OIAz9u845127Y3fWI9RnfYB43ap+aq9aEfMF4PDo4Qi5MqL4yLWyD1tdyxO5ew89OW/sD3pFFGYfDG+V6olLOkuClXRSqzMBVW612kvNAyVjdRlf3UKG99bMpmRX9JBWk7PMNqflcSSY+ahAckQVsJNrl8lVNDWGrnNlyJSC6YbclBPzBhyn1O1B3/gUuMmHByDVEiVkSc0rFHmuOLJNNzwbrbPvPt3/PGViCAZWvwFdLKs+kshXlaM3Ka9gYKUvUkU8ScOm1oZWCQOBNYBFfVneHnegOjEryBmbfeCANCOsiyGmduMMLrS27csScB5Rp2KX2RMdSG/o1qstnjNaKNqGdGb+hUMnEFfRa2WPARlXqrDcLNyvr5Pss7DdvJ7teaYwTUKw9NN7LNxzC/GxNKfdZ/zmXbUcwFjaa1kQA==';


    /**
     * This is used to encrypt data to be saved to cache in front
     * @param data
     * @returns {any|PromiseLike<ArrayBuffer>}
     */
    static encrypt(data: any): any {
        if (!data) {
            return null;
        }
        return CryptoJS.AES.encrypt(JSON.stringify(data), Encryption.KEY);
    }

    /**
     * This is used to decrypt data encrypted in cache for usage in front.
     * @param data
     * @returns {any}
     */
    static decrypt(data: any) {
        if (!data) {
            return null;
        }
        const decryptData = CryptoJS.AES.decrypt(data.toString(), Encryption.KEY);
        return JSON.parse(decryptData.toString(CryptoJS.enc.Utf8));
    }

    /**
     * This is used to decode JSON WEB TOKEN
     * @param token
     * @returns {any}
     */
    static jwtDecrypt(token: any) {
        if (!token) {
            return null;
        }
        if (typeof (token) === 'object') {
            return token;
        }
        // console.log('thisToken =', token);
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        //  // console.log('thisTokenDe =', JSON.parse(window.atob(base64)));
        return JSON.parse(window.atob(base64));
    }


}