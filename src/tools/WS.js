// @flow
import { transformNativeResponse } from 'eam-rest-tools';
import ajax from './ajax';

/**
 * Handles all calls to REST Api
 */
class WS {

    //
    //
    //
    _get(url, config = {}) {
        return ajax.get(process.env.REACT_APP_BACKEND + url, config);
    }

    _post(url, data, config = {}) {
        return ajax.post(process.env.REACT_APP_BACKEND + url, data, config);
    }

    _put(url, data, config = {}) {
        return ajax.put(process.env.REACT_APP_BACKEND + url, data, config);
    }

    _delete(url, config = {}) {
        return ajax.delete(process.env.REACT_APP_BACKEND + url, config);
    }

    getGridDataNative(gridRequest, config = {}) {
        return this._post('/proxy/grids', gridRequest, config);
    }

    getGridData(gridRequest, config = {}) {
        return this.getGridDataNative(gridRequest, config)
            .then(transformNativeResponse)
            .catch((error) => {
                if (error?.type !== 'REQUEST_CANCELLED') {
                    console.error('Error when fetching / transforming', gridRequest, error);
                    return {body: {data: []}};
                }
                return Promise.reject(error);
            });
    }

}

export default new WS();
