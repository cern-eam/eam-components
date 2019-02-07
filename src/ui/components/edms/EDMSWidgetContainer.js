import {connect} from 'react-redux'
import EDMSWidget from './EDMSWidget'
import {handleError, showError, showSuccess} from '../../../actions/uiActions';

function mapStateToProps(state) {
    return {};
}

const EDMSWidgetContainer = connect(mapStateToProps, {
        showSuccess,
        showError,
        handleError
    }, null, {withRef: true}
)(EDMSWidget);

export default EDMSWidgetContainer;