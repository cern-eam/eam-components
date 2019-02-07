import {connect} from 'react-redux'
import Comments from './Comments'
import {handleError, showError, showSuccess} from '../../../actions/uiActions'
import PropTypes from 'prop-types';

function mapStateToProps() {
    return {};
}

const CommentsContainer = connect(mapStateToProps, {
        showSuccess,
        showError,
        handleError
    }, null, {withRef: true}
)(Comments);

CommentsContainer.propTypes = {
    entityCode: PropTypes.string,
    entityKeyCode: PropTypes.string,
    userDesc: PropTypes.string.isRequired,
    onCommentAdded: PropTypes.func,
    onCommentUpdated: PropTypes.func,
    title: PropTypes.string,
    readComments: PropTypes.func,
    updateComment: PropTypes.func,
    createComment: PropTypes.func
};

export default CommentsContainer;