// @flow
import ajax from './ajax';

const baseUrl = '/apis/cern-eam-services/rest';
const clientIdExchange = 'cern-eam-services';

class WSCernServices {

    //
    //
    //
    _get(url, config = {}) {
        return ajax.get(baseUrl + url, {...config, clientIdExchange});
    }

    _post(url, data, config = {}) {
        return ajax.post(baseUrl + url, data, {...config, clientIdExchange});
    }

    _put(url, data, config = {}) {
        return ajax.put(baseUrl + url, data, {...config, clientIdExchange});
    }

    _delete(url, config = {}) {
        return ajax.delete(baseUrl + url, {...config, clientIdExchange});
    }

}

export default new WSCernServices();