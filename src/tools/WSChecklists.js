import WS from './WS';
import WSCernServices from './WSCernServices';

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

    updateChecklistItem(checklistItem, config = {}) {
        return WS._put('/checklists/', checklistItem, config);
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

    autocompleteEntity = (entityType, entityClass, filter, config = {}) => {
        return WS._get(`/autocomplete/entity?s=${filter}&entityType=${entityType}&entityClass=${entityClass}`, config);
    };

    getTaskPlanInstructions = (code, revision, config = {}) => {
        return WSCernServices._get(`/taskplan/${code}/${revision}/instructions`, config);
    };
}

export default new WSChecklists();