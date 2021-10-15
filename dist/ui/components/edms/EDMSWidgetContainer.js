import { connect } from 'react-redux';
import EDMSWidget from './EDMSWidget';
import { handleError, showError, showSuccess } from '../../../actions/uiActions';

function mapStateToProps(state) {
  return {};
}

var EDMSWidgetContainer = connect(mapStateToProps, {
  showSuccess: showSuccess,
  showError: showError,
  handleError: handleError
})(EDMSWidget);
export default EDMSWidgetContainer; // upgrade npm dependencies
// deployment to the cloud