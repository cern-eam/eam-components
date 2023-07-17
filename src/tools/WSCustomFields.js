import WS from './WS';

/**
 * Handles all calls to REST Api
 */
class WSCustomFields {

    //
    //CUSTOM FIELDS SUPPORT
    //

    getCustomFieldsLookupValues(entity, inforClass, config = {}) {
        return WS._get('/customfields/lookupvalues?entity=' + entity + '&inforClass=' + inforClass, config);
    }

    autocompleteCustomFieldRENT = (entityCode, rentCodeValue, cfcode, filter, config = {}) => {
        console.log('kura', entityCode, rentCodeValue, cfcode)
        return WS._get(`/customfields/autocomplete/${entityCode}/${rentCodeValue}/${cfcode}/${filter}`, config);
    };

    getCustomFields(entity, classCode, config = {}) {
        return WS._get(`/customfields/data?entity=${entity}&inforClass=${classCode ? encodeURIComponent(classCode) : ""}`, config);
    }
}

export default new WSCustomFields();