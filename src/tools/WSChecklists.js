import WS from './WS';

/**
 * Handles all calls to REST Api
 */
class WSChecklists {

    getWorkOrderActivities(number, config = {}) {
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
}

export default new WSChecklists();