import WS from './WS';
import WSCernServices from './WSCernServices';
import {GridRequest, GridType, transformResponse} from 'eam-rest-tools';

/**
 * Handles all calls to REST Api
 */
class WSChecklists {



    getWorkOrderActivities(number, config = {timeout: 60000}) {
        return WS._get('/activities/read/?workorder=' + number, config);
    }
    //
    //CHECKLIST
    //

    updateChecklistItem(checklistItem, taskPlanCode, config = {}) {
        return WS._put(`/checklists?taskPlanCode=${encodeURIComponent(taskPlanCode)}`, checklistItem, config);
    }

    createFolowUpWorkOrders(activity, config = {}) {
        return WS._post('/checklists/workorders', activity, config);
    }

    esignChecklist(checklistSignature, config = {}) {
        return WS._put('/checklists/esign', checklistSignature);
    }

    getChecklistDefinition(taskCode, checklistDefinitionCode, config = {}) {
        return WS._get(`/checklists/definition/${taskCode}/${checklistDefinitionCode}`, config);
    }

    autocompleteEntity = ({handlerParams, filter, operator = "BEGINS"}, config = {}) => {
        const gridRequest = new GridRequest("LVCFE", GridType.LOV)
            .addFilter("customfieldvalue", filter, "BEGINS");

        //gridRequest.addParam("param.fieldid", "0001");
        gridRequest.addParam("param.associatedrentity", "EVNT");
        gridRequest.addParam("param.lookuprentity", handlerParams[0]);
        gridRequest.addParam("parameter.propentity", handlerParams[0]);

        return WS.getGridData(gridRequest, config).then(response => transformResponse(response, {code: "customfieldvalue", desc: "description"}))
    };

    getTaskPlanInstructions = (code, revision, config = {}) => {
        return WSCernServices._get(`/taskplan/${code}/${revision}/instructions`, config);
    };
}

export default new WSChecklists();
