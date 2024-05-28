import ajax from './ajax';

class WSEAMServicesClient {

getAllFiles(edmsId,  config = {}) {
    return ajax.get(process.env.REACT_APP_EAM_SERVICES_URL + `/edms/fileNames?edmsid=${edmsId}`, config);
}

}

export default new WSEAMServicesClient();