// @flow
import ajax from './ajax';

/**
 * Handles all calls to REST Api
 */
const baseUrl = '/apis/cern-eam-services/rest';

class WSCernServices {

    //
    //
    //
    _get(url, config = {}) {
        return ajax.get(baseUrl + url, config);
    }

    _post(url, data, config = {}) {
        return ajax.post(baseUrl + url, data, config);
    }

    _put(url, data, config = {}) {
        return ajax.put(baseUrl + url, data, config);
    }

    _delete(url, config = {}) {
        return ajax.delete(baseUrl + url, config);
    }

}

export default new WSCernServices();