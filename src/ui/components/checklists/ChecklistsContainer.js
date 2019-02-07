import {connect} from 'react-redux';
import Checklists from './Checklists';
import {handleError, showError, showSuccess} from '../../../actions/uiActions'

const mapStateToProps = (state) => {
    return {
        applicationData: state.application.applicationData
    }
};

const ChecklistsContainer = connect(mapStateToProps,
    {
        showSuccess,
        handleError
    }, null, {withRef: true}
)(Checklists);

export default ChecklistsContainer;
